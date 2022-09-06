import React ,{useState,useEffect} from 'react';
import { getAllPagedUsers, getAllUsers, getUserDetails, login } from '../services/fetchservice';

const FetchExample = () => {


    const [users, setUsers] = useState([]);
    const [pages, setPages] = useState(2);
    const [selectedUser, setSelectedUser] = useState({});
    const [totalUsers, setTotalUsers] = useState(12);
    const [usersPerPage, setUsersPerPage] = useState(6);

    useEffect(() => {
        obtainUsers()
       
    }, []);


    const obtainUsers = () => {
        getAllUsers()
        .then((response)=>{
            
            console.log('All users' , response.data)
            setUsers(response.data)
            setTotalUsers(response.total)
            setUsersPerPage(response.per_page)
            setPages(response.total_pages)
            
           

        })
        .catch((error) => {
            alert(`Error while retreiving the users : ${error}`)
        })
        .finally(()=>{ 
            console.log('endede obtaining users')
             console.table(users)})
    }

    const obtainPagedUsers = (page) =>{
        getAllPagedUsers(page)
        
            .then((response)=>{
            console.log('All paged users' , response.data)
            setUsers(response.data)
            setPages(response.total_pages)
            setUsersPerPage(response.per_page)
            setTotalUsers(response.total)

        })
        .catch((error) => {
            alert(`Error while retreiving the users : ${error}`)
        })
        .finally(()=>{ 
            console.log('endede obtaining users')
             console.table(users)})
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
        
        .then((response)=>{
            
            console.log('All paged users' , response.data)
            setSelectedUser(response.data)

        })
        .catch((error) => {
            alert(`Error while retreiving the users : ${error}`)
        })
        .finally(()=>{ 
            console.log('endede obtaining users')
             console.table(selectedUser)})
    }

const authUser = () =>{
login('eve.holt@reqres.in', 'cityslicka')
.then((response)=>{
            
    console.log('TOKEN' , response.token)
 sessionStorage.setItem('token' ,response.token)

})
.catch((error) => {
    alert(`Error while retreiving the users : ${error}`)
})
.finally(()=>{ 
    console.log('Ended login users.Navigate to home')
     })
}


    return (
        <div>
        {/* Button to simulate login*/}
        <button onClick={authUser}>Auth user</button>
            <h2>
                Users:
            </h2>
            { users.map((user,index) => 
               ( 
                <p key={index} onClick={()=>obtainUserDetails(user.id)}>{user.first_name} {user.last_name}</p>
                )
            )}
            <p>Showing {usersPerPage} users of {totalUsers} in total.</p>

            <button onClick={()=>obtainPagedUsers(1)}>1</button>
            <button onClick={()=>obtainPagedUsers(2)}>2</button>

            <div>
            {(selectedUser != null) ? 
            (
                <div>
                <h3>User detailss : </h3>
               <p>{selectedUser.first_name}</p>
                <p>{selectedUser.last_name}</p>
                <p>{selectedUser.email}</p>
                <img alt='Avatar' src={selectedUser.avatar} style={{height:'150px', width:'150px'}}/>
                 </div>
             ):
            ( <p>Please click on a user to see its details</p> )
           }
           </div>
            </div>
       
    );
};





export default FetchExample;