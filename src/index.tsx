import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ErrorBoundary } from "app/providers/ErrorBoundary";
import App from "./app/App";
import { ThemeProvider } from "app/providers/ThemeProvider";

import "shared/config/i18n/i18n";

// eslint-disable-next-line
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"


render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById("root")
)