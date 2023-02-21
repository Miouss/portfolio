import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Signin } from "../components";
import { useState } from "react";
import { IsLoggedProp } from "../types";

export default {
  title: "Signin",
  component: Signin,
} as ComponentMeta<typeof Signin>;

const Template: ComponentStory<typeof Signin> = (args) => <Signin {...args} />;

export const LoginMenu = Template.bind({});

LoginMenu.argTypes = {
  isLogged: {
    control: {
      type: "radio",
      options: ["lock", false, true],
    },
  },
  setIsLogged: {
    table: {
      disable: true,
    },
  },
  setShowSignInWall: {
    table: {
      disable: true,
    },
  },
  setShowDesktop: {
    table: {
      disable: true,
    },
  },
};
