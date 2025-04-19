import React from 'react'
import './App.scss';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import './Media.scss'
import CustomButton from './components/CustomButton';


export default function App() {
  return (
    <div className="container">
        <section className='sec1'>
            <div className="sec1-l">
                <h1>Get More Done with <br /> whitepace</h1>
                <p>Project management software that enables your teams to collaborate, plan, <br />
                 analyze and manage everyday tasks</p>

                 <CustomButton icon={<IoIosArrowRoundForward />}>Try Whitepace free</CustomButton>
      
            </div>
            <div className="sec1-r">
              <img src="/img/Image-container.png" alt="" />
            </div>
        </section>

        <section className='sec2'>
                <div className="sec2-l">
                  <h2>Project <br /> Management</h2>
                  <p>Images, videos, PDFs and audio files are supported. Create math expressions and <br />
                     diagrams directly from the app. Take photos with the mobile app and save them <br />
                      to a note.</p>
                      
                 <CustomButton icon={<IoIosArrowRoundForward />}>Get Started</CustomButton>

                </div>
                <div className="sec2-r">
                  <img src="/img/Image-container.png" alt="" />
                </div>
        </section>
        <section className='sec3'>
          <div className="sec3-l">
            <img src="/img/Work Together Image.png" alt="" />
          </div>
          <div className="sec3-r">
            <h2>Work together</h2>
            <p>With whitepace, share your notes with your colleagues and collaborate on them. <br />
            You can also publish a note to the internet and share the URL with others.
            </p>

            <CustomButton icon={<IoIosArrowRoundForward />}>Try it now</CustomButton>
            
          </div>

        </section>

        <section className='sec4'>
          <div className="sec4-l">
            <h1>Use as Extension</h1>
            <p>Use the web clipper extension, available on Chrome and Firefox, to save web pages <br />
               or take screenshots as notes.
            </p>
            
            <CustomButton icon={<IoIosArrowRoundForward />}>Let’s Go</CustomButton>
            
          </div>
          <div className="sec4-r">
            <img src="/img/Image-container.png" alt="" />
          </div>
        </section>

        <section className='sec5'>
          <div className="sec5-l">
            <img src="/img/Image-container.png" alt="" />
          </div>
          <div className="sec5-r">
            <h2>Customise it to <br />
               your needs</h2>
               <p>Customise the app with plugins, custom themes and multiple text editors (Rich <br />
                 Text or Markdown). Or create your own scripts and plugins using the Extension <br />
                  API.</p>

                  
            <CustomButton icon={<IoIosArrowRoundForward />}>Let’s Go</CustomButton>
                  
          </div>
        </section>
        <section className='sec6'>
          <div className="sec6-text">
            <h2>Choose Your Plan</h2>
            <p>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the <br />
             right plan for you.</p>
          </div>
          <div className="sec6-card">
            <div className="card">
              <h1>Free</h1>
              <h2>$0</h2>
              <ul>Capture ideas and find them quickly
                <li><IoMdCheckmarkCircleOutline className='icon-hover' style={{ marginRight: '5px' }}/>Sync unlimited devices</li>
                <li><IoMdCheckmarkCircleOutline className='icon-hover' style={{ marginRight: '5px' }}/>10 GB monthly uploads</li>
                <li><IoMdCheckmarkCircleOutline className='icon-hover' style={{ marginRight: '5px' }}/>200 MB max. note size</li>
                <li><IoMdCheckmarkCircleOutline className='icon-hover' style={{ marginRight: '5px' }}/>Customize Home dashboard and access extra widgets</li>
                <li><IoMdCheckmarkCircleOutline className='icon-hover' style={{ marginRight: '5px' }}/>Connect primary Google Calendar account</li>
                <li><IoMdCheckmarkCircleOutline className='icon-hover' style={{ marginRight: '5px' }}/>Add due dates, reminders, and notifications to your tasks</li>
              </ul>
              <button>Get Started</button>
              
            </div>
            <div className="card">
              <h1>Personal</h1>
              <h2>$11.99</h2>
              <ul>Keep home and family on track
                <li><IoMdCheckmarkCircleOutline className='icon-hover' style={{ marginRight: '5px' }}/>Sync unlimited devices</li>
                <li><IoMdCheckmarkCircleOutline className='icon-hover' style={{ marginRight: '5px' }} />10 GB monthly uploads</li>
                <li><IoMdCheckmarkCircleOutline className='icon-hover' style={{ marginRight: '5px' }} />200 MB max. note size</li>
                <li><IoMdCheckmarkCircleOutline className='icon-hover' style={{ marginRight: '5px' }}/>Customize Home dashboard and access extra widgets</li>
                <li><IoMdCheckmarkCircleOutline className='icon-hover' style={{ marginRight: '5px' }}/>Connect primary Google Calendar account</li>
                <li><IoMdCheckmarkCircleOutline className='icon-hover' style={{ marginRight: '5px' }}/>Add due dates, reminders, and notifications to your tasks</li>
              </ul>
              <button>Get Started</button>
            </div>
            <div className="card">
              <h1>Organization</h1>
              <h2>$49.99</h2>
              <ul>Capture ideas and find them quickly
                <li><IoMdCheckmarkCircleOutline className='icon-hover' style={{ marginRight: '5px' }}/>Sync unlimited devices</li>
                <li><IoMdCheckmarkCircleOutline className='icon-hover' style={{ marginRight: '5px' }}/>10 GB monthly uploads</li>
                <li><IoMdCheckmarkCircleOutline className='icon-hover' style={{ marginRight: '5px' }}/>200 MB max. note size </li>
                <li><IoMdCheckmarkCircleOutline className='icon-hover' style={{ marginRight: '5px' }}/>Customize Home dashboard and access extra widgets</li>
                <li><IoMdCheckmarkCircleOutline className='icon-hover' style={{ marginRight: '5px' }}/>Connect primary Google Calendar account </li>
                <li><IoMdCheckmarkCircleOutline className='icon-hover' style={{ marginRight: '5px' }}/>Add due dates, reminders, and notifications to your tasks</li>
              </ul>
              <button>Get Started</button>
            </div>
          </div>
        </section>
        <section className='sec7'>
          <h2>Your work, everywhere you are</h2>
          <p>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and  <br />
            OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
            

            
            <CustomButton icon={<IoIosArrowRoundForward />}>Try Taskey</CustomButton>
            
        </section>

        <section className='sec8'>
          <div className="sec8-l">
            <h2>100% your data</h2>
            <p>The app is open source and your notes are saved to an open format, so you'll always have access  <br />
              to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but <br />
               yourself can access them.</p>
               
            <CustomButton icon={<IoIosArrowRoundForward />}>Read more</CustomButton>

          </div>
          <div className="sec8-r">
            <img src="/img/Element.png" alt="" />
          </div>
        </section>

        <section className='sec9'>
          <h2>Our sponsors</h2>
          <img src="/img/sponsors.png" alt="" />
        </section>

        <section className='sec10'>
          <div className="sec10-l">
            <img src="/img/Apps.png" alt="" />
          </div>
          <div className="sec10-r">
            <h2>Work with Your <br />
             Favorite Apps Using <br />
              whitepace</h2>
              <p>Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to <br />
               have all the tools you need for your project success.</p>
               <CustomButton icon={<IoIosArrowRoundForward />}>Read more</CustomButton>

          </div>
        </section>

        <section className='sec11'>
          <h2>What Our Clients Says</h2>
          <div className="sec11-card">
            <div className="card">
              <img src="/img/Quote.png" alt="" />
              <p>Whitepate is designed as a collaboration tool <br />
                 for businesses that is a full project management <br />
                 solution.</p>
                 <div className="line"></div>
                 <div className="card-user">
                 <div className="card-user-l">
                  <img src="/img/Avater.png" alt="" />
                 </div>
                  <div className="card-user-r">
                                      <h3>Oberon Shaw, MCH</h3>
                  <p>Head of Talent Acquisition, North <br /> America</p>
                  </div>

                 </div>
            </div>
            <div className="card2">
              <img src="/img/Quote copy.png" alt="" />
              <p>Whitepate is designed as a collaboration tool <br />
                 for businesses that is a full project management <br />
                 solution.</p>
                 <div className="line2"></div>
                 <div className="card-user">
                  <div className="card-user-l">
                                      <img src="/img/Avater copy 2.png" alt="" />
                  </div>
                  <div className="card-user-r">

                  <h3>Oberon Shaw, MCH</h3>
                  <p>Head of Talent Acquisition, North <br /> America</p>
                  </div>

                 </div>
            </div>
            <div className="card2">
              <img src="/img/Quote copy.png" alt="" />
              <p>Whitepate is designed as a collaboration tool <br />
                 for businesses that is a full project management <br />
                 solution.</p>
                 <div className="line2"></div>
                 <div className="card-user">
                  <div className="card-user-l">
                    <img src="/img/Avater copy.png" alt="" />
                  </div>
                  <div className="card-user-r">
                                      <h3>Oberon Shaw, MCH</h3>
                  <p>Head of Talent Acquisition, North <br /> America</p>
                  </div>

                 </div>
            </div>
          </div>

        </section>
    </div>
  )
}
