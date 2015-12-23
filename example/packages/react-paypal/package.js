Package.describe({
  name: 'asmakam:react-paypal',
  version: '0.4.0',
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
  api.use('react');
  
  // Add source files for the component
  api.addFiles([
    'components/CartTable.jsx',
    'components/PaypalForm.jsx'
     ], 'client');
 

  //Export components on client side
  api.export([
    'PaypalForm',
    'CartTable'
  ], 'client');

});

Package.onTest(function(api) {
 
});