import usePost from "./hook/usePost";
import "./App.css";

function App() {
  const { get, remove } = usePost();
  const data = get();
  console.log(data);
  
  return (
    <div id="app">
      <h1>Enter Data</h1>
      <button onClick={() => remove("id-002")}>delete002</button>
      {/* <PostContainer />
      <FeedSection /> */}
      
    </div>
  );
};

// function PostContainer() {
//   return (


//   );
// }

// const FeedSection = () => {
//   return (
    
//   );
// };

// const Post = () => {
//   return (
    
//   );
// };

export default App;
