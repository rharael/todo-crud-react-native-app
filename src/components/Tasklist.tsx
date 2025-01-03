import React, { useContext, useEffect } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { TaskContext } from "../contexts/TaskContext";

interface Task {
  id: number;
  task: string;
  isChecked: boolean;
}

export function TaskList() {
  const { tasks, removeTask, toggleTaskCheck, editTask, fetchTasks } = useContext(TaskContext);
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const Empty = () => (
    <View style={{ padding: 20, alignItems: 'center' }}>
      <Text style={{ color: 'gray' }}>No tasks available</Text>
    </View>
  );

  const Header = ({ data }: { data: Task[] }) => (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Tasks: {data.length}</Text>
    </View>
  );

  const Item = ({ item }: { item: Task }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <TouchableOpacity onPress={() => toggleTaskCheck(item.id)} style={{ marginRight: 10 }}>
        <Text style={{ textDecorationLine: item.isChecked ? 'line-through' : 'none' }}>
          {item.task}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeTask(item.id)} style={{ marginLeft: 'auto', marginRight: 10 }}>
        <Text style={{ color: 'red' }}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => editTask(item.id, `Edited: ${item.task}`)}>
        <Text style={{ color: 'blue' }}>Edit</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <Header data={tasks} />

      <FlatList
        data={tasks}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Empty />}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}
