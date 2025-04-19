import React from 'react'
import '../Header/Header.scss';




export default function Header() {
  return (
    <div className="h">
        <div className="header">
        <div className="h-l">
            <img src="/img/Logo.png" alt="" />
        </div>
        <div className="h-m">
            <ul>
                <li>Products</li>
                <li>Solutions</li>
                <li>Resources</li>
                <li>Pricing</li>
            </ul>
            
        </div>
        <div className="h-r">
            <button className='l-b'>Login</button>
            <button className='r-b'>Try Whitepace free</button>
        </div>
    </div>
    </div>

    

  )
}
