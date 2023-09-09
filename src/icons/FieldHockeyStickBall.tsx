
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M351.3 125.5l-184.7 271.9c-8.323 11.88-21.91 18.69-34.9 18.69c-26.57 0-35.85-24.89-35.85-37.5c0-4.547 .8872-12.99 6.778-21.41l9.824-14.07c5.846-8.383 8.653-17.99 8.653-27.49c0-22.67-17.96-48.09-47.93-48.09c-15.12 0-29.99 7.178-39.3 20.56L24.09 302.1c-9.392 13.46-24.09 39.81-24.09 76.91C.0009 457.4 64.04 512 131.3 512c67.4 0 104.6-46.44 114.3-60.29l185.5-273.1L351.3 125.5z"/><path className="fa-secondary" d="M432.1 351.9c-44.2 0-80.05 35.85-80.05 80.01c0 44.16 35.86 80.01 80.05 80.01s79.95-35.85 79.95-80.01C511.1 387.8 476.2 351.9 432.1 351.9zM503.7 74.96c5.613-8.262 8.291-17.63 8.291-26.91c0-15.51-7.506-30.76-21.4-40.01C482.4 2.603 473.2 0 464.1 0c-15.34 0-30.41 7.358-39.67 20.99l-73.13 104.5l79.84 53.16L503.7 74.96z"/>
</>],
['light',<>
	<path d="M432.1 351.9c-44.14 0-80.05 35.85-80.05 80.01s35.91 80.01 80.05 80.01c44.09 0 79.95-35.85 79.95-80.01S476.1 351.9 432.1 351.9zM432 479.1c-26.5 0-48.05-21.55-48.05-48.04c0-26.49 21.55-48.04 48.05-48.04c26.44 0 47.95 21.55 47.95 48.04C479.1 458.4 458.5 479.1 432 479.1zM511.1 53.41c-2.375-12.17-9.359-22.64-19.64-29.49l-24.94-16.61c-20.28-13.51-49.83-7.694-63.47 12.42L159.1 379.3c-7.922 11.32-20.89 12.42-27.19 8.851c-10.36-5.848-10.12-16.51-9.984-18.61c.3594-4.91 .6094-5.63 10.11-19.2l2.516-3.628c19.27-27.58 12.52-65.71-15.02-85.01C105.8 252 90.55 248.4 75.37 251.1C54.71 254.8 40.04 268.1 34.63 276.7L25.44 289.9c-14.59 20.95-23.27 45.47-25.06 70.87c-3.984 55.23 23.45 106.5 71.62 133.8c20.2 11.42 43.28 17.31 66.92 17.31c70.59 0 110.1-48.33 120.6-63.37l244.5-360.3C510.1 77.93 513.5 65.58 511.1 53.41zM233.2 430.3c-8.141 11.63-39.02 49.66-94.14 49.66c-18.12 0-35.86-4.597-51.27-13.32c-37.3-21.11-58.55-60.8-55.47-103.6c1.406-19.67 8.109-38.62 19.41-54.83l9.203-13.2c2.203-3.159 10.3-10.7 20.08-12.42c1.391-.2502 2.781-.3753 4.156-.3753c5.359 0 10.62 1.845 16.02 5.63c13.11 9.195 16.31 27.33 7.141 40.47l-2.516 3.597c-10.12 14.51-14.77 21.14-15.78 35.25c-1.156 15.79 5.109 36.94 26.12 48.79c19.8 11.32 51.11 7.506 69.3-18.51l168.5-248.3l46.39 34.82L233.2 430.3zM477.6 70.18l-59.23 87.28L371.9 122.6l57.62-84.9c4.156-6.099 13.02-7.913 19.25-3.784l24.95 16.61c3.125 2.095 5.25 5.285 5.969 8.976C480.5 63.27 479.7 67.05 477.6 70.18z"/>
</>],
['regular',<>
	<path d="M424 335.1c-48.61 0-88.06 39.42-88.06 88.01c0 48.59 39.44 88.01 88.06 88.01s87.94-39.42 87.94-88.01C511.1 375.4 472.7 335.1 424 335.1zM424 463.1c-22.09 0-40.06-17.95-40.06-40.01s17.97-40.01 40.06-40.01c22.02 0 39.94 17.95 39.94 40.01S446.1 463.1 424 463.1zM512 69.12c0-5.412-.851-29.12-23.64-44.25l-24.14-16.1C455.3 2.84 445.1 0 435.1 0c-16.1 0-33.74 8.118-43.98 23.12L155.3 370.4c-3.264 4.647-8.247 6.721-11.92 6.721c-5.541 0-8.546-5.585-8.546-9.874c0-2.792 1.114-4.767 1.824-5.785l8.906-12.78c8.187-11.74 12.11-25.22 12.11-38.56c0-31.83-25.09-67.66-67.32-67.66c-6.721 0-35.98 .9878-55.37 28.93L26.14 284.1c-10.26 14.73-26.14 43.33-26.14 83.53C.0012 452.9 69.81 512 142.1 512c72.6 0 113.1-50.18 123.5-65.1l236.3-348C508.9 89.93 512 79.66 512 69.12zM226.9 419.6c-7.126 10.21-34.61 44.42-84.72 44.42c-47.71 0-94.2-39.97-94.2-96.61c0-26.93 10.64-46.09 17.51-55.95l8.906-12.75c1.119-1.61 6.099-8.314 15.89-8.314c12.17 0 19.42 10.34 19.42 19.57c0 3.87-1.138 7.778-3.509 11.18l-8.906 12.78c-9.069 12.98-10.44 25.99-10.44 33.06c0 17.32 7.724 38.72 29.68 51.07c8.312 4.75 17.54 7.018 26.85 7.018c19.35 0 39.03-9.805 51.44-27.49l173.5-255.5l31.16 23.37L226.9 419.6z"/>
</>],
['solid',<>
	<path d="M432.1 351.9c-44.2 0-80.05 35.85-80.05 80.01c0 44.16 35.86 80.01 80.05 80.01s79.95-35.85 79.95-80.01C511.1 387.8 476.2 351.9 432.1 351.9zM351.3 125.5l-184.7 271.9c-8.323 11.88-21.91 18.69-34.9 18.69c-26.57 0-35.85-24.89-35.85-37.5c0-4.547 .8872-12.99 6.778-21.41l9.824-14.07c5.846-8.383 8.653-17.99 8.653-27.49c0-22.67-17.96-48.09-47.93-48.09c-15.12 0-29.99 7.178-39.3 20.56L24.09 302.1c-9.392 13.46-24.09 39.81-24.09 76.91C.0009 457.4 64.04 512 131.3 512c67.4 0 104.6-46.44 114.3-60.29l185.5-273.1L351.3 125.5zM503.7 74.96c5.601-8.245 8.291-17.63 8.291-26.91C512 21.12 490.2 0 464.1 0c-15.34 0-30.41 7.358-39.67 20.99l-55.15 78.02l79.84 53.16L503.7 74.96z"/>
</>],
['thin',<>
	<path d="M432.1 351.9c-44.2 0-80.05 35.84-80.05 80.01c0 44.17 35.86 80.01 80.05 80.01s79.95-35.84 79.95-80.01C511.1 387.8 476.2 351.9 432.1 351.9zM432.1 496C396.7 496 368 467.3 368 432s28.73-64 64.05-64c35.26 0 63.95 28.71 63.95 64S467.3 496 432.1 496zM497.7 23.08l-26.62-17.72C465.7 1.734 459.5 0 453.5 0c-10.22 0-20.26 4.908-26.44 14.01L166.6 397.4c-13.71 19.56-37.26 22.58-51.37 14.53c-15.5-8.734-20.13-24.29-19.29-35.92c.8224-11.2 4.156-15.17 16.51-32.89c15.17-21.76 9.875-51.65-11.84-66.86c-31.51-22.11-59.71 1.717-66.73 11.83L24.09 302.1c-13.81 19.8-22.03 43.01-23.73 67c-3.754 52.24 22.19 100.7 67.79 126.5C87.8 506.7 109.6 512 131.3 512c67.54 0 104.6-46.41 114.3-60.29l260.8-383.9C516.5 53.04 512.5 32.95 497.7 23.08zM232.5 442.6C224 454.7 190.8 496 131.2 496c-19.52 0-38.61-4.961-55.21-14.34c-40.13-22.69-63.01-65.37-59.7-111.4c1.496-21.12 8.719-41.5 20.89-58.96l9.809-14.08c10.01-14.41 29.85-18.1 44.41-7.885c14.45 10.12 17.99 30.14 7.891 44.63c-18.83 27.01-18.56 30.25-19.34 40.86c-1.195 16.53 5.375 38.61 27.32 50.97c28.96 16.53 59.94-1.415 72.54-19.4l184.3-271.4l53.2 35.43L232.5 442.6zM493.2 58.78l-66.86 98.43L373.2 121.8l67.09-98.78c2.063-3.036 11.28-11.45 21.99-4.324l26.61 17.72C496.3 41.34 498.2 51.39 493.2 58.78z"/>
</>],

]);

const FieldHockeyStickBall: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FieldHockeyStickBall.displayName = "FieldHockeyStickBall";

export default FieldHockeyStickBall;
