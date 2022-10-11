import React from 'react'

export default function Home() {
  return (
    <div className='home'>
        <section className="banner">
            <img src="/images/home-banner.svg" alt="banner" />
            <div className="container">
                <div className="banner-box">
                    <h1>Toptalent</h1>
                    <p>A true business launchpad to connect real world companies with blockchain technology.</p>
                    <button className='primarybtn'>Read Whitepaper</button>
                </div>
            </div>
        </section>
    </div>
  )
}
