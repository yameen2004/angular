var app = angular.module('quizApp', []);

app.controller('QuizController', function ($scope, $timeout) {
    $scope.score = 0;
    $scope.isDisabled = false;
    $scope.showAnswers = false;
    $scope.wrongAnswers = [];
    $scope.result = document.getElementById('result');
    $scope.questions = [
        {
            id: 0,
            question: ' Q1) What does the JSON.stringify() method in JavaScript do?',
            options: ['Parses a JSON string and returns an object', 'Converts a JavaScript object to a JSON string', 'Parses a JSON object and returns a string', 'Converts a JSON string to a JavaScript object'],
            correctAnswer: ['Converts a JavaScript object to a JSON string'],
            selected: []
        },
        {
            id: 1,
            question: ' Q2) What is the purpose of the addEventListener method in JavaScript?',
            options: ['To remove an event listener from an element', 'To add a new element to the DOM', 'To bind an event handler to an element', 'To declare a new event type'],
            correctAnswer: ['To bind an event handler to an element'],
            selected: []
        },
        {
            id: 2,
            question: ' Q3) What does the querySelectorAll method in JavaScript return?',
            options: ['A single element that matches the specified CSS selector', 'All elements that match the specified CSS selector', 'All child elements of a specified parent element', 'An array of elements sorted alphabetically by tag name'],
            correctAnswer: ['All elements that match the specified CSS selector'],
            selected: []
        },
        {
            id: 3,
            question: ' Q4) Which built-in method in JavaScript is used to sort the elements of an array?',
            options: ['sort()', 'order()', 'arrange()', 'sortArray()'],
            correctAnswer: ['sort()'],
            selected: []
        },
        {
            id: 4,
            question: ' Q5) Which of the following methods can be used to add new elements to an array in JavaScript?',
            options: ['push()', 'pop()', 'shift()', 'unshift()'],
            correctAnswer: ['push()', 'unshift()'],
            selected: [],
            multiple: true
        },
        {
            id: 5,
            question: ' Q6) Which of the following are JavaScript data types?',
            options: ['Number', 'String', 'Boolean', 'Character'],
            correctAnswer: ['Number', 'String', 'Boolean'],
            selected: [],
            multiple: true
        },
        {
            id: 6,
            question: ' Q7) Which keyword is used to declare a variable in JavaScript?',
            options: ['var', 'let', 'const', 'int'],
            correctAnswer: ['let'],
            selected: []
        }
    ];

    $timeout(function () {
        $scope.isDisabled = true;
    }, 1500000);

    $scope.selectOption = function (option, id, multiple) {
        const selectedQuestion = $scope.questions.find(q => q.id === id);
        if (multiple) {
            if (selectedQuestion.selected.includes(option)) {
                const index = selectedQuestion.selected.indexOf(option);
                selectedQuestion.selected.splice(index, 1);
            } else {
                selectedQuestion.selected.push(option);
            }
        } else {
            selectedQuestion.selected = [option];
        }
    };

    $scope.showResult = function () {
        $scope.score = 0;
        $scope.wrongAnswers = [];
        $scope.questions.forEach(question => {
            if (question.multiple) {
                if (question.selected.sort().toString() === question.correctAnswer.sort().toString()) {
                    $scope.score += 14.28;
                } else {
                    $scope.wrongAnswers.push(question.id);
                }
            } else {
                if (question.selected[0] === question.correctAnswer[0]) {
                    $scope.score += 14.28;
                } else {
                    $scope.wrongAnswers.push(question.id);
                }
            }
        });

        $scope.showAnswers = true;

        if ($scope.score > 40) {
            $scope.result.innerHTML = `
                <div class="alert alert-success" role="alert">
                    <strong>Congratulations ! Your score is: ${Math.round($scope.score)}</strong>
                </div>
            `;
        } else {
            $scope.result.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <strong>Oops ! Your score is: ${Math.round($scope.score)}</strong>
                </div>
            `;
        }
    };
});