oembedWidget = 'iframelyBaseWidget';

var key = 'iframely:oembed:url:';
var urlRe = /^https?:\/\/[^ \/,"]+\/[^ ,"]+$/i;

var loadOembed = function(url) {

    if (!url || !url.match(urlRe)) {
        return false;
    }

    var oembed = Session.get(key + url);

    // Start load if not loaded.
    if (!oembed) {

        // Set loading to prevent another load.
        Session.set(key + url, {loading: true});

        Meteor.call('iframely.oembed', url, function(error, data) {

            if (error) {
                Session.set(key + url, {error: error});
                return;
            }

            Session.set(key + url, data);
        });
    }

    return oembed;
};

Template.oembed.rendered = function() {
    // Need call here, because Meteor.call not work during item.insert called from helper.
    loadOembed(this.data.url);
};

Template.oembed.helpers({

    data: function() {
        return loadOembed(this.url);
    },

    template: function() {
        return oembedWidget;
    }
});