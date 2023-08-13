import { useDispatch } from 'react-redux'
import { addReference, filterReferences } from '../../slices/referenceSlice'
import { updateQuery } from '../../slices/searchSlice';
import RefForm from './subcomponents/RefForm'


const AddForm = ({ showForm, setForm }) => {
    
    const dispatch = useDispatch();
    
    const initialValues = { title: '', description: '', tag: '', link: '' }

    const handleSubmit = (reference) =>
    {
        dispatch(addReference(reference)); 
        dispatch(filterReferences(''));
        dispatch(updateQuery(''));
    }    

    return <RefForm initialValues={ initialValues } showForm={ showForm } setForm={ setForm } submitFunction={ handleSubmit } />;
}

export default AddForm