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

        // Affected only on client side.
        IframelyOembed.setTemplate('customWidget');

        // Affected only on server side.
        IframelyOembed.setEndpoint('http://iframe.ly/api/oembed?api_key=<key>');
    });

Use base widget as example for customization:

 * [base-widget.html](https://github.com/itteco/meteor-oembed/blob/master/lib/client/base-widget.html)
 * [base-widget.js](https://github.com/itteco/meteor-oembed/blob/master/lib/client/base-widget.js)

Alternatively you can customize base widget overriding styles: [base-widget.css](https://github.com/itteco/meteor-oembed/blob/master/lib/client/base-widget.css)