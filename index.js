var LogEmitter = function (source) {
  this.source = source;
};

LogEmitter.prototype.info = function (message) {
  this.emit({ level: "info", message: message, source: this.source });
};

LogEmitter.prototype.warn = function (message) {
  this.emit({ level: "warn", message: message, source: this.source });
};

LogEmitter.prototype.error = function (message) {
  var data = {
    level: "error",
    message: message,
    source: this.source
  };

  if (message instanceof Error) {
    data.message = message.message;
    data.error = message;
  }

  this.emit(data);
};

LogEmitter.prototype.debug = function (message) {
  this.emit({ level: "debug", message: message, source: this.source });
};

LogEmitter.prototype.emit = function (data) {
  process.emit("gulp:log", data);
};

module.exports = {
  Logger: function (source) {
    return new LogEmitter(source);
  }
};

// var log = require('gulp-logemitter').Logger('my plugin');
// log.info("This is something to say");