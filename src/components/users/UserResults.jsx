import React from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import { useEffect, useState } from 'react' //we want users to display when the page loads



function UserResults() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)//to update the state array


    useEffect(() => {
        fetchUsers()
    }, []) //no dependencies cause we want it to load when the comp loads

    const fetchUsers = async () => { //Sends the token with the request
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
        })

        const data = await response.json()
        setUsers(data)
        setLoading(false)//changes to false after the data is loaded
    }

if (!loading) {
    return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {users.map((user) => (
            <UserItem key={user.id} user={user}/>
          ))}
        </div>
      )
}else {
    return <Spinner />
}
  
}

export default UserResults
