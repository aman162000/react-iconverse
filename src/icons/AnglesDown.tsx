
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M192 480c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 402.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 476.9 200.2 480 192 480z"/><path className="fa-secondary" d="M192 288C183.8 288 175.6 284.9 169.4 278.6l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 210.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 284.9 200.2 288 192 288z"/>
</>],
['light',<>
	<path d="M181.3 251.9c6.125 5.469 15.31 5.469 21.44 0l159.1-144c6.562-5.906 7.094-16.03 1.188-22.59c-5.938-6.549-16.03-7.064-22.62-1.188L192 218.5L42.73 84.11C36.5 78.51 26.38 78.38 20.1 85.29C14.2 91.86 14.73 101.1 21.29 107.9L181.3 251.9zM341.3 276.1L192 410.5L42.73 276.1C36.5 270.5 26.38 270.4 20.1 277.3C14.2 283.9 14.73 293.1 21.29 299.9l159.1 144c6.125 5.469 15.31 5.469 21.44 0l159.1-144c6.562-5.906 7.094-16.03 1.188-22.59C357.1 270.7 347.9 270.2 341.3 276.1z"/>
</>],
['regular',<>
	<path d="M328 270.1L192 391.8L55.1 270.1c-4.563-4.094-10.28-6.125-16-6.125c-6.594 0-13.16 2.687-17.88 7.1C13.28 281.9 14.12 297.1 23.99 305.9l152 135.1c9.125 8.187 22.88 8.187 32 0l152-135.1c9.875-8.812 10.72-23.1 1.875-33.87C353.1 262.1 337.8 261.3 328 270.1zM175.1 249.9c9.125 8.187 22.88 8.187 32 0l152-135.1c9.875-8.812 10.72-23.1 1.875-33.87c-8.813-9.906-24.03-10.72-33.88-1.875L192 199.8L55.1 78.13c-4.563-4.094-10.28-6.125-16-6.125c-6.594 0-13.16 2.687-17.88 7.1C13.28 89.88 14.12 105.1 23.99 113.9L175.1 249.9z"/>
</>],
['solid',<>
	<path d="M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"/>
</>],
['thin',<>
	<path d="M338.5 290.2l-146.5 138.7L45.53 290.2C42.38 287.2 37.31 287.3 34.22 290.5C31.16 293.7 31.28 298.7 34.47 301.8l151.1 144c1.562 1.484 3.531 2.219 5.531 2.219s3.969-.7344 5.531-2.219l152-144c3.187-3.047 3.312-8.125 .25-11.31C346.7 287.3 341.7 287.2 338.5 290.2zM186.5 253.8C188 255.3 189.1 255.1 191.1 255.1s3.969-.7344 5.531-2.219l152-144c3.187-3.047 3.312-8.125 .25-11.31c-3.031-3.188-8.093-3.281-11.31-.25L191.1 236.9L45.53 98.21C42.38 95.18 37.31 95.27 34.22 98.46C31.16 101.6 31.28 106.7 34.47 109.8L186.5 253.8z"/>
</>],

]);

const AnglesDown: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

AnglesDown.displayName = "AnglesDown";

export default AnglesDown;