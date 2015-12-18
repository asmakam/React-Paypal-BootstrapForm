PaypalForm = React.createClass({
  
  getInitialState() {
    return { cartItems: this.props.cartItems };
  },

  getCartItems() {
    let content = [];
    debugger;
    for (var idx = 0; idx < this.props.cartItems.length; idx++) {

      const itemID = idx+1;

      const itemName = "item_name_" + itemID;
      const amount = "amount_" + itemID;
      const quantity = "quantity_" + itemID;

      content.push(
        <div>
          <input
                 type="hidden"
                 name={itemName}
                 value={this.props.cartItems[idx].name} />
          <input
                 type="hidden"
                 name={amount}
                 value={this.props.cartItems[idx].price} />
          <input
                 type="hidden"
                 name={quantity}
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
            target="_blank">
        <input
               type="hidden"
               name="cmd"
               value="_cart" />
        <input
               type="hidden"
               name="upload"
               value="1" />
        <input
               type="hidden"
               name="currency_code"
               value="USD" />
        <input
               type="hidden"
               name="business"
               value={this.props.email} />
        {this.getCartItems()}
        <input
               type="image"
               src="http://www.paypal.com/en_US/i/btn/x-click-but01.gif"
               name="submit"
               alt="Make payments with PayPal - it's fast, free and secure!" />
      </form>
    </div>
    );
  }
});