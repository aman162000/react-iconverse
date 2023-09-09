
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M64 227.9l171.5-156.5C256.1 54.28 288 68.66 288 96.03v131.9l171.5-156.5C480.1 54.28 512 68.66 512 96.03v319.9c0 27.37-31.88 41.74-52.5 24.62L288 285.2v130.7c0 27.37-31.88 41.74-52.5 24.62L64 285.2V227.9z"/><path className="fa-secondary" d="M0 415.1V96.03c0-17.67 14.33-31.1 31.1-31.1C49.67 64.03 64 78.36 64 96.03v319.9c0 17.67-14.33 31.1-31.1 31.1C14.33 447.1 0 433.6 0 415.1z"/>
</>],
['light',<>
	<path d="M225.4 64C218.6 64 211.1 66.34 206.5 70.88L32 214.2V80C32 71.16 24.84 64 16 64S0 71.16 0 80v352C0 440.8 7.156 448 16 448S32 440.8 32 432V297.8l174.5 143.3C211.1 445.7 218.6 448 225.4 448C235.7 448 256 439.9 256 415.1V96.03C256 72.13 235.7 64 225.4 64zM224 416.4L32.52 256L224 95.59V416.4zM481.4 64c-6.75 0-13.41 2.344-18.91 6.875l-152.6 125.3c-6.812 5.609-7.812 15.69-2.219 22.52c5.656 6.828 15.75 7.797 22.53 2.203L480 95.59v320.8l-149.8-125.3c-6.781-5.594-16.88-4.625-22.53 2.203c-5.594 6.828-4.594 16.91 2.219 22.52l152.6 125.3C467.1 445.7 474.6 448 481.4 448C497.5 448 512 434.6 512 415.1V96.03C512 77.44 497.5 64 481.4 64z"/>
</>],
['regular',<>
	<path d="M479.8 64c-7 0-14.14 2.307-20.29 7.406L288 227.9V96.03C288 76.81 272.3 64 255.8 64c-7 0-14.14 2.307-20.29 7.406L64 227.9V88.03c0-13.25-10.74-24-24-24c-13.25 0-24 10.74-24 23.1v335.9c0 13.26 10.75 24 24 24c13.26 0 24-10.74 24-24V285.2l171.5 155.3C241.6 445.7 248.8 448 255.8 448C272.3 448 288 435.2 288 415.1V285.2l171.5 155.3C465.6 445.7 472.8 448 479.8 448C496.3 448 512 435.2 512 415.1V96.03C512 76.81 496.3 64 479.8 64zM240 379.9L103.8 256.5L240 132.3V379.9zM464 379.9l-136.2-123.4L464 132.3V379.9z"/>
</>],
['solid',<>
	<path d="M0 415.1V96.03c0-17.67 14.33-31.1 31.1-31.1C49.67 64.03 64 78.36 64 96.03v131.8l171.5-156.5C256.1 54.28 288 68.66 288 96.03v131.9l171.5-156.5C480.1 54.28 512 68.66 512 96.03v319.9c0 27.37-31.88 41.74-52.5 24.62L288 285.2v130.7c0 27.37-31.88 41.74-52.5 24.62L64 285.2v130.7c0 17.67-14.33 31.1-31.1 31.1C14.33 447.1 0 433.6 0 415.1z"/>
</>],
['thin',<>
	<path d="M8 447.1c4.422 0 8-3.594 8-7.1V71.1C16 67.59 12.42 64 8 64S0 67.59 0 71.1V439.1C0 444.4 3.578 447.1 8 447.1zM241.6 438.1c11.31 9.594 26.69 11.72 40.19 5.437c13.7-6.344 22.22-19.78 22.22-35.12v-306.6c0-15.34-8.516-28.78-22.22-35.12C276.7 65.16 271.2 64 265.9 64C257.2 64 248.6 67.06 241.6 72.1L61.5 226.3c-8.562 7.406-13.48 18.22-13.48 29.66s4.922 22.25 13.53 29.69L241.6 438.1zM71.92 238.5l180-153.3c6.594-5.594 15.2-6.812 23.11-3.125c8.109 3.75 12.94 11.47 12.94 20.62v306.6c0 9.156-4.828 16.87-12.94 20.62c-3.031 1.406-6.172 2.094-9.266 2.094c-4.953 0-9.781-1.781-13.84-5.219l-180-153.3C66.91 269.2 64.02 262.8 64.02 255.1C64.02 249.2 66.91 242.8 71.92 238.5zM483.1 429.9c-7.859 3.656-16.48 2.469-23.11-3.125l-118.8-101.1c-3.344-2.844-8.422-2.437-11.28 .9062c-2.859 3.375-2.453 8.406 .9062 11.28l118.8 101.1c11.31 9.594 26.72 11.72 40.19 5.437C503.5 438.1 512 424.6 512 409.3v-306.6c0-15.34-8.516-28.78-22.22-35.12C484.6 65.16 479.2 64 473.8 64c-8.703 0-17.27 3.062-24.27 8.1l-118.8 101.1c-3.359 2.875-3.766 7.906-.9062 11.28c2.859 3.344 7.938 3.75 11.28 .9062l118.8-101.1c6.594-5.594 15.23-6.812 23.12-3.125C491.2 85.81 496 93.53 496 102.7v306.6C496 418.5 491.2 426.2 483.1 429.9z"/>
</>],

]);

const BackwardFast: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BackwardFast.displayName = "BackwardFast";

export default BackwardFast;