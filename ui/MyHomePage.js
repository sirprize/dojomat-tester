define([
    "dojo/_base/declare",
    "dojo/on",
    "dojo/query",
    "dojo/dom-attr",
    "dojo/_base/lang",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojomat/_AppAware",
    "dojomat/_StateAware",
    "./_LinkifyMixin",
    "http://cdn.leafletjs.com/leaflet-0.6.4/leaflet.js",
    "dojo/text!./template/MyHomePage.html"
], function (
    declare,
    on,
    query,
    domAttr,
    lang,
    _WidgetBase,
    _TemplatedMixin,
    _AppAware,
    _StateAware,
    _LinkifyMixin,
    L,
    template
) {
    return declare([_WidgetBase, _TemplatedMixin, _AppAware, _StateAware, _LinkifyMixin], {
        request: null,
        router: null,
        session: null,
        templateString: template,

        constructor: function (params) {
            this.request = params.request;
            this.router = params.router;
            this.session = params.session;
        },

        postCreate: function () {
            this.setTitle('MyHomePage');
            
            query('a.push', this.domNode).forEach(lang.hitch(this, function (node) {
                this.linkify(node, this.router, this);
            }));

            console.debug("MyHomePage.postCreate() is called");
            this.inherited(arguments);
        }
    });
});
