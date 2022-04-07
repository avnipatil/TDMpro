import './Button.css'
const Button =(props)=>{
    return(
        <>
        <button className='Loadmorebtn submit-btn' onClick={props.function}>{props.btnname}</button>
        </>
    )
}
export default Button;