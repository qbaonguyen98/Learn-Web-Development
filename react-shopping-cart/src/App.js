import React from 'react';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';
import data from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
      size: "",
      sort: "",
    }
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;

    cartItems.forEach(item => {
      if (product._id === item._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({...product, count: 1});
    }
    this.setState({
      cartItems: cartItems,
    })
    localStorage.setItem("cartItems", JSON.stringify(this.state.cartItems));
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((item) => product._id !== item._id),
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((item) => product._id !== item._id)));
  }

  createOrder = (order) => {
    alert("save");
  }

  sortProducts = (e) => {
    const sort = e.target.value;
    this.setState({
      sort: sort,
      products: this.state.products.slice().sort((a, b) => {
        if (sort === "lowest") {
          return (a.price > b.price) ? 1 : -1;
        } else if (sort === "highest") {
          return (a.price < b.price) ? 1 : -1;
        }
        return (a._id < b._id) ? 1 : -1;
      })
    });
  }

  filterProducts = (e) => {
    if (e.target.value === "") {
      this.setState({
        size: "",
        products: data.products
      });
    } else {
      this.setState({
        size: e.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(e.target.value) >= 0
        )
      });
    }
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter 
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
              <Products 
                products={this.state.products} 
                addToCart={this.addToCart}
              />
            </div>
            <div className="sidebar">
              <Cart 
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart} 
                createOrder={this.createOrder} 
              />
            </div>
          </div>
        </main>
        <footer>
          All right is reserved
        </footer>
      </div>
    );
  }
}

export default App;
