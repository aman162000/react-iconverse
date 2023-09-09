
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"/>
</>],
['light',<>
	<path d="M64 128v255.1c0 28.37 34.5 42.74 54.63 22.62l128-127.1c12.5-12.5 12.5-32.75 0-45.25l-128-127.1C98.5 85.27 64 99.52 64 128zM224 256l-128 127.1V128L224 256z"/>
</>],
['regular',<>
	<path d="M48 143.1v224c0 42.63 51.76 64.13 82.01 33.88l112-111.9c18.63-18.75 18.63-49.25 0-68l-112-111.9C99.76 79.97 48 101.3 48 143.1zM208 255.1L96.01 367.1V143.1L208 255.1z"/>
</>],
['solid',<>
	<path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"/>
</>],
['thin',<>
	<path d="M248.5 238.6l-144-136C99.94 98.26 94.01 96 87.1 96C74.84 96 64 106.7 64 120v272C64 405.3 74.82 416 87.1 416c6.012 0 11.94-2.26 16.48-6.553l144-136C253.3 268.9 256 262.6 256 255.1S253.3 243.1 248.5 238.6zM237.5 261.8l-144 136C92 399.2 90.05 400 87.1 400C83.59 400 80 396.4 80 392v-272c0-4.412 3.588-8 7.996-8c2.055 0 4.008 .7754 5.498 2.184l143.1 135.1C239.1 251.7 240 253.8 240 256S239.1 260.3 237.5 261.8z"/>
</>],

]);

const CaretRight: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={256} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CaretRight.displayName = "CaretRight";

export default CaretRight;
