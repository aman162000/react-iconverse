"use client";

import { forwardRef, useContext, ReactElement } from "react";
import { IconContext } from "./context";
import { IconWeight, IconProps } from "./types";

interface BaseIconProps extends IconProps {
  weights: Map<IconWeight, ReactElement>;
  viewBoxWidth: number;
  viewBoxHeight: number;
}

const BaseIcon = forwardRef<SVGSVGElement, BaseIconProps>((props, ref) => {
  const {
    alt,
    color,
    size,
    weight,
    weights,
    mirrored,
    children,
    viewBoxWidth,
    viewBoxHeight,
    ...restProps
  } = props;

  const {
    color: contextColor = "currentColor",
    size: contextSize,
    weight: contextWeight = "regular",
    mirrored: contextMirrored = false,
    ...restContext
  } = useContext(IconContext);
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? contextSize}
      height={size ?? contextSize}
      fill={color ?? contextColor}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
      {...restContext}
      {...restProps}>
      {!!alt && <title>{alt}</title>}
      {children}
      {weights.get(weight ?? contextWeight)}
    </svg>
  );
});
BaseIcon.displayName = "BaseIcon";

export default BaseIcon;
