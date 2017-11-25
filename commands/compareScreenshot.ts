import { NightwatchBrowser } from "nightwatch";

function compareScreenshot (this: NightwatchBrowser, filename:string, expected:number, callback:Function) {
    var self = this,
        screenshotPath = 'screenshots/',
        resultPath = screenshotPath + 'results/' + filename;

    self.saveScreenshot(resultPath, function () {
        self.assert.compareScreenshot(filename, expected, function (result) {
            if (typeof callback === 'function') {
                callback.call(self, result);
            }
        });
    });

    return this; // allows the command to be chained.
};

exports.command = compareScreenshot;