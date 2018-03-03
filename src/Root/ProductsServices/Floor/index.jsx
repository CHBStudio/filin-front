import Title from 'components/Title';

import Item from './Item';

import styles from './styles.scss';


export default ({ data }) => {
  if(data.data.length === 0) {
    return null;
  }

  return <div className={styles.root}>
    <Title tag="h4" className={styles.title}>{ data.floor } этаж</Title>
    <div className={styles.container}>
      { data.data.map((item, index) => {
        return <Item key={index} data={item}/>;
      }) }
    </div>
  </div>
};