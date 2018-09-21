# SSR

### Just storing this here so I don't forget...


After getting super frustrated by how hard it was to implement a good server-side-rendered dev experience -- not wanting to use boilerplate code or an entire framework like <a href="https://nextjs.org/">next.js</a> -- and after struggling super hard with dual client & server webpack configs, I found a quite simple solution by `@glenjamin`:
https://github.com/glenjamin/ultimate-hot-reloading-example

The problem is this: 
Webpack, which offers a pleasant HMR development experience via `webpack-dev-middlware` and `webpack-hot-middleware`, will rebuild the client upon code changes. However, the server, running off babel, needs to bring those changes in. Otherwise, when the browser is refreshed, there will be a client/server mismatch since the server doesn't have hot-reloading capabilities. This implementation offers a solution by deleting the source file's dependencies from the node cache every time webpack rebuilds (<a href="https://github.com/rzeng95/SSR/blob/master/webpack/webpack-dev-middleware.js#L29">see here</a>), thus forcing a re-require of the newly updated code. This keeps the server and client in sync and ensures a smooth developer experience.

### Getting started
```
npm i
npm start
```
Then, navigate to `localhost:3000`

Test that HMR works in the client by updating `App.jsx`.  
Confirm that server also updates by hard-reloading the browser.
