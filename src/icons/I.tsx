
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M320 448c0 17.67-14.31 32-32 32H32c-17.69 0-32-14.33-32-32s14.31-32 32-32h96v-320H32c-17.69 0-32-14.33-32-32s14.31-32 32-32h256c17.69 0 32 14.33 32 32s-14.31 32-32 32h-96v320h96C305.7 416 320 430.3 320 448z"/>
</>],
['light',<>
	<path d="M320 464c0 8.844-7.156 16-16 16h-288C7.156 480 0 472.8 0 464S7.156 448 16 448h128V64h-128C7.156 64 0 56.84 0 48S7.156 32 16 32h288C312.8 32 320 39.16 320 48S312.8 64 304 64h-128v384h128C312.8 448 320 455.2 320 464z"/>
</>],
['regular',<>
	<path d="M320 456c0 13.25-10.75 24-24 24h-272C10.75 480 0 469.3 0 456s10.75-24 24-24h112v-352h-112C10.75 80 0 69.25 0 56S10.75 32 24 32h272C309.3 32 320 42.75 320 56S309.3 80 296 80h-112v352h112C309.3 432 320 442.8 320 456z"/>
</>],
['solid',<>
	<path d="M320 448c0 17.67-14.31 32-32 32H32c-17.69 0-32-14.33-32-32s14.31-32 32-32h96v-320H32c-17.69 0-32-14.33-32-32s14.31-32 32-32h256c17.69 0 32 14.33 32 32s-14.31 32-32 32h-96v320h96C305.7 416 320 430.3 320 448z"/>
</>],
['thin',<>
	<path d="M320 472c0 4.406-3.594 8-8 8h-304C3.594 480 0 476.4 0 472s3.594-8 8-8h144v-416h-144C3.594 48 0 44.41 0 40S3.594 32 8 32h304C316.4 32 320 35.59 320 40S316.4 48 312 48h-144v416h144C316.4 464 320 467.6 320 472z"/>
</>],

]);

const I: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

I.displayName = "I";

export default I;
