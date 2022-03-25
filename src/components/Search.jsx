import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const Search = () => {

  const [input, setInput] =useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/searched/' + input)
    setInput('')
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 20rem;
  @media (max-width: 768px) {
    margin: 0rem 0.2rem;
  }

  div {
    width: 100%;
    position: relative;
    @media (max-width: 768px) {
      width: 100%;
      position: relative;
      /* display: flex;
      align-items: center;
      justify-content: center; */
    }
  }
  input {
    width: 100%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    @media (max-width: 768px) {
      width: 100%;
      padding: 0.4rem 0.1rem;
      padding-left: 40px;
      font-size: 1rem;
    }
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
    @media (max-width: 768px) {
      top: 60%;
      left: 0%;
      transform: translate(100%, -70%);
    }
  }
`;

export default Search