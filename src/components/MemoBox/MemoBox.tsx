import React from 'react';
import {Memo} from '@/types';
import * as S from './styled';
import {Text, TouchableOpacityProps} from 'react-native';
import {format} from 'date-fns';

interface MemoBoxProps extends Omit<Memo, 'id'>, TouchableOpacityProps {
    onDelete: () => void;
}

const MemoBox: React.FC<MemoBoxProps> = (props) => {
    return (
        <S.Container>
            <S.DetailSection onPress={props.onPress}>
                <S.TitleSection>
                    <S.Title>{props.title}</S.Title>
                    <S.DateText>{format(props.updatedAt, 'yyyy.MM.dd')}</S.DateText>
                </S.TitleSection>
                <S.Description numberOfLines={1} ellipsizeMode="tail">
                    {props.description}
                </S.Description>
            </S.DetailSection>
            <S.DeleteButton onPress={props.onDelete}>
                <Text>X</Text>
            </S.DeleteButton>
        </S.Container>
    );
};

export default MemoBox;
