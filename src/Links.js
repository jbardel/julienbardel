import styles from './Links.module.scss'

function Links() {

    return (
        <div className={styles.links}>
            <p>
                Hello ! My name is Julien Bardel
            </p>
            <ul>
                <li><span className={styles.twitter}></span>Twitter</li>
                <li><span className={styles.user}></span>User</li>

            </ul>
        </div>
    );
}

export default Links;