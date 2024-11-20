function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
        <div className="flex justify-center items-center h-full">
          <a className="bg-red-500" target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
    </>
  )
}

export default App
