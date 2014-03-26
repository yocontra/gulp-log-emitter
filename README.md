gulp log emitter
================

Emit gulp-prefixed log message objects on node's process object

```javascript
var log = require("gulp-log-emitter").Logger("my plugin name");

// later in your plugin
log.info("This is done");

log.warn("This function is deprecated");

log.error("You can't do this");

log.error(new Error("You really can't do this"));

log.debug("This took this many seconds");
```