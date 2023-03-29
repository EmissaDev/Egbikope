// import Slider from "react-animated-slider";

import "react-animated-slider/build/horizontal.css";
import './Carousel.css';

function Carousel(props) {
  console.log(props.load)
  console.log(props.slide)

  // return (
    // <Slider autoplay="2000">
    //   { props.load && props.slide.forEach((item, index) =>
    //       <div key={index}>
    //         <p>{item}</p>
    //         <img src={item} alt=""
    //           style={{
    //             // background: `url('${slide}') no-repeat center center`,
    //             objectFit: `cover`,
    //             /* gives a shadow to images to highlight where image has same color as its parent's background */
    //             filter:
    //               `drop-shadow(
    //                 1px 2px 8px hsl(200deg 50% 40% / 0.2)
    //               )
    //               drop-shadow(
    //                 2px 4px 16px hsl(200deg 50% 40% / 0.2)
    //               )`
    //           }}
    //         />
    //       </div>
    //     )
    //   }
    // </Slider>
  // )
}

export default Carousel;