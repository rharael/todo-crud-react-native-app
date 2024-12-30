import React, {useState} from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Icons from '../assets/Icons';


const LoginScreen = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Container>
      <IconHeader>
        <Icons.LogoBrand height={40} width={110}/>
      </IconHeader>
      <Form>
        <Input placeholder="Username" />
        <PasswordWrapper>
          <PasswordInput placeholder="Password" secureTextEntry={!isPasswordVisible} />
          <ToggleIcon onPress={()=>setIsPasswordVisible((visible)=>!visible)}>
          {isPasswordVisible ? <Icons.EyeClosed /> : <Icons.Eye /> }
          </ToggleIcon>
        </PasswordWrapper>
        <LoginButton>
          <ButtonText>Login</ButtonText>
        </LoginButton>
      </Form>
    </Container>
  );
};

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: 20px;
`;
const IconHeader = styled(View)`
  margin-bottom: 81px;
`;

const Form = styled(View)`
  width: 100%;
  max-width: 400px;
  gap: 15px;
`;

const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray600,
}))`
  height: 52px;
  border-radius: 8px;
  border-width: 2px;
  padding: 10px;
  border-color: ${({ theme }) => theme.colors.gray300};
  background-color: ${({theme}) => theme.colors.gray100};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
`;

const PasswordWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 52px;
`;

const PasswordInput = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray600,
}))`
  flex: 1;
  height: 52px;
  border-radius: 8px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.gray300};
  background-color: ${({theme}) => theme.colors.gray100};
  padding: 10px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
`;

const ToggleIcon = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.purpleDark};
  justify-content: center;
  align-items: center;
  height: 52px;
  width: 52px;
  margin-left: 8px;
  border-radius: 8px;
`;

const LoginButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.purpleDark};
  padding: 12px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
  color: ${({theme}) => theme.colors.gray100};
`;

export default LoginScreen;
