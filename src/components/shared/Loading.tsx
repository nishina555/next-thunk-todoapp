import { FC } from "react";
import loadingCircleIcon from "../../../public/images/loadingCircleGray.png";
import styles from "./Loading.module.css";

export const Loading: FC = () => {
  return (
    <div className={styles.container}>
      {/* pngファイルを利用する場合 */}
      {/* <img className={styles.icon} src={loadingCircleIcon.src} /> */}

      {/* svgファイルを利用する場合 */}
      <img className={styles.icon} src="images/loading.svg" />
    </div>
  );
};
