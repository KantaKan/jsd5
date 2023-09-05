import { useState } from "react";

const App = () => {
    const [name,nameSet] = useState('');
    const [text,textBox] = useState('');
const nameHandler = (ent) => {
    nameSet(ent.target.value);
};
const tareaHandler = (textareax) => {
    textBox(textareax.target.value);
}

return (
    <div>
        <input type="text" placeholder="put your name" 
        onChange={(ent) => nameHandler(ent)} />
    <h2>Your name is: {name}</h2>
    <input type="text" placeholder="put your info" onChange={(textareax) => tareaHandler(textareax)} />
    <h2>your info: {text}</h2>
    
    </div>

);
};
export default App;