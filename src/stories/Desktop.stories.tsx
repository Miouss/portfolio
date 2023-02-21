import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DesktopGrid } from "../components";

export default {
  title: "DesktopGrid",
  component: DesktopGrid,
} as ComponentMeta<typeof DesktopGrid>;

export const Default: ComponentStory<typeof DesktopGrid> = () => <DesktopGrid />;
