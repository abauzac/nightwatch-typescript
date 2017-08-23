# Description

Simple boilerplate for nightwatch using typescript (and definitions). This configuration does not make use of Selenium. Only chromedriver is used so you don't need to install JavaJDK. 

# Install

Assuming you have node, typescript and typings installed globally :
* `npm update`
* `typings install`

# How to launch  

- Launch chromedriver : `npm run selenium`
- Launch nightwatch : `npm run test`
- For typescript auto compile : `npm run watch`

# Notes

After installing types, rename module for resemblejs : "node-resemble-js"

# Credit

* Patrick Braun & Richard Flosi (compareScreenshot : https://gist.github.com/richard-flosi/8a5d2e10b6609ab9d06a )