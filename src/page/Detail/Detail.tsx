import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native';
import {ScreenProps} from '@/types';
import {useAppDispatch, useAppSelector} from '@/hooks/useRedux';
import * as S from './styled';
import {format} from 'date-fns';
import useBoolean from '@/hooks/useBoolean';
import {deleteMemo, editMemo} from '@/redux/slice/memoSlice';
import {isObject} from '@/util/is';

const Detail: React.FC<ScreenProps<'Detail'>> = ({navigation, route}) => {
    const {id} = route.params;
    const dispatch = useAppDispatch();
    const memo = useAppSelector((state) => state.memo.memos.find((m) => m.id === id));
    const editMode = useBoolean(false);
    const [editedTitle, setEditTitle] = useState<string>('');
    const [editedDesc, setEditDesc] = useState<string>('');

    useEffect(() => {
        if (!isObject(memo)) {
            navigation.goBack();
            return;
        }
        navigation.setOptions({headerTitle: memo.title});
        setEditTitle(memo.title);
        setEditDesc(memo.description);
    }, [memo]);

    const onEdit = () => {
        if (!isObject(memo)) {
            return;
        }
        dispatch(editMemo({id: memo.id, title: editedTitle, description: editedDesc}));
        editMode.setFalse();
    };

    const onDelete = () => {
        if (!isObject(memo)) {
            return;
        }
        dispatch(deleteMemo({id: memo.id}));
        navigation.reset({routes: [{name: 'Home'}]});
    };

    return (
        <SafeAreaView>
            <S.TitleSection>
                {editMode.value === false ? (
                    <S.Title>{memo?.title}</S.Title>
                ) : (
                    <S.TitleInput defaultValue={memo?.title} onChangeText={(text) => setEditTitle(text)} />
                )}
                {editMode.value === true ? (
                    <S.ControlSection>
                        <TouchableOpacity>
                            <S.ControlText onPress={onEdit}>수정</S.ControlText>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <S.ControlText onPress={() => editMode.setFalse()}>취소</S.ControlText>
                        </TouchableOpacity>
                    </S.ControlSection>
                ) : (
                    <S.ControlSection>
                        <TouchableOpacity>
                            <S.ControlText onPress={() => editMode.setTrue()}>편집</S.ControlText>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <S.ControlText onPress={onDelete}>삭제</S.ControlText>
                        </TouchableOpacity>
                    </S.ControlSection>
                )}
            </S.TitleSection>
            <S.DateText>{!!memo?.updatedAt && format(memo.updatedAt, 'yyyy.MM.dd')}</S.DateText>
            <S.DescriptionSection>
                {editMode.value === true ? (
                    <TextInput multiline defaultValue={memo?.description} onChangeText={(text) => setEditDesc(text)} />
                ) : (
                    <Text>{memo?.description}</Text>
                )}
            </S.DescriptionSection>
        </SafeAreaView>
    );
};

export default Detail;
