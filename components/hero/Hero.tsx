import styles from "./Hero.module.css"
import Image from "next/image";

const Hero = () => {
    return (
        <section className={styles.background}>
            <div className={styles.titleCard}>
                <h1 className={styles.title}>deep health collective</h1>
                <p className={styles.contactUs}>CONTACT US: <span className={styles.phoneNumber}>+555 555 555</span></p>

            </div>
            <div className={styles.cta}>
                <img src={"/sun.svg"} alt={"heart"}/>
            </div>
        </section>
    )
}

export default Hero;