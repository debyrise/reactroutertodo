import React from 'react'
import Navbar from '../Blocks/Navbar'
import SideBar from '../Blocks/Sidebar'
import { Outlet } from 'react-router'
import styled from "@emotion/styled"


const Layoutcontainer = styled.div`
  margin-top: 70px;
  margin-left: 200px;

`



const Weblayout:React.FC = () => {
  return (
    <Layoutcontainer>
       
        < SideBar />
        <Navbar   />
        <Outlet  />

    </Layoutcontainer>
  )
}

export default Weblayout