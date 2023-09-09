
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M448 320h-1.625c-7.375-36.5-39.67-63.99-78.43-63.99c-24.63 0-46.2 11.24-60.95 28.74C288.4 248.9 251.3 224 208 224c-58.25 0-105.6 44.75-110.9 101.6C59.25 338.5 32 373.9 32 416c0 53 42.1 96 96 96h320c53 0 96-43 96-96S501 320 448 320zM68.25 303.3C83.25 238.6 140.3 192 208 192c40.75 0 78.63 17.25 105.4 46.5C324.9 232 337.5 227.7 350.5 225.6C343.8 188.2 311.3 160 272 160H254.4C247 123.5 214.8 96 176 96S105 123.5 97.63 160H80C35.75 160 0 195.8 0 240c0 33.88 21.25 62.71 51 74.34C56.5 310.3 62.25 306.4 68.25 303.3z"/><path className="fa-secondary" d="M630.1 248.7C552.7 263.5 481 204 481 125.6c0-45.12 24.25-86.62 63.88-109c6.125-3.375 4.625-12.62-2.375-13.87C532.9 .875 523 0 513.1 0c-88.88 0-161.1 71.62-161.1 160c0 .75 .25 1.25 .25 2c16.25 16.75 27 38.75 30.25 63.12c38.5 5.125 71.75 29.88 87.63 64.75c23.13 4 44 14.37 61.13 29.12c42.5-4.75 80.63-25.1 107-58.25C642.8 255.3 637.9 247.3 630.1 248.7z"/>
</>],
['light',<>
	<path d="M446.5 321.2c-6.99-37.04-39.49-65.16-78.53-65.16c-12.03 0-23.75 2.701-34.42 7.88C315.7 239.2 286.8 224 255.9 224c-52.95 0-96.02 43.08-96.02 96.04c0 1.809 .0645 3.641 .1934 5.508c-37.93 13.16-64.21 49.07-64.21 90.42C95.9 468.9 138.1 512 191.9 512h240.1c52.88 0 95.95-43.07 95.95-95.96C527.1 368.1 492.5 328.2 446.5 321.2zM432 480H194.2c-32.89 0-62.1-23.84-65.87-56.51c-3.941-34.19 19.38-64.5 52.33-70.31c8.951-1.629 14.92-10.37 13.01-19.26c-1.125-5.004-1.752-9.629-1.752-13.88C191.9 284.6 220.7 256 255.9 256c24.63 0 47.27 14.51 57.77 37.02c4.322 9.344 16.27 12.15 24.29 5.699c12.89-10.31 29.38-13.37 44.93-8.248c20.1 6.619 32.94 26.38 32.94 47.54c0 7.596 6.158 14.04 13.75 14.04c32.17 0 61.02 22.75 65.59 54.58C500.9 446.1 470.4 480 432 480zM95.1 320c-36.73 0-66.4-31.21-63.85-68.47C34.48 217.6 64.28 192 98.31 192h15.45c7.547 0 14.04-5.344 15.49-12.75C135.2 149.5 161.7 128 191.1 128c30.25 0 56.76 21.5 62.76 51.25C256.2 186.7 262.7 192 270.2 192H288c24.61 0 45.8 14.16 56.5 34.61c7.619-1.641 15.47-2.604 23.43-2.604c3.559 0 6.931 .4824 10.42 .8105C365.3 187.3 329.9 160 288 160H282.5c-13.25-37.75-49.5-64-90.49-64c-40.1 0-77.26 26.25-90.51 64H98.87c-50.79 0-94.94 38.26-98.61 88.92c-3.715 51.21 33.24 94.44 81.69 101.7C88.79 339.1 97.57 328.9 107.7 320H95.1zM636.6 248.1c-5.094-8.406-14.5-12.69-24.2-10.75c-31 5.812-62.52-2.281-86.56-22.25c-23.78-19.72-37.42-48.63-37.42-79.38c0-37.13 20.2-71.59 52.61-89.88c8.672-4.781 13.23-14.19 11.61-23.97c-1.625-9.812-9-17.25-18.56-18.97C524.1 .9687 513.7 0 503.1 0c-82.51 0-151.2 58.92-166.1 137.9c10.75 4.516 20.81 10.49 29.92 17.72C373.7 85.86 433.8 31.35 505.1 32c-30.45 25.5-48.63 63.41-48.63 103.7c0 40.28 17.86 78.22 49 104c24.98 20.69 55.66 32 88.2 31.44c-20.97 18.28-46.95 29.75-75.05 32.91l-21.61 2.352c12.4 7.453 23.36 16.88 32.58 27.89c41.26-6.492 78.48-27.14 105.1-59.71C640.1 266.9 641.7 256.5 636.6 248.1z"/>
</>],
['regular',<>
	<path d="M630.1 248.7c-78.58 14.79-150.8-44.79-150.8-123.2c0-45.14 24.46-86.64 64.22-109c6.129-3.438 4.588-12.62-2.373-13.89C533.1 1.191 520.5 0 512.3 0c-69.37 0-127.1 43.29-151.1 103.9c31.84 24.83 52.24 63.54 52.24 107.3c0 12.28-1.719 24.34-5.094 36.09c37.04 11.93 67.07 37.73 85.35 70.79C499.1 318.9 506 320 512.5 320c49.97 0 95.57-22.47 125.8-59.25C642.7 255.3 637.9 247.4 630.1 248.7zM382.8 273.9c-3.75-5.75-8.5-10.62-13.12-15.62c7.375-14 11.88-29.88 11.88-47c0-56-44.38-102-99.75-103.9c-23.62-29.62-60-48.13-99-48.13c-40 0-77.13 19-100.9 50.38C35.13 119.5 0 161.4 0 211.3c0 37 19.5 69.13 48.63 87.5c-27.25 22-44.38 55.5-44.38 93.25c0 66.25 53.5 120 119.1 120h238.4c65.75 0 119.3-53.75 119.3-120C481 333 438.6 283.8 382.8 273.9zM47.75 211.3c0-30.88 24.88-56 55.5-56h6.75c12.25-28.12 40.25-48 72.75-48c34.25 0 63 21.88 74.38 52.25c6.5-2.75 13.62-4.25 21.12-4.25c30.62 0 55.5 25.12 55.5 56c0 7.5-1.75 14.25-4.375 20.75C317.1 227.3 304.3 224 290.4 224c-9.625 0-19 1.25-28.12 3.625C242.3 214.9 219 208 195.1 208c-43.5 0-82.88 22.38-105.9 57.25C65.25 258.9 47.75 237.3 47.75 211.3zM361.8 464H123.4c-39.5 0-71.5-32.25-71.5-72c0-37.63 28.75-68 65.13-71.25C124.1 283.9 156.3 256 194.9 256c23.75 0 44.88 10.75 59.38 27.25C264.5 276.3 276.9 272 290.3 272c30 0 55 20.88 61.63 49C355.3 320.5 358.4 320 361.8 320c39.5 0 71.5 32.25 71.5 72C433.4 431.8 401.3 464 361.8 464z"/>
</>],
['solid',<>
	<path d="M448 320h-1.625c-7.375-36.5-39.68-63.99-78.43-63.99c-24.62 0-46.2 11.24-60.95 28.74C288.4 248.9 251.3 224 208 224c-58.25 0-105.6 44.75-110.9 101.6C59.25 338.5 32 373.9 32 416c0 53 43 96 96 96h320c53 0 96-43 96-96S501 320 448 320zM630.1 248.7C552.7 263.5 481 204 481 125.6c0-45.12 24.25-86.62 63.88-109c6.125-3.375 4.625-12.62-2.375-13.87C532.9 .875 523 0 513.1 0c-88.88 0-161.1 71.62-161.1 160c0 .75 .25 1.25 .25 2c16.25 16.75 27 38.75 30.25 63.12c38.5 5.125 71.75 29.88 87.63 64.75c23.12 4 44 14.37 61.13 29.12c42.5-4.75 80.63-25.1 107-58.25C642.8 255.3 637.9 247.3 630.1 248.7zM68.25 303.3C83.25 238.6 140.3 192 208 192c40.75 0 78.63 17.25 105.4 46.5C324.9 232 337.5 227.8 350.5 225.6C343.8 188.2 311.3 160 272 160H254.4C247 123.5 214.8 96 176 96S105 123.5 97.63 160H80C35.75 160 0 195.8 0 240c0 33.88 21.25 62.71 51 74.34C56.5 310.2 62.25 306.4 68.25 303.3z"/>
</>],
['thin',<>
	<path d="M637.8 242.1c-3.328-5.516-9.5-8.25-15.83-7.016c-32.95 6.172-66.58-2.422-92.27-23.7c-25.38-21.05-39.92-51.92-39.92-84.72c0-39.61 21.56-76.39 56.19-95.95c5.641-3.109 8.609-9.219 7.563-15.59s-5.859-11.25-12.14-12.38C532.1 .9219 522.4 0 512.3 0c-85.05 0-155.2 66.38-159.5 151.1c-.2344 4.406 3.156 8.172 7.578 8.391c4.641 .6562 8.156-3.172 8.391-7.578C372.6 75.7 435.6 16 512.2 16c9.063 0 18.3 .75 26.05 .7344c-39.72 22.42-64.39 64.55-64.39 109.9c0 37.58 16.66 72.95 45.72 97.03c29.33 24.34 67.73 34.25 104.6 25.52c-20.94 25.61-51.02 43.28-84.7 49.75c-4.328 .8438-7.172 5.031-6.344 9.375c.7344 3.828 4.094 6.484 7.844 6.484c.5 0 1.016-.0469 1.531-.1406c37.34-7.188 70.75-26.84 94.05-55.34C640.6 254.3 641.1 247.6 637.8 242.1zM41 310.2c2.531 0 5.047-1.219 6.594-3.469C50.09 303.1 49.17 298.1 45.53 295.6C27.05 282.9 16 262.1 16 240.1c0-37.25 30.36-67.56 67.69-67.56h23.22l1.297-6.422C114.5 134.8 142.4 112 174.5 112c32.08 0 59.97 22.77 66.31 54.13L242.1 172.5h23.22c17.11 0 33.47 6.5 46.09 18.31c3.234 3 8.297 2.859 11.31-.375s2.844-8.297-.375-11.31C306.8 164.6 286.5 156.5 265.3 156.5H254.9C244.8 121.1 211.9 96 174.5 96C137 96 104.2 121.1 94.08 156.5H83.69C37.55 156.5 0 193.1 0 240C0 267.3 13.64 293.1 36.47 308.8C37.86 309.7 39.44 310.2 41 310.2zM478.9 325.6c-5.25-56.88-52.7-101.6-110.1-101.6c-43.25 0-80.3 24.87-98.93 60.74C254.3 267.3 232.6 256 208 256c-38.75 0-71 27.5-78.38 64H128c-53 0-96 43-96 96s43 96 96 96h320c53 0 96-43 96-96C544 373.9 516.8 338.5 478.9 325.6zM448 496H128c-44.11 0-80-35.89-80-80s35.89-80 80-80h14.71l2.594-12.83C151.3 293.5 177.7 272 208 272c18.91 0 36.23 8.189 48.77 23.06l15.41 18.29l11.02-21.23C299.9 259.1 332.4 240 368 240c49.54 0 90.36 37.44 94.94 87.1l.9551 10.34l9.828 3.34c32.46 11.04 54.22 41.31 54.22 75.27C527.1 460.2 492.1 496 448 496z"/>
</>],

]);

const CloudsMoon: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CloudsMoon.displayName = "CloudsMoon";

export default CloudsMoon;
