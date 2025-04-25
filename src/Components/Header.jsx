import React from 'react'
import '../assets/css/header.css'

function Header() {
    const headerContent=["HOME","ABOUT","SKILL","PROJECT","CONTACT"]
  return (
    <div className='portfolio--header--body'>
        <h1 className='portfolio--header--tag'>Portfolio</h1>
        <nav>
            <div className='portfolio--header--items'>
                {headerContent.map((item,index) => (
                    <li key={index}>
                        <a href={`#${item.toLowerCase().replace(' ','-')}`}>{item}</a>
                    </li>
                ))}
            </div>
        </nav>
    </div>
  )
}

export default Header 