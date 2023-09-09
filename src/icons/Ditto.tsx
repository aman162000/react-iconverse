
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M305.1 54.93c-24.34-30.57-73.86-30.57-98.2 0c-12.2 15.29-17.27 35.3-13.85 54.93l25.21 145.2C221.6 274.1 237.4 288 255.1 288s34.44-13.89 37.74-32.99l25.24-145.2C322.4 90.22 317.3 70.21 305.1 54.93z"/><path className="fa-secondary" d="M14.89 54.93C2.692 70.21-2.372 90.22 1.044 109.9l25.21 145.2C29.55 274.1 45.44 288 63.99 288S98.43 274.1 101.7 255l25.24-145.2c3.389-19.6-1.678-39.61-13.88-54.9C88.75 24.36 39.23 24.36 14.89 54.93z"/>
</>],
['light',<>
	<path d="M63.99 32C45.53 32 27.06 39.64 14.89 54.93C2.692 70.21-2.372 90.22 1.044 109.9l25.21 145.2C29.55 274.1 45.44 288 63.99 288S98.43 274.1 101.7 255l25.24-145.2c3.389-19.6-1.678-39.61-13.88-54.9C100.9 39.64 82.46 32 63.99 32zM70.2 249.6C69.57 253.2 66.9 256 63.99 256S58.42 253.2 57.78 249.5l-25.21-145.2c-1.844-10.59 .8301-21.33 7.357-29.51C45.42 67.96 54.19 64 63.99 64s18.57 3.957 24.09 10.89C94.59 83.04 97.27 93.79 95.44 104.3L70.2 249.6zM305.1 54.93C292.9 39.64 274.5 32 255.1 32s-36.93 7.643-49.1 22.93c-12.2 15.29-17.27 35.3-13.85 54.93l25.21 145.2C221.6 274.1 237.4 288 255.1 288s34.44-13.89 37.74-32.99l25.24-145.2C322.4 90.22 317.3 70.21 305.1 54.93zM262.2 249.6C261.6 253.2 258.9 256 255.1 256s-5.572-2.766-6.211-6.465l-25.21-145.2c-1.844-10.59 .8301-21.33 7.357-29.51C237.4 67.96 246.2 64 255.1 64s18.57 3.957 24.09 10.89c6.506 8.152 9.188 18.9 7.361 29.46L262.2 249.6z"/>
</>],
['regular',<>
	<path d="M63.99 32C45.53 32 27.06 39.64 14.89 54.93C2.692 70.21-2.372 90.22 1.044 109.9l25.21 145.2C29.55 274.1 45.44 288 63.99 288S98.43 274.1 101.7 255l25.24-145.2c3.389-19.6-1.678-39.61-13.88-54.9C100.9 39.64 82.46 32 63.99 32zM63.1 191.8L48.33 101.6c-1.057-6.08 .4277-12.19 4.113-16.8C56.01 80.35 62.18 80 63.99 80s7.982 .3477 11.58 4.871C79.23 89.45 80.72 95.56 79.68 101.6L63.1 191.8zM305.1 54.93C292.9 39.64 274.5 32 255.1 32s-36.93 7.643-49.1 22.93c-12.2 15.29-17.27 35.3-13.85 54.93l25.21 145.2C221.6 274.1 237.4 288 255.1 288s34.44-13.89 37.74-32.99l25.24-145.2C322.4 90.22 317.3 70.21 305.1 54.93zM255.1 191.8l-15.67-90.19c-1.057-6.08 .4277-12.19 4.113-16.8C248 80.35 254.2 80 255.1 80s7.982 .3477 11.58 4.871c3.654 4.578 5.148 10.69 4.104 16.73L255.1 191.8z"/>
</>],
['solid',<>
	<path d="M14.89 54.93C2.692 70.21-2.372 90.22 1.044 109.9l25.21 145.2C29.55 274.1 45.44 288 63.99 288S98.43 274.1 101.7 255l25.24-145.2c3.389-19.6-1.678-39.61-13.88-54.9C88.75 24.36 39.23 24.36 14.89 54.93zM305.1 54.93c-24.34-30.57-73.86-30.57-98.2 0c-12.2 15.29-17.27 35.3-13.85 54.93l25.21 145.2C221.6 274.1 237.4 288 255.1 288s34.44-13.89 37.74-32.99l25.24-145.2C322.4 90.22 317.3 70.21 305.1 54.93z"/>
</>],
['thin',<>
	<path d="M305.1 54.93C292.9 39.64 274.5 32 255.1 32s-36.93 7.643-49.1 22.93c-12.2 15.29-17.27 35.3-13.85 54.93l25.21 145.2C221.6 274.1 237.4 288 255.1 288s34.44-13.89 37.74-32.99l25.24-145.2C322.4 90.22 317.3 70.21 305.1 54.93zM303.2 107.1l-25.24 145.2C275.1 263.7 266.8 272 255.1 272s-20-8.289-21.97-19.73L208.8 107.1c-2.627-15.1 1.232-30.48 10.6-42.22C227.1 54.16 241.3 48 255.1 48s28.04 6.156 36.59 16.91C301.9 76.63 305.8 92.01 303.2 107.1zM63.99 32C45.53 32 27.06 39.64 14.89 54.93C2.692 70.21-2.372 90.22 1.044 109.9l25.21 145.2C29.55 274.1 45.44 288 63.99 288S98.43 274.1 101.7 255l25.24-145.2c3.389-19.6-1.678-39.61-13.88-54.9C100.9 39.64 82.46 32 63.99 32zM111.2 107.1L85.97 252.3C83.1 263.7 74.76 272 63.1 272s-20-8.289-21.97-19.73L16.81 107.1c-2.627-15.1 1.232-30.48 10.6-42.22C35.96 54.16 49.29 48 63.1 48s28.04 6.156 36.59 16.91C109.9 76.63 113.8 92.01 111.2 107.1z"/>
</>],

]);

const Ditto: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Ditto.displayName = "Ditto";

export default Ditto;