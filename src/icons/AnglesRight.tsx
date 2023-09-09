
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L370.8 256l-137.4-137.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C272.4 444.9 264.2 448 256 448z"/><path className="fa-secondary" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/>
</>],
['light',<>
	<path d="M75.89 85.29C69.98 78.73 59.86 78.2 53.29 84.1C46.75 90.04 46.23 100.1 52.11 106.7L186.5 256l-134.4 149.3c-5.596 6.23-5.73 16.35 1.188 22.62c6.562 5.906 16.69 5.375 22.59-1.188l144-159.1c5.469-6.125 5.469-15.31 0-21.44L75.89 85.29zM411.9 245.3L267.9 85.29c-5.906-6.562-16.03-7.094-22.59-1.188c-6.549 5.938-7.064 16.03-1.188 22.62L378.5 256l-134.4 149.3c-5.596 6.23-5.73 16.35 1.188 22.62c6.562 5.906 16.69 5.375 22.59-1.188l144-159.1C417.4 260.6 417.4 251.4 411.9 245.3z"/>
</>],
['regular',<>
	<path d="M238.1 115.1L359.8 252l-121.6 136c-4.094 4.563-6.125 10.28-6.125 16c0 6.594 2.687 13.16 7.1 17.88c9.874 8.844 25.06 8 33.87-1.875l135.1-152c8.187-9.125 8.187-22.88 0-32l-135.1-152c-8.812-9.875-23.1-10.72-33.87-1.875C230.1 90.93 229.3 106.2 238.1 115.1zM217.9 268c8.187-9.125 8.187-22.88 0-32L81.88 83.99C73.07 74.12 57.88 73.28 48 82.12C38.1 90.93 37.29 106.2 46.13 115.1L167.8 252l-121.6 136c-4.094 4.563-6.125 10.28-6.125 16c0 6.594 2.687 13.16 7.1 17.88c9.874 8.844 25.06 8 33.87-1.875L217.9 268z"/>
</>],
['solid',<>
	<path d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"/>
</>],
['thin',<>
	<path d="M258.2 109.5l138.7 146.5l-138.7 146.5c-3.031 3.156-2.938 8.218 .25 11.31c3.188 3.062 8.266 2.937 11.31-.25l144-151.1c1.484-1.562 2.219-3.531 2.219-5.531c0-1.1-.7344-3.969-2.219-5.531L269.8 98.47c-3.047-3.187-8.125-3.312-11.31-.25C255.3 101.3 255.2 106.3 258.2 109.5zM221.8 261.5C223.3 259.1 223.1 258 223.1 256c0-1.1-.7344-3.969-2.219-5.531L77.77 98.47C74.72 95.28 69.65 95.16 66.46 98.22C63.27 101.3 63.18 106.3 66.21 109.5l138.7 146.5l-138.7 146.5c-3.031 3.156-2.938 8.218 .25 11.31c3.188 3.062 8.266 2.937 11.31-.25L221.8 261.5z"/>
</>],

]);

const AnglesRight: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

AnglesRight.displayName = "AnglesRight";

export default AnglesRight;
