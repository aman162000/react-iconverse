
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M296 128c-13.25 0-24 10.75-24 24v131.2L171.7 138.3c-5.953-8.641-16.88-12.31-26.89-9.25C134.8 132.2 128 141.5 128 152v208C128 373.3 138.8 384 152 384s24-10.75 24-24V228.8l100.3 144.8C280.8 380.3 288.3 384 296 384c2.391 0 4.797-.3594 7.156-1.094C313.2 379.8 320 370.5 320 360v-208C320 138.8 309.3 128 296 128z"/><path className="fa-secondary" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM320 360c0 10.5-6.828 19.78-16.84 22.91C300.8 383.6 298.4 384 296 384c-7.719 0-15.17-3.734-19.73-10.34L176 228.8V360C176 373.3 165.3 384 152 384S128 373.3 128 360v-208c0-10.5 6.828-19.78 16.84-22.91c10.02-3.062 20.94 .6094 26.89 9.25L272 283.2V152C272 138.8 282.8 128 296 128S320 138.8 320 152V360z"/>
</>],
['light',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM416 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32V416zM320 128c-8.844 0-16 7.156-16 16v180.8L140.1 133.6C135.8 128.5 128.7 126.6 122.5 129C116.2 131.3 112 137.3 112 144v224C112 376.8 119.2 384 128 384s16-7.156 16-16V187.3l163.9 191.2C310.1 382 315.4 384 320 384c1.859 0 3.734-.3281 5.547-1C331.8 380.7 336 374.7 336 368v-224C336 135.2 328.8 128 320 128z"/>
</>],
['regular',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM400 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16V416zM296 128c-13.25 0-24 10.75-24 24v131.2L171.7 138.3c-5.953-8.641-16.88-12.31-26.89-9.25C134.8 132.2 128 141.5 128 152v208C128 373.3 138.8 384 152 384s24-10.75 24-24V228.8l100.3 144.8C280.8 380.3 288.3 384 296 384c2.391 0 4.797-.3594 7.156-1.094C313.2 379.8 320 370.5 320 360v-208C320 138.8 309.3 128 296 128z"/>
</>],
['solid',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM320 360c0 10.5-6.828 19.78-16.84 22.91C300.8 383.6 298.4 384 296 384c-7.719 0-15.17-3.734-19.73-10.34L176 228.8V360C176 373.3 165.3 384 152 384S128 373.3 128 360v-208c0-10.5 6.828-19.78 16.84-22.91c10.02-3.062 20.94 .6094 26.89 9.25L272 283.2V152C272 138.8 282.8 128 296 128S320 138.8 320 152V360z"/>
</>],
['thin',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM432 416c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48V416zM328 128C323.6 128 320 131.6 320 136v218.5L126 130.8C123.9 128.3 120.3 127.4 117.2 128.5C114.1 129.7 112 132.7 112 136v240C112 380.4 115.6 384 120 384S128 380.4 128 376V157.5l193.1 223.8C323.5 383 325.7 384 328 384c.9375 0 1.891-.1719 2.797-.5C333.9 382.3 336 379.3 336 376v-240C336 131.6 332.4 128 328 128z"/>
</>],

]);

const SquareN: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SquareN.displayName = "SquareN";

export default SquareN;