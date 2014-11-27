Template.iframelyBaseWidget.helpers({
    html: function() {

        var oembed = this;

        if (oembed.loading) {
            return 'Loading...';
        }

        if (oembed.error) {
            return null;
        }

        if (oembed.type === 'photo' && oembed.url) {
            return '<img src="' + oembed.url + '" title="' + (oembed.title || oembed.url) + '" alt="' + (oembed.title || oembed.url) + '" />'
        }

        return this.html;
    }
});