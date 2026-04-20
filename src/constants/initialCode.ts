export const INITIAL_FILES = [
  {
      id:"1",
      name: "index.html",
      language: "html",
      content : `<div class="container">
        <h1>FrontArena</h1>
        <p>Start editing the code on the left!</p>
        <button id="magic-btn">Click me </button>
    </div>`
  },
  {
        id : "2",
        name: "style.css",
        language:"css",
        content: `body{
        background-color:#0f172e;
        color:white;
        font-family: sans-serif;
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
        margin: 0;
        }
        .container{
        text-align: center;
        } 
        button{
        padding: 10px 20px;
        background-color:#3b82f6;
        color:white;
        border:none;
        border-radius: 5px;
        cursor: pointer;
        transition: background 0.2s;
        }`
  },
  {
    id: "3",
    name:"script.js",
    language: "javascript",
    content:`
    const btn = document.getElementById('magic-btn');

    if (btn) {
      btn.addEventListener('click', () => {
        alert('Logic is working! 🚀');
        console.log('Button was clicked inside the iframe!');
      });
    }`
  }
];