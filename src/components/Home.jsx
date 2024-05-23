import Header from "./Header";
import Footer from "./Footer";
function Home() {
    return ( 
        <>
        <Header/>
       <div>
  {/* Hero Slider Start*/}
  <div className="hero-slider section fix">
    {/* Hero Slide Item Start*/}
    <div className="hero-item" style={{backgroundImage: 'url(img/hero/1.jpg)'}}>
      {/* Hero Content Start*/}
      <div className="hero-content text-center m-auto">
        <h2>Save 25%</h2>
        <h1>Christmas Sale</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
        <a href="#">LEARN MORE</a>
      </div>{/* Hero Content End*/}
    </div>{/* Hero Slide Item End*/}
    {/* Hero Slide Item Start*/}
    <div className="hero-item" style={{backgroundImage: 'url(img/hero/2.jpg)'}}>
      {/* Hero Content Start*/}
      <div className="hero-content text-center m-auto">
        <h2>Save 25%</h2>
        <h1>Christmas Sale</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
        <a href="#">LEARN MORE</a>
      </div>{/* Hero Content End*/}
    </div>{/* Hero Slide Item End*/}
  </div>{/* Hero Slider End*/}
  {/* Banner Section Start*/}
  <div className="banner-section section pt-120">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12 mb-30">
          <div className="single-banner">
            <img src="img/banner/1.jpg" alt="banner" />
            <div className="banner-content right">
              <h1 className="white"><span>Gifts</span>Christmas</h1>
              <a href="#" className="button">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 mb-30">
          <div className="single-banner">
            <img src="img/banner/2.jpg" alt="banner" />
            <div className="banner-content left">
              <h2 className="black"><span className="small">Save <span className="red">25%</span></span><span className="red">Offer</span> Christmas</h2>
              <a href="#" className="link">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{/* Banner Section End*/}
  {/* Product Section Start*/}
  <div className="product-section section pt-70 pb-60">
    <div className="container">
      {/* Section Title Start*/}
      <div className="row">
        <div className="section-title text-center col mb-60">
          <h1>Featured Products</h1>
        </div>
      </div>{/* Section Title End*/}
      {/* Product Wrapper Start*/}
      <div className="row">
        {/* Product Start*/}
        <div className="col-lg-4 col-md-6 col-12 mb-60">
          <div className="product">
            {/* Image Wrapper */}
            <div className="image">
              {/* Image */}
              <a href="product-details.html" className="img"><img src="img/product/1.jpg" alt="Product" /></a>
              {/* Wishlist */}
              <a href="#" className="wishlist"><i className="fa fa-heart-o" /></a>
              {/* Label */}
              <span className="label">New</span>
            </div>
            {/* Content */}
            <div className="content">
              {/* Head Content */}
              <div className="head fix">
                {/* Title & Category */}
                <div className="title-category float-left">
                  <h5 className="title"><a href="product-details.html">Holiday Candle</a></h5>
                  <a href="shop.html" className="category">Catalog</a>
                </div>
                {/* Price */}
                <div className="price float-right">
                  <span className="new">$38</span>
                  {/* Old Price Mockup If Need */}
                  {/* <span class="old">$46</span> */}
                </div>
              </div>
              {/* Action Button */}
              <div className="action-button fix">
                <a href="#">add to cart</a>
              </div>
            </div>
          </div>
        </div>{/* Product End*/}
        {/* Product Start*/}
        <div className="col-lg-4 col-md-6 col-12 mb-60">
          <div className="product">
            {/* Image Wrapper */}
            <div className="image">
              {/* Image */}
              <a href="product-details.html" className="img"><img src="img/product/2.jpg" alt="Product" /></a>
              {/* Wishlist */}
              <a href="#" className="wishlist"><i className="fa fa-heart-o" /></a>
              {/* Label */}
              {/* <span class="label">New</span> */}
            </div>
            {/* Content */}
            <div className="content">
              {/* Head Content */}
              <div className="head fix">
                {/* Title & Category */}
                <div className="title-category float-left">
                  <h5 className="title"><a href="product-details.html">Christmas Tree</a></h5>
                  <a href="shop.html" className="category">Catalog</a>
                </div>
                {/* Price */}
                <div className="price float-right">
                  <span className="new">$38</span>
                  {/* Old Price Mockup If Need */}
                  {/* <span class="old">$46</span> */}
                </div>
              </div>
              {/* Action Button */}
              <div className="action-button fix">
                <a href="#">add to cart</a>
              </div>
            </div>
          </div>
        </div>{/* Product End*/}
        {/* Product Start*/}
        <div className="col-lg-4 col-md-6 col-12 mb-60">
          <div className="product">
            {/* Image Wrapper */}
            <div className="image">
              {/* Image */}
              <a href="product-details.html" className="img"><img src="img/product/3.jpg" alt="Product" /></a>
              {/* Wishlist */}
              <a href="#" className="wishlist"><i className="fa fa-heart-o" /></a>
              {/* Label */}
              {/* <span class="label">New</span> */}
            </div>
            {/* Content */}
            <div className="content">
              {/* Head Content */}
              <div className="head fix">
                {/* Title & Category */}
                <div className="title-category float-left">
                  <h5 className="title"><a href="product-details.html">Santa Claus Doll</a></h5>
                  <a href="shop.html" className="category">Catalog</a>
                </div>
                {/* Price */}
                <div className="price float-right">
                  <span className="new">$38</span>
                  {/* Old Price Mockup If Need */}
                  {/* <span class="old">$46</span> */}
                </div>
              </div>
              {/* Action Button */}
              <div className="action-button fix">
                <a href="#">add to cart</a>
              </div>
            </div>
          </div>
        </div>{/* Product End*/}
        {/* Product Start*/}
        <div className="col-lg-4 col-md-6 col-12 mb-60">
          <div className="product">
            {/* Image Wrapper */}
            <div className="image">
              {/* Image */}
              <a href="product-details.html" className="img"><img src="img/product/4.jpg" alt="Product" /></a>
              {/* Wishlist */}
              <a href="#" className="wishlist"><i className="fa fa-heart-o" /></a>
              {/* Label */}
              <span className="label">New</span>
            </div>
            {/* Content */}
            <div className="content">
              {/* Head Content */}
              <div className="head fix">
                {/* Title & Category */}
                <div className="title-category float-left">
                  <h5 className="title"><a href="product-details.html">Holiday Cap</a></h5>
                  <a href="shop.html" className="category">Catalog</a>
                </div>
                {/* Price */}
                <div className="price float-right">
                  <span className="new">$38</span>
                  {/* Old Price Mockup If Need */}
                  {/* <span class="old">$46</span> */}
                </div>
              </div>
              {/* Action Button */}
              <div className="action-button fix">
                <a href="#">add to cart</a>
              </div>
            </div>
          </div>
        </div>{/* Product End*/}
        {/* Product Start*/}
        <div className="col-lg-4 col-md-6 col-12 mb-60">
          <div className="product">
            {/* Image Wrapper */}
            <div className="image">
              {/* Image */}
              <a href="product-details.html" className="img"><img src="img/product/5.jpg" alt="Product" /></a>
              {/* Wishlist */}
              <a href="#" className="wishlist"><i className="fa fa-heart-o" /></a>
              {/* Label */}
              {/* <span class="label">New</span> */}
            </div>
            {/* Content */}
            <div className="content">
              {/* Head Content */}
              <div className="head fix">
                {/* Title & Category */}
                <div className="title-category float-left">
                  <h5 className="title"><a href="product-details.html">Holiday Doll</a></h5>
                  <a href="shop.html" className="category">Catalog</a>
                </div>
                {/* Price */}
                <div className="price float-right">
                  <span className="new">$38</span>
                  {/* Old Price Mockup If Need */}
                  {/* <span class="old">$46</span> */}
                </div>
              </div>
              {/* Action Button */}
              <div className="action-button fix">
                <a href="#">add to cart</a>
              </div>
            </div>
          </div>
        </div>{/* Product End*/}
        {/* Product Start*/}
        <div className="col-lg-4 col-md-6 col-12 mb-60">
          <div className="product">
            {/* Image Wrapper */}
            <div className="image">
              {/* Image */}
              <a href="product-details.html" className="img"><img src="img/product/6.jpg" alt="Product" /></a>
              {/* Wishlist */}
              <a href="#" className="wishlist"><i className="fa fa-heart-o" /></a>
              {/* Label */}
              {/* <span class="label">New</span> */}
            </div>
            {/* Content */}
            <div className="content">
              {/* Head Content */}
              <div className="head fix">
                {/* Title & Category */}
                <div className="title-category float-left">
                  <h5 className="title"><a href="product-details.html">Holiday Candle</a></h5>
                  <a href="shop.html" className="category">Catalog</a>
                </div>
                {/* Price */}
                <div className="price float-right">
                  <span className="new">$38</span>
                  {/* Old Price Mockup If Need */}
                  {/* <span class="old">$46</span> */}
                </div>
              </div>
              {/* Action Button */}
              <div className="action-button fix">
                <a href="#">add to cart</a>
              </div>
            </div>
          </div>
        </div>{/* Product End*/}
      </div>{/* Product Wrapper End*/}
    </div>
  </div>{/* Product Section End*/}
  {/* Testimonial Section Start*/}
  <div className="testimonial-section section bg-gray pt-100 pb-65" style={{backgroundImage: 'url(img/bg/testimonial.png)'}}>
    <div className="container">
      {/* Section Title Start*/}
      <div className="row">
        <div className="section-title text-center col mb-60">
          <h1>Customer Reviews</h1>
        </div>
      </div>{/* Section Title End*/}
      <div className="row">
        <div className="col-lg-8 col-md-10 col-12 ml-auto mr-auto">
          {/* Testimonial Slider Start */}
          <div className="testimonial-slider text-center">
            {/* Single Testimonial */}
            <div className="single-testimonial">
              <img src="img/testimonial/1.jpg" alt="customer" />
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
              <h5>Betty Moore</h5>
            </div>
            {/* Single Testimonial */}
            <div className="single-testimonial">
              <img src="img/testimonial/1.jpg" alt="customer" />
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
              <h5>Betty Moore</h5>
            </div>
            {/* Single Testimonial */}
            <div className="single-testimonial">
              <img src="img/testimonial/1.jpg" alt="customer" />
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
              <h5>Betty Moore</h5>
            </div>
          </div>{/* Testimonial Slider End */}
        </div>
      </div>
    </div>
  </div>{/* Testimonial Section End*/}
  {/* Newsletter Section Start*/}
  <div className="newsletter-section section pt-100 pb-120">
    <div className="container">
      {/* Section Title Start*/}
      <div className="row">
        <div className="section-title text-center col mb-55">
          <h1>Newsletter</h1>
          <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
        </div>
      </div>{/* Section Title End*/}
      <div className="row">
        <div className="text-center col">
          {/* Newsletter Form */}
          <form action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="subscribe-form validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
              <label htmlFor="mce-EMAIL" className="d-none">Subscribe to our mailing list</label>
              <input type="email" defaultValue name="EMAIL" className="email" id="mce-EMAIL" placeholder="Your email address" required />
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" tabIndex={-1} defaultValue /></div>
              <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button">subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>{/* Testimonial Section End*/}
  {/* Blog Section Start*/}
  <div className="blog-section section bg-gray pt-100 pb-60">
    <div className="container">
      {/* Section Title Start*/}
      <div className="row">
        <div className="section-title text-center col mb-60">
          <h1>Christmas Blog</h1>
        </div>
      </div>{/* Section Title End*/}
      <div className="row">
        {/* Blog Item Start*/}
        <div className="blog-item col-lg-4 col-md-6 col-12 mb-60">
          {/* Image */}
          <a href="blog-details.html" className="image"><img src="img/blog/1.jpg" alt="blog" /></a>
          {/* Content */}
          <div className="content fix">
            {/* Publish Date */}
            <span className="publish"><span>Published on:</span> 25 May 2017</span>
            {/* Title */}
            <h4 className="title"><a href="blog-details.html">If you are going to use a passage.</a></h4>
            {/* Decs */}
            <p>If you are going to use a passage of Lorem Ipsum, yneed to be sure there isn't anything embarrassing hidden ithe middle text. All the Lorem Ipsum.</p>
            {/* Read More Link */} 
            <a href="blog-details.html" className="read-more">Read More</a>
          </div>
        </div>{/* Blog Item End*/}
        {/* Blog Item Start*/}
        <div className="blog-item col-lg-4 col-md-6 col-12 mb-60">
          {/* Image */}
          <a href="blog-details.html" className="image"><img src="img/blog/2.jpg" alt="blog" /></a>
          {/* Content */}
          <div className="content fix">
            {/* Publish Date */}
            <span className="publish"><span>Published on:</span> 25 May 2017</span>
            {/* Title */}
            <h4 className="title"><a href="blog-details.html">Ut enim ad minima veniam, quis.</a></h4>
            {/* Decs */}
            <p>If you are going to use a passage of Lorem Ipsum, yneed to be sure there isn't anything embarrassing hidden ithe middle text. All the Lorem Ipsum.</p>
            {/* Read More Link */} 
            <a href="blog-details.html" className="read-more">Read More</a>
          </div>
        </div>{/* Blog Item End*/}
        {/* Blog Item Start*/}
        <div className="blog-item col-lg-4 col-md-6 col-12 mb-60">
          {/* Image */}
          <a href="blog-details.html" className="image"><img src="img/blog/3.jpg" alt="blog" /></a>
          {/* Content */}
          <div className="content fix">
            {/* Publish Date */}
            <span className="publish"><span>Published on:</span> 25 May 2017</span>
            {/* Title */}
            <h4 className="title"><a href="blog-details.html">At vero eos et accusamus et iusto</a></h4>
            {/* Decs */}
            <p>If you are going to use a passage of Lorem Ipsum, yneed to be sure there isn't anything embarrassing hidden ithe middle text. All the Lorem Ipsum.</p>
            {/* Read More Link */} 
            <a href="blog-details.html" className="read-more">Read More</a>
          </div>
        </div>{/* Blog Item End*/}
      </div>
    </div>
  </div>{/* Blog Section End*/}
</div>
<Footer/>
        </>
     );
}

export default Home;