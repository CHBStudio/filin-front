import urls from 'config/urls';
import history from 'utils/history';

import styles from './styles.scss';


export default () => {
  return <div
    className={styles.root}
    onClick={() => history.push(urls.landing)}
  >
    <div className={styles.logo}/>
    <div className={styles.text}>
      ТОРГОВО-СЕРВИСНЫЙ КОМПЛЕКС ЗАПАСНЫЕ ЧАСТИ И СОПУТСТВУЮЩИЕ ТОВАРЫ ДЛЯ ГРУЗОВЫХ АВТОМОБИЛЕЙ
    </div>
  </div>
}