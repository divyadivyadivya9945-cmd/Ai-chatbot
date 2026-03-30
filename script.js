async function sendMessage(){

let input=document.getElementById("userInput").value;

let chatbox=document.getElementById("chatbox");

chatbox.innerHTML+=`<p class="user">${input}</p>`;


let response = await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{

"Content-Type":"application/json",

"Authorization":"Bearer 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"

},

body:JSON.stringify({

model:"gpt-4o-mini",

messages:[

{role:"user",content:input}

]

})

});

let data=await response.json();

let botReply=data.choices[0].message.content;

chatbox.innerHTML+=`<p class="bot">${botReply}</p>`;

document.getElementById("userInput").value="";

}
