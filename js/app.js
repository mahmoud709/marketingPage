
let questionNumber = document.getElementById('num1').textContent;
const answers = document.querySelectorAll('.answers button');
let questionTitle = document.querySelector('.questionTitle');
let questions = ['Who founded Google?', 'When was Google founded?', 'Where is Google located?'];
let answerList = [
    {
        ans1: 'Bill Gates',
        ans2: 'Mark Zuckerberg',
        ans3: 'Larry Page'
    },
    {
        ans1: '1998',
        ans2: '2012',
        ans3: '2014'
    },
    {
        ans1: 'USA',
        ans2: 'India',
        ans3: 'Russia'
    },
];
let currentIndex = 0;

function handleAnswers() {
    questionTitle.textContent = questions[currentIndex];
    for (let i = 0; i < answers.length; i++) {
        answers[i].textContent = answerList[currentIndex]['ans' + (i + 1)];
        answers[i].addEventListener('click', () => {
            questionNumber++;
            document.getElementById('num1').textContent = questionNumber;
            currentIndex++;
            if (currentIndex < questions.length) {
                questionTitle.textContent = questions[currentIndex];
                for (let j = 0; j < answers.length; j++) {
                    answers[j].textContent = answerList[currentIndex]['ans' + (j + 1)];
                }
            } else {
                // Handle quiz completion or other actions when all questions are answered
                window.location.href ='/chequePage.html'
                for (let j = 0; j < answers.length; j++) {
                    answers[j].style.display = 'none'; // Hide answer buttons
                }
            }
        });
    }
}

handleAnswers();

const confirmBtn = document.getElementById('confirmBtn');
const overlay = document.getElementById('overlay');
confirmBtn.addEventListener('click', () => {
    document.getElementById('mycard').style.visibility = 'hidden';
    overlay.style.display = 'none'
})
const deviceModel = document.querySelectorAll('.deviceModel');
const browsername = document.getElementById('browsername')
const userAgent = navigator.userAgent;
const browserName = navigator.appCodeName;

browsername.textContent=browserName;
for(let i=0;i<deviceModel.length;i++){
    deviceModel[i].textContent = userAgent.slice(0, 40)
}
// Function to start the countdown timer
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    const display = document.getElementById("timer");
    const duration = 239; // 3 minutes and 59 seconds in seconds
    startTimer(duration, display);
};

function confirmExit(event) {
    event.preventDefault(); // Cancel the event to prevent leaving the page

    // Display a confirmation dialog
    const confirmationMessage = 'Are you sure you want to leave this page?';
    event.returnValue = confirmationMessage; // For older browsers
    return confirmationMessage;
}

// Attach the event handler to the beforeunload event
window.addEventListener('beforeunload', confirmExit);
