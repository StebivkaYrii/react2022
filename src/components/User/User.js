import styles from "../../App.module.css";

export const User = ({user, setUser, setUserIdForPosts}) => {

    const click = () => {
        setUserIdForPosts(false);
        setUser(user);
    }
    return (
        <div className={styles.userStyle}>
            {user.name}
            <div><input type="button" value="show info" onClick={click}/></div>
        </div>
    )
}



