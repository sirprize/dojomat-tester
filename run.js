require(['dojo/has'], function (has) {
    has.add("dijit", function() {
        return true;
    });

    require(['tester/App'], function (App) {
        new App();
    });
});