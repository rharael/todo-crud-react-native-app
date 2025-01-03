import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import Icons from '../assets/Icons';
import { AuthNavigatorRoutesProps } from '../routes/auth.routes';
import { useNavigation } from '@react-navigation/native';
import axios, { AxiosError } from 'axios';


interface CustomTextInputProps extends TextInputProps {
  hasError?: boolean;
}


const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [credentialError, setcredentialError] = useState(false);
  const navigator = useNavigation<AuthNavigatorRoutesProps>();
  

async function handleLogin() {
  console.log("Tentativa Login")
  setcredentialError(false);

  try {
    const response = await axios.post(`http://192.168.1.5:3000/login`, { username, password });
    navigator.navigate('Home');
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log('Erro Axios:', error);
      if (error.response) {
        const errorMessage = error.response.data.message;
        console.log('Mensagem de erro:', errorMessage);
        if (error.response && error.response.data) {
          setcredentialError(true);
        }
      } else {
        console.log('Erro sem resposta da API:', error.message);
      }
    } else {
      console.log('Erro inesperado:', error);
    }
  }
}

  return (
    <Container>
      <IconHeader>
        <Icons.LogoBrand height={40} width={110} />
      </IconHeader>
      <Form>
        <InputWrapper>
          <Input
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            hasError={credentialError}
          />
          {credentialError && <ErrorText>Username inválido</ErrorText>}
        </InputWrapper>
        <InputWrapper>
          <PasswordWrapper>
            <PasswordInput
              placeholder="Password"
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={setPassword}
              hasError={credentialError}
            />
            <ToggleIcon onPress={() => setIsPasswordVisible((visible) => !visible)}>
              {isPasswordVisible ? <Icons.EyeClosed /> : <Icons.Eye />}
            </ToggleIcon>
          </PasswordWrapper>
          {credentialError && <ErrorText>Senha inválida</ErrorText>}
        </InputWrapper>
        <LoginButton onPress={handleLogin}>
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
`;

const InputWrapper = styled(View)`
  width: 100%;
  margin-vertical: 7px;
`;

const Input = styled(TextInput).attrs<CustomTextInputProps>(({ theme, hasError }) => ({
  placeholderTextColor: theme.colors.gray500,
}))`
  height: 52px;
  border-radius: 8px;
  border-width: 2px;
  padding: 10px;
  border-color: ${({ theme, hasError }) => (hasError ? theme.colors.danger : theme.colors.gray300)};
  background-color: ${({ theme }) => theme.colors.gray100};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
`;

const PasswordWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 52px;
`;

const PasswordInput = styled(TextInput).attrs<CustomTextInputProps>(({ theme, hasError }) => ({
  placeholderTextColor: theme.colors.gray500,
}))`
  flex: 1;
  height: 52px;
  border-radius: 8px;
  border-width: 2px;
  border-color: ${({ theme, hasError }) => (hasError ? theme.colors.danger : theme.colors.gray300)};
  background-color: ${({ theme }) => theme.colors.gray100};
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
  margin-top: 7px;
`;

const ButtonText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
  color: ${({ theme }) => theme.colors.gray100};
`;

const ErrorText = styled(Text)`
  color: ${({ theme }) => theme.colors.danger};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  margin-top: 5px;
  margin-bottom: -7px;
`;

export default LoginScreen;
