
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M16.41 138l87.1-96.09c12.12-13.26 35.06-13.26 47.19 0l87.1 96.09c11.94 13.05 11.06 33.31-1.969 45.27c-13.02 11.95-33.27 11.04-45.22-1.973L160 145.9v302C160 465.7 145.7 480 128 480s-32-14.33-32-32.03V145.9L63.6 181.3C52.17 193.8 31.97 195.8 18.38 183.3C5.348 171.4 4.473 151.1 16.41 138z"/><path className="fa-secondary" d="M210.4 328.7c-13.03 11.95-13.9 32.22-1.969 45.27l87.1 96.09c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27c-13.59-12.46-33.8-10.48-45.22 1.969L352 366.1V64.03C352 46.33 337.7 32 320 32s-32 14.33-32 32.03v302l-32.4-35.4C243.6 317.7 223.4 316.8 210.4 328.7z"/>
</>],
['light',<>
	<path d="M224 160c4.094 0 8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62l-96-96c-6.25-6.25-16.38-6.25-22.62 0l-96 96c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L112 86.63V464C112 472.8 119.2 480 128 480s16-7.156 16-16V86.63l68.69 68.69C215.8 158.4 219.9 160 224 160zM427.3 356.7C424.2 353.6 420.1 352 416 352s-8.188 1.562-11.31 4.688L336 425.4V48C336 39.16 328.8 32 320 32s-16 7.156-16 16v377.4l-68.69-68.69c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l96 96c6.25 6.25 16.38 6.25 22.62 0l96-96C433.6 373.1 433.6 362.9 427.3 356.7z"/>
</>],
['regular',<>
	<path d="M240.3 177.4c9.75-8.977 10.34-24.18 1.344-33.94L145.6 39.37c-9.062-9.82-26.19-9.82-35.25 0L14.38 143.4c-9 9.758-8.406 24.96 1.344 33.94C20.35 181.7 26.19 183.8 32 183.8c6.469 0 12.91-2.594 17.62-7.719L104 117.1v338.9C104 469.2 114.8 480 128 480s24-10.76 24-24.02V117.1l54.37 58.95C215.3 185.8 230.5 186.5 240.3 177.4zM432.3 334.6c-9.779-9.07-24.97-8.414-33.9 1.344L344 394.9V56.02C344 42.76 333.3 32 320 32s-24 10.76-24 24.02v338.9l-54.37-58.95c-4.719-5.125-11.16-7.719-17.62-7.719c-5.812 0-11.66 2.094-16.28 6.375c-9.75 8.977-10.34 24.18-1.344 33.94l95.1 104.1c9.062 9.82 26.19 9.82 35.25 0l95.1-104.1C442.6 358.8 442 343.6 432.3 334.6z"/>
</>],
['solid',<>
	<path d="M18.38 183.3C31.97 195.8 52.17 193.8 63.6 181.3L96 145.9v302C96 465.7 110.3 480 128 480s32-14.33 32-32.03V145.9L192.4 181.3c11.95 13.01 32.2 13.92 45.22 1.973c13.03-11.95 13.9-32.22 1.969-45.27L151.6 41.95c-12.12-13.26-35.06-13.26-47.19 0l-87.1 96.09C4.473 151.1 5.348 171.4 18.38 183.3zM210.4 328.7c-13.03 11.95-13.9 32.22-1.969 45.27l87.1 96.09c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27c-13.59-12.46-33.8-10.48-45.22 1.969L352 366.1V64.03C352 46.33 337.7 32 320 32s-32 14.33-32 32.03v302l-32.4-35.4C243.6 317.7 223.4 316.8 210.4 328.7z"/>
</>],
['thin',<>
	<path d="M226.6 370.2c-3.25 3.002-3.469 8.064-.5 11.32l88 96.02c3.062 3.312 8.75 3.312 11.81 0l88-96.02c2.969-3.252 2.75-8.314-.5-11.32c-1.531-1.406-3.469-2.094-5.406-2.094c-2.156 0-4.312 .875-5.906 2.594L328 451.5V40C328 35.59 324.4 32 320 32s-8 3.594-8 8.002v411.5l-74.1-80.85C234.9 367.4 229.8 367.2 226.6 370.2zM34.59 141.8c1.531 1.406 3.469 2.094 5.406 2.094c2.156 0 4.312-.875 5.906-2.594L120 60.47V471.1C120 476.4 123.6 480 128 480s8-3.594 8-8.002V60.47l74.1 80.85c3 3.281 8.062 3.5 11.31 .5c3.25-3.002 3.469-8.064 .5-11.32L133.9 34.48c-3.062-3.312-8.75-3.312-11.81 0L34.09 130.5C31.12 133.8 31.34 138.8 34.59 141.8z"/>
</>],

]);

const ArrowUpArrowDown: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ArrowUpArrowDown.displayName = "ArrowUpArrowDown";

export default ArrowUpArrowDown;