
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M128 159.1c-17.62 0-31.1 14.38-31.1 32.01s14.38 32.01 31.1 32.01s32-14.38 32-32.01S145.6 159.1 128 159.1zM256 159.1c-17.62 0-32 14.38-32 32.01s14.38 32.01 32 32.01s32-14.38 32-32.01S273.6 159.1 256 159.1z"/><path className="fa-secondary" d="M186.1 .1032c-105.1 3.126-186.1 94.75-186.1 199.9v264c0 14.25 17.3 21.38 27.3 11.25l24.95-18.5c6.625-5.001 16-4.001 21.5 2.25l43 48.31c6.25 6.251 16.37 6.251 22.62 0l40.62-45.81c6.375-7.251 17.62-7.251 24 0l40.63 45.81c6.25 6.251 16.38 6.251 22.62 0l43-48.31c5.5-6.251 14.88-7.251 21.5-2.25l24.95 18.5c10 10.13 27.3 3.002 27.3-11.25V192C384 83.98 294.9-3.147 186.1 .1032zM128 224c-17.62 0-31.1-14.38-31.1-32.01s14.38-32.01 31.1-32.01s32 14.38 32 32.01S145.6 224 128 224zM256 224c-17.62 0-32-14.38-32-32.01s14.38-32.01 32-32.01c17.62 0 32 14.38 32 32.01S273.6 224 256 224z"/>
</>],
['light',<>
	<path d="M128 167.1C114.8 167.1 104 178.8 104 192s10.78 24 23.1 24c13.22 0 24-10.78 24-24S141.2 167.1 128 167.1zM256 167.1c-13.22 0-24 10.78-24 24s10.78 24 24 24s24-10.78 24-24S269.2 167.1 256 167.1zM192 0C190 0 188.1-.0218 186.1 .1032c-105.1 3.125-186.1 94.77-186.1 199.9v264c0 9.625 7.856 15.99 16.11 15.99c3.875 0 7.819-1.486 11.19-4.736l24.95-18.5c2.875-2.125 6.251-3.157 9.501-3.157c4.5 0 8.874 1.782 11.1 5.407l43 48.31C119.9 510.5 123.9 512 128 512c4.125 0 8.229-1.538 11.35-4.663l40.62-45.81c3.25-3.625 7.625-5.41 12-5.41s8.75 1.785 11.1 5.41l40.63 45.81C247.8 510.5 251.9 512 255.1 512s8.146-1.538 11.27-4.663l43-48.31c5.5-6.25 14.88-7.25 21.5-2.25l24.95 18.5c3.375 3.25 7.32 4.736 11.19 4.736c8.25 0 16.11-6.362 16.11-15.99V192C384 86 298 0 192 0zM352 431.9l-1.125-.75c-8.375-6.25-18.25-9.5-28.62-9.5c-13.75 0-26.75 5.875-35.88 16.12L256 471.9l-28.12-31.62C218.8 430 205.8 424.1 192 424.1S165.3 430 156.1 440.3L128 471.9l-30.38-34.13C88.5 427.5 75.5 421.6 61.75 421.6c-10.38 0-20.25 3.25-28.62 9.5L32 431.9V200c0-90 69.5-165.4 155-167.9L192 32c88.25 0 160 71.75 160 160V431.9z"/>
</>],
['regular',<>
	<path d="M192 0C190 0 188.1-.0218 186.1 .1032c-105.1 3.125-186.1 94.77-186.1 199.9v264c0 9.625 7.856 15.99 16.11 15.99c3.875 0 7.819-1.486 11.19-4.736l24.95-18.5c2.875-2.125 6.251-3.157 9.501-3.157c4.5 0 8.874 1.782 11.1 5.407l43 48.31C119.9 510.5 123.9 512 128 512c4.125 0 8.229-1.538 11.35-4.663l40.62-45.81c3.25-3.625 7.625-5.41 12-5.41c4.375 0 8.75 1.785 11.1 5.41l40.63 45.81C247.8 510.5 251.9 512 255.1 512s8.146-1.538 11.27-4.663l43-48.31c5.5-6.25 14.88-7.25 21.5-2.25l24.95 18.5c3.375 3.25 7.32 4.736 11.19 4.736c8.25 0 16.11-6.362 16.11-15.99V192C384 86 298 0 192 0zM336 407.1c-4.5-1-9.125-1.5-13.75-1.5c-18.25 0-35.75 7.75-47.87 21.5L256 447.8l-16.12-18.13C227.8 415.9 210.2 408.1 192 408.1s-35.75 7.75-47.88 21.5L128 447.8l-18.38-20.63C97.5 413.4 80 405.6 61.75 405.6c-4.625 0-9.25 .5-13.75 1.5V200c0-81.5 62.62-149.6 139.5-151.9L192 48c79.38 0 144 64.62 144 144V407.1zM128 159.1c-17.62 0-31.1 14.38-31.1 32.01s14.38 32.01 31.1 32.01s32-14.38 32-32.01S145.6 159.1 128 159.1zM256 159.1c-17.62 0-32 14.38-32 32.01s14.38 32.01 32 32.01c17.62 0 32-14.38 32-32.01S273.6 159.1 256 159.1z"/>
</>],
['solid',<>
	<path d="M186.1 .1032c-105.1 3.126-186.1 94.75-186.1 199.9v264c0 14.25 17.3 21.38 27.3 11.25l24.95-18.5c6.625-5.001 16-4.001 21.5 2.25l43 48.31c6.25 6.251 16.37 6.251 22.62 0l40.62-45.81c6.375-7.251 17.62-7.251 24 0l40.63 45.81c6.25 6.251 16.38 6.251 22.62 0l43-48.31c5.5-6.251 14.88-7.251 21.5-2.25l24.95 18.5c10 10.13 27.3 3.002 27.3-11.25V192C384 83.98 294.9-3.147 186.1 .1032zM128 224c-17.62 0-31.1-14.38-31.1-32.01s14.38-32.01 31.1-32.01s32 14.38 32 32.01S145.6 224 128 224zM256 224c-17.62 0-32-14.38-32-32.01s14.38-32.01 32-32.01c17.62 0 32 14.38 32 32.01S273.6 224 256 224z"/>
</>],
['thin',<>
	<path d="M256 151.1c-22.05 0-40 17.95-40 40s17.95 40 40 40c22.06 0 40-17.95 40-40S278.1 151.1 256 151.1zM256 216c-13.22 0-24-10.78-24-24s10.78-24 24-24s24 10.78 24 24S269.2 216 256 216zM192 0C190 0 188.1 .0446 186.1 .1032c-105.1 3.125-186.1 94.75-186.1 199.9v264c0 9.629 7.913 15.99 16.11 15.99c3.934 0 7.95-1.451 11.19-4.736l24.95-18.5c2.836-2.141 6.176-3.157 9.501-3.157c4.441 0 8.855 1.833 11.1 5.407l43 48.31C119.9 510.5 123.9 512 128 512c4.094 0 8.229-1.538 11.35-4.663l40.62-45.81c3.188-3.625 7.594-5.41 12-5.41s8.812 1.785 11.1 5.41l40.63 45.81C247.8 510.5 251.9 512 255.1 512s8.146-1.538 11.27-4.663l43-48.31c3.146-3.574 7.559-5.41 12-5.41c3.324 0 6.664 1.019 9.5 3.16l24.95 18.5c3.244 3.285 7.261 4.736 11.19 4.736c8.193 0 16.11-6.358 16.11-15.99V192C384 85.94 298.1 0 192 0zM367.3 463.2l-25.88-19.15c-5.557-4.195-12.17-6.41-19.14-6.41c-9.186 0-17.94 3.957-23.95 10.79l-41.71 48.29l-40.58-45.71c-6.074-6.91-14.83-10.87-24.02-10.87c-9.186 0-17.94 3.961-23.96 10.82L128.7 496.7l-42.94-48.19c-6.074-6.902-14.83-10.86-24.01-10.86c-6.965 0-13.58 2.215-19.02 6.32l-25.86 19.23L16 464.1V200c0-98.62 76.53-181.1 170.6-183.9C188.4 16.03 190.2 16 192 16c97.04 0 175.1 78.95 175.1 176l.1367 272.1L367.3 463.2zM128 151.1c-22.05 0-40 17.95-40 40s17.95 40 40 40c22.06 0 40-17.95 40-40S150.1 151.1 128 151.1zM128 216C114.8 216 104 205.2 104 192s10.78-24 23.1-24c13.22 0 24 10.78 24 24S141.2 216 128 216z"/>
</>],

]);

const Ghost: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Ghost.displayName = "Ghost";

export default Ghost;
