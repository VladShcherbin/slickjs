Package.describe({
  name: 'shcherbin:slickjs',
  version: '1.5.8',
  summary: 'Slick js skeleton wrapper for meteor. Beautiful carousel or slider for you!',
  git: 'https://github.com/VladShcherbin/slickjs',
  documentation: 'readme.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.use('jquery', 'client');
  api.addFiles([
    'vendor/slick/slick.js',
    'vendor/slick/slick.css'
  ], 'client');
});