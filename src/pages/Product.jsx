import Card from '../components/Card'
import styled from 'styled-components';
import { mobile } from '../responsive';
import Dress from '../img/Icons/Web-Icons-Dress.png';
import Top from '../img/Icons/Web-Icons-Top.png';
import Skirt from '../img/Icons/Web-Icons-Skirt.png';
import Jumpsuit from '../img/Icons/Web-Icons-Jumpsuit.png';
const Product = () => {
    const products = [
        { name: "Dress",image:`${Dress}`, price: 100 },
        { name: "Top",image:`${Top}`, price: 45 },
        { name: "Skirt",image:`${Skirt}`, price: 20 },
        { name: "jumper",image:`${Jumpsuit}`, price: 50 },
    ];
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
