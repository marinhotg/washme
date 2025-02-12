import { useState } from 'react';
import { View, ScrollView, StyleSheet, TextInput } from 'react-native';
import { Header } from '../../components/header';
import { UserCard } from '../../components/user-card';
import { BottomMenu } from '../../components/bottom-menu';
import { Ionicons } from '@expo/vector-icons';

interface User {
  id: string;
  name: string;
  unit: string;
  email: string;
  phone: string;
}

export function Users() {
  const [expandedUserId, setExpandedUserId] = useState<string | null>(null);
  
  const users: User[] = [
    {
      id: '415',
      name: 'Gabriela',
      unit: '415',
      email: 'gabriela@email.com',
      phone: '(11) 99999-9999',
    },
    {
      id: '111',
      name: 'Tiago',
      unit: '111',
      email: 'tiago@email.com',
      phone: '(11) 99999-9999',
    },
  ];

  return (
    <View style={styles.container}>
      <Header 
        title="Usuários" 
        onBack={() => {}}
      />

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#64748B" />
        <TextInput 
          style={styles.searchInput}
          placeholder="Buscar usuário"
          placeholderTextColor="#64748B"
        />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.userList}>
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              unit={user.unit}
              email={user.email}
              phone={user.phone}
              isExpanded={expandedUserId === user.id}
              onPress={() => setExpandedUserId(
                expandedUserId === user.id ? null : user.id
              )}
            />
          ))}
        </View>
      </ScrollView>

      <BottomMenu 
        currentRoute="settings"
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    padding: 8,
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#64748B',
  },
  content: {
    flex: 1,
  },
  userList: {
    padding: 16,
    gap: 16,
  }
});