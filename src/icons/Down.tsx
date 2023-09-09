
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-9.156-9.156-11.89-22.91-6.938-34.88C7.391 263.8 19.06 256 32 256h320c12.94 0 24.61 7.797 29.56 19.75C386.5 287.7 383.8 301.5 374.6 310.6z"/><path className="fa-secondary" d="M128 256V64c0-17.67 14.33-32 32-32h64c17.67 0 32 14.33 32 32v192H128z"/>
</>],
['light',<>
	<path d="M112 64v176H32c-17.69 0-32 14.36-32 31.1C0 280.3 3.252 288.5 9.375 294.6l160 176C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-176C380.7 288.5 384 280.3 384 271.1C384 254.4 369.7 240 352 240h-80V64c0-17.67-14.33-32-32-32h-96C126.3 32 112 46.33 112 64zM240 64v208l110.9 1.1L192 447.9L32 272H144V64H240z"/>
</>],
['regular',<>
	<path d="M381.6 259.8C376.6 247.8 364.9 240 352 240h-80v-160C272 53.49 250.5 32 224 32H160C133.5 32 112 53.49 112 80v160H32c-12.94 0-24.61 7.797-29.56 19.75C-2.516 271.7 .2188 285.5 9.375 294.6l160 176C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-176C383.8 285.5 386.5 271.7 381.6 259.8zM192 425.4L70.63 288H160V80h64V288h89.37L192 425.4z"/>
</>],
['solid',<>
	<path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-9.156-9.156-11.89-22.91-6.938-34.88C7.391 263.8 19.06 256 32 256h96V64c0-17.67 14.33-32 32-32h64c17.67 0 32 14.33 32 32v192h96c12.94 0 24.61 7.797 29.56 19.75C386.5 287.7 383.8 301.5 374.6 310.6z"/>
</>],
['thin',<>
	<path d="M128 64v192H32C19.06 256 7.391 263.8 2.438 275.8C.7969 279.7 0 283.9 0 287.1C0 296.3 3.25 304.5 9.375 310.6l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160C380.7 304.5 384 296.3 384 287.1c0-4.123-.7969-8.281-2.438-12.25C376.6 263.8 364.9 256 352 256h-96V64c0-17.67-14.33-32-32-32H160C142.3 32 128 46.33 128 64zM224 48c8.822 0 16 7.178 16 16v208H352c6.492 0 12.29 3.877 14.78 9.867C367.6 283.8 368 285.9 368 287.1c0 4.273-1.666 8.291-4.689 11.31l-160 160C200.3 462.3 196.3 464 192 464c-4.271 0-8.289-1.666-11.31-4.689l-160-160C17.66 296.3 16 292.3 16 287.1c0-2.107 .4102-4.17 1.219-6.121C19.71 275.9 25.51 272 32 272H144V64c0-8.822 7.178-16 16-16H224z"/>
</>],

]);

const Down: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Down.displayName = "Down";

export default Down;
