const Button = ({ color,text }) => {
    return (
        <Button style={{ backgroundColor:color}}>{text}</Button>
    )
}
// Button.defaultProps ={
//     color:'red',
//     text:'Add',
// }
export default Button