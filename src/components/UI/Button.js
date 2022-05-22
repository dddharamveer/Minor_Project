import classes from './Button.module.css'
const Button= (props)=>{
  return   <button {...props.button} className={classes.Button} >
        {props.children}
    </button>
}

export default Button;
