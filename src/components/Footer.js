import React from 'react'
import styled  from 'styled-components'

export const Footer = () =>{
  return (
    <FooterContainer>
     <Paragraph>&copy; 
          <a href="https://www.isidoro.ar" target="_blank" rel="noreferrer noopener">Codesign.dev</a>
          &   
          <a href="https://diegochiapa.com.ar" target="_blank" rel="noreferrer">Dchiapa</a>
     </Paragraph>
    </FooterContainer>
  )
}


const FooterContainer = styled.footer`
    position: absolute
    width: 100%;
    bottom: 0;
    height: 50px;
`;

const Paragraph = styled.p`
    text-align: center;
`;
