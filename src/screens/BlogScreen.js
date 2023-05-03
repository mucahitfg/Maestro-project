import React, { useState, useEffect } from 'react'
import { View, FlatList, SafeAreaView, StyleSheet, ActivityIndicator, Button } from 'react-native'
import BlogItems from '../components/BlogItems';
import { useNavigation } from '@react-navigation/native';
const BlogScreen = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [refreshing, setRefreshing] = useState(false)
  const navigation = useNavigation()

  async function fetchData() {
    try {
      setLoading(true)
      const response = await fetch(`https://www.lenasoftware.com/api/v1/en/maestro/1?page=${page}&count=10`)
      const res = await response.json()
      console.log("response: ", res)
      setData((data) => [...data, ...res.result])
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [page])

  function loadMoreItems() {
    setPage(page + 1)
  }

  function _onRefresh() {
    setRefreshing(true)
    setTimeout(() => {
      fetchData()
      setRefreshing(false)

    }, 500);
  }

  const renderLoading = () => {
    return (
      loading ?
        <View style={styles.loading} >
          <ActivityIndicator size="large" color="black" />
        </View> : null
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <BlogItems
            onPress={() => navigation.navigate('Blog Detail', { content: item.content })}
            item={item}
          />
        }
        keyExtractor={(item) => item.postId}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={renderLoading}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0}
        refreshing={refreshing}
        onRefresh={_onRefresh}
      />
    </SafeAreaView>
  )
}

export default BlogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#662d1e',
  },
  loading: {
    marginVertical: 16,
    alignItems: 'center'
  },
})