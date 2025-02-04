/// <reference types="vite/client" />

declare module "react" {
  export = React;
  export as namespace React;
}

declare module "framer-motion" {
  import { AnimationProps } from "@framer-motion/types";

  export interface MotionProps extends AnimationProps {
    [key: string]: any;
  }

  export const motion: {
    [key: string]: any;
  };
}

declare module "lucide-react" {
  import { FC, SVGProps } from "react";

  interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    absoluteStrokeWidth?: boolean;
  }

  export const Briefcase: FC<IconProps>;
  export const Calendar: FC<IconProps>;
  export const MapPin: FC<IconProps>;
  export const ExternalLink: FC<IconProps>;
  export const Award: FC<IconProps>;
  export const Trophy: FC<IconProps>;
}

declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.json" {
  const content: any;
  export default content;
}
