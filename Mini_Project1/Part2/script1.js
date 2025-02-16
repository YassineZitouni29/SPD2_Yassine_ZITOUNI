document.addEventListener("DOMContentLoaded", function(){
    const categoryy = document.getElementById("category");
    fetch("https://opentdb.com/api_category.php")
    .then(response=>response.json())
    .then(data=>{
        data.trivia_categories.forEach(category=>{
            const to_add = document.createElement("option");
            to_add.textContent = category.name;
            to_add.value = category.id;
            categoryy.appendChild(to_add);
    });
    })
    .catch(error, alert(`Error: ${error} `));
});
document.getElementById("customize_form").addEventListener("submit",function(event){
    event.preventDefault();
    const num_questions = document.getElementById("num_questions").value;
    const category = document.getElementById("category").value;
    const difficulty = document.getElementById("difficulty").value;
    const type = document.getElementById("type").value;
    console.log(num_questions);
    let urll = `https://opentdb.com/api.php?amount=${num_questions}`;
    if (category) urll+= `&category=${category}`;
    if (difficulty) urll+=`&difficulty=${difficulty}`;
    if (type) urll+=`&type=${type}`;
    fetch(urll)
    .then(response=>response.json())
    .then(data=>{
        if (data.results.length!==0) {
            document.getElementById("Customize").style.display = "none";
            display_quiz(data.results);
        }
        else {
            alert(`No data for the categories you chose, please choose other ones`);
        }
    })
    .catch(error => alert(`Error: ${error}`));
});
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