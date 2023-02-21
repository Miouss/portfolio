import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Signin } from "../components";

export default {
  title: "Signin",
  component: Signin,
} as ComponentMeta<typeof Signin>;

const Template: ComponentStory<typeof Signin> = (args) => <Signin {...args} />;

export const LoginMenu = Template.bind({});

LoginMenu.args = {
    isLogged: false,
    setIsLogged: () => {},
    setShowSignInWall: () => {},
    setShowDesktop: () => {},
};
