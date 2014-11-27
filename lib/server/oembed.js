oembedEndpoint = 'http://open.iframe.ly/api/oembed';

OembedsCache = new Mongo.Collection('iframely_oembeds_cache');

cacheTTL = 1000 * 60 * 60; // Hour
cacheErrorTTL = 1000 * 60; // Minute
cacheEnabled = true;

Meteor.methods({

    "iframely.oembed": function(url) {

        check(url, String);

        this.unblock();

        if (cacheEnabled) {

            var cache = OembedsCache.findOne({url: url});

            var now = new Date().getTime();

            if (cache && cache.error) {
                if (cache.modified_at.getTime() > now - cacheErrorTTL) {
                    throw new Meteor.Error(cache.error);
                }
            }

            if (cache && cache.data) {
                if (cache.modified_at.getTime() > now - cacheTTL) {
                    return cache.data;
                }
            }
        }

        var error;

        try {
            var result = HTTP.get(oembedEndpoint, {
                params: {
                    url: url,
                    origin: 'meteor'
                }
            });
        } catch (ex) {
            error = ex.response && ex.response.statusCode || ex.message;
        }

        error = (result && result.data && result.data.error) || (result && result.statusCode !== 200 && result.statusCode) || error;

        if (cacheEnabled) {

            OembedsCache.upsert({
                url: url
            }, {
                $set: {
                    modified_at: new Date(),
                    data: result && result.data,
                    error: error
                }
            });
        }

        if (error) {
            throw new Meteor.Error(error);
        }

        return result && result.data;
    }

});