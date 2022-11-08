import Carousel from 'react-bootstrap/Carousel';

function SlideCarousel() {
  return (
    <>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/SB1c3Zb/mock1.png" height="300px"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/MMJ3QxH/mock2.png" height="300px"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </>
  );
}

export default SlideCarousel;