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
          ${activeTab=== 'js'? 'bg-yellow-500 text-black' : 'text-slate-500 hover:bg-slate-800'}`}>
          J
          </button>
      </nav>

       {/* Editior Part  */}
       <div className='flex flex-1 flex-col border-r border-slate-800 bg-slate-950'>
        {/* Tab title bar */}
          <div className='h-10 px-4 flex items-center bg-slate-900/50 border-b border-slate-800 text-[10px] uppercase tracking-widest font-bold text-slate-500'>
             Editing:<span className='ml-2 texxt-slate-200'>{activeTab}</span>
          </div>

          {/*dynamic text area  */}
          <textarea 
            className ="flex-1 p-6 bg-transparent font-mono text-sm outline-none resize-none text-slate-300"
            spellCheck={false}
            
            value={activeTab==='html' ? html: activeTab === 'css' ? css : js}

            onChange={(e) => {
              if(activeTab=== 'html') setHtml(e.target.value);
              else if(activeTab === 'css') setCss(e.target.value);
              else setjs(e.target.value);
            }}
          />
         </div>

        {/* Preview Part  */}
        <div className='flex-1 bg-white'>
        <iframe 
        srcDoc={srcDoc}
        className='w-full h-full border-none'
        title="preview"
        sandbox="allow-scripts"
        />
       </div>
    </div>
  );
}

export default App
