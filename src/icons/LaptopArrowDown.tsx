
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M512 96v256H128V96h168v126.1L256.1 183C252.3 178.3 246.2 176 240 176S227.7 178.3 223 183c-9.375 9.375-9.375 24.56 0 33.94l80 80c9.375 9.375 24.56 9.375 33.94 0l80-80c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L344 222.1V96H512z"/><path className="fa-secondary" d="M624 384h-608C7.25 384 0 391.3 0 400V416c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.3 632.8 384 624 384zM512 352h64V80C576 53.63 554.4 32 528 32h-184v64H512V352zM128 96h168V32H112C85.63 32 64 53.63 64 80V352h64V96z"/>
</>],
['light',<>
	<path d="M240 208c-4.094 0-8.188 1.562-11.31 4.688c-6.25 6.25-6.25 16.38 0 22.62l80 80c6.25 6.25 16.38 6.25 22.62 0l80-80c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-52.69 52.69V48c0-8.844-7.167-16-16.01-16S304 39.16 304 48v217.4L251.3 212.7C248.2 209.6 244.1 208 240 208zM400 64H512c17.67 0 32 14.33 32 32v240c0 8.844 7.156 16 16 16s16-7.156 16-16V96c0-35.35-28.65-64-64-64h-112C391.2 32 384 39.16 384 48C384 56.84 391.2 64 400 64zM80 352C88.84 352 96 344.8 96 336V96c0-17.67 14.33-32 32-32h112C248.8 64 256 56.84 256 48C256 39.16 248.8 32 240 32H128C92.65 32 64 60.65 64 96v240C64 344.8 71.16 352 80 352zM624 384h-608C7.25 384 0 391.3 0 400V416c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.3 632.8 384 624 384zM576 448H64c-17.64 0-32-14.36-32-32h576C608 433.6 593.6 448 576 448z"/>
</>],
['regular',<>
	<path d="M528 88V320H576V88C576 57.13 550.9 32 520 32H384v48h136C524.4 80 528 83.59 528 88zM223 199c-9.375 9.375-9.375 24.56 0 33.94l80 80c9.375 9.375 24.56 9.375 33.94 0l80-80c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L344 238.1V56c0-13.25-10.75-24-23.1-24S296 42.75 296 56v182.1L256.1 199C252.3 194.3 246.2 192 240 192S227.7 194.3 223 199zM616 352H24C10.75 352 0 362.8 0 376v16C0 440.5 39.47 480 88 480h464c48.53 0 88-39.47 88-88v-16C640 362.8 629.3 352 616 352zM552 432H88c-19.31 0-35.48-13.77-39.2-32h542.4C587.5 418.2 571.3 432 552 432zM112 88c0-4.406 3.594-8 8-8h129.5V32H120C89.13 32 64 57.13 64 88V320h48V88z"/>
</>],
['solid',<>
	<path d="M223 199c-9.375 9.375-9.375 24.56 0 33.94l80 80c9.375 9.375 24.56 9.375 33.94 0l80-80c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L344 238.1V56c0-13.25-10.75-24-23.1-24S296 42.75 296 56v182.1L256.1 199C252.3 194.3 246.2 192 240 192S227.7 194.3 223 199zM512 352h64V80C576 53.63 554.4 32 528 32H384v64h128V352zM624 384h-608C7.25 384 0 391.3 0 400V416c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.3 632.8 384 624 384zM128 96h128V32H112C85.63 32 64 53.63 64 80V352h64V96z"/>
</>],
['thin',<>
	<path d="M218.3 194.3c-3.125 3.125-3.125 8.188 0 11.31l95.1 95.1C315.8 303.1 317.8 304 320 304s4.213-.8984 5.66-2.348l95.1-95.1c3.125-3.125 3.125-8.188 0-11.31s-8.188-3.125-11.31 0L328 276.7V40c0-4.422-3.575-8-7.997-8S312 35.58 312 40v236.7L229.7 194.3C226.5 191.2 221.5 191.2 218.3 194.3zM392 48h136c17.67 0 32 14.33 32 32v264c0 4.418 3.582 8 8 8S576 348.4 576 344V80C576 53.6 554.4 32 528 32h-136C387.6 32 384 35.58 384 40S387.6 48 392 48zM72 352c4.418 0 8-3.582 8-8V80c0-17.67 14.33-32 32-32h136C252.4 48 256 44.42 256 40S252.4 32 248 32H112C85.6 32 64 53.6 64 80v264C64 348.4 67.58 352 72 352zM624 384h-608C7.188 384 0 391.2 0 400V416c0 35.2 28.81 64 64 64h512c35.19 0 64-28.8 64-64v-16C640 391.2 632.8 384 624 384zM624 416c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48v-16h608V416z"/>
</>],

]);

const LaptopArrowDown: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

LaptopArrowDown.displayName = "LaptopArrowDown";

export default LaptopArrowDown;