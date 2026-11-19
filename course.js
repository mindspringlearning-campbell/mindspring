
const psychologyChapters=[{"title": "Introduction to Psychology", "summary": "Meaning, nature, goals, scope and importance of psychology."}, {"title": "History and Origins of Psychology", "summary": "From philosophical roots to the emergence of experimental psychology."}, {"title": "Psychology as a Science", "summary": "Evidence, hypotheses, research design, measurement and scientific reasoning."}, {"title": "Schools of Psychological Thought", "summary": "Structuralism, functionalism, behaviourism, Gestalt, psychoanalysis and modern perspectives."}, {"title": "Major Psychologists and Their Contributions", "summary": "Influential psychologists and the development of psychological ideas."}, {"title": "Branches of Psychology", "summary": "Educational, developmental, social, cognitive, biological, clinical and other branches."}, {"title": "The Human Brain and Nervous System", "summary": "Neurons, brain structures, nervous-system functions and behaviour."}, {"title": "Sensation and Perception", "summary": "How sensory information is detected, organised and interpreted."}, {"title": "Learning and Memory", "summary": "Conditioning, observational learning, memory systems and forgetting."}, {"title": "Intelligence and Thinking", "summary": "Reasoning, problem-solving, intelligence theories and their limitations."}, {"title": "Emotions and Motivation", "summary": "Emotional processes, motivation theories and human goals."}, {"title": "Personality and Individual Differences", "summary": "Personality theories, traits, assessment and individual variation."}, {"title": "Human Behaviour", "summary": "Biological, psychological and social influences on behaviour."}, {"title": "Psychological Research Methods", "summary": "Experiments, surveys, observation, case studies, ethics and data interpretation."}, {"title": "Modern Psychology", "summary": "Neuroscience, cultural psychology, technology, open science and future directions."}];
const chapterOne={
 beginner:{heading:"The meaning and foundations of psychology",sections:[
 ["What is psychology?","Psychology is the scientific study of the mind and behaviour. It investigates how people and other animals think, feel, learn, remember, make decisions and act. Psychologists use systematic observation and evidence rather than relying only on guesses or personal opinions."],
 ["The mind and behaviour","The mind refers to mental processes such as thinking, remembering, imagining, reasoning, feeling and deciding. Behaviour refers to observable actions such as speaking, laughing, crying, studying, walking and interacting. Mental processes are not directly visible, so psychologists investigate them through carefully designed methods."],
 ["A student example","Imagine a student preparing for an examination. The student uses memory to recall notes, thinking to solve questions, emotion when feeling nervous, motivation to continue studying and observable behaviour when reading or writing. Psychology can investigate these connected processes."],
 ["Why study psychology?","Psychology helps us understand why people behave differently, how children learn language, how memory works, how emotions influence decisions, how personality develops and how surroundings affect behaviour. It can improve teaching, communication, relationships and self-understanding."],
 ["Applications","Educational psychologists study learning and teaching. Developmental psychologists examine change across life. Social psychologists investigate how people influence one another. Health and clinical psychologists study well-being and psychological difficulties."]
 ],key:"Psychology is not simply the study of mental illness. It covers ordinary human experience as well as psychological difficulties."},
 intermediate:{heading:"The nature, goals and scope of psychology",sections:[
 ["Characteristics of psychology","Psychology is empirical: claims should be supported by observations or data. It studies behaviour and mental processes, recognises individual differences and uses multiple methods. Explanations often consider several interacting causes."],
 ["The biopsychosocial approach","Biological influences include genes, brain activity, hormones and health. Psychological influences include thoughts, emotions, memories, beliefs and learning. Social influences include family, peers, culture, education and economic circumstances. These dimensions interact. Classroom participation, for example, may be affected by confidence, health, prior experiences and classroom climate."],
 ["The four major goals","Description identifies what is happening. Explanation asks why it happens. Prediction estimates when or under what conditions it may happen again. Influence or modification applies knowledge to support change. Ethical practice respects autonomy, dignity and safety."],
 ["Scope and branches","Branches include cognitive, biological, developmental, social, educational, personality, health, clinical, forensic and industrial-organisational psychology. They differ in their questions and settings but share an interest in evidence about behaviour and mental processes."],
 ["Importance and misconceptions","Psychological knowledge can help educators adapt instruction, families communicate and organisations design supportive workplaces. Psychologists do not read minds; personality labels do not define a whole person; and psychology is not merely common sense."]
 ],key:"Use the biopsychosocial approach to avoid reducing complex behaviour to only biology, thoughts or society."},
 advanced:{heading:"Psychology as a scientific and interdisciplinary discipline",sections:[
 ["Academic definition","Psychology is a scientific discipline that systematically investigates behaviour and mental processes in humans and other animals. Researchers infer many mental processes from converging behavioural, physiological and self-report evidence."],
 ["Historical foundations","Psychological questions have philosophical roots, but experimental psychology became institutionally established in the nineteenth century. Wilhelm Wundt established a laboratory for experimental psychology in Leipzig in 1879, a landmark in the discipline's history. William James helped develop functionalism. Sigmund Freud developed psychoanalysis, whose influence is substantial although many specific claims remain contested. Ivan Pavlov's work informed classical conditioning; B. F. Skinner advanced experimental analysis of operant behaviour."],
 ["Major perspectives","Biological approaches examine neural, genetic and physiological processes. Behavioural approaches study learning and environmental contingencies. Cognitive approaches investigate attention, memory, language and reasoning. Psychodynamic approaches emphasise unconscious processes and early experience. Humanistic approaches focus on meaning, agency and growth. Evolutionary and sociocultural approaches examine adaptation and cultural context."],
 ["Research process","A typical process identifies a problem, reviews literature, formulates a question or hypothesis, selects a design, defines variables, collects and analyses data, draws appropriately limited conclusions and communicates findings for scrutiny and possible replication."],
 ["Ethics and contemporary psychology","Research should obtain informed consent where applicable, minimise harm, protect privacy, allow voluntary withdrawal and report findings honestly. Contemporary topics include neuroscience, genetics, digital behaviour, artificial intelligence, cross-cultural research and open science."],
 ["Critical evaluation","Correlation does not establish causation. A result from one sample or culture cannot automatically be generalised to everyone. Statistical significance is not the same as practical importance. Responsible reasoning distinguishes evidence, interpretation, uncertainty and speculation."]
 ],key:"A strong psychological explanation is evidence-based, ethical, culturally aware and cautious about causation and generalisation."}
};
const chapterTwo = {
  title: "History and Origins of Psychology",

  beginner: {
    heading: "The Philosophical Foundations of Psychology",
    sections: [
      ["1. Introduction to the History of Psychology",
       "Psychology developed over many centuries as human beings tried to understand the mind, emotions and behaviour. Its history shows how philosophical questions gradually developed into scientific investigations."],

      ["2. Ancient Greek Contributions",
       "Socrates encouraged questioning and self-examination. Plato explored the relationship between the mind, knowledge and the body. Aristotle investigated memory, learning, perception and human behaviour. Their ideas helped establish important questions in psychological thought."],

      ["3. Psychology Becomes a Science",
       "Wilhelm Wundt established an experimental psychology laboratory in Leipzig, Germany, in 1879. This is widely recognised as a major milestone in the establishment of psychology as an independent scientific discipline. Wundt investigated conscious experience through controlled experimentation."],

      ["4. Why History Matters",
       "Studying psychology's history helps us understand the development of theories, appreciate influential thinkers, recognise limitations in earlier approaches and understand how modern psychology emerged."]
    ],
    key: "Psychology developed from philosophical investigations into a scientific discipline through systematic research and experimentation."
  },

  intermediate: {
    heading: "The Major Schools of Psychological Thought",
    sections: [
      ["1. Structuralism",
       "Structuralism, associated with Edward Titchener and influenced by Wilhelm Wundt, attempted to identify the basic elements of conscious experience. Introspection was an important method. Its limitation was that personal reports were difficult to verify objectively."],

      ["2. Functionalism",
       "William James was a major figure in functionalism. This approach examined how mental processes and behaviour help individuals adapt to their environments. It influenced applied psychology and educational research."],

      ["3. Psychoanalysis",
       "Sigmund Freud developed psychoanalysis, emphasising unconscious processes, childhood experiences and internal conflicts. His ideas influenced clinical psychology, although several of his explanations remain controversial."],

      ["4. Behaviourism",
       "John B. Watson and B. F. Skinner were influential behaviourists. They emphasised observable behaviour and how learning, environmental conditions and reinforcement influence actions."],

      ["5. Gestalt Psychology",
       "Gestalt psychologists, including Max Wertheimer, argued that people perceive organised wholes rather than merely separate sensory elements. This approach contributed to the understanding of perception and problem-solving."],

      ["6. Humanistic Psychology",
       "Abraham Maslow and Carl Rogers were influential humanistic psychologists. They emphasised personal growth, free will, human potential and self-actualisation."],

      ["7. Cognitive Psychology",
       "Cognitive psychology investigates attention, memory, language, reasoning and problem-solving. It restored the scientific study of internal mental processes to a central position in psychology."]
    ],
    key: "Different schools of psychology explain behaviour from different perspectives. Modern psychology draws on several of these approaches."
  },

  advanced: {
    heading: "Critical Evaluation and Modern Developments",
    sections: [
      ["1. Evolution of Psychological Thought",
       "Psychology has developed through different historical approaches. Each school contributed useful explanations, but no single school provides a complete account of human behaviour."],

      ["2. Strengths and Limitations",
       "Structuralism encouraged systematic investigation but relied heavily on subjective introspection. Behaviourism strengthened experimental research but often gave limited attention to internal mental processes. Psychoanalysis highlighted unconscious influences, although some claims are difficult to test. Humanistic psychology emphasised personal growth but some concepts are challenging to measure objectively."],

      ["3. Modern Psychological Perspectives",
       "Contemporary psychology integrates biological, cognitive, behavioural, developmental, social and cultural perspectives. Neuroscience, genetics, technology and cross-cultural research continue to expand psychological knowledge."],

      ["4. Culture and Ethics",
       "Psychological theories should be evaluated in their cultural and historical contexts. Modern psychological research emphasises informed consent, confidentiality, voluntary participation, protection from harm and respect for human dignity."],

      ["5. Critical Thinking",
       "Historical theories should be evaluated using evidence. Researchers must distinguish correlation from causation, consider limitations in samples and methods, and avoid generalising findings beyond what the evidence supports."]
    ],
    key: "Understanding psychology's history requires critical evaluation, cultural awareness and recognition that scientific knowledge continues to develop."
  },

  reflection: [
    "Why is Wilhelm Wundt important in the history of psychology?",
    "Explain how Socrates, Plato and Aristotle contributed to psychological thought.",
    "Differentiate between structuralism and functionalism.",
    "Compare psychoanalysis and behaviourism.",
    "Which historical school of psychology do you consider most influential today? Explain your answer."
  ],

  quiz: [
    {
      question: "Who established the experimental psychology laboratory in Leipzig in 1879?",
      options: ["Sigmund Freud", "Wilhelm Wundt", "William James", "John Watson"],
      answer: 1
    },
    {
      question: "Which philosopher encouraged self-examination and questioning?",
      options: ["Socrates", "Aristotle", "Plato", "Skinner"],
      answer: 0
    },
    {
      question: "Who is strongly associated with functionalism?",
      options: ["Edward Titchener", "William James", "Sigmund Freud", "John Watson"],
      answer: 1
    },
    {
      question: "Which school focused mainly on observable behaviour?",
      options: ["Humanistic psychology", "Psychoanalysis", "Behaviourism", "Structuralism"],
      answer: 2
    },
    {
      question: "Which approach emphasises personal growth and human potential?",
      options: ["Gestalt", "Humanistic psychology", "Structuralism", "Behaviourism"],
      answer: 1
    }
  ],

  furtherReading: [
    "Goodwin, C. J. (2015). A History of Modern Psychology.",
    "Hergenhahn, B. R., & Henley, T. (2014). An Introduction to the History of Psychology.",
    "Schultz, D. P., & Schultz, S. E. (2016). A History of Modern Psychology."
  ]
};

