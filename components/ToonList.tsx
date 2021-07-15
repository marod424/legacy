import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import useData from "../hooks/useData";
import { Ionicons } from '@expo/vector-icons'; 

export default function ToonList() {
  const { isLoading, data } = useData();

  return (
    <>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList 
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Ionicons name="person-circle-outline" size={24} color="black" />
              <Text >{item.name}</Text>
              <Text>{item.race} &#183; {item.class}</Text>
            </View>
          )}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    justifyContent: 'center',
    padding: '14px',
    width: '100vw',
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  }
});