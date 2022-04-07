import React from 'react'
import styled from 'styled-components';
import Product from './Product'

const Home=()=> {
  return (
    <>
      <Container>
          <Product/>
      </Container>
      
    </>
  )
}

export default Home
const Container = styled.div`
    margin-top:200px;
`;
