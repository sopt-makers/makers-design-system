import * as styles from './style.css';

interface ChipProps {
  children?: React.ReactNode;
}

function Chip(props: ChipProps) {
  const { children } = props;

  return <div className={styles.root}>{children}</div>;
}

export default Chip;
