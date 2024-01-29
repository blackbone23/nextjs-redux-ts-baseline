import { setCookie } from "cookies-next"
import { useEffect } from "react"

export default function LoginPost() {
  useEffect(() => {
    setCookie('token', 'abc'); // dummy page for inject cookie
  },[])
  return (
    <div>
      Login Page
    </div>
  )
}
