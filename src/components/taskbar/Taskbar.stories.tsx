import { ComponentStory, ComponentMeta } from '@storybook/react';

import Taskbar from './Taskbar';

import { store } from "../../redux"
import { Provider } from "react-redux";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Taskbar',
  component: Taskbar,
} as ComponentMeta<typeof Taskbar>;

const Template: ComponentStory<typeof Taskbar> = () =><Provider store={store}><Taskbar /></Provider>;

export const Default = Template.bind({});