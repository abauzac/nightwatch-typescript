import NB = require("nightwatch");

export = {

    'Demo admin Wordpress': function (client: NB.NightWatchClient) {
        client
            .url('https://demos1.softaculous.com/WordPress/wp-login.php')
            .waitForElementVisible('body', 3000)
            .assert.visible('#user_login')
            .assert.visible('#user_pass')
            .setValue('#user_login', 'admin')
            .setValue('#user_pass', 'pass')
            .submitForm("#loginform")
            .pause(2000)
            .waitForElementVisible("body", 3000)
            .getTitle(function (this: NB.NightWatchClient, title: string) {
                this.assert.equal(typeof title, 'string', "Title page is a string");
                this.assert.ok(title.indexOf("Dashboard") !== -1, "Title page should contains 'Dashboard'")
            })
            .pause(3000)
            .compareScreenshot("testwordpress.png", 5)
            .end(); // close browser
    }
};