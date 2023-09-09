
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M32 512c-17.67 0-32-14.33-32-32V32c0-17.67 14.33-32 32-32s32 14.33 32 32v448C64 497.7 49.67 512 32 512z"/>
</>],
['light',<>
	<path d="M48 16v480c0 8.832-7.166 16-16 16s-16-7.168-16-16v-480C16 7.166 23.17 0 32 0S48 7.166 48 16z"/>
</>],
['regular',<>
	<path d="M32 512c-13.25 0-24-10.75-24-24V24C8 10.75 18.75 0 32 0s24 10.75 24 24v464C56 501.3 45.25 512 32 512z"/>
</>],
['solid',<>
	<path d="M32 512c-17.67 0-32-14.33-32-32V32c0-17.67 14.33-32 32-32s32 14.33 32 32v448C64 497.7 49.67 512 32 512z"/>
</>],
['thin',<>
	<path d="M40 8v496c0 4.416-3.584 8-8 8s-8-3.584-8-8V8C24 3.582 27.58 0 32 0S40 3.582 40 8z"/>
</>],

]);

const Pipe: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={64} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Pipe.displayName = "Pipe";

export default Pipe;
