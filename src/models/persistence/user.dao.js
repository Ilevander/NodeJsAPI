import users from '../data/users.data.js '


const get = (userId) => users.find((user) => user.id === userId);

const getAll = () => users;


const update = (userId,newDetails) => {
    let existingUser = null;
    let userIndex;
    users.map((user, index) => {
        if (user.id === userId) {
            existingUser = user;
            userIndex = index;
        }
    });
    if(!existingUser){
        return false;
    }
    const updatedUser = {
        ...existingUser,
        ...newDetails
    };
    users.splice(userIndex,1,updatedUser);

    return updatedUser;
};


const insert = (details) =>{
    const newUser = {...details, id:users.length+1 };
    users.push(newUser);

    return true;
}

const remove = (userId) =>{
   const deleteUser = (user , index) => {
      if(user.id === userId)
         {
            //Remove the array element of the found user
            users.splice(index,1);
            return true;
         }
         return false;
   };
   return users.find(deleteUser);
}


export default {
    get,
    getAll,
    update,
    insert,
    remove,
}