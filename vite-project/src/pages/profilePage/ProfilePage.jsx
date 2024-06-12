import React from 'react'
import './ProfilePage.css'
import Cover from '../../assets/images/userava.png'
import ava from '../../assets/images/userava.png'
import zakat from '../../assets/images/zakat.avif'

export default function Profile() {
  return (
    <div className='main-container'>
      
      <div className='content-container'>
        
        <div className="avatar-container">
        
          <img className="avatar" src={ava} alt="Avatar" />
          <button className="update-avatar">Update avatar</button>
        </div>
      </div>
      <div className="profile-details">
        <h1>Kohaku Tora</h1>
        <p>Described by Queenstown House & Garden magazine as having...</p>
        <ul>
          <li>Lives in: Auckland, New Zealand</li>
          <li>Account: Verified member</li>
          <li>Speaks: English, Vietnamese</li>
        </ul>
        <div className="reviews">
          <h2>Reviews</h2>
          <div className="review">
            <p><strong>Tobin Hackett</strong></p>
            <p>I enjoyed my communication with them...</p>
          </div>
          <div className="review">
            <p><strong>Myrtie Runolfsson</strong></p>
            <p>Kohaku and her husband were great guests...</p>
          </div>
        </div>
      </div>
    </div>
  )
}