import Title from 'components/Title';

import styles from './styles.scss';


export default () => {
  return <div className={styles.root}>
    <Title tag="h2" className={styles.title}>Описание</Title>
    <p className={styles.text}>
      В торгово-сервисном комплексе «Филин» реализуются запасные части для европейских, американских, китайских, корейских грузовых автомобилей;
      <br/>
      шины для грузовых, легковых автомобилей, спецтехники, погрузчиков;
      <br/>
      б/у полуприцепы, тягачи, а также б/у запчасти с «разборки»;
      <br/>
      большой выбор кузовных деталей для грузовиков;
      <br/>
      Аккумуляторы (можно приобрести со скидкой при сдаче старого);
      <br/>
      запчасти для японских легковых автомобилей;
      <br/>
      строительные материалы.
      <br/>
      У нас Вы найдёте все необходимые запчасти для Вашего автомобиля.
      <br/>
      На территории имеется автосервис для легковых автомобилей, мойка, грузовой/легковой шиномонтаж и установка/настройка тахографов. Для удобства клиентов ТСК «Филин» располагает парковкой, погрузочно-разгрузочными зонами, уютным кафе с домашней кухней и душем.
    </p>
  </div>
}