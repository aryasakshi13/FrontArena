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

  const [activeTab, setActiveTab] = useState<'html'| 'css'|'js'>('html');

  return (
    <div className='h-screen w-full flex  bg-slate-950 text-slate-300 overflow-hidden font-sans'>
      {/* sidebar */}
      <nav className='w-16 flex flex-col items-centerr py-6 gap-6 bg-slate-900 border-r border-slate-500'>
        {/* html button */}
        <button onClick={()=>setActiveTab('html')}
        className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all font-bold
          ${activeTab === 'html' ? 'bg-orange-600 text-white' : 'text-slate-500 hover:bg-slate-800'}`}
          >
          H
          </button>
          {/* css button */}
        <button onClick={()=>setActiveTab('css')}
         className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all font-bold
          ${activeTab ==='css'? 'bg-blue-600 text-white':'text-slate-500 hover:bg-slate-800'}`}
          >C
          </button>
        <button onClick={()=>setActiveTab('js')} 
          className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all font-bold
          ${activeTab=== 'js'? 'bg-yellow-500 text-white' : 'bg-slate-500 hover:bg-slate-800'}`}>J</button>
        
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
