import mongoose ,{Schema,Document}from "mongoose";


export interface Message extends Document{
    content : string
    createdAt: Date
}

const MessegeSchema :Schema<Message>=new Schema({
    content:{
        type:String,
        required:true

    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})



export interface User extends Document{
    username:string;
    email:string;
    password : string;
    verifyCode: string;
    verifyCodeExpiry:Date
    isVerified:boolean
    isAcceptingmessege : boolean
    message: Message[]
}

const userSchema: Schema<User> = new Schema({

    username:{
        type:String,
        required:[true, "username is required"],
        trim: true,
        unique:true
    },
    email:{
        type:String,
        required:[true, "email is required"],
        unique :true,
        match:[/.+\@.+\..+/,'please use valid email address']
        

    },
    password:{
        type:String,
        required:[true, "Password is required"]
    },
    verifyCode:{
        type:String,
        required:[true, "Verify code is required"]
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true, "Verify code expiry  is required"]
    },
    isVerified:{
        type:Boolean,
        default:false,

      
    },
    isAcceptingmessege:{
        type:Boolean,
        default:false
    },
    message:[MessegeSchema]




})

const UserModel = (mongoose.models.User as mongoose.
    Model<User>)||mongoose.model<User>("User",userSchema)


export default UserModel;

