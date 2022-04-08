import React from 'react'
import styled from 'styled-components';
import Product from './Product'
import Slider from '../components/Slider';
import Category from './Category';
import { products } from '../data';
import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Slider />
        <Heading>Categories</Heading>
        <Catdiv>
          {products && products.map((item,index) => (
            <div key={index}>
              <Link to={'/category/'+item.id}>
                <Category Catimage={item.Catimage} CatName={item.CatName} cat={item.cat} />
                </Link>
            </div>
        ))}
        </Catdiv>
        <Heading>All Products</Heading>
          <Product/>
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