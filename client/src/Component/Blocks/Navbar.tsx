import React from 'react'
import styled  from '@emotion/styled'
import {PiDotsNineBold} from "react-icons/pi"
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineSetting} from "react-icons/ai"
import {BiQuestionMark} from "react-icons/bi"
import {BiNotification} from "react-icons/bi"


const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: blue;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  

`;
const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   
   

`
const Hold = styled.div`
  margin-right: 10px;

  display: flex;
  align-items: center;
  
  


  
`;
const Wrap = styled.div`
    height: 40px;
    width: 300px;
    background-color: white;
    border-radius: 5px;
    color: black;
    display: flex;
`;
const WrapHold = styled.div`
    display: flex;
    margin-left: 30px;
    align-items: center;
    
    



`;
const Icon = styled.div`
     color: #322f2f;
     margin-top: 8px;
     font-size: 30px;
     color: white;
     margin-right: 10px;
     

`;
const Prof = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 30px;
  color: white;
  border: 2px solid white;
  
`;
const Isan = styled.div`
  margin-top: 10px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  margin-left: 5px;
`


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
      <Hold>
      <Icon>  < PiDotsNineBold/> </Icon> 
      <h2>TO DO</h2>
      </Hold>
       <Wrap>
          <Isan> <  AiOutlineSearch/> </Isan>
          <Input placeholder='search...'/>
       </Wrap>
       <WrapHold>
       <Icon> < AiOutlineSetting /> </Icon>
       <Icon> < BiQuestionMark  /> </Icon>
       <Icon> < BiNotification /> </Icon>
       <Prof> </Prof> 
       </WrapHold>
       
      </Wrapper>
      
    </Container>
  )
}

export default Navbar