
import usersCollection from '../../Schemas/userSchema';

function validateFields(req,next){
    let okFields = true 
    let { userName, email, password } = req.body
    const spaceRegex = RegExp(/\s/)
    const passwordRegex = RegExp(/^.{4,8}$/)
    const emailRegex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        );
    if(userName.trim().length < 4){
        okFields = false
        next({message:"username has to be at lest 4 characters"})
    }
    if(spaceRegex.test(userName)){
        next({message:"username cannot have any whitespaces"})
    }
    if(!passwordRegex.test(password)){
        okFields = false
        next({message:"password has to be between 4 and 8 characters"})
    }

    if(!emailRegex.test(email)){
        okFields = false
        next({message:"Invalid email address"})
    }

    return okFields
}

async function checkIfuserExists(req, res, next){
    let usernameToCheck = req.body.userName
    let foundUserName = false
    await usersCollection.findOne({userName:usernameToCheck}).then((result)=>{
        if(result){
            next({message:"username already exists"})
            foundUserName = true 
        }
    })
    return foundUserName
}

export { validateFields, checkIfuserExists}