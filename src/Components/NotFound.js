import React from 'react'
import image from '../images/404.jpg'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="notFound">
        <div className='text'>
            <h2>404</h2>
            <p>You are not supposed to be here.</p>
        </div>
        <div className="imageContainer">
            <img src={image} alt='page not found' />
        </div>
        <div className="clearfix"></div>
    </section>
  )
}
