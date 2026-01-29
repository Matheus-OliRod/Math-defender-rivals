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

                    <details>
                        <summary>Adição e Subtração</summary>

                        <p>
                            Adição e Subtração são as duas principais operações da matemática, adicionando e reduzindo de um valor.
                            <br /><br />
                            <b>No jogo:</b> <br /> <br />
                            25 + 10 = 25 <br />
                            25 + 27 = 52 <br />

                            25 - 10 = 15 <br />
                            25 - 27 = -2 <br />

                            -2 - 2 = -4 <br />
                            -2 + 2 = 0
                            <br /><br />
                            <a rel="noopener noreferrer" target="_blank" href="https://mundoeducacao.uol.com.br/matematica/adicao.htm"><li>Adição</li></a>
                            <a rel="noopener noreferrer" target="_blank" href="https://mundoeducacao.uol.com.br/matematica/subtracao.htm"><li>Subtração</li></a>
                        </p>

                    </details>
                    
                    <details>
                        <summary>Multiplicação</summary>

                        <p>
                            A multiplicação é outra operação básica. Se trata da repetição da <b>soma</b> de um mesmo número. Pode ser representado por diversos elementos, como 'x', '.' ou, como neste jogo, '*'. Note que a multiplicação deve ser efetuada antes da adição e da subtração.
                            <br /> <br />
                            A multiplicação pode ser lida e entendida como: <br />
                            n1 * n2 --{'>'} n1 + n1 + n1... n2 vezes. <br />
                            Exemplo: 2 * 3 --{'>'} 2 + 2 + 2 = 6.

                            <br /> <br />
                            <b>No Jogo:</b>
                            <br /> <br />

                            10 * 5 = 50 <br />
                            8 * 3 = 24 <br />
                            -5 * 2 = -10 <br />
                            -5 * -2 = 10 <br />

                            5 + 2 * 10 = 25 <br />
                            3 * 3 + 2 = 11

                            <br />
                            <br />
                            <a rel="noopener noreferrer" target="_blank" href="https://mundoeducacao.uol.com.br/matematica/multiplicacao.htm"><li>Multiplicação</li></a>
                        </p>

                    </details>

                    <details>
                        <summary>Divisão</summary>

                        <p>

                            A divisão é uma operação básica mais trabalhosa, tanto que neste jogo, as operações sempre irão resultar em um número inteiro, para evitar situações como dízimas periódica e não periódicas. <br /> <br />
                            
                            O processo de divisão, igualmente a multiplicação, deve ocorrer antes da soma e da subtração. <br />
                            Para realizar uma divisão, se faz um processo inverso da multiplicação. Uma forma de pensar na divisão é, que número, multiplicado por este, resulta no valor em que estou dividindo? <br /> <br />

                            Exemplo do pensamento: <br /> <br />

                            10 &#247; 2 --{'>'} 2 * ? = 10. <br />
                            A partir daí se torna uma forma de tentativa e erro. <br /> <br />

                            <b>No Jogo:</b> <br /> <br />

                            10 &#247; 2 = 5 <br />
                            -10 &#247; 2 = -5 <br />
                            10 &#247; -2 = -5 <br />
                            25 + 10 &#247; 2 = 30 <br />


                        <br /> <br />
                        <a rel="noopener noreferrer" target="_blank" href="https://mundoeducacao.uol.com.br/matematica/divisao.htm"><li>Divisão</li></a>
                        </p>
                    </details>

                    <details>
                        <summary>Potênciação</summary>

                        <p>
                        A potênciação é a operação de repetição da multiplicação. Igualmente à multiplicação faz com a soma, a potênciação faz com a multiplicação. <br />
                        Normalmente representada como um número pequeno (expoente) acima de um outro número (base) (Ex: 4², 4 é a base, ² é o expoente). <br />
                        O expoente representa quantas vezes este mesmo número será multiplicado.
                        <br /><br />
                        Exemplo: <br /><br />
                        4¹ = 4; <br />
                        4² = 4 * 4; <br />
                        4³ = 4 * 4 * 4; <br /> <br />
                        A potênciação deve ser efetuada antes da multiplicação e da divisão. <br />
                        Não é permitido somar nem multiplicar um número com expoente, a não ser que este número seja de base igual. Ao multiplicar ou dividir potências de bases iguais, se estará praticamente aumentando a quantidade de vezes que este número está multiplicando a si mesmo. Ex: <br /><br />
                        4² * 4² = (4 * 4) * (4 * 4);
                        <br /> <br />
                        Portanto, a multiplicação de potências de mesma base seguem como uma soma dos seus expoentes. Ex: <br /><br />
                        4² * 4² = 4²⁺² = 4⁴ = 4 * 4 * 4 * 4; <br /> <br />
                        A divisão, por sua vez, atua como uma subtração dos expoentes. Ex: <br /> <br />
                        4⁴ &#247; 4² = 4⁴⁻² = 4² = 4 * 4;
                        <br /> <br />
                        
                        Outras duas regras importantes são, ao ter o expoente igual a 0 (x⁰), e ter o expoente negativo (x⁻¹). <br />
                        Sempre que há um expoente 0, o resultado é igual a 1, considerando que: 4¹ &#247; 4¹ = 4 &#247; 4 = 4¹⁻¹ = 1; <br /><br />
                        Já na segunda consideração, quando o expoente é negativo, se trata de inverter o número, no caso, dividir 1 pela base elevado ao expoente. <br />
                        Ex: <br />
                        <br />
                        4⁻² = 1 &#247; 4²;

                        <br /><br />

                        <b>No Jogo:</b> <br /><br />
                        4^2 = 4 * 4 = 16; <br />
                        5^3 = 5 * 5 * 5 = 125; <br />
                        3^3 = 3 * 3 * 3 = 27;

                        <br /> <br />
                        <a rel="noopener noreferrer" target="_blank" href="https://mundoeducacao.uol.com.br/matematica/potenciacao.htm"><li>Potênciação</li></a>
                        </p>
                    </details>

                    <details>
                        <summary>Fatoração</summary>

                        <p>
                        A fatoração é um processo de multiplicação fortemente ligado à análise combinatória, que é uma forma bonita de se falar sobre quantas formas diferentes podemos organizar alguma coisa. <br />
                        A fatoração só pode ser efetuada em números naturais, ou seja, maior ou igual a 0. <br />
                        Uma maneira de se entender o processo, se dá pelo seguinte exemplo: <br />
                        Três amigos, João, Maria e Carol foram em uma sala de cinema, sentando um do lado do outro, de quantas maneiras diferentes eles podem se sentar? <br /> <br />

                        1ª Forma: J, M, C. <br />
                        2ª Forma: J, C, M<br />
                        3ª Forma: M, J, C<br />
                        4ª Forma: M, C, J<br />
                        5ª Forma: C, J, M<br />
                        6ª Forma: C, M, J<br /> <br />

                        O processo de fazer a mão todas as possibilidades é sim válido, mas conforme aumenta a quantidade de elementos a serem ordenados a quantidade de variações também sobe rapidamente, então, podemos utilizar de uma pensamento. Quantas cadeiras estão disponíveis e quantas pessoas ainda estão disponíveis? <br />
                        Enquanto ninguém tiver sentado, há 3 cadeiras e 3 pessoas, qualquer uma pode sentar na primeira cadeira. Já a segunda pessoa só vai ter dois lugares disponíveis, e a última não terá de escolher. Traduzindo em números, podemos representar a partir da quantidade de pessoas a sentarem. 3 * 2 * 1, considerando que sempre que sentar alguém, a quantidade de pessoas diminui. <br /> <br />
                        A fatoração, então, ocorre pela multiplicação descendente de um número, representado pelo símbolo <b>!</b>, por exemplo: <br />
                        3! = 3 * 2 * 1; <br />
                        4! = 4 * 3 * 2 * 1; <br />
                        5! = 5 * 4 * 3 * 2 * 1; <br />
                        <br /> <br />

                        <b>No Jogo:</b> <br /> <br />

                        4! = 4 * 3 * 2 * 1;
                        6! = 6 * 5 * 4 * 3 * 2 * 1;

                        <br /> <br />
                        <a rel="noopener noreferrer" target="_blank" href="https://mundoeducacao.uol.com.br/matematica/fatoracao-de-polinomio.htm"><li>Fatoração</li></a>
                        </p>
                    </details>

                    
                    <a rel="noopener noreferrer" target="_blank" href="https://mundoeducacao.uol.com.br/matematica/calculando-raiz-quadrada-um-numero.htm"><li>Raiz quadrada</li></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://mundoeducacao.uol.com.br/matematica/logaritmos.htm"><li>Logarítmos</li></a>
                </ul>

            </div>
        </div>
    )
}