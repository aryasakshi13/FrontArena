// const compileCode = (html: string, css: string, js: string ): string =>{
//   return `
//   <!DOCTYPE html>
//   <html lang="en">
//         <head>
//              <meta charset = "UTF-8"/>
//             <style>
//              // CSS part 
//              ${css}
//             </style>

//         </head>
//         <body>
//           ${html}

//         <script>
//         //javascript part 
//          try{
//            ${js}
//          }catch(err){
//            console.error("Runtime Error:", err);
//          }
//         </script>
//        </body>
//     </html>

//   `;
// };

// export default compileCode;


 const compileCode=(files: any[]):string => {
       let html = files.find(f => f.name?.endsWith(".html"))?.content || '';


       const cssRegex = /<link\s+[^>]*href=["'](.+?\.css)["'][^>]*>/gi;
       html = html.replace(cssRegex, (match,  fileName)=>{
        const file = files.find(f => f.name === fileName);
        return file? 
         `<style>${file.content}</style>` 
         : ``;
       });

       const jsRegex =  /<script\s+[^>]*src=["'](.+?\.js)["'][^>]*>\s*<\/script>/gi;
       html = html.replace(jsRegex,(match, fileName) =>{
           const file = files.find(f => f.name === fileName);

           return file
           ? `<script>${file.content}</script>`
           : `` ;
       });

       return `
       <!DOCTYPE html>
       <html lang = "en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body>
            ${html}
          </body>
        </html>
       `;

 };

 export default compileCode;