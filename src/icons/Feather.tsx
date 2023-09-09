
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M23.1 512c-6.156 0-12.28-2.344-16.97-7.031c-9.375-9.375-9.375-24.6 0-33.98l304-303.1c9.375-9.375 24.56-9.375 33.94 0s9.375 24.56 0 33.94l-303.1 304C36.32 509.7 30.16 512 23.1 512z"/><path className="fa-secondary" d="M483.4 244.2L351.9 287.1h97.74c-9.873 10.62 3.749-3.125-46.24 46.87l-147.6 49.12h98.24c-74.99 73.12-194.6 70.62-246.8 54.1l237.8-238c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L72.87 405.2l-.3107-.5296c-9.24-30.89-29.15-162.9 56.55-248.4l85.74-85.68c90.62-90.62 189.8-88.27 252.3-25.78C517.8 95.34 528.9 169.7 483.4 244.2z"/>
</>],
['light',<>
	<path d="M467.1 44.85C438.3 15.97 401.7 0 361.7 0c-46.75 0-98.13 21.88-146.9 70.63L129.1 156.3c-79.37 79.38-71.86 210.8-53.48 257.4l-70.87 70.87C1.625 487.6 0 491.8 0 496C0 504.5 6.875 512 15.1 512c4.125 0 8.25-1.5 11.37-4.75l70.87-70.87c17.25 6.75 45.76 12.11 79.26 12.11c57.12 0 127.1-15.44 178.1-65.56l85.75-85.75C531.1 206.6 529.6 107.5 467.1 44.85zM151.7 179l85.75-85.75C277.6 53.25 320.5 32 361.6 32c30.1 0 59.62 12.25 82.87 35.5c42.25 42.38 45.75 100.1 13.12 156.7h-147.2l37.25-37.25c6.25-6.25 6.25-16.38 0-22.62c-6.25-6.25-16.37-6.25-22.62 0l-223.7 223.7C91.25 344.9 87.87 242.9 151.7 179zM177.5 416.4c-23.25 0-40.1-2.75-53.5-5.75l58.75-58.75l158.2 .375l-7.1 8C284.1 409.1 214.6 416.4 177.5 416.4zM372.9 320.4H214.4l63.1-64.13h156.4C429.6 262.4 372.9 320.4 372.9 320.4z"/>
</>],
['regular',<>
	<path d="M467.1 44.85C438.3 15.97 401.7 0 361.7 0c-46.75 0-98.01 21.88-146.9 70.63L129.1 156.3c-74.99 75.12-72.23 196.4-56.24 248.9l-65.84 65.77c-9.374 9.374-9.374 24.6 0 33.98c9.374 9.374 24.6 9.374 33.98 0l65.64-65.62c17.37 5.25 42.36 9.138 70.86 9.138c57.12 0 127.1-15.56 178.1-65.56l85.75-85.75C531.1 206.6 529.6 107.5 467.1 44.85zM147.4 398.6l46.62-46.62h123.1c-44.5 41.87-106.7 48.5-140.5 48.5C166 400.5 156.1 399.6 147.4 398.6zM350.6 319.1H226l63.1-63.1h123.7c-2.25 2.375-3.1 4.875-6.375 7.25L350.6 319.1zM438.9 223.1h-116.9l22.5-22.5c9.374-9.374 9.374-24.62 0-33.1c-9.374-9.374-24.62-9.374-33.1 0l-196.1 196.1c-5.25-45.87-.25-124.2 49.5-174.1l85.74-85.74c36.1-36.1 75.99-56.62 112.9-56.62c26.62 0 51.37 10.75 71.49 30.87C472.2 117.1 473.1 171.1 438.9 223.1z"/>
</>],
['solid',<>
	<path d="M483.4 244.2L351.9 287.1h97.74c-9.874 10.62 3.75-3.125-46.24 46.87l-147.6 49.12h98.24c-74.99 73.12-194.6 70.62-246.8 54.1l-66.14 65.99c-9.374 9.374-24.6 9.374-33.98 0s-9.374-24.6 0-33.98l259.5-259.2c6.249-6.25 6.249-16.37 0-22.62c-6.249-6.249-16.37-6.249-22.62 0l-178.4 178.2C58.78 306.1 68.61 216.7 129.1 156.3l85.74-85.68c90.62-90.62 189.8-88.27 252.3-25.78C517.8 95.34 528.9 169.7 483.4 244.2z"/>
</>],
['thin',<>
	<path d="M467.1 44.85C438.3 16.11 401.7 0 361.7 0c-46.67 0-97.7 21.82-146.5 70.62L129.5 156.2c-60.49 60.37-70.37 150.7-63.62 211.1c.2891 2.674 .8223 5.08 1.174 7.631c2.076 15.06 8.48 28.96 18.04 40.62l-82.75 82.75c-3.125 3.125-3.125 8.188 0 11.31C3.906 511.2 5.938 512 8 512s4.094-.7813 5.656-2.344l82.73-82.73c11.69 9.658 25.64 16.14 40.78 18.22c2.457 .3379 4.969 .6484 7.537 .9297c10.42 1.164 21.68 1.881 33.58 1.881c57.04 0 127.5-15.39 177.5-65.45l85.62-85.74C531.9 206.2 529.5 107.4 467.1 44.85zM82.9 372.8c-.3301-2.398-2.072-17.52-2.072-17.52c-4.355-59.42 9.131-136.1 59.98-187.7l85.74-85.62C269.7 38.8 316.5 16 361.9 16c35.25 0 67.77 13.85 94.01 40.02C501.8 102 507.8 163.6 476.2 224h-176.9l50.34-50.34c3.125-3.125 3.125-8.188 0-11.31s-8.188-3.125-11.31 0l-241.5 241.5C89.74 394.7 84.49 384.4 82.9 372.8zM344.4 371.2c-52.75 52.86-126.7 60.75-166.2 60.75c-8.785 0-17.49-.3828-25.96-1.143c0 0-10.66-1.201-12.97-1.518c-11.65-1.605-22.02-6.912-31.2-14.14L187.3 336h192.3L344.4 371.2zM430.1 285.5L395.6 320H203.3l80-80h182.9C456.4 255.4 444.8 270.7 430.1 285.5z"/>
</>],

]);

const Feather: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Feather.displayName = "Feather";

export default Feather;