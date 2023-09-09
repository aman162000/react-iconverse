
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M384 64.01c0 17.67-14.33 32-32 32h-128v352c0 17.67-14.33 31.99-32 31.99s-32-14.32-32-31.99v-352H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h320C369.7 32.01 384 46.34 384 64.01z"/>
</>],
['light',<>
	<path d="M384 48C384 56.84 376.8 64 368 64h-160v400c0 8.844-7.156 16.01-16 16.01S176 472.8 176 464V64h-160C7.156 64 0 56.84 0 48S7.156 32 16 32h352C376.8 32 384 39.16 384 48z"/>
</>],
['regular',<>
	<path d="M384 56c0 13.25-10.75 24-24 24h-144v376c0 13.25-10.75 24.01-24 24.01S168 469.3 168 456V80h-144C10.75 80 0 69.25 0 56S10.75 32 24 32h336C373.3 32 384 42.75 384 56z"/>
</>],
['solid',<>
	<path d="M384 64.01c0 17.67-14.33 32-32 32h-128v352c0 17.67-14.33 31.99-32 31.99s-32-14.32-32-31.99v-352H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h320C369.7 32.01 384 46.34 384 64.01z"/>
</>],
['thin',<>
	<path d="M384 40c0 4.406-3.578 8-8 8h-176v424c0 4.406-3.578 8.006-8 8.006S184 476.4 184 472V48h-176C3.578 48 0 44.41 0 40S3.578 32 8 32h368C380.4 32 384 35.59 384 40z"/>
</>],

]);

const T: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

T.displayName = "T";

export default T;
