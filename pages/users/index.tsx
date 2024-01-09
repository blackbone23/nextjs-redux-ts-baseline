import axios from "axios"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { useEffect } from "react";
import { fetchUser } from '@/lib/redux/slices/userSlices'
import { RootState } from "@/lib/redux/store";

type UserProps = {
  users: any[];
}

export async function getServerSideProps() {
  const resp = await axios.get(`https://jsonplaceholder.typicode.com/users`)
  const users = resp.data
 
  return { props: { users } }
}

export default function Users({ users }: UserProps) {
  const dispatch = useAppDispatch()
  const usersData = useAppSelector((state:RootState) => state.user)

  useEffect(() => {
    dispatch(fetchUser(users)) // store SSR API call into redux
  },[])

  return (
    <div>
      {usersData.loading && <div>Loading...</div>}
      {!usersData.loading && usersData.error ? <div>{usersData.error}</div> : null}
      <h2>Users</h2>
      <ul>
        {!usersData.loading && usersData.error === '' && usersData.users.length && usersData.users.map((item:any) => (
          <li key={item.id}>
            <div>Username : {item.username}</div>
            <div>Name : {item.name}</div>
            <div>Email : {item.email}</div>
          </li>
        
        ))}
      </ul>
    </div>
  )
}
