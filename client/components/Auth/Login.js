import React from "react";
import { BsGoogle } from "react-icons/bs";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";

import { Mail } from "./Mail";
import { Password } from "./Password";
import { HiOutlineMail } from "react-icons/hi";
const Login = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <>
      <div className=" flex h-[90vh] relative  items-center ">
        <div className=" ">
          <div className=" relative">
            <div className=" text-6xl  md:text-8xl font-bold">Login</div>
          </div>

          <div className=" flex-col space-y-2 w-[90vw]   flex sm:flex-row sm:space-x-2 sm:space-y-0 mt-10">
            <Button flat color="error" icon={<BsGoogle fill="currentColor" />}>
              Google
            </Button>
            <Button
              onClick={handler}
              flat
              color="success"
              icon={<HiOutlineMail fill="currentColor" />}
            >
              Email
            </Button>
          </div>
          <div className="text-gray-300 mt-3">
            Don't Have an account ?{" "}
            <span className=" text-gray-100 font-bold cursor-pointer text-center">
              Sign up
            </span>
          </div>
        </div>
      </div>

      {/* modal */}
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Name"
            contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
