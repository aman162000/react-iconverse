
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M446 91.59c18.56 11.49 35.27 25.9 49.15 42.96c9.192 11.14-2.652 27.22-16.18 21.83c-23.89-9.549-49.42-12.21-74.06-8.61c-14.3-7.051-29.41-12.61-45.32-15.78c-34-7-69.13-4.625-101.9 6.625c3.623-23.8 13.13-45.79 27.05-64.47C337.7 56.19 397.6 61.75 446 91.59zM227.2 437.9c13.91-18.68 23.42-40.67 27.05-64.47c-32.75 11.25-67.88 13.63-101.9 6.625c-15.91-3.166-31.02-8.727-45.32-15.78c-24.65 3.604-50.17 .9375-74.06-8.61c-13.52-5.391-25.37 10.7-16.17 21.83c13.88 17.06 30.58 31.47 49.14 42.96C114.4 450.2 174.3 455.8 227.2 437.9zM373.4 257.8c11.25 32.75 13.63 67.88 6.625 101.9c-3.164 15.91-8.727 31.02-15.78 45.32c3.604 24.65 .9395 50.17-8.61 74.06c-5.391 13.52 10.7 25.37 21.83 16.17c17.06-13.88 31.47-30.58 42.96-49.14c29.84-48.41 35.4-108.4 17.44-161.2C419.2 270.9 397.2 261.4 373.4 257.8zM138.6 254.2C127.4 221.5 124.1 186.4 131.1 152.4C135.2 136.5 140.7 121.4 147.8 107.1C144.2 82.4 146.8 56.88 156.4 32.99c5.391-13.52-10.7-25.37-21.83-16.18C117.5 30.69 103.1 47.4 91.59 65.96C61.75 114.4 56.19 174.3 74.15 227.2C92.83 241.1 114.8 250.6 138.6 254.2z"/><path className="fa-secondary" d="M506.6 274.1c-16.88-71.13-75.38-127.9-147-142.1c-34-7-69.13-4.625-101.9 6.625c7.5-49.25 39.75-91.13 85.5-110.8c13.38-5.75 10.38-25.5-4-26.88c-21.88-2.25-43.88-.625-65.13 4.375C202.1 22.24 146.2 80.74 131.1 152.4C124.1 186.4 127.4 221.5 138.6 254.2C89.37 246.7 47.49 214.5 27.87 168.7C22.12 155.4 2.368 158.4 .9925 172.7C-1.258 194.6 .3674 216.6 5.368 237.9c16.88 71.13 75.38 127.9 147 142.1c34 7 69.13 4.625 101.9-6.625c-7.5 49.25-39.75 91.13-85.5 110.8c-13.38 5.75-10.38 25.5 4 26.88c21.88 2.25 43.88 .625 65.13-4.375c71.13-16.88 127.9-75.38 142.1-147c7-34 4.625-69.13-6.625-101.9c49.25 7.5 91.13 39.75 110.8 85.5c5.75 13.38 25.5 10.38 26.88-4C513.3 317.4 511.6 295.4 506.6 274.1zM255.1 304C229.5 304 207.1 282.5 207.1 256s21.5-48 48-48S304 229.5 304 256S282.5 304 255.1 304z"/>
</>],
['light',<>
	<path d="M255.1 192C220.6 192 191.1 220.6 191.1 256s28.62 64 64 64s64-28.62 64-64S291.4 192 255.1 192zM255.1 288C238.4 288 223.1 273.6 223.1 256s14.37-32 31.1-32c17.62 0 31.1 14.38 31.1 32S273.6 288 255.1 288zM506.5 266.9c-17.25-73.12-78.37-132.1-151.9-146.8C341.4 117.4 327.9 116.1 314.2 116c-6.75 0-13.62 .3696-20.5 1.12c11.5-20.5 29.25-36.5 50.75-45.88C374.4 58.49 383.6 0 313.1 0c-15.88 0-31.75 1.87-47.13 5.495c-73.13 17.38-132.1 78.38-146.8 151.9c-4.125 20.12-5 40.62-2.875 60.87c-20.5-11.37-36.62-29.25-46-50.75c-14.75-34.75-66.5-27.12-70.25 10.75c-2.25 22.38-.625 45 4.625 66.88c17.25 73.12 78.25 132.1 151.8 146.9C170.6 394.6 184.1 396 197.6 396c6.875 0 13.75-.3804 20.62-1.13c-11.5 20.5-29.25 36.5-50.75 45.88c-29.88 12.75-39 71.25 30.5 71.25c15.88 0 31.62-1.875 47.12-5.5c73.13-17.38 132.1-78.38 146.8-151.9c4.125-20.12 5-40.63 2.875-60.87c20.5 11.37 36.62 29.25 46 50.75c14.87 35 66.5 27 70.25-10.62C513.2 311.4 511.7 288.7 506.5 266.9zM479.1 330.6c-.3749 4.375-6.875 6.125-9 1.375c-12.12-28.12-33.12-51.38-59.75-66.25c-22.62-12.63-50.13 5.5-47.38 31.25c1.75 17.12 1 34.5-2.5 51.38c-12.25 61.38-61.63 112.5-122.8 126.9c-18.38 4.5-37.5 5.75-56.38 3.875c-2.125-.125-3.875-1.75-4.25-3.875C176.9 473 177.1 471 179.1 470.1c28-12.12 51.25-33 66.12-59.5c12-21.38-3.375-47.75-27.88-47.75c-4.875 0-25 3.625-54.63-2.375C102.1 348.2 51.11 299 36.74 237.8c-4.5-18.5-5.75-37.5-3.875-56.38C33.24 177 39.74 175.2 41.86 180c12.12 28.12 33.12 51.38 59.75 66.25c22.5 12.63 50.13-5.375 47.38-31.25c-1.75-17.12-1-34.5 2.5-51.25c15.62-78.63 91-140 179.1-130.9c2.125 .125 3.875 1.75 4.25 4c.25 2.125-.875 4.125-2.875 5c-28 12.12-51.25 33-66.13 59.5c-12 21.38 3.375 47.75 27.88 47.75c4.75 0 24.75-3.625 54.62 2.375C428.6 167.5 487.1 243.9 479.1 330.6z"/>
</>],
['regular',<>
	<path d="M506.5 266.9c-17.25-73.12-78.37-132.1-151.9-146.8c-20-4.125-40.63-5.125-60.87-3c11.5-20.5 29.25-36.5 50.75-45.88c15.62-6.375 24.62-22.63 21.88-39.26c-2.375-16.62-15.88-29.5-32.62-31c-22.38-2.25-45-.6196-66.88 4.505c-73.13 17.38-132.1 78.38-146.8 151.9c-4.125 20.12-5 40.62-2.875 60.87c-20.5-11.37-36.62-29.25-46-50.75c-6.5-15.5-22.75-24.51-39.25-21.88c-16.62 2.375-29.5 15.88-31 32.63c-2.25 22.38-.625 45 4.625 66.88c17.25 73.12 78.25 132.1 151.8 146.9c20 4 40.5 5 60.87 2.875c-11.5 20.5-29.25 36.5-50.75 45.88c-15.5 6.5-24.38 22.74-21.88 39.24c2.5 16.62 15.88 29.38 32.63 31c6.5 .625 13.13 1.005 19.75 1.005c15.88 0 31.62-1.875 47.12-5.5c73.13-17.38 132.1-78.38 146.8-151.9c4.125-20.12 5-40.63 2.875-60.87c20.5 11.37 36.62 29.25 46 50.75c6.5 15.38 22.75 24.37 39.25 21.87c16.62-2.5 29.25-15.87 31-32.49C513.2 311.4 511.7 288.7 506.5 266.9zM365.1 233.9c-8.375-1.25-16.62 2-22 8.375c-5.375 6.5-7 15.25-4.25 23.13c8.75 25.75 10.62 53.25 5.125 79.75c-11.38 56.75-58.25 106-121 116.6c29.25-24.25 48.5-58.25 54.25-95.75c1.25-8.25-2-16.62-8.375-22c-6.5-5.375-15.25-7-23.13-4.25c-25.75 8.75-53.25 10.5-79.75 5.125c-57-11.38-106.3-58.75-116.6-120.9c24.25 29.12 58.25 48.38 95.75 54.13c8.375 1.25 16.62-2 22-8.375c5.375-6.5 7-15.25 4.25-23.13c-8.75-25.62-10.62-53.25-5.125-79.75c11.38-56.75 58.25-106 121-116.6c-29.25 24.25-48.5 58.25-54.25 95.75c-1.25 8.375 2 16.62 8.375 22c6.5 5.375 15.25 7 23.13 4.25c25.62-8.75 53.25-10.62 79.75-5.125c56.88 11.38 106.2 58.63 116.6 121C437.5 258.9 403.5 239.6 365.1 233.9zM255.1 215.1c-22.12 0-40 17.88-40 40c0 22.13 17.88 40 40 40s40-17.88 40-40C295.1 233.9 278.1 215.1 255.1 215.1z"/>
</>],
['solid',<>
	<path d="M506.6 274.1c-16.88-71.13-75.38-127.9-147-142.1c-34-7-69.13-4.625-101.9 6.625c7.5-49.25 39.75-91.13 85.5-110.8c13.38-5.75 10.38-25.5-4-26.88c-21.88-2.25-43.88-.625-65.13 4.375C202.1 22.24 146.2 80.74 131.1 152.4C124.1 186.4 127.4 221.5 138.6 254.2C89.37 246.7 47.49 214.5 27.87 168.7C22.12 155.4 2.368 158.4 .9925 172.7C-1.258 194.6 .3674 216.6 5.368 237.9c16.88 71.13 75.38 127.9 147 142.1c34 7 69.13 4.625 101.9-6.625c-7.5 49.25-39.75 91.13-85.5 110.8c-13.38 5.75-10.38 25.5 4 26.88c21.88 2.25 43.88 .625 65.13-4.375c71.13-16.88 127.9-75.38 142.1-147c7-34 4.625-69.13-6.625-101.9c49.25 7.5 91.13 39.75 110.8 85.5c5.75 13.38 25.5 10.38 26.88-4C513.3 317.4 511.6 295.4 506.6 274.1zM255.1 304C229.5 304 207.1 282.5 207.1 256s21.5-48 48-48S304 229.5 304 256S282.5 304 255.1 304z"/>
</>],
['thin',<>
	<path d="M506.5 269.3C489.3 196.9 428.1 138.5 356.3 124.1c-12.88-2.652-26.19-4.008-39.46-4.008c-12.39 0-24.7 1.16-36.83 3.465c11.33-29.75 34.11-53.81 64.12-66.68c12.49-5.367 19.47-17.98 17.37-31.4c-2.086-13.33-12.5-23.14-25.9-24.43C329.1 .332 322.4 0 315.8 0c-15.46 0-31.11 1.836-46.5 5.457c-72.44 17.18-130.8 77.57-145.3 150.3c-5.172 25.11-5.318 51.06-.5332 76.29C93.77 220.7 69.71 197.9 56.84 167.9C52.13 156.1 41.88 150.2 30.06 150.2c-15.13 0-27.61 11.29-29.05 26.26C-1.233 198.2 .2611 220.6 5.466 242.7C22.65 315.1 83.04 373.5 155.7 387.9c12.88 2.652 26.19 4.008 39.46 4.008c12.39 0 24.7-1.16 36.82-3.465c-11.33 29.75-34.11 53.81-64.12 66.68c-12.49 5.371-19.47 17.99-17.37 31.4c2.088 13.32 12.5 23.14 25.9 24.42C182.9 511.7 189.6 512 196.2 512c15.47 0 31.11-1.836 46.5-5.457c72.44-17.19 130.8-77.57 145.3-150.3c5.172-25.11 5.318-51.06 .5332-76.29c29.76 11.32 53.81 34.11 66.69 64.13c4.703 10.94 14.96 17.73 26.78 17.73c15.13 0 27.62-11.29 29.05-26.26C513.2 313.8 511.7 291.4 506.5 269.3zM495.1 334.1c-.7246 7.578-6.898 11.79-13.12 11.79c-4.844 0-9.716-2.547-12.08-8.035c-18.4-42.89-57.66-73.13-103.8-80.16c10.55 30.7 12.77 63.64 6.211 95.51c-13.36 67.15-66.56 121.1-133.2 137.8C224.1 494.3 210.6 496 196.2 496c-6.068 0-12.15-.3047-18.22-.9297c-13.48-1.289-16.29-19.8-3.75-25.2c42.89-18.4 73.12-57.66 80.16-103.8c-19.12 6.57-39.11 9.91-59.17 9.91c-12.14 0-24.32-1.227-36.34-3.699c-67.15-13.36-121.1-66.57-137.8-133.2c-4.689-19.92-6.213-40.55-4.101-61.06C17.66 170.4 23.84 166.2 30.06 166.2c4.842 0 9.715 2.547 12.07 8.035c18.4 42.89 57.66 73.13 103.8 80.16C135.4 223.7 133.2 190.7 139.7 158.8c13.36-67.15 66.56-121.1 133.2-137.8C287 17.73 301.4 16 315.8 16c6.068 0 12.15 .3047 18.22 .9297c13.48 1.289 16.29 19.8 3.75 25.2c-42.89 18.4-73.12 57.66-80.16 103.8c19.13-6.57 39.11-9.91 59.17-9.91c12.14 0 24.32 1.227 36.34 3.699c67.15 13.36 121.1 66.57 137.8 133.2C495.6 292.9 497.2 313.5 495.1 334.1zM255.1 207.1C229.5 207.1 207.1 229.5 207.1 256s21.53 48 48 48S304 282.5 304 256S282.5 207.1 255.1 207.1zM255.1 288C238.3 288 223.1 273.7 223.1 256s14.33-32 31.1-32c17.67 0 31.1 14.33 31.1 32S273.7 288 255.1 288z"/>
</>],

]);

const Galaxy: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Galaxy.displayName = "Galaxy";

export default Galaxy;
