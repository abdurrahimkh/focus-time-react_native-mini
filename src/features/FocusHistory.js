import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return  <Text style={{textAlign:'center',fontWeight:'700'}}>We haven't focused on anything yet</Text>;
  const renderItem = ({ item }) => {
    return <Text style={styles.item}>- {item}</Text>;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus History: </Text>
      <FlatList
        data={history}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  title: {
    fontSize: fontSizes.md,
    padding: spacing.md,
    fontWeight: 'bold',
  },
  item: {
    paddingTop: spacing.md,
    fontSize: fontSizes.md,
  },
});
