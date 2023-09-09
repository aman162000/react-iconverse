
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M330.4 198.3L247.4 283.9c-5.387 5.504-13.95 5.504-19.34 0L145.1 198.3c-24.11-25.02-22.64-66.17 4.285-89.19c23.5-20.02 58.39-16.39 79.81 5.754l8.445 8.754L246 114.9c21.55-22.14 56.56-25.77 79.93-5.754C353 132.1 354.5 173.3 330.4 198.3z"/><path className="fa-secondary" d="M509.2 275c-21-47.13-48.5-151.8-73.12-186.8C397.1 32.88 333.7 0 266.1 0L192 0C86 0 0 86 0 192c0 54.5 23.25 106.5 64 142.9L64 512h256l-.0052-64h63.99c35.38 0 63.1-28.62 63.1-63.1V320h31.1c10.88 0 20.89-5.5 26.77-14.62C512.8 296.4 513.6 284.9 509.2 275zM330.4 198.3L247.4 283.9c-5.387 5.504-13.95 5.504-19.34 0L145.1 198.3c-24.11-25.02-22.64-66.17 4.285-89.19c23.5-20.02 58.39-16.39 79.81 5.754l8.445 8.754L246 114.9c21.55-22.14 56.56-25.77 79.93-5.754C353 132.1 354.5 173.3 330.4 198.3z"/>
</>],
['light',<>
	<path d="M509.2 275c-21-47.13-48.5-151.8-73.12-186.8C397.6 33.63 334.5 0 266.1 0L200.1 0c-104.5 0-195.9 80.13-199.9 184.5C-2.111 244.4 23.13 298.1 64 334.9L63.1 496c0 8.844 7.156 16 16 16c8.842 0 15.1-7.156 15.1-16l.0098-175.5L85.38 311c-35.62-32-55.12-77.63-53.24-125.3C35.39 101 110.6 32 199.1 32h66.12c57.12 0 110.9 27.88 143.9 74.63c12.5 17.88 28.1 66.75 42.37 106.1C462.1 241.5 471.3 268.5 479.1 288h-47.1c-8.837 0-16 7.163-16 16V384c0 17.6-14.4 32-32 32h-79.99c-8.836 0-15.1 7.119-16 15.95L287.1 496c0 8.844 7.156 16 15.1 16c8.844 0 16-7.156 16-16l.0203-48h63.99c35.34 0 63.1-28.65 63.1-63.1V320h31.1C503.1 320 518.6 296.1 509.2 275zM330.1 109.2c-13.88-11.62-47.63-28.5-90.13 14.5c-42.63-43-76.38-26.12-90.25-14.5c-27.5 23-28.88 64.13-4.25 89l84.5 85.63c5.5 5.5 14.25 5.5 19.75 0l84.75-85.63C359.1 173.4 357.6 132.2 330.1 109.2zM311.9 175.7l-72 72.63L168.1 175.7c-10.38-10.38-12.38-30 2-42c13.75-11.5 31.25-3.375 38.5 3.75l31.38 31.75l31.38-31.75c7.125-7.25 24.62-15.25 38.38-3.75C324.1 145.7 322.1 165.4 311.9 175.7z"/>
</>],
['regular',<>
	<path d="M509.2 275c-21-47.13-48.5-151.8-73.12-186.8C397.6 33.63 334.5 0 266.1 0L200.1 0c-104.5 0-195.9 80.13-199.9 184.5C-2.111 244.4 23.13 298.1 64 334.9L64.01 488c0 13.26 10.75 24 24 24c13.25 0 23.1-10.74 23.1-23.1V313.4l-15.1-14.25C49.13 257 33.01 187.4 63.88 126.6C89.26 76.75 143.1 48 198.1 48h67.12c51.1 0 100.9 25.38 130.7 67.88c11.25 15.88 27.1 65.63 40.37 102C443.7 237.3 450.1 255.8 456.2 272h-56.25V384c0 8.836-7.164 16-16 16h-79.99v88c0 13.26 10.74 24 24 24c13.25 0 23.1-10.74 23.1-23.1V448h32.01c35.34 0 63.1-28.65 63.1-63.1V320h31.1C503.1 320 518.6 296.1 509.2 275zM315.1 122.9c-19.88-16.68-49.67-13.65-67.1 4.795L239.9 135L232.7 127.7c-18.22-18.45-47.9-21.47-67.89-4.795C141.9 142.1 140.7 176.4 161.2 197.3L231.8 268.6c4.582 4.586 11.87 4.586 16.45 0l70.6-71.3C339.3 176.4 338.1 142.1 315.1 122.9z"/>
</>],
['solid',<>
	<path d="M509.2 275c-21-47.13-48.5-151.8-73.12-186.8C397.1 32.88 333.7 0 266.1 0L192 0C86 0 0 86 0 192c0 54.5 23.25 106.5 64 142.9L64 512h256l-.0052-64h63.99c35.38 0 63.1-28.62 63.1-63.1V320h31.1c10.88 0 20.89-5.5 26.77-14.62C512.8 296.4 513.6 284.9 509.2 275zM330.4 198.3L247.4 283.9c-5.387 5.504-13.95 5.504-19.34 0L145.1 198.3c-24.11-25.02-22.64-66.17 4.285-89.19c23.5-20.02 58.39-16.39 79.81 5.754l8.445 8.754L246 114.9c21.55-22.14 56.56-25.77 79.93-5.754C353 132.1 354.5 173.3 330.4 198.3z"/>
</>],
['thin',<>
	<path d="M508.5 271.1c-7.641-17.12-16.17-41-25.22-66.25c-16.02-44.72-32.56-90.97-48.77-114C394.1 34.28 328 0 257.9 0H200.1C89.67 0 0 89.81 0 200.2c0 55.44 23.28 108.6 64 146.6V504c0 4.406 3.578 8 8 8s8-3.594 8-8v-164.3L77.35 337.3c-38.99-35.06-61.35-85-61.35-137.1C16 98.63 98.64 16 200.2 16h57.64c64.95 0 126.1 31.75 163.6 84.94c14.94 21.25 31.86 68.5 46.78 110.2c9.141 25.53 17.78 49.69 25.66 67.34c3.359 7.562 2.688 15.91-1.844 22.88c-4.516 6.938-11.86 10.94-20.13 10.94h-39.88v64c0 30.91-25.16 56.06-56.06 56.06h-72V504c0 4.406 3.578 8 8 8s8-3.594 8-8v-55.66h56c39.74 0 72.06-32.31 72.06-72.06v-48h23.88c13.58 0 26.13-6.812 33.55-18.22C512.9 298.6 514.1 284.4 508.5 271.1zM355.4 152.3C354.4 133 345.8 115.5 331.2 103c-25.92-22.12-65.83-19.44-90.88 6.281L237.6 112.1L234.9 109.3C210.1 83.66 170.2 80.88 144.1 103c-14.58 12.5-23.13 30-24.05 49.31C119.2 171.5 126.2 190.3 139.3 203.9l83.02 85.59C226.5 293.7 231.9 296 237.7 296s11.27-2.312 15.42-6.562l82.99-85.56C349.3 190.3 356.3 171.5 355.4 152.3zM241.7 278.3C239.5 280.5 235.9 280.4 233.8 278.3L150.8 192.8C140.7 182.3 135.4 167.8 136.1 153.1C136.8 138.3 143.3 124.8 154.5 115.2c8.797-7.5 19.73-11.16 30.84-11.16c13.64 0 27.55 5.562 38.02 16.38L237.6 135.2l14.19-14.69c19.16-19.69 49.45-21.97 69-5.25c11.25 9.562 17.86 23.03 18.58 37.91c.7344 14.72-4.641 29.16-14.73 39.63L241.7 278.3z"/>
</>],

]);

const HeadSideHeart: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HeadSideHeart.displayName = "HeadSideHeart";

export default HeadSideHeart;