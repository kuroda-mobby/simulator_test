import './App.css';
import styled from "styled-components";
import { useState } from 'react';

function App() {
  console.log(window.location.href);
  const [jp, setJp] = useState(true);
  const onClickLunguage = () => {
    setJp(!(jp));
    console.log(jp);
  };
  return (
    <div className="App">
      
      <CLanguage onClick={() => onClickLunguage()}>
        {jp ? 'English' : '日本語'}
      </CLanguage>
      <CCUl className="category__ul">
        <CLi id="new" className="category_li">{jp ? <span className="jp">新商品</span> : <span className="en">NEW</span>}</CLi>
        <CLi id="category1" className="category_li">{jp ? <span className="jp">カテゴリー1</span> : <span className="en">Category1</span>}</CLi>
        <CLi id="category2" className="category_li">{jp ? <span className="jp">カテゴリー2</span> : <span className="en">Category2</span>}</CLi>
        <CLi id="category3" className="category_li">{jp ? <span className="jp">カテゴリー3</span> : <span className="en">Category3</span>}</CLi>
        <CLi id="allproducts" className="category_li">{jp ? <span className="jp">全て</span> : <span className="en">All</span>}</CLi>
      </CCUl>
      <CPUl>
        <CPLi className="category1 category2">
          <CPA>
            <CPImg src="https://placehold.jp/300x200.png" />
            <CPName>テスト1</CPName>
          </CPA>
        </CPLi>
        <CPLi className="category1 category2">
          <CPA>
            <CPImg src="https://placehold.jp/300x200.png" />
            <CPName>テスト2</CPName>
          </CPA>
        </CPLi>
        <CPLi className="category1">
          <CPA>
            <CPImg src="https://placehold.jp/300x200.png" />
            <CPName>テスト3</CPName>
          </CPA>
        </CPLi>
        <CPLi className="category1 category2">
          <CPA>
            <CPImg src="https://placehold.jp/300x200.png" />
            <CPName>テスト4</CPName>
          </CPA>
        </CPLi>
        <CPLi className="category1 category2">
          <CPA>
            <CPImg src="https://placehold.jp/300x200.png" />
            <CPName>テスト5</CPName>
          </CPA>
        </CPLi>
        <CPLi className="category1 category2">
          <CPA>
            <CPImg src="https://placehold.jp/300x200.png" />
            <CPName>テスト6</CPName>
          </CPA>
        </CPLi>
        <CPLi className="category2 category3">
          <CPA>
            <CPImg src="https://placehold.jp/300x200.png" />
            <CPName>テスト7</CPName>
          </CPA>
        </CPLi>
        <CPLi className="category1 category3">
          <CPA>
            <CPImg src="https://placehold.jp/300x200.png" />
            <CPName>テスト8</CPName>
          </CPA>
        </CPLi>
        <CPLi className="category1 category2">
          <CPA>
            <CPImg src="https://placehold.jp/300x200.png" />
            <CPName>テスト9</CPName>
          </CPA>
        </CPLi>
        <CPLi className="category1 new">
          <CPA>
            <CPImg src="https://placehold.jp/300x200.png" />
            <CPName>テスト10</CPName>
          </CPA>
        </CPLi>
        <CPLi className="category2 new">
          <CPA>
            <CPImg src="https://placehold.jp/300x200.png" />
            <CPName>テスト11</CPName>
          </CPA>
        </CPLi>
        <CPLi className="category3 new">
          <CPA>
            <CPImg src="https://placehold.jp/300x200.png" />
            <CPName>テスト12</CPName>
          </CPA>
        </CPLi>
        <CPLi className="category1 category2 new">
          <CPA>
            <CPImg src="https://placehold.jp/300x200.png" />
            <CPName>テスト13</CPName>
          </CPA>
        </CPLi>
        <CPLi className="category2 new">
          <CPA>
            <CPImg src="https://placehold.jp/300x200.png" />
            <CPName>テスト14</CPName>
          </CPA>
        </CPLi>
        <CPLi className="category2 category3 new">
          <CPA>
            <CPImg src="https://placehold.jp/300x200.png" />
            <CPName>テスト15</CPName>
          </CPA>
        </CPLi>
        <CPLi className="category1 category3 new">
          <CPA>
            <CPImg src="https://placehold.jp/300x200.png" />
            <CPName>テスト16</CPName>
          </CPA>
        </CPLi>
      </CPUl>
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
`;
const CPUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
`;
const CPLi = styled.li`
  width: 25%;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
`;
const CPA = styled.a`
  display: block;
  position: relative
`;
const CPImg = styled.img`
  width: 100%;
`;
const CPName = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
`;
export default App;
