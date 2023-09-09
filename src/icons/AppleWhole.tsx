
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M320 0v32c0 44.18-35.82 80-80 80H208v-32c0-44.18 35.82-80 80-80H320z"/><path className="fa-secondary" d="M336 128c-32 0-80.02 16.03-112 32.03c-32.01-16-79.1-32.02-111.1-32.03C32 128 .4134 210.5 .0033 288c-.5313 99.97 63.99 224 159.1 224c32 0 48-16 64-16c16 0 32 16 64 16c96 0 160.4-122.8 159.1-224C447.7 211.6 416 128 336 128z"/>
</>],
['light',<>
	<path d="M206.6 127.4c0 0 5.344 .6855 13.75 .6855c18.09 0 51.75-3.326 74-25.57c31.44-31.31 25.22-85.48 24.94-87.78c-.875-7.264-6.656-13.01-13.94-13.93c0 0-55.16-7.688-87.75 24.88c-31.44 31.31-25.22 85.48-24.94 87.78C193.6 120.7 199.3 126.5 206.6 127.4zM240.2 48.31c13.16-13.15 35.66-15.76 47.75-16.15c-.5 14.83-4 35.56-16.19 47.71c-13.16 13.15-35.66 15.76-47.75 16.15C224.5 81.2 228 60.46 240.2 48.31zM351 129.1c-4.375-.75-9.161-1.036-14.41-1.036c-36.13 0-87.12 17.58-112.6 31.95c-25.5-14.37-76.51-31.95-112.6-31.95c-5.25 0-10.12 .375-14.62 1.125c-81.13 14.37-107.4 124.5-93 205.6C17.99 415.9 64.99 512 160.4 512c12.12 0 24.12-4.625 34.5-10.37c9.002-4.998 19.13-7.498 29.13-7.498c10.12 0 20.12 2.5 29.12 7.498C263.5 507.4 275.5 512 287.6 512c95.38 0 142.4-96.11 156.6-177.2C458.6 253.7 432.4 143.5 351 129.1zM412.7 329.3c-4.426 25.17-31.24 150.8-125.1 150.8c-16.01 0-27.36-17.87-63.63-17.87c-36.33 0-47.68 17.87-63.63 17.87c-93.87 0-120.7-125.6-125.1-150.8c-6.557-36.99-3.15-78.46 9.113-110.9C53.1 195.1 70.25 166.4 102 160.8c29.9-4.979 86.47 16.02 106.3 27.18c4.877 2.75 10.3 4.125 15.71 4.125s10.84-1.375 15.71-4.125c19.05-10.73 76.64-32.22 105.8-27.23c32.2 5.688 49.37 34.44 58.1 57.56C415.9 250.7 419.3 292.2 412.7 329.3z"/>
</>],
['regular',<>
	<path d="M415.3 177.6c-18.5-26.5-44.01-43.12-73.64-48.25c-34.51-6-86.14 9.125-117.6 23.75C192.5 138.5 140.1 123.4 106.4 129.4C76.73 134.5 51.35 151.1 32.72 177.6C4.841 217.5-6.536 280.1 3.716 337.1C18.97 421.8 69.98 512 167.2 512c13.38 0 27.63-4 42.26-12c9.001-4.875 20-4.875 29 0C253.1 508 267.4 512 280.8 512c97.27 0 148.3-90.25 163.5-174.9C454.5 280.1 443.2 217.5 415.3 177.6zM397 328.6C393 351.2 368.3 464 280.8 464c-5.251 0-11.88-2.125-19.25-6.125c-11.63-6.25-24.5-9.5-37.51-9.5s-25.88 3.25-37.51 9.5C179.1 461.9 172.5 464 167.2 464c-87.51 0-112.3-112.8-116.3-135.4C42.97 284.2 51.47 234.6 72.1 205.1c11.13-16 25.38-25.5 42.38-28.5c12.63-2.125 53.88 0 109.5 30.75c55.63-30.75 97.02-32.88 109.5-30.75c17 3 31.25 12.5 42.38 28.5C396.5 234.6 405 284.2 397 328.6zM222.4 112c18.75 0 52.13-3.25 73.26-24.38c30.5-30.62 23.75-86.1 23.75-86.1S313.9 0 305.6 0c-18.75 0-52.13 3.25-73.26 24.38c-30.5 30.62-23.75 87-23.75 87S213.1 112 222.4 112z"/>
</>],
['solid',<>
	<path d="M336 128c-32 0-80.02 16.03-112 32.03c-32.01-16-79.1-32.02-111.1-32.03C32 128 .4134 210.5 .0033 288c-.5313 99.97 63.99 224 159.1 224c32 0 48-16 64-16c16 0 32 16 64 16c96 0 160.4-122.8 159.1-224C447.7 211.6 416 128 336 128zM320 32V0h-32C243.8 0 208 35.82 208 80v32h32C284.2 112 320 76.18 320 32z"/>
</>],
['thin',<>
	<path d="M444.9 249.1c-5.316-31.35-15.32-57.37-29.96-78.06c-16.67-23.35-37.91-37.27-63.89-41.94c-31.73-5.314-90.99 10.74-127 30.92c-35.85-20.12-95.08-36.33-126.1-31.01C71.06 133.7 49.77 147.7 33.1 171.1c-14.67 20.69-24.67 46.71-29.99 78.06c-12 73.91 12.08 155.9 48.97 205.2c72.71 98.14 154.4 41.25 171.9 41.25c16.51 0 99.12 57.08 171.9-41.25C433.9 403.6 456.7 321.1 444.9 249.1zM383 444.7c-65.97 89.13-132.2 34.76-159 34.76c-27.81 0-93.23 54.09-159.1-34.83c-34.76-46.41-57.1-124.6-46-192.9c7.131-42.05 28.27-97.52 80.79-106.1c16.51-2.762 66.25 1.023 124.3 33.59c57.66-32.29 107.3-36.42 124.1-33.62c52.65 9.477 73.79 64.58 80.97 106.9C440.3 320.1 417.1 398.1 383 444.7zM224 112c76.9 0 95.88-49.87 95.88-96c-.5684-8.537-7.373-15.43-15.91-15.1c-88.02 0-95.7 63.2-95.95 94.99C207.1 103.1 215 111.4 224 112zM303.4 16c1.9 .1289 7.381 79.73-78.32 80.04C223.1 95.9 215.1 16.37 303.4 16z"/>
</>],

]);

const AppleWhole: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

AppleWhole.displayName = "AppleWhole";

export default AppleWhole;
