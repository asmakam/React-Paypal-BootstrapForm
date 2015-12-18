Package.describe({
  name: 'asmakam:react-paypal',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'React component to enable paypal payments button in application',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/asmakam/React-Paypal-BootstrapForm.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  
  api.versionsFrom('1.2.1');
  
  api.use('ecmascript');
  
  // Add source files for the component
  api.addAssets([
    'react-paypal.js',
    'lib/CartTable.jsx',
    'lib/PaypalForm.jsx'
     ], ['client']);
 

  //Export components on client side
  api.export([
    'PaypalForm',
    'CartTable'
  ], ['client']);

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('asmakam:react-paypal');
  api.addFiles('react-paypal-tests.js');
});