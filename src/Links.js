import styles from './Links.module.scss'

function Links() {

    return (
        <div className={styles.links}>
                <a href="https://www.linkedin.com/in/julienbardel/"><i className={styles.linkedin}></i></a>
                <a href="https://twitter.com/jubardel"><i className={styles.twitter}></i></a>
                <a href="https://github.com/jbardel"><i className={styles.github}></i></a>
                <a href="mailto:julien.bardel@gmail.com"><i className={styles.mail}></i></a>
        </div>
    );
}

export default Links;