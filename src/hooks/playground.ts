import {useState, useEffect} from 'react';
import compileCode from '../utills/compiler';

export const usePlayGround = (initialHtml: string, initialCss: string, initialjs: string) =>{

//  update as we type
const [html, setHtml] = useState(initialHtml);
const [css, setCss] = useState(initialCss);
const [js, setjs] = useState(initialjs);

//  only update after the pause

const [srcDoc, setSrcDoc] = useState('');

useEffect(() =>{
     const timeout = setTimeout(()=>{
      const compiled = compileCode(html, css,js);
     }, 500);
     return () => clearTimeout(timeout);
}, [html, css, js])

return {
   html, setHtml,
   css, setCss,
   js, setjs,
   srcDoc
 };
};