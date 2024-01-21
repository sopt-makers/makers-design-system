import { Test } from 'ui';
import styles from './page.module.css';

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <Test color="blue" size="big" text="Test Component" />
    </main>
  );
}
