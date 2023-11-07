const users=[]

//addUser, removeUser, getUser, getUsersInRoom

const getUsersInRoom = (room)=>{
    room=room.trim().toLowerCase()
    return users.filter(user=>user.room===room)
}


const addUser= ({
    id,username,room
})=>{
    //Clean the data
    username=username.trim().toLowerCase()
    room=room.trim().toLowerCase()

    //validate the data
    if (!username || !room){
        return {
            error:'Username and room are required!'
        }
    }

    // Check for existing user
    const existingUser= users.find((user)=>{
        return user.room === room && user.username === username
    })

    // Validate username
    if(existingUser){
        return {
            error:'Username is already in use!'
        }
    }

    const user={id,username,room}
    users.push(user)

    //Store user
    
    return {
        user
    }
}

const removeUser = (id)=>{
    const index=users.findIndex((user)=>{
        return user.id === id
    })

    if (index!=-1){
        return users.splice(index,1)[0]
    }
}

const getUser = (id)=>{
    return users.find(user=> user.id===id)
}


// addUser({
//     id:1,
//     username:"Ari",
//     room:"India",
//     admin:false
// })

// addUser({
//     id:12,
//     username:"Aria",
//     room:"India",
//     admin:false
// })

// console.log(getUsersInRoom('India'))

module.exports={
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}