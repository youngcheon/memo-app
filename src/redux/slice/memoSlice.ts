import uuid from 'react-native-uuid';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Memo} from '@/types';

interface MemoState {
    memos: Memo[];
}

const initialState: MemoState = {
    memos: [{id: '1', title: 'test1', description: '123', createdAt: new Date(), updatedAt: new Date()}],
};

const memoSlice = createSlice({
    name: 'memo',
    initialState,
    reducers: {
        addMemo: (state) => {
            const newMemo: Memo = {
                id: uuid.v4().toString(),
                title: '제목없음',
                description: '내용없음',
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            state.memos.push(newMemo);
        },

        editMemo: (state, action: PayloadAction<Pick<Memo, 'id' | 'title' | 'description'>>) => {
            const target = state.memos.find((memo) => memo.id === action.payload.id);

            if (target) {
                target.title = action.payload.title;
                target.description = action.payload.description;
                target.updatedAt = new Date();
            }
        },

        deleteMemo: (state, action: PayloadAction<Pick<Memo, 'id'>>) => {
            state.memos = state.memos.filter((memo) => memo.id !== action.payload.id);
        },
    },
});

export const {addMemo, editMemo, deleteMemo} = memoSlice.actions;
export default memoSlice.reducer;
