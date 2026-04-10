import { usePlayGround } from './hooks/useplayground'
import { INITIAL_CODE } from './constants/initialCode';
import './App.css'
import { useState } from 'react';

function App() {
  
  const {html, setHtml, css, setCss, js , setjs, srcDoc} = usePlayGround(
    INITIAL_CODE.html,
    INITIAL_CODE.css,
    INITIAL_CODE.js
  );

  const [activetab, setActiveTab] = useState<'html'| 'css'|'js'>('html');

  return (
    <div className='h-screen w-full flex flex-col bg-slate-900 text-white'>
      {/* sidebar */}
      <nav>
        <button onClick={()=>setActiveTab('html')}
          className='w-4 p-4 m-3 bg-orange-400 '>
          H
          </button>
        <button onClick={()=>setActiveTab('css')}>C</button>
        <button onClick={()=>setActiveTab('js')}>J</button>
        
      </nav>
       {/* Editior Part  */}
       <div className='flex flex-1'>
        <textarea value={html}
        onChange={(e) => setHtml(e.target.value)}
        className='w-1/2 bg-slate-950 p-4 font-mono text-sm outline-none'
        />
        {/* Preview Part  */}
        <iframe 
        srcDoc={srcDoc}
        className='w-1/2 bg-gray-500'
        title="preview"
        sandbox="allow-scripts"
        
        />
       </div>
    </div>
  )
}

export default App
