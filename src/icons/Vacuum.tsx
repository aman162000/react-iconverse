
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M368 352C323.8 352 288 387.8 288 432c0 44.18 35.82 80 80 80s80-35.82 80-80C448 387.8 412.2 352 368 352zM368 448c-8.836 0-16-7.164-16-16c0-8.838 7.164-16 16-16s16 7.162 16 16C384 440.8 376.8 448 368 448zM640 128c-.0762-70.66-57.34-127.9-128-128H301.6C241.6 0 189 42.59 176.5 101.2L102.1 448H48C21.49 448 0 469.5 0 496C0 504.8 7.164 512 16 512h160C184.8 512 192 504.8 192 496v-32C192 455.2 184.8 448 176 448H167.6L239 114.6C245.4 85.16 271.5 64.11 301.6 64H512c35.35 .1406 63.88 28.91 63.74 64.26c-.1211 29.96-20.1 55.82-50.26 62.25c15.14 16.43 27.27 35.39 35.88 56c-.1484-.3711-.2402-.7666-.3887-1.138C607.2 226.1 640 181.1 640 128z"/><path className="fa-secondary" d="M576 320v128c0 35.35-28.65 64-64 64h-65.78c44.91-41.51 47.66-111.6 6.148-156.5C426.8 327.9 389 315.1 352 321.6V160c0-17.67 14.33-32 32-32C489.1 128 576 214 576 320z"/>
</>],
['light',<>
	<path d="M352 400c-8.875 0-16 7.125-16 16s7.125 16 16 16s16-7.125 16-16S360.9 400 352 400zM640 112c-.125-61.88-50.13-111.9-112-112H302.1C249.1 .125 203.4 37.38 192.5 89.25L124.9 416H80C35.88 416 0 451.9 0 496C0 504.9 7.125 512 16 512h192C216.9 512 224 504.9 224 496v-64C224 423.1 216.9 416 208 416H157.6L223.8 95.75C231.6 58.75 264.2 32.12 302.1 32H528C572.1 32 608 67.88 608 112S572.1 192 528 192h-33.13C458.5 151.2 406.5 128 352 128c-17.62 0-32 14.38-32 32v165.9C282.9 339.1 256 374.4 256 416c0 53 43 96 96 96h128c35.38 0 64-28.62 64-64v-128c0-33.75-8.875-66.88-25.88-96H528C589.9 223.9 639.9 173.9 640 112zM192 448v32H34.75C41.5 460.9 59.62 448 80 448H192zM352 480c-35.38 0-64-28.62-64-64s28.62-64 64-64s64 28.62 64 64S387.4 480 352 480zM512 448c0 17.62-14.38 32-32 32h-57c25.62-28 32.13-68.5 16.75-103.2C424.4 342.1 389.9 319.9 352 320V160c88.25 0 160 71.75 160 160V448z"/>
</>],
['regular',<>
	<path d="M640 120C639.9 53.75 586.3 .125 520 0H309.6C253.4 0 204 39.88 192.2 94.88L130.2 384H96c-53 0-96 43-96 96v16C0 504.9 7.125 512 16 512H224c17.62 0 32-14.38 32-32v-64c0-17.62-14.38-32-32-32H179.4L239.2 104.9C246.5 71.75 275.8 48.12 309.6 48H520c33.5-.125 62.5 22.88 70.13 55.5c7.625 32.5-8.25 66-38.38 80.75C515.9 148.1 467 127.9 416 128h-32c-17.62 0-32 14.38-32 32v171.2C367 323.9 383.4 320.1 400 320V176H416c79.38 0 144 64.62 144 144v128c0 8.875-7.125 16-16 16h-37.25c-5.25 18.12-15.13 34.63-28.5 48H544c35.38 0 64-28.62 64-64v-128c0-34.5-9.375-68.25-27-97.88C616.1 201.4 640 163.8 640 120zM208 432v32H50.75c6.75-19.12 24.87-32 45.25-32H208zM400 352c-44.13 0-80 35.88-80 80s35.88 80 80 80s80-35.88 80-80S444.1 352 400 352zM400 448c-8.875 0-16-7.125-16-16s7.125-16 16-16s16 7.125 16 16S408.9 448 400 448z"/>
</>],
['solid',<>
	<path d="M143.3 256l-41.13 192H48C21.5 448 0 469.5 0 496C0 504.9 7.125 512 16 512h160C184.9 512 192 504.9 192 496v-32C192 455.1 184.9 448 176 448H167.6l41.14-192H143.3zM640 128c-.125-70.63-57.38-127.9-128-128H301.6c-60 0-112.6 42.47-125.1 101.2L150.1 224h65.5L239 114.6C245.5 85.11 271.5 64.13 301.6 64H512c32.63 .125 59.88 24.75 63.38 57.25c3.5 32.38-18.01 62.25-49.89 69.25C489.2 150.6 437.9 128 384 128c-17.62 0-32 14.38-32 32v165.7c-7.68 2.73-15 6.227-21.64 10.72c-10.21 6.906-19.04 15.73-25.94 25.94C294.1 377.7 288 396.1 288 416c0 52.95 43.05 96 96 96h128c35.38 0 64-28.62 64-64v-128c0-25.62-5.145-51-15.02-74.63C607.1 226.1 640 181.1 640 128zM384 448c-17.64 0-32-14.36-32-32s14.36-32 32-32s32 14.36 32 32S401.6 448 384 448z"/>
</>],
['thin',<>
	<path d="M368 352C323.8 352 288 387.8 288 432s35.82 80 80 80c44.18 0 80-35.82 80-80S412.2 352 368 352zM368 496c-35.29 0-64-28.71-64-64s28.71-64 64-64c35.29 0 64 28.71 64 64S403.3 496 368 496zM640 112C640 50.25 589.8 0 528 0h-193.3C270.4 0 215.8 43.78 201.9 106.5L129.6 432H56C25.12 432 0 457.1 0 488C0 501.2 10.77 512 24 512H176c13.23 0 24-10.78 24-24v-32c0-13.22-10.77-24-24-24H145.1L217.5 109.1C229.8 54.63 277.1 16 334.7 16H528c52.94 0 96 43.06 96 96c0 44.81-31.42 83.71-74.9 93.51C519.2 159 467.3 128 408 128h-16C369.9 128 352 145.9 352 168V320c0 4.406 3.578 8 8 8S368 324.4 368 320V168c0-13.22 10.77-24 24-24h16c83.81 0 152 68.19 152 152v176c0 13.22-10.77 24-24 24H448c-4.422 0-8 3.594-8 8S443.6 512 448 512h88c22.06 0 40-17.94 40-40v-176c0-27.55-7.303-53.19-19.11-76.16C605.3 206.8 640 162.8 640 112zM176 448c4.406 0 8 3.594 8 8v32c0 4.406-3.594 8-8 8H24c-4.406 0-8-3.594-8-8C16 465.9 33.94 448 56 448H176z"/>
</>],

]);

const Vacuum: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Vacuum.displayName = "Vacuum";

export default Vacuum;