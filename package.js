Package.describe({
  name: 'iframely:oembed',
  summary: 'Easy insert oEmbed widget in template',
  version: '0.0.1',
  git: 'https://github.com/itteco/meteor-oembed.git'
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@0.9.2');

  api.use('templating');
  api.use('http');

  api.addFiles('lib/client/oembed.html', 'client');
  api.addFiles('lib/client/oembed.js', 'client');

  api.addFiles('lib/server/oembed.js', 'server');

});