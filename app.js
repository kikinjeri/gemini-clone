import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyBZKio1_RHXcKsCIM8Wnrlr6F8G3IPXNVs";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

let messages =   {
    history: [],
            }


async function sendMessage() {
    const userMessage = document.querySelector(".chat-window input").value;

    if (userMessage.length){
        document.querySelector(".chat-window input").value = "";
        document.querySelector(".chat-window .chat").insertAdjacentHTML(
            "beforeend",
            `<div class="user">
            <p>${userMessage}</p>
            </div>
            `);
    
    const chat = model.startChat(messages);
        
          let result = await chat.sendMessage(userMessage);
            console.log(result.response.text());

           
        
    }
}


document.querySelector(".chat-window .input-area button")
.addEventListener("click", ()=>sendMessage());

