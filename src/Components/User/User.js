export const User =({user}) => {
    return (
        <div>
            <span>{user.username}</span>
            <span>{user.email}</span>
            <span>{user.name}</span>
            <hr/>
        </div>
    );
}



