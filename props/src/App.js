import React from 'react';
import './App.css';
import Profile from './profile/profile';
import image from './image/photo.jpg';


function App() {
  const handleAlert=(name)=>{
      alert (`profile user name is ${name} `)

  }
  
  return (
    <div className="App">
     <Profile
     FullName='dhoha'
     bio='fullstack-devellopement'
     professionn='develloppeur'
     handleAlert={handleAlert}
     >
    {image}
     
     </Profile>
    
     
    </div>
  );
}

export default App;
