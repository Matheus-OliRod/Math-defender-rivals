import BackToMenu from "@components/back-to-menu/BackToMenu";
import "./HowToPlay.css";
export default function HowToPlay() {

    return (
        <div className="how-to-play">
            <BackToMenu />

            <div className="guide">
                <h1>Como Jogar</h1>
                <p>
                    Você, aluno de exatas, foi escolhido para proteger os alunos de humanas dos cálculos e equações que caem sobre a terra. <br /> <br />
                    Use o campo do final da tela para digitar respostas que irão resolver, ou não, ao desatre que caminha até às vidas pacíficas. <br /> <br />
                    A cada resposta certa, a sua pontuação e rank sobem em relação a outros corajosos soldados dos números. A pontução é baseada em dois fatores, dificuldade e tempo. <br /> <br />
                    Quanto mais tempo se passar em campo de batalha, mais pontos irá ganhar pela mesma dificuldade de equação. Já a dificuldade aumenta o nível de habilidade das questões enquanto aumenta a base de pontos dada por cada questão. <br /> <br />
                </p>

                <h1>Dificuldades</h1>
                <p>
                    Os níveis de dificuldade aumentam conforme a quantidade de questões resolvidas. Na primeira partida a dificuldade parte de operações básicas de adição e subtração, subindo para multiplicação, divisão, expondenciação.... <br /> <br />
                    Por motivos de nivelamento e oportunidade, há também um guia matemático (Compêndio) para permitir que mesmo sem conhecimento prévio de como se entende e resolve um problema matemático, você, soldado, possa aprender para prosseguir e superar os seus adversários e rivais. <br /> <br />

                    O nível em que se começa a partida depende da partida anterior, considerando que a primeira partida sempre irá começar em nível de operações básicas (Adição e subtração). <br /> <br />
                    Exemplificando: Se o soldado chegou até ao nível 7, a próxima partida irá começar a partir do nível 5, onde poderá facilitar o aumento de pontuação sem ter de esperar os desafios maiores por tanto tempo. <br /> <br />
                </p>

                <h1>Chefões</h1>
                <p>
                    Os chefões são equações de barreira entre os níveis, aparecem a cada 10 questões resolvidas. <br /> <br />
                    Os chefões são o indicador de um novo nível, permitindo que o jogador acesse seu guia instrucional de resolução. <br /> <br />
                </p>

                <h1>Fim de Jogo</h1>
                <p>
                    O Soldado possui três vidas, para cada questão que passa de sua zona de controle é perdido uma vida. <br /> <br />
                    Ao ficar sem vidas, o soldado é mandado de volta para a estação (A tela inicial) para que possa revisar seus conhecimentos e se preparar para a próxima batalha.
                </p>
            </div>
        </div>
    )
}