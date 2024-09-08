import { useSelector } from "react-redux";
import { setReferences } from "../../../slices/referenceSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Reference from "./reference";

const References = () => {
  const references = useSelector(({ refState }) => refState.references);
  const dbReferences = useSelector(({ refState }) => refState.dbReferences);
  const loading = useSelector(({ refState }) => refState.loading);
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.searchQuery);

  useEffect(() => {
    dispatch(setReferences());
  }, [dispatch]);

  return (
    <main className="p-4 sm:p-8 md:p-10 lg:p-14 xl:p-20">
      {loading
        ? "Loading..."
        : dbReferences.length === 0 && searchQuery === ""
        ? "Your references will be displayed here..."
        : references.length === 0
        ? "No Results Found"
        : references.map((reference) => (
            <Reference key={reference.id} reference={reference} />
          ))}
    </main>
  );
};

export default References;
