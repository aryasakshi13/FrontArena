import {useState, useEffect} from 'react';
import compileCode from '../utills/compiler';

export const usePlayGround = (files: any[]) =>{
  console.log("Engine is compiling...");

//  update as we type display in editor
// const [html, setHtml] = useState(initialHtml);
// const [css, setCss] = useState(initialCss);
// const [js, setjs] = useState(initialjs);

//  only update after the pause display in preview 

const [srcDoc, setSrcDoc] = useState('');

useEffect(() => {
      const timeout = setTimeout(()=>{
        // const html = files.find(f => f.name?.endsWith('.html'))?.content || '';
        // const css =files
        // .filter(f => f.name?.endsWith('.css'))
        // .map(f => f.content)
        // .join('\n');

        // const js = files
        //   .filter(f => f.name.endsWith('.js'))
        //   .map(f => f.content)
        //   .join('\n');


        // const compiled = compileCode(html, css,js);

         const compiled = compileCode(files);

        setSrcDoc(compiled);
     
      },500);

     return () => clearTimeout(timeout);
},[files]);

// console.log("INTERNAL STATE CHECK:", { srcDoc });

return {srcDoc};
};