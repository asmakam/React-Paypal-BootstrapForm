CartTable = React.createClass({
  
  getInitialState() {
    return { cartItems: this.props.cartItems };
  },

  updateCart( event ) {
    event.preventDefault();
    var cartItems = this.state.cartItems;
    cartItems[parseInt(event.target.id)].count = parseInt(event.target.value);
    this.setState({cartItems: cartItems});
  },

  getCartItems() {

    let content = [];
    let totalAmount = 0;

    for (var idx = 0; idx < this.state.cartItems.length; idx++) {
      // List cart item and value 
      content.push( <tr key={ idx }>
                      <td>
                        { this.state.cartItems[idx].name }
                      </td>
                      <td>
                        <input
                               type="num"
                               id={ idx }
                               ref="textInput"
                               min="0"
                               max="100"
                               value={ this.state.cartItems[idx].count }
                               onChange={ this.updateCart } />
                      </td>
                      <td>
                        $ {this.state.cartItems[idx].price * this.state.cartItems[idx].count}
                      </td>
                    </tr> );

      // Accumlate total value of cart 
      totalAmount += this.state.cartItems[idx].price * this.state.cartItems[idx].count;
    }

    content.push( <tr key={ idx }>
                    <td colSpan="2">
                      Total
                    </td>
                    <td>
                      $ {totalAmount}
                    </td>
                  </tr> );

    return content;
  },

  render() {
    return ( <div
                  className="container"
                  id="paypal-bootstrap-container">
               <div className="row">
                 <div className="col-md-12">
                   <div className="panel panel-default">
                     <div className="panel-body table-responsive table-div">
                       <table className="table table-bordered">
                         <thead>
                           <tr>
                             <th>
                               Item
                             </th>
                             <th>
                               Quantity
                             </th>
                             <th>
                               Price
                             </th>
                           </tr>
                         </thead>
                         <tbody>
                           { this.getCartItems() }
                         </tbody>
                       </table>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-xs-2 col-xs-offset-5">
                   <div>
                     <PaypalForm
                                 cartItems={ this.state.cartItems }
                                 email={ this.props.email } />
                   </div>
                 </div>
               </div>
             </div>);
  }
});