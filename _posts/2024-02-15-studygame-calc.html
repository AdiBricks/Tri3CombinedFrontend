
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AP Calculus Study Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        .question, .add-question, .user-questions {
            margin-bottom: 20px;
        }
        .feedback, .add-feedback {
            margin-top: 20px;
        }
    </style>
</head>
<body>

<div id="game">
    <div class="question" id="question"></div>
    <input type="text" id="answer" placeholder="Enter your answer here">
    <button onclick="checkAnswer()">Submit Answer</button>
    <div class="feedback" id="feedback"></div>
</div>

<div class="add-question">
    <h2>Add Your Own Question</h2>
    <input type="text" id="newQuestion" placeholder="Enter new question here">
    <input type="text" id="newAnswer" placeholder="Enter answer here">
    <button onclick="addQuestion()">Add Question</button>
    <div class="add-feedback" id="addFeedback"></div>
</div>

<div class="user-questions">
    <h2>Your Questions</h2>
    <ul id="userQuestionsList"></ul>
</div>

<script>
    let questions = [
        { q: "Evaluate the limit: lim (x→0) (sin(x)/x)", a: "1" },
        // Add more pre-defined questions here
    ];

    let currentQuestion = {};

    function getRandomQuestion() {
        currentQuestion = questions[Math.floor(Math.random() * questions.length)];
        document.getElementById("question").innerText = "Q: " + currentQuestion.q;
        document.getElementById("feedback").innerText = '';
        document.getElementById("answer").value = '';
    }

    function checkAnswer() {
        const userAnswer = document.getElementById("answer").value.trim();
        if(userAnswer.toLowerCase() === currentQuestion.a.toLowerCase()) {
            document.getElementById("feedback").innerText = "Correct!";
        } else {
            document.getElementById("feedback").innerText = "Incorrect, try again!";
        }
        getRandomQuestion(); // Get a new question
    }

    function addQuestion() {
        const newQ = document.getElementById("newQuestion").value.trim();
        const newA = document.getElementById("newAnswer").value.trim();
        if (newQ && newA) {
            questions.push({ q: newQ, a: newA });
            document.getElementById("addFeedback").innerText = "Question added successfully!";
            document.getElementById("newQuestion").value = '';
            document.getElementById("newAnswer").value = '';
            updateUserQuestionsList(newQ, newA);
        } else {
            document.getElementById("addFeedback").innerText = "Please enter both a question and an answer.";
        }
    }

    function updateUserQuestionsList(question, answer) {
        const list = document.getElementById("userQuestionsList");
        const listItem = document.createElement("li");
        listItem.textContent = `Q: ${question} - A: ${answer}`;
        list.appendChild(listItem);
    }

    function checkAnswer() {
        const userAnswer = document.getElementById("answer").value.trim();
        if (userAnswer.toLowerCase() === currentQuestion.a.toLowerCase()) {
            document.getElementById("feedback").innerText = "Correct!";
            setTimeout(getRandomQuestion, 1000); // Wait for 1 second before moving to the next question
        } else {
            document.getElementById("feedback").innerText = "Incorrect, try again!";
        }
}


    window.onload = getRandomQuestion;
</script>
</body>
</html>
