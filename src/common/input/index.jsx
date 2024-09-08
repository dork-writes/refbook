import { Field } from 'formik'
import ErrorMessage from '../error-message/index.jsx'

const Input = ({ name = '', inputType = 'text', errorMsg = null, rows = 1 }) => {
  return (
    <article>
        <label className='text-orange-300'><span className='text-purple-500'>const</span> { name } =&nbsp;</label>    
        <Field autoComplete="off" placeholder = {`// ${name} goes here`} name = { name } as = { rows > 1 ? 'textarea' : 'input' } type={inputType} className={`${ errorMsg ? 'border-red-700' : 'border-green-600' } pt-1 bg-transparent focus:outline-0 w-[95%] border-b text-green-600 resize-none transition-all`} rows = {rows}/>;
        <ErrorMessage errorMsg={errorMsg ? errorMsg : ''} />
    </article>  
  )
}

export default Input;
