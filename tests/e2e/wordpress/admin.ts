import { NightwatchBrowser } from 'nightwatch';

export = {

    'Demo admin Wordpress': function (client: NightwatchBrowser) {
        client
            .url('https://s1.demo.opensourcecms.com/wordpress/wp-login.php')
            .waitForElementVisible('body', 3000)
            .waitForElementVisible('#user_login', 10000) // it's a redirect which takes some time...
            .assert.visible('#user_pass')
            .setValue('#user_login', 'opensourcecms')
            .setValue('#user_pass', 'opensourcecms')
            .submitForm("#loginform")
            .pause(2000)
            .waitForElementVisible("body", 3000)
            .getTitle(function (this: NightwatchBrowser, title) {
                this.assert.equal(typeof title, 'string', "Title page is a string");
                this.assert.ok(title.indexOf("Dashboard") !== -1, "Title page should contains 'Dashboard'")
            })
            .pause(1000)
            .end();
    },

    'Demo admin Wordpress with command': function (client: NightwatchBrowser) {
        client
            .wplogin() // nightwatch command from /commands/wplogin.ts
            .getTitle(function (this: NightwatchBrowser, title) {
                this.assert.equal(typeof title, 'string', "Title page is a string"); 
                this.assert.ok(title.indexOf("Dashboard") !== -1, "Title page should contains 'Dashboard'")
            })
            .pause(1000)
            .compareScreenshot("testwordpress.png", 5)
            .end();
    }
};