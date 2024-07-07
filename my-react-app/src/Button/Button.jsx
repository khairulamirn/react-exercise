import styles from "./Button.module.css";

// module will return class name unique hashcode
function Button() {

    return (
        <button className={styles.button}>Click me</button>
    )
}

export default Button;
        