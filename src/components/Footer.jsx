import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';
import Logo1 from '../img/Logo.png';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
const Footer=()=> {
  return (
      <Container>
          <Wrapper>
        <Left>
          <Logo>
            <Image src={Logo1} alt="" />
          </Logo>
        </Left>
        <Right>
                  <BsFacebook />
                  <AiFillTwitterCircle />
                  <AiFillInstagram/>
        </Right>
          </Wrapper>
      </Container>
  )
}

export default Footer

const Container = styled.div`
    border-top: 5px solid #DCB795;
    margin-top:20px;
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
  margin: 0 20px;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "right",marginRight:10 })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Logo = styled.h3`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  fontWeight:bold;
  ${mobile({ fontSize: "14px", marginLeft: "10px" })}
`;
const Image = styled.img`
  width: 30%;
  height: 45%;
  ${mobile({ height: "15vh" })}
`;
