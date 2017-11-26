import * as resemble from "node-resemble-js";
import * as fs from "fs";
import * as mkdirp from "mkdirp";
import * as path from "path";

function screenshotEquals(filename:string, tolerance?:number) {
    var screenshotPath = 'screenshots/',
        baselinePath = screenshotPath + 'baseline/' + filename,
        resultPath = screenshotPath + 'results/' + filename,
        diffPath = screenshotPath + 'diffs/' + filename;

    this.message = 'Unexpected compareScreenshot error.';
    this.expected = tolerance || 0;   // misMatchPercentage tolerance default 0%

    this.command = function (callback) {

        mkdirp(path.dirname(baselinePath), function (err) {//create folder if not exist

            if (err) {
                console.error(err);
            }

            // create new baseline photo if none exists
            if (!fs.existsSync(baselinePath)) {
                console.warn('WARNING: Baseline Photo does NOT exist.');
                console.log('Creating Baseline Photo from Result: ' + baselinePath);
                fs.writeFileSync(baselinePath, fs.readFileSync(resultPath));
            }

            resemble(baselinePath)
                .compareTo(resultPath)
                .ignoreAntialiasing()
                .onComplete(callback);  // calls this.value with the result

        });


        return this;
    };

    this.value = function (result) {

        //save difference if any
        if (parseFloat(result.misMatchPercentage) !== 0) {
            mkdirp(path.dirname(diffPath), function (err) {
                if (err) {
                    console.error(err);
                }
                result.getDiffImage().pack().pipe(fs.createWriteStream(diffPath));
            });
        }
        return parseFloat(result.misMatchPercentage);  // value this.pass is called with
    };

    this.pass = function (value) {
        var pass = value <= this.expected;
        if (pass) {
            this.message = 'Screenshots Matched for ' + filename +
                ' with a tolerance of ' + this.expected + '%.';
        } else {
            this.message = 'Screenshots Match Failed for ' + filename +
                ' with a tolerance of ' + this.expected + '%.\n' +
                '   Screenshots at:\n' +
                '    Baseline: ' + baselinePath + '\n' +
                '    Result: ' + resultPath + '\n' +
                '    Diff: ' + diffPath + '\n' +
                '   Open ' + diffPath + ' to see how the screenshot has changed.\n' +
                '   If the Result Screenshot is correct you can use it to update the Baseline Screenshot and re-run your test:\n' +
                '    cp ' + resultPath + ' ' + baselinePath;
        }
        return pass;
    };
};

exports.assertion = screenshotEquals;