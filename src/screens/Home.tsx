import React, { useContext, useEffect } from "react";
import { View, Text, TextInput, Modal } from "react-native";
import styled from "styled-components/native";
import LoadingGap from '../components/LoadingGap';
import { Header } from "../components/Header";
import Icons from "../assets/Icons";
import { TaskList } from "../components/TaskList";
import { TaskContext } from "../contexts/TaskContext";
import ErrorModal from "../components/ErrorModal";


export default function Home() {
  const { tasks, fetchTasks, error } = useContext(TaskContext);
  const isLoading = tasks === null;

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <Container>
      <Header />
      <Content>
        <InputContainer>
          <Input placeholder="Pesquisar tarefa" />
          <Button>
            <Icons.Search height={25} width={25} />
          </Button>
        </InputContainer>
        <LoadingContainer>
          {isLoading ? <LoadingGap /> : <TaskList />}
          <ErrorModal visible={!!error} errorMessage={error} onRetry={fetchTasks} />
        </LoadingContainer>
      </Content>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
`;
const Content = styled.View`
  flex: 1;
  width: 100%;
  padding-horizontal: 20px;
  background-color: ${({ theme }) => theme.colors.gray100};
`;

const InputContainer = styled.View`
  flex-direction: row;
  margin-top: -26px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray500,
}))`
  flex: 1;
  height: 52px;
  border-radius: 8px;
  border-width: 2px;
  padding: 16px;
  border-color: ${({ theme }) => theme.colors.gray300};
  background-color: ${({ theme }) => theme.colors.gray100};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
`;

const Button = styled.TouchableOpacity`
  height: 53px;
  width: 53px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.purpleDark};
`;

const LoadingContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
