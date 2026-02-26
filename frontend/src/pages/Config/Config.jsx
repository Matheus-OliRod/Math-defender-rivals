import { useContext, useEffect, useState } from "react";
import BackToMenu from "../../components/back-to-menu/BackToMenu";
import "./Config.css";
import { ConfigContext } from "../../contexts/ConfigContext";
import { UserContext } from "../../contexts/UserContext";
import { API } from "../../contexts/Contexts";
export default function Config() {

    const { config, setConfig} = useContext(ConfigContext);
    const { currentUser } = useContext(UserContext);

    // To be set on context
    const [hasMusic, setHasMusic] = useState(config.hasMusic);
    const [musicVolume, setMusicVolume] = useState(config.musicVolume);
    const [hasSfx, setHasSfx] = useState(config.hasSfx);
    const [sfxVolume, setSfxVolume] = useState(config.sfxVolume);
    const [hasAnimBg, setHasAnimBg] = useState(config.hasAnimBg);

    useEffect(() => {

                const newConfig = {
                    ...config,
                    hasMusic: hasMusic,
                    hasSfx: hasSfx,
                    hasAnimBg: hasAnimBg,
                    musicVolume: musicVolume,
                    sfxVolume: sfxVolume
                }

                fetch(`${API}/config/updateConfig/${currentUser.id}`, {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(newConfig)
                })
                .then(res => res.json())
                .then(config => setConfig(config))
                .catch(err => console.error("Falied to update config.\nErr: ", err));

        
    }, [hasMusic, musicVolume, hasSfx, sfxVolume, hasAnimBg]);

    return (
        <div className="config">

            <BackToMenu />

            <div className="settings">
                <div className="main-settings">
                    <div className="setting-group">
                        <h3>Música de Fundo</h3>
                        <input type="checkbox" checked={hasMusic} onChange={(e) => setHasMusic(e.target.checked)} />
                        <input type="range" disabled={!hasMusic} value={musicVolume} onChange={(e) => setMusicVolume(Number(e.target.value))} />
                    </div>
                    <div className="setting-group">
                        <h3>Efeitos Sonoros</h3>
                        <input type="checkbox" checked={hasSfx} onChange={(e) => setHasSfx(e.target.checked)} />
                        <input type="range" disabled={!hasSfx} value={sfxVolume} onChange={(e) => setSfxVolume(e.target.value)} />
                    </div>
                    <div className="setting-group">
                        <h3>Animações de Fundo</h3>
                        <input type="checkbox" checked={hasAnimBg} onChange={(e) => setHasAnimBg(e.target.checked)} />
                    </div>
                </div>

                <div className="user-settings">
                    <button className="logout-button">Sair da Conta</button>
                    <button className="delete-account-button">Excluir Conta</button>
                </div>
            </div>
        </div>
    )
}