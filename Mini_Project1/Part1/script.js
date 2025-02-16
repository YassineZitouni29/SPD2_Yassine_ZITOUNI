function display_quiz(data){
    const contain = document.getElementById("quiz_container");
    let current_question = 0;
    let users_answers = [];
    let score = 0;
    function display_question(i){
        const questionn = data[i];
        const added_question = document.createElement("div");
        added_question.classList.add("question");
        const question_text = document.createElement("h2");
        question_text.innerHTML = `${i+1}- ${questionn.question}`;
        added_question.appendChild(question_text);
        const timer = document.createElement("div");
        timer.innerText = "Time: 30s";
        timer.classList.add("timer");
        added_question.appendChild(timer);
        let possible_answers = [];
        questionn.incorrect_answers.forEach(item=>
            possible_answers.push(item)
        );
        possible_answers.push(questionn.correct_answer);
        possible_answers.sort(()=>Math.random()-0.5);
        possible_answers.forEach(item=>{
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question-${i}`;
            input.value = item;
            label.appendChild(input);
            const temp = document.createElement("div");
            temp.innerHTML=item;
            label.appendChild(temp);
            added_question.appendChild(label);
            added_question.appendChild(document.createElement("br"));
        })
        contain.appendChild(added_question);
        const next = document.createElement("button");
        next.classList.add("next");
        next.innerHTML = "Next ^^";
        next.addEventListener("click", nextQuestion);
        added_question.appendChild(next);
        let timeLeft = 30;
        const timerInterval = setInterval(() => {
            timeLeft--;
            timer.innerHTML = `Time: ${timeLeft}`;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                nextQuestion();
            }
        }, 1000);
        function nextQuestion() {
            clearInterval(timerInterval); 
            const radioButtons = document.querySelectorAll(`input[name="question-${i}"]`);
            radioButtons.forEach(button => button.disabled = true);
            const selectedAnswer = document.querySelector(`input[name="question-${i}"]:checked`);
            if (selectedAnswer) {
                users_answers[i] = selectedAnswer.value;
                if (selectedAnswer.value === questionn.correct_answer) {
                    score++;
                }
            }
            next.disabled = true;
            next.style.backgroundColor = "#ccc";
            current_question++;
            if (current_question < data.length) {
                display_question(current_question);
            } else {
                showScore();
            }
        }
        added_question.scrollIntoView({ behavior: 'smooth' });
    }
    function showScore() {
        const result = document.getElementById("result");
        result.scrollIntoView({ behavior: 'smooth' });
        result.innerHTML = `<h2>Your Score: ${score} / ${data.length}</h2>`;
    }
    display_question(current_question);
}
data = [
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Science: Mathematics",
      "question": "How many sides does a heptagon have?",
      "correct_answer": "7",
      "incorrect_answers": [
        "8",
        "6",
        "5"
      ]
    },
    {
      "type": "boolean",
      "difficulty": "easy",
      "category": "Science: Mathematics",
      "question": "The &#039;Squaring the Circle&#039; problem is solvable.",
      "correct_answer": "False",
      "incorrect_answers": [
        "True"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Science: Mathematics",
      "question": "In Roman Numerals, what does XL equate to?",
      "correct_answer": "40",
      "incorrect_answers": [
        "60",
        "15",
        "90"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Science: Mathematics",
      "question": "The metric prefix &quot;atto-&quot; makes a measurement how much smaller than the base unit?",
      "correct_answer": "One Quintillionth",
      "incorrect_answers": [
        "One Billionth",
        "One Quadrillionth",
        "One Septillionth"
      ]
    },
    {
      "type": "boolean",
      "difficulty": "easy",
      "category": "Science: Mathematics",
      "question": "An equilateral triangle always has every angle measuring 60&deg;.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },
    {
      "type": "boolean",
      "difficulty": "easy",
      "category": "Science: Mathematics",
      "question": "An isosceles triangle has two sides of equal length as opposed to three.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Science: Mathematics",
      "question": "What is the symbol for Displacement?",
      "correct_answer": "&Delta;r",
      "incorrect_answers": [
        "dr",
        "Dp",
        "r"
      ]
    },
    {
      "type": "boolean",
      "difficulty": "easy",
      "category": "Science: Mathematics",
      "question": "A scalene triangle has two sides of equal length.",
      "correct_answer": "False",
      "incorrect_answers": [
        "True"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Science: Mathematics",
      "question": "What is the correct order of operations for solving equations?",
      "correct_answer": "Parentheses, Exponents, Multiplication, Division, Addition, Subtraction",
      "incorrect_answers": [
        "Addition, Multiplication, Division, Subtraction, Addition, Parentheses",
        "Parentheses, Exponents, Addition, Substraction, Multiplication, Division",
        "The order in which the operations are written."
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Science: Mathematics",
      "question": "How many sides does a trapezium have?",
      "correct_answer": "4",
      "incorrect_answers": [
        "3",
        "5",
        "6"
      ]
    }];
display_quiz(data);