
import style from "./Style/login.module.css"
import {useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleLogin = async () =>{
    const payload = {
      
       "email": email,
         "password": password
    }
    try{
      const response = await axios.post("http://localhost:8080/login",payload,{ 
        header: {
          'Content-Type': 'application/json'
        } 
      });
      console.log(response)
      setEmail("")
      setPassword("")
      alert("Successful login")
    }catch(error){
      console.error("error login challenge:" ,error)
      navigate ("/addTask")
    }
  }
    
 return(

    <div>
      <div className={style['form']}>
        <div className={style['input']}> 
        <div className={style['font']}>LogIn form</div>
            <label className={style['export']}>email</label>
           <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="email"/>

            <label className={style['export']}>password</label>
           <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)} placeholder="password"/>
          <button className={style['submit']} onClick={handleLogin}>Submit</button>
        </div>

      </div>
       
    </div>

 )
}

export default Login