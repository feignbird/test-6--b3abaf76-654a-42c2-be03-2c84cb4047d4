import React from 'react'
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

import HomeCarousel from './HomeCarousel'





const HomeFeed = ({ item, navigation, route }) => {
  const homeFeedItem = ({ item }) => ( 
    <View style={styles.home_feed_item}>
      <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        navigation.push('Profile', { itemObj: item })
      }}
      >
        <Text style={styles.artist_name}>{item.artist_name}</Text>
      </TouchableOpacity>
      <HomeCarousel item={item.home_carousel}/>
      <Text style={styles.art_caption}>{item.art_caption}</Text>
      <Text style={styles.art_description}>{item.art_description}</Text>
    </View>
  );
  
    return (
<FlatList
    style={styles.home_feed}
    data={item}
    renderItem={homeFeedItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeFeed;

const styles = StyleSheet.create({"artist_name": {"color": "#5427FC", "fontSize": 15, "fontWeight": "400", "paddingHorizontal": 10, "paddingTop": 5, "fontFamily": "monospace"}, "art_caption": {"color": "#5427FC", "fontSize": 15, "fontWeight": "400", "paddingHorizontal": 10, "paddingTop": 5, "fontFamily": "monospace"}, "art_description": {"fontSize": 12, "fontWeight": "250", "paddingHorizontal": 10, "paddingTop": 5, "fontFamily": "Roboto", "color": "#0D3540"}});