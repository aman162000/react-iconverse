
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M280 258.4V328c0 13.25-10.75 24-24 24s-24-10.75-24-24V258.4C213.1 249.4 200 230.3 200 208c0-30.93 25.07-56 56-56s56 25.07 56 56C312 230.3 298.9 249.4 280 258.4z"/><path className="fa-secondary" d="M466.5 83.69l-192-80.01C269.6 1.656 261.3 0 256.1 0C250.8 0 242.5 1.656 237.6 3.688l-192 80.01C27.69 91.08 16 108.6 16 127.1C16 385.2 205.2 512 255.1 512C307.1 512 496 383.8 496 127.1C496 108.6 484.3 91.08 466.5 83.69zM280 258.4V328c0 13.25-10.75 24-24 24s-24-10.75-24-24V258.4C213.1 249.4 200 230.3 200 208c0-30.93 25.07-56 56-56s56 25.07 56 56C312 230.3 298.9 249.4 280 258.4z"/>
</>],
['light',<>
	<path d="M466.5 83.69l-192-80.01C268.6 1.188 262.3 0 256.1 0S243.5 1.188 237.6 3.688l-192 80.01C27.72 91.07 16 108.6 16 127.1C16 385.4 205.4 512 255.1 512C305.2 512 496 387.3 496 127.1C496 108.6 484.3 91.07 466.5 83.69zM463.9 128.3c0 225.3-166.2 351.7-207.8 351.7C213.3 479.1 48 352.2 48 128c0-6.5 3.875-12.25 9.75-14.75l192-80c1.973-.8275 4.109-1.266 6.258-1.266c2.071 0 4.154 .4072 6.117 1.266l192 80C463.3 117.1 463.9 125.8 463.9 128.3zM256 152c-30.88 0-56 25.12-56 56c0 25.28 16.95 46.45 40 53.39V336c0 8.844 7.156 16 16 16s16-7.156 16-16V261.4C295 254.5 312 233.3 312 208C312 177.1 286.9 152 256 152zM256 232c-13.22 0-24-10.78-24-24S242.8 184 256 184s24 10.78 24 24S269.2 232 256 232z"/>
</>],
['regular',<>
	<path d="M466.5 83.69l-192-80.01C269.6 1.656 261.3 0 256.1 0C250.8 0 242.5 1.656 237.6 3.688l-192 80.01C27.69 91.08 16 108.6 16 127.1C16 385.2 205.2 512 255.1 512C307.1 512 496 383.8 496 127.1C496 108.6 484.3 91.08 466.5 83.69zM256.1 48.03C256.1 48.02 256.2 48.03 256.1 48.03L256.1 48.03zM255.1 464C163.5 425.5 64.06 303.9 64.06 128.1c0-.05 0 .05 0 0l190.8-79.64c.332-.1016 .7422-.3021 1.275-.3997L448 127.1C448 330.5 322.4 436.3 255.1 464zM200 208c0 22.3 13.13 41.4 32 50.41V328C232 341.3 242.8 352 256 352s24-10.75 24-24V258.4c18.87-9.008 32-28.11 32-50.41c0-30.93-25.07-56-56-56S200 177.1 200 208z"/>
</>],
['solid',<>
	<path d="M466.5 83.69l-192-80.01C269.6 1.656 261.3 0 256.1 0C250.8 0 242.5 1.656 237.6 3.688l-192 80.01C27.69 91.08 16 108.6 16 127.1C16 385.2 205.2 512 255.1 512C307.1 512 496 383.8 496 127.1C496 108.6 484.3 91.08 466.5 83.69zM280 258.4V328c0 13.25-10.75 24-24 24s-24-10.75-24-24V258.4C213.1 249.4 200 230.3 200 208c0-30.93 25.07-56 56-56s56 25.07 56 56C312 230.3 298.9 249.4 280 258.4z"/>
</>],
['thin',<>
	<path d="M466.5 83.69l-192-80.01C269.6 1.656 261.3 0 256.1 0C250.8 0 242.5 1.656 237.6 3.688l-192 80.01C27.69 91.08 16 108.6 16 127.1C16 385.2 205.2 512 255.1 512C307.1 512 496 383.8 496 127.1C496 108.6 484.3 91.08 466.5 83.69zM255.1 496C212.1 496 32 374 32 127.1c0-12.99 7.732-24.57 19.75-29.54l191.1-79.1C246.7 17.21 252.8 16 256.1 16c3.184 0 9.381 1.234 12.28 2.441l192 80.02C472.3 103.4 480 114.1 480 127.1C480 405.6 270.9 496 255.1 496zM256 160C229.5 160 208 181.5 208 208c0 23.73 17.35 43.36 40 47.19V336c0 4.406 3.594 8 8 8s8-3.594 8-8V255.2C286.7 251.4 304 231.7 304 208C304 181.5 282.5 160 256 160zM256 240c-17.66 0-32-14.34-32-32s14.34-32 32-32s32 14.34 32 32S273.7 240 256 240z"/>
</>],

]);

const ShieldKeyhole: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ShieldKeyhole.displayName = "ShieldKeyhole";

export default ShieldKeyhole;