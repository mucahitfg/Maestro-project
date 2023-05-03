import React, { useContext } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import BlogDetailItems from '../components/BlogDetailItems'
import { BlogContext } from '../store/BlogContext'

const BlogDetailScreen = () => {
  const { data } = useContext(BlogContext)

  return (
    <SafeAreaView style={styles.container}>
      <BlogDetailItems data={data} />
    </SafeAreaView>
  )
}

export default BlogDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7c7578'
  },
})