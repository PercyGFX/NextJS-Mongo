"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button, Form, Input, message } from "antd";

export default function Register() {
  const router = useRouter();

  // on finish logic
  const onFinish = (values: any) => {
    console.log("Success:", values);

    axios
      .post("/api/users/register", {
        username: values.username,
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log(response.data);
        message.success("Registration succesful");
        router.push("/login");
      })
      .catch((error) => {
        console.log(error.response);
        message.error("Registration failed " + error.response.data.message);
      });
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-100">
      <div className="flex flex-col justify-center items-center">
        <div className=" flex justify-between shadow-md rounded-xl w-full max-w-[900px] ">
          <div className="w-full p-4 bg-white rounded-l-lg">
            <p className="text-center text-slate-700 mx-auto text-4xl font-bold drop-shadow-sm mt-8">
              Register New Account!
            </p>

            <Form
              name="form"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className=" my-16 px-20"
              layout="vertical"
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  maxLength={50}
                  className="rounded-full py-2 text-lg drop-shadow-sm"
                  placeholder="Email"
                />
              </Form.Item>

              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  maxLength={50}
                  className="rounded-full py-2 text-lg drop-shadow-sm"
                  placeholder="Username"
                />
              </Form.Item>

              <Form.Item
                name="password"
                // label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  maxLength={50}
                  className="rounded-full py-2 text-lg drop-shadow-sm"
                  placeholder="Password here"
                />
              </Form.Item>

              <Form.Item>
                <div className="flex justify-center">
                  <Button
                    className=" bg-indigo-600 rounded-full font-poppins drop-shadow-md my-2 hover:bg-slate-100"
                    type="primary"
                    htmlType="submit"
                    size="large"
                    shape="round"
                    block={true}
                    // style={{ height: "5vh", width: "50%" }}
                  >
                    Register
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>

          <div className="flex flex-col bg-gradient-to-r from-indigo-600 to-purple-600 rounded-r-lg p-4 justify-center">
            <p className=" text-center font-poppins text-4xl font-bold text-white drop-shadow-md my-2">
              Already Registered?
            </p>

            <p className=" text-center font-poppins text-white drop-shadow-sm my-2">
              Sign in from here!
            </p>
            <Link href="/login">
              <p className="bg-white rounded-full px-3 py-2 text-center drop-shadow-md my-2 hover:bg-slate-100 cursor-pointer">
                Sign In
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
