import {useContext} from 'react'
import CartContext from './CartContext';
import styled from 'styled-components';
import '../index.css';
const Checkout = () => {
    const { items } = useContext(CartContext);

  return (
    <>
      <Container>
          <Heading>Checkout Page</Heading>
      <Shopingbag>
        <table>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
              {items.map((item, index) => (
                <tr key={index}>
                  <td><Image src={item.image} alt="" /></td>
                    <td><h3>{item.name}</h3></td>
                    <td><p>{item.price}</p></td>
                  </tr>
              ))}
          
        </table>
          </Shopingbag>
      </Container>
      </>
  )
}

export default Checkout
const Container = styled.div`
  padding: 20px;
  margin-top:200px;
`;
const Heading = styled.h1`
  text-align:center;
  margin-bottom:20px;
`;
const Shopingbag = styled.div`
 display: flex;
`;
const Image = styled.img`
  widTh: 170px;
`;
