import React, { useEffect } from 'react'
import './Home.css'
import Aos from 'aos';

 
const bigData = [
                 { id:1, "title":"Cardiology","content":"Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.","pic":"" },     
                 { id:2, "title":"Pulmonary","content":"Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.","pic":"" }, 
                 { id:3, "title":"Neurology","content":"Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.","pic":"" }, 
                 { id:4, "title":"Orthopedics","content":"Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.","pic":"" } ,  
                 { id:5, "title":"Dental Surgery","content":"Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.","pic":"" } ,
                 { id:6, "title":"Laboratory","content":"Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.","pic":"" } 
                 
]

const bigData_01 = [
                    { id:1, "title":"Doctor Name","content":"Department","pic":"./img/team-1.jpg" },
                    { id:2, "title":"Doctor Name","content":"Department","pic":"./img/team-2.jpg" },
                    { id:3, "title":"Doctor Name","content":"Department","pic":"./img/team-3.jpg" },
                    { id:4, "title":"Doctor Name","content":"Department","pic":"./img/team-4.jpg" }
]

function Home() {
  useEffect(()=> {
    Aos.init();
  }, [])
  return (
    <div className='container-fluid'>
        <div className="row  text-light" >
            <div className="col-md-5 bg-primary pt-5" >
                <h1 className='mx-5 mt-5 fw-bolder ' data-aos ="fade-in" data-aos-delay="600">Good Health Is The <br /> Root Of All <br /> Heppiness</h1>
                <div className='d-flex mx-5 mt-5' data-aos ="fade-in" data-aos-delay="600">
                <div  className='border-start px-1'>
                    <h2 data-toggle="counter-up">123</h2>
                    <p>Expert Doctors</p>
                </div>
                <div className='mx-3 border-start px-2' >
                    <h2 data-toggle="counter-up">124</h2>
                    <p>Medical Stuff</p>
                </div>
                <div className='border-start px-2'>
                    <h2 data-toggle="counter-up">12304</h2>
                    <p>Total Patients</p>
                </div>
                </div>  
            </div>
            {/* <-------------------------Carousal-Start----------------------------> */}
            <div id="carouselExampleIndicators"  className="col-md-7  p-0 carousel slide"  data-bs-ride="carousel">
  <div className="carousel-indicators" id='b'>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner h_01">
    <div className="carousel-item active">
      <img src="./img/carousel-1.jpg" className="d-block w-100 " alt="carousel-1"/>
    </div>
    <div className="carousel-item">
      <img src="./img/carousel-2.jpg" className="d-block w-100 " alt="carousel-2"/>
    </div>
    <div className="carousel-item">
      <img src="./img/carousel-3.jpg" className="d-block w-100 " alt="carousel-3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
                  </div>
        </div>
          {/* <-------------------------------About-----------------------------> */}
          <div className="row my-3">
              <div className="h_01 col-md-6 mt-5 position-relative " id='c'>
                  <img className='about_01' src="./img/about-1.jpg" alt="" />
                  <img className='about_02' src="./img/about-2.jpg" alt="" />
              </div>
              <div className="col-md-6 mt-5 fadeInUp">
                  <button className='mt-5 border-0 px-3 rounded-5'>About</button>
                  <h1 className='mt-2'>Why You Should Trust Us? Get Know About Us!</h1>
                  <p className='fs-5 mt-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                  <p className='fs-5 mt-3'>Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                  <ul>
                      <li>Quality health care</li>
                      <li>Only Qualified Doctors</li>
                      <li>Medical Research Professionals</li>
                  </ul>
                <a href="#" className='btn btn-primary    px-5 p-3 rounded-5'>Know More</a>
              </div>
          </div>
        {/* <-----------------------------Services-----------------------------------> */}
      <div className="row my-4 " data-aos = "fade-right">
        <div className=" col-12 fs-1 d-flex justify-content-center ">Services</div>
        <div className=" col-12 fs-1 d-flex justify-content-center ">Health Care Solutions</div> 
      </div>
      <div className="row my-3" data-aos ="fade-up" data-aos-delay="700" >
        {bigData.map((data)=>{
          return(
            <div className="col-md-4 mt-3 col-sm-6">
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

      <div className="row my-5" >
        <div className="col-md-6 p-5 bg-primary text-light" data-aos ="fade-right" data-aos-delay="600" >
          <button className='rounded-5 bg-transparent border-light border px-2 text-light mb-3'>Features</button>
          <h1>Why Choose Us</h1>
          <h6 className='mt-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</h6>
          <div className='row'>
            <div className='col-6'>
              <img src="" alt="" />
              <div>
                <h5>Experience</h5>
                <h4>Doctors</h4>
              </div>
            </div>
            <div className='col-6'>
              <img src="" alt="" />
              <div>
              <h5>Quality</h5>
                <h4>Services</h4>
              </div>
            </div>
            <div className='col-6'>
              <img src="" alt="" />
              <div>
              <h5>Positive</h5>
                <h4>Consultation</h4>
              </div>
            </div>
            <div className='col-6'>
              <img src="" alt="" />
              <div>
                <h5>24 Hours</h5>
                <h4>Support</h4>
              </div>
            </div>
          </div>  

        </div>
        <div className="col-md-6  p-0 " data-aos ="fade-up" data-aos-delay="600">
          <img className='h_01 w-100 ' src="./img/feature.jpg" alt="" />
        </div>
      </div>
      {/* <---------------------Our Experience Doctors------------------------> */}
      <div className="row my-4 " data-aos ="fade-down" data-aos-delay="600">
        <div className=" col-12 fs-1 d-flex justify-content-center ">Doctors</div>
        <div className=" col-12 fs-1 d-flex justify-content-center ">Our Experience Doctors</div> 
      </div>
         <div className="row my-3 " data-aos ="fade-up" data-aos-delay="600">
        {bigData_01.map((data_01)=>{
          return(
            <div className="col-md-3 mt-3 col-sm-6 " >
        <div className="card k mt-3">
              <img src={data_01.pic} alt="" className="height" />
              <div className="card-body k">
              <h5 className='text-center my-3'>{data_01.title} </h5>
              <h6 className='text-center mb-3'>{data_01.content}</h6>
              {/* <a to="#" class=" mx-5 px-0 btn btn-primary">Buy</a> */}
              </div>
            </div>
        </div>
          )
        })} 
      </div>
      {/* <-------------------------------------------------> */}
      <div className="row">
        <div className="col-md-6 p-5" data-aos ="fade-right" data-aos-delay="600">
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
        <div className="col-lg-6 p-5 mb-5 k" data-aos ="fade-up" data-aos-delay="600">
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
{/* <---------------------------------Rest---------------------------------------> */}


    </div>
  )
}

export default Home
