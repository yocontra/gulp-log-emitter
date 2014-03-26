var LogEmitter = function (source) {
  this.source = source;
};

LogEmitter.prototype.info = function (message) {
  process.emit("gulp:log", { level: "info", message: message, source: this.source });
};

LogEmitter.prototype.warn = function (message) {
  process.emit("gulp:log", { level: "warn", message: message, source: this.source });
};

LogEmitter.prototype.error = function (message) {
  var data = {};
  data.level = "error";
  data.message = message;
  data.source = this.source;

  if (message instanceof Error) {
    data.message = message.message;
    data.error = message;
  }

  process.emit("gulp:log", data);
};

LogEmitter.prototype.debug = function (message) {
  process.emit("gulp:log", { level: "debug", message: message, source: this.source });
};


module.exports = {
  Logger: function (source) {
    return new LogEmitter(source);
  }
};

// var log = require('gulp-logemitter').Logger('my plugin');
// log.info("This is something to say");