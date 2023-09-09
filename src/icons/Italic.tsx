
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M384 64.01c0 17.69-14.31 32-32 32h-58.67l-133.3 320H224c17.69 0 32 14.31 32 32s-14.31 32-32 32H32c-17.69 0-32-14.31-32-32s14.31-32 32-32h58.67l133.3-320H160c-17.69 0-32-14.31-32-32s14.31-32 32-32h192C369.7 32.01 384 46.33 384 64.01z"/>
</>],
['light',<>
	<path d="M384 48C384 56.84 376.8 64 368 64h-83.27L132.1 448H208c8.844 0 16 7.156 16 16S216.8 480 208 480h-192C7.156 480 0 472.8 0 464S7.156 448 16 448h83.27l152.6-384H176C167.2 64 160 56.84 160 48S167.2 32 176 32h192C376.8 32 384 39.16 384 48z"/>
</>],
['regular',<>
	<path d="M384 56c0 13.25-10.75 24-24 24h-67.98l-146.9 352H232c13.25 0 24 10.75 24 24S245.3 480 232 480h-208C10.75 480 0 469.3 0 456s10.75-24 24-24h70.6l146.9-352H152C138.8 80 128 69.25 128 56S138.8 32 152 32h208C373.3 32 384 42.75 384 56z"/>
</>],
['solid',<>
	<path d="M384 64.01c0 17.69-14.31 32-32 32h-58.67l-133.3 320H224c17.69 0 32 14.31 32 32s-14.31 32-32 32H32c-17.69 0-32-14.31-32-32s14.31-32 32-32h58.67l133.3-320H160c-17.69 0-32-14.31-32-32s14.31-32 32-32h192C369.7 32.01 384 46.33 384 64.01z"/>
</>],
['thin',<>
	<path d="M384 40c0 4.422-3.594 8-8 8h-91.77l-168 416H216c4.406 0 8 3.578 8 8S220.4 480 216 480h-208C3.594 480 0 476.4 0 472s3.594-8 8-8h91.77l168-416H168C163.6 48 160 44.42 160 40S163.6 32 168 32h208C380.4 32 384 35.58 384 40z"/>
</>],

]);

const Italic: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Italic.displayName = "Italic";

export default Italic;
