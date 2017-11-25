import {  NightwatchAPI, NightwatchAssertions } from "nightwatch";

// merge interfaces with nightwatch types

export interface NightwatchAssertionsCustom extends NightwatchAssertions {
    compareScreenshot(this: NightwatchAPI, filename: string, expected: number, callback: Function);
}

export interface NightwatchAPICustom extends NightwatchAPI {
    wplogin(this: NightwatchAPI, callback?: Function):this;

    compareScreenshot(this: NightwatchAPICustom, filename: string, expected?: number, callback?: Function)

    assert: NightwatchAssertionsCustom;
}
