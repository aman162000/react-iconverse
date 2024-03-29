
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M464 224H320c-17.69 0-32-14.31-32-32s14.31-32 32-32h112V48c0-17.69 14.31-32 32-32s32 14.31 32 32V192C496 209.7 481.7 224 464 224z"/><path className="fa-secondary" d="M396.5 390.2c10.59 14.16 7.75 34.22-6.375 44.81c-39.03 29.28-85.36 44.86-134.2 44.86C132.5 479.9 32 379.4 32 256s100.5-223.9 223.9-223.9c69.15 0 134 32.47 176.1 86.12V160h-48.61c-29.97-39.7-77.25-63.78-127.6-63.78C167.7 96.22 96 167.9 96 256s71.69 159.8 159.8 159.8c34.88 0 68.03-11.03 95.88-31.94C365.9 373.3 385.9 376.1 396.5 390.2z"/>
</>],
['light',<>
	<path d="M255.9 32.11c79.47 0 151.8 41.76 192.1 109.4V48C448 39.16 455.2 32 464 32S480 39.16 480 48v128C480 184.8 472.8 192 464 192h-128C327.2 192 320 184.8 320 176S327.2 160 336 160h85.85C387.5 100.7 324.9 64 256 64C150.1 64 64 150.1 64 256s86.13 192 192 192c59.48 0 114.7-26.91 151.3-73.84c5.438-7 15.48-8.281 22.47-2.75c6.953 5.438 8.187 15.5 2.75 22.44c-42.8 54.75-107.3 86.05-176.7 86.05C132.4 479.9 32 379.5 32 256S132.4 32.11 255.9 32.11z"/>
</>],
['regular',<>
	<path d="M496 40v160C496 213.3 485.3 224 472 224h-160C298.8 224 288 213.3 288 200s10.75-24 24-24h100.5C382.8 118.3 322.5 80 256 80C158.1 80 80 158.1 80 256s78.97 176 176 176c41.09 0 81.09-14.47 112.6-40.75c10.16-8.5 25.31-7.156 33.81 3.062c8.5 10.19 7.125 25.31-3.062 33.81c-40.16 33.44-91.17 51.77-143.5 51.77C132.4 479.9 32 379.5 32 256s100.4-223.9 223.9-223.9c79.85 0 152.4 43.46 192.1 109.1V40c0-13.25 10.75-24 24-24S496 26.75 496 40z"/>
</>],
['solid',<>
	<path d="M496 48V192c0 17.69-14.31 32-32 32H320c-17.69 0-32-14.31-32-32s14.31-32 32-32h63.39c-29.97-39.7-77.25-63.78-127.6-63.78C167.7 96.22 96 167.9 96 256s71.69 159.8 159.8 159.8c34.88 0 68.03-11.03 95.88-31.94c14.22-10.53 34.22-7.75 44.81 6.375c10.59 14.16 7.75 34.22-6.375 44.81c-39.03 29.28-85.36 44.86-134.2 44.86C132.5 479.9 32 379.4 32 256s100.5-223.9 223.9-223.9c69.15 0 134 32.47 176.1 86.12V48c0-17.69 14.31-32 32-32S496 30.31 496 48z"/>
</>],
['thin',<>
	<path d="M24 256c0 127.9 104.1 232 232 232c47.72 0 93.58-14.38 132.6-41.59c3.625-2.531 4.516-7.5 1.984-11.12c-2.547-3.688-7.578-4.5-11.14-2C343.1 458.6 300.4 472 256 472c-119.1 0-216-96.91-216-216S136.9 40 256 40c92.55 0 175.4 60.59 204.5 147.9l-110.3-22.05c-4.094-.8125-8.531 1.938-9.406 6.281c-.8594 4.312 1.938 8.531 6.281 9.406l125.5 25.09c.5156 .0938 1.047 .1562 1.578 .1562c3.734 0 7.062-2.625 7.828-6.438l25.11-125.5c.875-4.312-1.938-8.531-6.281-9.406c-4.156-.7813-8.531 1.938-9.406 6.281l-20.05 100.2C437 84.14 351.4 24 256 24C128.1 24 24 128.1 24 256z"/>
</>],

]);

const ArrowRotateRight: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ArrowRotateRight.displayName = "ArrowRotateRight";

export default ArrowRotateRight;
