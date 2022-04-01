import styles from "./Hero.module.css"
import Image from "next/image";

const Hero = () => {
    return (
        <section >
            <div className={styles.background}>
                <div className={styles.titleCard}>
                    <h1 className={styles.title}>deep health collective</h1>
                    <p className={styles.contactUs}>CONTACT US: +555 555 555</p>
                </div>
                <div className={styles.cta}>
                    <img src={"/sun.svg"} alt={"heart"} className={styles.sun}/>
                </div>
            </div>
            <img src={"/waves.svg"} className={styles.waves}/>
            <h2 className={styles.mission}>
                Empathetic, personalized, comprehensive mental healthcare, right here in Kigali.
            </h2>
        </section>
    )
}

export default Hero;