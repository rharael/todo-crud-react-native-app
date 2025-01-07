import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Icons from '../assets/Icons';

interface ShowTaskProps {
  visible: boolean;
  onClose: () => void;
  task: { id: number; task: string } | null;
  onEditTask: () => void;
  onRemoveTask: (id: number) => void;
}

const ShowTask: React.FC<ShowTaskProps> = ({ visible, onClose, task, onEditTask, onRemoveTask }) => {
  if (!task) return null
  return (
    <Modal visible={visible} transparent animationType="slide">
      <ModalOverlay>
        <ModalContent>
          <TitleContainer>
            <Title>Tarefa : {task.id}</Title>
            <CloseButton onPress={onClose}>
              <Icons.Close width={25} height={25} />
            </CloseButton>
          </TitleContainer>
          <TaskDescription>{task.task}</TaskDescription>
          <ButtonContainer>
            <Button onPress={() => onEditTask()}>
              <ButtonText>Editar</ButtonText>
            </Button>
            <Button onPress={() => onRemoveTask(task.id)}>
              <ButtonText>Remover</ButtonText>
            </Button>
          </ButtonContainer>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default ShowTask;

const ModalOverlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.View`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: 15px;
  border-radius: 8px;
  align-items: center;
`;

const TitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray500};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
`;

const TaskDescription = styled.Text`
  margin-vertical: 20px;
  color: ${({ theme }) => theme.colors.gray600};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  text-align: left;
  line-height: 17px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`;

const Button = styled(TouchableOpacity)`
  width: 148px;
  height: 54px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.purpleDark};
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.gray100};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
`;

const CloseButton = styled(TouchableOpacity)`
`;
