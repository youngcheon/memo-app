import React, {useEffect} from 'react';
import {ScreenProps} from '@/types';
import {useAppDispatch, useAppSelector} from '@/hooks/useRedux';
import MemoBox from '@/components/MemoBox';
import {addMemo, deleteMemo} from '@/redux/slice/memoSlice';
import * as S from './styled';
import Button from '@/components/Button';

const Home: React.FC<ScreenProps<'Home'>> = ({navigation}) => {
    const dispatch = useAppDispatch();
    const memos = useAppSelector((state) => state.memo.memos);

    useEffect(() => {
        navigation.setOptions({headerTitle: `메모리스트(${memos.length})`});
    }, [memos]);

    const onDelete = (id: string) => {
        dispatch(deleteMemo({id}));
    };

    const onPress = (id: string) => {
        navigation.push('Detail', {id});
    };

    const onAdd = () => {
        dispatch(addMemo());
    };

    return (
        <S.Screen>
            <S.ScrollView>
                {memos.map((memo) => {
                    return (
                        <MemoBox key={memo.id} onDelete={() => onDelete(memo.id)} onPress={() => onPress(memo.id)} {...memo} />
                    );
                })}
            </S.ScrollView>
            <S.ButtonWrapper>
                <Button text="추가" onPress={onAdd} />
            </S.ButtonWrapper>
        </S.Screen>
    );
};

export default Home;
