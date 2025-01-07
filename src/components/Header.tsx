import styled from "styled-components/native";
import Icons from "../assets/Icons";
import { useAuth } from '../contexts/AuthContext';

export function Header() {
  const { logout } = useAuth();
  return (
    <Container>
      <ButtonContainer>
        <ButtonExit onPress={()=>logout()}>
          <Icons.Exit />
        </ButtonExit>
      </ButtonContainer>
      <Icons.LogoBrand height={40} width={120} />
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
  padding: 52px 12px;
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