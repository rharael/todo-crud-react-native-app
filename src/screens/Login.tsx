import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components/native';

const LoginScreen = () => {
  const theme = useTheme();

  return (
    <Container>
      <Form>
        <Input
          placeholder="Username"
          placeholderTextColor={theme.colors.gray600}
        />
        <Input
          placeholder="Password"
          placeholderTextColor={theme.colors.gray600}
          secureTextEntry
        />
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

const Form = styled(View)`
  width: 100%;
  max-width: 400px;
`;

const Input = styled(TextInput)`
  height: 50px;
  border-radius: 8px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.gray300};
  padding: 10px;
  margin-bottom: 15px;
  font-family: ${({ theme }) => theme.fonts.input};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
`;

const LoginButton = styled(View)`
  background-color: ${({ theme }) => theme.colors.purpleDark};
  padding: 12px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.input};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  color: white;
  font-weight: bold;
`;

export default LoginScreen;
