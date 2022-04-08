import React from 'react'
import styled from 'styled-components';
import Product from './Product'
import Slider from '../components/Slider';
import Category from './Category';
import { products } from '../data';
const Home = () => {
  console.log(products.CatName);
  return (
    <>
      <Container>
        <Slider />
        <Heading>Categories</Heading>
        <Catdiv>
          {products && products.map((item) => (
            <div key={item.id}>
              <Category Catimage={item.Catimage} CatName={item.CatName} />
            </div>
        ))}
          </Catdiv>
          {/* <Product/> */}
      </Container>
      
    </>
  )
}

export default Home
const Container = styled.div`
    margin-top:200px;
`;
const Heading = styled.h1`
  margin:20px;
  display:flex;
  justify-content:center;
`
const Catdiv = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  cursor:pointer;
`;