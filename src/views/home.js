import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Young Fond Shark</title>
        <meta property="og:title" content="Young Fond Shark" />
      </Helmet>
      <a href="https://luka.jaoeta.sa.com/" className="home-link">
        <img alt="image" src="/sl_flags-400w.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
