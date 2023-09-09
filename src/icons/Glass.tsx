
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M313 128L290.2 448H93.78L70.96 128H313z"/><path className="fa-secondary" d="M317.6 64L290.2 448H93.78L66.38 64H317.6zM351.9 0H32.07C23.2 0 14.8 3.625 8.674 10.12c-5.998 6.375-9.121 14.1-8.621 23.88L32.04 482C33.17 498.9 47.16 512 64.04 512h255.9c16.87 0 30.87-13.12 31.99-30l31.99-448c.5-8.876-2.621-17.5-8.619-23.87C369.2 3.625 360.8 0 351.9 0z"/>
</>],
['light',<>
	<path d="M375.3 10.12C369.2 3.625 360.8 0 351.9 0H32.07C23.2 0 14.8 3.625 8.674 10.12c-5.998 6.375-9.121 15-8.621 23.88L32.04 482C33.17 498.9 47.16 512 64.04 512h255.9c16.87 0 30.87-13.12 31.99-30l31.99-448C384.4 25.12 381.3 16.5 375.3 10.12zM351.1 32L347.4 96H36.62L32.04 32H351.1zM319.1 480l-255.9-.25L38.9 128h306.2L319.1 480z"/>
</>],
['regular',<>
	<path d="M351.9 0H32.07C13.34 0-1.348 15.88 .0977 34.47l32.56 418.5C35.25 486.3 63.18 512 96.76 512h196.8c33.95 0 62.04-26.28 64.16-60.01l26.25-417.1C385.1 15.58 370.5 0 351.9 0zM309.8 448.1C309.3 457.4 302.1 464 293.5 464h-196.8c-8.463 0-15.6-6.494-16.24-14.78L59.26 176h267.7L309.8 448.1zM329.9 128H55.52l-6.225-80h285.7L329.9 128z"/>
</>],
['solid',<>
	<path d="M375.3 10.12C369.2 3.625 360.8 0 351.9 0H32.07C23.2 0 14.8 3.625 8.674 10.12c-5.998 6.375-9.121 15-8.621 23.88L32.04 482C33.17 498.9 47.16 512 64.04 512h255.9c16.87 0 30.87-13.12 31.99-30l31.99-448C384.4 25.12 381.3 16.5 375.3 10.12zM313 128h-242.1L66.38 64h251.2L313 128z"/>
</>],
['thin',<>
	<path d="M375.3 10.12C369.2 3.625 360.8 0 351.9 0H32.09C23.21 0 14.8 3.625 8.677 10.12c-6 6.375-9.125 15-8.625 23.88l32 448C33.18 498.9 47.18 512 64.06 512h255.9c16.88 0 30.88-13.12 32-30l31.97-448C384.4 25.12 381.3 16.5 375.3 10.12zM20.32 21.1C23.42 17.81 27.6 16 32.09 16h319.9c4.482 0 8.639 1.799 11.72 5.092c2.986 3.17 4.553 7.547 4.318 11.77L362.3 112H21.66L16.03 33.1C15.77 28.64 17.34 24.26 20.32 21.1zM336 480.9C335.5 489.4 328.4 496 319.1 496H64.06c-8.432 0-15.48-6.617-16.04-15.14L22.81 128h338.4L336 480.9z"/>
</>],

]);

const Glass: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Glass.displayName = "Glass";

export default Glass;
