Package.describe({
  name: 'iframely:oembed',
  summary: ' /* Fill me in! */ ',
  version: '0.0.1',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@0.9.2');

  api.use('templating');

  api.addFiles('lib/client/oembed.html', 'client');
  api.addFiles('lib/client/oembed.js', 'client');

  api.addFiles('lib/server/oembed.js', 'server');

});