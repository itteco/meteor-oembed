Meteor.methods({

    "iframely.oembed": function(url) {

        check(url, String);

        this.unblock();

        var result = HTTP.get('http://open.iframe.ly/api/oembed', {
            params: {
                url: url,
                origin: 'meteor'
            }
        });

        return result && result.data;
    }

});