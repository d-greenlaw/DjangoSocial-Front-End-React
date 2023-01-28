import React, {useState, useEffect, useContext} from 'react'
import PostListItem from './PostListItem'
import { UserAuthContext } from '../../contexts/auth/UserAuthContext'
import { PostsContext } from '../../contexts/posts/PostsContext'

const Posts = () => {

const { userEmail } = useContext(UserAuthContext);
const { posts, setPosts } = useContext(PostsContext);

useEffect(() => {
    getPosts()
}, [userEmail])

let getPosts = async () => {
    let response = await fetch(`/theapp/social-posts/${userEmail}/`)
    let data = await response.json()
    setPosts(data)
}


  return (
    <div>
      {posts.map((post, index) => ( 
      <PostListItem key={index} post={post} />
    ))}
    </div>
  )
}

export default Posts
