import React,{useContext} from 'react'
import styled from 'styled-components';
import { AiFillShopping } from 'react-icons/ai';
import { products } from '../data';
import CartContext from './CartContext';
const Catproduct = () => {
    const { addToCart } = useContext(CartContext);
    const pathArray = window.location.pathname.split('/');
    const id = pathArray[2];
    const prod = products[id - 1];

    return (
        <>
            <Heading>{ prod.CatName} Products</Heading>
            <Container>
{prod.cat.map((i) => (
        <Card1>
            <Image  src={i.image} alt="" />
          <Purchase>
              <Heading3>{i.name}</Heading3>
              <Button onClick={()=>addToCart(i.name,i.image,i.price)}>
                 Add To Cart <AiFillShopping/>
              </Button>
          </Purchase>
          <Heading4 className='price'>{ i.price}</Heading4>
    </Card1>
))}
    </Container>
    </>
  )
}

export default Catproduct
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

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
    background-color: #DCB795;
    cursor:pointer;
`;
const Heading = styled.h1`
  margin:20px;
  display:flex;
  margin-top:200px;
  justify-content:center;
`