import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "@res/images/ethereal-logo-no-bg.png";
import { UserContext } from "../../contexts/UserContext";
import { API } from "../../contexts/Contexts.jsx";
export default function Login() {

    const { users, setCurrentUser } = useContext(UserContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

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
            navigate(`/main-menu`);
        })
        .catch(err => console.error("Failed to add user. \nErr: ", err));
    };

    const login = () => {

        const userByEmail = users.find(u => u.email === email);

        if (userByEmail) {
            console.log("USER FOUND");
            if (userByEmail.name === name) {
                setCurrentUser(userByEmail);
                navigate(`/main-menu`);
            } else {

                alert("This email is already registered with a different name.");
            }
        } else {
            console.log("USER CREATED");
            createUser();
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
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                     />

                    <input type="text" name="name" placeholder="Nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name} />
                    
                    <button onClick={login}>Entrar</button>
                </div>
            </div>

        </div>
    );
}