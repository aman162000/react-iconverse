
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M416 160C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224H32C14.33 224 0 209.7 0 192C0 174.3 14.33 160 32 160H416z"/><path className="fa-secondary" d="M416 288C433.7 288 448 302.3 448 320C448 337.7 433.7 352 416 352H32C14.33 352 0 337.7 0 320C0 302.3 14.33 288 32 288H416z"/>
</>],
['light',<>
	<path d="M432 208H16C7.164 208 0 200.8 0 192C0 183.2 7.164 176 16 176H432C440.8 176 448 183.2 448 192C448 200.8 440.8 208 432 208zM432 336H16C7.164 336 0 328.8 0 320C0 311.2 7.164 304 16 304H432C440.8 304 448 311.2 448 320C448 328.8 440.8 336 432 336z"/>
</>],
['regular',<>
	<path d="M424 216H24C10.75 216 0 205.3 0 192C0 178.7 10.75 168 24 168H424C437.3 168 448 178.7 448 192C448 205.3 437.3 216 424 216zM424 344H24C10.75 344 0 333.3 0 320C0 306.7 10.75 296 24 296H424C437.3 296 448 306.7 448 320C448 333.3 437.3 344 424 344z"/>
</>],
['solid',<>
	<path d="M416 288C433.7 288 448 302.3 448 320C448 337.7 433.7 352 416 352H32C14.33 352 0 337.7 0 320C0 302.3 14.33 288 32 288H416zM416 160C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224H32C14.33 224 0 209.7 0 192C0 174.3 14.33 160 32 160H416z"/>
</>],
['thin',<>
	<path d="M440 200H8C3.582 200 0 196.4 0 192C0 187.6 3.582 184 8 184H440C444.4 184 448 187.6 448 192C448 196.4 444.4 200 440 200zM440 328H8C3.582 328 0 324.4 0 320C0 315.6 3.582 312 8 312H440C444.4 312 448 315.6 448 320C448 324.4 444.4 328 440 328z"/>
</>],

]);

const GripLines: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

GripLines.displayName = "GripLines";

export default GripLines;