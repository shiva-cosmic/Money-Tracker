import React, {forwardRef} from 'react'

function Input({label, className, type = 'text', onChange, ...props}, ref) {
  return (
    <div>
        {label && <label>{label}</label>}
        <input type={type} onChange={onChange} className={className} {...props} ref={ref}/>
    </div>
  )
}

export default forwardRef(Input)