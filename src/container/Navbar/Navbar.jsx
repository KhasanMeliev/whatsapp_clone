import React from "react";
import { Lists, Logo, NavbarWrapper, Search } from "./Navbar.style";
import { FaCamera, FaSearch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Menu } from "@mantine/core";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo>
        <h1>WhatsApp</h1>
        <Search>
          <Link to="/search" style={{ color: "inherit" }}>
            <FaSearch />
          </Link>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <BsThreeDotsVertical />
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>New Group</Menu.Item>
              <Menu.Item>New Broadcast</Menu.Item>
              <Menu.Item>Linked Devices</Menu.Item>
              <Menu.Item>Starred messages</Menu.Item>
              <Menu.Item>Settings</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Search>
      </Logo>
      <Lists>
        <FaCamera />
        <Link to="/chats" style={{ color: "inherit", textDecoration: "none" }}>
          <p>CHATS</p>
        </Link>
        <Link to="/status" style={{ color: "inherit", textDecoration: "none" }}>
          <p>STATUS</p>
        </Link>
        <Link to="/calls" style={{ color: "inherit", textDecoration: "none" }}>
          <p>CALLS</p>
        </Link>
      </Lists>
    </NavbarWrapper>
  );
};

export default Navbar;
