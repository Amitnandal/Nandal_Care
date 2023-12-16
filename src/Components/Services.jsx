import React , {useEffect} from 'react'
import './About.css'
import Aos from 'aos';


const bigData_03 = [
  { id:1, "title":"Cardiology","content":"The cardiology department deals with the diagnosis, treatment and management of conditions affecting the heart.","pic":"" },     
  { id:2, "title":"Pulmonary","content":"Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.","pic":"" }, 
  { id:3, "title":"Neurology","content":"The Department of Neurology deals with managing and treating disorders related to the nervous system of the body. ","pic":"" }, 
  { id:4, "title":"Orthopedics","content":"Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.","pic":"" } ,  
  { id:5, "title":"Dental Surgery","content":"Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.","pic":"" } ,
  { id:6, "title":"Laboratory","content":"Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.","pic":"" } 
  
]

function Services() {
  useEffect(()=> {
    Aos.init();
  }, [])
  return (
    <div className='container-fluid'>
      <div className="row mb-5 ">
        <img className='A_top w-100 ' src="./img/header-page.jpg" alt="" />
            <div className='A_top_02 t_03  bg_top rounded col-lg-5 col-md-6 col-xm-6 col-sm-7' data-aos ="fade-down" data-aos-delay="600">
            <h2 className='p-3'>We Are Always Ready To  <span className='text-primary '> Help</span>    You & Your Family </h2>
            {/* <p className='px-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quia deleniti nesciunt et sapiente harum doloribus provident.</p> */}
            {/* <a href="#" className='btn mx-3 pb-3  btn-primary    px-5 p-3 rounded-5'>Know More</a> */}
            </div>
        </div>

        {/* <---------------------------------------------------------> */}
         {/* <-----------------------------Services-----------------------------------> */}
      <div className="row my-4" data-aos ="fade-up" data-aos-delay="600">
        <div className=" col-12 fs-1 d-flex justify-content-center " >Health Care Solutions</div> 
      </div>
      <div className="row my-3">
        {bigData_03.map((data)=>{
          return(
            <div className="col-md-4 mt-3 col-sm-6" data-aos ="fade-up" data-aos-delay="600" >
        <div className="card   mt-3 ">
              <img src={data.pic} alt="" className="height" />
             <div className="card-body k p-5">
             <h4 >{data.title} </h4>
              <p className='my-3'>{data.content}</p>
              <a to="#" class="  btn btn-primary">
                Book An Appointment
              </a>
             </div>
            </div>
        </div>
          )
        })}
      </div>
      {/* <---------------------------------------------------------------> */}
      <div className="row my-5">
        <div className="col-lg-6 p-5" data-aos ="fade-right" data-aos-delay="600">
          <h1 className='my-4'>Make An Appointment To Visit Our Doctor</h1>
          <p className='my-4 fs-6 text-secondary'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <div className='d-flex k my-4 p-5 rounded-3'>
            <img src="" alt="" />
            <div>
              <h6>Call Us Now</h6>
              <h4>+012 345 6789</h4>
            </div>
          </div>
          <div className='d-flex k mt-4 p-5 rounded-3'>
            <img src="" alt="" />
            <div>
              <h6>Mail Us Now</h6>
              <h4>info@example.com</h4>
            </div>
          </div>
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

export default Services
