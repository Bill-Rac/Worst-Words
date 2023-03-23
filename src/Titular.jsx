import { React, useState } from "react";
import styled from "styled-components";
import { FaStar, FaHeart, FaThumbsUp, FaSmile } from "react-icons/fa";

function Titular() {
  const [elements, setElements] = useState([
    {
      id: 1,
      icon: <FaStar />,
      info: "Información sobre la estrella",
      expanded: false,
    },
    {
      id: 2,
      icon: <FaHeart />,
      info: "Información sobre el corazón",
      expanded: false,
    },
    {
      id: 3,
      icon: <FaThumbsUp />,
      info: "Información sobre el pulgar hacia arriba",
      expanded: false,
    },
    {
      id: 4,
      icon: <FaSmile />,
      info: "Información sobre la cara sonriente",
      expanded: false,
    },
  ]);

  const toggleExpansion = (id) => {
    setElements((prev) =>
      prev.map((element) =>
        element.id === id
          ? { ...element, expanded: !element.expanded }
          : element
      )
    );
  };

  return (
    <Container>
      <Title>¿WHAT ARE U LOOKING FOR?</Title>
      <Grid>
        {elements.map((element) => (
          <Element
            key={element.id}
            onClick={() => toggleExpansion(element.id)}
            style={{ transform: element.expanded ? "scale(1.2)" : "scale(1)" }}
          >
            {element.icon}
            {element.expanded && <Info>{element.info}</Info>}
          </Element>
        ))}
      </Grid>
    </Container>
  );
}

export default Titular;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  margin-bottom: 32px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
`;

const Element = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  font-size: 64px;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Info = styled.div`
  font-size: 24px;
  margin-top: 16px;
  color: #333;
`;
