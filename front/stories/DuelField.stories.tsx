import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import DuelField from "../components/DuelField";

export default {
    title: "DuelField",
    component: DuelField
} as ComponentMeta<typeof DuelField>


export const Default: ComponentStoryObj<typeof DuelField> = {
    args: {
        card: "テストCSF3.0"
    },
    storyName: "デフォルト"
}