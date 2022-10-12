import React from 'react'
import Footer from './../components/Footer';

export default function Home() {
  const tokenomicsData = [
    {title: 'Token Name', value: 'Toptalentlauncpad'},
    {title: 'Symbol', value: 'XTTL'},
    {title: 'Platfrom', value: 'Binance Smart Chain (BSC)'},
    {title: 'Needed Type', value: 'BSC'},
    {title: 'Total Supply', value: '333,444,555 Million'},
    {title: 'Max Supply', value: '333,444,555 Million'},
    {title: 'Persale', value: '116,705,594'},
    {title: 'Supply at listing', value: '116,705,594'},
  ]

  const teamMembers = [
    {image: 'team-1.jpg', name: 'Monica Taylor', desgination: 'CTO Co Founde'},
    {image: 'team-2.jpg', name: 'Ali Demir', desgination: 'Ceo and Co Founder'},
    {image: 'team-3.jpg', name: 'A.Al Qarni', desgination: 'Advisor'},
    {image: 'team-4.jpg', name: 'Harout Sarkisian', desgination: 'CTO Co Founde'},
    {image: 'team-5.jpg', name: 'Harout Sarkisian', desgination: 'CTO Co Founde'},
    {image: 'team-6.jpg', name: 'Carolina Fisher', desgination: 'CTO Co Founde'},
    {image: 'team-7.jpg', name: 'Yulia herzigova', desgination: 'CTO Co Founde'},
    {image: 'team-8.jpg', name: 'Alex white', desgination: 'CTO Co Founde'},
  ]
  return (
    <div className='home'>
        <section className="banner">
            {/* <img src="/images/home-banner.svg" alt="banner" /> */}
            <div className="container">
                <div className="banner-box">
                    <h1>Toptalent</h1>
                    <p>A true business launchpad to connect real world companies with blockchain technology.</p>
                    <button className='primarybtn'>Read Whitepaper</button>
                </div>
            </div>
        </section>

        <section className="who">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h2>Who we are?</h2>
              </div>
              <div className="col-sm-6">
                <div className="who-content">
                  <p>Toptalentlauncpad, a multichain, will be operating in 2022/11. After that, in 2023/1. The fastest and most comprehensive Dex/Cex (Talenterminal) Multichain Trading swap arbitrage aggregator...</p>
                  <p>Users, talents, freelancers, conglomerates, and liquidity providers receive all earnings. tokenomics for aggregators and cross-chain bridges (Talentterminal) The total and maximum distribution...</p>
                  <h3>Learn more Whitepaper <span><img src="/images/gradient-arrow.svg" alt="arrow" /></span></h3>
                </div>
              </div>
            </div>
          </div>
          <img src="/images/who-bg.png" alt="who" className='who-img' />
        </section>

        <section className="mission-vision">
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <div className="box">
                  <h3>Our Mission</h3>
                  <p>The concept and idea, which began in 2017, began to delve deeper into the market with the market's collapse in 2018, but at the time, we couldn't find idealistic, resourceful, and insane teammates to support this project, which has now become a reality, and we began to write, create, and establish. Our mission, as the only toptalentlauncpad, is to connect ideas and talented individuals with capital to create dreams the place where dreams come true, as our tagline suggests, and we did just that.</p>
                  <h4>Learn more Whitepaper <span><img src="/images/gradient-arrow.svg" alt="arrow" /></span></h4>
                </div>
              </div>
              <div className="col-sm-2">
                <div className='blur-circle'></div>
              </div>
              <div className="col-sm-5">
                <div className="box">
                  <h3>Our Vision</h3>
                  <p>We envision building an ecosystem that is a decentralized financial system that can only be created by appropriately managing people, value, ownership, and reputation. Toptalentlauncpad is going to establish an ecosystem to raise your asset value as tokens become scarce. With Toptalentlauncpad, we try to develop an ecosystem built on strong monetary regulations with a robust and decentralized foundation, which users should expect.</p>
                  <h4>Learn more Whitepaper <span><img src="/images/gradient-arrow.svg" alt="arrow" /></span></h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="holding">
          <img src="/images/globe.png" alt="globe" className='globe-img' />
          <div className="container">
            <div className="row">
              <div className="col-sm-7">
                <h2>Holding of Benefits</h2>
              </div>
              <div className="col-sm-5">
                <p>It is advantageous in cryptocurrency as it generates rewards by holding the coin on any exchange and generating passive income.</p>
              </div>
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="left">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="left-box">
                            <img src="/images/passive-income.svg" alt="passive-income" />
                          </div>
                        </div>
                        <dv className="col-sm-8">
                          <h4>Passive Income</h4>
                        </dv>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="right">
                      <p>Stake holders earn incentives by holding and controlling their digital wealth. Passive income for the beneficiary is the reward of staking.</p>
                      <span><img src="/images/arrow-up-right.svg" alt="arrow-up-right" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="left">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="left-box">
                            <img src="/images/cost.svg" alt="cost" />
                          </div>
                        </div>
                        <dv className="col-sm-8">
                          <h4>More Cost Effective</h4>
                        </dv>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="right">
                      <p>Proof of stake blockchains are always inexpensive and less energy-consuming platforms with no particular and expensive hardware requirements. Unlike proof of work chains, PoS is more cost-effective and ecofriendly. So, the stakes can earn more passive income by using Smart Liquidity Global Business coin.</p>
                      <span><img src="/images/arrow-up-right.svg" alt="arrow-up-right" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="left">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="left-box">
                            <img src="/images/scalability.svg" alt="scalability" />
                          </div>
                        </div>
                        <dv className="col-sm-8">
                          <h4>Scalability</h4>
                        </dv>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="right">
                      <p>In the Blockchain world, scalability is a concept that is often used. It refers to a computational process's potential to be used or generated in a variability of ways. Proof of stake protocols, as shown by Toptalentlauncpad higher transaction outputs and lower fees, make for greater scalability.</p>
                      <span><img src="/images/arrow-up-right.svg" alt="arrow-up-right" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="left">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="left-box">
                            <img src="/images/eco.svg" alt="eco" />
                          </div>
                        </div>
                        <dv className="col-sm-8">
                          <h4>Eco Friendly</h4>
                        </dv>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="right">
                      <p>As Proof of stake blockchains are less energy consumers, they are more environment friendly. Thus, they have a lower carbon footprint and have little or no environmental effects.</p>
                      <span><img src="/images/arrow-up-right.svg" alt="arrow-up-right" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="left">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="left-box">
                            <img src="/images/secure.svg" alt="secure" />
                          </div>
                        </div>
                        <dv className="col-sm-8">
                          <h4>Highly Secured with the help of Smart Contract</h4>
                        </dv>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="right">
                      <p>The biggest issue in the modern world is security and privacy, and We provides a swift and stable portal that is backed by the Toptalentlauncpad contract, making him superior to others. Toptalentlauncpad contract is offering a highly secure and fast platform to the users for staking crypto.</p>
                      <span><img src="/images/arrow-up-right.svg" alt="arrow-up-right" /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="swap">
          <div className="container">
            <h2>Swap</h2>
            <p>A decentralized trading platform on Toptalentlauncpad coin will be added, satisfying the needs of <br /> fully decentralized payments. Smart global business connects Tron making it easy and convenient <br /> to connect and process transactions, breaking any user-touchable space close to the future world <br /> the dominant cryptocurrency,</p>
            <button>Go to Terminal</button>
          </div>
        </section>

        <section className="tokenomics">
          <div className="container">
            <h2>Tokenomics</h2>
            <div className="row">
              <div className="col-sm-7">
                <div className="left-tokenomic">
                  {tokenomicsData.map((data,index)=>(
                    <div className="content" key={index}>
                      <p className='title'>{data.title}</p>
                      <p className='value'>{data.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-sm-5">
                <div className="chart-img">
                  <img src="/images/chart.svg" alt="chart" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="how">
          <img src="/images/globe.png" alt="globe" className='globe-img' />
          <div className="container">
            <div className="head">
              <h2>How It Works</h2>
              <p>The main deflationary mechanisms of ToptalentlaunchPad include a 7% fee on <br /> all token sales (sell orders) and early unstacking fees of up to 15.</p>
              <div className="blur-circle"></div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <div className="box">
                  <h4>Distribution of sell fees:</h4>
                  <ul>
                    <li>2% - burn wallet</li>
                    <li>2% - marketing wallet</li>
                    <li>3% - liquidity pool</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="box">
                  <h4>Early unstacking fees:</h4>
                  <p>There will also be an option to unstake early. This will apply a 7% burn fee. However, if users wait 3 weeks to unstake, there will be no fee.</p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="box">
                  <h4>Whitelist Requirement Twitter:</h4>
                  <ul>
                    <li>Like, Comment & Retweet</li>
                    <li>Bronz 5.000 XTTL</li>
                    <li>Silver 10.000 XTTL</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="box">
                  <h4>Guaranteed Allocation:</h4>
                  <ul>
                    <li>Platinum 50.000 XTTL</li>
                    <li>Emerald 100.000 XTTL</li>
                    <li>Emerald 100.000 XTTL</li>
                    <li>Blue Diamond 500.000 XTTL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team">
          <div className="container">
            <h2>Team Members</h2>
            <div className="row">
              {teamMembers.map((member,index)=>(
                <div className="col-sm-3" key={index}>
                  <div className="detials">
                    <img src={"/images/" + member.image} alt={member.name} />
                    <h4>{member.name}</h4>
                    <p>{member.desgination}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <h2>LET’S TALK</h2>
            <div className="row">
              <div className="col-sm-7">
                <h3>info@arc.com <span><img src="/images/arrow-white.svg" alt="arrow" /></span></h3>
                <h5>Visit</h5>
                <p>Logan Barker, 865 Oak Boulevard, <br /> Elk Grove, Vermont 95184</p>
                <h5>WhatsApp</h5>
                <p>+88 017-6153-1774</p>
              </div>
              <div className="col-sm-5">
                <form>
                  <div className="form-group">
                    <input type="text" placeholder='Your Name' />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder='Your Email' />
                  </div>
                  <div className="form-group">
                    <textarea rows="5" placeholder='Your Message'></textarea>
                  </div>
                  <div className="form-group">
                    <button type='button'>Send a Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* footer */}
        <Footer />
    </div>
  )
}
