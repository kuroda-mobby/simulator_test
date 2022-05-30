import './App.css';
import {Products} from './Products'
import styled from "styled-components";
import { useState } from 'react';
import productsData from "./data/products.json";


function App() {
  //console.log(window.location.href);
  const [jp, setJp] = useState(true);
  const onClickLunguage = () => {
    setJp(!(jp));
    //console.log(jp);
  };

  const [category, setCategory] = useState("all");
  //console.log(category);
  const onClickCategory = (categoryKey) => {
    setCategory(categoryKey);
  }
  return (
    <div className="App">
      
      <CLanguage onClick={() => onClickLunguage()}>
        {jp ? 'English' : '日本語'}
      </CLanguage>
      <CCUl className="category__ul">
        <CLi id="new" className="category_li" onClick={() => onClickCategory("new")}>{jp ? <span className="jp">新商品</span> : <span className="en">NEW</span>}</CLi>
        <CLi id="category1" className="category_li" onClick={() => onClickCategory("category1")}>{jp ? <span className="jp">カテゴリー1</span> : <span className="en">Category1</span>}</CLi>
        <CLi id="category2" className="category_li" onClick={() => onClickCategory("category2")}>{jp ? <span className="jp">カテゴリー2</span> : <span className="en">Category2</span>}</CLi>
        <CLi id="category3" className="category_li" onClick={() => onClickCategory("category3")}>{jp ? <span className="jp">カテゴリー3</span> : <span className="en">Category3</span>}</CLi>
        <CLi id="allproducts" className="category_li" onClick={() => onClickCategory("all")}>{jp ? <span className="jp">全て</span> : <span className="en">All</span>}</CLi>
      </CCUl>

      <Products productsData={productsData} currentCategory={category} />

      
    </div>
  );
}

const CLanguage = styled.button`
  display: block;
  margin: 20px 20px 20px auto;
`;
const CCUl = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`;
const CLi = styled.li`
  border-bottom: solid 3px #fff;
  padding: 0px 1.5rem 10px;
  margin: calc(2rem - 0.14285714em) 0 1rem;
  color: #767676;
  font-size: 170%;
  &:hover {
    cursor: pointer;
  }
`;

export default App;
