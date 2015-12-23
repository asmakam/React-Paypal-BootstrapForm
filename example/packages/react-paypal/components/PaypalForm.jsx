PaypalForm = React.createClass({
  
  getInitialState() {
    return { cartItems: this.props.cartItems };
  },

  getCartItems() {
    let content = [];
    for (var idx = 0; idx < this.props.cartItems.length; idx++) {

      const itemID = idx+1;

      const itemName = "item_name_" + itemID;
      const amount = "amount_" + itemID;
      const quantity = "quantity_" + itemID;
      const cartItemsKey = "cartItems_" + itemID;

      content.push(
        <div key={cartItemsKey}>
          <input
                 type="hidden"
                 name={itemName}
                 key={itemName}
                 value={this.props.cartItems[idx].name} />
          <input
                 type="hidden"
                 name={amount}
                 key={amount}
                 value={this.props.cartItems[idx].price} />
          <input
                 type="hidden"
                 name={quantity}
                 key={quantity}
                 value={this.props.cartItems[idx].count} />
        </div>
      );
    }

    return content;
  },

  render() {
    return (
    <div>
      <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            key="paypal"
            target="_blank">
        <input
               type="hidden"
               key="cmd"
               name="cmd"
               value="_cart" />
        <input
               type="hidden"
               key="upload"
               name="upload"
               value="1" />
        <input
               type="hidden"
               key="currency_code"
               name="currency_code"
               value="USD" />
        <input
               type="hidden"
               key="business"
               name="business"
               value={this.props.email} />
        {this.getCartItems()}
        <input
               type="image"
               key="submit"
               src="http://www.paypal.com/en_US/i/btn/x-click-but01.gif"
               name="submit"
               alt="Make payments with PayPal - it's fast, free and secure!" />
      </form>
    </div>
    );
  }
});