import React , {useEffect} from 'react';
import './About.css';
import 'boxicons'
import Aos from 'aos';

function Contact() {
  useEffect(()=> {
    Aos.init();
  }, [])
  return (
    <div className='container-fluid'>
        <div className="row mb-5 ">
        <img className='A_top w-100 ' src="./img/header-page.jpg" alt="" />
            <div className=' A_top_02 t_02 col-md-4 col-xm-6 col-sm-6' data-aos ="fade-right" data-aos-delay="600">
            <div className=' text-center rounded  p-2 bg_top' >
            <p className='fs-1  fw-bolder'>Contact Us  </p>
            <h4>For all types of queries</h4>
            </div>
            </div>
        </div>
       
        <div className="row" data-aos ="fade-up" data-aos-delay="600">
            <div className="col-sm-6 col-lg-4">
            <div className='d-flex k card-body my-4 py-5  rounded-3'>
           <div className='p-2  pt-3 m-3 bg-light px-3  rounded-circle'>
           <box-icon name='phone' type='solid' color='rgba(13, 110, 253,9)' ></box-icon>
           </div>
            <div className='mx-2'>
            <p class="card-text "><small class="text-body-secondary">Call Us Now</small></p> 
              <h4>+012 345 6789</h4>
            </div>
          </div>
            </div>
            <div className="col-sm-6 col-lg-4 ">
            <div className='d-flex  k  card-body my-4 py-5 pb-4 rounded-3'>
           <div className='p-2  pt-3 m-4 bg-light px-3  rounded-circle'>
           <box-icon name='phone' type='solid' color='rgba(13, 110, 253,9)' ></box-icon>
           </div>
            <div className='mx-2'>
            <p className="card-text text-body-secondary mb-2">Address</p> 
              <h4 className='pb-2'>123 Street, New York, USA</h4>
            </div>
          </div>    
            </div>
            <div className="col-sm-6 col-lg-4 ">
            <div className='d-flex  k  card-body my-4 py-5 rounded-3'>
           <div className='p-2  pt-3 m-3 bg-light px-3  rounded-circle'>
           <box-icon name='phone' type='solid' color='rgba(13, 110, 253,9)' ></box-icon>
           </div>
            <div className='mx-1'>
            <p class="card-text"><small class="text-body-secondary">Mail Us Now</small></p>
              <h4>info@example.com</h4>
            </div>
          </div>
            </div>
        </div>
        {/* <-------------------------------------------------------------------> */}
        <div className="row">
        <div className="col-lg-6 pb-5" data-aos ="fade-right" data-aos-delay="600">
        <iframe className='w-100 h-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.85923021464!2d77.23700959541087!3d28.52240403733042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1701772544227!5m2!1sen!2sin" style={{  border:0, allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade",}}></iframe>
        </div>
        <div className="col-lg-6 p-5 mb-5 k " data-aos ="fade-up" data-aos-delay="600">
            <h1>
                Contact Us
            </h1>
        <form >
          <div className="row">
            <div className="col-sm-6 mt-3  ">
            <input type="text" className='text-center w-100 mx-auto p-3 border-0 rounded-3 '  required placeholder='User_Name' />
            </div>
            <div className="col-sm-6 mt-3 ">
            <input type="text" className='text-center w-100 mx-auto p-3 border-0 rounded-3' required placeholder='Your_Mobile' />
            </div>
            <div className="col-sm-6 mt-3 ">
            <input type="text" className='text-center w-100 mx-auto p-3 border-0 rounded-3' required  pattern="[^@\s]+@[^@\s]+\.[^@\s]+" placeholder='Your_Email' title='use @ and .' />
            </div>
            <div className="col-sm-6 mt-3">
            <input type="text" className='text-center w-100 mx-auto p-3 border-0 rounded-3' required placeholder='Choose_Doctor' />
            </div>
            <div className="col-sm-6 mt-3">
            <input type="text" className=' w-100 text-center mx-auto p-3 border-0 rounded-3' required placeholder='Choose_Date' />
            </div>
            <div className="col-sm-6 mb-3 mt-3 ">
            <input type="text" className='w-100 text-center mx-auto p-3 border-0 rounded-3' required placeholder='Timing' />
            </div>
            <div className="col-11  mt-3">
              <textarea className="form-control border-0 w-100" rows="5" placeholder='Describe your Problem'></textarea>
            </div>
            <div className="col-11 my-3   ">
            <input type={"submit"}
          className='bg-primary w-100 rounded border-0 text-light fs-5 p-3' placeholder='Book Appointment' /> 
            </div>
          </div>
         </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
