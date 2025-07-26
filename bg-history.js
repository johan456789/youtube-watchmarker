import {
  createResponseCallback,
  bgObject,
  AsyncSeries
} from "./utils.js";
import { Database } from "./bg-database.js";

export const History = {
  init: function (objRequest, funcResponse) {
    console.log("History.init called");
    AsyncSeries.run(
      {
        objMessaging: bgObject.messaging('history', { 'historySynchronize': History.synchronize }),
      },
      createResponseCallback(() => { }, funcResponse),
    );
  },

  synchronize: function (objRequest, funcResponse, funcProgress) {
    AsyncSeries.run(
      {
        objVideos: function (objArgs, funcCallback) {
          chrome.history.search(
            {
              text: "youtube.com",
              startTime: objRequest.intTimestamp,
              maxResults: 1000000,
            },
            function (objResults) {
              let objVideos = [];

              for (let objResult of objResults) {
                if (
                  objResult.url.indexOf("https://www.youtube.com/watch?v=") !==
                  0 &&
                  objResult.url.indexOf("https://www.youtube.com/shorts/") !==
                  0 &&
                  objResult.url.indexOf("https://m.youtube.com/watch?v=") !== 0
                ) {
                  continue;
                } else if (
                  objResult.title === undefined ||
                  objResult.title === null
                ) {
                  continue;
                }

                if (objResult.title.slice(-10) === " - YouTube") {
                  objResult.title = objResult.title.slice(0, -10);
                }

                objVideos.push({
                  strIdent: objResult.url.split("&")[0].slice(-11),
                  intTimestamp: objResult.lastVisitTime,
                  strTitle: objResult.title,
                  intCount: objResult.visitCount,
                });
              }

              return funcCallback(objVideos);
            },
          );
        },
        objDatabase: bgObject.database(),
        objVideo: bgObject.video(),
        objGet: bgObject.get(funcProgress),
        objPut: bgObject.put(),
        "objVideo-Next": bgObject.videoNext(),
        objCount: bgObject.count(),
        objTime: bgObject.time("extensions.Youwatch.History.intTimestamp"),
      },
      createResponseCallback(() => { }, funcResponse),
    );
  },
};