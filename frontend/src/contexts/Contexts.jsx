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

    
    // Fetching data
    useEffect(() => {

        fetch(`${API}/players/getAllUsers`)
        .then(res => res.json())
        .then(data => {
            // Sorting players
            data.sort((a, b) => b.bestScore - a.bestScore);
            setUsers(data);
            setCurrentUser(data);
        })
        .catch(err => console.error("Failed to load players. \nErr: ", err));

    }, []);

    // Fetching config for when player changes
    useEffect(() => {

        if(!currentUser) return;

        // Fetching Config file for the user

        fetch(`${API}/config/${currentUser.id}`)
        .then(res => {
            if(!res.ok) throw new Error("failed to fetch config");
            return res.json();
        })
        .then(data => setConfig(data))
        .catch(err => console.error("Failed to fetch config file. \nErr: ", err, "\nCurrent User: ", currentUser));

    }, [currentUser]);

    return (
        <UserContext.Provider value={{ users, currentUser, setCurrentUser }}>
            <ConfigContext.Provider value={{ config, setConfig }}>
                {children}
            </ConfigContext.Provider>
        </UserContext.Provider>
    );
};