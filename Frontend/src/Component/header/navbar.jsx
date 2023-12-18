import logo from '../../assets/images/download.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component, useState } from 'react';
import { NavLink } from 'react-router-dom';
import BasicExample from './dropdown';
import '../../App.css'

function Navbar() {
    const [state, setState] = useState(false)
    const handleClick = () => {
        if (state) {
            setState(false);
        }
        else {
            setState(true)
        }

    }
    let user = localStorage.getItem('User_ID')
    return (
        <div>
            <nav className='nav-header'>
                <img className='none' src={logo} style={{ width: "5.5rem", padding: '1rem' }} />
                <div>
                    <ul id='navbar' className={state ? '#navbar active' : '#navbar'}>
                        <img src={logo} style={{ width: "8rem", margin: '1rem auto 4rem auto' }} className='bas' />
                        <div id="mobile" onClick={handleClick}>
                            <i id='bars' style={{color: 'black', position: 'absolute', top: "3rem", right: "2rem"}} className={state ? 'fas fa-times' : null}></i>
                        </div>
                        <li onClick={handleClick}><NavLink to='/'>Home</NavLink></li>
                        <li onClick={handleClick}>
                            <NavLink to="/doctorApp/appointment"> Doctors appointment ▾</NavLink>
                        </li>
                        <li><NavLink href='#'>Contact Us</NavLink></li>
                        <li><NavLink href='#'>About Us</NavLink></li>
                        <li><NavLink href='#'>FAQs Us</NavLink></li>
                    </ul>
                </div>
                <div >
                    {
                        user ?
                        <BasicExample/>:
                        <NavLink to="/doctorApp/SignIn"><button className='btn1'>Sign in</button></NavLink>
                    }
                    
                </div>
                <div id="mobile" onClick={handleClick}>
                    <i id='bars' className={state ? null : 'fas fa-bars'}></i>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;