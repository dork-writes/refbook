import { useDispatch, useSelector } from "react-redux";
import {
  editReference,
  filterReferences,
} from "../../../../../slices/referenceSlice";
import { RefForm } from "../../../../../components";

const EditForm = ({ reference, showForm, setForm }) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.searchQuery);

  const handleSubmit = (reference) => {
    dispatch(editReference(reference));
    dispatch(filterReferences(searchQuery));
  };

  return (
    <RefForm
      initialValues={reference}
      showForm={showForm}
      setForm={setForm}
      submitFunction={handleSubmit}
    />
  );
};

export default EditForm;
