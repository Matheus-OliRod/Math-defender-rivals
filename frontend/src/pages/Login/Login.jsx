import { useRef } from "react";
import "./Login.css";
import logo from "@res/images/ethereal-logo-no-bg.png";
export default function Login( { setLogged }) {

    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const handleLogin = () => {
        setLogged(true);
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
                    <input ref={emailRef} type="email" name="email" placeholder="Email" />
                    <input ref={nameRef} type="text" name="name" placeholder="Nome" />
                    <button onClick={handleLogin}>Entrar</button>
                </div>
            </div>

        </div>
    );
}