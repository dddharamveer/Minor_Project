import classes from './ListSaveText.module.css'
const ListSaveText=(props)=>{
    return <div className={classes.listItem}>
        <p>{props.text}</p>
    </div>
}

export default ListSaveText;
