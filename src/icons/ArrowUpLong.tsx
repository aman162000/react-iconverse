
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M288 192c-8.188 0-16.38-3.125-22.62-9.375L160 77.25L54.63 182.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l128-128c12.5-12.5 32.75-12.5 45.25 0l128 128c12.5 12.5 12.5 32.75 0 45.25C304.4 188.9 296.2 192 288 192z"/><path className="fa-secondary" d="M192 109.3V480c0 17.69-14.31 32-32 32s-32-14.31-32-32V109.3l32-32L192 109.3z"/>
</>],
['light',<>
	<path d="M4.688 148.7l144-144C151.8 1.562 155.9 0 160 0s8.188 1.562 11.31 4.688l144 144c6.25 6.25 6.25 16.38 0 22.62s-16.38 6.25-22.62 0L176 54.63V496c0 8.844-7.156 16-16 16s-16-7.156-16-16V54.63L27.31 171.3c-6.25 6.25-16.38 6.25-22.62 0S-1.563 154.9 4.688 148.7z"/>
</>],
['regular',<>
	<path d="M312.1 176.1C308.3 181.7 302.2 184 296 184s-12.28-2.344-16.97-7.031L184 81.94V488c0 13.25-10.75 24-24 24s-24-10.75-24-24V81.94L40.97 176.1c-9.375 9.375-24.56 9.375-33.94 0s-9.375-24.56 0-33.94l136-136c9.375-9.375 24.56-9.375 33.94 0l136 136C322.3 152.4 322.3 167.6 312.1 176.1z"/>
</>],
['solid',<>
	<path d="M310.6 182.6c-12.51 12.51-32.76 12.49-45.25 0L192 109.3V480c0 17.69-14.31 32-32 32s-32-14.31-32-32V109.3L54.63 182.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l128-128c12.5-12.5 32.75-12.5 45.25 0l128 128C323.1 149.9 323.1 170.1 310.6 182.6z"/>
</>],
['thin',<>
	<path d="M165.7 2.344c-3.125-3.125-8.188-3.125-11.31 0l-152 152C.7813 155.9 0 157.9 0 159.1S.7813 164.1 2.344 165.7c3.125 3.125 8.188 3.125 11.31 0L152 27.31v476.7C152 508.4 155.6 512 160 512s8-3.594 8-8V27.31l138.3 138.3c3.125 3.125 8.188 3.125 11.31 0s3.125-8.188 0-11.31L165.7 2.344z"/>
</>],

]);

const ArrowUpLong: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ArrowUpLong.displayName = "ArrowUpLong";

export default ArrowUpLong;