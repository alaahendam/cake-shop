import styles from "@/styles/footer.module.css";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CopyrightIcon from "@mui/icons-material/Copyright";
const Footer = () => {
  return (
    <div className={styles.main}>
      <div
        className={`${styles.notification} ${styles.dFlexColumn}`}
        style={{
          color: "white",
        }}
      >
        <h1 className="text-3xl">Notification</h1>
        <p>Be informed about our sweet offers and delicious news</p>
        <div>
          <input type="email" name="" id="" placeholder="Your Email" />
          <input
            type="submit"
            value={"SUBSCRIBE"}
            style={{
              backgroundColor: "rgb(229 45 118)",
              color: "white",
            }}
          />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoImgWrapper}>
          <Image
            priority
            src={`/images/footer.jpg`}
            alt="Example Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.infoBackground}></div>
        <div
          className={`${styles.infoImgWrapper} ${styles.dFlexRow}`}
          style={{
            justifyContent: "space-evenly",
            color: "white",
          }}
        >
          <div className={styles.dFlexColumn}>
            <h4>Product</h4>
            <p>Pastry</p>
            <p>Pastry</p>
            <p>Pastry</p>
            <p>Pastry</p>
          </div>
          <div className={styles["vertical-line"]}></div>
          <div className={styles.dFlexColumn}>
            <h4>Product</h4>
            <p>Pastry</p>
            <p>Pastry</p>
            <p>Pastry</p>
            <p>Pastry</p>
          </div>
          <div className={styles["vertical-line"]}></div>
          <div className={styles.dFlexColumn}>
            <h4>Product</h4>
            <p>Pastry</p>
            <p>Pastry</p>
            <p>Pastry</p>
            <p>Pastry</p>
          </div>
          <div className={styles["vertical-line"]}></div>
          <div className={styles.dFlexColumn}>
            <h4>Product</h4>
            <p>Pastry</p>
            <p>Pastry</p>
            <p>Pastry</p>
            <p>Pastry</p>
          </div>
        </div>
        <div
          className={`${styles.contact} ${styles.dFlexRow}`}
          style={{
            color: "white",
          }}
        >
          <FacebookIcon />
          <InstagramIcon />
          <WhatsAppIcon />
        </div>
      </div>
    </div>
  );
};
export default Footer;
