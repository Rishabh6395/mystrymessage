import mongoose, {Schema, Document} from "mongoose"

// Define the message schema
export interface Message extends Document{
    content: string;
    createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    }
})

// Define the user schema
export interface User extends Document{
    username: String;
    email: String;
    password: String;
    verifyCode: String;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: Message[]
}

// Define the user schema
const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true,"Username is required"],
        trim: true,
        unique: true
    },
    email:{
        type: String,
        required: [true,"Username is required"],
        unique: true,
        match: [/.+\@.+\..+/, 'please use a valid email address']
    },
    password:{
        type: String,
        required: [true,"Password is required"],
    },
    verifyCode:{
        type: String,
        required: [true,"Verify code is required"],
    },
    verifyCodeExpiry:{
        type: Date,
        required: [true,"Verify code Expiry is required"],
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    isAcceptingMessage:{
        type: Boolean,
        default: true,
    },
    messages: [MessageSchema]
    
})

const UserModel = (mongoose.models.User as mongoose. Model<User>) || mongoose.model<User>("User", UserSchema)

export default UserModel