const chapterList=document.getElementById("chapterList"),chapterPreview=document.getElementById("chapterPreview");
let selectedChapter=0,selectedLevel="beginner";
function renderChapterList(){chapterList.innerHTML=psychologyChapters.map((c,i)=>`<button class="chapter-button ${i===selectedChapter?"active":""}" data-chapter="${i}"><span class="chapter-number">${String(i+1).padStart(2,"0")}</span><span><strong>${c.title}</strong><small>${i===0?"Full notes available":"Course outline"}</small></span></button>`).join("");}
function renderChapterPreview(){const c=psychologyChapters[selectedChapter];chapterPreview.innerHTML=`<span class="course-kicker">CHAPTER ${String(selectedChapter+1).padStart(2,"0")}</span><h3>${c.title}</h3><p>${c.summary}</p>${selectedChapter===0?'<p class="muted">Three learning levels, examples, reflection, quiz and references.</p>':'<div class="learning-callout"><strong>Course outline</strong><p>Full three-level notes, examples, quiz and references will be developed for this chapter.</p></div>'}<button class="button button-dark" id="startChapterBtn">${selectedChapter===0?"Start chapter":"View chapter outline"} ↗</button>`;document.getElementById("startChapterBtn").addEventListener("click",()=>openCourseChapter(selectedChapter));}
function 
function openCourseChapter(i) {
  selectedChapter = i;
  const dialog = document.getElementById("lessonDialog");
  const target = document.getElementById("dialogContent");
  const c = psychologyChapters[i];

  if (i === 0) {
    renderChapterContent();
  } else if (i === 1) {
    renderChapterTwoContent();
  } else {
    target.innerHTML = `
      <span class="dialog-category">
        COURSE 01 · CHAPTER ${String(i + 1).padStart(2, "0")}
      </span>
      <h2 class="dialog-title">${c.title}</h2>
      <div class="dialog-content">
        <p>${c.summary}</p>
        <div class="learning-callout">
          <strong>Planned learning levels</strong>
          <p>Beginner: definitions and examples.
          Intermediate: theories and applications.
          Advanced: academic discussion and critical evaluation.</p>
        </div>
        <p>This chapter is mapped in the course curriculum and will be developed in sequence.</p>
      </div>`;
  }

  if (dialog.showModal) dialog.showModal();
}
(i){selectedChapter=i;const dialog=document.getElementById("lessonDialog"),target=document.getElementById("dialogContent"),c=psychologyChapters[i];if(i!==0){target.innerHTML=`<span class="dialog-category">COURSE 01 · CHAPTER ${String(i+1).padStart(2,"0")}</span><h2 class="dialog-title">${c.title}</h2><div class="dialog-content"><p>${c.summary}</p><div class="learning-callout"><strong>Planned learning levels</strong><p>Beginner: definitions and examples. Intermediate: theories and applications. Advanced: academic discussion and critical evaluation.</p></div><p>This chapter is mapped in the course curriculum and will be developed in sequence.</p></div>`;}else renderChapterContent();if(dialog.showModal)dialog.showModal();}

