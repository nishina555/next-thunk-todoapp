import { FC } from "react";
// import loadingCircleIcon from "../../../public/loadingCircleGray.png";
import styles from "./Loading.module.css";

// export const Loading: FC = () => {
//   return (
//     <div className={styles.container}>
//       <p>ロード中</p>
//     </div>
//   );
// };

// export const Loading: FC = () => {
//   return (
//     <div className={styles.container}>
//       {/* <img className={styles.icon} src={loadingCircleIcon.src} /> */}
//     </div>
//   );
// };

export const Loading: FC = () => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src="loading.svg" />
    </div>
  );
};
