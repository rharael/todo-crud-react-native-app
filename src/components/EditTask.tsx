import React, { useState, useEffect } from 'react';
import { Modal, TouchableOpacity, TextInput } from 'react-native';
import styled from 'styled-components/native';
import Icons from '../assets/Icons';

interface Task {
  id: number;
  task: string;
  isChecked: boolean;
}

interface EditTaskProps {
  visible: boolean;
  task: Task | null;
  onEditTask: (task: Task) => void;
  onClose: () => void;
}

const EditTask: React.FC<EditTaskProps> = ({ visible, task, onEditTask, onClose }) => {
  const [taskValue, setTaskValue] = useState(task?.task || '');

  useEffect(() => {
    if (task) {
      setTaskValue(task.task);
    }
  }, [visible]);

  const handleEditTask = () => {
    if (task && taskValue.trim()) {
      onEditTask({ ...task, task: taskValue.trim() });
      onClose();
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <ModalOverlay>
        <ModalContent>
          <TitleContainer>
            <Title>Editar Tarefa</Title>
            <CloseButton onPress={onClose}>
              <Icons.Close width={25} height={25} />
            </CloseButton>
          </TitleContainer>
          <InputContainer>
            <TaskInput
              placeholder="Edite sua tarefa"
              value={taskValue}
              onChangeText={setTaskValue}
              multiline
            />
            <AddButton active={!!taskValue.trim()} onPress={handleEditTask}>
              <Icons.PlusCircleRegular />
            </AddButton>
          </InputContainer>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};


export default EditTask;

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
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.gray500};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
`;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const TaskInput = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray500,
}))`
  flex: 1;
  min-height: 58px;
  padding-vertical: 10px;
  padding-horizontal: 18px;
  background-color: ${({ theme }) => theme.colors.gray100};
  border: 2px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray900};
`;

const AddButton = styled(TouchableOpacity) <{ active: boolean }>`
  width: 58px;
  height: 58px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.purpleDark : theme.colors.gray500};
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 8px;
`;

const CloseButton = styled.TouchableOpacity`
`;
