
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M640 416c0 17.69-14.31 32-32 32h-160c-9.719 0-18.91-4.406-25-12L176.6 128H32C14.31 128 0 113.7 0 96s14.31-32 32-32h160c9.719 0 18.91 4.406 25 12L463.4 384H608C625.7 384 640 398.3 640 416z"/><path className="fa-secondary" d="M448 128h160c17.69 0 32-14.31 32-32s-14.31-32-32-32h-160c-17.69 0-32 14.31-32 32S430.3 128 448 128z"/>
</>],
['light',<>
	<path d="M432 96h192C632.8 96 640 88.84 640 80C640 71.16 632.8 64 624 64h-192C423.2 64 416 71.16 416 80C416 88.84 423.2 96 432 96zM624 416h-129.7c-14.47 0-28.03-6.406-37.19-17.59L207.6 93.34C192.3 74.69 169.8 64 145.7 64H16C7.156 64 0 71.16 0 80S7.156 96 16 96h129.7c14.47 0 28.03 6.406 37.19 17.59l249.6 305.1C447.7 437.3 470.3 448 494.3 448H624c8.844 0 16-7.156 16-16S632.8 416 624 416z"/>
</>],
['regular',<>
	<path d="M440 112h176C629.3 112 640 101.3 640 88C640 74.74 629.3 64 616 64h-176C426.7 64 416 74.74 416 88C416 101.3 426.7 112 440 112zM616 400h-129.5c-12.12 0-23.47-5.406-31.09-14.81L221.9 96.59C205.1 75.88 180.2 64 153.5 64H24C10.75 64 0 74.75 0 88S10.75 112 24 112h129.5c12.12 0 23.47 5.406 31.09 14.81l233.6 288.6C434.9 436.1 459.8 448 486.5 448H616c13.25 0 24-10.75 24-24S629.3 400 616 400z"/>
</>],
['solid',<>
	<path d="M448 128h160c17.69 0 32-14.31 32-32s-14.31-32-32-32h-160c-17.69 0-32 14.31-32 32S430.3 128 448 128zM608 384h-144.6L217 76C210.9 68.41 201.7 64 192 64H32C14.31 64 0 78.31 0 96s14.31 32 32 32h144.6l246.4 308C429.1 443.6 438.3 448 448 448h160c17.69 0 32-14.31 32-32S625.7 384 608 384z"/>
</>],
['thin',<>
	<path d="M424 80h208C636.4 80 640 76.42 640 72S636.4 64 632 64h-208C419.6 64 416 67.58 416 72S419.6 80 424 80zM632 432h-136.8c-17.34 0-33.41-7.844-44.09-21.5L201.5 91.63C187.8 74.06 167.1 64 144.8 64H8C3.594 64 0 67.59 0 72S3.594 80 8 80h136.8c17.34 0 33.41 7.844 44.09 21.5l249.6 318.9C452.2 437.9 472.9 448 495.2 448H632c4.406 0 8-3.594 8-8S636.4 432 632 432z"/>
</>],

]);

const Option: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Option.displayName = "Option";

export default Option;