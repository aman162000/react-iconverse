
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 16c-132.5 0-240 107.5-240 240c0 56.09 19.41 107.5 51.68 148.4c5.941 7.52 15.3 11.58 24.89 11.58h27.39l85.75 45.04c25.12 12.62 55.62 7.714 75.62-12.29C317.6 412.5 292.3 366.8 286.4 352l-23.14-57.79c-7.75-19.38 4.996-40.89 25.62-43.51l188.3-24.49c8.523-1.188 14.67-9.027 13.83-17.39C459.4 61.7 332.5 16 256 16zM175.1 359.1c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S189.2 359.1 175.1 359.1z"/><path className="fa-secondary" d="M496 320H354.3l-14.2-75.98l-31.77 4.134L321.7 320h-48.16c0 0 18.71 46.8 12.8 32h41.36l9.875 52.66C347.5 457.6 393.8 496 447.7 496h48.31c8.844 0 16-7.156 16-16v-144C512 327.2 504.8 320 496 320zM479.1 464h-32.31c-32.28 0-60.54-19.45-73.07-48h105.4V464zM479.1 384h-113.7l-5.992-32h119.7V384z"/>
</>],
['light',<>
	<path d="M479.1 320h-124.5l-15.41-75.98l137-17.82c9.001-1.25 15.66-9.831 13.91-18.71C468.4 93.75 368.2 8 247.1 8c-133.1 0-229.8 101.5-245.4 211.9C-7.665 292 21.24 359 61.74 409.9C64.75 413.8 69.5 416 74.5 416H128l77.71 44.98c9.251 4.625 19.41 6.946 29.28 6.946c46.5 0 78.11-49.18 60.86-92.05L286.4 352h42.88l9.501 49.38c9.501 47.38 48 83.25 96.01 89.25C478.7 496.1 477.2 496 479.1 496C502.5 496 512 476.2 512 464V352C512 334.2 497.7 320 479.1 320zM273.6 320l-10.34-25.79c-17.88-44.87 44.97-46.05 45.1-46.05L322.9 320H273.6zM284.7 218.9C243.4 224.2 218.1 267.2 233.6 306.1l32.63 83.63c5 12.5 2 26.75-7.501 36.25c-12.75 12.75-29.25 10.1-38.75 6.249C131.3 388 137.1 388.8 127.5 383.9h-53.38C40.21 338.1 26.09 281.8 34.21 224.2C47.46 130.6 131.2 40 247.1 40c96.76 0 181.4 64.88 207.5 156.8L284.7 218.9zM479.1 464l-41.26-5.25C412.7 455.6 390.7 438 378.6 416h101.4V464zM479.1 384h-111.8l-6.375-32h118.1V384zM175.1 311.1c-13.25 0-24 10.75-24 24s10.75 24 24 24s24-10.75 24-24S189.2 311.1 175.1 311.1z"/>
</>],
['regular',<>
	<path d="M496 320H354.3l-14.2-75.98l137-17.82c8.523-1.188 14.67-9.027 13.83-17.39C459.4 61.7 332.5 16 256 16c-132.5 0-240 107.5-240 240c0 56.09 19.41 107.5 51.68 148.4c5.941 7.52 15.3 11.58 24.89 11.58h27.39l85.75 45.04c9.297 4.672 19.32 6.946 29.28 6.946c16.96 0 33.74-6.633 46.34-19.23C317.6 412.5 292.3 366.8 286.4 352h41.36l9.875 52.66C347.5 457.6 393.8 496 447.7 496h48.31c8.844 0 16-7.156 16-16v-144C512 327.2 504.8 320 496 320zM273.6 320l-10.34-25.79c-7.75-19.38 4.996-40.89 25.62-43.51l19.48-2.538L321.7 320H273.6zM333.8 196.4L282.8 203.1c-24.71 3.145-46.13 17.28-58.79 38.78C212.8 260.9 209.1 283.1 215.9 304H215.5c0 0 27.88 69.69 28.94 72.11c10.74 24.62 9.504 32.07 2.936 38.64c-3.312 3.314-7.713 5.139-12.39 5.139c-2.711 0-5.316-.6191-6.988-1.451l-96.22-50.5H100.3C76.52 335.1 64 296.6 64 256c0-105.9 86.13-192 192-192c51.51 0 140.6 26.17 177.4 119.5L333.8 196.4zM479.1 464h-32.31c-32.28 0-60.54-19.45-73.07-48h105.4V464zM479.1 384h-113.7l-5.992-32h119.7V384zM175.1 311.1c-13.25 0-24 10.75-24 24s10.75 24 24 24s24-10.75 24-24S189.2 311.1 175.1 311.1z"/>
</>],
['solid',<>
	<path d="M496 320H354.3l-14.2-75.98l137-17.82c8.523-1.188 14.67-9.027 13.83-17.39C459.4 61.7 332.5 16 256 16c-132.5 0-240 107.5-240 240c0 56.09 19.41 107.5 51.68 148.4c5.941 7.52 15.3 11.58 24.89 11.58h27.39l85.75 45.04c25.12 12.62 55.62 7.714 75.62-12.29C317.6 412.5 292.3 366.8 286.4 352h41.36l9.875 52.66C347.5 457.6 393.8 496 447.7 496h48.31c8.844 0 16-7.156 16-16v-144C512 327.2 504.8 320 496 320zM175.1 359.1c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S189.2 359.1 175.1 359.1zM273.6 320l-10.34-25.79c-7.75-19.38 4.996-40.89 25.62-43.51l19.48-2.538L321.7 320H273.6zM479.1 464h-32.31c-32.28 0-60.54-19.45-73.07-48h105.4V464zM479.1 384h-113.7l-5.992-32h119.7V384z"/>
</>],
['thin',<>
	<path d="M472 320h-127.3L330.6 245.3l146.5-19.05c8.523-1.188 14.67-9.027 13.83-17.39C459.4 61.7 332.5 16 256 16c-132.5 0-240 107.5-240 240c0 56.09 19.41 107.5 51.68 148.4c5.941 7.52 15.3 11.58 24.89 11.58h27.39l85.75 45.04c9.297 4.672 19.32 6.946 29.28 6.946c16.96 0 33.74-6.631 46.34-19.23C317.6 412.5 292.3 366.8 286.4 352l-6.406-16h51.42l11.62 62.09C353.7 454.8 403.3 496 460.9 496h11.06c22.06 0 40-17.94 40-40v-96C512 337.9 494.1 320 472 320zM270 437.4c-9.359 9.355-21.8 14.51-35.02 14.51c-7.637 0-15.28-1.812-21.86-5.113l-89.24-46.83h-31.33c-5.004 0-9.613-2.059-12.34-5.504C48.68 354.5 32 306.6 32 256c0-123.5 100.5-224 224-224c66.83 0 187.8 37.62 218.9 178.3l-188.1 24.48c-14.81 1.883-27.66 10.36-35.25 23.27C243.1 270.1 242.8 286.3 248.4 300.1c0 0 24.53 61.11 25.43 63.17C284.9 388.7 292.1 415.3 270 437.4zM273.6 320l-10.34-25.79c-7.75-19.38 4.996-40.89 25.62-43.51l25.89-3.367L328.4 320H273.6zM496 456c0 13.22-10.78 24-24 24h-11.06c-48.3 0-89.73-33.43-100.8-80h135.9V456zM496 384h-139.3l-9-48h124.3c13.22 0 24 10.78 24 24V384zM176 304c-17.64 0-32 14.36-32 32s14.36 32 32 32s32-14.36 32-32S193.6 304 176 304zM176 352c-8.836 0-16-7.164-16-16s7.164-16 16-16s16 7.164 16 16S184.8 352 176 352z"/>
</>],

]);

const FootballHelmet: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FootballHelmet.displayName = "FootballHelmet";

export default FootballHelmet;
