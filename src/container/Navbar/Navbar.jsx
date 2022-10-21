import React from 'react'
import { Lists, Logo, NavbarWrapper, Search } from './Navbar.style';
import { FaCamera, FaSearch } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'

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
                <p>CHATS</p>
                <p>STATUS</p>
                <p>CALLS</p>
            </Lists>
        </NavbarWrapper>
    )
}

export default Navbar