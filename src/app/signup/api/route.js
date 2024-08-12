import bcrypt from "bcrypt";
import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return Response.json(
        { message: "User Already Exists!" },
        { status: 304 }
      );
    }
    const hashedPassword = bcrypt.hashSync(newUser.password, 14);
    const res = await userCollection.insertOne({
      ...newUser,
      password: hashedPassword,
    });
    return Response.json({ message: "New User Created!!" }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Something Went Wrong!", error },
      { status: 500 }
    );
  }
};
