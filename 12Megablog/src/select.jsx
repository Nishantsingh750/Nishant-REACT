import React from 'react'

function select(
    {
        options,
        label,
        className,
        ...props
    },ref
) {
    const id = useId()
  return (
    <div>
    {label && <label htmlFor={id} className=''></label>}
    <select 
    {...props}
    id={id}
    ref={ref}
    className={``}
    >
        {options?.map((option)=>(
            <option key={option} value ={option}>
                {option}
            </option>
        ))}
    </select>

    </div>
  )
}

export default React.forwardRef(select)