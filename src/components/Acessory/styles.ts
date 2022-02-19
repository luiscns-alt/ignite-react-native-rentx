import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_primary};

    min-width: 26%;
    flex: 1;

    /* margin-right: 8px;
    margin-bottom: 8px; */
    margin: 0 8px 8px 0;
`;
export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(13)}px;
`;
