
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M320 0C355.3 0 384 28.65 384 64V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H320z"/>
</>],
['light',<>
	<path d="M384 448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H320C355.3 0 384 28.65 384 64V448zM352 448V64C352 46.33 337.7 32 320 32H64C46.33 32 32 46.33 32 64V448C32 465.7 46.33 480 64 480H320C337.7 480 352 465.7 352 448z"/>
</>],
['regular',<>
	<path d="M384 448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H320C355.3 0 384 28.65 384 64V448zM336 448V64C336 55.16 328.8 48 320 48H64C55.16 48 48 55.16 48 64V448C48 456.8 55.16 464 64 464H320C328.8 464 336 456.8 336 448z"/>
</>],
['solid',<>
	<path d="M320 0C355.3 0 384 28.65 384 64V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H320z"/>
</>],
['thin',<>
	<path d="M384 448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H320C355.3 0 384 28.65 384 64V448zM368 448V64C368 37.49 346.5 16 320 16H64C37.49 16 16 37.49 16 64V448C16 474.5 37.49 496 64 496H320C346.5 496 368 474.5 368 448z"/>
</>],

]);

const RectangleVertical: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

RectangleVertical.displayName = "RectangleVertical";

export default RectangleVertical;
