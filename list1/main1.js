let num1=document.querySelector('.item-one');
let num2=document.querySelector('.item-two');
let res=document.querySelector('.result');
let bttn=document.querySelector('.btn');
let btnReset=document.querySelector('.reset');

console.log(num1.value, num2.value);



bttn.addEventListener('click', () =>{
    let rand = Math.floor(Number(num1.value) + Math.random()*(Number(num2.value)-Number(num1.value)+1));
    console.log(rand);
    res.innerText=rand;
    
})

 btnReset.addEventListener('click', () =>{
    num1.value="";
    num2.value="";
    let rand = Math.floor(Number(num1.value) + Math.random()*(Number(num2.value)-Number(num1.value)+1));
    console.log(rand);
    res.innerText=rand;
         
})

    /*function getResult(){
        let rand = Math.floor(Number(num1.value) + Math.random()*(Number(num2.value)-Number(num1.value)+1));
        console.log(rand);
        res.innerText=rand;
        bttn.setAttribute('disabled', true);
      
    }
    
    
    function getReset(){
        num1.value="";
        num2.value="";
        res.innerText="";

        bttn.setAttribute('disabled');       
    
    }*/


