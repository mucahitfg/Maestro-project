import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const BlogItems = ({ item, onPress }) => (
    <Pressable onPress={onPress} style={styles.itemContainer}>
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={{ uri: item.banner }}
            />
            <View style={{ marginLeft: 10, flex: 1 }}>
                <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                <Text style={styles.readingTime}>Reading Time: {item.totalReadingTime}</Text>
            </View>
        </View>
        <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={styles.summary}>{item.summary}</Text>
    </Pressable>

);

export default BlogItems;

const styles = StyleSheet.create({
    itemContainer: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#00708b',
    },
    readingTime: {
        color: '#90827c',
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 5
    },
    summary: {
        color: "white",
        fontSize: 16,
        fontWeight: '400',
        marginTop: 8,

    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        width: '100%',
        letterSpacing: 0.4,
    },
    image: {
        width: 100,
        height: 100,
    },
    imageContainer: {
        flexDirection: 'row',
    },
})