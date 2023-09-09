import { ComponentPropsWithRef } from "react";

export type IconWeight =
    | "thin"
    | "light"
    | "regular"
    | "duotone"
    | "solid";

export interface IconProps extends ComponentPropsWithRef<"svg"> {
    alt?: string;
    color?: string;
    size?: string | number;
    weight?: IconWeight;
    mirrored?: Boolean
}

export type Icon = React.ForwardRefExoticComponent<IconProps>