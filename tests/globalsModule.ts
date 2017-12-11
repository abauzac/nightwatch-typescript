
import * as chromedriver from 'chromedriver';
import { NightwatchBrowser } from 'nightwatch';


export = {

    // this controls whether to abort the test execution when an assertion failed and skip the rest
    // it's being used in waitFor commands and expect assertions
    abortOnAssertionFailure: false,

    // this will overwrite the default polling interval (currently 500ms) for waitFor commands
    // and expect assertions that use retry
    waitForConditionPollInterval: 300,

    // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
    // expect assertions
    waitForConditionTimeout: 5000,

    // this will cause waitFor commands on elements to throw an error if multiple
    // elements are found using the given locate strategy and selector
    throwOnMultipleElementsReturned: true,

    // controls the timeout time for async hooks. Expects the done() callback to be invoked within this time
    // or an error is thrown
    asyncHookTimeout: 10000,


    before: function (done) {
        console.log("before...")
        chromedriver.start();
        done();
    },

    after: function (done) {
        chromedriver.stop();

        done();
        console.log("after...")
    },


    beforeEach: function (browser: NightwatchBrowser, done: Function) {
        done();
        console.log("before each...")
    },

    afterEach: function (browser: NightwatchBrowser, done: Function) {
        done();
        console.log("after each...")
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