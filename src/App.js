
import './App.css';
import Scroll from './components/molecules/ScrollBar.js';

function App() {
  return (
    <div className='app' >
   <h1>Know your mentors</h1>
        <p  className='abt'>Work with a mentor (senior data scientists from top companies) who closely looks at your progress, gives you personalized feedback and helps you fill gaps in your knowledge.</p>
       < Scroll />
  
    </div>
  );
}

export default App;
