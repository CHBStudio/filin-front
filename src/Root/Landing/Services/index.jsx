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
      { imgUrl: wheelIcon, title: 'Грузовой и легковой шиномонтаж', iconClassName: styles.wheel, url: urls.psServices(2)},
      { imgUrl: tachogrpaphIcon, title: 'Установка и настройка тахографов', iconClassName: styles.tachogrpaph, url: urls.psServices(8)},
      { imgUrl: stockIcon, title: 'Складские услуги', iconClassName: styles.stock, url: urls.psServices(9)},
      { imgUrl: repairCarsIcon, title: 'Автосервис легковой', iconClassName: styles.repairCars, url: urls.psServices(10)},
      { imgUrl: insuranceIcon, title: 'Страхование', iconClassName: styles.insurance, url: urls.psServices(11)},
      { imgUrl: carWashIcon, title: 'Автомойка легковая', iconClassName: styles.carWash, url: urls.psServices(12)},
      { imgUrl: logisticsIcon, title: 'Логистика', iconClassName: styles.logistics, url: urls.psServices(13)},
      { imgUrl: fuelIcon, title: 'Ремонт и настройка топливной аппаратуры', iconClassName: styles.fuel, url: urls.psServices(14)},
      { imgUrl: showerCoffeIcon, title: 'Кафе и Душ', iconClassName: styles.showerCoffe, url: urls.psServices(15)},
    ]}
    linkTo={urls.psServices('all')}
  />
}