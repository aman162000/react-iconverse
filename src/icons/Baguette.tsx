
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M124.5 229.8L97.62 248.2l83.07 83.07C183.8 334.4 187.9 336 192 336s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L124.5 229.8zM238.4 151.8L211.6 170.2l81.13 81.13C295.8 254.4 299.9 256 304 256s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L238.4 151.8zM427.3 148.7L352.3 73.72l-26.85 18.4l79.2 79.2C407.8 174.4 411.9 176 416 176s8.188-1.562 11.31-4.688C433.6 165.1 433.6 154.9 427.3 148.7z"/><path className="fa-secondary" d="M639.6 118c-4.062 50.83-35.66 103.5-80.53 134.3L227.7 479.3c-45 30.84-105.2 40.95-153.4 25.59c-22.88-7.268-42.88-22.38-56.29-42.54c-13.3-20.04-19.58-44.33-17.61-68.4c4.062-50.83 35.66-103.5 80.53-134.3l16.73-11.46l83.07 83.07C183.8 334.4 187.9 336 192 336s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L124.5 229.8L211.6 170.2l81.13 81.13C295.8 254.4 299.9 256 304 256s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L238.4 151.8l87.09-59.66l79.2 79.2C407.8 174.4 411.9 176 416 176s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L352.3 73.72l59.95-41.07C443.3 11.38 481.6 0 518.2 0c16.46 0 32.57 2.303 47.54 7.055c22.88 7.268 42.88 22.38 56.29 42.54C635.3 69.63 641.6 93.92 639.6 118z"/>
</>],
['light',<>
	<path d="M622 49.6c-13.4-20.16-33.4-35.27-56.29-42.54C550.8 2.303 534.7 0 518.2 0c-36.6 0-74.87 11.38-105.9 32.65L80.88 259.7c-44.86 30.74-76.46 83.44-80.53 134.3c-1.979 24.08 4.307 48.37 17.61 68.4c13.4 20.16 33.41 35.27 56.29 42.54C89.24 509.7 105.4 512 121.8 512c36.58 0 74.82-11.41 105.9-32.68l331.4-227.1c44.87-30.74 76.46-83.44 80.53-134.3C641.6 93.92 635.3 69.63 622 49.6zM541 225.9L209.6 452.9C184.5 470.1 152.5 480 121.8 480c-13.52 0-26.27-1.877-37.91-5.582c-15.98-5.074-29.94-15.64-39.31-29.74c-9.371-14.12-13.77-31.2-12.37-48.16c3.273-40.95 30.08-85.33 66.71-110.4l21.66-14.84l60.05 60.05C183.8 334.4 187.9 336 192 336s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L147.5 252.9l87.09-59.66l58.12 58.12C295.8 254.4 299.9 256 304 256s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62l-53.89-53.89l87.09-59.66l56.18 56.18C407.8 174.4 411.9 176 416 176s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62l-51.95-51.95l55.02-37.7C455.5 41.86 487.5 32 518.2 32c13.51 0 26.24 1.869 37.85 5.553c15.98 5.074 29.95 15.64 39.31 29.74c9.369 14.12 13.76 31.2 12.37 48.16C604.5 156.4 577.7 200.8 541 225.9z"/>
</>],
['regular',<>
	<path d="M565.7 7.055C550.8 2.303 534.7 0 518.2 0c-36.6 0-74.87 11.38-105.9 32.65L80.88 259.7c-44.86 30.74-76.46 83.44-80.53 134.3c-1.979 24.08 4.307 48.37 17.61 68.4c13.4 20.16 33.41 35.27 56.29 42.54C89.24 509.7 105.4 512 121.8 512c36.58 0 74.82-11.41 105.9-32.68l331.4-227.1c44.87-30.74 76.46-83.44 80.53-134.3c1.98-24.08-4.307-48.37-17.61-68.4C608.6 29.43 588.6 14.32 565.7 7.055zM531.1 212.7L200.6 439.7C178.1 455.2 149.4 464 121.8 464c-11.87 0-22.99-1.623-33.07-4.832c-12.52-3.975-23.47-12.27-30.83-23.34c-7.389-11.13-10.86-24.61-9.752-38.04c2.91-36.4 26.95-75.98 59.81-98.5l17.42-11.93l49.6 49.6C179.7 341.7 185.8 344 192 344s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L165.7 259.8l73.66-50.46l47.66 47.66C291.7 261.7 297.8 264 304 264s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L279.6 181.7l73.66-50.46l45.72 45.72C403.7 181.7 409.8 184 416 184s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94l-39.38-39.38l45.84-31.41C461.9 56.84 490.6 48 518.2 48c11.86 0 22.97 1.617 33.01 4.803c12.52 3.975 23.47 12.27 30.83 23.34c7.391 11.13 10.86 24.6 9.752 38.04C588.9 150.6 564.8 190.2 531.1 212.7z"/>
</>],
['solid',<>
	<path d="M639.6 118c-4.062 50.83-35.66 103.5-80.53 134.3L227.7 479.3c-45 30.84-105.2 40.95-153.4 25.59c-22.88-7.268-42.88-22.38-56.29-42.54c-13.3-20.04-19.58-44.33-17.61-68.4c4.062-50.83 35.66-103.5 80.53-134.3l16.73-11.46l83.07 83.07C183.8 334.4 187.9 336 192 336s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L124.5 229.8L211.6 170.2l81.13 81.13C295.8 254.4 299.9 256 304 256s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L238.4 151.8l87.09-59.66l79.2 79.2C407.8 174.4 411.9 176 416 176s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L352.3 73.72l59.95-41.07C443.3 11.38 481.6 0 518.2 0c16.46 0 32.57 2.303 47.54 7.055c22.88 7.268 42.88 22.38 56.29 42.54C635.3 69.63 641.6 93.92 639.6 118z"/>
</>],
['thin',<>
	<path d="M622 49.6c-13.4-20.16-33.4-35.27-56.29-42.54C550.8 2.303 534.7 0 518.2 0c-36.6 0-74.87 11.38-105.9 32.65L80.88 259.7c-44.86 30.74-76.46 83.44-80.53 134.3c-1.979 24.08 4.307 48.37 17.61 68.4c13.4 20.16 33.41 35.27 56.29 42.54C89.24 509.7 105.4 512 121.8 512c36.58 0 74.82-11.41 105.9-32.68l331.4-227.1c44.87-30.74 76.46-83.44 80.53-134.3C641.6 93.92 635.3 69.63 622 49.6zM550.1 239.1l-331.4 227.1C190.1 485.1 155.7 496 121.8 496c-15.17 0-29.55-2.131-42.75-6.332c-19.44-6.174-36.42-19.01-47.8-36.14c-11.35-17.1-16.67-37.79-14.99-58.28c3.695-46.21 32.59-94.24 73.62-122.3L115.8 255.2l70.51 70.51C187.9 327.2 189.9 328 191.1 328s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.188 0-11.31L129.3 245.1l100.5-68.86l68.57 68.57C299.9 247.2 301.9 248 303.1 248s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.188 0-11.31L243.2 167.9l100.5-68.86l66.63 66.63C411.9 167.2 413.9 168 415.1 168s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.188 0-11.31l-64.51-64.51l64.2-43.98C449 26.88 484.3 16 518.2 16c15.15 0 29.52 2.121 42.69 6.303c19.44 6.174 36.42 19.01 47.8 36.14c11.35 17.1 16.67 37.79 14.99 58.28C619.1 162.9 591.1 210.1 550.1 239.1z"/>
</>],

]);

const Baguette: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Baguette.displayName = "Baguette";

export default Baguette;