import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <img src="/images/footer-left.svg" alt="footer" className='left-img' />
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img src="/images/logo.svg" alt="svg" />
          </div>
          <div className="col-sm-6">
            <div className="social">
              <h4>STAY CONNECTED</h4>
              <div className="icons">
                <a href="/"><img src="/images/discord.svg" alt="discord" /></a>
                <a href="/"><img src="/images/facebook.svg" alt="facebook" /></a>
                <a href="/"><img src="/images/twitter.svg" alt="twitter" /></a>
                <a href="/"><img src="/images/reddit.svg" alt="reddit" /></a>
                <a href="/"><img src="/images/telegram.svg" alt="telegram" /></a>
                <a href="/"><img src="/images/tiktok.svg" alt="tiktok" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <p>Copyright © 2022, <span>Toptalent launcpad.</span> All Rights Reserved.</p>
            </div>
            <div className="col-sm-5">
              <p>Made with <span className='heart'>❤</span>  by <span>Toptalent launcpad</span></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
