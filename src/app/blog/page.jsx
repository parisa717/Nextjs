import PostCard from '@/components/postcard/postCard'
import React from 'react'
import styles from "./blog.module.css"
import { getPosts } from '@/lib/data'
const getData = async ()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts",{next:{revalidate:3600}});
  if(!res.ok){
    throw new Error("Some Thing went Wrong")
  }
  return res.json()
}
const BlogPage =  async() => {
 const posts = await getData()

 // const posts = await getPosts()
  return (
    <div className={styles.container}>
      {
        posts.map(post=><PostCard key={post.id} post={post} />)
      }

    </div>
  )
}

export default BlogPage