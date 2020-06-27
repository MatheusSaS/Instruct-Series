import React from "react";

function DiscoverPage() {
  return (
    <div className="app-page rel">
      <h1 className="page-title s24 fontB c33">Fale Conosco</h1>
      <div className="container-contact100">
        <div className="wrap-contact100">
          <form className="contact100-form validate-form">
            <span className="contact100-form-title c333">Entre em contato</span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Please enter your name"
            >
              <input
                className="input100"
                type="text"
                name="name"
                placeholder="Full Name"
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Please enter your email: e@a.x"
            >
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="E-mail"
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Please enter your phone"
            >
              <input
                className="input100"
                type="text"
                name="phone"
                placeholder="Phone"
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Please enter your message"
            >
              <textarea
                className="input100"
                name="message"
                placeholder="Your Message"
              ></textarea>
              <span className="focus-input100"></span>
            </div>

            <button class="button button3">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DiscoverPage;
