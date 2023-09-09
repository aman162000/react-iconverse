
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M0 448C0 430.3 14.33 416 32 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H32C14.33 480 0 465.7 0 448z"/>
</>],
['light',<>
	<path d="M0 464C0 455.2 7.164 448 16 448H496C504.8 448 512 455.2 512 464C512 472.8 504.8 480 496 480H16C7.164 480 0 472.8 0 464z"/>
</>],
['regular',<>
	<path d="M0 456C0 442.7 10.75 432 24 432H488C501.3 432 512 442.7 512 456C512 469.3 501.3 480 488 480H24C10.75 480 0 469.3 0 456z"/>
</>],
['solid',<>
	<path d="M0 448C0 430.3 14.33 416 32 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H32C14.33 480 0 465.7 0 448z"/>
</>],
['thin',<>
	<path d="M0 472C0 467.6 3.582 464 8 464H504C508.4 464 512 467.6 512 472C512 476.4 508.4 480 504 480H8C3.582 480 0 476.4 0 472z"/>
</>],

]);

const WindowMinimize: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

WindowMinimize.displayName = "WindowMinimize";

export default WindowMinimize;
