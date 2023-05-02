import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import StoryList from './StoryList'
import FeedList from './FeedList'

const Feed = () => (
<ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
<Text style={styles.app_name}>{item.app_name}</Text>
<StoryList item={item.story_list}/>
<FeedList item={item.feed_list}/>
</ScrollView>
)

export default Feed;

const styles = StyleSheet.create({
    'app_name': {
        'color': '#121111',
        'fontSize': 20,
        'fontWeight': '500',
        'paddingHorizontal': 15,
        'paddingTop': 10
    }
});