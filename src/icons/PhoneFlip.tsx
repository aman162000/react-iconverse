
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M180.9 334.3L163.9 313.7c-8.782-10.75-23.67-14.42-36.45-8.98l-108.5 46.52c-13.91 6.094-21.52 21.14-18.12 35.82l4.082 17.69L180.9 334.3zM487.8 24.05l-40.66-9.383l-79.62 193.3c-34 69.25-90.27 125.5-159.5 159.5l-193.3 79.65l9.382 40.66c3.251 14.25 15.79 24.22 30.45 24.22c252.3 0 457.5-205.2 457.5-457.5C512 39.84 502 27.32 487.8 24.05zM334.4 180.8l70.36-175.9l-17.7-4.083c-14.59-3.373-29.79 4.207-35.79 18.11L304.7 127.4c-5.53 12.78-1.806 27.78 8.974 36.47L334.4 180.8z"/><path className="fa-secondary" d="M208 367.5l-27.12-33.16l-175.1 70.4l9.786 42.41L208 367.5zM447.1 14.67l-42.41-9.784L334.4 180.8l33.14 27.17L447.1 14.67z"/>
</>],
['light',<>
	<path d="M1.153 382.4l21.8 94.47C27.72 497.6 45.89 512 67.12 512C312.4 512 512 312.4 512 67.12c0-21.22-14.47-39.34-35.17-44.06l-94.39-21.91c-21.2-4.891-43.09 6.125-51.81 26.22L287 129.2c-7.984 18.69-2.828 39.92 12.84 52.84l40.52 33.19c-28.7 52.73-72.56 96.59-125.3 125.3L181.9 300C169.4 284.6 147.7 279.3 129.2 286.1L27.4 330.6c-.0156 .0313 .0156 0 0 0C7.317 339.3-3.738 361.1 1.153 382.4zM32.34 375.2c-1.438-6.25 1.813-12.66 7.719-15.22l101.6-43.56c5.344-2.219 11.8-.7188 15.5 3.844l41.39 50.5c4.703 5.75 12.8 7.531 19.44 4.219c67.83-33.38 123.6-89.09 156.9-156.9c3.281-6.672 1.531-14.72-4.219-19.44L320.2 157.3c-4.578-3.781-6.109-10.03-3.75-15.55l43.58-101.7c2.141-4.938 7.016-8.031 12.25-8.031c.9844 0 1.984 .1094 2.984 .3438l94.41 21.91c6.109 1.391 10.34 6.688 10.34 12.88c0 227.7-185.2 412.9-412.9 412.9c-6.141 0-11.61-4.344-12.98-10.31L32.34 375.2z"/>
</>],
['regular',<>
	<path d="M1.359 380.1l21.06 91.34c5.469 23.84 26.44 40.53 50.1 40.53C315.3 511.1 512 315.3 512 73.39c0-24.56-16.7-45.53-40.61-50.98l-91.25-21.06c-24.53-5.672-49.72 6.984-59.87 30.19l-42.25 98.56c-9.078 21.34-2.891 46.42 15.02 61.05l33.55 27.48c-25.75 44.75-63.26 82.25-108 107.1L191.1 293.1C176.5 275.1 151.3 268.9 129.9 278.2l-98.2 42.08C8.39 330.3-4.36 355.5 1.359 380.1zM48.12 369.3c-.4531-1.969 .6562-4.156 2.531-4.969l98.26-42.09c1.734-.8125 3.812-.2813 4.922 1.125l40.01 48.87c7.062 8.625 19.16 11.25 29.16 6.344c67.28-33.03 122.5-88.25 155.5-155.5c4.906-9.1 2.281-22.08-6.344-29.14l-48.78-39.97c-1.5-1.234-1.1-3.297-1.25-5.062l42.14-98.33c.6875-1.562 2.312-2.609 4.047-2.609c.3125 0 .6406 .0313 .9531 .1094l91.34 21.08c2.047 .4687 3.344 2.109 3.344 4.203c0 215.4-175.2 390.6-390.6 390.6c-2.109 0-3.75-1.281-4.219-3.281L48.12 369.3z"/>
</>],
['solid',<>
	<path d="M18.92 351.2l108.5-46.52c12.78-5.531 27.77-1.801 36.45 8.98l44.09 53.82c69.25-34 125.5-90.31 159.5-159.5l-53.81-44.04c-10.75-8.781-14.41-23.69-8.974-36.47l46.51-108.5c6.094-13.91 21.1-21.52 35.79-18.11l100.8 23.25c14.25 3.25 24.22 15.8 24.22 30.46c0 252.3-205.2 457.5-457.5 457.5c-14.67 0-27.18-9.968-30.45-24.22l-23.25-100.8C-2.571 372.4 5.018 357.2 18.92 351.2z"/>
</>],
['thin',<>
	<path d="M487.8 24.05l-100.8-23.25c-14.59-3.375-29.79 4.208-35.79 18.11L304.7 127.4c-5.531 12.78-1.807 27.78 8.974 36.47l53.81 44.04c-34 69.25-90.28 125.5-159.5 159.5L163.9 313.7c-8.781-10.75-23.67-14.42-36.45-8.98l-108.5 46.52c-13.91 6.094-21.53 21.14-18.12 35.82l23.25 100.8c3.25 14.25 15.79 24.22 30.45 24.22c252.3 0 457.5-205.2 457.5-457.5C512 39.84 502 27.32 487.8 24.05zM54.5 496c-7.156 0-13.25-4.859-14.88-11.81l-23.25-100.8c-1.656-7.203 2.125-14.61 8.938-17.58l108.5-46.52c6.242-2.66 13.5-.7871 17.75 4.406l52 63.53c133.5-62.32 176.7-168.7 183.8-183.8l-63.53-52.02c-5.25-4.219-7.062-11.52-4.375-17.73l46.5-108.5c2.938-6.781 10.34-10.48 17.47-8.844l100.8 23.25C491.1 41.23 496 47.36 496 54.52C496 297.1 297.9 496 54.5 496z"/>
</>],

]);

const PhoneFlip: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PhoneFlip.displayName = "PhoneFlip";

export default PhoneFlip;