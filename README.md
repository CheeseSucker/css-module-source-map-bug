# Bug demonstration 

Source maps are discarded by typings-for-css-modules-loader due to a missing function argument.

1. `npm install`
2. `npm run build`
3. Open `dist/index.html` in your favorite browser
4. See that the source map for `style-as-module.scss` is wrong.