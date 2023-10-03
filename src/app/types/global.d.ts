declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }

    const classNames: IClassNames;
    export = classNames;
}


declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.gif"
declare module "*.woff2"
declare module "*.woff"

declare module '*.svg' {
    const svg: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    export default svg;
}

// declare module "*.svg" {
//     import React from "react";
//     const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
//     export default SVG;
// }