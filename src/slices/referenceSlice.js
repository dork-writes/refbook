import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  dbReferences: [],
  references: [],
}

const filter = (dbReferences, searchQuery) =>
{

  return dbReferences.filter(ref =>
  {
    const { title, description, tag, link } = ref;
    const matchTitle = title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchDesc = description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchTag = tag.toLowerCase().includes(searchQuery.toLowerCase());
    const matchLink = link.toLowerCase().includes(searchQuery.toLowerCase());
    return matchTitle || matchDesc || matchTag || matchLink;
  });
}

const removeFromArray = (array, index) =>
{
  index === 0 ? array.shift() :
  index === array.length - 1 ? array.pop() :
  array.splice(index, 1);
}

const findIndex = (array, elementId) => array.indexOf(array.find(element => element.id === elementId));
 
export const referenceSlice = createSlice({
  name: 'references',
  initialState,
  reducers: {
    
    addReference: (state, { payload }) => {
      let { references, dbReferences } = state;
      const addingReference = {id: nanoid(), ...payload};
      state.references = [...references, addingReference];
      state.dbReferences = [...dbReferences, addingReference];
      localStorage.setItem('refs', JSON.stringify([...dbReferences, addingReference]));
    },

    filterReferences: (state, { payload }) =>
    {
      let { dbReferences } = state;
      payload !== '' ? state.references = filter(dbReferences, payload) : state.references = dbReferences;
    },

    setReferences: (state) =>
    {
      state.dbReferences = JSON.parse(localStorage.getItem('refs'));
      state.references = state.dbReferences;
      state.loading = false;
    },

    editReference: (state, { payload }) =>
    {
      const index_db = findIndex(state.dbReferences, payload.id);
      state.dbReferences[index_db] = payload;
      localStorage.setItem('refs', JSON.stringify(state.dbReferences));
    },

    deleteReference: (state, { payload }) =>
    {
      const index_db = findIndex(state.dbReferences, payload);
      const index = findIndex(state.references, payload);
      removeFromArray(state.dbReferences, index_db);
      removeFromArray(state.references, index);
      localStorage.setItem('refs', JSON.stringify(state.dbReferences));
    }
  }
})

export const { addReference, filterReferences, setReferences, editReference, deleteReference } = referenceSlice.actions

export default referenceSlice.reducer