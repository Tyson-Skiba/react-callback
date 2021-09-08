# React Callback

[![Bundle size](https://badgen.net/bundlephobia/min/react-callback)](https://www.npmjs.com/package/react-callback)
[![Dependences](https://status.david-dm.org/gh/Tyson-Skiba/react-callback.svg)](https://github.com/Tyson-Skiba/react-callback/blob/main/package.json)
[![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/Tyson-Skiba/react-callback)](https://snyk.io/)
[![Issues](https://img.shields.io/github/issues/Tyson-Skiba/react-callback)](https://github.com/Tyson-Skiba/react-callback/issues)
[![Support](https://img.shields.io/badge/react-%3E%3D16.3-brightgreen)](https://img.shields.io/badge/react-%3E%3D16.3-brightgreen)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)


<p align="center">

    <a href="#backers" alt="Dependencies">
        <img src="" /></a>
    <a href="#sponsors" alt="Sponsors on Open Collective">
        <img src="https://img.shields.io/opencollective/sponsors/shields" /></a>
    <a href="https://github.com/badges/shields/pulse" alt="Activity">
        <img src="https://img.shields.io/github/commit-activity/m/badges/shields" /></a>
    <a href="https://circleci.com/gh/badges/shields/tree/master">
        <img src="https://img.shields.io/circleci/project/github/badges/shields/master" alt="build status"></a>
    <a href="https://circleci.com/gh/badges/daily-tests">
        <img src="https://img.shields.io/circleci/project/github/badges/daily-tests?label=service%20tests"
            alt="service-test status"></a>
    <a href="https://coveralls.io/github/badges/shields">
        <img src="https://img.shields.io/coveralls/github/badges/shields"
            alt="coverage"></a>
    <a href="https://lgtm.com/projects/g/badges/shields/alerts/">
        <img src="https://img.shields.io/lgtm/alerts/g/badges/shields"
            alt="Total alerts"/></a>
    <a href="https://discord.gg/HjJCwm5">
        <img src="https://img.shields.io/discord/308323056592486420?logo=discord"
            alt="chat on Discord"></a>
    <a href="https://twitter.com/intent/follow?screen_name=shields_io">
        <img src="https://img.shields.io/twitter/follow/shields_io?style=social&logo=twitter"
            alt="follow on Twitter"></a>
</p>

This little npm package is designed to help make updating from older version of React to version 18 easy.

## Why do i need this?

React 18 brings with it a new Root Api which helps to enable a whole lot of great things like concurrent mode however in terms of feature parity it not exactly perfect.
The new root api has removed the callback parameter and while you can elect to use the old api this tool will allow you to leverage all the fun stuff in concurrent mode while keeping your api the same.

### React 16, 17 Root Api

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const container = document.getElementById('root') 
const callback = () => console.log('I just mounted');

ReactDOM.render(<App />, container, callback)
```

### React 18 Root Api

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const container = document.getElementById('root')
const callback = () => console.log('I just mounted') /* <-- unused */

ReactDOM.createRoot(container).render(<App />)
```

### React 18 Root Api with this

```diff
import React from 'react'
import ReactDOM from 'react-dom'
+ import { CallbackWrapper } from 'react-callback';
import App from './app'

const container = document.getElementById('root')
const callback = () => console.log('I just mounted');

ReactDOM.createRoot(container).render(
+    <CallbackWrapper callback={callback}>
        <App />
+    </CallbackWrapper>
)
```
