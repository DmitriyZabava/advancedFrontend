import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfig } from "webpack-dev-server"

export function buildDevServer(options: BuildOptions): DevServerConfig {
    return {
        port: options.port,
        historyApiFallback: true,
        open: {
            app: {
                name: 'Chrome',
            },
        },
        client: {
            progress: true,
        },
        hot: true
    }
}