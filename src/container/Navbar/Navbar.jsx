import React from 'react'
import { Lists, Logo, NavbarWrapper, Search } from './Navbar.style';
import { FaCamera, FaSearch } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <NavbarWrapper>
            <Logo>
                <h1>WhatsApp</h1>
                <Search>
                    <FaSearch />
                    <BsThreeDotsVertical />
                </Search>
            </Logo>
            <Lists>
                <FaCamera />
                <Link to='/chats' style={{color:"inherit", textDecoration:"none"}}><p>CHATS</p></Link>
                <Link to='/status' style={{color:"inherit", textDecoration:"none"}}><p>STATUS</p></Link>
                <Link to='/calls' style={{color:"inherit", textDecoration:"none"}}><p>CALLS</p></Link>

            </Lists>
        </NavbarWrapper>
    )
}

export default Navbar