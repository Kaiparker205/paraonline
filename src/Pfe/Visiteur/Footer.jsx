import React from 'react';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';
const FooterApp = () => {
  return (
    <footer className="text-white bg-dark">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h4 className="mb-4">Subscribe to our newsletter</h4>
              
          </div>
        
          <div className="col-lg-6 col-12">
            <h4 className="mb-4">Follow us on social media</h4>
            <p className="mb-2">Connect with us and share your feedback.</p>
            <div className="d-flex">
             <Facebook fontSize="large" color="primary" />
             <Twitter fontSize="large" color="primary" />
             <Instagram fontSize="large" color="primary" />
             <YouTube fontSize="large" color="error" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-secondary py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <p className="mb-0">© 2024 My Website. All rights reserved.</p>
          <p className="mb-0">Developed by dev201 team</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterApp;
