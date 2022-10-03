import { FC } from "react";
import styles from "./Loading.module.css";

export const Loading: FC = () => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src="images/loading.svg" />
    </div>
  );
};
