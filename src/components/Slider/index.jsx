import Slider from 'react-slick';

import NavArrow from './NavArrow';
import Card from './Card';

import styles from './styles.scss';
import './slider.scss';


export default ({
  imgs=[],
  cardClassName,
  className,
  arrowRightClassName,
  arrowLeftClassName,
  fade=false,
}) => {
  const LeftArrow = NavArrow('left', arrowLeftClassName);
  const RightArrow = NavArrow('right', arrowRightClassName);

  const settings = {
    slidesToShow: 1,
    autoplay: !window.__IS_MOBILE__,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '0',
    autoplaySpeed: 2500,
    prevArrow: <RightArrow/>,
    nextArrow: <LeftArrow/>,
    className: cn(styles.slider, className),
    arrows: !window.__IS_MOBILE__,
    swipe: window.__IS_MOBILE__,
    fade,
  };


  return <Slider {...settings}>
    { imgs.map((imgUrl, index) => {
      return <div key={index}>
        <Card imgUrl={imgUrl} className={cardClassName}/>
      </div>;
    })}
  </Slider>
}