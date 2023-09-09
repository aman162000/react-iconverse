
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M23.1 512c-6.156 0-12.28-2.344-16.97-7.031c-9.375-9.375-9.375-24.56 0-33.94l303.1-303.1c9.375-9.375 24.56-9.375 33.94 0s9.375 24.56 0 33.94l-303.1 303.1C36.28 509.7 30.16 512 23.1 512z"/><path className="fa-secondary" d="M467.1 241.1L351.1 288h94.34c-7.711 14.85-16.29 29.28-25.87 43.01l-132.5 52.99h85.65c-59.34 52.71-144.1 80.35-264.5 52.82l235.9-235.9c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L75.11 402.1C-2.957 61.97 362.5 8.436 478.9 .0846c18.87-1.354 34.41 14.19 33.05 33.05C508.7 78.53 498.5 161.8 467.1 241.1z"/>
</>],
['light',<>
	<path d="M481.2 0c-.7578 0-1.514 .0299-2.284 .0846C361.4 8.512-9.976 62.86 77.13 412.3l-72.44 72.34c-6.25 6.25-6.25 16.38 0 22.62C7.813 510.4 11.91 512 16 512s8.188-1.562 11.31-4.688l72.34-72.44c36.08 8.992 69.12 13.12 99.19 13.12c261.1 0 305.5-309.5 313.1-414.9C513.2 15.04 498.1 0 481.2 0zM198.8 416c-22.71 0-47.21-3.238-72.21-8.008l56.22-56.22C183.3 351.8 183.6 352 184 352h176.6C317 394.3 263 416 198.8 416zM387.8 320.8C386.5 320.5 385.3 320 384 320H214.6l64.23-64.23C279.3 255.8 279.6 256 280 256h146.2c-1.52 3.285-2.801 6.654-4.404 9.904C411.6 286.5 400.1 304.4 387.8 320.8zM439.6 224h-128.1l36.69-36.69c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-220.6 220.6C87.12 301.7 98.13 231.5 137.7 176.1c82.6-113.9 265.9-139.3 342.2-144.9C476.7 75.25 467.1 150.8 439.6 224z"/>
</>],
['regular',<>
	<path d="M481.2 0c-.7578 0-1.514 .0299-2.284 .0846C362.5 8.436-2.977 61.97 75.11 402.1l-68.07 68.07c-9.375 9.375-9.375 24.56 0 33.94c4.688 4.688 10.81 7.031 16.97 7.031s12.28-2.344 16.97-7.031l68.13-68.13c32.43 7.434 62.3 11.16 89.74 11.16c261.1 0 305.5-309.5 313.1-414.9C513.2 15.04 498.1 0 481.2 0zM198.8 400c-15.38 0-31.8-1.74-48.63-4.275L193.9 352h141.2C284.7 392 231.6 400 198.8 400zM380.2 304H241.9l48-48h119.8C400.6 274.4 390.6 289.9 380.2 304zM429.5 208h-91.54l7.031-7.031c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0l-195.1 195.1C105 291.4 116.4 233.6 150.6 186.4c73.56-101.5 238.6-129.2 311.8-136.7C456.5 113.7 444.6 165.2 429.5 208z"/>
</>],
['solid',<>
	<path d="M467.1 241.1L351.1 288h94.34c-7.711 14.85-16.29 29.28-25.87 43.01l-132.5 52.99h85.65c-59.34 52.71-144.1 80.34-264.5 52.82l-68.13 68.13c-9.38 9.38-24.56 9.374-33.94 0c-9.375-9.375-9.375-24.56 0-33.94l253.4-253.4c4.846-6.275 4.643-15.19-1.113-20.95c-6.25-6.25-16.38-6.25-22.62 0l-168.6 168.6C24.56 58 366.9 8.118 478.9 .0846c18.87-1.354 34.41 14.19 33.05 33.05C508.7 78.53 498.5 161.8 467.1 241.1z"/>
</>],
['thin',<>
	<path d="M478.9 .0846C361.4 8.514-10.13 62.73 77.13 412.3c.6953 2.787 1.834 5.501 3.268 7.953l-78.05 78.04c-3.125 3.125-3.125 8.187 0 11.31c3.127 3.127 8.186 3.127 11.31 0l78.05-78.04c2.451 1.434 5.163 2.571 7.951 3.266c36.15 9.021 69.07 13.12 99.19 13.12c261.1 0 305.5-309.5 313.1-414.9C512.9 19.44 502.5-1.593 478.9 .0846zM198.8 432c-29.49 0-61.45-4.25-94.95-12.58l83.42-83.42h208.3C351.7 391.6 289 432 198.8 432zM283.3 240h166.7c-11.27 27.87-25.39 55.04-42.7 79.1H203.3L283.3 240zM456.1 224C456 224 456.1 224 456.1 224L299.3 224l42.35-42.34c3.125-3.125 3.125-8.187 0-11.31c-3.125-3.125-8.188-3.125-11.31 0l-237.8 237.8c-24.09-96.92-13.29-177.8 32.16-240.5c87-119.1 277.4-145.9 355.3-151.5c10.21-.366 16.56 7.521 15.95 15.95C493.2 71.39 483.9 148.2 456.1 224z"/>
</>],

]);

const FeatherPointed: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FeatherPointed.displayName = "FeatherPointed";

export default FeatherPointed;
