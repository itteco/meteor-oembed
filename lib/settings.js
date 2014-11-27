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
    }
};