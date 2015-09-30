var context = require.context('./src', true, /-test\.js(x?)$/);
context.keys().forEach(context);
