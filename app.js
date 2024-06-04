
const quizQuestion = [{
title : "What is HTML",
A:"A mark up language",
B:"A food language",
C:"nothing",
Answer : "A mark up language"
},
{
  title:"What is your css",
  A: "Style language",
  B: "nothing",
  C: "not sure what it is" ,
  Answer: "Style language"
},
{
  title:"what is the output of this> 10 + 50",
  A: 60,
  B: 10,
  C: 20,  
  Answer: 60,
}]

// quizQuestion[0].map((a)=>{
//     document.querySelector("h1").innerHTML = a.title
// })

const myHTML= document.querySelector("#h1");
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const next = document.querySelector("#next");
const submit = document.querySelector("#submit");
const allbtn = document.querySelectorAll(".option")
const score = document.querySelector("#score")
let index = 0;
let points = 0;


const loadQuestion = (data)=>{
    if(index < quizQuestion.length - 1){
        // question aren't finished so only next button should be shown
        next.hidden = false;
        submit.hidden = true;
    }
    else{
        // question finished so only submit button should show button should be shown
        next.hidden = true
        submit.hidden = false
    }

    myHTML.textContent= data.title;
    a.textContent = data.A;
    b.textContent = data.B;
    c.textContent = data.C;

    allbtn.forEach( i => {
        i.addEventListener("click",info =>{
        let selectedOption = info.target.innerText;
        if(selectedOption == data.Answer){
            points++;
        }
        })
    });
}


loadQuestion(quizQuestion[index]);

next.addEventListener("click",()=>{
index ++;
loadQuestion(quizQuestion[index])
})

submit.addEventListener("click",()=>{
    score.textContent = `Your score is : ${points}`
})