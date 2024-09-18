import styled from 'styled-components/native';

export const TitleSection = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
`;

export const ControlSection = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
`;

export const ControlText = styled.Text`
    color: ${(props) => props.theme.color.blue};
    font-weight: 700;
    font-size: 15px;
`;

export const DateText = styled.Text`
    width: 95%;
    text-align: right;
    color: ${(props) => props.theme.color.grey};
`;

export const DescriptionSection = styled.ScrollView`
    width: 100%;
    height: 100%;
    padding: 5%;
`;

export const Description = styled.Text`
    color: ${(props) => props.theme.color.main};
`;

export const Title = styled.Text`
    flex: 4;
    font-weight: 900;
    font-size: 25px;
    color: ${(props) => props.theme.color.main};
`;

export const TitleInput = styled.TextInput`
    flex: 3;
    font-weight: 900;
    font-size: 25px;
`;
