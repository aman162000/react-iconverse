
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0V512z"/><path className="fa-secondary" d="M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512V0z"/>
</>],
['light',<>
	<path d="M224.1 1.971C241.6-.2109 256 14.33 256 31.1V480C256 497.7 241.6 512.2 224.1 510C97.75 494.3 0 386.6 0 255.1C0 125.4 97.75 17.69 224.1 1.971V1.971zM224 34.26C115.5 49.77 32 143.2 32 255.1C32 368.8 115.5 462.2 224 477.7V34.26z"/>
</>],
['regular',<>
	<path d="M224.1 1.971C241.6-.2109 256 14.33 256 31.1V480C256 497.7 241.6 512.2 224.1 510C97.75 494.3 0 386.6 0 255.1C0 125.4 97.75 17.69 224.1 1.971V1.971zM208 53.55C116.3 75.21 48 157.7 48 255.1C48 354.3 116.3 436.8 208 458.4V53.55z"/>
</>],
['solid',<>
	<path d="M256 480C256 497.7 241.6 512.2 224.1 510C97.75 494.3 0 386.6 0 255.1C0 125.4 97.75 17.69 224.1 1.971C241.6-.2109 256 14.33 256 31.1V480z"/>
</>],
['thin',<>
	<path d="M224.1 1.971C241.6-.2109 256 14.33 256 31.1V480C256 497.7 241.6 512.2 224.1 510C97.75 494.3 0 386.6 0 255.1C0 125.4 97.75 17.69 224.1 1.971V1.971zM226 17.85C107.6 32.58 16 133.6 16 255.1C16 378.4 107.6 479.4 226 494.1C232.7 494.1 240 489.4 240 480V31.1C240 22.55 232.7 17.02 226 17.85V17.85z"/>
</>],

]);

const CircleHalf: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CircleHalf.displayName = "CircleHalf";

export default CircleHalf;
