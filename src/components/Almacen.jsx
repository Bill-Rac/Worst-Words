import React, { useRef } from "react";
import styled from "styled-components";
import ClipboardJS from "clipboard";
import { Data } from "./Data";
import { toast, Toaster } from "react-hot-toast";

const Almacen = () => {
  const textRefs = useRef(Data.map(() => React.createRef()));

  const handleCopyItem = (index) => () => {
    const clipboard = new ClipboardJS(textRefs.current[index].current, {
      text: () => textRefs.current[index].current.innerText,
    });

    clipboard.on("success", () => {
      clipboard.destroy();
      toast.success("Successfully");
    });

    clipboard.on("error", () => {
      clipboard.destroy();
      toast.error("This didn't work.");
    });

    clipboard.onClick(event);
  };

  return (
    <Wrapper>
      <Toaster />
      {Data.map((item, index) => (
        <TextWrapper
          key={index}
          ref={textRefs.current[index]}
          onClick={handleCopyItem(index)}
        >
          <p>{item.text}</p>
        </TextWrapper>
      ))}
    </Wrapper>
  );
};

export default Almacen;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextWrapper = styled.div`
  white-space: pre-line;
  font-family: monospace;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 5%;
  aspect-ratio: 1/1;

  border: 2px solid transparent;
  animation: borderAnim 2s infinite;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 10vw;
  }

  @keyframes borderAnim {
    0% {
      border-color: rgb(255, 0, 0);
    }
    13% {
      border-color: rgb(255, 255, 0);
    }
    25% {
      border-color: rgb(141, 1, 160);
    }
    38% {
      border-color: rgb(0, 195, 255);
    }
    50% {
      border-color: rgb(121, 251, 0);
    }
    63% {
      border-color: rgb(3, 27, 165);
    }
    75% {
      border-color: rgb(255, 0, 76);
    }
    88% {
      border-color: rgb(0, 255, 255);
    }
    100% {
      border-color: rgb(255, 102, 0);
    }
  }
`;
