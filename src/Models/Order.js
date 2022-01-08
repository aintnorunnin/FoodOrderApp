class Order {
  name;
  street;
  postal;
  city;
  state;
  items;
  price;
  constructor(name, street, city, state, postal, items, price) {
    this.name = name;
    this.street = street;
    this.postal = postal;
    this.city = city;
    this.state = state;
    this.items = items;
    this.price = price;
  }
}

export default Order;
