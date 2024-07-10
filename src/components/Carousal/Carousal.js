
"use client"

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const CarouselContent = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => `translateX(-${props.translate}%)`};
`;

const Slide = styled.div`
  min-width: 100%;
  height: 300px;
  background: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  color: white;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => props.direction}: 10px;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    setTranslate(currentIndex * 100);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <CarouselContainer>
      <CarouselContent translate={translate}>
        {slides.map((slide, index) => (
          <Slide key={index} bgColor={slide.bgColor}>
            {slide.content}
          </Slide>
        ))}
      </CarouselContent>
      <NavButton direction="left" onClick={prevSlide}>
        &#10094;
      </NavButton>
      <NavButton direction="right" onClick={nextSlide}>
        &#10095;
      </NavButton>
    </CarouselContainer>
  );
};

export default Carousel;
