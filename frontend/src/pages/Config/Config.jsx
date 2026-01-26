import { useRef, useState } from "react";
import BackToMenu from "../../components/back-to-menu/BackToMenu";
import "./Config.css";
export default function Config() {

    // To be set as context
    const [hasMusic, setHasMusic] = useState(true);
    const [musicVolume, setMusicVolume] = useState(10);
    const [hasSfx, setHasSfx] = useState(true);
    const [sfxVolume, setSfxVolume] = useState(10);
    const [hasAnimBg, setHasAnimBg] = useState(true);

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