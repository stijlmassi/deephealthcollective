import styles from "./NavBar.module.css"

const NavBar = () => {
    
    return(
        <nav className={styles.navBar}>
            <button className={styles.menuItems}>services</button>
            <button className={styles.menuItems}>about us</button>
            <button className={styles.menuItems}>log in</button>
        </nav>
    )
}

export default NavBar;