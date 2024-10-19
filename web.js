/*   let firstName="jean"
 let secondName ="marc"
 let fullName=firstName+" "+secondName
 console.log(fullName) 
 let Name="jean marc"
 let greeting="hello welcome at home"
 let final= greeting+","+Name
 function don(){
     console.log(final)
 }
 don()
let myPoint =3
 function add(){
   myPoint +=+17
 }
 function remove(){
    myPoint +=-10
 }
  add()
  remove()
  console.log(myPoint)  */
  /* let error=document.getElementById("error")
  let count=0
  function shirt(){
    console.log("something went wrong,please try again")
    error.innerText="something went wrong,please try again"
    error.style.color="red"

  } */
 /* let num1=5
 let num2=3
 document.getElementById("num1-el").textContent=num1
 document.getElementById("num2-el").textContent=num2
 let respond=getelementbyid("respond")

 function add(){
    let respond=num1+num2
    respond.textContent=num1+num2 */
   /*  let age=16 */
    /* let secondCard=10
    let sum = firstCard +secondCard */
   /*  if(age<22){
      console.log("Not allow to enter")  
    }
    else {console.log("welcome")} */
    /* let firstCard=10
    let secondCard=19
    let sum=firstCard+secondCard
    if( sum<=20){
      console.log("do you want another card")
    }
    else if( sum===21){
        console.log("you win")
    }
    else console.log("you lose")  */
    let firstCard=10
    let secondCard=19
    let massageEl=document.getElementById("massage-el")
    let sumEl=document.getElementById("sum-el")
    let sum=firstCard+secondCard
    let massage=""
    function start() {
        if(sum<=20){
            massage= "do you want to take another card"
        }
        else if(sum===21){
            massage="you win"
        }
            else massage ="you lose"
            massageEl.textContent=massage
    }

    
     
 