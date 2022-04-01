import styles from "./NavBar.module.css"

const NavBar = () => {
    
    return(
        <nav className={styles.navBar}>
            <p className={styles.menuItems}>services</p>
            <p className={styles.menuItems}>about us</p>
            <p className={styles.menuItems}>log in</p>
        </nav>
    )
}

export default NavBar;