import Card from '../components/Card'
import styled from 'styled-components';
import { products } from '../data';
const Product = () => {
  return (
    <Container>
          {products && products.map((item,index) => (  
            <div key={index}>
              {item.cat.map((i, index) => (
                <Card name={ i.name} image={i.image} price={i.price} id={i.id} />
              ))}
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
