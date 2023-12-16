import React from 'react'
import './Home.css'
import 'boxicons'


function Footer() {
  return (
    <div className='container-fluid'>
      <div className="row pt-4 mt-4 pb-4 border-end Foot_bg">
        <div className=" col-sm-3">
            <h4 className="mb-4">Address</h4>
            <p><box-icon name='location-plus' color='rgba(246,240,240,9)' ></box-icon>123 Street, New York, USA</p>
            <p><box-icon name='phone' type='solid' color='rgba(252,248,248,9)' ></box-icon>+012 345 67890</p>
            <p><box-icon name='envelope' color='rgba(246,240,240,9)' ></box-icon>info@example.com</p>
            <div className='d-flex'> 
                <div className='border border-1  border-light p-1 rounded-circle m-1'><box-icon name='twitter' type='logo' color='rgba(251,243,243,9)' ></box-icon></div>
                <div className='border border-1  border-light p-1 rounded-circle m-1'><box-icon name='facebook' type='logo' color='rgba(251,243,243,9)' ></box-icon></div>
                <div className='border border-1  border-light p-1 rounded-circle m-1'><box-icon name='youtube' type='logo' color='rgba(251,243,243,9)' ></box-icon></div>
                <div className='border border-1  border-light p-1 rounded-circle m-1'><box-icon name='linkedin' type='logo' color='rgba(244,237,237,9)' ></box-icon></div>
            </div>
        </div>

        <div className=" col-sm-3">
            <h4 className="mb-4">Services</h4>
            <p>Cardiology</p>
            <p>Pulmonary</p>
            <p>Neurology</p>
            <p>Orthopedics</p>
            <p>Laboratory</p>
        </div>

        <div className=" col-sm-3">
            <h4 className="mb-4">Quick Links</h4>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Our Services</p>
            <p>Terms & Conditions</p>
            <p>Support</p>
        </div>

        <div className=" col-sm-3">
            <h4 className="mb-4">Newsletter</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h4 className="mb-4">Opening Hours</h4>
            <div className="row d-flex">
                <div className="col-6">Monday - Friday</div>
                <div className="col-6">08:00-20:00</div>
            </div>
            <div className="row d-flex">
                <div className="col-6">Saturday - Sunday</div>
                <div className="col-6">10:30-18:00</div>
            </div>
            
        </div> 
        <div className="row border-top mt-3">
        <div className='text-center mt-3 fs-2'>@ Copyright 2023 </div>
    </div>
    </div>
   
    </div>
  )
}

export default Footer
