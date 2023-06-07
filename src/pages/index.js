import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useSelector } from "react-redux";
import Image from "next/image";
import { motion, wrap } from "framer-motion";
import NumberDisplay from "@/components/numberDisplay";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const loginUser = useSelector((state) => state.user.user);
  const bestSellersCakes = [
    {
      path: "cheeseCake.jpg",
      name: "cheese cake",
      flavour: "Creamy",
      price: "950 AMD",
    },
    {
      path: "chocolateCake.jpg",
      name: "chocolate cake",
      flavour: "Creamy",
      price: "750 AMD",
    },
    {
      path: "hazelnutCake.jpg",
      name: "hazelnut cake",
      flavour: "Creamy",
      price: "750 AMD",
    },
    {
      path: "cheeseCake2.jpg",
      name: "cheese cake",
      flavour: "Creamy",
      price: "950 AMD",
    },
  ];
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
        <div
          className={`${styles.memorySection} ${styles.dFlexRow}`}
          style={{
            justifyContent: "space-around",
          }}
        >
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
              src="/images/strawberryCake.png"
              alt="Example Image"
              width={250}
              height={250}
              className={styles["image-3d"]}
            />
          </motion.div>
          <div>
            <h1>Unforgettable Moments</h1>
            <p>
              An Opportunity to see loved ones around a table even without an
              occasion
            </p>
          </div>
        </div>
        <div
          className={`${styles.bestSellers} ${styles.dFlexRow}`}
          style={{
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {bestSellersCakes?.map((cake) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.99 }}
              className={styles.cakeCard}
            >
              <Image
                priority
                src={`/images/${cake.path}`}
                alt="Example Image"
                width={300}
                height={400}
                className={styles["cakeCardImg"]}
              />
              <div
                style={{
                  paddingLeft: "20px",
                  display: "flex",
                  height: "30%",
                  flexDirection: "column",
                  justifyContent: "center",
                  color: "black",
                }}
              >
                <h4>{cake.name}</h4>
                <p>Flavour : {cake.flavour}</p>
                <h4>{cake.price}</h4>
              </div>
            </motion.div>
          ))}
        </div>
        <div className={styles.bestSellersSection}></div>
      </main>
    </>
  );
}
