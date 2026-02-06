import { useContext, useEffect, useState } from "react";
import BackToMenu from "../../components/back-to-menu/BackToMenu";
import "./Config.css";
import { ConfigContext } from "../../contexts/ConfigContext";
export default function Config() {

    const configs = useContext(ConfigContext);

    // To be set on context
    const [hasMusic, setHasMusic] = useState(configs.config.hasMusic);
    const [musicVolume, setMusicVolume] = useState(configs.config.musicVolume);
    const [hasSfx, setHasSfx] = useState(configs.config.hasSfx);
    const [sfxVolume, setSfxVolume] = useState(configs.config.sfxVolume);
    const [hasAnimBg, setHasAnimBg] = useState(configs.config.hasAnimBg);

    useEffect(() => {

        configs.setConfig(
            pC => ({
                ...pC,
                hasMusic: hasMusic,
                hasSfx: hasSfx,
                hasAnimBg: hasAnimBg,
                musicVolume: musicVolume,
                sfxVolume: sfxVolume
            })
        );

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