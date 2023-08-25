const AllQ = [


{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
    question:   "Who invented OOP?"},
{    
a: "Andrea Ferro",
b: "Adele Goldberg",
c: "Alan Kay",
d: "Dennis Ritchie",
correct:"c",
},
{
    question: "Which is not a feature of OOP in general definitions?",
    a: "Duplicate/Redundant data",
    b: "Efficient Code",
    c: " Modularity",
    d: "none of the above",
    correct: "a",
},
{
    question: "Which was the first purely object oriented programming language developed?",
    a: "Kotlin",
    b: "SmallTalk",
    c: " Java",
    d: "none of the above",
    correct: "b",
},
{
    question: "When OOP concept did first came into picture?",
    a: "1968",
    b: "1969",
    c: "1970",
    d: "none of the above",
    correct: "c",
},
{
    question: " Which feature of OOP indicates code reusability?",
    a: "Inheritance",
    b: "Abstraction",
    c: "Polymorphism",
    d: "none of the above",
    correct: "a",
},
{
    question: "Which header file is required in C++ to use OOP?",
    a: " stdlib.h",
    b: "iostream.h",
    c: "stdio.h",
    d: "none of the above",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "Which among the following doesn’t come under OOP concept?",
    a: "Message passing",
    b: "Data binding",
    c: " Platform independent",
    d: "none of the above",
    correct: "b",
},

];
var i = 0;
var correct = 0,
incor = 0;
var att=0;
var unatt=10
var score=0;

total = AllQ.length;
var qn_div = document.getElementById("qn_div");
var options = document.querySelectorAll('.option')
var a=document.getElementById("att");
var b=document.getElementById("unatt");
function displayQn(){
    a.innerHTML="attem :"+att;
    b.innerHTML="unattem :"+unatt;
if (total === i) {
    return lastQn()
}
unchecked()
const data = AllQ[i]
qn_div.innerHTML = `${i + 1}) ${data.question}`
options[0].nextElementSibling.innerHTML = data.a
options[1].nextElementSibling.innerHTML = data.b  
options[2].nextElementSibling.innerHTML = data.c
options[3].nextElementSibling.innerHTML = data.d
}


function f() {
    const data = AllQ[i]
    const ans = Ans()
    if (ans === data.correct) {
        correct++;
        score=score+4;
        att++;
        unatt--;
    } else {
        incor++;
        score=score-1;
        att++;
        unatt--;
    }
    i++;
    displayQn()
}


const Ans = () => {
var ans;
options.forEach(
    (input) => {
        if (input.checked) {
            ans = input.value;
        }
    }
)
return ans;
}

const unchecked = () => {
options.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const lastQn = () => {
// console.log(document.getElementsByClassName("parent"));
document.getElementsByClassName("parent")[0].innerHTML = `
    
        <h1 class="w-100"> you've scored ${score}</h1><br>
        <h3>correct : ${correct}<h3><br>
        <h3>incorrect : ${incor}<h3>
    
`
}
displayQn(i);