
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M445.5 211.4L367.1 19.38C363.2 7.625 352.4 0 340.4 0H120.6C109.2 0 98.72 6.75 93.6 17.75l-90.38 192C-6.782 230.1 7.718 256 30.22 256h387.6C439.5 256 454.1 232.5 445.5 211.4z"/><path className="fa-secondary" d="M351.1 428.8c0 28.5-11.5 54.25-30.5 74.37C315.7 509.1 307.6 512 299.2 512h-150.5c-8.375 0-16.5-2.875-22.25-8.875c-19-20-30.5-45.87-30.5-74.37c0-42 26.78-103.5 64.03-140.8V256h128v32C325.3 325.3 351.1 386.8 351.1 428.8z"/>
</>],
['light',<>
	<path d="M445.5 211.4L367.1 19.38C363.2 7.625 352.4 0 340.4 0H120.6C109.2 0 98.72 6.75 93.6 17.75l-90.38 192C-6.781 231 7.719 256 30.22 256H208v32H198.1c-26.98 0-52.05 13.5-67.08 36.16C109.4 356.7 96 395.2 96 424.7c0 27.5 11.06 54.06 31.11 74.75C134.8 507.4 146.1 512 158.2 512h131.7c12.08 0 23.44-4.625 31.17-12.69C341 478.5 352 451.1 352 424.7c0-29.47-13.39-67.97-34.95-100.5C302 301.5 276.9 288 249.9 288H240V256h177.9C439.5 256 454.1 232.5 445.5 211.4zM249.9 320c16.23 0 31.36 8.188 40.44 21.88C308.4 369 320 401.5 320 424.7c0 19.28-7.625 37.44-22.08 52.5C296.2 478.9 293.2 480 289.8 480H158.2c-3.328 0-6.328-1.031-8.047-2.812C135.6 462.3 128 444.1 128 424.7c0-23.16 11.66-55.66 29.69-82.81C166.8 328.2 181.9 320 198.1 320H249.9zM31.81 224C31.98 223.9 32.11 223.7 32.17 223.4L122.3 32h216.3l76.92 192H31.81z"/>
</>],
['regular',<>
	<path d="M445.5 237.8l-77.5-216C363.2 8.625 352.4 0 340.4 0H120.6C109.2 0 98.72 7.75 93.6 19.88l-90.38 216C-6.782 259.8 7.719 288 30.22 288h89.13c-24.63 35.13-39.38 78.5-39.38 113.6c0 32.62 12.75 64.13 36 88.62C128.1 504.1 147.7 512 167.5 512h113c19.75 0 38.5-7.875 51.5-21.75c23.25-24.5 36-56 36-88.62c0-35.13-14.75-78.5-39.38-113.6h89.13C439.5 288 454.1 261.6 445.5 237.8zM319.1 401.6c0 21.25-8.75 40.62-22.88 55.62C292.7 461.8 286.7 464 280.5 464H167.5c-6.25 0-12.38-2.25-16.63-6.75c-14.13-15-22.88-34.37-22.88-55.62c0-34.75 22.75-87.38 55.63-113.6h80.63C297.2 314.2 319.1 366.9 319.1 401.6zM53.47 240l80.38-192h192.6l68.88 192H53.47z"/>
</>],
['solid',<>
	<path d="M445.5 211.4L367.1 19.38C363.2 7.625 352.4 0 340.4 0H120.6C109.2 0 98.72 6.75 93.6 17.75l-90.38 192C-6.782 230.1 7.718 256 30.22 256h387.6C439.5 256 454.1 232.5 445.5 211.4zM160 288c-37.25 37.25-64.03 98.75-64.03 140.8c0 28.5 11.5 54.37 30.5 74.37C132.2 509.1 140.3 512 148.7 512h150.5c8.375 0 16.5-2.875 22.25-8.875c19-20.12 30.5-45.88 30.5-74.37c0-42-26.72-103.5-63.97-140.8H160z"/>
</>],
['thin',<>
	<path d="M445.5 211.4L367.1 19.38C363.2 7.625 352.4 0 340.4 0H120.6C109.2 0 98.72 6.75 93.6 17.75l-90.38 192C-6.781 231 7.719 256 30.22 256h387.6C439.5 256 454.1 232.5 445.5 211.4zM429.1 233.7C427.5 236 423.9 240 417.9 240H30.22c-6.354 0-9.951-4.176-11.53-6.664C15.49 228.3 15.12 222 17.7 216.6l90.41-192.1C110.5 19.26 115.3 16 120.6 16h219.8c5.469 0 10.49 3.68 12.79 9.363l77.53 192.1C432.9 222.8 432.3 228.9 429.1 233.7zM279.9 290.4c-3.094 3.125-3.094 8.188 .0625 11.31c35.06 34.72 56 90.81 56 125c0 23.47-9.125 45.44-26.34 63.5C305.1 493.9 300.6 496 294.5 496H153.4c-6.125 0-11.5-2.062-15.06-5.781c-17-17.72-26.38-40.28-26.38-63.53c0-34.19 20.94-90.28 55.97-125C171.1 298.6 171.1 293.5 168 290.4C164.9 287.2 159.8 287.3 156.7 290.3c-34.63 34.31-60.72 92.94-60.72 136.4c0 27.41 10.94 53.88 30.81 74.59C133.4 508.2 142.9 512 153.4 512h141.1c10.5 0 19.97-3.781 26.66-10.72c20.16-21.16 30.81-46.94 30.81-74.59c0-43.47-26.12-102.1-60.75-136.4C288.1 287.3 283 287.2 279.9 290.4z"/>
</>],

]);

const Lamp: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Lamp.displayName = "Lamp";

export default Lamp;