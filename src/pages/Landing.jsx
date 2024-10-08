import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/-1-1--unscreen.gif'
import featur1 from '../assets/images.jpeg'
import featur2 from '../assets/unnamed.jpg'
import featur3 from '../assets/Websites-to-Watch-Music-Videos-Online-for-free.jpg'

import { Card } from 'react-bootstrap'

const Landing = () => {
  return (
    <div style={{ paddingTop: "60px" }} className='container'>
      {/* landing Head */}
      <div className='row align-items-center vh-100'>
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media <br /> Player</span></h3>
          <p style={{ textAlign: "justify" }} className='mt-3 fs-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dignissimos, vel tempore atque animi harum! Maxime voluptas dicta modi nostrum maiores, deleniti dolorem, quis harum mollitia, sint quibusdam repudiandae. Accusamus?</p>
          <Link to={'/home'} className='btn btn-info fw-bold mt-3'>Get Started</Link>
        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
          <img className='img img-fluid ' src={landingImg} alt="" />
        </div>
      </div>
      {/* Features */}
      <div className='my-5'>
        <h3 className='text-center'>Features</h3>
        <div className='row mt-5'>
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img style={{ height: "250px" }} variant="top" src={featur1} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Users can upload, view and remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img style={{ height: "250px" }} variant="top" src={featur2} />
              <Card.Body>
                <Card.Title>Categorise Videos</Card.Title>
                <Card.Text>
                  Users can Categorise the videos by drag and drop feature.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img style={{ height: "250px" }} variant="top" src={featur3} />
              <Card.Body>
                <Card.Title>Managing Video History</Card.Title>
                <Card.Text>
                  Users can manage the watch history of all videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* Youtube */}
      <div className='my-5 row align-items-center border rounded p-5'>
        <div className='col-lg-5'>
          <h3 className='text-warning'>Simple, Fast and Powerful</h3>
          <p style={{ textAlign: "justify" }}> <span className='fs-5'>Play Everything:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, sit facilis eligendi tempore voluptatem consequatur aperiam tempora sunt reiciendis! Nihil id quia, in est odit laudantium libero assumenda accusantium vero.</p>
          <p style={{ textAlign: "justify" }}> <span className='fs-5'>Categorise Videos:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, sit facilis eligendi tempore voluptatem consequatur aperiam tempora sunt reiciendis! Nihil id quia, in est odit laudantium libero assumenda accusantium vero.</p>
          <p style={{ textAlign: "justify" }}> <span className='fs-5'>Managing History:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, sit facilis eligendi tempore voluptatem consequatur aperiam tempora sunt reiciendis! Nihil id quia, in est odit laudantium libero assumenda accusantium vero.</p>
        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
          <iframe width="497" height="360" src="https://www.youtube.com/embed/-i6zFGObBjQ" title="EARTHGANG - Swing (From &quot;Marvel&#39;s Spider-Man 2&quot;) ft. Benji." allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing