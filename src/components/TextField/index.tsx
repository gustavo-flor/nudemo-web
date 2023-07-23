import { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react'

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  placeholder: string
  value: string
}

const TextField = ({placeholder, value, ...props}: Props) => {
  const [focused, setFocused] = useState(false)
  const identifier = props.id || `text-field-${new Date().getTime()}`

  return (
    <>
      <div className='flex flex-col'>
        <label 
          htmlFor={identifier} 
          className={`text-gray-500 absolute ml-2 cursor-text transition-all ${focused || value.length ? 'mt-0 text-xs' : 'mt-7 text-sm'}`}
        >
          {placeholder}
        </label>
        <input 
          {...props}
          value={value}
          onFocus={() => setFocused(true)} 
          onBlur={() => setFocused(false)}
          className='mt-4 p-2 border-b' 
          id={identifier}
          type='text'
        />
      </div>
    </>
  )
}

export default TextField
