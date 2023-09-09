
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M383.7 152.7c2.614 11.17-1.032 22.63-9.579 30.51l124.4 37.27c4.228-9.877 7.503-20.02 9.745-30.46L383.7 152.7zM453.8 35.93l-93.14 93.05c8.011 1.988 15.27 7.023 19.85 14.64c1.503 2.525 2.058 5.275 2.799 7.982l93.02-92.94C469.5 50.29 462 42.58 453.8 35.93zM286.9 14.46l41.08 123.1l8.357-5.16c5.129-3.125 10.95-4.439 16.58-4.439c1.941 0 3.988 .3867 5.888 .7383l-41.52-124.5C306.9 6.621 296.8 9.953 286.9 14.46zM163.8 309.6l118.1 78.68l30.52-18.13L194.3 291.5L163.8 309.6zM265.4 249.3l118.1 78.67l30.52-18.13l-118.1-78.67L265.4 249.3zM61.44 370.4l106.9 85.41l29.43-17.48l-106.8-85.4L61.44 370.4z"/><path className="fa-secondary" d="M15.6 397.6c-15.26 9.125-20.14 28.62-11 43.87l32.76 54.87c8.529 14.2 27.57 20.66 43.88 11.12l87.06-51.68L61.44 370.4L15.6 397.6zM194.3 291.5l118.1 78.68l71.06-42.21l-118.1-78.67L194.3 291.5zM369.5 187.5l-73.62 43.71l118.1 78.67l14.95-8.879c31.96-19.11 55.64-47.95 69.56-80.48l-124.4-37.27C372.6 184.7 371.4 186.4 369.5 187.5zM90.88 352.9l106.8 85.4l84.19-50L163.8 309.6L90.88 352.9zM497.9 91.1c-5.859-12.36-13.29-23.31-21.53-33.33l-93.02 92.94c.1056 .3808 .3049 .7441 .3949 1.127l124.5 37.32C515.2 157.7 512.9 123.6 497.9 91.1zM360.7 128.1l93.14-93.05C425.1 12.61 388.9 0 352.4 0c-11.82 0-23.46 1.603-35.19 4.273l41.52 124.5C359.4 128.9 360.1 128.8 360.7 128.1zM264.9 137.7c8.529 14.2 27.57 20.6 43.88 11.06l19.15-11.21l-41.08-123.1c-5.415 2.465-10.98 5.031-16.2 8.162L243.1 38.1C227.9 48.12 223 67.75 232.1 82.87L264.9 137.7z"/>
</>],
['light',<>
	<path d="M497.5 91.1C469.6 33.12 411.8 0 352.4 0c-27.88 0-56.14 7.25-81.77 22.62L243.1 38.1C227.9 48.12 223 67.75 232.1 82.87l32.76 54.87c9.375 15.75 29.38 19.94 43.88 11.06l27.51-16.37c36-21.5 69.6 33.02 32.85 54.9L15.6 397.6c-15.25 9.125-20.13 28.62-11 43.87l32.76 54.87C43.35 506.4 53.97 512 64.85 512c5.625 0 11.27-1.507 16.39-4.507l347.4-206.5C500.2 258.1 533.2 167.5 497.5 91.1zM292.2 121.4l-32.75-54.88C291.7 47.25 312.6 32.12 351.1 32v64C328.3 96.25 314.7 108.1 292.2 121.4zM383.2 104h.75V36.12c36.75 9.125 67.75 34 84.63 69.5c3.375 7.125 6 14.62 7.875 22.25h-68.5c-.25-.25-.25-.5643-.375-.8143C401.7 117.2 393.2 109.4 383.2 104zM256.7 291.4l82.38-48.1l64.25 36.25l-82.25 49L256.7 291.4zM289.3 346.5l-87.5 52l-64.25-36.25l87.5-52L289.3 346.5zM64.72 480l-32.88-54.88l73.88-43.88l64.38 36.13L64.72 480zM432.7 258.5l-62-34.88l14.63-8.75C405.4 203 416.2 181.8 416.2 160h63C478.4 196.5 462.1 232.8 432.7 258.5z"/>
</>],
['regular',<>
	<path d="M497.1 95.38C469.2 36.62 411.4 0 346.4 0c-29.88 0-59.25 8.125-85 23.5L235.7 38.88c-21.88 13-29 41.37-16 63.13L250.6 153.5c12.13 20.25 39.88 29.75 63.13 15.88l25.75-15.37c16-9.625 30.13 14.62 14.38 24L22.43 375c-10.63 6.25-18 16.38-21 28.25c-3 12-1.25 24.38 5.125 34.88l30.75 51.5C45.68 503.4 60.68 512 76.8 512c8.375 0 16.38-2.25 23.63-6.5L426.2 311.9C501.8 266.6 533.1 171.5 497.1 95.38zM212.3 383.2L155.9 351.5l64.25-38.25l56.38 31.88L212.3 383.2zM324.2 316.8L267.7 285l59.5-35.25l56.25 31.62L324.2 316.8zM395.1 128.1c-3.25-4.125-6.875-7.875-10.88-10.88v-63c30 10 55.25 31.63 69.5 61.75c1.875 3.875 2.875 8 4.25 12.12H395.1zM336.1 48.75v56.62c-15.88 2.875-19.38 6.25-45.13 22l-28.88-48.25C289.7 62.62 304.7 51.5 336.1 48.75zM108.3 379.8l56.5 31.87L77.68 463.5l-29-48.25L108.3 379.8zM426.6 250.6l-51.88-29.25C392.7 210.8 403.9 198.2 407.7 176h55.38C459.9 203.5 447.2 229.9 426.6 250.6z"/>
</>],
['solid',<>
	<path d="M497.5 91.1C469.6 33.13 411.8 0 352.4 0c-27.88 0-56.14 7.25-81.77 22.62L243.1 38.1C227.9 48.12 223 67.75 232.1 82.87l32.76 54.87c8.522 14.2 27.59 20.6 43.88 11.06l27.51-16.37c5.125-3.125 10.95-4.439 16.58-4.439c10.88 0 21.35 5.625 27.35 15.62c9 15.12 3.917 34.59-11.08 43.71L15.6 397.6c-15.25 9.125-20.13 28.62-11 43.87l32.76 54.87c8.522 14.2 27.59 20.66 43.88 11.12l347.4-206.5C500.2 258.1 533.2 167.5 497.5 91.1zM319.7 104.1L317.2 106.5l-20.5-61.5c9.75-4.75 19.88-8.125 30.38-10.25l20.63 61.87C337.8 97.37 328.2 99.87 319.7 104.1zM145.8 431.7l-60.5-38.5l30.88-18.25l60.5 38.5L145.8 431.7zM253.3 367.9l-60.5-38.5l30.88-18.25l60.5 38.5L253.3 367.9zM364.2 301.1L303.7 263.5l30.88-18.25l60.5 38.5L364.2 301.1zM384.7 104.7l46-45.1c8.375 6.5 16 13.1 22.5 22.5l-45.63 45.81C401.9 117.8 393.9 110.1 384.7 104.7zM466.7 212.5l-59.5-19.75c3.25-5.375 5.875-10.1 7.5-17.12c1-4.5 1.625-9.125 1.75-13.62l60.38 20.12C474.7 192.5 471.4 202.7 466.7 212.5z"/>
</>],
['thin',<>
	<path d="M497.5 91.1C469.6 33.12 411.8 0 352.4 0c-27.88 0-56.14 7.25-81.77 22.62L243.1 38.1C227.9 48.12 223 67.75 232.1 82.87l32.76 54.87c6.115 10.27 16.69 15.6 27.38 15.6c5.695 0 11.47-1.453 16.51-4.539l27.51-16.37c5.746-3.432 11.37-4.988 16.71-4.988c28.16 0 47.02 41.5 16.13 59.88L15.6 397.6c-15.25 9.125-20.13 28.62-11 43.87l32.76 54.87C43.35 506.4 53.97 512 64.85 512c5.625 0 11.27-1.507 16.39-4.507l347.4-206.5C500.2 258.1 533.2 167.5 497.5 91.1zM328 118.6l-27.67 16.48c-2.402 1.469-5.201 2.246-8.092 2.246c-5.666 0-10.78-2.91-13.69-7.799L245.8 74.61C243.6 70.96 242.1 66.69 243.1 62.58C245 58.44 247.6 54.94 251.3 52.75l27.55-16.4c19.78-11.87 42.18-18.43 65.17-19.78V112.7C338.6 113.8 333.2 115.6 328 118.6zM360 112.7V16.54c53.22 2.76 99.93 33.56 123 82.31C487.5 108.3 490.4 118.1 492.5 128H387.6C380.3 119.8 370.7 114.4 360 112.7zM216.6 296.6l97.21 54l-101.6 60.38l-97.15-53.97L216.6 296.6zM73.14 493.7C70.52 495.2 67.73 496 64.85 496c-5.592 0-10.87-3.012-13.76-7.824l-32.76-54.89c-4.607-7.701-2.199-17.33 5.451-21.91l75.42-44.89l97.14 53.96L73.14 493.7zM329.7 341.1L232.5 287.1l98.42-58.57l96.45 53.58c-2.402 1.627-4.465 3.588-6.981 5.094L329.7 341.1zM441.6 271.8l-94.79-52.66l30.42-18.1c19.34-11.51 27.76-31.7 21.99-52.7C398.8 146.7 397.9 145.5 397.3 144h97.48C499.1 190.9 479.7 239.3 441.6 271.8z"/>
</>],

]);

const CandyCane: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CandyCane.displayName = "CandyCane";

export default CandyCane;
