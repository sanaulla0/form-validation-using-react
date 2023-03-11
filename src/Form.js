import React , {useState} from 'react';
import './Form.css';

const Form = () => {
 const[mail,setMail] = useState(false);
 const[pass,setPass] = useState(false);
 const[confirm,setConfirm] = useState(false);
 const[error,setError] = useState('');
 const[err1,setErr1] = useState('');
 const[err2 , setErr2] = useState('');


 const [formdata ,setFormdata] = useState({
        email :'',
        password: '',
        confirmpassword:'',
 });
 const validForm = (email,password,confirmpassword)=>{
  setError('');
  setErr1('');
  setErr2('');
  if(!email ) {
      setError('email is not empty');
  } else if(email.includes('@') && email.includes('.')) {
      setMail(true);
  } else {
      setError('Please enter a valid email address.');
      setMail(false);
  }
  
    if(!password){
    setErr1('Password must be atlest 8 characters');
      setPass(false);
    }
  else if(password.length >= 8 ){
         setPass(true);
  }
  else{ setErr1('please enter password above 8 characters'); setPass(false);}


if(!confirmpassword) {
   setErr2('Password do not match')
   setConfirm(false);
} else if (password !== confirmpassword) {
 
 setErr2('Password do not match');
 setConfirm(false);
} else {
 setConfirm(true);
}
};
 
 const handelClick =(event)=>{
  event.preventDefault();
  if (error) {
   alert('enter valid email');
 } else if (err1) {
   alert('enter valid password');
 } else if (err2) {
   alert('password is not matched');
 } else {
   alert('submitted successfully');
 }
       
 }
 const handelChange =(e)=>{
         
          const{name,value} = e.target;
          const updated = {...formdata,[name]:value};
         
          setFormdata(updated); 
          const{email,password,confirmpassword} = updated; 
          validForm(email,password,confirmpassword);
 }

  return (
    <div className='main'>

      <form onSubmit={handelClick}>
         <div  >
          <label >
          <h4 className='font'>Email: </h4> 
           <br/>
           <input className='inp' type='email' name='email' value={formdata.email} style={{ borderColor: mail ? "#05e005" : "red" }}                 placeholder='enter your mail'  onChange={handelChange}/>{' '} <br/>
           </label>
           <div>{error ? <span className='error-message'>{error}</span> : null}</div>
       
         </div>
         <div>
            <label >
            <h4 className='font'>Password:</h4> 
             <br/>
           <input className='inp'  type='password' name='password' value={formdata.password}  style={{borderColor: pass ? "#05e005" : "red" }} placeholder='enter your password' onChange={handelChange} />{' '} <br/>
           </label>
           <div>
           {err1 ? <span className='error-message'>{err1}</span> : null}
           </div>
           </div>
           
           <label>
           <h4 className='font'> Confirmpassword:</h4> 
            <br/>
           <div>
           <input className='inp'  type='password' name='confirmpassword' value={formdata.confirmpassword} placeholder='confirm password' onChange={handelChange} style={{borderColor: confirm ? "#05e005" : "red" }} />{' '}<br/>
           </div>
           </label>
           <div>
             {err2 ? <span className='error-message'>{err2}</span> : null}
           </div>

           <div>
           <button type='submit' >submit</button>
         
         </div>
      </form>

    </div>
  )
}

export default Form;