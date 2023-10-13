import './App.css';

function App() {
  return (
    <div className="App">
      <aside className='sidemenu'>
        <div className='side-menu-button'>
          + New Chat
        </div>
      </aside>
      <section className='chatbox'>
        <div className='chatlog'>
          <div className='chat-message'>
            <div className='chat-message-center'>
              <div className='avatar'>
              
              </div>
              <div className='message'>
                Hello World
              </div>
            </div>
          </div>

          <div className='chat-message jarvis'>
            <div className='chat-message-center'>
              <div className='avatar'>
              
              </div>
              <div className='message'>
                I am an AI
              </div>
            </div>
          </div>

        </div>
        <div className='chat-input-holder'>
          <textarea className='chat-text-area' rows='1'></textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
