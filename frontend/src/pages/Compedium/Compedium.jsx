import BackToMenu from "@components/back-to-menu/BackToMenu";
import "./Compedium.css";
export default function Compedium() {

    return (
        <div className="compedium">
            <BackToMenu />

            <div className="selection-holder">

                {/** To be changed into more user friendly UI with info */}

                <h1>Selecione o link da questão desejada</h1>
                <p>O link irá abrir uma nova página com conteúdo informativo e educacional sobre a operação.</p>

                <ul className="link-holder">
                    
                    <a rel="noopener noreferrer" target="_blank" href="https://mundoeducacao.uol.com.br/matematica/adicao.htm"><li>Adição</li></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://mundoeducacao.uol.com.br/matematica/subtracao.htm"><li>Subtração</li></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://mundoeducacao.uol.com.br/matematica/multiplicacao.htm"><li>Multiplicação</li></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://mundoeducacao.uol.com.br/matematica/divisao.htm"><li>Divisão</li></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://mundoeducacao.uol.com.br/matematica/potenciacao.htm"><li>Potênciação</li></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://mundoeducacao.uol.com.br/matematica/fatoracao-de-polinomio.htm"><li>Fatoração</li></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://mundoeducacao.uol.com.br/matematica/calculando-raiz-quadrada-um-numero.htm"><li>Raiz quadrada</li></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://mundoeducacao.uol.com.br/matematica/logaritmos.htm"><li>Logarítmos</li></a>
                </ul>

            </div>
        </div>
    )
}