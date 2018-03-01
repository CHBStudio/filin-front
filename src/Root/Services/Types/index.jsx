import TypeLink from './TypeLink';

import styles from './styles.scss';


export default ({ types=[] }) => {
  return <div className={styles.root}>
    { types.map((typeData, index) => {
      return <div key={index}>{ typeData.name }</div>
    }) }
  </div>
}