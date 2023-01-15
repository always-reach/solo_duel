import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import DeckContent from "../components/DeckContent"

export default {
    title: "DeckContent",
    component: DeckContent
} as ComponentMeta<typeof DeckContent>


export const Default: ComponentStoryObj<typeof DeckContent> = {
    args: {
       
    },
    storyName: "デフォルト"
}