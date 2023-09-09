
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M512 256c0 53.02-42.98 96-96 96H96c-53.02 0-96-42.98-96-96c0-45.54 31.79-83.47 74.33-93.33C67.85 152.7 64 140.8 64 128c0-35.35 28.65-64 64-64c12.8 0 24.67 3.85 34.67 10.33C172.5 31.79 210.5 0 256 0s83.47 31.79 93.33 74.33C359.3 67.85 371.2 64 384 64c35.35 0 64 28.65 64 64c0 12.8-3.85 24.67-10.33 34.67C480.2 172.5 512 210.5 512 256z"/><path className="fa-secondary" d="M256 431.2C248.2 413.5 239.8 397.8 231.6 384H134.7c66.22 81.42 47.54 128 88.64 128h65.34c41.16 0 22.37-46.52 88.64-128h-96.9C272.2 397.8 263.8 413.5 256 431.2z"/>
</>],
['light',<>
	<path d="M448.6 154.3C450.8 147.2 452 139.8 452 132.4c0-40.91-34.09-74.17-76-74.17c-7.875 0-15.66 1.203-23.09 3.547C336.3 24.61 298.8 0 256 0S175.7 24.61 159.1 61.73C151.7 59.39 143.9 58.19 136 58.19c-41.91 0-76 33.27-76 74.17c0 7.484 1.156 14.86 3.438 21.92C25.28 170.4 0 206.1 0 248.7c0 56.36 46.64 102.2 104.3 103.1C185.9 454.1 162.1 512 192 512c8.148 0 16.01-6.535 16.01-15.1c0-7.568-16.31-75.65-63.87-144h50.39C244.5 421.9 236.2 442.7 256 442.7c19.8 0 11.48-20.85 61.47-90.72h50.37c-47.35 68.04-63.85 136.6-63.85 144C303.1 505.6 311.9 512 320 512c29.29 0 6.226-56.19 87.68-160.2C465.3 350.9 512 305.1 512 248.7C512 206.1 486.7 170.4 448.6 154.3zM256 390.6C248.1 375.8 240.4 363 233.2 352h45.51C271.6 363 263.9 375.8 256 390.6zM405.1 320h-2.029c-1.286-.331-2.572-.4908-3.846-.4908c-1.305 0-2.599 .1676-3.868 .4908H105.1C65.19 320 32 288 32 248.7C32 215.5 55.53 187.1 89.19 179.5c7.145-1.602 12.5-7.94 12.5-15.57c0-10.02-9.686-13.35-9.686-31.57c0-23.25 19.75-42.17 44-42.17c18.96 0 22.9 9.373 32.47 9.373c7.591 0 13.93-5.231 15.59-12.28C191.8 54.73 221.4 32 256 32s64.16 22.73 71.94 55.28c1.692 7.147 8.135 12.3 15.6 12.3c9.549 0 13.43-9.391 32.47-9.391c24.25 0 44 18.92 44 42.17c0 18.19-9.686 21.56-9.686 31.57c0 7.62 5.342 13.97 12.5 15.57C456.5 187.1 480 215.5 480 248.7C480 288 446.8 320 405.1 320z"/>
</>],
['regular',<>
	<path d="M455.4 146.5C455.8 143.3 456 140 456 136.7c0-46.52-39.48-84.36-88-84.36c-4.316 0-8.611 .3066-12.85 .9121C334.7 20.79 297.6 0 256 0S177.3 20.79 156.8 53.28C152.6 52.67 148.3 52.36 144 52.36c-48.52 0-88 37.85-88 84.36c0 3.295 .2012 6.568 .5996 9.812C22.1 165.1 0 201.4 0 241.5C0 302.4 52.04 352 116 352h17.92c73.02 102.6 46.7 160 93.32 160h57.73c46.32 0 20.05-56.33 93.17-160H396C459.1 352 512 302.4 512 241.5C512 201.4 489.9 165.1 455.4 146.5zM256 412.7C246.9 389.4 237.1 369 227.8 352h56.42C274.9 369 265.1 389.4 256 412.7zM396 304h-280C78.5 304 48 275.9 48 241.5c0-29.06 21.56-54.03 52.42-60.72c7.364-1.598 12.61-8.116 12.61-15.64C113 155.4 104 152.4 104 136.7c0-20.05 17.94-36.36 40-36.36c17.99 0 20.76 8.449 30.34 8.449c7.324 0 13.76-4.987 15.53-12.15C196.1 68.01 224.2 48 256 48s59.03 20.01 66.13 48.66c1.774 7.166 8.207 12.15 15.53 12.15c9.542 0 12.42-8.449 30.34-8.449c22.06 0 40 16.31 40 36.36c0 15.59-9.035 18.64-9.035 28.37c0 7.536 5.262 14.04 12.61 15.64C442.4 187.4 464 212.4 464 241.5C464 275.9 433.5 304 396 304z"/>
</>],
['solid',<>
	<path d="M437.7 162.7C444.2 152.7 448 140.8 448 128c0-35.35-28.65-64-64-64c-12.8 0-24.67 3.85-34.67 10.33C339.5 31.79 301.5 0 256 0S172.5 31.79 162.7 74.33C152.7 67.85 140.8 64 128 64C92.65 64 64 92.65 64 128c0 12.8 3.85 24.67 10.33 34.67C31.79 172.5 0 210.5 0 256c0 53.02 42.98 96 96 96h320c53.02 0 96-42.98 96-96C512 210.5 480.2 172.5 437.7 162.7zM256 431.2C248.2 413.5 239.8 397.8 231.6 384H134.7c10.9 13.4 40.52 53.05 58.59 106.8C197.6 503.6 209.8 512 223.3 512h65.34c13.49 0 25.76-8.422 30.06-21.21C336.8 437 366.4 397.4 377.3 384h-96.9C272.2 397.8 263.8 413.5 256 431.2z"/>
</>],
['thin',<>
	<path d="M443.9 158.3c4.031-8.844 6.125-18.39 6.125-28.12c0-38.09-31.41-69.09-69.1-69.09c-9.906 0-19.66 2.094-28.66 6.141C337.5 27.17 299.7 0 256 0S174.5 27.17 160.7 67.23C151.7 63.19 141.9 61.09 132 61.09c-38.59 0-70 31-70 69.09c0 9.734 2.094 19.28 6.125 28.12C27.53 171.1 0 209.3 0 252.4C0 307.3 45.31 352 101 352h7.186C179.3 438 177.6 512 192 512c4.837 0 7.992-4.013 7.992-7.988c0-2.662-15.27-77.85-71.49-152h67.88C244 414.7 242.6 448 256 448c13.29 0 12.23-33.61 59.62-96h67.87c-56.12 73.99-71.48 149.4-71.48 152C312 507.1 315.2 512 320 512c14.25 0 11.51-71.27 83.76-160H411C466.7 352 512 307.3 512 252.4C512 209.3 484.5 171.1 443.9 158.3zM256 421.2C240.1 388.4 225.7 365.8 216.1 352h79.76C286.3 365.8 271.9 388.4 256 421.2zM411 336h-310C54.13 336 16 298.5 16 252.4c0-39.02 27.06-72.44 65.78-81.28c3.54-.7987 6.225-3.963 6.225-7.78c0-5.504-10.01-13.08-10.01-33.11c0-29.28 24.22-53.09 54-53.09c20.53 0 27.9 9.867 33.6 9.867c3.596 0 6.908-2.491 7.773-6.18C182.3 42.64 216.3 16 256 16s73.66 26.64 82.63 64.78c.868 3.7 4.192 6.18 7.773 6.18c5.685 0 13.07-9.867 33.6-9.867c29.78 0 53.1 23.81 53.1 53.09c0 19.98-10.01 27.6-10.01 33.11c0 3.818 2.686 6.982 6.225 7.78C468.9 179.9 496 213.3 496 252.4C496 298.5 457.9 336 411 336z"/>
</>],

]);

const Broccoli: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Broccoli.displayName = "Broccoli";

export default Broccoli;
