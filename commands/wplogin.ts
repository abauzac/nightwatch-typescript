import { NightwatchBrowser } from "nightwatch";

exports.command = function (this: NightwatchBrowser,  callback: Function){
    return this
            .url('https://s1.demo.opensourcecms.com/wordpress/wp-login.php')
            .waitForElementVisible('body', 3000)
            .setValue('#user_login', 'opensourcecms')
            .setValue('#user_pass', 'opensourcecms')
            .submitForm("#loginform")
            .pause(2000)
            .waitForElementVisible("body", 3000)
}