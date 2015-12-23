App = React.createClass({

  getCartItems() {
    return [{
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
  },

  getEmail() {
    return "a@b.c";
  },

  render() {

    return (
        <div>
          <CartTable cartItems={this.getCartItems()} email={this.getEmail()} />
        </div>
      );

  }

});