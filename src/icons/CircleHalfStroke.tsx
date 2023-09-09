
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0V512z"/><path className="fa-secondary" d="M256 512V448C362 448 448 362 448 256C448 149.1 362 64 256 64V0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512z"/>
</>],
['light',<>
	<path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM240 479.4V32.56C123.8 40.77 32 137.7 32 256C32 374.3 123.8 471.2 240 479.4zM272 32.56V479.4C388.2 471.2 480 374.3 480 256C480 137.7 388.2 40.77 272 32.56V32.56z"/>
</>],
['regular',<>
	<path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48V464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
</>],
['solid',<>
	<path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64V448C362 448 448 362 448 256C448 149.1 362 64 256 64z"/>
</>],
['thin',<>
	<path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM264 495.9C392.8 491.6 496 385.9 496 256C496 126.1 392.8 20.35 264 16.13V495.9zM248 495.9V16.13C119.2 20.35 16 126.1 16 256C16 385.9 119.2 491.6 248 495.9z"/>
</>],

]);

const CircleHalfStroke: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CircleHalfStroke.displayName = "CircleHalfStroke";

export default CircleHalfStroke;
