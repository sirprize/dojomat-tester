/*jshint strict:false */

define([
    "dojo/_base/declare",
    "dojomat/Application",
    "dojomat/populateRouter",
    "./routing-map",
    "dojo/domReady!"
], function (
    declare,
    Application,
    populateRouter,
    routingMap
) {
    return declare([Application], {
        constructor: function () {
            populateRouter(this, routingMap);
            this.run();
        }
    });
});