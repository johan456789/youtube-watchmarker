import { Node } from "./utils.js";

export const Database = {
  objDatabase: null,

  init: function (objRequest, funcResponse) {
    Node.series(
      {
        objOpen: function (objArgs, funcCallback) {
          let objOpen = window.indexedDB.open("Database", 401);

          objOpen.onupgradeneeded = function () {
            let objStore = null;

            if (
              objOpen.result.objectStoreNames.contains("storeDatabase") === true
            ) {
              objStore = objOpen.transaction.objectStore("storeDatabase");
            } else if (
              objOpen.result.objectStoreNames.contains("storeDatabase") ===
              false
            ) {
              objStore = objOpen.result.createObjectStore("storeDatabase", {
                keyPath: "strIdent",
              });
            }

            if (objStore.indexNames.contains("strIdent") === false) {
              objStore.createIndex("strIdent", "strIdent", {
                unique: true,
              });
            }

            if (objStore.indexNames.contains("intTimestamp") === false) {
              objStore.createIndex("intTimestamp", "intTimestamp", {
                unique: false,
              });
            }

            if (objStore.indexNames.contains("longTimestamp") === true) {
              objStore.deleteIndex("longTimestamp"); // legacy
            }
          };

          objOpen.onerror = function () {
            Database.objDatabase = null;

            return funcCallback(null);
          };

          objOpen.onsuccess = function () {
            Database.objDatabase = objOpen.result;

            return funcCallback({});
          };
        },
        objLegacy: function (objArgs, funcCallback) {
          let objStore = Database.objDatabase
            .transaction(["storeDatabase"], "readwrite")
            .objectStore("storeDatabase");

          let objQuery = objStore.openCursor();

          objQuery.onsuccess = function () {
            if (objQuery.result === undefined || objQuery.result === null) {
              return funcCallback({});
            }

            if (objQuery.result.value.intTimestamp === undefined) {
              objStore.put({
                strIdent: objQuery.result.value.strIdent,
                intTimestamp: objQuery.result.value.longTimestamp,
                strTitle: objQuery.result.value.strTitle,
                intCount: objQuery.result.value.intCount,
              });
            }

            objQuery.result.continue();
          };
        },
        objMessaging: function (objArgs, funcCallback) {
          chrome.runtime.onConnect.addListener(function (objPort) {
            if (objPort.name === "database") {
              objPort.onMessage.addListener(function (objData) {
                if (objData.strMessage === "databaseExport") {
                  Database.export(
                    objData.objRequest,
                    function (objResponse) {
                      objPort.postMessage({
                        strMessage: "databaseExport",
                        objResponse: objResponse,
                      });
                    },
                    function (objResponse) {
                      objPort.postMessage({
                        strMessage: "databaseExport-progress",
                        objResponse: objResponse,
                      });
                    },
                  );
                } else if (objData.strMessage === "databaseImport") {
                  Database.import(
                    objData.objRequest,
                    function (objResponse) {
                      objPort.postMessage({
                        strMessage: "databaseImport",
                        objResponse: objResponse,
                      });
                    },
                    function (objResponse) {
                      objPort.postMessage({
                        strMessage: "databaseImport-progress",
                        objResponse: objResponse,
                      });
                    },
                  );
                } else if (objData.strMessage === "databaseReset") {
                  Database.reset(objData.objRequest, function (objResponse) {
                    objPort.postMessage({
                      strMessage: "databaseReset",
                      objResponse: objResponse,
                    });
                  });
                }
              });
            }
          });

          return funcCallback({});
        },
      },
      function (objArgs) {
        if (objArgs === null) {
          funcResponse(null);
        } else if (objArgs !== null) {
          funcResponse({});
        }
      },
    );
  },

  export: function (objRequest, funcResponse, funcProgress) {
    Node.series(
      {
        objDatabase: function (objArgs, funcCallback) {
          return funcCallback(
            Database.objDatabase
              .transaction(["storeDatabase"], "readonly")
              .objectStore("storeDatabase"),
          );
        },
        objGet: function (objArgs, funcCallback) {
          let objQuery = objArgs.objDatabase.openCursor();

          objQuery.results = [];

          objQuery.onsuccess = function () {
            if (objQuery.result === undefined || objQuery.result === null) {
              return funcCallback(objQuery.results);
            }

            funcProgress({
              strProgress: "collected " + objQuery.results.length + " videos",
            });

            objQuery.results.push({
              strIdent: objQuery.result.value.strIdent,
              intTimestamp: objQuery.result.value.intTimestamp,
              strTitle: objQuery.result.value.strTitle,
              intCount: objQuery.result.value.intCount,
            });

            objQuery.result.continue();
          };
        },
        objDownload: function (objArgs, funcCallback) {
          chrome.downloads.download({
            url: URL.createObjectURL(
              new Blob(
                [
                  btoa(
                    unescape(
                      encodeURIComponent(JSON.stringify(objArgs.objGet)),
                    ),
                  ),
                ],
                {
                  type: "application/octet-stream",
                },
              ),
            ),
            filename:
              new Date().getFullYear() +
              "." +
              ("0" + (new Date().getMonth() + 1)).slice(-2) +
              "." +
              ("0" + new Date().getDate()).slice(-2) +
              ".database",
            saveAs: true,
          });

          return funcCallback({});
        },
      },
      function (objArgs) {
        if (objArgs === null) {
          funcResponse(null);
        } else if (objArgs !== null) {
          funcResponse({});
        }
      },
    );
  },

  import: function (objRequest, funcResponse, funcProgress) {
    Node.series(
      {
        objVideos: function (objArgs, funcCallback) {
          return funcCallback(objRequest.objVideos);
        },
        objDatabase: function (objArgs, funcCallback) {
          return funcCallback(
            Database.objDatabase
              .transaction(["storeDatabase"], "readwrite")
              .objectStore("storeDatabase"),
          );
        },
        objVideo: function (objArgs, funcCallback) {
          if (objArgs.hasOwnProperty("intVideo") === false) {
            objArgs.intVideo = 0;
          }

          if (objArgs.intVideo >= objArgs.objVideos.length) {
            return funcCallback({}, "objVideo-Next");
          }

          return funcCallback(objArgs.objVideos[objArgs.intVideo]);
        },
        objGet: function (objArgs, funcCallback) {
          let objQuery = objArgs.objDatabase
            .index("strIdent")
            .get(objArgs.objVideo.strIdent);

          objQuery.onsuccess = function () {
            if (objArgs.intNew === undefined) {
              objArgs.intNew = 0;
              objArgs.intExisting = 0;
            }

            funcProgress({
              strProgress:
                "imported " +
                (objArgs.intNew + objArgs.intExisting) +
                " videos - " +
                objArgs.intNew +
                " were new",
            });

            if (objArgs.objVideo.intTimestamp === undefined) {
              objArgs.objVideo.intTimestamp = objArgs.objVideo.longTimestamp; // legacy
            }

            if (objQuery.result === undefined || objQuery.result === null) {
              objArgs.intNew += 1;

              return funcCallback({
                strIdent: objArgs.objVideo.strIdent,
                intTimestamp:
                  objArgs.objVideo.intTimestamp || new Date().getTime(),
                strTitle: objArgs.objVideo.strTitle || "",
                intCount: objArgs.objVideo.intCount || 1,
              });
            } else if (
              objQuery.result !== undefined &&
              objQuery.result !== null
            ) {
              objArgs.intExisting += 1;

              return funcCallback({
                strIdent: objQuery.result.strIdent,
                intTimestamp:
                  Math.max(
                    objQuery.result.intTimestamp,
                    objArgs.objVideo.intTimestamp,
                  ) || new Date().getTime(),
                strTitle:
                  objQuery.result.strTitle || objArgs.objVideo.strTitle || "",
                intCount:
                  Math.max(
                    objQuery.result.intCount,
                    objArgs.objVideo.intCount,
                  ) || 1,
              });
            }
          };
        },
        objPut: function (objArgs, funcCallback) {
          if (objArgs.objGet.strIdent.trim() === "") {
            return funcCallback({});
          } else if (objArgs.objGet.strTitle.trim() === "") {
            return funcCallback({});
          }

          let objQuery = objArgs.objDatabase.put(objArgs.objGet);

          objQuery.onsuccess = function () {
            return funcCallback({});
          };
        },
        "objVideo-Next": function (objArgs, funcCallback) {
          objArgs.intVideo += 1;

          if (objArgs.intVideo < objArgs.objVideos.length) {
            return funcCallback({}, "objVideo");
          }

          objArgs.intVideo = 0;

          return funcCallback({});
        },
        objCount: function (objArgs, funcCallback) {
          let objQuery = objArgs.objDatabase.count();

          objQuery.onsuccess = function () {
            window.localStorage.setItem(
              "extensions.Youwatch.Database.intSize",
              String(objQuery.result),
            );

            return funcCallback({});
          };
        },
      },
      function (objArgs) {
        if (objArgs === null) {
          funcResponse(null);
        } else if (objArgs !== null) {
          funcResponse({});
        }
      },
    );
  },

  reset: function (objRequest, funcResponse) {
    Node.series(
      {
        objDatabase: function (objArgs, funcCallback) {
          return funcCallback(
            Database.objDatabase
              .transaction(["storeDatabase"], "readwrite")
              .objectStore("storeDatabase"),
          );
        },
        objClear: function (objArgs, funcCallback) {
          let objQuery = objArgs.objDatabase.clear();

          objQuery.onsuccess = function () {
            return funcCallback({});
          };
        },
        objCount: function (objArgs, funcCallback) {
          let objQuery = objArgs.objDatabase.count();

          objQuery.onsuccess = function () {
            window.localStorage.setItem(
              "extensions.Youwatch.Database.intSize",
              String(objQuery.result),
            );

            return funcCallback({});
          };
        },
      },
      function (objArgs) {
        if (objArgs === null) {
          funcResponse(null);
        } else if (objArgs !== null) {
          funcResponse({});
        }
      },
    );
  },
};