
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M287.1 288c-17.62 0-31.1 14.37-31.1 31.1c0 17.62 14.37 31.1 31.1 31.1s31.1-14.37 31.1-31.1C319.1 302.4 305.6 288 287.1 288zM303.1 224c8.875 0 15.1-7.125 15.1-15.1c0-8.873-7.125-15.1-15.1-15.1s-15.1 7.126-15.1 15.1C287.1 216.9 295.1 224 303.1 224z"/><path className="fa-secondary" d="M472.2 195.9l-66.1-22.1c-19.25-6.624-33.5-20.87-38.13-38.24l-16-60.49c-11.62-43.74-76.63-57.11-110-22.62L194.1 99.3c-13.25 13.75-33.5 20.87-54.25 19.25L68.86 112.9c-52-3.999-86.88 44.99-59 82.86l38.63 52.49c11 14.1 12.75 33.74 4.625 50.12l-28.5 56.99c-20.62 41.24 22.88 84.86 73.5 73.86l69.1-15.25c20.12-4.499 41.38 .0001 57 11.62l54.38 40.87c39.38 29.62 101 7.623 104.5-37.24l4.625-61.86c1.375-17.75 12.88-33.87 30.62-42.99l61.1-31.62C526.1 269.8 520.9 212.5 472.2 195.9zM159.1 256c-17.62 0-31.1-14.37-31.1-31.1s14.37-31.1 31.1-31.1S191.1 206.4 191.1 224S177.6 256 159.1 256zM287.1 351.1c-17.62 0-31.1-14.37-31.1-31.1c0-17.62 14.37-31.1 31.1-31.1s31.1 14.37 31.1 31.1C319.1 337.6 305.6 351.1 287.1 351.1zM303.1 224c-8.875 0-15.1-7.125-15.1-15.1c0-8.873 7.125-15.1 15.1-15.1s15.1 7.126 15.1 15.1C319.1 216.9 312.9 224 303.1 224z"/>
</>],
['light',<>
	<path d="M159.1 200c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24s24-10.75 24-24C183.1 210.8 173.2 200 159.1 200zM287.1 296c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24s24-10.75 24-24C311.1 306.8 301.2 296 287.1 296zM463.9 184.1l-62.88-21.25c-13-4.375-22.5-13.63-25.38-24.5l-15-56.26c-6.25-23.38-25.62-41.38-51.63-48.13C280.2 27.31 250.1 34.94 230.6 54.94L187.4 99.19C178.1 108.6 163.9 113.7 149.2 112.4L81.86 107.2c-31.38-2.5-60.5 12.13-74.25 37C-4.012 165.3-2.262 189.8 12.36 209.6L48.49 258.3c6.875 9.127 7.875 20 3 29.88l-26.75 52.88c-10.62 21.25-8.25 45.25 6.5 64.38c17.88 23 49.25 33.63 80.13 27l65.63-14.12c14.5-3.127 29.62-.125 40.63 8l50.88 38c14 10.25 31 15.75 48.38 15.62c12 0 23.75-2.5 34.75-7.5c23.38-10.62 38.5-31 40.25-54.38l4.375-57.38c.875-10.88 8.375-21 20-26.88l58.13-29.5c24.88-12.62 39.23-36.23 37.48-61.61C509.1 216.6 491.6 194.5 463.9 184.1zM459.9 275.8l-58.13 29.5c-21.75 11-35.75 30.75-37.38 53.01l-4.375 57.38c-1.25 16.63-15.5 24.88-21.62 27.63c-16.75 7.625-36.63 5.875-50.75-4.627l-51-38c-13.62-10.13-31-15.63-48.5-15.63c-6 0-12 .625-17.88 2L104.6 401.2c-23 5-40.13-5.125-48-15.38c-4.125-5.375-10.12-16.5-3.125-30.38l26.5-52.88c10.5-20.63 8.25-44.38-5.75-63.38L38.11 190.5c-9.75-13-5.75-24.88-2.5-30.75c7.75-14 25.38-21.88 43.75-20.63l67.38 5.25c24.25 1.875 47.75-6.625 63.5-22.75l43.25-44.25c11.38-11.63 30-16.13 47.5-11.63c14.75 3.875 25.5 13.5 28.75 25.63l15 56.13c5.75 21.25 23 38.75 46.13 46.5l62.75 21.38c15.62 5.25 25.38 16.38 26.38 29.75C480.9 257.5 473.4 268.1 459.9 275.8zM303.1 192c-8.875 0-15.1 7.122-15.1 15.1c0 8.875 7.125 15.1 15.1 15.1s15.1-7.124 15.1-15.1C319.1 199.1 312.9 192 303.1 192z"/>
</>],
['regular',<>
	<path d="M459.6 179.6l-60.74-20.5c-9.748-3.25-16.87-9.875-18.1-17.62l-14.5-54c-6.874-25.5-27.62-45-55.74-52.5c-30.87-7.1-63.12 .25-84.24 21.62L183.6 99.25c-6.999 7.125-18.62 11-30.12 10.13l-65.11-5c-33.74-2.5-65.11 13.25-79.99 40.25c-12.87 23.38-10.87 50.25 5.374 72l34.87 46.88c4.624 6.125 5.374 13.12 1.1 19.62l-25.62 50.88c-11.87 23.38-9.249 49.88 6.874 70.88c19.25 24.88 52.99 36.37 86.11 29.37l63.37-13.75c11.37-2.375 23.87 0 32.37 6.375l49.24 36.37c15.12 11 33.24 16.88 51.87 16.75c12.87 0 25.5-2.75 37.24-8c25.37-11.62 41.74-33.75 43.74-59.38l4.249-55.25c.4999-7.375 5.999-14.38 14.62-18.75l56.24-28.38c27.25-13.75 42.89-39.65 40.89-67.52C509.7 213.1 489.7 189.8 459.6 179.6zM449.3 267.4l-56.24 28.38c-23.75 12-38.99 33.62-40.87 58l-4.249 55.12c-.8748 11.37-11.37 17.37-15.75 19.37c-10.25 4.75-26.1 6.5-40.74-3.5l-49.12-36.5c-14.75-10.87-33.24-16.62-51.99-16.62c-6.374 0-12.75 .625-18.1 2l-63.37 13.62c-16.1 3.75-31.5-3.25-37.99-11.75c-4.874-6.375-5.624-13-2.125-19.88l25.75-50.87c11.37-22.5 8.999-49.38-6.374-70L52.28 187.9C47.28 181.4 46.78 174.5 50.53 167.8c4.374-8 16.37-16.88 34.12-15.5l65.11 5c25.25 2 51.12-7.125 68.11-24.37l41.74-42.63c8.874-9 23.87-12.5 37.87-8.75c11.12 2.875 19.25 9.75 21.5 18.38l14.5 54c6.249 23.37 24.1 42.25 50.12 50.75l60.74 20.5c11.62 3.875 18.87 11.75 19.62 21C464.6 254.6 459.2 262.4 449.3 267.4zM159.1 192c-17.62 0-31.1 14.37-31.1 31.1S142.4 256 159.1 256s31.1-14.37 31.1-31.1S177.6 192 159.1 192zM287.1 288c-17.62 0-31.1 14.37-31.1 31.1s14.38 31.1 31.1 31.1s31.1-14.37 31.1-31.1S305.6 288 287.1 288zM303.1 192c-8.874 0-15.1 7.124-15.1 15.1s7.126 15.1 15.1 15.1s15.1-7.124 15.1-15.1S312.9 192 303.1 192z"/>
</>],
['solid',<>
	<path d="M472.2 195.9l-66.1-22.1c-19.25-6.624-33.5-20.87-38.13-38.24l-16-60.49c-11.62-43.74-76.63-57.11-110-22.62L194.1 99.3c-13.25 13.75-33.5 20.87-54.25 19.25L68.86 112.9c-52-3.999-86.88 44.99-59 82.86l38.63 52.49c11 14.1 12.75 33.74 4.625 50.12l-28.5 56.99c-20.62 41.24 22.88 84.86 73.5 73.86l69.1-15.25c20.12-4.499 41.38 .0001 57 11.62l54.38 40.87c39.38 29.62 101 7.623 104.5-37.24l4.625-61.86c1.375-17.75 12.88-33.87 30.62-42.99l61.1-31.62C526.1 269.8 520.9 212.5 472.2 195.9zM159.1 256c-17.62 0-31.1-14.37-31.1-31.1s14.37-31.1 31.1-31.1s31.1 14.37 31.1 31.1S177.6 256 159.1 256zM287.1 351.1c-17.62 0-31.1-14.37-31.1-31.1c0-17.62 14.37-31.1 31.1-31.1s31.1 14.37 31.1 31.1C319.1 337.6 305.6 351.1 287.1 351.1zM303.1 224c-8.875 0-15.1-7.125-15.1-15.1c0-8.873 7.125-15.1 15.1-15.1s15.1 7.125 15.1 15.1C319.1 216.9 312.9 224 303.1 224z"/>
</>],
['thin',<>
	<path d="M472.2 195.9l-66.1-22.1c-19.25-6.623-33.5-20.87-38.13-38.24l-16-60.49C343.1 47.4 316.9 32 289.2 32c-17.5 0-35.2 6.178-48.14 19.55L194.1 99.3C182.1 111.8 165.2 118.8 146.6 118.8c-1.936 0-3.879-.0756-5.83-.2279c0 0-75.87-5.854-77.82-5.854c-48.65 0-79.85 46.69-53.05 83.09l38.63 52.49c11 14.1 12.75 33.74 4.625 50.12l-28.5 56.99c-18.43 36.84 14.33 75.59 57.62 75.59c5.168 0 10.48-.5525 15.88-1.724l69.1-15.25c5.17-1.156 10.42-1.718 15.62-1.718c15.05 0 29.77 4.703 41.38 13.34l54.38 40.87C291.9 475.8 306.4 480 320.7 480c31.14 0 60.86-20.01 63.25-50.77l4.625-61.86c1.375-17.75 12.88-33.87 30.62-42.99l61.1-31.62C526.1 269.8 520.9 212.5 472.2 195.9zM473.1 278.5l-62.05 31.64c-22.78 11.71-37.45 32.64-39.27 56.03l-4.621 61.81C366.3 450.5 342.6 464 320.7 464c-11.72 0-22.66-3.564-31.63-10.31l-54.44-40.91c-14.31-10.64-32.4-16.5-50.93-16.5c-6.438 0-12.87 .709-19.02 2.086l-69.99 15.24c-4.152 .9023-8.354 1.359-12.48 1.359c-17.4 0-33.86-8.445-41.94-21.52c-4.242-6.865-7.926-17.8-1.369-30.91l28.52-57.03c10.83-21.82 8.568-46.76-6.07-66.71L22.75 186.3C12.33 172.2 16.26 159.2 19.53 152.7C26.92 138.1 43.94 128.7 62.91 128.7c1.553 0 3.127 .0605 4.701 .1816c0 0 76.6 5.9 78.95 5.9c23.17 0 45.01-8.883 59.93-24.36l46.12-47.73C261.8 53.21 274.8 48 289.2 48c18.47 0 40.87 9.477 46.39 30.27l16.01 60.51c5.984 22.48 24.07 40.89 48.39 49.26l67.02 23c16.1 5.809 27.79 18.15 28.86 33.01C496.9 258.1 488.7 270.9 473.1 278.5zM159.1 184.1c-22.06 0-40 17.94-40 40c0 22.06 17.94 40 40 40s40-17.94 40-40C199.1 202 182 184.1 159.1 184.1zM159.1 248c-13.23 0-24-10.78-24-24s10.77-24 24-24s24 10.78 24 24S173.2 248 159.1 248zM287.1 280.1c-22.06 0-40 17.94-40 40c0 22.06 17.94 40 40 40s40-17.94 40-40C327.1 298 310 280.1 287.1 280.1zM287.1 344c-13.23 0-24-10.78-24-24s10.77-24 24-24s24 10.78 24 24S301.2 344 287.1 344zM303.1 224c8.875 0 15.1-7.124 15.1-15.1s-7.125-15.1-15.1-15.1s-15.1 7.124-15.1 15.1S295.1 224 303.1 224z"/>
</>],

]);

const Disease: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Disease.displayName = "Disease";

export default Disease;
