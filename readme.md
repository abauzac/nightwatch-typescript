# Description

Simple boilerplate for nightwatch using typescript (and definitions). This configuration does not make use of Selenium. Only chromedriver is used so you don't need to install JavaJDK. 

# Install

Assuming you have node, typescript installed globally :
* `npm update`

# How to launch  

- Launch chromedriver : `npm run selenium`
- Launch nightwatch : `npm run test`
- For typescript auto compile : `npm run watch`

# Notes

Here we are using a fork a resemble-js : https://www.npmjs.com/package/node-resemble-js
This fork doesn't make use of node-canvas (which has a lot of requirements depending on system host)
The goal of this repo is to have the minimum viable project with node, nightwatch, typescript to do visual regression tests

# Credit

* Patrick Braun & Richard Flosi (compareScreenshot : https://gist.github.com/richard-flosi/8a5d2e10b6609ab9d06a )