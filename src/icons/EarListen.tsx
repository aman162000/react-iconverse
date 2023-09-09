
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M287.7 70.31c-110.9-29.38-211.7 47.53-222.8 150.9C62.1 239.9 78.73 255.1 97.57 255.1c16.61 0 29.25-13.07 31.24-29.55c6.934-57.22 57.21-101.3 116.9-98.3c71.71 3.594 117.1 76.82 102.5 146.9c-6.551 29.65-21.4 56.87-43.38 78.87L288 370.7v13.25c0 31.4-22.71 57.58-52.58 62.98C220.4 449.7 208 463.3 208 478.6c0 19.78 17.88 34.94 37.38 31.64c55.92-9.443 99.63-55.28 105.9-112.2c40.11-40.68 62.89-93.95 64.65-150.9C418.4 166.4 365.8 91 287.7 70.31zM240 200c22.06 0 40 17.94 40 40c0 13.25 10.75 24 24 24s24-10.75 24-24c0-48.53-39.47-88-88-88S152 191.5 152 240c0 13.25 10.75 24 24 24S200 253.3 200 240C200 217.9 217.9 200 240 200z"/><path className="fa-secondary" d="M160.1 320c-17.64 0-32.02 14.37-32.02 31.1s14.38 31.1 32.02 31.1s32.02-14.37 32.02-31.1S177.8 320 160.1 320zM86.66 361.4c-12.51-12.49-32.77-12.49-45.27 0c-12.51 12.5-12.51 32.78 0 45.27l63.96 63.99c12.51 12.49 32.77 12.49 45.27 .002c12.51-12.5 12.51-32.78 0-45.27L86.66 361.4zM32.02 448C14.38 448 0 462.4 0 480S14.38 512 32.02 512c17.64 0 32.02-14.37 32.02-31.1S49.66 448 32.02 448zM397.8 3.125c-15.91-7.594-35.05-.8438-42.66 15.09c-7.594 15.97-.8281 35.06 15.12 42.66C417.5 83.41 448 134.9 448 192c0 17.69 14.33 32 32 32S512 209.7 512 192C512 110.3 467.2 36.19 397.8 3.125z"/>
</>],
['light',<>
	<path d="M240 63.1c-98.69 0-176 77.32-176 176C64 248.8 71.16 256 80 256S96 248.8 96 240C96 159.3 159.3 96.01 240 96.01c79.41 0 144 66.14 144 147.4c0 49.2-17.8 91.56-54.39 129.5l-3.812 3.953l-.5781 5.453C319.5 436.2 274 480 224 480c-8.844 0-16 7.156-16 15.1S215.2 512 224 512c64.16 0 122.4-53.69 132.3-120.8C396.5 348 416 299.6 416 243.4C416 144.5 337 63.1 240 63.1zM160 240C160 195.9 195.9 160 240 160S320 195.9 320 240c0 8.844 7.156 15.1 16 15.1S352 248.8 352 240c0-61.75-50.25-111.1-112-111.1S128 178.3 128 240C128 248.8 135.2 256 144 256S160 248.8 160 240zM32 456c-13.25 0-24 10.75-24 23.1c0 13.25 10.75 23.1 24 23.1c13.26 0 24-10.75 24-23.1C56 466.7 45.26 456 32 456zM160 328c-13.25 0-24 10.75-24 23.1S146.7 376 160 376c13.26 0 24-10.75 24-23.1S173.3 328 160 328zM75.31 372.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.37 0 22.62l64 63.1C119.8 462.4 123.9 464 128 464s8.188-1.562 11.31-4.687c6.25-6.25 6.25-16.37 0-22.62L75.31 372.7zM357.1 .8386c-8.469-2.828-17.45 1.734-20.23 10.11c-2.797 8.39 1.734 17.45 10.11 20.23C426.5 57.73 480 131.9 480 215.8v8.199c0 8.844 7.156 16 16 16S512 232.8 512 224V215.8C512 118.1 449.7 31.73 357.1 .8386z"/>
</>],
['regular',<>
	<path d="M80.97 367c-9.375-9.377-24.56-9.377-33.94 0c-9.375 9.375-9.375 24.56 0 33.94l64 64C115.7 469.7 121.9 471.1 128 471.1s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L80.97 367zM386.7 2.516c-11.86-5.875-26.28-1.125-32.2 10.75c-5.922 11.84-1.125 26.25 10.73 32.19c.8438 .4062 84.67 43.56 98.92 157.5c1.516 12.16 11.86 21.03 23.78 21.03c1 0 2-.0625 3.016-.1875c13.14-1.656 22.47-13.62 20.83-26.78C494.4 57.86 391.1 4.703 386.7 2.516zM24 463.1c-13.25 0-24 10.74-24 24S10.75 512 24 512s24-10.75 24-24S37.25 463.1 24 463.1zM168 319.1c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24S192 357.2 192 343.1C192 330.7 181.3 319.1 168 319.1zM240 63.1c-97.05 0-176 81.24-176 181.1c0 13.25 10.75 24 24 24s24-10.75 24-24c0-73.41 57.42-133.1 128-133.1s128 59.72 128 133.1c0 46.97-17.52 91.19-49.31 124.5l-5.625 5.906l-.8594 8.125c-4.844 45.78-41.83 80.31-86.02 80.31c-13.25 0-24 10.75-24 24c0 13.25 10.75 24 24 24c66.11 0 121.8-48.91 132.6-115.1C395.8 355.4 416 301.8 416 245.1C416 145.2 337 63.1 240 63.1zM240 200c22.06 0 40 17.94 40 40c0 13.25 10.75 24 24 24s24-10.75 24-24c0-48.53-39.47-88-88-88S152 191.5 152 240c0 13.25 10.75 24 24 24S200 253.3 200 240C200 217.9 217.9 200 240 200z"/>
</>],
['solid',<>
	<path d="M160.1 320c-17.64 0-32.02 14.37-32.02 31.1s14.38 31.1 32.02 31.1s32.02-14.37 32.02-31.1S177.8 320 160.1 320zM86.66 361.4c-12.51-12.49-32.77-12.49-45.27 0c-12.51 12.5-12.51 32.78 0 45.27l63.96 63.99c12.51 12.49 32.77 12.49 45.27 .002c12.51-12.5 12.51-32.78 0-45.27L86.66 361.4zM32.02 448C14.38 448 0 462.4 0 480S14.38 512 32.02 512c17.64 0 32.02-14.37 32.02-31.1S49.66 448 32.02 448zM287.7 70.31c-110.9-29.38-211.7 47.53-222.8 150.9C62.1 239.9 78.73 255.1 97.57 255.1c16.61 0 29.25-13.07 31.24-29.55c6.934-57.22 57.21-101.3 116.9-98.3c71.71 3.594 117.1 76.82 102.5 146.9c-6.551 29.65-21.4 56.87-43.38 78.87L288 370.7v13.25c0 31.4-22.71 57.58-52.58 62.98C220.4 449.7 208 463.3 208 478.6c0 19.78 17.88 34.94 37.38 31.64c55.92-9.443 99.63-55.28 105.9-112.2c40.11-40.68 62.89-93.95 64.65-150.9C418.4 166.4 365.8 91 287.7 70.31zM240 200c22.06 0 40 17.94 40 40c0 13.25 10.75 24 24 24s24-10.75 24-24c0-48.53-39.47-88-88-88S152 191.5 152 240c0 13.25 10.75 24 24 24S200 253.3 200 240C200 217.9 217.9 200 240 200zM397.8 3.125c-15.91-7.594-35.05-.8438-42.66 15.09c-7.594 15.97-.8281 35.06 15.12 42.66C417.5 83.41 448 134.9 448 192c0 17.69 14.33 32 32 32S512 209.7 512 192C512 110.3 467.2 36.19 397.8 3.125z"/>
</>],
['thin',<>
	<path d="M160.1 320c-17.62 0-32.02 14.37-32.02 31.1s14.4 31.1 32.02 31.1s32.02-14.38 32.02-31.1S177.7 320 160.1 320zM160 368c-8.822 0-16-7.178-16-15.1c0-8.822 7.178-15.1 16-15.1s16 7.178 16 15.1C176 360.8 168.8 368 160 368zM32.02 448C14.4 448 0 462.4 0 480S14.4 512 32.02 512s32.02-14.38 32.02-31.1S49.65 448 32.02 448zM32 496c-8.822 0-16-7.178-16-15.1c0-8.822 7.178-15.1 16-15.1s16 7.178 16 15.1C48 488.8 40.82 496 32 496zM379.9 1.028c-3.844-2.187-8.719-.7656-10.86 3.141c-2.141 3.859-.7344 8.734 3.141 10.86c71.04 39.23 118.5 113.4 123.9 193.5c.2813 4.234 3.797 7.469 7.969 7.469c.1875 0 .375 0 .5469-.0156c4.406-.2969 7.75-4.109 7.453-8.514C506.3 121.9 455.6 42.85 379.9 1.028zM69.66 378.3c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.187 0 11.31l64 63.1C123.9 455.2 125.1 455.1 128 455.1s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.187 0-11.31L69.66 378.3zM360 255.1c4.422 0 8-3.578 8-7.1V231.1c0-66.17-53.83-119.1-120-119.1S128 165.8 128 231.1v15.1C128 252.4 131.6 255.1 136 255.1S144 252.4 144 247.1V231.1c0-57.34 46.66-103.1 104-103.1S352 174.7 352 231.1v15.1C352 252.4 355.6 255.1 360 255.1zM248 48c-101.5 0-184 82.55-184 183.1v15.1C64 252.4 67.58 255.1 72 255.1S80 252.4 80 247.1V231.1c0-92.64 75.36-167.1 168-167.1S416 139.4 416 231.1c0 57.42-22.19 111.5-62.47 152.4l-1.953 1.969l-.2969 2.766C344.6 450.1 293.3 495.1 232 495.1c-4.422 0-8 3.578-8 7.1c0 4.422 3.578 7.1 8 7.1c68.58 0 126.1-50.69 134.9-118.4C408.9 350 432 292.7 432 231.1C432 130.5 349.5 48 248 48z"/>
</>],

]);

const EarListen: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

EarListen.displayName = "EarListen";

export default EarListen;
