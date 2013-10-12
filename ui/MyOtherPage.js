define([
    "dojo/_base/declare",
    "dojo/on",
    "dojo/query",
    "dojo/dom-attr",
    "dojo/_base/lang",
    "mijit/_WidgetBase",
    "mijit/_TemplatedMixin",
    "dojomat/_AppAware",
    "dojomat/_StateAware",
    "http://cdn.leafletjs.com/leaflet-0.6.4/leaflet.js"
    ], function (declare, on, query, domAttr, lang, _WidgetBase, _TemplatedMixin, _AppAware, _StateAware, L) {

    return declare([_WidgetBase, _TemplatedMixin, _AppAware, _StateAware], {
        request: null,
        router: null,
        session: null,
        templateString: '<div><h1>MyOtherPage</h1><a href="#" data-dojorama-route="home" class="push">Go to MyHomePage</a></div>',

        constructor: function (params) {
            this.request = params.request;
            this.router = params.router;
            this.session = params.session;
        },

        postCreate: function () {
            query('a.push', this.domNode).forEach(lang.hitch(this, function (node) {
                var url, route = this.router.getRoute(domAttr.get(node, 'data-dojorama-route')); // valid route name in data-dojo-props attribute of node?
                if (!route) { return; }
                
                url = route.assemble();
                node.href = url;
                
                this.own(on(node, 'click', lang.hitch(this, function (ev) {
                    ev.preventDefault();
                    this.push(url);
                })));
            }));
            
            console.debug("MyOtherPage.postCreate() is called"); // This will appear twice in the console
            this.inherited(arguments);
        },
    });
});
