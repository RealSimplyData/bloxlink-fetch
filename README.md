# Bloxlink Fetch

Promise based library to fetch <a href="https://www.blox.link/">Bloxlink</a> user data

## Table of Contents

- <a href="#installing">Installing</a>
- <a href="#example">Example</a>

## Installing

Using npm:

```
$ npm install bloxlink-fetch
```

Using yarn:

```
$ yarn add bloxlink-fetch
```

## Example

```js
const bloxlinkFetch = require("bloxlink-fetch");
// or while using CommonJS:
// import bloxlinkFetch from "bloxlink-fetch";

bloxlinkFetch({
  userId: 1,
  guildId: 0, // optional
})
  .then((data) => {
    console.log(data); // => { account: number; status: "ok" }
  })
  .catch((error) => console.error(error));
```
