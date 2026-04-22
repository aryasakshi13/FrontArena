import { usePlayGround } from './hooks/useplayground'
import { INITIAL_FILES } from './constants/initialCode';
import './App.css'
import { useState } from 'react';
import React from 'react';
import { Editor } from '@monaco-editor/react';
// import * as Resizable from "react-resizable-panels";



const getLanguage = (name: string) => {
  const ext = name.split('.').pop()?.toLowerCase();
  switch (ext) {
    case 'js': return 'javascript';
    case 'ts': return 'typescript';
    case 'css': return 'css';
    case 'html': return 'html';
    case 'json': return 'json';
    case 'md': return 'markdown';
    default: return 'plaintext';
  }
};

function App() {

  const [files, setFiles] = useState(INITIAL_FILES);
  // Track which file id is currently open 
  const [activeFieldId, setActiveFieldId] = useState(files[0].id);

  const activeFile = files.find(file => file.id === activeFieldId) || files[0];

  const [isCreating, setIsCreating] = useState(false);
  const [newFileName, setNewFileName] = useState("");

  // REname   State 
  const [renamingId, setrenamingId] = useState<string | null>(null);
  const [tempName, setTempName] = useState("");

  //  Delete function
  const deleteFile = (idToDelete: string) => {
    const updatedFiles = files.filter(f => f.id !== idToDelete);
    setFiles(updatedFiles);

    if (activeFieldId === idToDelete) {
      setActiveFieldId(updatedFiles.length > 0 ? updatedFiles[0].id : "");
    }
  };

  //   Rename Function

  const finalizeRename = (e: React.KeyboardEvent, id: string) => {
    if (e.key == 'Enter' && tempName.trim() !== "") {
      // const extension = tempName.split(".").pop()?.toLowerCase();

      setFiles(prev => prev.map(f =>
        f.id === id ? {
          ...f,
          name: tempName,
          language: getLanguage(tempName)
        } : f
      ));
      setrenamingId(null);
    } else if (e.key === 'Escape') {
      setrenamingId(null);
    }
  };

  const { srcDoc } = usePlayGround(files);

  const startCreating = () => setIsCreating(true);

  const finalizeFile = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newFileName.trim() !== "") {
      // const extension = newFileName.split(".").pop()?.toLowerCase();

      const newFile = {
        id: Date.now().toString(),
        name: newFileName,
        language: getLanguage(newFileName),
        content: ''
      };

      setFiles([...files, newFile]);
      setActiveFieldId(newFile.id);
      setIsCreating(false);
      setNewFileName("");
    }

    else if (e.key === 'Escape') {
      setIsCreating(false);
      setNewFileName("");
    }

  }


  const handleEditorChange = (value: string | undefined) => {
    setFiles(prevFiles =>
      prevFiles.map(file =>
        file.id === activeFieldId
          ? { ...file, content: value || "" }
          : file
      )
    )
  }

  return (
    <div className='h-screen w-full flex flex-col lg:flex-row bg-slate-950 text-slate-300 overflow-hidden font-sans'>
      {/* sidebar */}
      <nav className='w-full lg:w-60 h-auto lg:h-full flex flex-col  bg-slate-900  border-b   lg:border-r  border-slate-800 shrink-0'>

        <div className='p-4 flex justify-between items-center border-b border-slate-800 bg-slate-900/50'>
          <span className='text-[11px] font-bold uppercase tracking-widest text-slate-500'>Explorer</span>
          <button onClick={startCreating}
            className='text-blue-500 font-bold p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-blue-400 transition-colors
              title="new File" '>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>

        <div className='flex-1 overflow-y-auto py-2'>
          {isCreating && (
            <div>
              <input
                autoFocus
                className="w-full bg-slate-950 border border-blue-500/50 rounded px-3 py-1.5 text-sm outline-none text-white placeholder:text-slate-600 focus:border-blue-500 focus: ring-1 focus:ring-blue-500 transition-all"
                placeholder="filename.css"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
                onKeyDown={finalizeFile}
                onBlur={() => setIsCreating(false)}
              />

            </div>
          )}
          {files.map((file) => (
            <div key={file.id} className="group relative px-2">
              {renamingId === file.id ? (
                /* RENAME INPUT MODE */
                <div className="py-1">
                  <input
                    autoFocus
                    className="w-full bg-slate-950 border border-blue-500 rounded px-2 py-1 text-sm outline-none text-white"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    onKeyDown={(e) => finalizeRename(e, file.id)}
                    onBlur={() => setrenamingId(null)}
                  />
                </div>
              ) : (
                /* NORMAL DISPLAY MODE */
                <div
                  onClick={() => setActiveFieldId(file.id)}
                  className={`w-full flex items-center justify-between px-2 py-2 text-sm cursor-pointer rounded transition-all
          ${activeFieldId === file.id ? 'bg-slate-800 text-blue-400 border-l-2 border-blue-400' : 'text-slate-500 hover:bg-slate-800/50'}`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-[10px] opacity-50 font-mono">
                      {file.name.endsWith('.html') ? (
                        <svg className="text-orange-600" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm7.031 16.75l.328 3.375L12 21.031l3.141-.906.328-3.375h-6.78zM6.281 3.656l.75 8.25h10.031l-.188 1.875H7.125l.188 1.875H16.75l-.563 5.625L12 19.313l-4.188-1.219-.094-1.125H5.813l.188 2.625L12 21.5l5.906-1.875.844-9.375H7.219l-.188-1.875H19.03l.188-1.875H6.281z" /></svg>
                      ) : file.name.endsWith('.css') ?
                        (
                          <svg className="text-blue-500" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm17.03 16.531l-.563 5.625L12 23.313l-5.906-1.125.188-2.625h1.906l-.094 1.125L12 21.906l4.188-1.219.563-5.625H7.125l-.188-1.875H17.5l.188-1.875H6.75l-.188-1.875h11.25l.188-1.875H6.375l-.188-1.875H19.5l-.97 11.25z" /></svg>
                        ) : file.name.endsWith('.js') ?
                          (
                            <div className="bg-yellow-400 text-black font-bold text-[8px] w-4 h-4 flex items-center justify-center rounded-sm">JS</div>
                          ) : <svg className="text-slate-400" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>}
                    </span>
                    <span className="truncate">{file.name}</span>
                  </div>

                  {/* HOVER ACTIONS */}
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {/* Edit/Rename Icon */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents switching files
                        setrenamingId(file.id);
                        setTempName(file.name);
                      }}
                      className="p-1 hover:text-blue-400 text-slate-500"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </button>

                    {/* Delete Icon */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents switching files
                        deleteFile(file.id);
                      }}
                      className="p-1 hover:text-red-500 text-slate-500"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/*main Content Area  */}
      <main className='flex-1 flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden'>

        {/* Editior Part  */}
        <div className=' w-full lg:w-1/2 h-[50vh] lg:h-full flex flex-col  border-b lg:border-b-0 lg:border-r border-slate-800 bg-slate-950'>
          {/* Tab title bar */}
          <div className='h-10 px-4 flex items-center bg-slate-900/50 border-b border-slate-800 text-[10px] uppercase tracking-widest font-bold text-slate-500 shrink-0'>
            Editing:<span className='ml-2 text-slate-200'>{activeFile.name}</span>
          </div>

          {/*dynamic text area  */}
          <div className='flex-1 overflow-hidden'>
            <Editor
              height="100%"
              language={activeFile.language}
              theme="vs-dark"

              value={activeFile.content}

              onChange={handleEditorChange}

              options={{
                minimap: { enabled: false },
                fontSize: 14,
                wordWrap: "on",
                // scrollBeyondLastLine: false,
                automaticLayout: true,
                padding: { top: 20 }

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
