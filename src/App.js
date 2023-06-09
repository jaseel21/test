
import React from 'react';
import {Firebase} from "./firebase/config"
function App() {
  return (
    <div className="App">
      <button onClick={()=>{
        Firebase.firestore().colloction("products").get().then(snapshot=>{
          snapshot.forEach((obj)=>{
            console.log(obj.data());
          })
        })
      }} >fire</button>

    </div>
  );
}

export default App;
