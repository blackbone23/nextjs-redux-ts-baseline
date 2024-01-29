import { Typography } from "@mui/material"
import Link from "next/link"

export default function PostNotFound() {
  return (
    <div>
      <Typography>Sorry your desired post is not found.</Typography>
      <Typography>Please go back to Post <Link href="/posts/">here</Link>.</Typography>
    </div>
  )
}
