import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { ConfigContext } from "./ConfigContext";

export const Contexts = ({ children }) => {

    const [users, setUsers] = useState([
        {
            name: "guest",
            bestScore: 0,
            rival: "",
            email: "",
            
        }
    ]);


    const [config, setConfig] = useState({
        hasAnimBg: true,
        hasMusic: true,
        musicVolume: 50,
        hasSfx: true,
        sfxVolume: 50
        }
    );
    
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