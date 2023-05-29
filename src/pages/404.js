import styles from "@/styles/404.module.css";
import Image from "next/image";
import { Button } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";
export default function Custom404() {
  return (
    <div className={styles.main}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>4</p>
        <Image
          priority
          src="/images/404.webp"
          alt="Example Image"
          width={200}
          height={200}
          className={styles["image-3d"]}
        />
        <p>4</p>
      </div>
      <Button sx={{ color: pink[500], border: `1px solid ${pink[500]}` }}>
        Go Back
      </Button>
    </div>
  );
}
