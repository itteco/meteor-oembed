iframely:oembed for Meteor
=============

This package adds embed codes support to Meteor through a oEmbed proxy API. The proxy is configurable, you can use [Iframely](https://iframely.com) (with API key), our [open-source version](https://github.com/itteco/iframely), or any other proxy. Including implementing your own. 

Quick demo: [http://iframely.meteor.com/](http://iframely.meteor.com/)

iframely:oembed can cache oEmbeds in the database. The package also lets you optionally customize the templates used for renders (especially if the URL is `link` type and only has title, description and a thumbnail).

### Install

    meteor add iframely:oembed

### Usage

    {{>oembed}}

Template context should be an object with `url` attribute.

### Configuration

Configure oembed rendering widget and oEmbed api endpoint:

    Meteor.startup(function() {

        // Optional client-side template. If not specified - default widget used.
        IframelyOembed.setTemplate('customWidget');

        // Please configure your oEmbed proxy address. 
        // Default: `'http://open.iframe.ly/api/oembed'` powered by oembedapi.com
        // Query string parameters are fine too
        IframelyOembed.setEndpoint('http://iframe.ly/api/oembed?api_key=<key>');

        // Optionally cache oEmbeds using mongo collection. Defaults:
        IframelyOembed.setCacheOptions({
            cacheTTL: 1000 * 60 * 60, // Hour.
            cacheErrorTTL: 1000 * 60, // Minute.
            cacheEnabled: true
        });
    });

See the default base widget as example and boilerplate for template customization:

 * [base-widget.html](https://github.com/itteco/meteor-oembed/blob/master/lib/client/base-widget.html)
 * [base-widget.js](https://github.com/itteco/meteor-oembed/blob/master/lib/client/base-widget.js)

The context of the widget is the oEmbed JSON object itself. If oEmbed is loading, the temp context is:

    {
        loading: true
    }

If an error is encountered during oEmbed request (such as page 404s or proxy 503s), the context is set to:

    {
        error: ErrorInstance
    }

Alternative way to customize base widget is simply via CSS: [base-widget.css](https://github.com/itteco/meteor-oembed/blob/master/lib/client/base-widget.css)

### Integration example

Here is the integration diff that activates iframely:oembed in the exmaple Meteor `todos` application (embeds will show up if todo's text is url): [meteor-todo-iframely-oembed-demo](https://github.com/nleush/meteor-todo-iframely-oembed-demo/commit/1b9f52ae4fc4a25dba617de0edbdf59633ecd1e5)

And another simple [demo app](http://iframely.meteor.com/) used to test package: [meteor-iframely-demo](https://github.com/nleush/meteor-iframely-demo).

### License

MIT, (c) 2014 Itteco Software Corp.
