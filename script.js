const questions = [
  {
    question:
      "Qual é o objetivo principal da filtragem antes da amostragem em um sistema PCM?",
    options: [
      "Aumentar o volume do sinal",
      "Remover frequências indesejadas para evitar aliasing",
      "Reduzir o ruído de quantização",
      "Transformar o sinal em binário",
    ],
    answer: 1,
  },
  {
    question:
      "Segundo Nyquist-Shannon, qual deve ser a relação entre fs e a frequência máxima do sinal?",
    options: ["fs = fmax", "fs = fmax/2", "fs ≥ 2·fmax", "fs = 10·fmax"],
    answer: 2,
  },
  {
    question: "O que ocorre durante o processo de quantização?",
    options: [
      "O sinal é filtrado",
      "As amostras são convertidas em níveis discretos",
      "O sinal é capturado de forma contínua",
      "O sinal vira binário sem arredondamento",
    ],
    answer: 1,
  },
  {
    question: "O que é ruído de quantização?",
    options: [
      "Ruído do ambiente",
      "Ruído por excesso de amostras",
      "Erro do arredondamento para níveis discretos",
      "Interferência elétrica",
    ],
    answer: 2,
  },
  {
    question: "A etapa de codificação no PCM é responsável por:",
    options: [
      "Escolher filtros",
      "Converter níveis em código binário",
      "Aumentar amostragem",
      "Remover frequências > 3400Hz",
    ],
    answer: 1,
  },
  {
    question: "O que é a função principal de um transdutor?",
    options: [
      "Amplificar sinais",
      "Transformar um tipo de energia em outro",
      "Aumentar a frequência do som",
      "Reduzir potência sonora",
    ],
    answer: 1,
  },
  {
    question: "A potência do som está diretamente ligada a:",
    options: ["Velocidade", "Frequência", "Amplitude", "Meio de propagação"],
    answer: 2,
  },
  {
    question: "Qual descreve uma vibração simples?",
    options: [
      "Várias frequências",
      "Uma única frequência fundamental",
      "Sempre suave",
      "Mais comum na natureza",
    ],
    answer: 1,
  },
  {
    question: "As vibrações complexas são ‘ricas’ porque:",
    options: [
      "Só têm baixa frequência",
      "Não têm harmônicos",
      "São somas de várias senoidais",
      "Têm amplitude maior",
    ],
    answer: 2,
  },
  {
    question: "Onde encontramos vibrações complexas?",
    options: [
      "Diapasão isolado",
      "Apito de audiometria",
      "Ruídos e instrumentos musicais",
      "Sons eletrônicos apenas",
    ],
    answer: 2,
  },
  {
    question: "A frequência de amostragem (Ws) representa:",
    options: [
      "Harmônicos",
      "Amostras por segundo",
      "Profundidade em bits",
      "Taxa de compressão",
    ],
    answer: 1,
  },
  {
    question: "Qual a taxa Rs da telefonia (8 bits, 8 kHz)?",
    options: ["32 kbps", "64 kbps", "128 kbps", "705,6 kbps"],
    answer: 1,
  },
  {
    question: "Ajustar volume, cortar ou mixar sons ocorre:",
    options: [
      "Domínio da frequência",
      "Domínio do tempo",
      "Apenas em codecs",
      "Somente PCM",
    ],
    answer: 1,
  },
  {
    question: "Exemplo de processamento no domínio da frequência:",
    options: [
      "Copiar áudio",
      "Aumentar volume",
      "FFT para filtragem",
      "Reproduzir WAV",
    ],
    answer: 2,
  },
  {
    question: "Formato não compactado e comum no Windows:",
    options: ["MP3", "WMA", "WAV", "RA/RAM"],
    answer: 2,
  },
];

const selected = questions.sort(() => Math.random() - 0.5).slice(0, 5);

const quizContainer = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submitBtn");
const resultsContainer = document.getElementById("results");

selected.forEach((q, i) => {
  const card = document.createElement("div");
  card.className = "question-card";

  let html = `
    <h3>${i + 1}. ${q.question}</h3>
    <ul class="options">
  `;

  q.options.forEach((opt, index) => {
    html += `
      <li>
        <label>
          <input type="radio" name="q${i}" value="${index}">
          ${opt}
        </label>
      </li>
    `;
  });

  html += "</ul>";
  card.innerHTML = html;
  quizContainer.appendChild(card);
});

document.addEventListener("change", () => {
  const allAnswered = selected.every((_, i) =>
    document.querySelector(`input[name="q${i}"]:checked`)
  );
  submitBtn.disabled = !allAnswered;
});

submitBtn.addEventListener("click", () => {
  resultsContainer.innerHTML = "";

  selected.forEach((q, i) => {
    const userAnswer = parseInt(
      document.querySelector(`input[name="q${i}"]:checked`).value
    );

    const resultDiv = document.createElement("div");
    resultDiv.className =
      "result " + (userAnswer === q.answer ? "correct" : "incorrect");

    resultDiv.innerHTML = `
      <p><strong>${i + 1}. ${q.question}</strong></p>
      <p>Sua resposta: <strong>${q.options[userAnswer]}</strong></p>
      <p>Correta: <strong>${q.options[q.answer]}</strong></p>
    `;

    resultsContainer.appendChild(resultDiv);
  });

  submitBtn.disabled = true;
});
