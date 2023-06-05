import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";



const Home = () => {
    const user = useContext(AuthContext);
    return (
        <div>
            <h2>User Name : {user && <span>{user.displayName}</span>
            }</h2>
            Hello i am fayshal Islam.i am a student
        </div>
    );
};

export default Home;