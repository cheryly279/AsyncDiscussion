System.registerModule("01_async_await.js", [], function() {
  "use strict";
  var __moduleName = "01_async_await.js";
  var fs_converted = require('./fs_converted');
  (function() {
    var data,
        error;
    return $traceurRuntime.asyncWrap(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            $ctx.pushTry(6, null);
            $ctx.state = 9;
            break;
          case 9:
            Promise.resolve(fs_converted.readFile('sample3.txt', 'utf8')).then($ctx.createCallback(3), $ctx.errback);
            return;
          case 3:
            data = $ctx.value;
            $ctx.state = 2;
            break;
          case 2:
            console.log('show me the money/data: ' + data.contents);
            $ctx.state = 5;
            break;
          case 5:
            $ctx.popTry();
            $ctx.state = -2;
            break;
          case 6:
            $ctx.popTry();
            $ctx.maybeUncatchable();
            error = $ctx.storedException;
            $ctx.state = 12;
            break;
          case 12:
            console.log('error? ' + error);
            $ctx.state = -2;
            break;
          default:
            return $ctx.end();
        }
    }, this);
  })();
  return {};
});
System.get("01_async_await.js" + '');
