import React, { useEffect, useRef } from 'react'
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderData = ({ data, id }) => {
  const slick = useRef()
  useEffect(() => {
    slick.current.slickGoTo(0)
  }, [id])

   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (<>
    <Slider {...settings} ref={slick} style={{'background':'grey','color':'white'}}>
          {data.categories[id].sub_categories.map((i, index) => (
            <div key={i.name}>
                <h3 style={{'text-align':'center'}}>{i.description}</h3>
            </div>
          ))}
        </Slider></>)
}

  export default SliderData
