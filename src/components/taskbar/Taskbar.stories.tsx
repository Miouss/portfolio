import { ComponentStory, ComponentMeta } from "@storybook/react";

import Taskbar from "./Taskbar";

export default {
  title: "Taskbar",
  component: Taskbar,
} as ComponentMeta<typeof Taskbar>;

export const Default: ComponentStory<typeof Taskbar> = () => <Taskbar />;
