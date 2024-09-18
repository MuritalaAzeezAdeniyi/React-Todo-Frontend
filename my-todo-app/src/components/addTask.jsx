import style from "./Style/addTask.module.css"
import { useEffect, useState } from "react"
import axios from 'axios'

const AddTask = () => {
   
    const [allTodos,setTodos] = useState([])
    const [title,setTitle] = useState ('')
    const [description,setDescription] = useState ('')
    const [email,setEmail] = useState('')
    
    useEffect(() =>{
   
   fetchTodos()
    },[])
    
    
    const fetchTodos = async () =>{
        try {
            const response = await axios.get("http://localhost:8080/getTask?email=Taye@gmail.com");
            setTodos(response.data);
        } catch(error){
            if(error.response){
            console.error("Error fetching todos:", error.response.data)
        } 

        else{

        }
         
        }
    } 
    
    
    const handleAddTodo = async (e) => {
    
        try{
            
            const paylord = {
                "title": title,
                "description": description,
                "userEmail": email
            };
            console.log(paylord)
            const response = await axios.post('http://localhost:8080/addTask', paylord, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response)
            setTitle('') 
            setDescription('')
            setEmail('')
            fetchTodos()
           alert("Successfully signUp")
        }catch(error){
            console.error("error adding challenge:",error);
        }
     }
   
     return(
        <div className={style['App']}>
            <h1>Best Todos App</h1>

            <div className={style['wrapper']}>
             
              <div className={style['input']}>
                <div className={style['input-item']}>
                  <label>Title</label>
                  <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="what's the task title?"/>
                </div>
                <div className={style['input-item']}>
                  <label>Description</label>
                  <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="what's the task description?"/>
                </div>
               <div className={style['input-item']}>
                  <label>Email</label>
                  <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
                </div>
                <div className={style['input-item']}>
                  <button type="button" onClick={handleAddTodo} className={style['primaryBtn']}>Add</button>
                </div>
              </div>
              <div className={style['btn-area']}>
                  <button>Todo</button>
              </div>
              <div className={style['todo-list']}>
                <div className={style['todo-list-item']}>
                    <ul>
                        {allTodos.map((todo,index)=>(
                            <li key={index}>
                                <h3>{todo.title}</h3>
                                <p>{todo.description}</p>
                                <p>{todo.email}</p>
                            </li>
                        ))}
                    </ul>
                </div>
              </div>

            </div>




        </div>
    )
}

export default AddTask