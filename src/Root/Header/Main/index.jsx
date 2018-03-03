import styles from './styles.scss';


export default () => {
  return <div className={styles.root}>
    <div className={styles.logo}/>
    { !window.__IS_MOBILE__ && <div className={styles.text}>
      ТОРГОВО-СЕРВИСНЫЙ КОМПЛЕКС ЗАПАСНЫЕ ЧАСТИ И СОПУТСТВУЮЩИЕ ТОВАРЫ ДЛЯ ГРУЗОВЫХ АВТОМОБИЛЕЙ
    </div> }
  </div>
}