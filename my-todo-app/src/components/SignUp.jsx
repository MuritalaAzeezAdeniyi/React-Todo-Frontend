
import style from "./Style/topNav.module.css"
import { useState} from "react"
import{useNavigate} from "react-router-dom"
import axios from "axios"


const SignUp = () =>{

const [lastName,setLastName] = useState("")
const [firstName,setFirstName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [phoneNumber,setPhoneNumber] = useState("")
const navigate = useNavigate()
  
  const handleSignUp = async () =>{
     try{
        const payload = {
          
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "phoneNumber": phoneNumber
          } 

          

      const response = await axios.post("http://localhost:8080/signUp",payload,{

        header: {
          'Content-Type': 'application/json'
        } 
      })
     setFirstName("")
     setLastName("")
     setEmail("")
     setPassword("")
     setPhoneNumber("")
     alert("Successfully SignUp")

    }catch(error){
      console.log(error)
    }
    navigate('/login')
  }
   
  return (
    <div className={style['font']}>
          <div className={style['form']}>
        <div className={style['input']}> 
        <div className={style['header']}><p>SignUp</p></div>
        <div className={style['underline']}></div>
           <label className={style['export']}>firstName</label>
            <input type="text" value={firstName} onChange={(e) =>setFirstName(e.target.value)} placeholder="text"/>
         
            <label className={style['export']}>lastName</label>
           <input type="text" value={lastName} onChange={(e) =>setLastName(e.target.value)} placeholder="text"/>
          
            <label className={style['export']}>email</label> 
            <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="email"/>
         
            <label password className={style['export']}>password</label>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="password"/>
      
            <label className={style['export']}>phoneNumber</label>
            <input type="phoneNumber" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} placeholder="phoneNumber"/>
            <div className={style['submit']} onClick={handleSignUp} >submit</div>
         </div> 
          </div>
    </div>
    )
} 

export default SignUp