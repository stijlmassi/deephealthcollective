import styles from "./ContactUsBanner.module.css"

const ContactUsBanner = () => {
    return (
        <div className={`bannerWrapper1`}>
            <div>
                <p className={styles.phoneNumber}>+555 555 555</p>
            </div>
            <div>
                <p className={styles.cta}>Get in touch, we're here</p>
            </div>
        </div>
    )
}

export default ContactUsBanner;