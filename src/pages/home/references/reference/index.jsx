import { useReducer } from "react";
import { deleteReference } from "../../../../slices/referenceSlice";
import { useDispatch } from "react-redux";
import copy from "../../../../assets/copy.svg";
import EditForm from "./edit-form";

const Reference = ({ reference }) => {
  const { id, title, description, tag, link } = reference;
  const dispatchRedux = useDispatch();

  const initialState = {
    copied: false,
    insideRef: false,
    showForm: false,
    deleteAlert: false,
  };

  const reducer = (state, { type, payload }) => {
    return type === "TOGGLECOPY"
      ? { ...state, copied: payload }
      : type === "TOGGLEFORM"
      ? { ...state, showForm: !state.showForm }
      : type === "TOGGLECOPYBUTTON"
      ? { ...state, insideRef: payload }
      : type === "TOGGLEDELETE"
      ? { ...state, deleteAlert: !state.deleteAlert }
      : state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { copied, insideRef, showForm, deleteAlert } = state;

  const copyLink = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(link);
    dispatch({ type: "TOGGLECOPY", payload: true });
  };

  const deleteRef = () => {
    dispatchRedux(deleteReference(id));
    dispatch({ type: "TOGGLEDELETE" });
  };

  const CopyButton = () => (
    <button tabIndex={-1} title={"Copy Link"}>
      <figure
        onClick={copyLink}
        className={` hidden lg:flex py-1 px-2 border text-sm space-x-2 text-slate-400 border-slate-600 rounded-sm ${
          copied ? "bg-slate-800" : ""
        } ${insideRef ? "opacity-100" : "opacity-0"} transition-all`}
      >
        <p>{copied ? "Copied!" : "Copy Ref"}</p>
        <img alt="copy" src={copy} width="25rem" />
      </figure>
    </button>
  );

  return (
    <>
      <article
        onMouseEnter={() =>
          dispatch({ type: "TOGGLECOPYBUTTON", payload: true })
        }
        onMouseLeave={() => {
          setTimeout(
            () => dispatch({ type: "TOGGLECOPY", payload: false }),
            100
          );
          dispatch({ type: "TOGGLECOPYBUTTON", payload: false });
        }}
        className="bg-zinc-800 hover:bg-zinc-900 hover:bg-opacity-80 lg:hover:scale-105 rounded-sm p-5 pb-7 space-y-2.5 transition-all my-4 lg:mt-0"
      >
        <div className="float-right space-x-2">
          <CopyButton />
          <small className="text-sm rounded-sm bg-slate-600 px-2.5 py-1.5 float-right">
            {tag}
          </small>
        </div>
        <h3 className="text-2xl">{title}</h3>
        <p className="pb-4">{description}</p>
        <a
          className="px-2 rounded-sm shadow-sm py-1 bg-teal-600 hover:bg-teal-700 active:bg-teal-600 transition-all"
          tabIndex={-1}
          href={link}
        >
          Go to Ref
        </a>
        {deleteAlert ? (
          <div className="float-right space-y-1 transform -translate-y-6 transition-all">
            <p className="mx-auto w-fit">Are You Sure?</p>
            <div className="space-x-2">
              <button
                onClick={deleteRef}
                className="bg-sky-500 hover:bg-sky-600 active:bg-sky-500 px-2.5 rounded-sm shadow-sm transition-all"
              >
                Yes
              </button>
              <button
                onClick={() => dispatch({ type: "TOGGLEDELETE" })}
                className="bg-red-500 hover:bg-red-600 active:bg-red-500 px-2.5 rounded-sm shadow-sm transition-all"
              >
                No
              </button>
            </div>
          </div>
        ) : (
          <div className="space-x-2 float-right transform translate-y-0 transition-all">
            <button
              onClick={() => dispatch({ type: "TOGGLEFORM" })}
              className="bg-sky-500 hover:bg-sky-600 active:bg-sky-500 px-2 rounded-sm shadow-sm transition-all"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch({ type: "TOGGLEDELETE" })}
              className="bg-red-500 hover:bg-red-600 active:bg-red-500 px-2 rounded-sm shadow-sm transition-all"
            >
              Delete
            </button>
          </div>
        )}
      </article>
      <EditForm
        reference={reference}
        showForm={showForm}
        setForm={() => dispatch({ type: "TOGGLEFORM" })}
      />
    </>
  );
};

export default Reference;
