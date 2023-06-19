import React from 'react';
import useFetch from './useFetch';

export default function Users() {
    const users = useFetch('https://jsonplaceholder.typicode.com/users?_limit=10');
    // const users = useFetch('api/users.json');
    return (
        <div>
            <table>
                <tbody>
                    <tr><th>id</th><th>name</th><th>username</th></tr>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}