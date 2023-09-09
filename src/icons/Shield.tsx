
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M256-.0078C260.7-.0081 265.2 1.008 269.4 2.913L457.7 82.79C479.7 92.12 496.2 113.8 496 139.1C495.5 239.2 454.7 420.7 282.4 503.2C265.7 511.1 246.3 511.1 229.6 503.2C57.25 420.7 16.49 239.2 15.1 139.1C15.87 113.8 32.32 92.12 54.3 82.79L242.7 2.913C246.8 1.008 251.4-.0081 256-.0078V-.0078z"/>
</>],
['light',<>
	<path d="M231 7.838C247 1.065 265.1 1.066 281 7.84L457.7 82.79C479.7 92.12 496.2 113.8 496 139.1C495.5 239.2 454.7 420.7 282.4 503.2C265.7 511.1 246.3 511.1 229.6 503.2C57.26 420.7 16.49 239.2 16 139.1C15.87 113.8 32.32 92.12 54.3 82.79L231 7.838zM268.5 37.3C260.5 33.91 251.5 33.91 243.5 37.3L66.79 112.3C55.51 117 47.94 127.7 48 139.8C48.46 233.8 87.33 399.6 243.4 474.3C251.4 478.1 260.6 478.1 268.6 474.3C424.7 399.6 463.6 233.8 464 139.8C464.1 127.7 456.5 117 445.2 112.3L268.5 37.3z"/>
</>],
['regular',<>
	<path d="M269.4 2.912L457.7 82.79C479.7 92.12 496.2 113.8 496 139.1C495.5 239.2 454.8 420.7 282.4 503.2C265.8 511.1 246.3 511.1 229.6 503.2C57.29 420.7 16.49 239.2 16 139.1C15.87 113.8 32.32 92.12 54.3 82.79L242.7 2.912C246.8 1.007 251.4-.0091 256-.0088C260.7-.0091 265.2 1.007 269.4 2.912L269.4 2.912zM256 49.39L73.04 126.1C67.1 129.5 63.98 134.7 64 139.7C64.45 231.2 102.4 389 250.4 459.9C253.9 461.6 258.1 461.6 261.7 459.9C409.7 389 447.6 231.2 448 139.7C448.1 134.7 444.9 129.5 438.1 126.1L256 49.39z"/>
</>],
['solid',<>
	<path d="M256-.0078C260.7-.0081 265.2 1.008 269.4 2.913L457.7 82.79C479.7 92.12 496.2 113.8 496 139.1C495.5 239.2 454.7 420.7 282.4 503.2C265.7 511.1 246.3 511.1 229.6 503.2C57.25 420.7 16.49 239.2 15.1 139.1C15.87 113.8 32.32 92.12 54.3 82.79L242.7 2.913C246.8 1.008 251.4-.0081 256-.0078V-.0078z"/>
</>],
['thin',<>
	<path d="M231 7.838C247 1.065 265.1 1.066 281 7.84L457.7 82.79C479.7 92.12 496.2 113.8 496 139.1C495.5 239.2 454.8 420.7 282.4 503.2C265.8 511.1 246.3 511.1 229.6 503.2C57.29 420.7 16.49 239.2 16 139.1C15.87 113.8 32.32 92.12 54.3 82.79L231 7.838zM274.8 22.57C262.8 17.49 249.3 17.49 237.3 22.57L60.55 97.52C43.91 104.6 31.91 120.8 32 139.9C32.48 236.5 72.32 410.1 236.6 488.7C248.8 494.6 263.2 494.6 275.5 488.7C439.7 410.1 479.6 236.5 480 139.9C480.1 120.8 468.1 104.6 451.5 97.52L274.8 22.57z"/>
</>],

]);

const Shield: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Shield.displayName = "Shield";

export default Shield;
