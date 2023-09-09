
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M639.1 416C639.1 468.1 596.1 512 543.1 512H271.1c-53 0-96-43-96-95.99c0-50.62 39.25-91.62 88.88-95.37C264.7 317.8 263.1 315 263.1 312c0-61.86 50.25-111.1 112-111.1c45.38 0 84.25 27.13 101.9 65.1c9.876-6.249 21.5-9.999 34.13-9.999c35.25 0 63.1 28.63 63.1 64c0 1.875-.6203 3.619-.7453 5.619C612.7 338.6 639.1 373.9 639.1 416z"/><path className="fa-secondary" d="M144.7 303c-43.63-43.74-43.63-114.7 0-158.3c43.75-43.62 114.8-43.62 158.5 0c9.626 9.748 16.88 20.1 22.25 32.74c9.75-3.749 20.13-5.999 30.75-7.499l29.75-88.86c4-11.87-7.25-23.12-19.25-19.25L278.1 91.2L237.5 8.342c-5.5-11.12-21.5-11.12-27.13 0L168.1 91.2L81.1 61.83C69.22 57.96 57.97 69.21 61.85 81.08l29.38 87.73L8.344 210.3c-11.13 5.624-11.13 21.5 0 27.12l82.88 41.37l-29.38 87.86c-4 11.87 7.375 22.1 19.25 19.12l76.13-25.25c6-12.37 14-23.75 23.5-33.49C167.7 321.7 155.4 313.7 144.7 303zM139.1 223.8c0 40.87 29.25 74.86 67.88 82.36c8-4.749 16.38-8.873 25.25-11.75C238.5 250.2 264.1 211.9 300.5 189.4C287.2 160.3 257.1 139.9 223.1 139.9C177.7 139.9 139.1 177.6 139.1 223.8z"/>
</>],
['light',<>
	<path d="M93.5 322.9L92.63 323l12.5-63.25C106.3 253.5 103.8 247 98.25 243.4l-53.5-35.75l53.5-35.88c5.5-3.5 8-10 6.875-16.38l-12.5-63.25l63.13 12.5c6.5 1.25 12.88-1.5 16.5-6.875L208 44.25l35.75 53.5c3.625 5.375 10 8.125 16.5 6.875l63.13-12.5L313.1 139.6c-1.715 8.658 3.906 17.07 12.56 18.79c8.674 1.729 17.1-3.91 18.81-12.59l14.02-71.03c1-5.125-.625-10.5-4.375-14.38C351.3 56.63 345.8 54.88 340.6 56L264.4 71.13L221.3 6.75c-6-9-20.5-9-26.5 0L151.5 71.25L75.38 56.13C70.13 55 64.75 56.75 61 60.5S55.63 69.75 56.63 74.88l15.12 76.25L7.125 194.3C2.75 197.3 0 202.3 0 207.5s2.75 10.25 7.125 13.25L71.63 264L56.5 340.3c-1 5.125 .625 10.5 4.375 14.38c3 3 7.125 4.625 11.38 4.625c1 0 2 0 3-.25l23.71-4.516C106.5 353 112 346.4 112 338.7C112 328.9 103.2 321.4 93.5 322.9zM543.8 304.3C539.8 259.4 501.1 224 456 224c-17.75 0-34.75 5.25-49.25 15.25C384.3 209.8 349.5 192 312 192C245.8 192 192 245.8 192 312v.375c-38.25 16-64 53.5-64 95.63C128 465.3 174.8 512 232 512h304c57.25 0 104-46.75 104-104C640 353.3 597.4 308.3 543.8 304.3zM536 480H234.4c-33.02 0-63.32-21.22-71.86-53.12c-10.56-39.45 13.34-78 50.74-88.13c7.666-2.006 12.7-9.352 11.78-17.22C224.4 315.6 224 314.1 224 312C224 263.5 263.5 224 312 224c32.25 0 61.75 17.88 77.25 46.75c5.125 9.701 18.3 11.43 25.75 3.375c12.65-13.83 30.66-20.21 49.36-17.52c26.78 3.848 46.38 27.58 47.62 54.6c.0938 2-.1504 3.324-.7305 7.672c-1.268 10.14 7.193 19.02 17.36 17.99c5.629-.5684 5.209-.7422 7.391-.7422c39.75 0 72 32.25 72 72C608 447.8 575.8 480 536 480zM163 284.8c2-11 5.25-21.62 9.625-31.88C159 242.3 150.3 226 150.3 207.5c0-31.75 25.88-57.75 57.75-57.75c18.5 0 34.75 8.875 45.38 22.38C263.6 167.8 274.3 164.5 285.3 162.5C269.8 135.9 241.1 117.8 208 117.8c-49.5 0-89.75 40.25-89.75 89.75C118.3 240.5 136.3 269.3 163 284.8z"/>
</>],
['regular',<>
	<path d="M128 208C128 247.2 156.2 279.6 193.3 286.5C199.9 277.1 207.3 269.1 215.5 262.8C226.8 226.5 250.3 195.9 280.5 174.7C267.9 147.2 240.3 128 208 128C163.8 128 128 163.8 128 208zM96 208C96.02 146.1 146.2 96.01 208 96.01c44.25 0 82.14 25.89 100.3 63.14C329.3 149.7 352.2 144 376 144c9.805 0 19.48 1.035 29.01 2.709l8.767-12.65c5.145-7.414 .8965-17.67-7.984-19.27L317.2 98.78L301.2 10.21C299.6 1.325 289.4-2.921 281.9 2.226L208 53.54L134.1 2.225C126.6-2.922 116.4 1.324 114.8 10.21L98.78 98.78L10.21 114.8C1.326 116.4-2.922 126.6 2.223 134.1l51.3 73.94L2.224 281.9c-5.145 7.414-.8975 17.67 7.983 19.27L98.78 317.2l16.01 88.58c1.605 8.883 11.86 13.13 19.27 7.982l27.06-18.78C160.9 391.3 160 387.8 160 384c0-24.19 5.697-47.81 15.1-69.22C129.9 300.9 96.02 258.7 96 208zM582.8 296.4C575.3 246.4 532 208 480 208c-5.125 0-10.25 .375-15.25 1.125C440.5 188 409.3 176 376 176c-64 0-118.3 45.25-132.4 105.3C211.6 305.1 192 343 192 384c0 70.63 57.38 128 128 128h204c64 0 116-52 116-116C640 354.3 617.3 316.8 582.8 296.4zM524 464H320c-44.25 0-80-35.75-80-80c0-32.75 19.75-61 48.13-73.25C288.8 262.8 327.8 224 376 224c31.25 0 58.38 16.25 74.13 40.75C458.8 259.3 469 256 480 256c30.88 0 56 25.12 56 56c0 5.875-1.25 11.5-2.875 16.88C566.3 333.4 592 361.5 592 396C592 433.6 561.6 464 524 464z"/>
</>],
['solid',<>
	<path d="M96 208c0-61.86 50.14-111.1 111.1-111.1c52.65 0 96.5 36.45 108.5 85.42C334.7 173.1 354.7 168 375.1 168c4.607 0 9.152 .3809 13.68 .8203l24.13-34.76c5.145-7.414 .8965-17.67-7.984-19.27L317.2 98.78L301.2 10.21C299.6 1.325 289.4-2.919 281.9 2.226L208 53.54L134.1 2.225C126.6-2.92 116.4 1.326 114.8 10.21L98.78 98.78L10.21 114.8C1.326 116.4-2.922 126.7 2.223 134.1l51.3 73.94L2.224 281.9c-5.145 7.414-.8975 17.67 7.983 19.27L98.78 317.2l16.01 88.58c1.604 8.881 11.86 13.13 19.27 7.982l10.71-7.432c2.725-35.15 19.85-66.51 45.83-88.1C137.1 309.8 96 263.9 96 208zM128 208c0 44.18 35.82 80 80 80c9.729 0 18.93-1.996 27.56-5.176c7.002-33.65 25.53-62.85 51.57-83.44C282.8 159.3 249.2 128 208 128C163.8 128 128 163.8 128 208zM575.2 325.6c.125-2 .7453-3.744 .7453-5.619c0-35.38-28.75-64-63.1-64c-12.62 0-24.25 3.749-34.13 9.999c-17.62-38.88-56.5-65.1-101.9-65.1c-61.75 0-112 50.12-112 111.1c0 3 .7522 5.743 .8772 8.618c-49.63 3.75-88.88 44.74-88.88 95.37C175.1 469 218.1 512 271.1 512h272c53 0 96-42.99 96-95.99C639.1 373.9 612.7 338.6 575.2 325.6z"/>
</>],
['thin',<>
	<path d="M184.7 303.7c3 0 5.907-1.703 7.25-4.609c1.875-4.016 .125-8.766-3.875-10.64c-26.75-12.48-44.03-39.41-44.03-68.58C144 178 178.1 144 220 144c24.5 0 47.69 12.17 61.97 32.56c2.563 3.609 7.563 4.484 11.16 1.953c3.625-2.531 4.5-7.531 1.969-11.14C277.8 142.7 249.7 128 220 128C169.3 128 128 169.2 128 219.9c0 35.36 20.91 67.97 53.28 83.08C182.4 303.5 183.5 303.7 184.7 303.7zM136.3 355l-52.6 17.44c-3.75 1.188-6.313-.9687-6.969-1.656c-.8438-.8594-2.688-3.203-1.531-6.641l30.53-91.31l-86.1-43C16.34 228.2 16 225.1 16 223.9s.3438-4.266 3.656-5.922l86.1-43.13L75.22 83.73C74.1 80.19 76 77.77 76.88 76.88c.875-.8594 3.344-2.797 6.782-1.641L175 105.8l42.97-86.11C219.7 16.36 222.7 16 224 16c1.281 0 4.344 .3594 6 3.625l43 86.14l91.29-30.52c3.563-1.172 5.969 .7656 6.844 1.625c.875 .8906 2.781 3.312 1.656 6.781l-22.59 67.42c-1.406 4.188 .8751 8.734 5.063 10.12c4.25 1.547 8.719-.8281 10.13-5.031l22.59-67.5c2.656-8.172 .5313-17.03-5.563-23.11c-6.032-6.078-14.94-8.203-23.13-5.516l-78.16 26.12L244.3 12.44C240.4 4.766 232.6 0 224 0c-.0625 0 0 0 0 0C215.4 0 207.6 4.766 203.7 12.47L166.9 86.17L88.66 60.03C80.54 57.39 71.6 59.52 65.6 65.56C59.5 71.64 57.38 80.5 60.03 88.75L86.19 166.8L12.47 203.7C4.781 207.6 0 215.3 0 223.9s4.781 16.34 12.5 20.23L86.19 280.9l-26.16 78.14C57.32 367.2 59.38 376 65.38 382.1c4.375 4.391 10.16 6.75 16.16 6.75c2.375 0 4.813-.375 7.188-1.156l52.66-17.45c4.188-1.391 6.438-5.922 5.063-10.11C145 355.9 140.6 353.7 136.3 355zM575.2 325.6c3.72-59.52-50.1-69.62-63.25-69.62c-12.63 0-24.25 3.749-34.13 9.999c-17.63-38.88-56.5-65.1-101.9-65.1c-22.59 0-115.6 17.38-111.1 120.6c-49.63 3.75-88.88 44.74-88.88 95.37C175.1 469 218.1 512 271.1 512h272c53 0 96-42.99 96-95.99C639.1 373.9 612.7 338.6 575.2 325.6zM543.1 496H271.1c-44.12 0-80-35.89-80-80c0-41.4 32.54-76.28 74.09-79.42l15.45-1.166c0 0-1.531-22.55-1.531-23.41c0-52.94 43.07-96 96-96c37.45 0 71.71 22.22 87.31 56.61l7.594 16.75C498.1 272.1 500.8 272 511.1 272c26.47 0 48 21.53 47.9 48.05c-.2773 1.473-1.379 16.71-1.379 16.71l11.48 3.982C602.3 351.9 623.1 382.2 623.1 416C623.1 460.1 588.1 496 543.1 496z"/>
</>],

]);

const CloudSun: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CloudSun.displayName = "CloudSun";

export default CloudSun;
