import styled from "styled-components/native";
import Icons from "../assets/Icons";


export function Header() {
  return (
    <Container>
      <ButtonContainer>
        <ButtonExit>
          <Icons.Exit />
        </ButtonExit>
      </ButtonContainer>
      <Icons.LogoBrand height={40} width={120} />
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
  padding-vertical: 52px;
  padding: 52px 15px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray300};
`;

const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;

const ButtonExit = styled.TouchableOpacity`
`;