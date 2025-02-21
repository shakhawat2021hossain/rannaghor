"use server"
import dbConnect from "@/lib/dbConnect"
import bcrypt from "bcrypt"

export const userReg = async ({ name, email, password, imageURL }) => {

    const usersCollection = await dbConnect("users")
    const user = await usersCollection.findOne({ email })
    if (!user) {
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const userData = { name, email, hashPassword, imageURL }
        const result = await usersCollection.insertOne(userData)
        return {
            success: true,
            insertedId: result.insertedId.toString(),
        };
    }
    return { success: false }
}