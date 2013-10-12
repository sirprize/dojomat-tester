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
        templateString: '<div><h1>MyHomePage</h1><a href="#" data-dojomat-route="other" class="push">Go to MyOtherPage</a></div>',

        constructor: function (params) {
            this.request = params.request;
            this.router = params.router;
            this.session = params.session;
        },

        postCreate: function () {
            this.setTitle('MyHomePage');

            // find "in-app" links
            query('a.push', this.domNode).forEach(lang.hitch(this, function (node) {

                // valid route name in data-dojomat-route attribute of node?
                var url, route = this.router.getRoute(domAttr.get(node, 'data-dojomat-route'));
                if (!route) { return; }

                // make links work as they should (eg for right-click and open in a new tab)
                url = route.assemble();
                node.href = url;

                // add click handler
                this.own(on(node, 'click', lang.hitch(this, function (ev) {
                    ev.preventDefault();
                    this.push(url);
                })));
            }));

            console.debug("MyHomePage.postCreate() is called");
            this.inherited(arguments);
        },
    });
});
