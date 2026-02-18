import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "@res/images/ethereal-logo-no-bg.png";
import { UserContext } from "../../contexts/UserContext";
export default function Login() {

    const userContext = useContext(UserContext);

    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");

    const createUser = (userName, userEmail) => {


    };

    const login = () => {
    const userByEmail = userContext.users.find(u => u.email === userEmail);

    if (userByEmail) {
        if (userByEmail.name === userName) {
            // correct login

            userContext.setCurrentUser(userByEmail);
        } else {

            // email exists but name differs
            alert("This email is already registered with a different name.");
        }
    } else {
        createUser({ userName, userEmail });
    }
    };

    return (
        <div className="container login">

            <div className="logo-holder">
                <img src={logo} alt="ETHEREAL LOGO" />
                <h1 className="logo-name">ETHEREAL CAT</h1>
            </div>

            <div className="form-holder">

                <strong className="game-name">MATH DEFENDER</strong>

                <div className="login-input-holder">
                    <input type="email" name="email" placeholder="Email"
                    onChange={(e) => setUserEmail(e.target.value)}
                    value={userEmail}
                     />

                    <input type="text" name="name" placeholder="Nome"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName} />
                    
                    <Link to="/main-menu/:player_id"><button onClick={login}>Entrar</button></Link>
                </div>
            </div>

        </div>
    );
}