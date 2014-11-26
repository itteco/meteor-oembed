var key = 'iframely:oembed:url:';

var loadOembed = function(url) {

    var oembed = Session.get(key + url);

    // Start load if not loaded.
    if (!oembed) {

        // Set loading to prevent another load.
        Session.set('url:' + url, {loading: true});

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

    'html': function() {

        var oembed = loadOembed(this.url);

        if (!oembed || oembed.loading) {
            return 'loading...';
        }

        if (oembed.error) {
            console.error(oembed.error);
            return '- oembed error -';
        }

        if (oembed.html) {
            return oembed.html;
        }

        if (oembed.type === 'photo' && oembed.url) {
            return '<img src="' + oembed.url + '" title="' + (oembed.title || oembed.url) + '" alt="' + (oembed.title || oembed.url) + '" />'
        }

        return '- no oembed -';
    }
});