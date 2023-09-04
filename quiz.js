const questions=[
    {
        question:" which is largest animal in the world?",
        answers:[
            
                {text:"shark",correct:false},
                {text:"blue whale",correct:true},
                {text:"elephant",correct:false},
                {text:"giraffe",correct:false},
            
        ]
    },
    {
        question:" who is india's current primeminister?",
        answers:[
            
                {text:"Manmohan Singh",correct:false},
                {text:"Narendra Modi",correct:true},
                {text:"Mohit Choubey",correct:false},
                {text:"Barak obama",correct:false},
            
        ]  
    },
    {
        question:" who is current RBI chief?",
        answers:[
            
                {text:"Manmohan Singh",correct:false},
                {text:"Urjit R patel",correct:true},
                {text:"Raghu ram Rajan",correct:false},
                {text:"Nirmala Sitaraman",correct:false},
            
        ]    
    }

];
const questionelement=document.getElementById("question");
const answerbutton=document.getElementById("answers");
const nextbutton=document.getElementById("next-btn");
let currentindex=0;
let score=0;
function startquiz(){
    currentindex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showquestion();
}
function showquestion(){
    resetstate();
    let currentquestion=questions[currentindex];
    let questionno=currentindex+1;
    questionelement.innerHTML=questionno+"."+ currentquestion.question;
    currentquestion.answers.forEach(answer=>{
    const button =document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerbutton.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectanswer);
    });
}
function resetstate(){
    nextbutton.style.display="none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
}
function selectanswer(e){
    const selectedbtn=e.target;
    const iscorrect=selectedbtn.dataset.correct==="true";
    if(iscorrect){
        selectedbtn.classList.add("correct");  
        score++;
    }
    else {
        selectedbtn.classList.add("incorrect");  
    }
    Array.from(answerbutton.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    button.disabled=true;
    });
    nextbutton.style.display="block";
}
function showscore(){
    resetstate();
    questionelement.innerHTML=`you scored ${score} out of ${questions.length}`;
    nextbutton.innerHTML="PLAY AGAIN";
    nextbutton.style.display="block";
}
function handlenextbutton(){
    currentindex++;
    if(currentindex<questions.length){
        showquestion();
    }
    else {
        showscore();
    }
}
nextbutton.addEventListener("click",()=>{
  if(currentindex<questions.length){
    handlenextbutton();
  }
  else {
    startquiz();
  }
});
startquiz();


