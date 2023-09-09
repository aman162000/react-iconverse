
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M192 432c-56.5 0-96-37.76-96-91.74c0-12.47 4.207-55.32 83.87-143c6.314-6.953 17.95-6.953 24.26 0C283.8 284.9 288 327.8 288 340.3C288 394.2 248.5 432 192 432z"/><path className="fa-secondary" d="M203.1 4.365c-6.177-5.82-16.06-5.819-22.23-.0007C74.52 104.5 0 234.1 0 312C0 437.9 79 512 192 512s192-74.05 192-200C384 233.9 309 104.2 203.1 4.365zM192 432c-56.5 0-96-37.76-96-91.74c0-12.47 4.207-55.32 83.87-143c6.314-6.953 17.95-6.953 24.26 0C283.8 284.9 288 327.8 288 340.3C288 394.2 248.5 432 192 432z"/>
</>],
['light',<>
	<path d="M214 8.775C201.8-2.924 182.2-2.924 169.1 8.77C69.46 105.3 0 226.2 0 300.5C0 425 79 512 192 512s192-87 192-211.5C384 225.1 314.1 105 214 8.775zM212.8 477.9C205.9 478.8 199.3 480 192 480s-13.88-1.25-20.75-2.125c-43.5-8.5-72.38-44.13-72.38-92.63C98.88 371.9 103.1 324 192 224c88.88 100 93.13 147.9 93.13 161.3C285.1 433.8 256.3 469.3 212.8 477.9zM310.9 424.9c3.75-12.38 6.25-25.5 6.25-39.63c0-81-112.8-195.5-125.1-209.5c-12.88 14.5-125.1 128.6-125.1 209.5c0 14.12 2.5 27.25 6.25 39.63C47.25 393.6 32 350.9 32 300.5c0-90.75 122.6-227.5 160-263.6c37.38 36 160 172.8 160 263.6C352 350.9 336.8 393.6 310.9 424.9z"/>
</>],
['regular',<>
	<path d="M192 0C86.25 93.5 0 214.4 0 298.1C0 424 79 512 192 512s192-88 192-213.9C384 214.1 296.8 92.5 192 0zM192 65.25c51.38 51 144 158.5 144 232.9c0 29.5-5.625 55.63-15.12 78.38C317.4 301.8 237.2 218.6 192 167.8c-45.75 51.5-125.4 133.7-128.9 208.7C53.75 353.8 48 327.5 48 298.1C48 223.9 140.6 116.4 192 65.25zM173.9 462.2C135.8 454.8 110.5 423.5 110.5 381.1C110.5 360.5 124 316.5 192 240c68 76.5 81.5 120.5 81.5 141.1c0 42.38-25.25 73.63-63.38 81.12C189.2 464.6 194.8 464.6 173.9 462.2z"/>
</>],
['solid',<>
	<path d="M203.1 4.365c-6.177-5.82-16.06-5.819-22.23-.0007C74.52 104.5 0 234.1 0 312C0 437.9 79 512 192 512s192-74.05 192-200C384 233.9 309 104.2 203.1 4.365zM192 432c-56.5 0-96-37.76-96-91.74c0-12.47 4.207-55.32 83.87-143c6.314-6.953 17.95-6.953 24.26 0C283.8 284.9 288 327.8 288 340.3C288 394.2 248.5 432 192 432z"/>
</>],
['thin',<>
	<path d="M197.4 2.086c-3.062-2.781-7.719-2.781-10.78 0C73.25 105.4 0 222 0 299.1C0 424.5 78.95 512 192 512s192-87.55 192-212.9C384 222.1 310.8 105.5 197.4 2.086zM104 391.6c0-37.14 35.13-96.16 88-148.5c52.88 52.36 88 111.4 88 148.5c0 61.44-36.19 104.4-88 104.4S104 453.1 104 391.6zM264.1 481.1C284.1 459.8 296 428.8 296 391.6c0-43.11-38.66-108-98.47-165.4c-3.094-2.969-7.969-2.969-11.06 0C126.7 283.5 88 348.5 88 391.6c0 37.12 11.95 68.11 31.93 89.46C56.36 452.7 16 385.7 16 299.1c0-70.49 70.48-182.5 176-280.2c105.5 97.85 176 209.8 176 280.2C368 385.7 327.6 452.7 264.1 481.1z"/>
</>],

]);

const FireFlameSimple: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FireFlameSimple.displayName = "FireFlameSimple";

export default FireFlameSimple;
