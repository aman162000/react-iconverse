
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M318.4 304.5c-3.531 9.344-12.47 15.52-22.45 15.52H143.9L42.28 439.5c-4.641 5.469-11.37 8.453-18.28 8.453c-2.781 0-5.578-.4844-8.281-1.469C6.281 443.1 0 434.1 0 423.1V56.02c0-9.438 5.531-18.03 14.12-21.91C22.75 30.26 32.83 31.77 39.87 37.99l271.1 240C319.4 284.6 321.1 295.1 318.4 304.5z"/><path className="fa-secondary" d="M236.1 414.8c9.495 19.94 1.031 43.81-18.91 53.31c-19.95 9.504-43.82 1.035-53.32-18.91L117.3 351.3L143.9 319.1h47.09L236.1 414.8z"/>
</>],
['light',<>
	<path d="M311.9 277.1L39.87 37.99C35.41 34.05 29.75 32 24.01 32C20.67 32 17.31 32.69 14.12 34.11C5.531 37.98 0 46.58 0 56.02v367.1c0 10.06 6.281 19.06 15.72 22.53c2.703 .9844 5.5 1.469 8.281 1.469c6.906 0 13.64-2.985 18.28-8.453l90.18-106.1l60.91 137.1C196 476.5 201.9 480 208 480c2.156 0 4.375-.4375 6.484-1.375c8.078-3.594 11.7-13.05 8.125-21.13l-61.11-137.5l134.5 0c9.984 0 18.92-6.172 22.45-15.52C321.1 295.1 319.4 284.6 311.9 277.1zM129.1 287.1L32 402.2V73.71l242.8 214.3H129.1z"/>
</>],
['regular',<>
	<path d="M311.9 279.5L39.87 37.99C35.41 34.03 29.75 32 24.01 32C20.67 32 17.31 32.69 14.12 34.11C5.531 38.01 0 46.52 0 56.02v370.3c0 10.12 6.281 19.18 15.72 22.67c2.703 .9903 5.5 1.478 8.281 1.478c6.906 0 13.64-3.002 18.28-8.504l83.48-98.81l58.25 123.1c5.697 12.04 20.01 17.15 31.98 11.42c11.97-5.731 17.06-20.14 11.36-32.18l-58.58-123.8h127.2c9.984 0 18.92-6.209 22.45-15.61C321.1 296.7 319.4 286.1 311.9 279.5zM121.7 273.4l-73.69 87.23V109.6l184.5 163.8H121.7z"/>
</>],
['solid',<>
	<path d="M318.4 304.5c-3.531 9.344-12.47 15.52-22.45 15.52h-105l45.15 94.82c9.496 19.94 1.031 43.8-18.91 53.31c-19.95 9.504-43.82 1.035-53.32-18.91L117.3 351.3l-75 88.25c-4.641 5.469-11.37 8.453-18.28 8.453c-2.781 0-5.578-.4844-8.281-1.469C6.281 443.1 0 434.1 0 423.1V56.02c0-9.438 5.531-18.03 14.12-21.91C22.75 30.26 32.83 31.77 39.87 37.99l271.1 240C319.4 284.6 321.1 295.1 318.4 304.5z"/>
</>],
['thin',<>
	<path d="M296.7 266.2L51.89 53.38C47.87 49.84 42.78 48 37.61 48c-3.002 0-6.033 .6211-8.896 1.893C20.98 53.38 15.1 61.09 15.1 69.58v331.2c0 9.057 5.654 17.16 14.15 20.28c2.434 .8868 4.951 1.322 7.453 1.322c6.217 0 12.28-2.686 16.45-7.608l84.87-102.8l69.85 147.5C210.1 462.3 213 464 215.1 464c1.156 0 2.312-.25 3.422-.7657c4-1.891 5.703-6.672 3.812-10.66L152.9 303.1h129.5c8.986 0 17.03-5.555 20.21-13.97C305.8 281.6 303.4 272.1 296.7 266.2zM287.6 284.4c-.8184 2.166-2.924 3.621-5.24 3.621H145.5c-4.773 0-9.299 2.133-12.34 5.815l-91.31 110.6c-1.057 1.246-2.607 1.961-4.254 1.961c-.6641 0-1.326-.1192-1.934-.3399c-2.193-.8067-3.666-2.92-3.666-5.26V69.58c0-2.197 1.293-4.201 3.205-5.065c.7715-.3418 1.582-.5157 2.404-.5157c1.371 0 2.686 .4922 3.781 1.457l244.7 212.7C287.8 279.7 288.5 282.2 287.6 284.4z"/>
</>],

]);

const ArrowPointer: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ArrowPointer.displayName = "ArrowPointer";

export default ArrowPointer;
