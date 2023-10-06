import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqbody = await request.json();

    const { username, password, email } = reqbody;

    if (!(username && password && email)) {
      return NextResponse.json(
        {
          status: false,
          message: "Please send correct fields",
        },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        {
          status: false,
          message: "User Already registered",
        },
        { status: 401 }
      );
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashpassword = await bcryptjs.hash(password, salt);

    console.log("creating user");

    // add user to datbase

    const newUser = new User({
      username,
      email,
      password: hashpassword,
    });

    await newUser.save();

    return NextResponse.json(
      {
        status: true,
        message: "User created now login",
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
