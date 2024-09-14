import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    display: flex;
    background-color: ${(props) => props.theme.color.main};
    width: 100%;
    padding: 20px;
    border-radius: 10px;
`;

export const Text = styled.Text`
    font-weight: 700;
    text-align: center;
    color: ${(props) => props.theme.color.white};
`;
