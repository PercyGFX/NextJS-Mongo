"use client";

import { Button, Form, Input } from "antd";

export default function Login() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
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
              Login to Your Account
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
                    style={{ height: "5vh", width: "50%" }}
                  >
                    Login
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>

          <div className="flex flex-col bg-gradient-to-r from-indigo-600 to-purple-600 rounded-r-lg p-4 justify-center">
            <p className=" text-center font-poppins text-4xl font-bold text-white drop-shadow-md my-2">
              New Here?
            </p>

            <p className=" text-center font-poppins text-white drop-shadow-sm my-2">
              Sign up and discover a great amount of new opportunities!
            </p>

            <span className="bg-white rounded-full px-3 py-2 text-center drop-shadow-md my-2 hover:bg-slate-100 cursor-pointer">
              Sign Up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
