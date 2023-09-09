
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M73.38 185.4C79.63 179.1 87.81 175.1 96 175.1s16.38 3.125 22.62 9.375L192 258.7V79.1c0-17.69 14.31-32 32-32s32 14.31 32 32V258.7l73.38-73.38c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-128 128c-12.5 12.5-32.75 12.5-45.25 0l-128-128C60.88 218.1 60.88 197.9 73.38 185.4z"/><path className="fa-secondary" d="M32 416c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32S49.67 416 32 416zM128 416c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32S145.7 416 128 416zM224 416c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32S241.7 416 224 416zM320 416c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32S337.7 416 320 416zM416 416c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32S433.7 416 416 416z"/>
</>],
['light',<>
	<path d="M128 424c-13.26 0-24 10.75-24 24S114.7 472 128 472S152 461.3 152 448S141.3 424 128 424zM224 424c-13.26 0-24 10.75-24 24s10.74 24 24 24s24-10.75 24-24S237.3 424 224 424zM32 424c-13.26 0-24 10.75-24 24S18.74 472 32 472S56 461.3 56 448S45.26 424 32 424zM320 424c-13.26 0-24 10.75-24 24s10.74 24 24 24s24-10.75 24-24S333.3 424 320 424zM416 424c-13.26 0-24 10.75-24 24s10.74 24 24 24s24-10.75 24-24S429.3 424 416 424zM212.7 363.3C215.8 366.4 219.9 367.1 224 367.1s8.188-1.562 11.31-4.688l144-144c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0L240 313.4V47.1c0-8.844-7.156-16-16-16s-16 7.156-16 16v265.4L91.31 196.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L212.7 363.3z"/>
</>],
['regular',<>
	<path d="M224 416c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32S241.7 416 224 416zM32 416c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32S49.67 416 32 416zM128 416c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32S145.7 416 128 416zM320 416c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32S337.7 416 320 416zM416 416c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32S433.7 416 416 416zM206.5 360.7c9.062 9.699 25.88 9.699 34.94 0l128-136.2c9.094-9.672 8.625-24.88-1.031-33.96c-9.625-9.109-24.81-8.672-33.91 1.031L248 283.6v-211.6c0-13.27-10.75-24.04-24-24.04S200 58.76 200 72.04v211.6l-86.53-92.05C108.8 186.6 102.4 184 96 184c-5.906 0-11.81 2.16-16.44 6.543C69.91 199.6 69.44 214.8 78.53 224.5L206.5 360.7z"/>
</>],
['solid',<>
	<path d="M128 416c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32S145.7 416 128 416zM224 416c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32S241.7 416 224 416zM32 416c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32S49.67 416 32 416zM73.38 230.6l128 128c12.5 12.5 32.75 12.5 45.25 0l128-128c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L256 258.7V79.1c0-17.69-14.31-32-32-32s-32 14.31-32 32V258.7L118.6 185.4C112.4 179.1 104.2 175.1 96 175.1S79.63 179.1 73.38 185.4C60.88 197.9 60.88 218.1 73.38 230.6zM320 416c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32S337.7 416 320 416zM416 416c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32S433.7 416 416 416z"/>
</>],
['thin',<>
	<path d="M128 432c-8.836 0-16 7.164-16 16s7.164 16 16 16s16-7.164 16-16S136.8 432 128 432zM224 432c-8.836 0-16 7.164-16 16s7.164 16 16 16s16-7.164 16-16S232.8 432 224 432zM32 432c-8.836 0-16 7.164-16 16s7.164 16 16 16s16-7.164 16-16S40.84 432 32 432zM320 432c-8.836 0-16 7.164-16 16s7.164 16 16 16s16-7.164 16-16S328.8 432 320 432zM416 432c-8.836 0-16 7.164-16 16s7.164 16 16 16s16-7.164 16-16S424.8 432 416 432zM218.3 365.7c3.125 3.125 8.188 3.125 11.31 0l152-152C383.2 212.1 384 210.1 384 207.1s-.7813-4.094-2.344-5.656c-3.125-3.125-8.188-3.125-11.31 0L232 340.7V55.1c0-4.406-3.578-8-8-8s-8 3.594-8 8v284.7L77.66 202.3c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31L218.3 365.7z"/>
</>],

]);

const ArrowDownToDottedLine: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ArrowDownToDottedLine.displayName = "ArrowDownToDottedLine";

export default ArrowDownToDottedLine;