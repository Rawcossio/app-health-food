import { useEffect, useState } from "react";

const UserListWithLoading=()=>{
const [users, setUsers] = useState([]);
const [isLoading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    const fetchUsers = async () => {
        try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);

        }catch(error){
            setError(error);
        }finally {
            setLoading(false);
        }
    
    }
    fetchUsers();
}, []);
if(isLoading) {
    return <div>Loading...</div>;
}
if(error) {
    return <div>Error: {error}</div>;
}

return(
    <div>
        <h1>Lista de Usuarios</h1>
        <ul>
            {users.map((user) => 
                <li key={user.id}>{user.name}</li>)}
        </ul>
    </div>
)
}
export default UserListWithLoading;