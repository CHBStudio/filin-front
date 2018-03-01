import styles from './styles.scss';


export default ({ sections=[], activeIndex=0, onChange=()=>{} }) => {
  return <div className={styles.root}>
    { sections.map((section, index) => {
      return <div
        className={cn(
          styles.section,
          activeIndex === index && styles.sectionActive
        )}
        key={index}
        onClick={() => onChange(index)}
      >
        { section }
      </div>
    }) }
  </div>
}