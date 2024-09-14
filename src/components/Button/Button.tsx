import React from 'react';
import * as S from './styled';
import {TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
    text: string;
}

const Button: React.FC<Props> = ({text, ...props}) => {
    return (
        <S.Container {...props}>
            <S.Text>{text}</S.Text>
        </S.Container>
    );
};

export default Button;
