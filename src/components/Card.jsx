import React from 'react'
import { AiFillShopping } from 'react-icons/ai';
import CartContext from '../pages/CartContext';
import { useContext } from 'react';
import styled from 'styled-components';

const Card=({name,image,price})=> {
    const { addToCart } = useContext(CartContext);

    return (
      <Card1>
            <Image  src={image} alt="" />
          <Purchase>
              <Heading3>{name}</Heading3>
              <Button onClick={()=>addToCart(name,image,price)}>
                 Add To Cart <AiFillShopping/>
              </Button>
          </Purchase>
          <Heading4 className='price'>{ price}</Heading4>
    </Card1>
  )
}

export default Card
const Card1 = styled.div`
  margin: 5px;
  width: 280px;
  height: 400px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  border:1px solid gray;
  border-radius:10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
`;
const Image = styled.img`
  height: 65%;
  z-index: 2;
`;

const Purchase = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    margin:5px;
`;
const Heading3 = styled.h2`
    
`;
const Heading4 = styled.h4`
    
`;
const Button = styled.button`
    width:200px;
    height:30px;
    border:none;
    border-radius:5px;
    margin:5px;
    background-color: rgb(215, 150, 93);
    cursor:pointer;
`;
