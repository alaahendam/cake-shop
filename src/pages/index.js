import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useSelector } from "react-redux";
import Image from "next/image";
import { motion } from "framer-motion";
import NumberDisplay from "@/components/numberDisplay";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const loginUser = useSelector((state) => state.user.user);
  return (
    <>
      <Head>
        <title>Glorious</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.home}>
          <div className={styles.homeDiv}>
            <div>
              <h1>Create greate memories with love and sweetness</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                sed neque accumsan, gravida velit a, semper ipsum. Proin at
                metus luctus.
              </p>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.99 }}
                style={{
                  backgroundColor: "pink",
                  color: "#a71b52",
                }}
              >
                ORDER NOW
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.99 }}
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "1px solid white",
                }}
              >
                LEARN MORE
              </motion.button>
            </div>
          </div>
          <div className={styles.homeDiv}>
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <Image
                priority
                src="/images/strawberryBiscuit.png"
                alt="Example Image"
                width={300}
                height={400}
                className={styles["image-3d"]}
              />
            </motion.div>
          </div>
        </div>
        <div
          className={`${styles.dFlexColumn} ${styles.whyUsNumber}`}
          style={{
            justifyContent: "space-around",
          }}
        >
          <h1>Why Us ?</h1>
          <div
            className={styles.dFlexRow}
            style={{
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <div className={styles.dFlexColumn}>
              <NumberDisplay targetNumber={150} duration={5} />
              <p>more products</p>
            </div>
            <div className={styles["vertical-line"]}></div>
            <div className={styles.dFlexColumn}>
              <NumberDisplay targetNumber={2000} duration={5} />
              <p>customers</p>
            </div>
            <div className={styles["vertical-line"]}></div>
            <div className={styles.dFlexColumn}>
              <NumberDisplay targetNumber={10000} duration={5} />
              <p>implemented orders</p>
            </div>
          </div>
        </div>
        <div className={styles.memorySection}></div>
        <div className={styles.bestSellers}></div>
        <div className={styles.bestSellersSection}></div>
      </main>
    </>
  );
}
