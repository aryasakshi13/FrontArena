const compilecode = (html: string, css: string, js: string ): string =>{
  return `
  <!DOCTYPE html>
  <html lang="en>
        <head>
             <meta charset = "UTF-8"/>
            <style>
             // CSS part 
             ${css}
             </style>

        </head>
        <body>
        ${html}

        <script>
        //javascript part 
         try{
           ${js}
         }catch(err){
           console.error("Runtime Error:", err);
         }
        </script>
        </body>
    </html>

  `;
};