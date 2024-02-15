
const Button = ({text,className,onClick}) => {
  return (
    <button onClick={onClick} className={`${className}`}>{text}</button>
  )
}

export default Button