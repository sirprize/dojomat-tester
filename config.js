var dojoConfig = {
    async: 1,
    cacheBust: 1,
    'routing-map': {
        pathPrefix: '/dojomat-tester',
        layers: {}
    },
    packages: [
        { name: "dijit", location: "../dijit" },
        { name: "dojomat", location: "../../sirprize/dojomat" },
        { name: "routed", location: "../../sirprize/routed" },
        { name: 'tester', location: '../../..' }
    ]
};