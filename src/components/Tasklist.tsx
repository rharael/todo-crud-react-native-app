import React, { useContext, useEffect, useMemo } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { TaskContext } from "../contexts/TaskContext";

import Icons from "../assets/Icons";

interface Task {
  id: number;
  task: string;
  isChecked: boolean;
}

export function TaskList() {
  const { tasks, removeTask, toggleTaskCheck, fetchTasks } = useContext(TaskContext);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const sortedTasks = useMemo(() => {
    return tasks.slice().sort((a, b) => Number(a.isChecked) - Number(b.isChecked));
  }, [tasks]);

  const Header = ({ data }: { data: Task[] }) => {
    const checkedDataCounter = useMemo(() => {
      return data.filter((item) => item.isChecked).length;
    }, [data]);

    return (
      <HeaderContainer>
        <Counter>
          <CounterText>Tarefas criadas</CounterText>
          <CreatedValueCircle>
            <CreatedValue>{data.length}</CreatedValue>
          </CreatedValueCircle>
        </Counter>

        <Counter>
          <CounterText>Concluídas</CounterText>
          <ConcludedValueCircle>
            <ConcludedValue>{checkedDataCounter}</ConcludedValue>
          </ConcludedValueCircle>
        </Counter>
      </HeaderContainer>
    );
  };

  const Item = ({ item }: { item: Task }) => (
    <ItemContainer isChecked={item.isChecked} >
      <InfoContainer>
        {item.isChecked ? (
          <Checkbox onPress={() => toggleTaskCheck(item.id, false)}>
            <Icons.CheckCircleFill />
          </Checkbox>
        ) : (
          <Checkbox onPress={() => toggleTaskCheck(item.id, true)}>
            <Icons.CircleRegular />
          </Checkbox>
        )}
        <ItemText isChecked={item.isChecked}>{item.task}</ItemText>
      </InfoContainer>
      <TouchableOpacity onPress={() => removeTask(item.id)}>
        <Icons.TrashRegular />
      </TouchableOpacity>
    </ItemContainer>
  );

  return (
    <Container>
      <Header data={tasks} />
      <FlatList
        data={sortedTasks}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Empty />}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
      />
    </Container>
  );
}

const Empty = () => (
  <EmptyContainer>
    <IconContainer>
      <Icons.ClipboardTextRegular />
    </IconContainer>
    <EmptyText>Você ainda não tem tarefas cadrastradas</EmptyText>
    <EmptySubText>Crie tarefas e organize seus itens a fazer</EmptySubText>
  </EmptyContainer>
);


const Container = styled.View`
  flex: 1;
  width: 100%;
  padding-vertical: 20px;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Counter = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CounterText = styled.Text`
  color: ${({ theme }) => theme.colors.gray500};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
`;

const CreatedValue = styled.Text`
  color: ${({ theme }) => theme.colors.purpleDark};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
`;

const ConcludedValue = styled.Text`
  color: ${({ theme }) => theme.colors.greenDark};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
`;

const CreatedValueCircle = styled.View`
  width: 30px;
  height: 25px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.purpleLight};
  border-radius: 999px;
  margin-left: 8px;
`;

const ConcludedValueCircle = styled.View`
  width: 30px;
  height: 25px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.greenLight};
  border-radius: 999px;
  margin-left: 8px;
`;

const ItemContainer = styled.View<{ isChecked: boolean }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme, isChecked }) => isChecked ? theme.colors.gray100 : theme.colors.gray300};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Checkbox = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

const ItemText = styled.Text<{ isChecked: boolean }>`
  color: ${(props) =>
    props.isChecked ? props.theme.colors.gray500 : props.theme.colors.gray600};
  text-decoration-line: ${(props) =>
    props.isChecked ? "line-through" : "none"};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
`;

const EmptyContainer = styled.View`
  padding-top: 30px;
  width: 100%;
  align-items: center;
`;

const IconContainer = styled.View`
  margin-bottom: 16px;
  width: 100%;
  align-items: center;
`;

const EmptyText = styled.Text`
  color: ${({ theme }) => theme.colors.gray500};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
`;

const EmptySubText = styled.Text`
  color: ${({ theme }) => theme.colors.gray500};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
`;