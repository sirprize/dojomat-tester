define([
    "dojo/_base/declare",
    "mijit/_WidgetBase",
    "mijit/_TemplatedMixin",
    "dojomat/_AppAware",
    "dojomat/_StateAware",
    "http://cdn.leafletjs.com/leaflet-0.6.4/leaflet.js"
    ], function (declare, _WidgetBase, _TemplatedMixin, _AppAware, _StateAware, L) {

    return declare([_WidgetBase, _TemplatedMixin, _AppAware, _StateAware], {
        request: null,
        router: null,
        session: null,
        templateString: "<div class=\"test_template\">Test template</div>",

        constructor: function (params) {
            this.request = params.request;
            this.router = params.router;
            this.session = params.session;
        },
        postCreate: function () {
            var map = new L.Map(this.domNode);
            console.debug("postCreate is called"); // This will appear twice in the console
            this.inherited(arguments);
        },
    });
});
