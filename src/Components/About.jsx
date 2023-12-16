import React, { useEffect } from 'react'
import './About.css'
import './Home.css'
import Aos from 'aos';



const bigData_02 = [
  { id:1, "title":"Doctor Name","content":"Department","pic":"./img/team-1.jpg" },
  { id:2, "title":"Doctor Name","content":"Department","pic":"./img/team-2.jpg" },
  { id:3, "title":"Doctor Name","content":"Department","pic":"./img/team-3.jpg" },
  { id:4, "title":"Doctor Name","content":"Department","pic":"./img/team-4.jpg" }
]

function About() {
  useEffect(()=> {
    Aos.init();
  }, [])
  return (
    <div className='container-fluid'>
        <div className="row mb-5 ">
        <img className='A_top w-100 ' src="./img/header-page.jpg" alt="" />
            <div className='A_top_02 col-6 mt-5 p-5' data-aos ="fade-up" data-aos-delay="600">
            <h1 className='mt-5'>We Provide <span className='text-primary '> Medical</span> Services <br /> That You Can Trust </h1>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quia deleniti nesciunt et sapiente harum doloribus provident.</p> */}
            <a href="#" className='btn btn-primary    px-5 p-3 rounded-5'>Know More</a>
            </div>
        </div>

        {/* <---------------------------------------------------------> */}
         <div className="row my-3">
              <div className="col-md-6 mt-5 position-relative" data-aos ="fade-right" data-aos-delay="600">
                  <img className='about_01' src="./img/about-1.jpg" alt="" />
                  <img className='about_02' src="./img/about-2.jpg" alt="" />
              </div>
              <div className="col-md-6 mt-5" data-aos ="fade-up" data-aos-delay="600">
                  <button className='mt-5 border-0 px-3 rounded-5'>About</button>
                  <h1 className='mt-2'>Why You Should Trust Us? Get Know About Us!</h1>
                  <p className='fs-5 mt-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                  <p className='fs-5 mt-3'>Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                  <ul>
                      <li>Quality health care</li>
                      <li>Only Qualified Doctors</li>
                      <li>Medical Research Professionals</li>
                  </ul>
                <a href="#" className='btn btn-primary px-5 p-3 rounded-5' >Know More</a>
              </div>
          </div>

          {/* <----------------------------------------------------> */}
           {/* <---------------------Our Experience Doctors------------------------> */}
      <div className="row my-4" data-aos ="fade-up" data-aos-delay="600">
        <div className=" col-12 fs-1 d-flex justify-content-center ">Doctors</div>
        <div className=" col-12 fs-1 d-flex justify-content-center ">Our Experience Doctors</div> 
      </div>
         <div className="row my-5" data-aos ="fade-up" data-aos-delay="600">
        {bigData_02.map((data_01)=>{
          return(
            <div className="col-md-3 mt-3 col-sm-6">
        <div className="card  k   mt-3 ">
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
      
    </div>
  )
}

export default About
