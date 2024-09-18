import React from 'react';
import {Memo} from '@/types';
import * as S from './styled';
import {GestureResponderEvent, TouchableOpacityProps} from 'react-native';
import {format} from 'date-fns';
import DeleteIcon from '@/assets/icons/delete.svg';

interface MemoBoxProps extends Omit<Memo, 'id'>, TouchableOpacityProps {
    onDelete: () => void;
}

const MemoBox: React.FC<MemoBoxProps> = (props) => {
    const handleDelete = (event: GestureResponderEvent) => {
        event.stopPropagation();
        props.onDelete();
    };

    return (
        <S.Container onPress={props.onPress}>
            <S.DetailSection>
                <S.TitleSection>
                    <S.Title numberOfLines={1} ellipsizeMode="tail">
                        {props.title}
                    </S.Title>
                    <S.DateText>{format(props.updatedAt, 'yyyy.MM.dd')}</S.DateText>
                </S.TitleSection>
                <S.Description numberOfLines={1} ellipsizeMode="tail">
                    {props.description}
                </S.Description>
            </S.DetailSection>
            <S.DeleteButton onPress={handleDelete}>
                <DeleteIcon width={20} height={20} />
            </S.DeleteButton>
        </S.Container>
    );
};

export default MemoBox;
