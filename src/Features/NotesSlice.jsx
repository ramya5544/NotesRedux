import { createSlice } from '@reduxjs/toolkit';

const notesSlice =createSlice ({

    name: 'notes',
    initialState: [],

    reducers: {
        addNote: (state, action) => {
            state.push(action.payload);
        },

        editNote: (state, action) => {
            const { id, content } = action.payload;
            const noteToEdit = state.find((note) => note.id === id);

            if (noteToEdit) {
                noteToEdit.content = content;
            }

        },

        deleteNote: (state, action) => {
            const idToDelete = action.payload;
            return state.filter((note) => note.id !== idToDelete);
        },
    },
});

export const { addNote, editNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;