import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { ConfigContext } from "./ConfigContext";

export const API = "http://localhost:8080";
export const Contexts = ({ children }) => {

    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [config, setConfig] = useState({
                hasAnimBg: true,
                hasSfx: true,
                hasMusic: true,
                sfxVolume: 50,
                musicVolume: 50
            });

    return (
        <UserContext.Provider value={{ users, setUsers, currentUser, setCurrentUser }}>
            <ConfigContext.Provider value={{ config, setConfig }}>
                {children}
            </ConfigContext.Provider>
        </UserContext.Provider>
    );
};