import * as styles from './style.css';

interface Props {
  children?: React.ReactNode;
}

function Test({ children }: Props) {
  return (
    <div className={styles.root}>
      <p>Test Component</p>
      {children}
    </div>
  );
};

export default Test;