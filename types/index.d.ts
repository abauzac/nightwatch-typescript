import {   NightwatchAssertions, NightwatchBrowser } from "nightwatch";

// merge interfaces with nightwatch types

interface NightwatchCustomAssertions  {
    compareScreenshot(this: NightwatchBrowser, filename: string, expected: number, callback: Function): NightwatchBrowser;
}

interface NightwatchCustomCommands  {
    wplogin(this: NightwatchBrowser, callback?: Function): NightwatchBrowser;

    compareScreenshot(this: NightwatchBrowser, filename: string, expected?: number, callback?: Function)
}
