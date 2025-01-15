import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [renderedContent, setRenderedContent] = useState(null);
  const [randomPhoto, setRandomPhoto] = useState(null); // State for randomPhoto

  const photoArray = [
    'https://res.cloudinary.com/dyjzfdguj/image/upload/v1736962725/bolt_anime_s4qc8z.png',
    'https://res.cloudinary.com/dyjzfdguj/image/upload/v1736962726/IMG_0314_i88dxj.jpg',
    'https://res.cloudinary.com/dyjzfdguj/image/upload/v1736962726/IMG_0324_v7ojyw.jpg',
    'https://res.cloudinary.com/dyjzfdguj/image/upload/v1736962726/image0_dmufst.jpg',
    'https://res.cloudinary.com/dyjzfdguj/image/upload/v1736962726/IMG_0390_k8adoo.jpg',
    'https://res.cloudinary.com/dyjzfdguj/image/upload/v1736962726/IMG_0553_uar0fz.jpg',
    'https://res.cloudinary.com/dyjzfdguj/image/upload/v1736962726/IMG_0525_cpzuci.jpg',
    'https://res.cloudinary.com/dyjzfdguj/image/upload/v1736962727/IMG_1427_g4xi9f.jpg',
    'https://res.cloudinary.com/dyjzfdguj/image/upload/v1736962727/IMG_1375_p3eg2r.jpg',
    'https://res.cloudinary.com/dyjzfdguj/image/upload/v1736962727/IMG_1330_wh8bu7.jpg',
    'https://res.cloudinary.com/dyjzfdguj/image/upload/v1736962727/IMG_1455_lhj3jo.jpg',
    'https://res.cloudinary.com/dyjzfdguj/image/upload/v1736962727/IMG_0587_qz8lwz.jpg',
    'https://res.cloudinary.com/dyjzfdguj/image/upload/v1736962727/IMG_0605_v2mgjq.jpg',
    'https://res.cloudinary.com/dyjzfdguj/image/upload/v1736962728/IMG_1457_vmzyk7.jpg',
    'https://res.cloudinary.com/dyjzfdguj/image/upload/v1736962728/IMG_1487_eylkys.jpg',
    'https://res.cloudinary.com/dyjzfdguj/image/upload/v1736962728/IMG_1530_ifbvfk.jpg',
    'https://res.cloudinary.com/dyjzfdguj/image/upload/v1736962728/IMG_9415_ukmioe.jpg'
  ];

  useEffect(() => {
    let randomNumber = sessionStorage.getItem('randomNumber');
    let storedRandomPhoto = sessionStorage.getItem('randomPhoto');

    if (!randomNumber) {
      randomNumber = Math.floor(Math.random() * 100) + 1;
      sessionStorage.setItem('randomNumber', randomNumber);
    }

    if (!storedRandomPhoto) {
      storedRandomPhoto = Math.floor(Math.random() * photoArray.length);
      sessionStorage.setItem('randomPhoto', storedRandomPhoto);
    }

    randomNumber = parseInt(randomNumber, 10);
    storedRandomPhoto = parseInt(storedRandomPhoto, 10);

    setRandomPhoto(storedRandomPhoto); // Set the random photo in state

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
        {randomPhoto !== null && ( // Check if randomPhoto is set
          <img 
            src={photoArray[randomPhoto]} 
            className="App-logo" 
            alt="logo" 
          />
        )}
        <p>{renderedContent}</p>
        <p>This post has been fact-checked by true American patriots.</p>
      </header>
    </div>
  );
}

export default App;
