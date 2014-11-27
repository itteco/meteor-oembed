IframelyOembed = {
    setEndpoint: function(url) {
        if (Meteor.isServer) {
            oembedEndpoint = url;
        }
    },
    setTemplate: function(template) {
        if (Meteor.isClient) {
            oembedWidget = template;
        }
    },
    setCacheOptions: function(options) {
        cacheTTL = options && options.cacheTTL || cacheTTL;
        cacheErrorTTL = options && options.cacheErrorTTL || cacheErrorTTL;
        cacheEnabled = options && options.cacheEnabled || cacheEnabled;
    }
};