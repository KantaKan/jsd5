import React from 'react';

function App() {
  return (
    <div id="app">
      <Header />
      <Content />
      
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
        <span>Turn on / off</span>
        <p>Current Temperature: XXX</p>
      </header>
  );
}

function Content() {
  return (
    <main>
        <div id="temperature">
          <span>temperature Oc</span>
        </div>
      </main>
  );
}

// function Temperature(){
//   return (  
//     <main>
//         <div id="temperature">
//           <span>{ temperature } Oc</span>
//         </div>
//       </main>
//     );
// }

function Footer() {
  return (
    <footer>
        <button>Up</button>
        <button>Down</button>
      </footer>
  );
}

export default App;
