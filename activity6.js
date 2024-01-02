let userName = prompt("Welcome! Please Enter Your Name","Dela Cruz, Juan A.");
var score = 0;

const quiz = [
    {
        question: "",
        answer: ""
    },
    {
        question: "",
        answer: ""
    },
    {
        question: "",
        answer: ""
    },
    {
        question: "",
        answer: ""
    },
    {
        question: "",
        answer: ""
    },
]

for (let i=0;i<5;i++){
    let userAnswer=prompt(quiz[i].question);
    if (userAnswer.toUpperCase()==quiz[i].answer){
        alert("Correct!");
        score++;
    } else {
        alert("Wrong, try harder!");
    }
}

alert("Hi "+userName+"\nYour Score is "+score);