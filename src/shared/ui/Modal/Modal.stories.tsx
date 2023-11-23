import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

import { Modal } from "./Modal";

const mockString = `Это не финальное состояние модального окна,
     в ходе разработки мы будем его менять = делать рефакторинг. 
    Также прошу заметить, что переопределение переменных из темы это АНТИПАТЕРН!
     Так делать не стоит.`;

export default {
    title: "shared/Modal",
    component: Modal,

    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Modal>;


const Template: ComponentStory<typeof Modal> = (args) => <Modal { ...args } />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: mockString
};


export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: mockString
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];