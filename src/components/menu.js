import React from 'react'
import Link from 'gatsby-link';

const Menu = () => {
    return (
        <div style={{
            background: '#FFF',
            paddingTop: '20px',
        }}>

            <ul style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
            </ul>
        </div>
    )
}

export default Menu;
