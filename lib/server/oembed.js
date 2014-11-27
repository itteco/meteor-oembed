oembedEndpoint = 'http://open.iframe.ly/api/oembed';

Meteor.methods({

    "iframely.oembed": function(url) {

        check(url, String);

        this.unblock();

        var result = HTTP.get(oembedEndpoint, {
            params: {
                url: url,
                origin: 'meteor'
            }
        });

        return result && result.data;
    }

});