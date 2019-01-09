import React from 'react'; 
import '../../styles/LandingPage.scss'; 

export const LandingPage = () => {
  return (
    <main className="landing-page-container">
      <article className="title-container">
        <h1>Congressional Records</h1>
      </article>
      <div className="logo-container">
        <img className="logo"src='./icons/congress.svg' alt='capitol building'/>
      </div>
      <article className="text-container">
        <h3>Harness Information That WIll Keep You Informed and Inspire You To Get Involved</h3>
      </article>
    </main>
  )
}