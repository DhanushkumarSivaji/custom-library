import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GOE/Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});

HelloWorld.args = {
  label: "Hello world!",
  variant: 'outlined'
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Click me!",
  variant: 'contained'
};