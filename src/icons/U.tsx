
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M384 64.01v225.7c0 104.1-86.13 190.3-192 190.3s-192-85.38-192-190.3V64.01C0 46.34 14.33 32.01 32 32.01S64 46.34 64 64.01v225.7c0 69.67 57.42 126.3 128 126.3s128-56.67 128-126.3V64.01c0-17.67 14.33-32 32-32S384 46.34 384 64.01z"/>
</>],
['light',<>
	<path d="M192 480c-105.9 0-192-86.13-192-192V48C0 39.16 7.156 32 16 32S32 39.16 32 48V288c0 88.22 71.78 160 160 160s160-71.78 160-160V48C352 39.16 359.2 32 368 32S384 39.16 384 48V288C384 393.9 297.9 480 192 480z"/>
</>],
['regular',<>
	<path d="M192 480c-105.9 0-192-84.76-192-188.9V56C0 42.75 10.75 32 24 32S48 42.75 48 56v235.1C48 368.8 112.6 432 192 432s144-63.22 144-140.9V56C336 42.75 346.8 32 360 32S384 42.75 384 56v235.1C384 395.3 297.9 480 192 480z"/>
</>],
['solid',<>
	<path d="M384 64.01v225.7c0 104.1-86.13 190.3-192 190.3s-192-85.38-192-190.3V64.01C0 46.34 14.33 32.01 32 32.01S64 46.34 64 64.01v225.7c0 69.67 57.42 126.3 128 126.3s128-56.67 128-126.3V64.01c0-17.67 14.33-32 32-32S384 46.34 384 64.01z"/>
</>],
['thin',<>
	<path d="M192 480c-105.9 0-192-86.13-192-192V40C0 35.59 3.578 32 8 32S16 35.59 16 40V288c0 97.03 78.95 176 176 176s176-78.97 176-176V40C368 35.59 371.6 32 376 32S384 35.59 384 40V288C384 393.9 297.9 480 192 480z"/>
</>],

]);

const U: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

U.displayName = "U";

export default U;