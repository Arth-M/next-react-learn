import { useState } from 'react';
import '../css/styling.css';
import LikeButton from './like-button';

      // <script type="text/javascript">

    //Before React
      // // Select the div element with 'app' id
      // const app = document.getElementById('app');
      // // Create a new H1 element
      // const header = document.createElement('h1');
      // // Create a new text node for the H1 element
      // const text = 'Develop. Preview. Ship.';
      // const headerContent = document.createTextNode(text);
      // // Append the text to the H1 element
      // header.appendChild(headerContent);
      // // Place the H1 element inside the div
      // app.appendChild(header);

    // With React
      // const app = document.getElementById('app');

  function Header(props) { // or function Header({title}) => using destructuring
    let title = props.title;
    return <h1 className="centerText">{ title ? `Cool ${title}` : 'Default title'}</h1>;
  }


  export default function Homepage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];


    function handleClick() {
      setLikes(likes+1);
    }

    return (<>
      <div> <Header title="React"/> </div>
      <div><Header title="oh jeez" /> </div>
      <ul>
        {names.map((name) => (
        <li key={name}>{name}</li>
        ))}
        </ul>
        <LikeButton />
      </>
    );
  }

      // const root = ReactDOM.createRoot(app);
      // root.render(<Homepage />);
