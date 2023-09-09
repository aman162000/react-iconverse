
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M493.3 295.1l-106.7-160C383.7 130.7 378.7 128 373.3 128c-5.352 0-10.35 2.672-13.31 7.125l-62.74 94.11L274.9 198.6C271.9 194.4 267.1 192 262 192C256.9 192 252.1 194.4 249.1 198.6l-70 96C175.5 299.4 175 305.9 177.7 311.3C180.5 316.6 185.1 320 192 320h288c5.899 0 11.32-3.246 14.11-8.449C496.9 306.3 496.6 300 493.3 295.1zM456 480H120C53.83 480 0 426.2 0 360v-240C0 106.8 10.75 96 24 96S48 106.8 48 120v240c0 39.7 32.3 72 72 72h336c13.25 0 24 10.75 24 24S469.3 480 456 480z"/><path className="fa-secondary" d="M527.1 32H144C117.5 32 96 53.49 96 80v256c0 26.51 21.49 48 48 48h383.1C554.5 384 576 362.5 576 336v-256C576 53.49 554.5 32 527.1 32zM223.1 96c17.68 0 32 14.33 32 32S241.7 160 223.1 160C206.3 160 191.1 145.7 191.1 128S206.3 96 223.1 96zM494.1 311.6C491.3 316.8 485.9 320 480 320H192C185.1 320 180.5 316.6 177.7 311.3C175 305.9 175.5 299.4 179.1 294.6l70-96C252.1 194.4 256.9 192 262 192C267.1 192 271.9 194.4 274.9 198.6l22.35 30.66l62.74-94.11C362.1 130.7 367.1 128 373.3 128c5.348 0 10.34 2.672 13.31 7.125l106.7 160C496.6 300 496.9 306.3 494.1 311.6z"/>
</>],
['light',<>
	<path d="M464 448H96c-35.35 0-64-28.65-64-64V112C32 103.2 24.84 96 16 96S0 103.2 0 112V384c0 53.02 42.98 96 96 96h368c8.836 0 16-7.164 16-16S472.8 448 464 448zM224 152c13.26 0 24-10.75 24-24s-10.74-24-24-24c-13.25 0-24 10.75-24 24S210.8 152 224 152zM410.6 139.9c-11.28-15.81-38.5-15.94-49.1-.0313l-44.03 61.43l-6.969-8.941c-11.44-14.46-36.97-14.56-48.4 .0313L198.2 272.8C191 281.9 190 294.3 195.5 304.3C200.8 313.1 211.1 320 222.4 320h259.2c11 0 21.17-5.805 26.54-15.09c0-.0313-.0313 .0313 0 0c5.656-9.883 5.078-21.84-1.578-31.15L410.6 139.9zM226.2 287.9l58.25-75.61l20.09 25.66c4.348 5.545 17.6 10.65 25.59-.5332l54.44-78.75l92.68 129.2H226.2zM512 32H160c-35.35 0-64 28.65-64 64v224c0 35.35 28.65 64 64 64H512c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM544 320c0 17.64-14.36 32-32 32H160c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h352c17.64 0 32 14.36 32 32V320z"/>
</>],
['regular',<>
	<path d="M512 32H160c-35.35 0-64 28.65-64 64v224c0 35.35 28.65 64 64 64H512c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 320c0 8.822-7.178 16-16 16h-16l-109.3-160.9C383.7 170.7 378.7 168 373.3 168c-5.352 0-10.35 2.672-13.31 7.125l-62.74 94.11L274.9 238.6C271.9 234.4 267.1 232 262 232c-5.109 0-9.914 2.441-12.93 6.574L176 336H160c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16H512c8.822 0 16 7.178 16 16V320zM224 112c-17.67 0-32 14.33-32 32s14.33 32 32 32c17.68 0 32-14.33 32-32S241.7 112 224 112zM456 480H120C53.83 480 0 426.2 0 360v-240C0 106.8 10.75 96 24 96S48 106.8 48 120v240c0 39.7 32.3 72 72 72h336c13.25 0 24 10.75 24 24S469.3 480 456 480z"/>
</>],
['solid',<>
	<path d="M528 32H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48H528c26.51 0 48-21.49 48-48v-256C576 53.49 554.5 32 528 32zM223.1 96c17.68 0 32 14.33 32 32S241.7 160 223.1 160c-17.67 0-32-14.33-32-32S206.3 96 223.1 96zM494.1 311.6C491.3 316.8 485.9 320 480 320H192c-6.023 0-11.53-3.379-14.26-8.75c-2.73-5.367-2.215-11.81 1.332-16.68l70-96C252.1 194.4 256.9 192 262 192c5.111 0 9.916 2.441 12.93 6.574l22.35 30.66l62.74-94.11C362.1 130.7 367.1 128 373.3 128c5.348 0 10.34 2.672 13.31 7.125l106.7 160C496.6 300 496.9 306.3 494.1 311.6zM456 432H120c-39.7 0-72-32.3-72-72v-240C48 106.8 37.25 96 24 96S0 106.8 0 120v240C0 426.2 53.83 480 120 480h336c13.25 0 24-10.75 24-24S469.3 432 456 432z"/>
</>],
['thin',<>
	<path d="M224 88c-22.06 0-40 17.94-40 40s17.94 40 40 40s40-17.94 40-40S246.1 88 224 88zM224 152c-13.22 0-24-10.77-24-24s10.78-24 24-24s24 10.77 24 24S237.2 152 224 152zM472 416c-4.422 0-8 3.594-8 8c0 22.06-17.94 40-40 40h-352c-30.88 0-56-25.12-56-56v-256c0-22.06 17.94-40 40-40C60.42 112 64 108.4 64 104S60.42 96 56 96C25.13 96 0 121.1 0 152v256C0 447.7 32.3 480 72 480h352c30.88 0 56-25.12 56-56C480 419.6 476.4 416 472 416zM527.1 32H144c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h383.1C554.5 384 576 362.5 576 336v-256C576 53.5 554.5 32 527.1 32zM144 368c-17.64 0-32-14.36-32-32V316.7l90.34-90.34c3.125-3.125 8.188-3.125 11.31 0l79.03 79.03L230.1 368H144zM560 336c0 17.64-14.36 32-32 32H252.7l205.7-205.7c3.125-3.125 8.188-3.125 11.31 0L560 252.7V336zM560 230.1l-79.03-79.03c-9.375-9.344-24.56-9.344-33.94 0L304 294.1L224.1 215c-9.375-9.344-24.56-9.344-33.94 0L112 294.1V80c0-17.64 14.36-32 32-32h384c17.64 0 32 14.36 32 32V230.1z"/>
</>],

]);

const Images: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Images.displayName = "Images";

export default Images;