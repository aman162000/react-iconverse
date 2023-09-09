
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M237.6 328.7c13.03 11.95 13.9 32.22 1.969 45.27l-87.1 96.09c-12.12 13.26-35.06 13.26-47.19 0l-87.1-96.09c-11.94-13.05-11.06-33.31 1.969-45.27c13.59-12.46 33.8-10.48 45.22 1.969L96 366.1V64.03C96 46.33 110.3 32 128 32s32 14.33 32 32.03v302l32.4-35.4C204.4 317.7 224.6 316.8 237.6 328.7z"/><path className="fa-secondary" d="M431.6 138l-87.1-96.09c-12.12-13.26-35.06-13.26-47.19 0l-87.1 96.09C196.5 151.1 197.3 171.4 210.4 183.3c13.02 11.95 33.27 11.04 45.22-1.973L288 145.9v302C288 465.7 302.3 480 320 480s32-14.33 32-32.03V145.9l32.4 35.39c11.42 12.45 31.63 14.43 45.22 1.973C442.7 171.4 443.5 151.1 431.6 138z"/>
</>],
['light',<>
	<path d="M224 352c-4.094 0-8.188 1.562-11.31 4.688L144 425.4V48C144 39.16 136.8 32 128 32S112 39.16 112 48v377.4l-68.69-68.69c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l96 96c6.25 6.25 16.38 6.25 22.62 0l96-96c6.25-6.25 6.25-16.38 0-22.62C232.2 353.6 228.1 352 224 352zM427.3 132.7l-96-96c-6.25-6.25-16.38-6.25-22.62 0l-96 96c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L304 86.63V464c0 8.844 7.156 16 16 16s16-7.156 16-16V86.63l68.69 68.69C407.8 158.4 411.9 160 416 160s8.188-1.562 11.31-4.688C433.6 149.1 433.6 138.9 427.3 132.7z"/>
</>],
['regular',<>
	<path d="M206.4 335.1L152 394.9V56.02C152 42.76 141.3 32 128 32S104 42.76 104 56.02v338.9l-54.37-58.95c-4.719-5.125-11.16-7.719-17.62-7.719c-5.812 0-11.66 2.094-16.28 6.375c-9.75 8.977-10.34 24.18-1.344 33.94l95.1 104.1c9.062 9.82 26.19 9.82 35.25 0l95.1-104.1c9-9.758 8.406-24.96-1.344-33.94C230.5 325.5 215.3 326.2 206.4 335.1zM433.6 143.4l-95.1-104.1c-9.062-9.82-26.19-9.82-35.25 0L206.4 143.4c-9 9.758-8.406 24.96 1.344 33.94c4.623 4.281 10.47 6.375 16.28 6.375c6.469 0 12.91-2.594 17.62-7.719L296 117.1v338.9C296 469.2 306.8 480 320 480s24-10.76 24-24.02V117.1l54.37 58.95c8.938 9.758 24.12 10.41 33.9 1.344C442 168.4 442.6 153.2 433.6 143.4z"/>
</>],
['solid',<>
	<path d="M431.6 138l-87.1-96.09c-12.12-13.26-35.06-13.26-47.19 0l-87.1 96.09C196.5 151.1 197.3 171.4 210.4 183.3c13.02 11.95 33.27 11.04 45.22-1.973L288 145.9v302C288 465.7 302.3 480 320 480s32-14.33 32-32.03V145.9l32.4 35.39c11.42 12.45 31.63 14.43 45.22 1.973C442.7 171.4 443.5 151.1 431.6 138zM192.4 330.7L160 366.1V64.03C160 46.33 145.7 32 128 32S96 46.33 96 64.03v302L63.6 330.7c-11.42-12.45-31.63-14.43-45.22-1.969c-13.03 11.95-13.9 32.22-1.969 45.27l87.1 96.09c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27C224.6 316.8 204.4 317.7 192.4 330.7z"/>
</>],
['thin',<>
	<path d="M210.1 370.7L136 451.5V40C136 35.59 132.4 32 128 32S120 35.59 120 40v411.5l-74.1-80.85c-1.594-1.719-3.75-2.594-5.906-2.594c-1.938 0-3.875 .6875-5.406 2.094c-3.25 3.002-3.469 8.064-.5 11.32l88 96.02c3.062 3.312 8.75 3.312 11.81 0l88-96.02c2.969-3.252 2.75-8.314-.5-11.32C218.2 367.2 213.1 367.4 210.1 370.7zM413.9 130.5l-88-96.02c-3.062-3.312-8.75-3.312-11.81 0l-88 96.02c-2.969 3.252-2.75 8.314 .5 11.32c3.25 3 8.312 2.781 11.31-.5L312 60.47V471.1C312 476.4 315.6 480 320 480s8-3.594 8-8.002V60.47l74.1 80.85c1.594 1.719 3.75 2.594 5.906 2.594c1.938 0 3.875-.6875 5.406-2.094C416.7 138.8 416.9 133.8 413.9 130.5z"/>
</>],

]);

const ArrowDownArrowUp: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ArrowDownArrowUp.displayName = "ArrowDownArrowUp";

export default ArrowDownArrowUp;
