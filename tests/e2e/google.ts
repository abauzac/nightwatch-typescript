import NB = require("nightwatch");

export = {

    'Demo test Google': function (client: NB.NightWatchClient) {
        client
            .url('https://www.google.com')
            .waitForElementVisible('body', 3000)
            .assert.title('Google')
            .assert.visible('input[type=text]')
            .setValue('input[type=text]', 'rembrandt van rijn')
            .setValue('input[type=text]', client.Keys.ENTER) // press Enter to search
            .pause(1000)
            .assert.containsText('#rso a:first-child',
            'Rembrandt — Wikipédia')
            .end();
    }
};