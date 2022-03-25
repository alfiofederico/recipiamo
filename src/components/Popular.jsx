import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'


const Popular = () => {

  const [popular, setPopular] =useState([])

  useEffect(() =>{
    getPopular()
  },[])

  const getPopular = async () => {

    const check = localStorage.getItem('popular')

    if(check) {
      setPopular(JSON.parse(check))
    }else{
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15`
        );
        const data = await api.json();

        localStorage.setItem('popular', JSON.stringify(data.recipes))
        setPopular(data.recipes);
    } 
  }



  return (
    <div>
      <Wrapper>
        <h3>Trending</h3>
        <Splide
          options={{
            perPage: 5,
            breakpoints: {
              640: {
                perPage: 1,
                arrows: true,
                gap: "1rem",
              },
            },
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "3rem",
            autoplay: true,
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt="recipe.picture" />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
  @media (max-width: 768px) {
    /* margin: 2rem  -0.5rem ; */
    width: 300px;
  } ;
`;
const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  margin: 4rem 0rem;
 @media (max-width: 768px) {
    margin-top: 0rem
;  } 

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;





export default Popular