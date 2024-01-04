import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { fetchPost } from "@/lib/redux/slices/postSlices"
import { RootState } from "@/lib/redux/store"

export default function PostId() {
  const router = useRouter()
  const id = router.query.id
  const dispatch = useAppDispatch()
  const post = useAppSelector((state:RootState) => state.post)

  // fetch initial API
  useEffect(() => {
    if(id && post.loading === false) {
      dispatch(fetchPost(id.toString()))
    }
  },[id, dispatch])

  return (
    <div>
      {post.loading && <div>Loading...</div>}
      {!post.loading && post.error ? <div>{post.error}</div> : null}
      {!post.loading && post.error === '' && post.post.id !== 0 && (
        <>
          <h2>Post</h2>
          <div>UserId : {post.post.userId}</div>
          <div>Title : {post.post.title}</div>
          <div>Body : {post.post.body}</div>
        </>
      )}
    </div>
  )
}
