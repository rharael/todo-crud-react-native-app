import React from 'react';
import { Modal, View, Text, Button, Pressable } from 'react-native';
import styled from 'styled-components/native';

interface ErrorModalProps {
  visible: boolean;
  errorMessage: string | null;
  onRetry: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ visible, errorMessage, onRetry }) => {
  if (!errorMessage) return null;

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <ModalContainer>
        <ModalWrapper>
          <ModalContent>
            <Title>ERRO</Title>
            <ErrorMessage>{errorMessage}</ErrorMessage>
            <TryAgain onPress={onRetry}><TryAgainText>Tentar novamente  </TryAgainText></TryAgain>
          </ModalContent>
        </ModalWrapper>
      </ModalContainer>
    </Modal>
  );
};

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.View`
  width: 300px;
  padding: 30px;
  background-color: #D9D9D9;
  border-radius: 10px;
`;

const ModalContent = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.gray500};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
`;

const ErrorMessage = styled.Text`
  margin-bottom: 40px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray500};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
`;

const TryAgain = styled.TouchableOpacity`
  width: 100%;
  align-items: flex-end;
`;

const TryAgainText = styled.Text`
  color: ${({ theme }) => theme.colors.gray500};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
`;


export default ErrorModal;
