import Title from 'components/Title';
import PhoneLink from 'components/PhoneLink';

import Param from './Param';
import Tags from './Tags';

import styles from './styles.scss';


export default ({ data }) => {
  return <div className={styles.root}>
    <Title className={styles.title} tag="h5">{ data.name }</Title>
    { data.housing && <Param title="Копус: ">
      { data.housing }
    </Param> }
    { data.pavilion && <Param title="Павильон: ">
      { data.pavilion }
    </Param> }
    <p className={styles.text}>{ data.description }</p>
    <Tags tags={data.tags}/>
    <div className={styles.params}>
      <Param title="Телефон: ">
        <PhoneLink className={styles.phone}>{ data.phone }</PhoneLink>
      </Param>
      { data.link && <Param title="Сайт: ">
        <a
          target="_blank"
          className={styles.link}
          href={`http://${data.link}`}
        >{ data.link }</a>
      </Param> }
    </div>
  </div>
}