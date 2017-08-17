"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = function (callback) {
    return this
        .url('https://demos1.softaculous.com/WordPress/wp-login.php')
        .waitForElementVisible('body', 3000)
        .setValue('#user_login', 'admin')
        .setValue('#user_pass', 'pass')
        .submitForm("#loginform")
        .pause(2000)
        .waitForElementVisible("body", 3000);
};
