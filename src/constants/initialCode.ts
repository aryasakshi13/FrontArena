
export const INITIAL_FILES = [
  {
    id: "1",
    name: "index.html",
    language: "html",
    content: `  
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FrontArena | Code Playground</title>
  <!-- Manual CSS Linking -->
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="canvas">
    <div class="text-container">
      <h1>FrontArena</h1>
      <p>The ultimate playground for Modern Web Artisans. <br> 
      <span>Master HTML, CSS, and JS in real-time.</span></p>
    </div>

    <div class="tree-box">
      <div class="tree-container">
        <div class="tree-bottom"></div>
        <div class="tree-middle"></div>
        <div class="tree-top"></div>
      </div>
    </div> 
  </div>

  <!-- Manual JS Linking -->
  <script src="script.js"></script>
</body>
</html>
`
  },
  {
    id: "2",
    name: "style.css",
    language: "css",
    content: `
       body {
  background-color: #0B2429;
  color: #F2AD73;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  /* Changed to center to ensure it stays in the middle of the preview */
  justify-content: center; 
  align-items: center;
  min-height: 100vh;
  margin: 0;
  box-sizing: border-box;
  padding: 20px;
  overflow-x: hidden;
}

.canvas {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  text-align: center;
  gap: 20px;
}

.text-container {
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
}

.text-container h1 {
  font-size: clamp(1.8rem, 8vw, 2.5rem);
  margin: 0;
  color: #FFF5D1;
}

.tree-box {
  background-color: rgba(14, 110, 95, 0.3);
  border: 1px solid rgba(242, 148, 129, 0.2);
  padding: 30px; /* Reduced for better mobile fit */
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

/* FIXED MEDIA QUERY SYNTAX */
@media (max-width: 400px) {
  .tree-container {
    transform: scale(0.8);
    margin: -10px 0;
  }
}

.tree-container {
  position: relative;
  width: 200px;
  height: 180px;
}

.tree-bottom, .tree-middle, .tree-top {
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  transform: translateX(-50%);
  border-left: solid transparent;
  border-right: solid transparent;
}

.tree-bottom {
  bottom: 0;
  border-left-width: 100px;
  border-right-width: 100px;
  border-bottom: 80px solid #1A9481;
  z-index: 1;
}

.tree-middle {
  bottom: 45px;
  border-left-width: 80px;
  border-right-width: 80px;
  border-bottom: 75px solid #F2AD73;
  z-index: 2;
}

.tree-top {
  bottom: 95px;
  border-left-width: 60px;
  border-right-width: 60px;
  border-bottom: 65px solid #FFF5D1;
  z-index: 3;
}
    `
  },
  {
    id: "3",
    name: "script.js",
    language: "javascript",
    content: `console.log("Challenge Loaded: Christmas Tree");

const treeParts = document.querySelectorAll('[class^="tree-"]');

treeParts.forEach(part => {
  part.addEventListener('mouseenter', () => {
    part.style.opacity = '0.8';
  });
  part.addEventListener('mouseleave', () => {
    part.style.opacity = '1';
  });
});`
  }
];





//     <link rel = "stylesheet" href="style.css">
//     <div class="canvas">
//     <div class="text-container">
//     <h1>FrontArena</h1>
//      <p>The ultimate playground for Modern Web Artisans</p>
//     </div>
//   <div class ="tree-box">
//   <div class="tree-container">
//     <div class="tree-bottom"></div>
//     <div class="tree-middle"></div>
//     <div class="tree-top"></div>
//   </div>
//   </div>
// </div>
// <script src = "script.js"></script>