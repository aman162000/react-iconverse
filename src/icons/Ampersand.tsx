
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M201.3 239.5l51.72-40.08C275.3 181.4 288 154.7 288 126.2c0-51.91-42.22-94.14-94.13-94.14H142.1C90.22 32.01 48 74.25 48 126.2c0 27.14 10.09 53.13 28.62 73.42l30.06 32.25L41.31 282.5C15.06 303.7 0 335.2 0 368.9c0 61.25 49.84 111.1 111.1 111.1l70-.0049c37.53 0 72.44-18.64 93.28-49.87l7.188-10.77l47.03 50.47C334.9 476.6 343.4 480 352 480c7.812 0 15.66-2.844 21.81-8.594c12.94-12.05 13.66-32.3 1.594-45.23L201.3 239.5zM142.1 96.01h51.75C210.5 96.01 224 109.5 224 126.2c0 9.156-4.094 17.7-10.69 23.05L157.5 192.5L123.7 156.2C116.1 147.9 112 137.3 112 126.2C112 109.5 125.5 96.01 142.1 96.01zM221.1 394.6c-8.938 13.39-23.88 21.39-39.94 21.39H111.1C85.13 416 64 394.9 64 368.9c0-14.28 6.375-27.64 17-36.22l69.53-53.88l86.16 92.44L221.1 394.6z"/><path className="fa-secondary" d="M318 364.7l60.59-90.89c9.812-14.7 5.844-34.58-8.875-44.37c-14.78-9.828-34.63-5.828-44.38 8.875l-52.19 78.28L318 364.7z"/>
</>],
['light',<>
	<path d="M379.5 452.9l-71.4-74.19l72.99-104.5c5.062-7.234 3.281-17.22-3.969-22.28c-7.156-5.016-17.19-3.312-22.28 3.969l-69.36 99.32L170.4 235.6l69.87-55.36c20.16-15.88 31.72-39.55 31.72-64.94C271.1 69.38 233.9 32 187.1 32H132.9C86.09 32 47.1 69.38 47.1 115.3c0 24.81 9.437 48.55 26.69 67l48.22 50.09L38.72 299.1C14.12 318.5 0 347.4 0 378.3C0 434.4 46.48 480 103.7 480h66.61c41.1 0 81.25-20.27 104.1-54.23l14.17-20.3l67.01 69.63C359.6 478.4 363.8 480 367.1 480c3.1 0 7.1-1.484 11.09-4.469C385.5 469.4 385.6 459.3 379.5 452.9zM97.9 160.3c-11.56-12.33-17.91-28.31-17.91-44.97C79.1 87.02 103.7 64 132.9 64h54.12c29.19 0 52.94 23.02 52.94 51.31c0 15.52-7.125 30.03-19.56 39.83L148.1 212.5L97.9 160.3zM249 407.5C231.3 432.8 201.9 448 170.3 448H103.7c-39.56 0-71.75-31.25-71.75-69.67c0-21.08 9.656-40.8 26.56-54.11l86.62-68.64l121.6 126.4L249 407.5z"/>
</>],
['regular',<>
	<path d="M360 480c-6.25 0-12.5-2.422-17.19-7.266l-60.47-62.14l-14.69 22.48c-19.19 29.38-51.44 46.93-86.56 46.93L103.7 480C46.55 480 0 433.5 0 376.4c0-32.88 15.81-64.11 42.34-83.56l73.19-53.67L79.22 201.8C59.09 181.2 48 153.9 48 125C48 73.73 89.72 32 141 32h53.94C246.3 32 288 73.73 288 125c0 29.55-14.22 57.59-38.03 75.03L188.4 245.2l86.56 88.98l64.94-99.33c7.281-11.06 22.19-14.19 33.22-6.953c11.09 7.266 14.22 22.14 6.969 33.23l-70.84 108.3l67.94 69.83c9.25 9.5 9.062 24.69-.4375 33.94C372.1 477.7 366 480 360 480zM149.3 273.9L70.72 331.5C56.5 341.9 48 358.7 48 376.4C48 407 72.97 432 103.7 432h77.25c18.88 0 36.28-9.406 46.56-25.19l20.59-31.47L149.3 273.9zM141 80C116.2 80 96 100.2 96 125c0 16.28 6.25 31.66 17.59 43.3l41 42.14l67-49.13C233.1 152.9 240 139.3 240 125C240 100.2 219.8 80 194.1 80H141z"/>
</>],
['solid',<>
	<path d="M318 364.7l60.59-90.89c9.812-14.7 5.844-34.58-8.875-44.37c-14.78-9.828-34.63-5.828-44.38 8.875l-52.19 78.28l-71.88-77.08l51.72-40.08C275.3 181.4 288 154.7 288 126.2c0-51.91-42.22-94.14-94.13-94.14H142.1C90.22 32.01 48 74.25 48 126.2c0 27.14 10.09 53.13 28.62 73.42l30.06 32.25L41.31 282.5C15.06 303.7 0 335.2 0 368.9c0 61.25 49.84 111.1 111.1 111.1l70-.0049c37.53 0 72.44-18.64 93.28-49.87l7.188-10.77l47.03 50.47C334.9 476.6 343.4 480 352 480c7.812 0 15.66-2.844 21.81-8.594c12.94-12.05 13.66-32.3 1.594-45.23L318 364.7zM142.1 96.01h51.75C210.5 96.01 224 109.5 224 126.2c0 9.156-4.094 17.7-10.69 23.05L157.5 192.5L123.7 156.2C116.1 147.9 112 137.3 112 126.2C112 109.5 125.5 96.01 142.1 96.01zM221.1 394.6c-8.938 13.39-23.88 21.39-39.94 21.39H111.1C85.13 416 64 394.9 64 368.9c0-14.28 6.375-27.64 17-36.22l69.53-53.88l86.16 92.44L221.1 394.6z"/>
</>],
['thin',<>
	<path d="M381.8 466.5l-79.12-83.3l79.87-114.6c2.531-3.625 1.625-8.609-2-11.14c-3.562-2.5-8.562-1.656-11.12 1.984l-77.1 111.9L158.3 231.2l75.84-60.58c18.97-14.88 29.84-37 29.84-60.69C263.1 66.95 228.1 32 183.9 32H136.1C91.94 32 55.1 66.95 55.1 109.9c0 23.59 9.031 46.16 25.44 63.56l53.28 56.09L37.16 307.5c-23.62 18.5-37.16 46.02-37.16 75.52C.0002 436.5 44.75 480 99.75 480h69.56c41.06 0 79.41-19.66 102.6-52.63l21.44-30.78l76.84 80.92C371.8 479.2 373.9 480 375.1 480c1.969 0 3.969-.7344 5.5-2.203C384.7 474.8 384.8 469.7 381.8 466.5zM93.06 162.5C79.47 148.1 71.1 129.4 71.1 109.9C71.1 75.77 100.7 48 136.1 48h47.81c35.34 0 64.09 27.77 64.09 61.91c0 18.75-8.656 36.28-23.78 48.14L147.3 219.5L93.06 162.5zM258.8 418.2C238.6 446.9 205.2 464 169.3 464h-69.56c-46.19 0-83.75-36.33-83.75-80.97c0-24.55 11.31-47.47 31.09-62.97l98.69-78.86l136.3 143.5L258.8 418.2z"/>
</>],

]);

const Ampersand: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Ampersand.displayName = "Ampersand";

export default Ampersand;