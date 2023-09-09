
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M64 352c17.69 0 32-14.32 32-31.1V64.01c0-17.67-14.31-32.01-32-32.01S32 46.34 32 64.01v255.1C32 337.7 46.31 352 64 352z"/><path className="fa-secondary" d="M64 400c-22.09 0-40 17.91-40 40s17.91 39.1 40 39.1s40-17.9 40-39.1S86.09 400 64 400z"/>
</>],
['light',<>
	<path d="M64 400c-17.67 0-32 14.32-32 31.99s14.33 32 32 32s32-14.33 32-32S81.67 400 64 400zM64 352c8.844 0 16-7.166 16-16.01v-288c0-8.844-7.156-15.99-16-15.99S48 39.16 48 48v288C48 344.8 55.16 352 64 352z"/>
</>],
['regular',<>
	<path d="M64 368c13.27 0 24-10.75 24-24v-288c0-13.25-10.73-23.99-24-23.99S40 42.75 40 56v288C40 357.3 50.73 368 64 368zM64 416c-17.67 0-32 14.33-32 32s14.33 32.01 32 32.01S96 465.7 96 448S81.67 416 64 416z"/>
</>],
['solid',<>
	<path d="M64 352c17.69 0 32-14.32 32-31.1V64.01c0-17.67-14.31-32.01-32-32.01S32 46.34 32 64.01v255.1C32 337.7 46.31 352 64 352zM64 400c-22.09 0-40 17.91-40 40s17.91 39.1 40 39.1s40-17.9 40-39.1S86.09 400 64 400z"/>
</>],
['thin',<>
	<path d="M64 384c4.406 0 8-3.578 8-8V40c0-4.422-3.594-7.994-8-7.994S56 35.58 56 40v336C56 380.4 59.59 384 64 384zM64 432c-8.836 0-16 7.164-16 16s7.164 16 16 16s16-7.164 16-16S72.84 432 64 432z"/>
</>],

]);

const Exclamation: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={128} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Exclamation.displayName = "Exclamation";

export default Exclamation;
