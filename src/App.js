import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [renderedContent, setRenderedContent] = useState(null);

  useEffect(() => {
    // Check if the random number is already stored in sessionStorage
    let randomNumber = sessionStorage.getItem('randomNumber');

    if (!randomNumber) {
      // Generate a random number between 1 and 100
      randomNumber = Math.floor(Math.random() * 100) + 1;
      // Store it in sessionStorage
      sessionStorage.setItem('randomNumber', randomNumber);
    }

    // Determine the content to render based on the random number
    randomNumber = parseInt(randomNumber, 10); // Ensure it's a number
    if (randomNumber >= 1 && randomNumber <= 50) {
      setRenderedContent(<p>Holy shit, he's seething.</p>);
    } else if (randomNumber >= 51 && randomNumber <= 90) {
      setRenderedContent(<p>Oh, he's mad.</p>);
    } else if (randomNumber >= 91 && randomNumber <= 100) {
      setRenderedContent(<p>Wait, for once he isn't mad.</p>);
    }
  }, []); // Run only once when the component mounts

  return (
    <div className="App">
      <header className="App-header">
        <img 
          src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1727910793/IMG_0982_papgjo.jpg" 
          className="App-logo" 
          alt="logo" 
        />
        <p>
          {renderedContent}
        </p>
        <p>This post has been fact-checked by true American patriots.</p>
      </header>
    </div>
  );
}

export default App;