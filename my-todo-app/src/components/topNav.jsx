import style from "./Style/topNav.module.css"
import background from "../assets/task.jpg"
import image from "../assets/foot2.avif"
import photo from "../assets/foot3.avif"
import todo from "../assets/todo1.jpg"
import { Link } from "react-router-dom"
const TopNav = () => {
    return (
        <div>
             <div className={style['top-nav']}>
                <div className={style['first-set']}>
                    <div className={style['logo']}>BestToDoApp</div>
                </div>
                <div className={style['second-set']}>
                    {/* <Link to="/login"> */}
                        <button className={style['login']}>LogIn</button>
                    {/* </Link> */}
                    {/* <Link to="/signUp"> */}
                        <button className={style['sign-up']}>SignUp</button>
                    {/* </Link> */}
                    
                </div>
            </div>
          <img className={style['background']} src={background} alt="Background" /> 
    
          <div>
            <h1 className={style['text']}>Schedule Your <br/> Daily Task With <br/><span className={style['mid']}>Best Todo App!</span> </h1>
            <button className={style['AddTask']}>AddTask</button>
            <div className={style['midtt']}><h5 className={style['midtext']}>Explore idea collection</h5></div>
           <br/>
          
          </div>
          <img className={style['background']} src={background} alt="Background" /> 
             
             <br/>
             <div className={style['midImag']}> <img className={style['image']} src={image} alt ={image} />
             
               <img className={style['photo']} src={photo} alt={photo}/>
               <div className={style['midphoto']}><img className={style['todo']} src={todo} alt={todo}/></div>
             </div>
        </div>
    )
}
export default TopNav