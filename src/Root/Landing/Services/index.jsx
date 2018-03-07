import urls from 'config/urls';

import Services from '../components/Services';

import wheelIcon from './img/wheel.svg';
import tachogrpaphIcon from './img/tachogrpaph.svg';
import carWashIcon from './img/car-wash.svg';
import stockIcon from './img/stock.svg';
import showerCofeIcon from './img/shower-cofe.svg';
import repairCarsIcon from './img/repair-cars.svg';



export default () => {
  return <Services
    title="Услуги"
    buttonText="Все услуги"
    data={[
      { imgUrl: wheelIcon, title: 'Грузовой и легковой шиномонтаж', },
      { imgUrl: tachogrpaphIcon, title: 'Установка и настройка тахографов', },
      { imgUrl: carWashIcon, title: 'Автомойка легковая', },
      { imgUrl: repairCarsIcon, title: 'Автосервис легковой', },
      { imgUrl: stockIcon, title: 'Складские услуги', },
      { imgUrl: stockIcon, title: 'Страхование', },
      { imgUrl: stockIcon, title: 'Логистика', },
      { imgUrl: stockIcon, title: 'Ремонт и настройка топливной аппаратуры', },
      { imgUrl: showerCofeIcon, title: 'Кафе и Душ', },
    ]}
    linkTo={urls.psServices('all')}
  />
}