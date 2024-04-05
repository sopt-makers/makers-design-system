import * as styles from './style.css';

interface TestProps {
  children?: React.ReactNode;
  text: string;
  color?: 'black' | 'red' | 'blue';
  size?: 'normal' | 'big'
}

function Test(props: TestProps) {
  const { children, text, color = 'black', size = 'normal' } = props;

  return (
    <div className={styles.root}>
      <p className={`${styles.textColor[color]} ${styles.textSize[size]}`}>{text}</p>
      {children}
    </div>
  );
};

export default Test;