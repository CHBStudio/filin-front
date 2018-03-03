import styles from './styles.scss';


export default ({ className, onClick=()=>{} }) => {
  return <svg
    width="1492px"
    height="1492px"
    viewBox="0 0 1492 1492"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    onClick={onClick}
    className={cn(styles.root, className)}
  >
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
      <g
        id="Artboard"
        transform="translate(-5595.000000, -1222.000000)"
        stroke="#FFFFFF"
        strokeWidth="200"
        className={styles.body}
      >
        <g id="Group" transform="translate(5695.000000, 1322.000000)">
          <path d="M0.5,0.5 L1291.3993,1291.3993" id="Line-3"/>
          <path d="M0.5,0.5 L1291.3993,1291.3993" id="Line-3" transform="translate(646.000000, 646.000000) scale(-1, 1) translate(-646.000000, -646.000000) "/>
        </g>
      </g>
    </g>
  </svg>
}