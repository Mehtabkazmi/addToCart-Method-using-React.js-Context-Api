import React from 'react'
import styled from "styled-components";
import { mobile } from '../responsive';
import Nav from './Nav';
import { AiOutlineSearch } from 'react-icons/ai';
import Logo1 from '../img/Logo.png';
const Header=()=> {
  return (
      <Container>
          <Wrapper>
        <Left>
          <Logo>
            E-Commerce Website
          </Logo>
        </Left>
            <Right>
          <SearchContainer>
            <Input placeholder="Search" />
            <AiOutlineSearch style={{ color: "white", fontSize: 16 }} />
          </SearchContainer>
        </Right>
          </Wrapper>
          <Heading>
              <Image src={Logo1} />
      </Heading>
      <Nav/>
    </Container>
  )
}

export default Header
const Container = styled.div`
    height: 60px;
    background-color: #DCB795;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
  `;
  const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "right",marginRight:10 })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid white;
  display: flex;
  border-radius: 20px;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  background-color: #DCB795;
  ${mobile({ width: "70px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Logo = styled.h3`
  font-size: 20px;
  color:white;
  cursor: pointer;
  margin-left: 25px;
  fontWeight:bold;
  ${mobile({ fontSize: "14px", marginLeft: "10px" })}
`;
const Heading = styled.div`
    display:flex;
    height:150px;
    width:100%;
    align-items:center;
    justify-content:center;
  ${mobile({ height: "100px" })}
`;
const Image = styled.img`
  width: 30%;
  height: 45%;
  ${mobile({ height: "15vh" })}
`;
const Navbar = styled.div`
`;