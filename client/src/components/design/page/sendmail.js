
import React, { useRef } from "react";
//import emailjs, { init } from "@emailjs/browser";
function Sendmail() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} id="form">
        <h1 className="text-center">Nous contact</h1>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="First Name">Nom</label>
            <input type="text" className="form-control" name="firstname" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="Last Name">Prenom</label>
            <input type="text" className="form-control" name="lastname" />
          </div>
          <div className="form-group col-12">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder=""
              name="user_address"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="message">message</label>
            <textarea
              type="text"
              className="form-control"
              id="inputmessage4"
              name="user_message"
            />
          </div>
        </div>

        <button id="boutonMessage" type="submit" className="">
          Envoyer
        </button>
      </form>
    </div>
  );
}
export default Sendmail;