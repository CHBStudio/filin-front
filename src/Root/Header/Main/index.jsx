import urls from 'config/urls';
import history from 'utils/history';

import styles from './styles.scss';


export default () => {
  return <div className={styles.root}>
    <div
      className={styles.logo}
      onClick={() => history.push(urls.landing)}
    />
    { !window.__IS_MOBILE__ && <div className={styles.text}>
      {/*ТОРГОВО-СЕРВИСНЫЙ КОМПЛЕКС ЗАПАСНЫЕ ЧАСТИ И СОПУТСТВУЮЩИЕ ТОВАРЫ ДЛЯ ГРУЗОВЫХ АВТОМОБИЛЕЙ*/}

      ТОРГОВО-СЕРВИСНЫЙ КОМПЛЕКС по торговле  запчастями для ГРУЗОВЫХ и легковых АВТОМОБИЛЕЙ, сопутствующими товарами, а также услуги грузового/легкового шиномонтажа,  установке/настройке тахографов.
    </div> }
  </div>
}