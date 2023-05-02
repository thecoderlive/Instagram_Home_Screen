import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const storyListItem = ({ item }) => (
<View style={styles.story_list_item}>
<Image
    style={styles.story_image_list}
    source={{uri: item.story_image_list}}
    />
<Text style={styles.user_name}>{item.user_name}</Text>
</View>
  );

const StoryList = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.story_list}
    data={item}
    renderItem={storyListItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default StoryList;

const styles = StyleSheet.create({
    'story_image_list': {
        'width': '20vw',
        'height': '20vw',
        'marginTop': 15,
        'borderRadius': 50,
        'marginLeft': 18,
        'borderWidth': 2,
        'borderColor': '#c92c2c'
    },
    'user_name': {
        'color': '#050505',
        'fontSize': 18,
        'fontWeight': '500',
        'paddingHorizontal': 25,
        'paddingTop': 10
    }
});