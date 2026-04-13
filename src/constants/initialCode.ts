export const INITIAL_CODE = {
    html: `<div class="container">
        <h1>FrontArena</h1>
        <p>Start editing the code on the left!</p>
        <button id="magic-btn">Click me </button>
    </div>`,

    css: `body{
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
    }`,

    js:`
    const btn = document.getElementById('magic-btn');

if (btn) {
  btn.addEventListener('click', () => {
    alert('Logic is working! 🚀');
    console.log('Button was clicked inside the iframe!');
  });
}`
};