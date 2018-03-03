import Slider from 'react-slick';

import NavArrow from './NavArrow';
import Card from './Card';;

import styles from './styles.scss';
import './slider.scss';


export default ({ imgs=[] }) => {
  const LeftArrow = NavArrow('left');
  const RightArrow = NavArrow('right');

  const settings = {
    slidesToShow: 1,
    autoplay: true,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '0',
    autoplaySpeed: 2500,
    prevArrow: <RightArrow/>,
    nextArrow: <LeftArrow />,
    className: styles.slider,
    arrows: !window.__IS_MOBILE__,
    swipe: window.__IS_MOBILE__,
  };


  return <Slider {...settings}>
    { imgs.map((imgUrl, index) => {
      return <div key={index}>
        <Card imgUrl={imgUrl}/>
      </div>;
    })}
  </Slider>
}