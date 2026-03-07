import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "@res/images/ethereal-logo-no-bg.png";
import { UserContext } from "../../contexts/UserContext";
import { API } from "../../contexts/Contexts.jsx";
export default function Login() {
    
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");    

    useEffect(() => {
        if(currentUser) navigate("/main-menu");
    }, []);

    const createUser = () => {

        fetch(`${API}/players/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email })
        })
        .then(res => res.json())
        .then(user => {
            setCurrentUser(user);
            localStorage.setItem("user", user);
            navigate(`/main-menu`);
        })
        .catch(err => console.error("Failed to add user. \nErr: ", err));


    };

    const verifyAccount = () => {

        fetch(`${API}/players/getUserByEmail`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email: email})
        })
        .then(res => res.json())
        .then(user => {
            if(user.name !== name) alert("Account already logged on another name.")
            else {
                setCurrentUser(user);
                navigate("main-menu");    
            }
        })
        .catch(createUser);
    }

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
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                     />

                    <input type="text" name="name" placeholder="Nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name} />
                    
                    <button onClick={verifyAccount}>Entrar</button>
                </div>
            </div>

        </div>
    );
}