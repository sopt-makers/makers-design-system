"use client";

import { ToastProvider } from "ui";
import styles from "./page.module.css";
import ToastTemp from "./ToastTemp";

export default function Page(): JSX.Element {

  return (
    <ToastProvider>
      <main className={styles.main}>
      <ToastTemp />
      </main>
    </ToastProvider>
  );
}
