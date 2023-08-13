import { Field } from 'formik'

const FormField = ({ name, inputType, errors, touched }) => {
  return (
    <article>
        <label className='text-orange-300'><span className='text-purple-500'>const</span> { name } =&nbsp;</label>    
        <Field autoComplete="off" placeholder = {`// ${name} goes here`} name = { name } as = { inputType } className={`${ touched && errors ? 'border-red-700' : 'border-green-600' } pt-1 bg-transparent focus:outline-0 w-[95%] border-b text-green-600 resize-none transition-all`} rows = {4}/>;
        <p className={`text-xs text-red-700 ${inputType === 'textarea' ? '' : 'py-1'}`}>{errors && touched ? errors : <span>&nbsp;</span>}</p>
    </article>  
  )
}

export default FormField
