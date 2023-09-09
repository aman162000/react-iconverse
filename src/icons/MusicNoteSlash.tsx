
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M630.8 469.1L38.81 5.111C34.41 1.674 29.19 .0006 24.03 .0006c-7.125 0-14.19 3.157-18.91 9.188c-8.187 10.44-6.37 25.53 4.068 33.7L601.2 506.9c10.5 8.203 25.57 6.328 33.69-4.078C643.1 492.4 641.2 477.3 630.8 469.1z"/><path className="fa-secondary" d="M467.1 6.325c-7.1-6.002-18.5-7.877-28.12-5.002l-96.62 28.5c-13.25 4.125-22.37 16.5-22.37 30.5v165.2l63.1 50.16v-127.6l72.1-21.38c13.62-3.1 22.1-16.5 22.1-30.75l.0004-63.99C479.1 21.84 475.2 12.32 467.1 6.325zM271.1 351.1c-61.86 0-111.1 35.82-111.1 80s50.14 79.1 111.1 79.1s111.1-35.82 111.1-79.1S333.9 351.1 271.1 351.1z"/>
</>],
['light',<>
	<path d="M633.9 483.4L25.92 3.42c-6.938-5.453-17-4.25-22.48 2.641c-5.469 6.938-4.281 17 2.641 22.48l608 480C617 510.9 620.5 512 623.1 512c4.734 0 9.422-2.094 12.58-6.078C642 498.1 640.8 488.9 633.9 483.4zM320 376.1c-20.38-14.88-48.63-24.13-80-24.13c-61.88 0-112 35.88-112 80C128 476.1 178.1 512 240 512s111.1-35.88 111.1-80L352 362.8l-32-25.26V376.1zM240 479.1c-47.13 0-79.1-25.25-79.1-48c0-22.75 32.87-48 79.1-48s80 25.25 80 48C320 454.7 287.1 479.1 240 479.1zM352 191.1l138.1-35.38C503.1 152.2 512 139.1 512 126.2V31.98c0-10.25-4.938-19.81-13.19-25.81c-8.375-6-19.06-7.801-28.81-4.551l-128.6 31.88C328.8 37.74 320 49.99 320 63.99v110.4l32 25.26V191.1zM351.5 63.99l128.5-32.03L480 126.2l-128 32l.0467-94.17L351.5 63.99z"/>
</>],
['regular',<>
	<path d="M630.8 469.1L352 250.6V195.4l137.6-33.38C503 157.7 512 145.5 512 131.5V31.98c0-10.25-4.938-19.81-13.19-25.81c-8.25-6.125-18.69-7.699-28.44-4.699l-144 35.38C313.1 41.09 304 53.34 304 67.34v145.6L38.81 5.111C28.34-3.061 13.32-1.248 5.12 9.189c-8.172 10.44-6.354 25.53 4.068 33.7L601.2 506.9C605.6 510.3 610.8 512 615.1 512c7.125 0 14.16-3.161 18.89-9.193C643.1 492.4 641.2 477.3 630.8 469.1zM352 79.09l112-25.25V119.7L352 144.1V79.09zM304 366.5c-18.12-9.125-40.13-14.5-64-14.5c-61.88 0-112 35.88-112 80C128 476.1 178.1 512 240 512s111.1-35.88 111.1-80L352 372.6l-48-37.62V366.5zM240 463.1c-39.75 0-63.1-20.75-63.1-31.1c0-11.25 24.25-32.01 63.1-32.01s64 20.75 64 32C304 443.2 279.8 463.1 240 463.1z"/>
</>],
['solid',<>
	<path d="M630.8 469.1l-246.8-193.4v-127.6l72.1-21.38c13.62-3.1 22.1-16.5 22.1-30.75l.0004-63.99c0-10.13-4.75-19.64-12.88-25.64c-7.1-6.002-18.5-7.877-28.12-5.002l-96.62 28.5C329.1 33.95 319.1 46.33 319.1 60.33v165.2L38.81 5.111C34.41 1.674 29.19 .0006 24.03 .0006c-7.125 0-14.19 3.157-18.91 9.188c-8.187 10.44-6.37 25.53 4.068 33.7L601.2 506.9c10.5 8.203 25.57 6.328 33.69-4.078C643.1 492.4 641.2 477.3 630.8 469.1zM271.1 351.1c-61.86 0-111.1 35.82-111.1 80s50.14 79.1 111.1 79.1s111.1-35.82 111.1-79.1S333.9 351.1 271.1 351.1z"/>
</>],
['thin',<>
	<path d="M336.1 388C318.9 366.3 289.5 352 256 352c-53.02 0-96 35.81-96 79.1c0 44.18 42.98 80 96 80s95.1-35.82 95.1-80l.0935-58.55l-15.1-12.72V388zM256 496c-44.11 0-79.1-28.71-79.1-64S211.9 368 256 368s79.1 28.71 79.1 64S300.1 496 256 496zM352.1 162.8l110.7-32.53c10.22-3 17.23-12.38 17.23-23.02V24.01c0-16.02-15.39-27.54-30.76-23.03l-84.65 24.83c-16.91 5.078-28.5 20.65-28.5 38.3v112.7l15.1 12.72V162.8zM352 64.07c0-10.66 7.078-19.97 17.31-22.97l84.39-24.76c5.121-1.504 10.25 2.336 10.25 7.676V107.2c0 3.551-2.34 6.676-5.742 7.676l-106.2 31.2L352 64.07zM636.1 497.7l-623.1-496c-1.463-1.164-3.217-1.73-4.963-1.73c-2.352 0-4.689 1.029-6.287 3.012c-2.75 3.469-2.172 8.5 1.281 11.25l623.1 496c1.484 1.172 3.234 1.734 4.984 1.734c2.344 0 4.688-1.031 6.266-3.016C641 505.5 640.4 500.5 636.1 497.7z"/>
</>],

]);

const MusicNoteSlash: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MusicNoteSlash.displayName = "MusicNoteSlash";

export default MusicNoteSlash;