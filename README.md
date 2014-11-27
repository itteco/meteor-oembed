iframely:oembed
=============

### Install

    meteor add iframely:oembed

### Usage

    {{>oembed}}

Template context should be an object with `url` attribute.

### Configuration

Configure oembed rendering widget and oEmbed api endpoint:

    Meteor.startup(function() {

        // Affected only on client side. If not specified - default widget used.
        IframelyOembed.setTemplate('customWidget');

        // Affected only on server side. Default: `'http://open.iframe.ly/api/oembed'`.
        IframelyOembed.setEndpoint('http://iframe.ly/api/oembed?api_key=<key>');

        // Caching using mongo collection. Defaults:
        IframelyOembed.setCacheOptions({
            cacheTTL: 1000 * 60 * 2, // Hour.
            cacheErrorTTL: 1000 * 60, // Minute.
            cacheEnabled: true
        });
    });

Use base widget as example for template customization:

 * [base-widget.html](https://github.com/itteco/meteor-oembed/blob/master/lib/client/base-widget.html)
 * [base-widget.js](https://github.com/itteco/meteor-oembed/blob/master/lib/client/base-widget.js)

Widget context is oembed object itself. If oembed is loading then context will be:

    {
        loading: true
    }

If error occurred during oembed loading context will be:

    {
        error: ErrorInstance
    }

Alternatively you can customize base widget overriding styles: [base-widget.css](https://github.com/itteco/meteor-oembed/blob/master/lib/client/base-widget.css)

### Examples

Here is integration diff into meteor `todos` example application (shows embed if todo's text is url): [meteor-todo-iframely-oembed-demo](https://github.com/nleush/meteor-todo-iframely-oembed-demo/commit/1b9f52ae4fc4a25dba617de0edbdf59633ecd1e5)

And one more small demo app used to test package: [meteor-iframely-demo](https://github.com/nleush/meteor-iframely-demo).