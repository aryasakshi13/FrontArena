import { usePlayGround } from './hooks/useplayground'
import { INITIAL_CODE } from './constants/initialCode';
import './App.css'
import { useState } from 'react';
import { Editor } from '@monaco-editor/react';

function App() {
  
  const {html, setHtml, css, setCss, js , setjs, srcDoc} = usePlayGround(
    INITIAL_CODE.html,
    INITIAL_CODE.css,
    INITIAL_CODE.js
  );

  const [activeTab, setActiveTab] = useState<'html'| 'css'|'js'>('html');

  return (
    <div className='h-screen w-full flex flex-col lg:flex-row bg-slate-950 text-slate-300 overflow-hidden font-sans'>
      {/* sidebar */}
      <nav className='w-full lg:w-16 h-16 lg:h-full flex flex-row lg:flex-col items-center justify-center lg:justify-start py-0 lg:py-6 gap-4 lg:gap-6 bg-slate-900  border-b lg:border-b-0  lg:border-r  border-slate-500 shrink-0'>
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

         {/*main Content Area  */}
         <main className='flex-1 flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden'>

       {/* Editior Part  */}      
       <div className=' w-full lg:w-1/2 h-[50vh] lg:h-full flex flex-col  border-b lg:border-b-0 lg:border-r border-slate-800 bg-slate-950'>
        {/* Tab title bar */}
          <div className='h-10 px-4 flex items-center bg-slate-900/50 border-b border-slate-800 text-[10px] uppercase tracking-widest font-bold text-slate-500 shrink-0'>
             Editing:<span className='ml-2 texxt-slate-200'>{activeTab}</span>
          </div>

          {/*dynamic text area  */}
          <div className='flex-1 overflow-hidden'>
          <Editor 
              height="100%"

              language={activeTab === 'js' ? 'javascript' : activeTab}
                 theme="vs-dark"
            
            value={activeTab==='html' ? html: activeTab === 'css' ? css : js}

            onChange={(value) => {
              if(activeTab=== 'html') setHtml(value || "");
              else if(activeTab === 'css') setCss(value|| "");
              else setjs(value || "");
            }}

            options={{
              minimap:{enabled: false}, 
              fontSize: 14,
              wordWrap:"on",
              scrollBeyondLastLine: false,
              automaticLayout: true,
              padding: {top:20}

            }}
          />
          </div>
         </div>

        {/* Preview Part  */}
        <div className=' w-full lg:w-1/2 h-[50vh] lg:h-full bg-white'>
        <iframe 
          srcDoc={srcDoc}
          className='w-full h-full border-none'
          title="preview"
          sandbox="allow-scripts allow-modals"
        />
       </div>
      </main>
    </div>
  );
}

export default App
