import styles from './Presentation.module.scss';

function Presentation(props) {

    return (
        <div className={styles.presentation}>
            <p>
                Hello ! My name is <span className={styles.highlight}>Julien Bardel</span>
            </p>
            <p>
                I'm a Full-Stack developer
            </p>
            <div className={styles.tellmemore}>
                <a href={props.next}>Tell me more</a>
            </div>
        </div>
    )
}

export default Presentation;