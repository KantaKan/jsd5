import React, { useState } from 'react';

function App() {
    const [choices,setChoices] = useState()

  const handleClick = (value) => {
    setChoices(value);
  };

  return (
    <div>
      <button onClick={() => handleClick('2')}>Fullname</button>
      <button onClick={() => handleClick('Age')}>Age</button>
      <button onClick={() => handleClick('Picture')}>Picture</button>
      <DisplayInfo choices={choices}/>
    </div>
  );
}

function DisplayInfo(props) {

  let contents;
  if (props.choices === '2') {
    contents = <h2>Haerin K.</h2>;
  } else if (props.choices === 'Age') {
    contents = <h2>17</h2>;
  } else if (props.choices === 'Picture') {
    contents = <img src="https://preview.redd.it/230628-haerin-x-dior-jewelry-update-v0-gerdpdwx9q8b1.jpg?width=1080&crop=smart&auto=webp&s=f0c7a32fd074f70bc1631dcffda9a726627462cb" alt="Placeholder" />;
  } else {
    contents = <p>Please select an option.</p>;
  }

  return (
    <div>
      {contents}
    </div>
  );
}

export default App;
