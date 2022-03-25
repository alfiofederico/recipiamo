
import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom'
import styled from "styled-components";
import { Link } from "react-router-dom";
import Search from "./components/Search";
import {GiKnifeFork} from 'react-icons/gi'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav className="navbar">
          <GiKnifeFork to={"/"}></GiKnifeFork>
          <Logo to={"/"}>RecipIamo</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}


const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
    margin-right: 0.5rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem 0rem;
  }
`;

export default App;
