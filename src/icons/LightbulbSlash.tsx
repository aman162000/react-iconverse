
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M615.1 512c-5.188 0-10.39-1.648-14.8-5.117L9.188 42.89c-10.42-8.156-12.24-23.26-4.073-33.7c8.188-10.41 23.23-12.29 33.7-4.073l591.1 463.1c10.42 8.156 12.24 23.26 4.073 33.7C630.2 508.8 623.1 512 615.1 512z"/><path className="fa-secondary" d="M187.6 291.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0625 .5156 .0938 .7812l.1876 70.35c0 6.297 1.875 12.43 5.344 17.68l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.66c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.437 5.348-12.37 5.348-17.7l.0973-44.18L148.2 212.9C154.6 242.6 168.2 269.7 187.6 291.8zM319.5 .0131C246.5 .1927 188.4 42.74 161.1 100.9l52.84 41.41c14.41-45.23 56.08-78.23 106.1-78.33c8.875 0 15.99 7.127 15.99 16S328.9 96.01 319.1 96.01c-39.94 0-72.83 29.46-78.76 67.76l193.4 151.6c6.348-9.328 12.52-17.57 17.82-23.59c28.12-31.1 43.54-73.15 43.54-115.8C495.1 78.62 416.8-.2369 319.5 .0131z"/>
</>],
['light',<>
	<path d="M233.4 105.9L258.4 125.7C273 107.7 295.1 96.01 319.1 96.01c8.844 0 15.1-7.155 15.1-15.1c0-8.84-7.15-16-15.99-16C284.9 64.01 253.9 80.59 233.4 105.9zM383.9 415.1H256.2c-8.846 0-16.15 7.186-16.14 16.03l.0367 22.33c.0098 6.27 1.869 12.46 5.344 17.68l17.14 25.69c5.225 7.855 17.2 14.28 26.64 14.28h61.66c9.418 0 21.39-6.436 26.61-14.28l17.08-25.68c2.953-4.441 5.34-12.37 5.348-17.7l-.0492-22.33C399.8 423.2 392.7 415.1 383.9 415.1zM367.9 454.4l-16.11 24.45C351.3 479.3 350.1 479.1 350.9 480l-60.29 .1172c-.4238-.1016-1.138-.2773-1.423-.2773c-.1406 0-.1348-.2266 0 0l-17.1-25.48l-.0098-6.367h95.94l.0039 5.18C367.9 453.6 367.7 454.4 367.9 454.4C367.9 454.4 367.8 454.5 367.9 454.4zM263 366.1l-.6094-3.312c-10.31-34.97-36-72.84-50.73-89.77c-10.5-12.07-18.54-25.84-24.52-40.45L146 200.1C150.5 234.7 164.5 267.5 187.5 293.1c13.33 15.31 35.84 49.59 43.73 76.02c1.078 8.688 8.844 14.62 17.64 13.71C257.6 382.8 263.9 374.8 263 366.1zM319.5 32.05H320c38.13 0 74.05 14.88 101.2 41.94C448.8 101.5 464 138.2 464 177.4c0 31.72-10.77 62.14-29.65 87.28l25.03 19.77C482.7 253.7 496 216.3 496 177.4c0-47.71-18.55-92.49-52.22-126.1c-33.33-33.22-78.2-52.47-124.3-51.28C264.4 .1732 215.3 26.06 183.1 66.22l25.03 19.77C234.2 53.28 273.8 32.19 319.5 32.05zM638 488.3c-1.002-1.828-2.377-3.484-4.111-4.855L25.9 3.234C23.25 1.148 20.09 .3242 16.95 .1328C16.36 .1016 15.78-.0234 15.19 .0039C13.7 .0859 12.27 .4883 10.85 .9727C10.17 1.207 9.457 1.297 8.811 1.621C6.801 2.633 4.928 4.004 3.436 5.875C2.068 7.613 1.117 9.547 .5684 11.55C.0195 13.55-.1289 15.63 .1113 17.67s.8691 4.027 1.869 5.852c1.002 1.824 2.377 3.48 4.111 4.852l608 480.2C617 510.9 620.5 512 624 512c4.719 0 9.406-2.094 12.56-6.078c2.734-3.473 3.805-7.727 3.324-11.79C639.6 492.1 639 490.1 638 488.3z"/>
</>],
['regular',<>
	<path d="M630.8 469.1l-196.2-153.8c6.311-9.273 12.57-17.61 17.82-23.59c27.12-30.94 43.54-71.39 43.54-115.8c0-97.2-78.76-175.1-175.1-175.1C246.1 .2266 188.9 42.1 161.5 101.3L38.81 5.118c-10.47-8.172-25.49-6.365-33.7 4.073c-8.172 10.44-6.349 25.53 4.073 33.7l591.1 463.1C605.6 510.3 610.8 512 615.1 512c7.125 0 14.17-3.159 18.9-9.19C643.1 492.4 641.2 477.3 630.8 469.1zM396.8 285.7l-196.6-154.1C216.1 85.94 259.2 48.19 319.1 48C390.6 48 448 105.4 448 175.1c0 30.97-11.24 60.86-31.64 84.13C410.2 267.1 403.5 275.1 396.8 285.7zM305.9 336h-33.22c-8.037-16.97-17.84-33.3-27.69-47.74L148.1 212.3c6.322 29.98 19.1 57.25 39.48 79.47c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0625 .5156 .0938 .7812l127.3 .0031L305.9 336zM240.1 454.3c0 6.297 1.875 12.43 5.344 17.68l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.66c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7l.1196-38.36H239.1L240.1 454.3z"/>
</>],
['solid',<>
	<path d="M240.1 454.3c0 6.297 1.875 12.43 5.344 17.68l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.66c9.437 0 21.36-6.401 26.61-14.28l17.08-25.68c2.937-4.437 5.348-12.37 5.348-17.7l.1196-38.36H239.1L240.1 454.3zM148.2 212.9c6.379 29.75 19.96 56.83 39.32 78.91c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0625 .5156 .0938 .7812l126.7-.0026L148.2 212.9zM630.8 469.1l-196.2-153.8c6.32-9.328 12.56-17.59 17.82-23.59c27.12-30.94 43.54-71.4 43.54-115.8c0-97.38-79.07-176.3-176.5-175.1c-73 .2266-131.1 42.72-158.4 100.9L38.81 5.118C34.41 1.68 29.19 .0008 24.03 .0008c-7.125 0-14.2 3.159-18.92 9.19c-8.187 10.44-6.365 25.53 4.073 33.7l591.1 463.1c10.5 8.203 25.57 6.333 33.7-4.073C643.1 492.4 641.2 477.3 630.8 469.1zM319.1 96.01c-39.94 0-72.83 29.48-78.76 67.76L213.9 142.3c14.27-45.3 56.15-78.33 106.1-78.33c8.844 0 15.99 7.159 15.99 16S328.8 96.01 319.1 96.01z"/>
</>],
['thin',<>
	<path d="M636.1 497.7L13.08 1.73C11.61 .5664 9.818 .0052 8.073 .0052c-.0137 0 .0137 0 0 0c-.0176 0 .0176 0 0 0c-2.353 0-4.738 1.026-6.335 3.007c-2.749 3.469-2.171 8.5 1.281 11.25l623.1 496c1.484 1.172 3.253 1.732 5.003 1.732c.0059 0-.0059 0 0 0c.0078 0-.0078 0 0 0c2.343 0 4.71-1.029 6.288-3.013C641 505.5 640.4 500.5 636.1 497.7zM236.1 98.01l12.71 10.11c18.51-17.3 43.12-28.12 70.34-28.12c4.39 0 7.969-3.578 7.969-8s-3.598-7.989-7.988-7.989C287.7 64.01 258.5 77.04 236.1 98.01zM319.5 16h.5292c42.65 0 82.74 16.63 112.9 46.86c30.35 30.38 47.06 70.78 47.06 113.8c0 32.95-10.62 64.59-29.21 91.36l12.45 9.891c20.82-29.62 32.7-64.7 32.7-101.3c0-47.3-18.37-91.74-51.73-125.1C411 18.28 366.9 0 320 0L319.5 .0131C267.5 .1732 220.8 23.28 188.6 59.61l12.21 9.707C229.9 36.78 271.7 16.14 319.5 16zM383.9 415.1H256.2c-8.811 0-15.81 7.174-15.8 16.02l.0371 22.32c.0098 6.324 1.877 12.5 5.368 17.77l16.78 25.62c5.206 7.856 17.24 14.28 26.64 14.28h61.66c9.398 0 21.4-6.424 26.61-14.28l17.08-25.68c2.919-4.406 5.34-12.41 5.348-17.7l-.0492-22.33C399.8 423.2 392.7 415.1 383.9 415.1zM383.7 454.4c-.0039 2.148-1.466 6.992-2.654 8.785l-17.03 25.68c-2.257 3.406-9.209 7.148-13.29 7.148H289.3c-4.075 0-11.03-3.738-13.28-7.141l-16.98-25.63c-1.759-2.656-2.691-5.742-2.697-8.934l-.0371-22.32h127.4L383.7 454.4zM251.5 375.1l-.373-2.094c-10.37-34.98-37.07-74.17-51.49-90.64c-14-16.04-24.17-34.7-30.85-54.59L147.6 210.1c5.969 30.16 19.52 58.48 39.1 81.91c13.51 15.45 38.53 52.09 47.1 84.05c.4979 4.375 4.421 7.5 8.84 7C248.8 383.4 251.1 379.5 251.5 375.1z"/>
</>],

]);

const LightbulbSlash: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

LightbulbSlash.displayName = "LightbulbSlash";

export default LightbulbSlash;
