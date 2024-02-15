
const Label = ({labelName, className,idfor }) => {
  return (
 
        <label  className={`${className} font-dm text-base font-bold text-primaryColor block`} for={idfor}>{labelName}</label>
   
  )
}

export default Label