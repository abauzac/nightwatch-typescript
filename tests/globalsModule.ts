
import * as chromedriver from "chromedriver";
export = {
    // this controls whether to abort the test execution when an assertion failed and skip the rest
    // it's being used in waitFor commands and expect assertions
    //abortOnAssertionFailure: true,


    before: function (done) {
        chromedriver.start();

        done();
    },

    after: function (done) {
        chromedriver.stop();

        done();
    },
    /**
     * After all the tests are run, evaluate if there were errors and exit appropriately.
     *
     * If there were failures or errors, exit 1, else exit 0.
     *
     */
    reporter: function (results) {
        // console.log("failed:" + results.failed)
        // console.log("error:" + results.error)
        // if ((typeof (results.failed) === 'undefined' || results.failed === 0) &&
        //     (typeof (results.error) === 'undefined' || results.error === 0)) {
        //     process.exit(0);
        // } else {
        //     process.exit(1);
        // }
    }
};