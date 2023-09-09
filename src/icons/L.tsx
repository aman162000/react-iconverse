
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M320 448c0 17.67-14.31 32-32 32H64c-17.69 0-32-14.33-32-32v-384C32 46.34 46.31 32.01 64 32.01S96 46.34 96 64.01v352h192C305.7 416 320 430.3 320 448z"/>
</>],
['light',<>
	<path d="M304 480h-256C39.16 480 32 472.8 32 464v-416C32 39.16 39.16 32 48 32S64 39.16 64 48V448h240c8.844 0 16 7.156 16 16S312.8 480 304 480z"/>
</>],
['regular',<>
	<path d="M296 480h-240C42.75 480 32 469.3 32 456V56C32 42.75 42.75 32 56 32S80 42.75 80 56V432h216c13.25 0 24 10.75 24 24S309.3 480 296 480z"/>
</>],
['solid',<>
	<path d="M320 448c0 17.67-14.31 32-32 32H64c-17.69 0-32-14.33-32-32v-384C32 46.34 46.31 32.01 64 32.01S96 46.34 96 64.01v352h192C305.7 416 320 430.3 320 448z"/>
</>],
['thin',<>
	<path d="M312 480h-272C35.59 480 32 476.4 32 472V40C32 35.59 35.59 32 40 32S48 35.59 48 40V464h264c4.406 0 8 3.594 8 8S316.4 480 312 480z"/>
</>],

]);

const L: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

L.displayName = "L";

export default L;
