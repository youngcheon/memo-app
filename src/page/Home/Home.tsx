import React, {useEffect} from 'react';
import {ScreenProps} from '@/types';
import {useAppDispatch, useAppSelector} from '@/hooks/useRedux';
import MemoBox from '@/components/MemoBox';
import {addMemo, deleteMemo} from '@/redux/slice/memoSlice';
import * as S from './styled';
import Button from '@/components/Button';
import {ScrollView} from 'react-native';

const Home: React.FC<ScreenProps<'Home'>> = ({navigation}) => {
    const dispatch = useAppDispatch();
    const memos = useAppSelector((state) => state.memo.memos);

    useEffect(() => {
        navigation.setOptions({headerTitle: `메모리스트(${memos.length})`});
    }, [memos, navigation]);

    return (
        <S.Screen>
            <ScrollView>
                {memos.map((memo) => {
                    return (
                        <MemoBox
                            key={memo.id}
                            onDelete={() => dispatch(deleteMemo({id: memo.id}))}
                            onPress={() => {
                                console.log('click');
                            }}
                            {...memo}
                        />
                    );
                })}
            </ScrollView>
            <S.ButtonWrapper>
                <Button text="추가" onPress={() => dispatch(addMemo())} />
            </S.ButtonWrapper>
        </S.Screen>
    );
};

export default Home;
