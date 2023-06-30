import { useState, useEffect, useRef } from 'react';


function PodcastCard() {
  const [slideIndex, setSlideIndex] = useState(1); // Use state to manage slide index
  const slidesRef = useRef(null);

  useEffect(() => {
    const slides = slidesRef.current.querySelectorAll('.slide');
    showSlide(slideIndex, slides);
  }, [slideIndex]);

  useEffect(() => {
    const slides = slidesRef.current.querySelectorAll('.slide');
    showSlide(slideIndex, slides);
  }, [slideIndex]); // Call once during initial render

  function prevSlide() {
    setSlideIndex((prevIndex) => {
      if (prevIndex === 1) {
        return slidesRef.current.children.length;
      } else {
        return prevIndex - 1;
      }
    });
  }

  function nextSlide() {
    setSlideIndex((prevIndex) => {
      if (prevIndex === slidesRef.current.children.length) {
        return 1;
      } else {
        return prevIndex + 1;
      }
    });
  }

  function showSlide(index, slides) {
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    const firstVisibleSlide  = (index - 3 + slides.length) % slides.length;
    const secondVisibleSlide = index % slides.length;
    const thirdVisibleSlide  = (index + 1) % slides.length;
    const fourthVisibleSlide  = (index + 2) % slides.length;

    slides[firstVisibleSlide].style.display  = 'block';
    slides[secondVisibleSlide].style.display = 'block';
    slides[thirdVisibleSlide].style.display  = 'block';
    slides[fourthVisibleSlide].style.display  = 'block';
  }

  return (
    <>
      <div className="carousel">
        <div ref={slidesRef} className="slides-container">
          <div className="slide slide1">
            <h1>Sick Leave for Indie Founders?</h1>
            <p>Indie Stories · Jan 24 · Episode 234</p>
            <img src="../../src/assets/Play.svg" alt="" />
          </div>
          <div className="slide slide2">
            <h1>Sick Leave for Indie Founders?</h1>
            <p>Indie Stories · Jan 24 · Episode 234</p>
            <img src="../../src/assets/Play.svg" alt="" />
          </div>
          <div className="slide slide3">
            <h1>Sick Leave for Indie Founders?</h1>
            <p>Indie Stories · Jan 24 · Episode 234</p>
            <img src="../../src/assets/Play.svg" alt="" />
          </div>
          <div className="slide slide4">
            <h1>Lorem ipsum dolor sit.</h1>
            <p>Indie Stories · Jan 24 · Episode 234</p>
            <img src="../../src/assets/Play.svg" alt="" />
          </div>
          <div className = "slide slide5">
            <h1>Sick Leave for Indie Founders Lorem, ipsum dolor.</h1>
            <p>Indie Stories · Jan 24 · Episode 234</p>
            <img src="../../src/assets/Play.svg" alt="" />
          </div>
          
        </div>
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </>
  );
}

export default PodcastCard;






