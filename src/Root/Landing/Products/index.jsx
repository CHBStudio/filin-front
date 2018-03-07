import urls from 'config/urls';

import Services from '../components/Services';
import repairPartsTruckIcon from './img/repair-parts-truck.svg';
import repairPartsCarIcon from './img/repair-parts-car.svg';
import batteryIcon from './img/battery.svg';
import wheelIcon from '../Services/img/wheel.svg';
import accessoryIcon from './img/accessory.svg';
import oilIcon from './img/oil.svg';

import styles from './styles.scss';


export default () => {
  return <Services
    title="Товары"
    buttonText="Все товары"
    data={[
      { imgUrl: repairPartsTruckIcon, title: 'Запчасти грузовые', iconClassName: styles.repairPartsTruck, url: urls.psProducts(5)},
      { imgUrl: repairPartsCarIcon, title: 'Запчасти легковые', iconClassName: styles.repairPartsCar, url: urls.psProducts(3)},
      { imgUrl: oilIcon, title: 'Масла', iconClassName: styles.oil, url: urls.psProducts(16)},
      { imgUrl: accessoryIcon, title: 'Аксессуары', iconClassName: styles.accessory, url: urls.psProducts(4)},
      { imgUrl: wheelIcon, title: 'Шины', iconClassName: styles.wheel, url: urls.psProducts(1)},
      { imgUrl: batteryIcon, title: 'Аккумуляторы', iconClassName: styles.battery, url: urls.psProducts(17)},
    ]}
    linkTo={urls.psProducts('all')}
  />
}