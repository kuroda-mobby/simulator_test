import React from "react";
import styled from "styled-components";

export const Products = (props) => {
  const {productsData, currentCategory} = props;
  console.log(currentCategory);
  return(
    <>
      <CPUl>
      
      {productsData.map((item, index) => {
        if (currentCategory === "new" && item.new === false) {
          return false;
        } else if (currentCategory === "category1" && item.category1 === false) {
          return false;
        } else if (currentCategory === "category2" && item.category2 === false) {
          return false;
        } else if (currentCategory === "category3" && item.category3 === false) {
          return false;
        }
        return(
          
          <CPLi className={"products_li " + (item.new ? "new " : "") + (item.category1 ? "category1 " : "") + (item.category2 ? "category2 " : "") + (item.category3 ? "category3" : "")} key={index}>
            <CPA>
              <CPImg src={item.imagePath} alt={item.title} className="img" />
              <CPName>{item.name}</CPName>
            </CPA>
          </CPLi>
        );
      })}
        
      </CPUl>
    </>
    
  );
};

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