import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';
import { AiFillShopping } from 'react-icons/ai';
import { useContext } from 'react';
import CartContext from '../pages/CartContext';
const Nav = () => {
    const { items } =useContext(CartContext);
  return (
      <Navbar>
          <List>
              <ListItem><Link to="/" style={Linklist}>Home</Link></ListItem>
              <ListItem><Link to="/products" style={Linklist}>Products</Link></ListItem>
              <ListItem>
                  <Link to="/checkout" style={Linklist}>
                  <AiFillShopping /> Checkout <Count>{items.length}</Count>
              </Link>
              </ListItem>
          </List>
    </Navbar>
  )
}

export default Nav
const Navbar = styled.nav`
    flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ flex: 2})}
`;
const List = styled.ul`
    list-style-type: none;
    overflow: hidden;
`;
const ListItem = styled.li`
    float: left;
    margin: 0 10px;
`;
const Count = styled.span`
`;
const Linklist = {
    color: "black",
  textDecoration: "none",
    fontWeight: "bold",
    fontSize:"20px",
  margin:"4px",
}