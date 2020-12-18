const quizData =[
    {
        question:'Which type of JavaScript language is?',

        a:'Object-Oriented',
        b:'Object-Based',
        c:'Assembly-language',
        d:'High-level',
        correct:'b'

    },{
        question:'In JavaScript, what is a block of statement?',
        a:'Conditional block',
        b:'block that combines a number of statements into a single compound statement',
        c:'both conditional block and a single statement',
        d:'block that contains a single statement',
        correct:'b'


    },{
        question:'When interpreter encounters an empty statements, what it will do?',

        a:'Shows a warning',
        b:'Prompts to complete the statement',
        c:'Throws an error',
        d:'Ignores the statements',
        correct:'d'


    },{
        question:'The "function" and " var" are known as',
        a:'Keywords',
        b:'Data types',
        c:'Declaration statements',
        d:'Prototypes',
        correct:'c'

    },{
        question:'Which of the following variables takes precedence over the others if the names are the same?',
        a:'Global variable',
        b:'The local element',
        c:'The two of the above',
        d:'None of the above',
        correct:'b'


    }

];
const quiz=document.getElementById("quiz");

const questionE1=document.getElementById('question');

const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitbtn=document.getElementById('submit');
const answerE1s=document.querySelectorAll(".answer");


let currentquiz=0;
let score=0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    questionE1.innerText=quizData[currentquiz].question;
    a_text.innerText=quizData[currentquiz].a;
    b_text.innerText=quizData[currentquiz].b;
    c_text.innerText=quizData[currentquiz].c;
    d_text.innerText=quizData[currentquiz].d;

}
function getSelected(){
    let  answer=undefined;
    answerE1s.forEach((answerE1)=>{
        if (answerE1.checked){


            answer=answerE1.id;
        }

    });
    return answer;

}
function deselectAnswers(){
    answerE1s.forEach((answerE1)=>{
        answerE1.checked=false;
    });
}

submitbtn.addEventListener('click' ,() =>{

    const answer=getSelected();

    if (answer){
        if(answer===quizData[currentquiz].correct){
            score++;
        }

        currentquiz++;
        if(currentquiz<quizData.length){
            loadQuiz();

        }
        else{
            quiz.innerHTML= `<h2>you answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }


})