import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../ExerciceN°2/useFetch'

export default function UserParId() {
    const { id } = useParams();
    const users = useFetch("https://jsonplaceholder.typicode.com/users?_limit=10")
    return (
        <div>
            <table>
                <tbody>
                    <tr><th>name</th> <th>username</th></tr>
                    {users.filter(user => user.id === parseInt(id).map(user => {
                        return <tr>
                            <td>{user.name}</td>
                            <td>{user.username}</td>s
                        </tr>
                    }))}
                </tbody>
            </table>
        </div>
    )
}