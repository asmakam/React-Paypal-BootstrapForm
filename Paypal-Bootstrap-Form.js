if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.payFee.helpers({
    PaypalCart: function() {
      return PaypalCart;
    },

    cartItems: function() {
    var items =  [
                    {
                      name: "Subscription fees",
                      price: 20,
                      count: 1
                    },
                    {
                      name: "Balls",
                      price: 20,
                      count: 1
                    },
                    {
                      name: "T-Shirt",
                      price: 20,
                      count: 1
                    },
                    {
                      name: "Photos",
                      price: 40,
                      count: 1
                    }
                  ];
      return items;
    },

    email: function() {
      return 'team@asmakam.com';
    }

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}



/*
Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
*/