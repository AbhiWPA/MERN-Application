import React from 'react'
import Header from '../components/Layout/Header'
import image from "../assets/photo-01.jpg";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   <>
  
      {/* <div className='z-10 absolute mt-56 ml-10 bg-transparent'>
      </div>
      <img src={image} className='w-full' style={{objectFit: 'cover', height: '550px'}}></img> */}
      
      <div className='relative' style={{objectFit: 'cover', height: '555px', marginTop: '-17px'}}>

                  <div id="carouselExampleCaptions" className="carousel slide h-fit" style={{objectFit: 'cover', height: '555px'}}>
                  <button className='!bg-green-700 shadow-black shadow-xl' style={{position:'absolute', width:'200px', height:'40px', top:'212px', bottom:'0', left:'0', right:'0', margin: 'auto', zIndex: '1'}}><Link to={'/order'} className='!text-white text-xl font-bold font-serif'>Place Order</Link></button>
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
          </div>

          

      </div>
   </>
   
  )
}

export default Home