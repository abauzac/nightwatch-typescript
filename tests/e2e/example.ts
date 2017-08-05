import NB = require("nightwatch");
import * as chromedriver from "chromedriver";

export = {

    'Demo test Google': function (client: NB.NightWatchClient) {
        client
            .url('https://www.google.com')
            .waitForElementVisible('body', 3000)
            .assert.title('Google')
            .assert.visible('input[type=text]')
            .setValue('input[type=text]', 'rembrandt van rijn')
            .waitForElementVisible('button[name=btnG]', 1000)
            .click('button[name=btnG]')
            .pause(1000)
            .assert.containsText('ol#rso li:first-child',
            'Rembrandt - Wikipedia')
            .end();
    }
};