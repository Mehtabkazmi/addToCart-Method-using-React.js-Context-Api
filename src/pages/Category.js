import React from 'react'
import styled from 'styled-components';
const Category = ({CatName,Catimage,cat}) => {
    return (
    <Card1>
            <Image src={Catimage} alt="" />
            <Purchase>
                <Heading3>{CatName}</Heading3>
          </Purchase>
    </Card1>
  )
}

export default Category

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
