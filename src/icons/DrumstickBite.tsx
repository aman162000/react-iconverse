
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M160.1 191.1c0-88.9 72.9-191.1 182.9-191.1C432.3-.0002 512 71 512 168.9c0 1.677-.0284 3.488-.0768 5.164c-16.96-9.149-35.49-13.76-53.96-13.76c-82.61 0-105.5 74.19-105.5 105.4c0 27.03 9.918 54.42 29.63 76.25c-19.47 6.626-40.06 9.997-60.62 9.997l-97.51 .0253c-35.35 0-64-28.65-64-64L160.1 191.1z"/><path className="fa-secondary" d="M193.7 392.5C187.6 398.6 184.8 406.5 184.8 414.6c0 13.71 7.244 18.41 7.244 37.03C192.1 484.1 164.1 512 131.7 512c-22.6 0-59.54-16.96-59.54-59.06c0-4.937 .5829-9.901 1.695-14.75c-4.853 1.112-9.78 1.681-14.72 1.681c-42.06 0-59.13-36.6-59.13-59.5c0-42.44 37.04-60.34 60.39-60.34c18.72 0 23.12 7.219 36.96 7.219c8.184 0 16.05-2.838 22.14-8.914l40.57-40.47l-.0644 10.13c0 35.35 28.65 64 64 64l10.33-.0215L193.7 392.5z"/>
</>],
['light',<>
	<path d="M471.2 57.62C423.6 3.25 362.3 0 344.3 0C222.9 0 160 114.7 160 190.5v69.37L116.6 303.3c-2.022 2.022-5.247 3.625-9.438 3.625c-8.165 0-14.46-6.756-34.55-6.756C32.58 300.1 0 332.6 0 372.6c0 21.62 15.62 69.12 67.75 71.74C69.75 483.8 101.1 512 139.4 512c42.06 0 72.61-34.34 72.61-72.45c0-20.04-6.807-25.98-6.807-34.83c0-3.119 .8494-6.551 3.695-9.337l43.37-43.37h70.13c17 0 34-2.25 50.38-6.874c5.335-1.368 11.82-6.483 11.82-15.35c0-2.897-.7654-5.8-2.322-8.394C373 306.6 368.1 289.5 368.1 272c0-52.99 43-95.87 96-95.99c16.61 0 26.61 5.189 31.84 5.189C503.5 181.2 512 175.5 512 165.2C512 124.7 497.7 87.5 471.2 57.62zM186.2 372.8c-8.551 8.469-13.02 19.86-13.02 31.98c0 17.23 7.499 22.03 7.499 37.15c0 23.57-21.85 37.59-42.88 37.59c-18.78 0-36.91-11.18-38.23-36.73l-1.375-28.87l-29-1.5c-24.67-1.221-36.93-20.39-36.93-39.69c0-20.31 13.27-40.56 41.03-40.56c4.838 0 9.658 .9968 14.14 2.885c6.376 2.559 13.08 3.877 19.69 3.877c11.79 0 23.3-4.191 32.19-13l26-25.1c8.125 21.62 25.25 38.75 47 46.87L186.2 372.8zM464.1 144c-70.63 .125-127.9 57.37-128 127.1c0 15.87 3.125 31.62 9 46.37c-7.5 1.125-15.13 1.625-22.75 1.625l-82.11 .0006c-26.52 0-48.02-21.45-48.27-47.1V190.5C192 145.3 208.4 108.9 245 72.42c25.89-25.89 60.95-40.37 97.53-40.37l.4713 .0008c14.79 0 65.2 2.077 104.4 46.87C464 97.42 474.8 120.4 478.4 145C473.8 144.4 468.9 144 464.1 144z"/>
</>],
['regular',<>
	<path d="M471.2 57.62c-48.3-54.88-109.9-57.62-128.2-57.62c-45.18 0-88.83 17.86-121 49.71C195.4 76.1 160.3 119.2 160 188.9l.0603 88.93L119.5 318.3c-6.104 6.103-13.98 8.914-22.14 8.914c-13.75 0-18.21-7.219-36.96-7.219c-33.29 0-60.39 26.97-60.39 60.34c0 22.31 16.74 59.5 59.13 59.5c4.925 0 9.876-.5709 14.72-1.681c-1.12 4.851-1.695 9.806-1.695 14.75c0 14.94 5.265 29.8 16.82 41.26C100.6 505.9 116.1 512 131.7 512c32.95 0 60.37-26.61 60.37-60.33c0-19.32-7.244-22.92-7.244-37.03c0-8.163 2.817-16.07 8.921-22.17l40.59-40.49l88.65-.0636c17.13 0 34.25-2.375 50.76-7c7.906-2.081 17.72-9.92 17.72-23.04c0-14.05-15.03-22.75-15.03-56.05c0-31.12 22.64-81.6 81.04-81.6c17.38 0 23.13 4.202 30.54 4.202c17.55 0 23.1-15.73 23.1-23.85C511.1 117.4 492.1 81.09 471.2 57.62zM457 136.3c-34.1 0-66.8 13.42-91.04 37.54c-24.69 24.68-37.5 57.93-37.5 91.9c0 9.712 1.047 19.48 3.161 29.13l-7.018 9.068H246.1c-24.66 0-39.03-14.4-39.03-32V189.7c0-40.99 14.25-72.61 47.76-105.1c25.52-25.35 55.82-35.86 85.11-35.86c36.99 0 72.36 16.77 94.41 41.61c12 13.37 20.5 29.5 25 46.87C459.2 136.3 458.1 136.3 457 136.3z"/>
</>],
['solid',<>
	<path d="M512 168.9c0 1.766-.0229 3.398-.0768 5.164c-16.91-9.132-35.51-13.76-53.96-13.76c-82.65 0-105.5 74.17-105.5 105.4c0 27.04 9.923 54.43 29.63 76.25c-19.52 6.629-39.99 9.997-60.62 9.997l-87.18 .0038l-40.59 40.49c-6.104 6.103-8.921 14.01-8.921 22.17c0 13.98 7.244 17.1 7.244 37.03C192.1 485.4 164.6 512 131.7 512c-15.63 0-31.11-6.055-42.72-17.8c-11.55-11.46-16.82-26.31-16.82-41.26c0-4.948 .575-9.903 1.695-14.75c-4.842 1.11-9.793 1.681-14.72 1.681c-42.15 0-59.13-36.64-59.13-59.5c0-33.43 27.15-60.34 60.39-60.34c18.97 0 22.97 7.219 36.96 7.219c8.159 0 16.04-2.811 22.14-8.914l40.57-40.47L160.1 191.1c0-63.1 27.79-107 63.17-142.4c33.13-33.06 76.39-49.59 119.7-49.59s86.79 16.53 119.9 49.59C495.9 82.5 512 125.7 512 168.9z"/>
</>],
['thin',<>
	<path d="M462.9 49.59c-33.08-33.06-76.51-49.59-119.9-49.59c-43.35 0-86.59 16.53-119.7 49.59C187.9 84.96 160.1 127.1 160.1 191.1L160.1 277.9L119.5 318.3c-6.105 6.102-13.98 8.914-22.14 8.914c-13.75 0-18.21-7.219-36.96-7.219c-.002 0 .002 0 0 0c-33.29 0-60.39 26.96-60.39 60.34c0 22.45 16.82 59.5 59.13 59.5c4.928 0 9.874-.5715 14.72-1.681c-1.12 4.85-1.695 9.806-1.695 14.75c0 14.94 5.261 29.8 16.82 41.26C100.6 505.9 116.1 512 131.7 512c33.02 0 60.37-26.67 60.37-60.33c0-19.32-7.244-22.92-7.244-37.03c0-8.163 2.815-16.07 8.921-22.17l40.59-40.49l87.18-.0038c16.53 0 33.03-2.181 48.99-6.452c3.75-1.003 6.007-4.318 6.007-7.782c0-7.823-24.01-26.7-24.01-72.01c0-30.08 22.57-105.4 105.5-105.4c27.3 0 41.64 9.074 46.04 9.074c4.248 0 8.004-3.421 8.004-7.996C512 157.1 511.8 98.33 462.9 49.59zM458.1 144.3c-75.6 0-121.5 61.9-121.5 121.5c0 22.96 6.268 46.15 18.83 66.81c-11.24 2.223-22.88 3.344-35.03 3.344l-112.5 .0438c-2.976 .0012-7.879 2.191-7.879 8.119c0 4.347 3.522 7.874 7.872 7.879L211.7 352l-29.24 29.14C173.5 390.1 168.8 402 168.8 414.6c0 17.56 7.25 21.18 7.25 36.91c0 24.8-19.96 44.48-44.35 44.48c-11.89 0-23.02-4.635-31.46-13.17c-7.934-7.866-12.12-18.34-12.12-29.76c0-7.931 1.726-11.05 1.726-14.87c0-9.926-8.293-16-16.01-16c-3.857 0-6.653 1.68-14.71 1.68c-31.09 0-43.07-26.89-43.07-43.55c0-35.73 33.16-44.29 44.35-44.29c.002 0-.002 0 0 0c15.66 0 19.14 7.219 36.95 7.219c12.79 0 24.67-4.832 33.44-13.59l29.25-29.14v3.601C160.1 308.5 163.6 312 167.9 312c4.35 0 8.128-3.525 8.131-7.875l.0912-112.2c0-50.22 18.03-90.64 58.46-131C263.6 31.95 302.2 16 343.2 16c40.96 0 79.47 15.95 108.5 44.93c24.34 24.23 39.32 55.17 43.39 88.86C483 146.2 470.6 144.3 458.1 144.3z"/>
</>],

]);

const DrumstickBite: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

DrumstickBite.displayName = "DrumstickBite";

export default DrumstickBite;
