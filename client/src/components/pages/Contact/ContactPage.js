import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';

const ContactPage = () => (
  <div>
    <PageTitle>Contact</PageTitle>
    <div className="contact-content">
      <div className="address">
        Your Favourite Blog Page Ltd.<br/>
        314 Pennsylvania Avenue<br/>
        Washington, WA 200001<br/>
      </div>
      <p>Mobile Number: <a href="tel:+02079143411">207-914-3411</a></p>
    </div>
    <a href="https://github.com/kajpawl/" style={{ position: "fixed", bottom: "26px", left: 0, right: 0, textAlign: "center", fontSize: "14px" }}>© Kajetan Pawliszyn 2019</a>
  </div>
);

export default ContactPage;