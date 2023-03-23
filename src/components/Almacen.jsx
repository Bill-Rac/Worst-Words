import React from "react";
import styled from "styled-components";
import { Data } from "./Data";

const Almacen = () => {
  return (
    <div>
      {Data.map((item, index) => (
        <TextWrapper key={index}>
          <p>{item.text}</p>
        </TextWrapper>
      ))}
    </div>
  );
};

export default Almacen;

const TextWrapper = styled.div`
  white-space: pre-line;
  font-family: monospace;
  font-size: 16px;
`;
