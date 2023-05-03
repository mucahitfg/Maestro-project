import React from 'react'
import { View, Text, ActivityIndicator, ScrollView, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'


const BlogDetailItems = ({ data }) => {
    const route = useRoute()
    if (!data.result) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        )
    }
    return (
        <ScrollView style={styles.container}>
            {data.result.map((item) => (
                <Text style={styles.textStyle} key={item.postId}>{route.params.content}</Text>
            ))}
        </ScrollView>
    )
}
export default BlogDetailItems;

const styles = StyleSheet.create({
    container:{
        padding:20,
    },
    textStyle: {
        color: 'white',
    },
    loading: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})