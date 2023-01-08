import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import TextField from "../components/TextField"

export default {
    title: "TextField",
    component: TextField
} as ComponentMeta<typeof TextField>


export const Default: ComponentStoryObj<typeof TextField> = {
    args: {
        
    },
    storyName: "デフォルト"
}