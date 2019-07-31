// other imports are only noise, bus this is important to "activate"
// the wrong webpack-behavior, I don't know why
import './other-module.js'
import { createElement } from "react";

// createElement.apply(undefined, ["span"])
// is converted to
// Object(u.createElement.apply)(void 0,["span"])
// which results in an error
console.log(createElement.apply(undefined, ["span"]));