import style from "./Style/topNav.module.css"
import background from "../assets/task.jpg"
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
                    <button className={style['AddTask']}>AddTask</button>
                </div>
            </div>
          <img className={style['background']} src={background} alt="Background" /> 
    
          <div>
            <h1 className={style['text']}>Schedule Your <br/> Daily Task With <br/><span className={style['mid']}>Best Todo App!</span> </h1>
          </div>
          <img className={style['background']} src={background} alt="Background" /> 
        
        </div>
    )
}
export default TopNav