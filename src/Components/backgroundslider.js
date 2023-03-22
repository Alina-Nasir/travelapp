import Carousel from 'react-bootstrap/Carousel';

function BackgroundSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.wildfrontierstravel.com/media/cache/page_image_large/upload/mirror/www-wildfrontierstravel-com/307a61e5_b09f7cebbb110c46c929820a18e54b33a57f107c.jpeg"
          alt="First slide"
          height="500rem"
        />
        <Carousel.Caption>
          <h3>Lahore</h3>
          <p>The city is filled with an impressive array of monuments that date back to those golden days</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.wildfrontierstravel.com/media/cache/page_image_large/upload/cc/46ddac20/Islamabad.jpeg"
          alt="Second slide"
          height="500rem"
        />

        <Carousel.Caption>
          <h3>Islamabad</h3>
          <p>As the capital and diplomatic centre of Pakistan, it is also home to some of the country’s best hotels and restaurants.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.wildfrontierstravel.com/media/cache/page_image_large/upload/cc/155d1fc6/Khaplu.jpeg"
          alt="Third slide"
          height="500rem"
        />

        <Carousel.Caption>
          <h3>Khaplu</h3>
          <p>
          A beautiful village just a few miles east of Skardu with picturesque terraced fields growing all sorts of crops.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BackgroundSlider;