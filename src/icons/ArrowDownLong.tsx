
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M310.6 329.4c12.5 12.5 12.5 32.75 0 45.25l-128 128c-12.5 12.5-32.75 12.5-45.25 0l-128-128c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 434.8l105.4-105.4C271.6 323.1 279.8 320 288 320S304.4 323.1 310.6 329.4z"/><path className="fa-secondary" d="M160 434.8l-32-32V32c0-17.69 14.31-32 32-32s32 14.31 32 32v370.8L160 434.8z"/>
</>],
['light',<>
	<path d="M315.3 363.3l-144 144C168.2 510.4 164.1 512 160 512s-8.188-1.562-11.31-4.688l-144-144c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0L144 457.4V16C144 7.156 151.2 0 160 0s16 7.156 16 16v441.4l116.7-116.7c6.25-6.25 16.38-6.25 22.62 0S321.6 357.1 315.3 363.3z"/>
</>],
['regular',<>
	<path d="M7.031 335C11.72 330.3 17.84 328 24 328s12.28 2.344 16.97 7.031L136 430.1V24C136 10.75 146.8 0 160 0s24 10.75 24 24v406.1l95.03-95.03c9.375-9.375 24.56-9.375 33.94 0s9.375 24.56 0 33.94l-136 136c-9.375 9.375-24.56 9.375-33.94 0l-136-136C-2.344 359.6-2.344 344.4 7.031 335z"/>
</>],
['solid',<>
	<path d="M9.375 329.4c12.51-12.51 32.76-12.49 45.25 0L128 402.8V32c0-17.69 14.31-32 32-32s32 14.31 32 32v370.8l73.38-73.38c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-128 128c-12.5 12.5-32.75 12.5-45.25 0l-128-128C-3.125 362.1-3.125 341.9 9.375 329.4z"/>
</>],
['thin',<>
	<path d="M154.3 509.7c3.125 3.125 8.188 3.125 11.31 0l152-152C319.2 356.1 320 354.1 320 352s-.7813-4.094-2.344-5.656c-3.125-3.125-8.188-3.125-11.31 0L168 484.7V8C168 3.594 164.4 0 160 0S152 3.594 152 8v476.7l-138.3-138.3c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31L154.3 509.7z"/>
</>],

]);

const ArrowDownLong: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ArrowDownLong.displayName = "ArrowDownLong";

export default ArrowDownLong;
