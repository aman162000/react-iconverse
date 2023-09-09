
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M608 0c-17.6 0-32 14.4-32 31.1V160H64V31.1C64 14.4 49.6 0 32 0S0 14.4 0 31.1v480h64v-32h512v32h64v-480C640 14.4 625.6 0 608 0zM576 416H64V224h512V416z"/>
</>],
['light',<>
	<path d="M624 0C615.2 0 608 7.162 608 16V160H32V16C32 7.162 24.84 0 16 0S0 7.162 0 16v480C0 504.8 7.164 512 16 512S32 504.8 32 496V448h576v48c0 8.836 7.164 16 16 16s16-7.164 16-16v-480C640 7.162 632.8 0 624 0zM608 416H32V192h576V416z"/>
</>],
['regular',<>
	<path d="M616 0c-13.25 0-24 10.75-24 24V144h-544V24C48 10.75 37.25 0 24 0S0 10.75 0 24v464C0 501.3 10.75 512 24 512s24-10.75 24-24V448h544v40c0 13.25 10.75 24 24 24S640 501.3 640 488V24C640 10.75 629.3 0 616 0zM48 400V192h544v208H48z"/>
</>],
['solid',<>
	<path d="M608 0c-17.6 0-32 14.4-32 31.1V160H64V31.1C64 14.4 49.6 0 32 0S0 14.4 0 31.1v480h64v-32h512v32h64v-480C640 14.4 625.6 0 608 0zM576 416H64V224h512V416z"/>
</>],
['thin',<>
	<path d="M600 0c-4.422 0-8 3.594-8 8V176h-544V8C48 3.594 44.42 0 40 0S32 3.594 32 8v496C32 508.4 35.58 512 40 512s8-3.594 8-8V448h544v56c0 4.406 3.578 8 8 8S608 508.4 608 504V8C608 3.594 604.4 0 600 0zM592 432h-544V192h544V432z"/>
</>],

]);

const ShelvesEmpty: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ShelvesEmpty.displayName = "ShelvesEmpty";

export default ShelvesEmpty;
