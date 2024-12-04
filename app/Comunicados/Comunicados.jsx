import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Comunicados() {
  const comunicados = [
    { id: 1, user: 'Lucas Moreira', disciplina: 'História', notificacoes: 3, avatar: 'https://via.placeholder.com/50' },
    { id: 2, user: 'Sofia Nogueira', disciplina: 'Português', notificacoes: 5, avatar: 'https://via.placeholder.com/50' },
    { id: 3, user: 'Ana Silva', disciplina: 'Matemática', notificacoes: 2, avatar: 'https://via.placeholder.com/50' },
    { id: 4, user: 'Carlos Alberto', disciplina: 'Física', notificacoes: 4, avatar: 'https://via.placeholder.com/50' },
  ];

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Comunicados</Text>

      {/* Barra de Pesquisa */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Pesquisar Disciplinas..." />
        <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
      </View>

      {/* Lista de Comunicados */}
      <ScrollView style={styles.scrollView}>
        {comunicados.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View>
              <Text style={styles.user}>{item.user}</Text>
              <Text style={styles.disciplina}>{item.disciplina}</Text>
            </View>
            <TouchableOpacity style={styles.notificationButton}>
              <Text style={styles.notificationText}>{item.notificacoes}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Menu Inferior */}
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="home" size={24} color="#fff" />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="bell" size={24} color="#fff" />
          <Text style={styles.menuText}>Comunicados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="address-book" size={24} color="#fff" />
          <Text style={styles.menuText}>Contatos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="user" size={24} color="#fff" />
          <Text style={styles.menuText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  scrollView: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  user: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  disciplina: {
    fontSize: 14,
    color: '#666',
  },
  notificationButton: {
    marginLeft: 'auto',
    backgroundColor: '#FF6B6B',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  notificationText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    paddingVertical: 10,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
});
