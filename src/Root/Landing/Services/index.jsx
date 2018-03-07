import urls from 'config/urls';

import Services from '../components/Services';

import wheelIcon from './img/wheel.svg';
import tachogrpaphIcon from './img/tachogrpaph.svg';
import carWashIcon from './img/car-wash.svg';
import stockIcon from './img/stock.svg';
import showerCoffeIcon from './img/shower-coffe.svg';
import repairCarsIcon from './img/repair-cars.svg';
import insuranceIcon from './img/insurance.svg';
import logisticsIcon from './img/logistics.svg';
import fuelIcon from './img/fuel.svg';

import styles from './styles.scss';


export default () => {
  return <Services
    title="Услуги"
    buttonText="Все услуги"
    data={[
      { imgUrl: wheelIcon, title: 'Грузовой и легковой шиномонтаж', iconClassName: styles.wheel},
      { imgUrl: tachogrpaphIcon, title: 'Установка и настройка тахографов', iconClassName: styles.tachogrpaph},
      { imgUrl: stockIcon, title: 'Складские услуги', iconClassName: styles.stock},
      { imgUrl: repairCarsIcon, title: 'Автосервис легковой', iconClassName: styles.repairCars},
      { imgUrl: insuranceIcon, title: 'Страхование', iconClassName: styles.insurance},
      { imgUrl: carWashIcon, title: 'Автомойка легковая', iconClassName: styles.carWash},
      { imgUrl: logisticsIcon, title: 'Логистика', iconClassName: styles.logistics},
      { imgUrl: fuelIcon, title: 'Ремонт и настройка топливной аппаратуры', iconClassName: styles.fuel},
      { imgUrl: showerCoffeIcon, title: 'Кафе и Душ', iconClassName: styles.showerCoffe},
    ]}
    linkTo={urls.psServices('all')}
  />
}