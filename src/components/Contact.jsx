import Header from "./Header";
import Footer from "./Footer";
function Contact() {
    return ( 
        <>
        <Header />
        <div>
  {/* Contact Section Start*/}
  <div className="contact-section section bg-white pt-120">
    <div className="container">
      <div className="row">
        <div className="col-xl-10 col-12 ml-auto mr-auto">
          <div className="contact-wrapper">
            <div className="row">
              <div className="contact-info col-lg-5 col-12">
                <h4 className="title">Contact Info</h4>
                <p>It is a long established fact that readewill be distracted by the readable content of a page when looking at ilayout.</p>
                <ul>
                  <li><span>Address:</span>House 09,Road 3,Dhaka</li>
                  <li><span>Email:</span>christ@email.com</li>
                  <li><span>Phone:</span>+99 854 785 65</li>
                </ul>
                <div className="contact-social">
                  <a href="#"><i className="fa fa-facebook" /></a>
                  <a href="#"><i className="fa fa-twitter" /></a>
                  <a href="#"><i className="fa fa-instagram" /></a>
                  <a href="#"><i className="fa fa-pinterest-p" /></a>
                </div>
              </div>
              <div className="contact-form col-lg-7 col-12">
                <h4 className="title">Send Your Massage</h4>
                <form id="contact-form" action="https://demo.hasthemes.com/christ-preview/christ/mail.php" method="post">
                  <input type="text" name="name" placeholder="Your Name" />
                  <input type="email" name="email" placeholder="Your Email" />
                  <textarea name="message" placeholder="Your Message" defaultValue={""} />
                  <input type="submit" defaultValue="Submit" />
                </form>
                <p className="form-messege" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{/* Contact Section End*/}
  {/* Contact Map */}
  <div id="contact-map" />
 
 </div>

    
        <Footer />
        </>
     );
}

export default Contact;