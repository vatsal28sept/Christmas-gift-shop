import Header from "./Header";
import Footer from "./Footer";
function Wishlist() {
    return ( 
        <>
        <Header />
      <div>
  {/* Page Banner Section Start*/}
  <div className="page-banner-section section" style={{backgroundImage: 'url(img/bg/page-banner.jpg)'}}>
    <div className="container">
      <div className="row">
        {/* Page Title Start */}
        <div className="page-title text-center col">
          <h1>Wishlist</h1>
        </div>{/* Page Title End */}
      </div>
    </div>
  </div>{/* Page Banner Section End*/}
  {/* Wishlist Section Start*/}
  <div className="wishlist-section section pt-120 pb-90">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="table-responsive mb-30">
            <table className="table cart-table text-center">
              {/* Table Head */}
              <thead>
                <tr>
                  <th className="number">#</th>
                  <th className="image">image</th>
                  <th className="name">product name</th>
                  <th className="qty">stock status</th>
                  <th className="price">price</th>
                  <th className="total">add to cart</th>
                  <th className="remove">remove</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                <tr>
                  <td><span className="cart-number">1</span></td>
                  <td><a href="#" className="cart-pro-image"><img src="img/product/1.jpg" alt /></a></td>
                  <td><a href="#" className="cart-pro-title">Holiday Candle</a></td>
                  <td><p className="stock in-stock">in stock</p></td>
                  <td><p className="cart-pro-price">$104.99</p></td>
                  <td><button className="wl-add-cart-btn">add to cart</button></td>
                  <td><button className="cart-pro-remove"><i className="fa fa-trash-o" /></button></td>
                </tr>
                <tr>
                  <td><span className="cart-number">2</span></td>
                  <td><a href="#" className="cart-pro-image"><img src="img/product/2.jpg" alt /></a></td>
                  <td><a href="#" className="cart-pro-title">Christmas Tree</a></td>
                  <td><p className="stock in-stock">in stock</p></td>
                  <td><p className="cart-pro-price">$85.99</p></td>
                  <td><button className="wl-add-cart-btn">add to cart</button></td>
                  <td><button className="cart-pro-remove"><i className="fa fa-trash-o" /></button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>{/* Wishlist Section End*/}
</div>

        <Footer />

        </>
     );
}

export default Wishlist;