import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    padding: 25px;
`;

export const DetailSection = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const DeleteButton = styled.TouchableOpacity`
    display: flex;
`;

export const TitleSection = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const Title = styled.Text`
    font-size: 19px;
    font-weight: 900;
`;

export const DateText = styled.Text`
    font-size: 12px;
    color: ${(props) => props.theme.color.grey};
`;

export const Description = styled.Text`
    font-size: 15px;
    max-width: 90%;
    color: ${(props) => props.theme.color.grey};
`;
