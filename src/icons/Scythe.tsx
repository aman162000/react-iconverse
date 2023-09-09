
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M632.6 11.62c-6-7.375-15.12-11.62-24.62-11.62l-25.5 0l-59.75 288h-106.7c-17.67 0-31.99 14.33-31.99 32s14.32 32 31.99 32h93.49l-29.25 141c-.875 4.75 .375 9.5 3.5 13.25C486.7 509.9 491.2 512 495.1 512h31.5c7.623 0 14.25-5.5 15.62-13L639.5 38C641.2 28.62 638.7 18.1 632.6 11.62z"/><path className="fa-secondary" d="M583.9 0l-245 0C191.1 0 63.1 63.1 0 191.1h544L583.9 0z"/>
</>],
['light',<>
	<path d="M639.7 19.12l-96 480C542.2 506.8 535.5 512 528 512c-1.031 0-2.094-.0938-3.156-.3125c-8.656-1.719-14.28-10.16-12.55-18.81L543.7 336H400c-8.844 0-16.02-7.156-16.02-16S391.2 304 400 304h150.1l54.4-271.1L337.4 32C222.2 32 113.3 86.53 46.28 176h465.7c8.844 0 16 7.156 16 16s-7.156 16-16 16H16c-5.812 0-11.16-3.156-13.98-8.219c-2.828-5.094-2.672-11.28 .3906-16.22C72.72 70.34 201.1 0 337.4 0c0 0 251.1 .0625 286.6 0c4.797 0 9.344 2.156 12.38 5.844C639.4 9.562 640.6 14.44 639.7 19.12z"/>
</>],
['regular',<>
	<path d="M632.6 11.62c-6-7.375-15.12-11.62-24.62-11.62l-269.1 0C191.1 0 63.1 64 0 224h552.1l-13.38 64h-130.7c-13.25 0-23.1 10.75-23.1 24s10.74 24 23.1 24h120.9l-32.87 147.6C492.9 498.3 504.1 512 519.1 512c11.16 0 20.79-7.828 23.08-18.76L639.5 38C641.2 28.63 638.7 18.1 632.6 11.62zM561.1 176H78.62c56.25-85 143.4-128 260.2-128h249.7L561.1 176z"/>
</>],
['solid',<>
	<path d="M549.8 0l-210.1 0C191.1 0 63.1 63.1 0 191.1L509.1 192L549.8 0zM632.6 11.62c-6-7.375-15.12-11.62-24.62-11.62l-25.5 0l-59.75 288h-106.7c-17.67 0-31.99 14.33-31.99 32s14.32 32 31.99 32h93.49l-29.25 141c-.875 4.75 .375 9.5 3.5 13.25C486.7 509.9 491.2 512 495.1 512h31.5c7.623 0 14.25-5.5 15.62-13L639.5 38C641.2 28.62 638.7 18.1 632.6 11.62z"/>
</>],
['thin',<>
	<path d="M505.7 184c0-4.406-3.594-8-8-8H21.56c59.16-101.9 171.1-160 311.8-160H536C540.4 16 544 12.41 544 8S540.4 0 536 0h-202.6C182.1 0 60.94 65.72 .9062 180.3c-1.281 2.5-1.188 5.469 .25 7.875C2.594 190.5 5.188 192 8 192h489.7C502.1 192 505.7 188.4 505.7 184zM632.6 11.62c-6-7.375-15.12-11.62-24.62-11.62l-25.5 0l-59.75 288h-106.7c-17.67 0-31.99 14.33-31.99 32s14.32 32 31.99 32h93.49l-28.8 122.2C476.6 493.7 491.5 512 511.4 512c14.88 0 27.72-10.43 30.76-24.99L639.5 38C641.2 28.62 638.7 18.1 632.6 11.62zM526.5 483.7C525 490.8 518.7 496 511.4 496c-4.66 0-9.021-2.074-11.96-5.689c-2.941-3.613-4.086-8.305-3.232-12.45L529.7 336h-113.7c-8.822 0-15.1-7.178-15.1-16s7.176-16 15.1-16h119.8l59.75-288h12.48c4.732 0 9.297 2.139 12.31 5.844c3.074 3.703 4.332 8.521 3.547 12.77L526.5 483.7z"/>
</>],

]);

const Scythe: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Scythe.displayName = "Scythe";

export default Scythe;