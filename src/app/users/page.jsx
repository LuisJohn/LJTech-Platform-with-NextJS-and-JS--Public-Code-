import getUsers from "./UsersApi";

const Users = async () => {
    const users = await getUsers();
  return (
    
    <div>
        {users.map((user)=>{
            return(
                <div>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                    <p className="text-2xl font-bold">{user.address.street}</p>
                    <hr/>
                </div>
            ) 
        })}
    </div>
  )
}

export default Users