define([
    "dojo/_base/declare",
    "dojo/on",
    "dojo/dom-attr"
], function (declare, on, domAttr) {

    return declare([], {
        linkify: function (node, router, stateAwareWidget) {
            var url,
                route = router.getRoute(domAttr.get(node, 'data-dojomat-route'))
                hash = domAttr.get(node, 'data-dojomat-hash')
            ;

            if (!route) { return; }

            url = route.assemble() + ((hash) ? '#' + hash : '');
            node.href = url; // make links work as they should (eg for right-click and open in a new tab)
            
            stateAwareWidget.own(on(node, 'click', function (ev) {
                ev.preventDefault();
                stateAwareWidget.pushState(url);
            }));
        }
    });
});
