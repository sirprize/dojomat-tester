require(['dojo/has'], function (has) {
    has.add("dijit", function() {
        return true;
    });

    require(['tester/App'], function (App) {
        new App({ refNode: document.getElementById("page_container") });
    });
});