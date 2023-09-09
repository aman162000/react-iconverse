
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M448 64.01v384c0 17.67-14.31 32-32 32s-32-14.33-32-32V169.7l-133.4 200.1c-11.88 17.81-41.38 17.81-53.25 0L64 169.7v278.3c0 17.67-14.31 32-32 32s-32-14.33-32-32v-384c0-14.09 9.219-26.55 22.72-30.63c13.47-4.156 28.09 1.141 35.91 12.88L224 294.3l165.4-248.1c7.812-11.73 22.47-17.03 35.91-12.88C438.8 37.47 448 49.92 448 64.01z"/>
</>],
['light',<>
	<path d="M432 480c-8.844 0-16-7.156-16-15.1V99.74l-178.8 261.3c-6 8.749-20.44 8.749-26.44 0L32 99.74v364.3C32 472.8 24.84 480 16 480S0 472.8 0 464V48.03c0-6.1 4.562-13.22 11.28-15.28c6.812-2.156 13.97 .4687 17.94 6.25L224 323.7l194.8-284.7c4-5.781 11.16-8.406 17.94-6.25C443.4 34.81 448 41.03 448 48.03v415.1C448 472.8 440.8 480 432 480z"/>
</>],
['regular',<>
	<path d="M424 480c-13.25 0-24-10.75-24-24V136.1l-155.9 237c-8.875 13.5-31.25 13.5-40.13 0L48 136.1V456C48 469.3 37.25 480 24 480S0 469.3 0 456V56c0-10.61 6.969-19.95 17.12-22.98c10.19-3.078 21.09 .9375 26.94 9.797L224 316.3l179.9-273.5c5.812-8.859 16.66-12.89 26.94-9.797C441 36.05 448 45.39 448 56v400C448 469.3 437.3 480 424 480z"/>
</>],
['solid',<>
	<path d="M448 64.01v384c0 17.67-14.31 32-32 32s-32-14.33-32-32V169.7l-133.4 200.1c-11.88 17.81-41.38 17.81-53.25 0L64 169.7v278.3c0 17.67-14.31 32-32 32s-32-14.33-32-32v-384c0-14.09 9.219-26.55 22.72-30.63c13.47-4.156 28.09 1.141 35.91 12.88L224 294.3l165.4-248.1c7.812-11.73 22.47-17.03 35.91-12.88C438.8 37.47 448 49.92 448 64.01z"/>
</>],
['thin',<>
	<path d="M440 480c-4.406 0-8-3.594-8-7.1V65.64l-201.4 290.9c-2.938 4.312-10.19 4.312-13.12 0L16 65.64v406.4c0 4.406-3.594 7.1-8 7.1S0 476.4 0 472V40.01C0 36.51 2.281 33.42 5.625 32.39c3.312-1.062 6.969 .1875 8.938 3.062L224 337.9l209.4-302.5C435.4 32.58 439 31.29 442.4 32.39C445.7 33.42 448 36.51 448 40.01v431.1C448 476.4 444.4 480 440 480z"/>
</>],

]);

const M: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

M.displayName = "M";

export default M;