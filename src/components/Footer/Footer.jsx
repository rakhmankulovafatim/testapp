import React from 'react'
import '../Footer/Footer.scss';


export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-top">
            <h1>Try Whitepace <br /> today</h1>
            <p>Get started for free. <br />
            Add your whole team as your needs grow.</p>
            <button>Try Taskey free</button>
            <p>On a big team? Contact sales</p>
            <img src="/img/App-icon.png" alt="" />
        </div>
        <div className="footer-middle">
            <ul>
                <li>
                    <img src="/img/Logo.png" alt="" />
                    <p>whitepace was created for <br />
                         the new ways we live and <br />
                         work. We make a better <br />
                         workspace around the world</p>
                </li>
                <li>
                    <p>Product</p>
                    <p>Overview</p>
                    <p>Pricing</p>
                    <p>Customer stories</p>
                </li>
                <li>
                   <p>Resources</p>
                   <p>Blog</p>
                   <p>Guides & tutorials</p>
                   <p>Help center</p> 
                </li>
                <li>
                    <p>Company</p>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Media kit</p>
                </li>
                <li>
                    <h2>Try It Today</h2>
                    <p>Get started for free. Add your <br />
                    whole team as your needs grow.</p>
                    <button>Start today</button>
                </li>
            </ul>
        </div>
        <div className="line-f"></div>
        <div className="footer-bottom">
            
            <div className="f-b-l">
                <ul>
                    <li>English</li>
                    <li>Terms & privacy</li>
                    <li>Security</li>
                    <li>Status</li>
                    <li>©2021 Whitepace LLC.</li>
                </ul>
            </div>
            <div className="f-b-r">
                <img src="/img/Social Icon.png" alt="" />
            </div>
        </div>
    </div>
  )
}
