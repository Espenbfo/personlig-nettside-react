import React from "react"

import {Link} from "react-router-dom"
import styles from "./header.module.css"

const Header = ({ children }) => {
    return (
        <header className={styles.header}>
            {children}
        </header>
    )
};
export default Header;