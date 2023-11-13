import { Story } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import { JSX } from "react";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) : JSX.Element => {
    return(
        <ThemeProvider>
            <div className={`app ${theme}`}>
                <StoryComponent/>
            </div>
        </ThemeProvider>

    )
};