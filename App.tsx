import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<ICleanData[]>([]);
  
  useEffect(() => {
    fetch('https://spreadsheets.google.com/feeds/list/16ZFeCKW9f8pF1L_c-_RGHDXKTkMIy8ADrjlw4YLXf0M/od6/public/values?alt=json')
      .then(response => response.json())
      .then(json => cleanData(json))
      .then(data => setData(data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function cleanData(data: IData): ICleanData[] {
    const { feed } = data;
    const { entry } = feed || [];
    const cleanData = entry.map(x => {
      return {
        id: x.id.$t,
        avengedby: x.gsx$avengedby.$t,
        class: x.gsx$avengedby.$t,
        deathplace: x.gsx$avengedby.$t,
        firsts: x.gsx$avengedby.$t,
        killer: x.gsx$avengedby.$t,
        legacy: x.gsx$avengedby.$t,
        level: x.gsx$avengedby.$t,
        name: x.gsx$avengedby.$t,
        race: x.gsx$avengedby.$t,
        rarespawns: x.gsx$avengedby.$t,
        time: x.gsx$avengedby.$t,
      }
    });

    return cleanData;
  }
  
  return (
    <View style={styles.container}>
      
      {isLoading ? <ActivityIndicator /> : (
        <FlatList 
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>Name: {item.name}, Level: {item.level}</Text>
          )}
        />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
