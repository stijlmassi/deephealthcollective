import styles from "./TherapyBanner.module.css"

const TherapyBanner = () => {
    return (
        <div className={`bannerWrapper1`}>
            <div>
                <p className={styles.therapy}>Therapy</p>
            </div>
            <div>
                <p className={styles.blurb}>
                    Sometimes, all you need is the kind and empathetic ear of an expertly trained listener. Our therapists are trained to address a variety of life's challenges.
                </p>
            </div>
        </div>
    )
}

export default TherapyBanner;