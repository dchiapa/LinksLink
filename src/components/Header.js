import React from 'react'
import styled  from 'styled-components'
import { Link } from 'react-router-dom'

export const Header=() =>{
     return (
          <HeaderContainer>
              <Link to="/"><HeaderTitle>LinksLinks</HeaderTitle></Link> 
          </HeaderContainer>
          )
}

const HeaderContainer = styled.header`
    padding: 10px;
`;

const HeaderTitle = styled.h1`
     margin-left: 25px;
`;