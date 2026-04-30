// Aguarda o conteúdo da página carregar
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DEFINIÇÃO DAS PERGUNTAS ---
    const questions = [
        {
            question: "Qual foi a principal vantagem das válvulas em relação aos relés mecânicos?",
            options: [
                "Menor custo",
                "Maior velocidade de processamento",
                "Portabilidade"
            ],
            answer: "Maior velocidade de processamento"
        },
        {
            question: "O Atanasoff-Berry Computer (ABC), criado em 1939, foi pioneiro por ser:",
            options: [
                "O primeiro computador digital eletrônico",
                "O primeiro computador comercial",
                "O primeiro computador portátil"
            ],
            answer: "O primeiro computador digital eletrônico"
        },
        {
            question: "O ENIAC, concluído em 1945, ficou conhecido como:",
            options: [
                "O primeiro computador eletrônico de grande escala e de uso geral",
                "O primeiro computador totalmente mecânico",
                "O primeiro computador com transistores"
            ],
            answer: "O primeiro computador eletrônico de grande escala e de uso geral"
        },
        {
            question: "O IBM SSEC (1948) se destacou por:",
            options: [
                "Usar tela de vídeo para entrada de dados",
                "Combinar válvulas eletrônicas e relés em um mesmo sistema",
                "Ser portátil e acessível"
            ],
            answer: "Combinar válvulas eletrônicas e relés em um mesmo sistema"
        },
        {
            question: "O Manchester SSEM (“Baby”) de 1948 foi revolucionário porque:",
            options: [
                "Executava o primeiro programa armazenado na memória",
                "Foi o primeiro computador com mouse",
                "Utilizava transistores pela primeira vez"
            ],
            answer: "Executava o primeiro programa armazenado na memória"
        },
        {
            question: "A linguagem Plankalkül, criada por Konrad Zuse em 1946, foi:",
            options: [
                "A primeira linguagem de máquina usada comercialmente",
                "A primeira linguagem de programação de alto nível (não implementada na época)",
                "A base para a criação do Assembly"
            ],
            answer: "A primeira linguagem de programação de alto nível (não implementada na época)"
        },
        {
            question: "Qual computador de 1949 foi uma evolução do SSEM (“Baby”), tornando-se um dos primeiros de programa armazenado?",
            options: [
                "EDSAC",
                "Manchester Mark I (MADM)",
                "Z3"
            ],
            answer: "Manchester Mark I (MADM)"
        },
        {
            question: "O transistor, inventado em 1947, foi importante porque:",
            options: [
                "Substituiu as válvulas, permitindo a miniaturização dos computadores",
                "Criou a primeira interface gráfica",
                "Foi usado apenas em calculadoras"
            ],
            answer: "Substituiu as válvulas, permitindo a miniaturização dos computadores"
        },
        {
            question: "Claude Shannon, em 1940, é considerado o “pai da teoria da informação” porque:",
            options: [
                "Ligou a álgebra booleana aos circuitos digitais",
                "Criou a linguagem Assembly",
                "Desenvolveu a primeira memória magnética"
            ],
            answer: "Ligou a álgebra booleana aos circuitos digitais"
        },
        {
            question: "A ACM (Association for Computing Machinery), fundada em 1948, é conhecida como:",
            options: [
                "A primeira e maior sociedade científica e educacional de computação do mundo",
                "O grupo responsável pela criação do ENIAC",
                "A primeira empresa de computadores pessoais"
            ],
            answer: "A primeira e maior sociedade científica e educacional de computação do mundo"
        }
    ];

    // --- 2. REFERÊNCIAS AOS ELEMENTOS DO DOM ---
    const questionEl = document.getElementById('question');
    const optionsContainerEl = document.getElementById('options-container');
    const nextBtnEl = document.getElementById('next-btn');
    const resultsContainerEl = document.getElementById('results-container');
    const scoreEl = document.getElementById('score');
    const restartBtnEl = document.getElementById('restart-btn');
    
    // --- 3. VARIÁVEIS DE ESTADO DO QUIZ ---
    let currentQuestionIndex = 0;
    let score = 0;

    // --- 4. FUNÇÕES PRINCIPAIS ---

    /** Inicia ou reinicia o quiz */
    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        resultsContainerEl.classList.add('hidden');
        questionEl.classList.remove('hidden');
        optionsContainerEl.classList.remove('hidden');
        nextBtnEl.classList.add('hidden');
        showQuestion();
    }

    /** Exibe a pergunta atual e suas opções */
    function showQuestion() {
        // Limpa as opções anteriores
        optionsContainerEl.innerHTML = '';
        
        // Pega a pergunta atual
        const currentQuestion = questions[currentQuestionIndex];
        
        // Atualiza o texto da pergunta
        questionEl.textContent = currentQuestion.question;

        // Cria os botões de opção
        currentQuestion.options.forEach(optionText => {
            const button = document.createElement('button');
            button.textContent = optionText;
            
            // Cor personalizada pedida por você (bg-[#282525])
            button.className = "option-btn w-full p-4 bg-[#282525] rounded-lg text-left text-lg hover:bg-gray-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
            
            // Adiciona o evento de clique para selecionar a resposta
            button.addEventListener('click', () => selectAnswer(button, optionText, currentQuestion.answer));
            
            optionsContainerEl.appendChild(button);
        });
    }

    /** Chamada quando o usuário seleciona uma resposta */
    function selectAnswer(selectedButton, selectedOption, correctAnswer) {
        // Desabilita todos os botões de opção
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach(btn => btn.disabled = true);

        // Verifica se a resposta está correta
        if (selectedOption === correctAnswer) {
            score++;
            // Resposta CORRETA (Verde)
            selectedButton.classList.remove('hover:bg-gray-700');
            selectedButton.classList.add('bg-green-500', 'text-white', 'font-bold');
            
            // Animação com GSAP
            gsap.fromTo(selectedButton, { scale: 1 }, { scale: 1.05, yoyo: true, repeat: 1, duration: 0.3, ease: 'power1.inOut' });

        } else {
            // Resposta ERRADA (Vermelho)
            selectedButton.classList.remove('hover:bg-gray-700');
            selectedButton.classList.add('bg-red-500', 'text-white', 'font-bold');
            
            // Animação com GSAP (tremida)
            gsap.fromTo(selectedButton, { x: 0 }, { x: -10, yoyo: true, repeat: 3, duration: 0.1, ease: 'power1.inOut' });

            // Encontra e destaca a resposta correta em verde
            optionButtons.forEach(btn => {
                if (btn.textContent === correctAnswer) {
                    btn.classList.remove('hover:bg-gray-700');
                    btn.classList.add('bg-green-500', 'text-white', 'font-bold');
                }
            });
        }

        // Mostra o botão "Próxima Pergunta" com animação
        nextBtnEl.classList.remove('hidden');
        gsap.fromTo(nextBtnEl, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
    }

    /** Exibe a tela de resultados finais */
    function showResults() {
        // Esconde a pergunta e opções
        questionEl.classList.add('hidden');
        optionsContainerEl.classList.add('hidden');
        nextBtnEl.classList.add('hidden');

        // Mostra o container de resultados
        scoreEl.textContent = `${score}`;
        resultsContainerEl.classList.remove('hidden');
        
        // Animação para os resultados
        gsap.fromTo(resultsContainerEl, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' });
    }

    // --- 5. EVENT LISTENERS ---

    /** Evento para o botão "Próxima Pergunta" */
    nextBtnEl.addEventListener('click', () => {
        currentQuestionIndex++;
        
        // Lógica de finalização (só mostra resultado no final)
        if (currentQuestionIndex < questions.length) {
            // Se ainda houver perguntas, mostra a próxima
            showQuestion();
            // Esconde o botão "Próxima" novamente
            nextBtnEl.classList.add('hidden');
        } else {
            // Se for a última pergunta (index 10), mostra os resultados
            showResults();
        }
    });

    /** Evento para o botão "Reiniciar Quiz" */
    restartBtnEl.addEventListener('click', startQuiz);

    // --- 6. INICIALIZAÇÃO ---
    startQuiz();

});