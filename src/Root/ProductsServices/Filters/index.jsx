import FilterLink from './FilterLink';

import styles from './styles.scss';


export default ({ filters=[], type }) => {
  return <div className={styles.root}>
    { filters.map((filterData, index) => {
      return <FilterLink
        filterId={filterData.id}
        key={index}
        type={type}
      >
        { filterData.name }
      </FilterLink>;
    }) }
  </div>
}