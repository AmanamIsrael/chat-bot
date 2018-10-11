// scripts here
// event listeners
$(document).ready(function(){
let send=$("button");
send.on("click",chat);
let chatWindow=$(".chatArea");
let typeBox=$("textarea");
typeBox.on("keydown", checkEnter);
const randomReplies=["hi","how are you?","your day?","whatcha doing?","are you home?","i dont get you?"];

const botConfig = {
    scrollSpeed: 500,
    computerReplyDelay: 3000
} ;
// run first
randomreplyUser();
 

// functions

function checkEnter(event) {
  
    if(event.keyCode===13&& event.shiftKey){
        const currentMessage=typeBox.val();
        typeBox.val(currentMessage+"\n");
    }
    else if(event.keyCode===13){
        
        chat();
} 
}

// let botIs="typing";
// function showTyping(){
//     setTimeout(function(){
//         message=botIs; 
//         console.log("typing.....");
//         botIs.fade();
//     },500)
//     }


function randomreplyUser(){
setTimeout(function(){
    const randomindex=Math.floor(Math.random()*randomReplies.length);
    const randomreply=randomReplies[randomindex];

    _generateMessageElement(randomreply);
},botConfig.computerReplyDelay);

}


function  _generateMessageElement(message,role){
    const date= new Date;
    hh=date.getHours();
    mm=date.getMinutes();
    const time= hh +":" + mm;
    

    const messageElementClass=role || "bot";
    const chatDisplay=`
<div class="reply ${messageElementClass}">
<div class="inside" id="reply">
   ${message}
</div>
<div class="time">${time}</div>
</div>
`
// showTyping();
const messageElement = $(chatDisplay);
chatWindow.append(messageElement);
 
scrollToLast();
 
}


function chat(){
    const date = new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let welcome=$("h1");
    let messageBox=$("textarea");
    let message=messageBox.val().trim();
   
    let time = hh +":" + mm;
    if(message.length===0){
        return false;
    }
   const chatDisplay=
   `<div class="msg">
   <div class="inside">${message} </div>
   <div class="time">${time}</div>
   </div>`
   
   const messageElement=$(chatDisplay);
   chatWindow.append(messageElement);
    clearChatInput();
    scrollToLast();
    
randomreplyUser();
   welcome.hide();
  
  
}

function clearChatInput() {
    typeBox.val("");
     
}
function scrollToLast() {
    const scrollPosition = chatWindow.prop("scrollHeight");
    chatWindow.animate({"scrollTop" :scrollPosition},1000);
}


});