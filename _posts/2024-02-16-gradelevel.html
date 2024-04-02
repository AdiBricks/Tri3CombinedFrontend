<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .quiz-container {
            width: 90%;
            max-width: 600px;
            margin: auto;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .question {
            margin-bottom: 20px;
        }
        .question p {
            margin: 0;
            font-weight: bold;
        }
        button {
            cursor: pointer;
            background-color: #007BFF;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
        }
        button:hover {
            background-color: #0056B3;
        }
    </style>
</head>
<body>
   <div class="quiz-container">
    <h2>Quiz</h2>
    <form id="quizForm">
        <div class="question">
            <p>Question 1: What is 2 + 2?</p>
            <input type="text" name="question1" required>
        </div>
        <div class="question">
            <p>Question 2: What is the capital of France?</p>
            <input type="text" name="question2" required>
        </div>
        <div class="question">
            <p>Question 3: What is the derivative of x^2?</p>
            <input type="text" name="question3" required>
        </div>
        <div class="question">
            <p>Question 4: Who wrote 'To Kill a Mockingbird'?</p>
            <input type="text" name="question4" required>
        </div>
        <div class="question">
            <p>Question 5: What is the chemical symbol for gold?</p>
            <input type="text" name="question5" required>
        </div>
        <button type="submit">Submit</button>
    </form>
</div>
<script>
        document.getElementById('quizForm').addEventListener('submit', function(e) {
            e.preventDefault();

            // Define correct answers
            const correctAnswers = {
                question1: '4',
                question2: 'Paris',
                // Add more correct answers here
            };

            // Collect form data
            const formData = new FormData(e.target);
            let score = 0;
            const quizResults = {};
            for (const [key, value] of formData.entries()) {
                quizResults[key] = value;
                if (value.trim().toLowerCase() === correctAnswers[key].toLowerCase()) {
                    score++;
                }
            }

            // Determine the grade level based on score
            const totalQuestions = Object.keys(correctAnswers).length;
            const scorePercentage = (score / totalQuestions) * 100;
            let gradeLevel;
            if (scorePercentage >= 80) {
                gradeLevel = "High School";
            } else if (scorePercentage >= 50) {
                gradeLevel = "Middle School";
            } else {
                gradeLevel = "Elementary";
            }

            // Display grade level to the user
            alert(`Based on your quiz results, you are in: ${gradeLevel}`);

            // Example of sending quizResults to the backend (adjust as necessary for your backend)
                const token = localStorage.getItem('authToken'); // Make sure the key matches how you've stored it

            const url = 'http://127.0.0.1:8086/api/users/diet'; // Update this URL to your actual endpoint
            
            const body = {
            quizResults: quizResults
        };
            
            
         // Change options according to Authentication requirements
        const authOptions = {
            mode: 'cors', // no-cors, *cors, same-origin
            credentials: 'include', // include, same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT', // Override the method property
            cache: 'no-cache', // Set the cache property
            body: JSON.stringify(body)
        };
  
        // Fetch JWT
        fetch(url, authOptions)
        .then(response => {
            // handle error response from Web API
            if (!response.ok) {
                const errorMsg = 'Error: ' + response.status;
                console.log(errorMsg);
                return;
            }
            // Success!!!
            // Redirect to the database page
        })
        // catch fetch errors (ie ACCESS to server blocked)
        .catch(err => {
            console.error(err);
        });
   })
            
 </script>
</body>
</html>