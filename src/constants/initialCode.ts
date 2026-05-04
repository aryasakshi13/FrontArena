


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
    content: `body {
  background-color: #0B2429;
  color: #F2AD73;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

.canvas {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap : 40px ;
}
  .text-container{
    text-align: center;
  }
  
   .tree-box {
   
    background-color:#0e6e5f;
    border: 1px solid rgba(242, 148, 129, 0.1);
    padding: 40px 60px;
    border-radius: 20px;
    box-shadow: 0 20x 50px rgba(0,0,0,0.3);
   }

.tree-container {
  position: relative;
  width: 200px;
  height: 180px; 
  margin-bottom: 20px;
  
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

/* Bottom */
.tree-bottom {
  bottom: 0;
  border-left-width: 100px;
  border-right-width: 100px;
  border-bottom: 80px solid #1A9481;
  z-index: 1;
}

/* Middle  */
.tree-middle {
  bottom: 45px;
  border-left-width: 80px;
  border-right-width: 80px;
  border-bottom: 75px solid #F2AD73;
  z-index: 2;
}

/* Top */
.tree-top {
  bottom: 95px;
  border-left-width: 60px;
  border-right-width: 60px;
  border-bottom: 65px solid #FFF5D1;
  z-index: 3;
}

h1 {
  margin: 10px 0 5px 0;
  letter-spacing: 2px;
}

p {
  margin: 0;
  opacity: 0.7;
  font-size: 14px;
}`
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