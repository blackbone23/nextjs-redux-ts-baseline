import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { fetchPosts } from "@/lib/redux/slices/postSlices"
import { RootState } from "@/lib/redux/store"
import { useEffect } from "react"
import { Posts } from "@/lib/redux/slices/postSlices"

export default function Posts() {
  const dispatch = useAppDispatch()
  const posts = useAppSelector((state:RootState) => state.post)

  // fetch initial API
  useEffect(() => {
    if(posts.posts.length === 0 && posts.loading === false) {
      dispatch(fetchPosts())
    }
  },[posts, dispatch])

  return (
    <div>
      {posts.loading && <div>Loading...</div>}
      {!posts.loading && posts.error ? <div>{posts.error}</div> : null}
      <h2>Post</h2>
      <ul>
        {!posts.loading && posts.error === '' && posts.posts.length && posts.posts.map((item:Posts) => (
          <li key={item.id}>
            <div>UserId : {item.userId}</div>
            <div>Title : {item.title}</div>
            <div>Body : {item.body}</div>
          </li>
        
        ))}
      </ul>
    </div>
  )
}
