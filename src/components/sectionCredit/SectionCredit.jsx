import React from "react";

import styles from "./SectionCredit.module.css";

const SectionCredit = () => {
    return (
        <div id="contatos" className={styles.main}>
            <p>
                ©2023 Tecnocar Camaquã -
                <a href="https://wa.me/5551997811832" target="_blank">
                    @MedeirosWebSites
                </a>
            </p>
        </div>
    );
};

export default SectionCredit;
