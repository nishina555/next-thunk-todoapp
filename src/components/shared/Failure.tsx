import { FC } from "react";
import styles from "./Failure.module.css";

export const Failure: FC = () => {
  return <div className={styles.container}>通信失敗</div>;
};
