
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M64 352c-35.35 0-64 28.65-64 64c0 35.35 28.65 64 64 64s64-28.65 64-64C128 380.7 99.35 352 64 352z"/>
</>],
['light',<>
	<path d="M64 352c-35.35 0-64 28.65-64 64c0 35.35 28.65 64 64 64s64-28.65 64-64C128 380.7 99.35 352 64 352zM64 448c-17.64 0-32-14.36-32-32s14.36-32 32-32s32 14.36 32 32S81.64 448 64 448z"/>
</>],
['regular',<>
	<path d="M64 352c-35.35 0-64 28.65-64 64c0 35.35 28.65 64 64 64s64-28.65 64-64C128 380.7 99.35 352 64 352zM64 432c-8.822 0-16-7.178-16-16s7.178-16 16-16s16 7.178 16 16S72.82 432 64 432z"/>
</>],
['solid',<>
	<path d="M64 352c-35.35 0-64 28.65-64 64c0 35.35 28.65 64 64 64s64-28.65 64-64C128 380.7 99.35 352 64 352z"/>
</>],
['thin',<>
	<path d="M64 368c26.47 0 48 21.53 48 48s-21.53 48-48 48s-48-21.53-48-48S37.54 368 64 368zM64 352c-35.35 0-64 28.65-64 64c0 35.35 28.65 64 64 64s64-28.65 64-64C128 380.7 99.35 352 64 352z"/>
</>],

]);

const Period: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={128} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Period.displayName = "Period";

export default Period;
