function Header() {
    return ( 
        <>
        {/* Header Section Start */}
<div className="header-section section">
  {/* Header Top Start */}
  <div className="header-top">
    <div className="container">
      <div className="row">
        <div className="col">
          {/* Header Top Wrapper Start */}
          <div className="header-top-wrapper">
            <div className="row">
              {/* Header Social */}
              <div className="header-social col-md-4 col-12">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-linkedin" /></a>
                <a href="#"><i className="fa fa-instagram" /></a>
                <a href="#"><i className="fa fa-pinterest-p" /></a>
              </div>
              {/* Header Logo */}
              <div className="header-logo col-md-4 col-12">
                <a href="/home" className="logo"><img src="img/logo.png" alt="logo" /></a>
              </div>
              {/* Account Menu */}
              <div className="account-menu col-md-4 col-12">
                <ul>
                  <li><a href="#">My Account</a></li>
                  <li><a href="/wishlist">Wishlist</a></li>
                  <li><a href="#" data-toggle="dropdown"><i className="fa fa-shopping-cart" /><span className="num">2</span></a>
                    {/* Mini Cart */}
                    <div className="mini-cart-brief dropdown-menu text-left">
                      {/* Cart Products */}
                      <div className="all-cart-product clearfix">
                        <div className="single-cart clearfix">
                          <div className="cart-image">
                            <a href="product-details.html"><img src="img/cart/1.jpg" alt /></a>
                          </div>
                          <div className="cart-info">
                            <h5><a href="product-details.html">Holiday Candle</a></h5>
                            <p>1 x £9.00</p>
                            <a href="#" className="cart-delete" title="Remove this item"><i className="fa fa-trash-o" /></a>
                          </div>
                        </div>
                        <div className="single-cart clearfix">
                          <div className="cart-image">
                            <a href="product-details.html"><img src="img/cart/2.jpg" alt /></a>
                          </div>
                          <div className="cart-info">
                            <h5><a href="product-details.html">Christmas Tree</a></h5>
                            <p>1 x £9.00</p>
                            <a href="#" className="cart-delete" title="Remove this item"><i className="fa fa-trash-o" /></a>
                          </div>
                        </div>
                      </div>
                      {/* Cart Total */}
                      <div className="cart-totals">
                        <h5>Total <span>£12.00</span></h5>
                      </div>
                      {/* Cart Button */}
                      <div className="cart-bottom  clearfix">
                        <a href="checkout.html">Check out</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>{/* Header Top Wrapper End */}
        </div>
      </div>
    </div>
  </div>{/* Header Top End */}
  {/* Header Bottom Start */}
  <div className="header-bottom section">
    <div className="container">
      <div className="row">
        {/* Header Bottom Wrapper Start */}
        <div className="header-bottom-wrapper text-center col">
          {/* Header Bottom Logo */}
          <div className="header-bottom-logo">
            <a href="/home" className="logo"><img src="img/logo.png" alt="logo" /></a>
          </div>
          {/* Main Menu */}
          <nav id="main-menu" className="main-menu">
            <ul>
              <li className="active"><a href="/home">home</a></li>
              <li><a href="/shop">shop</a>
                <ul className="sub-menu">
                  <li><a href="shop.html">shop page</a></li>
                  <li><a href="product-details.html">product details</a></li>
                </ul>
              </li>
              <li><a href="/about">about</a></li>
              <li><a href="#">pages</a>
                <ul className="sub-menu">
                  <li><a href="cart.html">cart</a></li>
                  <li><a href="checkout.html">checkout</a></li>
                  <li><a href="/wishlist">wishlist</a></li>
                  <li><a href="under-construction.html">Under Construction</a></li>
                </ul>
              </li>
              <li><a href="/blog">blog</a>
                <ul className="sub-menu">
                  <li><a href="/blog">blog page</a></li>
                  <li><a href="blog-details.html">blog details</a></li>
                </ul>
              </li>
              <li><a href="/contact">contact</a></li>
            </ul>
          </nav>
          {/* Header Search */}
          <div className="header-search">
            {/* Search Toggle */}
            <button className="search-toggle"><i className="ion-ios-search-strong" /></button>
            {/* Search Form */}
            <div className="header-search-form">
              <form action="#">
                <input type="text" placeholder="Search..." />
                <button><i className="ion-ios-search-strong" /></button>
              </form>
            </div>
          </div>
          {/* Mobile Menu */}
          <div className="mobile-menu section d-md-none" />
        </div>{/* Header Bottom Wrapper End */}
      </div>
    </div>
  </div>{/* Header Bottom End */}
</div>{/* Header Section End */}

        </>
     );
}

export default Header;