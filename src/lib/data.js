import  { Post, User } from "./model"
import { connectToDb } from "./utlis";

export const getPosts = async()=>{   
    const posts = await Post.find();
    console.log(posts)
    // try {
    //     connectToDb();
    //     const posts = await Post.find();
    //     console.log("POST",posts)
    //     return posts
        
    // } catch (error) {
    //     console.log(error);
    //     throw new Error("Failed To Fetch Data")
    // }


}
export const getPost = async(slug)=>{

    try {
        connectToDb()
        const post = await Post.find({slug:slug});
        return post
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed To Fetch Data")
    }
}
export const getUser = async(id)=>{

    try {
        connectToDb()
        const user = await User.findById(id);
        return user
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed To Fetch Data")
    }
}
export const getUsers = async()=>{

    try {
        connectToDb()
        const users = await User.find();
        return users
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed To Fetch Data")
    }
}