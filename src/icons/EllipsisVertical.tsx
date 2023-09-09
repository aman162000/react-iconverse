
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"/><path className="fa-secondary" d="M64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200z"/>
</>],
['light',<>
	<path d="M64 384C81.67 384 96 398.3 96 416C96 433.7 81.67 448 64 448C46.33 448 32 433.7 32 416C32 398.3 46.33 384 64 384zM64 224C81.67 224 96 238.3 96 256C96 273.7 81.67 288 64 288C46.33 288 32 273.7 32 256C32 238.3 46.33 224 64 224zM64 128C46.33 128 32 113.7 32 96C32 78.33 46.33 64 64 64C81.67 64 96 78.33 96 96C96 113.7 81.67 128 64 128z"/>
</>],
['regular',<>
	<path d="M64 368C90.51 368 112 389.5 112 416C112 442.5 90.51 464 64 464C37.49 464 16 442.5 16 416C16 389.5 37.49 368 64 368zM64 208C90.51 208 112 229.5 112 256C112 282.5 90.51 304 64 304C37.49 304 16 282.5 16 256C16 229.5 37.49 208 64 208zM64 144C37.49 144 16 122.5 16 96C16 69.49 37.49 48 64 48C90.51 48 112 69.49 112 96C112 122.5 90.51 144 64 144z"/>
</>],
['solid',<>
	<path d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"/>
</>],
['thin',<>
	<path d="M64 368C72.84 368 80 375.2 80 384C80 392.8 72.84 400 64 400C55.16 400 48 392.8 48 384C48 375.2 55.16 368 64 368zM64 240C72.84 240 80 247.2 80 256C80 264.8 72.84 272 64 272C55.16 272 48 264.8 48 256C48 247.2 55.16 240 64 240zM64 144C55.16 144 48 136.8 48 128C48 119.2 55.16 112 64 112C72.84 112 80 119.2 80 128C80 136.8 72.84 144 64 144z"/>
</>],

]);

const EllipsisVertical: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={128} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

EllipsisVertical.displayName = "EllipsisVertical";

export default EllipsisVertical;