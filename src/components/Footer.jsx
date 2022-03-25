import React from 'react'
import styled from "styled-components";


const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <Footy>
      <p>
        Copyright&copy; {footerYear} by{" "}
        <a
          href="https://alfiofedericodp.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Federico
        </a>
      </p>
    </Footy>
  );
}

const Footy = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 2rem 0;
`

export default Footer