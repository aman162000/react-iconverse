
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M314.3 429.8c10.06 14.53 6.438 34.47-8.094 44.53c-5.562 3.844-11.91 5.688-18.19 5.688c-10.16 0-20.12-4.812-26.34-13.78L128.1 273.3L64 338.9v109.1c0 17.67-14.31 32-32 32s-32-14.33-32-32v-384C0 46.34 14.31 32.01 32 32.01S64 46.34 64 64.01v183.3l201.1-205.7c12.31-12.61 32.63-12.86 45.25-.5c12.62 12.34 12.88 32.61 .5 45.25l-137.2 140.3L314.3 429.8z"/>
</>],
['light',<>
	<path d="M316.9 454.5c5.219 7.125 3.687 17.16-3.437 22.38c-2.844 2.094-6.187 3.094-9.469 3.094c-4.906 0-9.781-2.25-12.91-6.531L124.9 246.8l-92.9 91.48v125.7c0 8.844-7.156 16-15.1 16s-15.1-7.156-15.1-16v-416c0-8.844 7.156-16 15.1-16s15.1 7.156 15.1 16v245.4l260.8-256.8c6.219-6.156 16.41-6.156 22.62 .1875c6.187 6.281 6.125 16.41-.1875 22.62L147.9 224.1L316.9 454.5z"/>
</>],
['regular',<>
	<path d="M315.6 442.2c7.656 10.83 5.062 25.8-5.75 33.45C305.6 478.6 300.8 480 296 480c-7.531 0-14.97-3.531-19.62-10.16L127.5 258.1L48 338.7V456C48 469.3 37.25 480 24 480S0 469.3 0 456V56C0 42.75 10.75 32 24 32S48 42.75 48 56v214.7l231-231.6c9.344-9.344 24.53-9.422 33.94-.0469c9.406 9.359 9.406 24.56 .0625 33.95l-151.3 151.7c.2578 .3281 .6367 .4883 .8809 .834L315.6 442.2z"/>
</>],
['solid',<>
	<path d="M314.3 429.8c10.06 14.53 6.438 34.47-8.094 44.53c-5.562 3.844-11.91 5.688-18.19 5.688c-10.16 0-20.12-4.812-26.34-13.78L128.1 273.3L64 338.9v109.1c0 17.67-14.31 32-32 32s-32-14.33-32-32v-384C0 46.34 14.31 32.01 32 32.01S64 46.34 64 64.01v183.3l201.1-205.7c12.31-12.61 32.63-12.86 45.25-.5c12.62 12.34 12.88 32.61 .5 45.25l-137.2 140.3L314.3 429.8z"/>
</>],
['thin',<>
	<path d="M318.4 467.2c2.656 3.531 1.906 8.562-1.625 11.19C315.3 479.5 313.7 480 311.1 480c-2.438 0-4.844-1.125-6.406-3.219L124 233.2l-108 104.7V472c0 4.406-3.594 8-7.1 8C3.594 480 0 476.4 0 472V40C0 35.59 3.594 32 7.1 32c4.406 0 7.1 3.594 7.1 8v275.6l290.4-281.4c3.219-3.062 8.281-2.969 11.31 .1875c3.062 3.156 3 8.219-.1875 11.31L135.6 222L318.4 467.2z"/>
</>],

]);

const K: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

K.displayName = "K";

export default K;
