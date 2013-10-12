define(["dojo/_base/config", "require"], function (config, require) {
    "use strict";
    
    var p = config['routing-map'].pathPrefix,
        l = config['routing-map'].layers || {},
        mid = require.toAbsMid
    ;
    
    return {
        home: {
            schema: p + '/index.html',
            widget: mid('./ui/MyHomePage'),
            layers: l.home || []
        },
        other: {
            schema: p + '/other.html',
            widget: mid('./ui/MyOtherPage'),
            layers: l.other || []
        }
    };
});