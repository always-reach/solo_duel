import type { ComponentStory,ComponentStoryObj, ComponentMeta } from "@storybook/react";

import DuelCard from "../components/DuelCard"

export default {
    title: "DuelCard",
    component: DuelCard
} as ComponentMeta<typeof DuelCard>


export const Default: ComponentStoryObj<typeof DuelCard> = {
    args:{
        cardName:"テストCSF3.0"
    },
    storyName:"デフォルト"
}