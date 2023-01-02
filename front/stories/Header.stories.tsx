import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import Header from "../components/Header";

export default{
    title:"Header",
    component: Header
} as ComponentMeta<typeof Header>

export const Default: ComponentStoryObj<typeof Header>={
    args:{},
    storyName:"デフォルト"
}