import Card from '../components/Card'
import styled from 'styled-components';
import { mobile } from '../responsive';
import { products } from '../data';
const Product = () => {
  return (
    <Container>
          {products && products.map((item,index) => (  
              <div key={index}>
                <Card name={ item.name} image={item.image} price={item.price} />
              </div>
          ))}
    </Container>
  )
}

export default Product
const Container = styled.div`
  padding: 20px;
  margin-top:200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
