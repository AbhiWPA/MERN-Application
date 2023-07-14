import React from 'react'
import Header from '../components/Layout/Header'
import image from "../assets/photo-01.jpg";

const Home = () => {
  return (
   <>
  
      {/* <div className='z-10 absolute mt-56 ml-10 bg-transparent'>
      </div>
      <img src={image} className='w-full' style={{objectFit: 'cover', height: '550px'}}></img> */}
      
      <div className='relative' style={{objectFit: 'cover', height: '561px', border: '1px solid red', marginTop: '64px'}}>

                  {/* <div id="carouselExampleCaptions" className="carousel slide h-fit">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                  <div className="w-full h-full carousel-inner">
                    <div className="carousel-item active">
                      <img src={image} className="d-block w-100" alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                <img src={image} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div> */}

      </div>
   </>
   
  )
}

export default Home