
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M288 288H32c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h256c17.69 0 32 14.3 32 31.99S305.7 288 288 288z"/>
</>],
['light',<>
	<path d="M320 256C320 264.8 312.8 272 304 272h-288C7.156 272 0 264.8 0 256C0 247.2 7.156 240 16 240h288C312.8 240 320 247.2 320 256z"/>
</>],
['regular',<>
	<path d="M320 256C320 269.3 309.3 280 296 280h-272C10.75 280 0 269.3 0 256C0 242.8 10.75 232 24 232h272C309.3 232 320 242.8 320 256z"/>
</>],
['solid',<>
	<path d="M288 288H32c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h256c17.69 0 32 14.3 32 31.99S305.7 288 288 288z"/>
</>],
['thin',<>
	<path d="M8 264h304c4.406 0 8-3.572 8-7.994C320 251.6 316.4 248 312 248h-304C3.594 248 0 251.6 0 256C0 260.4 3.594 264 8 264z"/>
</>],

]);

const Hyphen: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Hyphen.displayName = "Hyphen";

export default Hyphen;
