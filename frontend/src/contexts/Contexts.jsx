import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { ConfigContext } from "./ConfigContext";

export const Contexts = ({ children }) => {

    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [config, setConfig] = useState(null);

    const API = "http://localhost:8080";
    
    // Fetching data
    useEffect(() => {

        fetch(`${API}/players/getAllUsers`)
        .then(res => res.json())
        .then(data => {
            // Sorting players
            data.sort((a, b) => b.bestScore - a.bestScore);
            setUsers(data);
        })
        .catch("Failed to load players. \nErr: ");

    }, []);

    // Fetching config for when player changes
    useEffect(() => {

        fetch(`${API}/config/`)

    }, [currentUser]);

    return (
        <UserContext.Provider value={{ users, currentUser, setCurrentUser }}>
            <ConfigContext.Provider value={{ config, setConfig }}>
                {children}
            </ConfigContext.Provider>
        </UserContext.Provider>
    );
};