function renderChapterTwoContent() {
  const target = document.getElementById("dialogContent");
  const l = chapterTwo[selectedLevel];
  const label = selectedLevel[0].toUpperCase() + selectedLevel.slice(1);

  const sections = l.sections.map((s, i) =>
    `<h3>${s[0]}</h3><p>${s[1]}</p>`
  ).join("");

  const reflections = chapterTwo.reflection.map((r, i) =>
    `<li>${r}</li>`
  ).join("");

  const questions = chapterTwo.quiz.map((q, i) => `
    <div class="quiz-question">
      <strong>${i + 1}. ${q.question}</strong>
      ${q.options.map((option, j) => `
        <label>
          <input type="radio" name="chapterTwoQ${i}" value="${j}">
          ${option}
        </label>
      `).join("")}
    </div>
  `).join("");

  const reading = chapterTwo.furtherReading.map(r =>
    `<li>${r}</li>`
  ).join("");

  target.innerHTML = `
    <span class="dialog-category">
      INTRODUCTION TO PSYCHOLOGY · CHAPTER 02
    </span>

    <h2 class="dialog-title">${chapterTwo.title}</h2>
    <p class="dialog-meta">${label} level · 20–25 minutes</p>

    <div class="level-tabs">
      <button class="level-tab ${selectedLevel === "beginner" ? "active" : ""}" data-level="beginner">Beginner</button>
      <button class="level-tab ${selectedLevel === "intermediate" ? "active" : ""}" data-level="intermediate">Intermediate</button>
      <button class="level-tab ${selectedLevel === "advanced" ? "active" : ""}" data-level="advanced">Advanced</button>
    </div>

    <div class="chapter-body">
      <h3>${l.heading}</h3>

      <p><strong>Learning objectives:</strong>
      Understand the origins of psychology, explain its historical schools,
      evaluate their contributions and recognise modern developments.</p>

      ${sections}

      <div class="learning-callout">
        <strong>Key point</strong>
        <p>${l.key}</p>
      </div>

      <h3>Reflection activities</h3>
      <ol>${reflections}</ol>

      <div class="chapter-quiz">
        <h3>Knowledge check</h3>
        ${questions}
        <button class="button button-dark" id="checkChapterTwoQuiz">
          Check answers
        </button>
        <p class="quiz-feedback" id="chapterTwoFeedback" aria-live="polite"></p>
      </div>

      <h3>Further reading</h3>
      <ul>${reading}</ul>
    </div>
  `;

  target.querySelectorAll("[data-level]").forEach(button => {
    button.addEventListener("click", () => {
      selectedLevel = button.dataset.level;
      renderChapterTwoContent();
    });
  });

  document.getElementById("checkChapterTwoQuiz").addEventListener("click", () => {
    let score = 0;
    let answered = 0;

    chapterTwo.quiz.forEach((q, i) => {
      const selected = target.querySelector(
        `input[name="chapterTwoQ${i}"]:checked`
      );

      if (selected) {
        answered++;
        if (Number(selected.value) === q.answer) score++;
      }
    });

    const feedback = document.getElementById("chapterTwoFeedback");

    if (answered < chapterTwo.quiz.length) {
      feedback.textContent = `You answered ${answered} of ${chapterTwo.quiz.length}. Please answer all questions.`;
    } else {
      feedback.textContent =
        `Your score is ${score}/${chapterTwo.quiz.length}. ` +
        (score === chapterTwo.quiz.length
          ? "Excellent work!"
          : "Review the lessons and try again.");
    }
  });
}
function renderChapterContent(){const target=document.getElementById("dialogContent"),l=chapterOne[selectedLevel],label=selectedLevel[0].toUpperCase()+selectedLevel.slice(1),sections=l.sections.map((s,i)=>`<h3>${i+1}. ${s[0]}</h3><p>${s[1]}</p>`).join("");target.innerHTML=`<span class="dialog-category">INTRODUCTION TO PSYCHOLOGY · CHAPTER 01</span><h2 class="dialog-title">Introduction to Psychology</h2><p class="dialog-meta">${label} level · 15–20 minutes</p><div class="level-tabs"><button class="level-tab ${selectedLevel==="beginner"?"active":""}" data-level="beginner">Beginner</button><button class="level-tab ${selectedLevel==="intermediate"?"active":""}" data-level="intermediate">Intermediate</button><button class="level-tab ${selectedLevel==="advanced"?"active":""}" data-level="advanced">Advanced</button></div><div class="chapter-body"><h3>${l.heading}</h3><p><strong>Learning objectives:</strong> Define psychology, explain key concepts and connect psychological knowledge to real situations.</p>${sections}<div class="learning-callout"><strong>Key point</strong><p>${l.key}</p></div><h3>Chapter summary</h3><p>Psychology uses systematic evidence to study behaviour and mental processes. Its goals include describing, explaining, predicting and ethically influencing behaviour. Its applications extend to education, relationships, health, workplaces and society.</p><h3>Reflection activity</h3><p>A learner performs well in written examinations but becomes nervous when speaking in front of classmates. Identify possible biological, psychological and social influences. What could a supportive teacher do?</p><div class="chapter-quiz"><h3>Knowledge check</h3><div class="quiz-question"><strong>1. Which statement best defines psychology?</strong><label><input type="radio" name="q1" value="a"> Study of dreams only</label><label><input type="radio" name="q1" value="b"> Scientific study of mind and behaviour</label><label><input type="radio" name="q1" value="c"> Study of mental illness only</label></div><div class="quiz-question"><strong>2. Which is NOT one of psychology's four goals?</strong><label><input type="radio" name="q2" value="a"> Description</label><label><input type="radio" name="q2" value="b"> Prediction</label><label><input type="radio" name="q2" value="c"> Punishment</label></div><div class="quiz-question"><strong>3. Wundt's landmark psychology laboratory was established in 1879 in:</strong><label><input type="radio" name="q3" value="a"> Leipzig</label><label><input type="radio" name="q3" value="b"> London</label><label><input type="radio" name="q3" value="c"> Nairobi</label></div><button class="button button-dark" id="checkChapterQuiz">Check answers</button><p class="quiz-feedback" id="quizFeedback" aria-live="polite"></p></div><h3>Further reading</h3><ul><li>OpenStax (2020), <em>Psychology 2e</em>: <a href="https://openstax.org/details/books/psychology-2e" target="_blank" rel="noopener">free textbook</a>.</li><li>American Psychological Association: <a href="https://dictionary.apa.org/" target="_blank" rel="noopener">APA Dictionary of Psychology</a>.</li><li>Hergenhahn & Henley, <em>An Introduction to the History of Psychology</em>.</li></ul><p class="source-note">Educational material only; not a diagnostic tool or substitute for professional advice.</p></div>`;target.querySelectorAll("[data-level]").forEach(b=>b.addEventListener("click",()=>{selectedLevel=b.dataset.level;renderChapterContent();}));document.getElementById("checkChapterQuiz").addEventListener("click",()=>{const a={q1:"b",q2:"c",q3:"a"};let score=0,n=0;Object.entries(a).forEach(([q,v])=>{const x=target.querySelector(`input[name="${q}"]:checked`);if(x){n++;if(x.value===v)score++;}});document.getElementById("quizFeedback").textContent=n<3?`Answered ${n} of 3. Complete all questions to see your score.`:`You scored ${score}/3. ${score===3?"Excellent work!":"Review the notes and try again."}`;});}
chapterList.addEventListener("click",e=>{const b=e.target.closest("[data-chapter]");if(!b)return;selectedChapter=Number(b.dataset.chapter);renderChapterList();renderChapterPreview();});
renderChapterList();renderChapterPreview();
