
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M96 32.04H32c-17.67 0-32 14.32-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V64.03C128 46.36 113.7 32.04 96 32.04z"/><path className="fa-secondary" d="M467.3 240.2C475.1 231.7 480 220.4 480 207.9c0-23.47-16.87-42.92-39.14-47.09C445.3 153.6 448 145.1 448 135.1c0-21.32-14-39.18-33.25-45.43C415.5 87.12 416 83.61 416 79.98C416 53.47 394.5 32 368 32h-58.69c-34.61 0-68.28 11.22-95.97 31.98L179.2 89.57C167.1 98.63 160 112.9 160 127.1l.1074 160c0 0-.0234-.0234 0 0c.0703 13.99 6.123 27.94 17.91 37.36l16.3 13.03C276.2 403.9 239.4 480 302.5 480c30.96 0 49.47-24.52 49.47-48.11c0-15.15-11.76-58.12-34.52-96.02H464c26.52 0 48-21.47 48-47.98C512 262.5 492.2 241.9 467.3 240.2z"/>
</>],
['light',<>
	<path d="M128 280v-208C128 49.94 110.1 32 88 32h-48C17.94 32 0 49.94 0 72v208C0 302.1 17.94 320 40 320h48C110.1 320 128 302.1 128 280zM96 280C96 284.4 92.41 288 88 288h-48C35.59 288 32 284.4 32 280v-208C32 67.59 35.59 64 40 64h48C92.41 64 96 67.59 96 72V280zM477.9 235.7c2.469-6.672 3.75-13.77 3.75-20.98c0-22.97-12.75-43.42-32.06-53.94c1.141-4.672 1.734-9.469 1.734-14.27c0-22.06-11.78-41.94-30.33-52.8C421 59.84 393.4 32 359.5 32H303.9c-77.41 0-143.9 63.11-143.9 80.07c0 8.767 7.133 15.96 16 15.96C195.8 128 222.2 64 303.9 64h55.63c16.27 0 29.5 13.22 29.5 29.47c0 4.826-1.185 6.491-1.185 10.01c0 20.94 31.51 12.09 31.51 43.05c0 12.84-6.765 14.68-6.765 23.56c0 9.347 7.255 14.66 13.06 15.75c13.92 2.594 24.03 14.75 24.03 28.89c0 17.77-12.06 18.45-12.06 30.63c0 8.314 6.443 15.38 14.91 15.96C467.9 262.4 480 275.2 480 290.5C480 306.8 466.8 320 450.5 320h-128.3c-8.273 0-15.1 6.658-15.1 16.01c0 2.699 .68 5.398 2.046 7.83c17.73 31.53 26.62 65.39 26.62 75.48C334.9 431.2 325.6 448 304.9 448c-16.7 0-19.66-4.953-28.78-32.78c-21.79-66.41-36.14-69.47-88.81-122.5C184.2 289.6 180.1 288 176 288C167.4 288 160 294.9 160 303.1c0 23.25 57.94 36.53 85.73 121.2C254.2 450.9 263.6 480 304.9 480c38.77 0 62.01-30.84 62.01-60.67c0-13.84-6.844-40.27-18.83-67.33h102.5C484.4 352 512 324.4 512 290.5C512 266.8 498.2 245.8 477.9 235.7z"/>
</>],
['regular',<>
	<path d="M128 288V64.03c0-17.67-14.33-31.1-32-31.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64C113.7 320 128 305.7 128 288zM481.5 229.1c1.234-5.092 1.875-10.32 1.875-15.64c0-22.7-11.44-43.13-29.28-55.28c.4219-3.015 .6406-6.076 .6406-9.122c0-22.32-11.06-42.6-28.83-54.83c-2.438-34.71-31.47-62.2-66.8-62.2h-52.53c-35.94 0-71.55 11.87-100.3 33.41L169.6 92.93c-6.285 4.71-9.596 11.85-9.596 19.13c0 12.76 10.29 24.04 24.03 24.04c5.013 0 10.07-1.565 14.38-4.811l36.66-27.51c20.48-15.34 45.88-23.81 71.5-23.81h52.53c10.45 0 18.97 8.497 18.97 18.95c0 3.5-1.11 4.94-1.11 9.456c0 26.97 29.77 17.91 29.77 40.64c0 9.254-6.392 10.96-6.392 22.25c0 13.97 10.85 21.95 19.58 23.59c8.953 1.671 15.45 9.481 15.45 18.56c0 13.04-11.39 13.37-11.39 28.91c0 12.54 9.702 23.08 22.36 23.94C456.2 266.1 464 275.2 464 284.1c0 10.43-8.516 18.93-18.97 18.93H307.4c-12.44 0-24 10.02-24 23.1c0 4.038 1.02 8.078 3.066 11.72C304.4 371.7 312 403.8 312 411.2c0 8.044-5.984 20.79-22.06 20.79c-12.53 0-14.27-.9059-24.94-28.07c-24.75-62.91-61.74-99.9-80.98-99.9c-13.8 0-24.02 11.27-24.02 23.99c0 7.041 3.083 14.02 9.016 18.76C238.1 402 211.4 480 289.9 480C333.8 480 360 445 360 411.2c0-12.7-5.328-35.21-14.83-59.33h99.86C481.1 351.9 512 321.9 512 284.1C512 261.8 499.9 241 481.5 229.1z"/>
</>],
['solid',<>
	<path d="M96 32.04H32c-17.67 0-32 14.32-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V64.03C128 46.36 113.7 32.04 96 32.04zM467.3 240.2C475.1 231.7 480 220.4 480 207.9c0-23.47-16.87-42.92-39.14-47.09C445.3 153.6 448 145.1 448 135.1c0-21.32-14-39.18-33.25-45.43C415.5 87.12 416 83.61 416 79.98C416 53.47 394.5 32 368 32h-58.69c-34.61 0-68.28 11.22-95.97 31.98L179.2 89.57C167.1 98.63 160 112.9 160 127.1l.1074 160c0 0-.0234-.0234 0 0c.0703 13.99 6.123 27.94 17.91 37.36l16.3 13.03C276.2 403.9 239.4 480 302.5 480c30.96 0 49.47-24.52 49.47-48.11c0-15.15-11.76-58.12-34.52-96.02H464c26.52 0 48-21.47 48-47.98C512 262.5 492.2 241.9 467.3 240.2z"/>
</>],
['thin',<>
	<path d="M128 288V64.03C128 46.36 113.7 32.04 96 32.04H32c-17.67 0-32 14.32-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64C113.7 320 128 305.7 128 288zM112 288c0 8.822-7.178 16-16 16H32C23.18 304 16 296.8 16 288V64c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16V288zM475 231.9c4.203-7.719 6.453-16.36 6.453-25.2c0-22.23-13.81-41.75-34-49.66c2.281-5.969 3.453-12.25 3.453-18.55c0-20.81-12.12-39.38-30.8-48.13c.1719-1.656 .25-3.297 .25-4.938C420.4 55.98 396.2 32 366.5 32h-56.03C276 32 241.8 43.33 214.1 63.89L163.6 97.33C161.3 98.87 160 101.4 160 104c0 4.421 3.6 8.001 8.003 8.001c1.514 0 3.049-.4324 4.419-1.342l50.91-33.69C248.6 58.2 279.4 48 310.5 48h56.03c20.84 0 37.81 16.81 37.81 37.47c0 5.5-1.186 7.832-1.186 10.01c0 3.403 2.177 6.524 5.546 7.602c15.66 5.047 26.19 19.3 26.19 35.45c0 14.01-6.812 18.44-6.812 23.58c0 4.727 3.726 7.352 6.547 7.861c17.86 3.312 30.81 18.78 30.81 36.77c0 19.49-12.15 23.38-12.15 30.63c0 4.16 3.223 7.682 7.458 7.983C480.5 246.7 496 263 496 282.5C496 303.2 479 320 458.2 320h-143.5c-4.265 0-7.997 3.432-7.997 8.013c0 1.549 .4486 3.091 1.341 4.425l5.328 8C334.1 376.4 344 414 344 426.1C344 444.7 329.3 464 304.8 464c-51.82 0-19.32-70.26-98.31-133.4L172.8 305.6C171.3 304.5 169.7 303.1 168 303.1c-2.588 0-8.012 2.043-8.012 7.995c0 2.447 1.121 4.863 3.236 6.428l33.47 24.81C272.4 403.8 237.1 480 304.9 480C339.4 480 360 452.6 360 426.1c0-15.16-9.781-53.63-30.72-90.08h128.9C487.9 336 512 312 512 282.5C512 259.2 496.5 239 475 231.9z"/>
</>],

]);

const ThumbsDown: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ThumbsDown.displayName = "ThumbsDown";

export default ThumbsDown;
