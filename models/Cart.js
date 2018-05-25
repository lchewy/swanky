class Cart {
  constructor(prevCart) {
    this.cartItems = prevCart.cartItems || {};
    this.totalQty = prevCart.totalQty || 0;
    this.totalPrice = prevCart.totalPrice || 0;
  }

  add(item, id) {
    let storedItem = this.cartItems[id];
    if (!storedItem) {
      storedItem = this.cartItems[id] = { item: item, qty: 0, price: 0 };
    }

    storedItem.qty++;
    storedItem.price = storedItem.item.price * storedItem.qty;
    this.totalQty++;
    this.totalPrice += storedItem.item.price;
  }

  reduceByOne(id) {
    this.cartItems[id]--;
    this.cartItems[id].price -= this.cartItems[id].item.price;
    this.totalQty--;
    this.totalPrice -= this.cartItems[id].item.price;

    if (this.cartItems[id].qty <= 0) {
      this.totalQty -= this.cartItems[id].qty;
      this.totalPrice -= this.cartItems[id].price;
      delete this.cartItems[id];
    }
  }

  removeItem(id) {
    delete this.cartItems[id];
  }

  generateArray(){
      return Object.values(this.cartItems);
  }
}

module.exports = Cart;