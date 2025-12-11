import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "@res/images/ethereal-logo-no-bg.png";
export default function Login( { setLogged }) {

    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");

    const handleLogin = () => {
        console.trace("TODO: Add credentials verification before backend");
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
                    
                    <Link to="/main-menu"><button onClick={handleLogin}>Entrar</button></Link>
                </div>
            </div>

        </div>
    );
}