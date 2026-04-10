import {useState, useEffect} from 'react';
import compileCode from '../utills/compiler';

export const usePlayGround = (initialHtml: string, initialCss: string, initialjs: string) =>{
  console.log("Engine is compiling...");

//  update as we type display in editor
const [html, setHtml] = useState(initialHtml);
const [css, setCss] = useState(initialCss);
const [js, setjs] = useState(initialjs);

//  only update after the pause display in preview 

const [srcDoc, setSrcDoc] = useState('');

useEffect(() =>{
     const timeout = setTimeout(()=>{
      const compiled = compileCode(html, css,js);
      setSrcDoc(compiled);
      console.log("compiled code is here:",compiled);
     }, 500);
     return () => clearTimeout(timeout);
}, [html, css, js])

console.log("INTERNAL STATE CHECK:", { srcDoc });

return {
   html, setHtml,
   css, setCss,
   js, setjs,
   srcDoc
 };
};