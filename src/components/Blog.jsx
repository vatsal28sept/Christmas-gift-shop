import Header from "./Header";
import Footer from "./Footer";
function Blog() {
    return ( 
        <>
        
        <Header/>
     {/* Page Banner Section Start*/}
<div className="page-banner-section section" style={{backgroundImage: 'url(img/bg/page-banner.jpg)'}}>
  <div className="container">
    <div className="row">
      {/* Page Title Start */}
      <div className="page-title text-center col">
        <h1>blog</h1>
      </div>{/* Page Title End */}
    </div>
  </div>
</div>

        {/* Blog Section Start*/}
<div className="blog-section section bg-gray pt-100 pb-60">
  <div className="container">
    <div className="row flex-row-reverse">
      {/* Blog Wrapper */}
      <div className="col-lg-8 col-12 mb-60">
        <div className="row">
          {/* Blog Item Start*/}
          <div className="blog-item col-md-6 col-12 mb-60">
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
          <div className="blog-item col-md-6 col-12 mb-60">
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
          <div className="blog-item col-md-6 col-12 mb-60">
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
          {/* Blog Item Start*/}
          <div className="blog-item col-md-6 col-12 mb-60">
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
          <div className="blog-item col-md-6 col-12 mb-60">
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
          <div className="blog-item col-md-6 col-12 mb-60">
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
          {/* Pagination Start */}
          <div className="pagination col-12 mt-20">
            <ul>
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">6</a></li>
              <li className="arrows"><a href="#"><i className="fa fa-angle-right" /></a></li>
            </ul>
          </div>{/* Pagination End */}
        </div>
      </div>
      {/* Sidebar Wrapper */}
      <div className="col-lg-4 col-12 mb-60">
        <div className="sidebar-wrapper">
          {/* Single Sidebar */}
          <div className="single-sidebar mb-30">
            {/* Titel */}
            <h4 className="sidebar-title">Search</h4>
            {/* Form */}
            <form action="#" className="sidebar-search-form">
              <input type="text" placeholder="Enter Keywords" />
              <button><i className="ion-ios-search-strong" /></button>
            </form>
          </div>
          {/* Single Sidebar */}
          <div className="single-sidebar mb-30">
            {/* Titel */}
            <h4 className="sidebar-title">Recent Post</h4>
            {/* Sdebar Post */}
            <div className="sidebar-post fix">
              {/* Image */}
              <a href="blog-details.html" className="image"><img src="img/blog/sidebar-post-1.jpg" alt /></a>
              {/* Content */}
              <div className="content fix">
                <span className="date">14 JUN 2016</span>
                <a href="blog-details.html" className="title">Where can I get some?</a>
                <p>Many desktop publis packages and web page editors.</p>
              </div>
            </div>
            {/* Sdebar Post */}
            <div className="sidebar-post fix">
              {/* Image */}
              <a href="blog-details.html" className="image"><img src="img/blog/sidebar-post-2.jpg" alt /></a>
              {/* Content */}
              <div className="content fix">
                <span className="date">20 JUN 2016</span>
                <a href="blog-details.html" className="title">Going to use a passage.</a>
                <p>Many desktop publis packages and web page editors.</p>
              </div>
            </div>
            {/* Sdebar Post */}
            <div className="sidebar-post fix">
              {/* Image */}
              <a href="blog-details.html" className="image"><img src="img/blog/sidebar-post-3.jpg" alt /></a>
              {/* Content */}
              <div className="content fix">
                <span className="date">20 JUN 2016</span>
                <a href="blog-details.html" className="title">Going to use a passage.</a>
                <p>Many desktop publis packages and web page editors.</p>
              </div>
            </div>
          </div>
          {/* Single Sidebar */}
          <div className="single-sidebar mb-30">
            {/* Titel */}
            <h4 className="sidebar-title">Tags</h4>
            {/* Tag Cloud */}
            <div className="tag-cloud fix">
              <a href="#">Bestsellers</a>
              <a href="#">Gifts</a>
              <a href="#">New</a>
              <a href="#">Christmas gift</a>
              <a href="#">Festive cakes</a>
              <a href="#">Home decor</a>
              <a href="#">Toys</a>
            </div>
          </div>
          {/* Single Sidebar */}
          <div className="single-sidebar mb-30">
            {/* Titel */}
            <h4 className="sidebar-title">Newsletter</h4>
            <p>Natus error sit voluptatem accusantium doloremque laudantium.</p>
            {/* Newsletter Form */}
            <form action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="sidebar-subscribe-form validate" target="_blank" noValidate>
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
    </div>
  </div>
</div>{/* Blog Section End*/}

        <Footer/>
        </>
     );
}

export default Blog;