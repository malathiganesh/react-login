
import { useState } from 'react';
import Loginform from './components/login';
import './App.css';

function App() {
  const adminUser={
    email:'admin@gmail.com',
    password:'admin123'
  }
  const [user,setUser]=useState({name:'',email:''});
  const[error,setError]=useState('');
  const Login=details=>{
    console.log(details);
    if(details.email==adminUser.email && details.password ==adminUser.password){
    console.log('Logged in');
    setUser({
      name:details.name,
      email:details.email
    });
  }else{
console.log('Details does not match');
setError('Details does not match')
  }}
    const Logout=()=>{
      console.log('logout');
      setUser({name:'',email:''});
    
  }
  return (
    <div className="App">
    {(user.email !='') ? (<div className='welcome'> <h1>HI WELCOME,<span>{user.name}</span></h1>
    <button onClick={Logout}>Logout</button></div>) :(
      <Loginform Login={Login} error={error}/>
    )}
    </div>
  );
}

export default App;
