import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { ConfigContext } from "./ConfigContext";

export const Contexts = ({ children }) => {

    const [users, setUsers] = useState([{ name: "sanomoref99" }]);
    const [config, setConfig] = useState({ name: "Matheus" });
    
    // Fetching data
    useEffect(() => {

    }, []);

    return (
        <UserContext.Provider value={{ users, setUsers }}>
            <ConfigContext.Provider value={{ config, setConfig }}>
                {children}
            </ConfigContext.Provider>
        </UserContext.Provider>
    );
};