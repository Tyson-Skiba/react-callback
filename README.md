# React Callback

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
