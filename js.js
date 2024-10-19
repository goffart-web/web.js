
 let stoke=document.getElementById("stoke");
 let saveEl=document.getelementByid("save-el")
 let count=0
 function jean(){
     count=count+1
     stoke.innerText=count
 }
 function save(){
    let countStr=count +"-"
    saveEl.innerText=countStr
    console.log(count)
  }


//  let username="you have received 3 notification"
//  console.log(username)
// let name="goffart"
// let greeting="hello how are you going today"
// let mygreeting=greeting+"," +name
// console.log(mygreeting)
// let name="jean marc"
// let meet="hi"
// let final_line= meet+","+name
//  console.log(final_line)
  /* 
 let welcomeEl=document.getElementById(" welcome-el")
 let name ="jean marc"
let greeting="hello welcome at home"
welcomeEl.innerText= greeting+name */
/* let welcome=document.getElementById(" welcome")
let name="jean marc"
let greeting="you are welcome t"
welcome.innerHTML= greeting+name */
