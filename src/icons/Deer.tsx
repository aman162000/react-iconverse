
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M489.6 134.4l-112-32c-16-3.2-32 3.2-38.4 16L304 192H64C28.8 192 0 220.8 0 256L0 319.1L32 300.8v48l-12.8 32C16 393.6 12.8 406.4 16 419.2l25.6 83.2C44.8 505.6 51.2 512 57.6 512h64c9.6 0 16-6.4 16-16v-3.2l-25.6-89.6L131.2 352H288v144c0 9.6 6.4 15.1 15.1 15.1L368 512c9.6 0 16-6.4 16-16V288l32-64h64c19.2 0 32-12.8 32-32V163.2C512 150.4 502.4 137.6 489.6 134.4zM415.1 175.1c-9.6 0-16-6.4-16-16s6.4-16 16-16s16 6.4 16 16S425.6 175.1 415.1 175.1z"/><path className="fa-secondary" d="M441.3 27.6c-3.75-2.5-8.656-1.479-11.16 2.146l-18 27.25C407.5 64 401.1 69.64 393.6 73.26L351 94.63l-33.75-9.5l8.266-10.39C332.3 66.23 336 55.75 336 44.75l0-36.75c0-4.375-3.625-8-8-8L312 0c-4.375 0-8 3.625-8 8v36.75c0 3.625-1.25 7.125-3.5 9.1l-16.75 21l-16.12-4.498c-6.875-2-11.76-8.252-11.76-15.5l.0417-47.75c0-4.375-3.625-8-8-8L231.9 0c-4.375 0-8 3.625-8 8v47.75c0 21.5 14.38 40.5 35 46.25l77.69 21.91l2.637-5.515c6.4-12.8 22.4-19.2 38.4-16l18.09 5.171l12.18-5.694c12.38-6.125 23-15.63 30.75-27.13l18.12-27.13c2.5-3.75 1.552-8.646-2.198-11.15L441.3 27.6z"/>
</>],
['light',<>
	<path d="M399.1 159.1C391.2 159.1 384 167.3 384 176S391.3 192 400 192s15.1-7.25 15.1-16S408.7 159.1 399.1 159.1zM488.8 133.2l-92-25.75l11.12-5.624c12.5-6.321 23.16-15.76 30.94-27.41l13.57-20.31C457.3 46.83 455.3 36.91 448 32c-7.371-4.949-17.36-2.945-22.26 4.463l-13.34 20.12c-4.719 7.117-11.17 12.85-18.8 16.68L351 94.63l-33.75-9.5l8.266-10.39C332.3 66.22 336 55.63 336 44.75V16C336 7.199 328.8 0 320 0s-15.94 7.197-15.94 15.1L304 44.75c0 3.633-1.234 7.159-3.5 9.1l-16.75 21l-16.12-4.498c-6.958-1.942-11.76-8.278-11.76-15.5L256 15.1C256 7.197 248.7 0 239.9 0s-16 7.199-16 16v39.75c0 21.51 14.3 40.41 35 46.25l78.88 22.25L304 192H96C42.98 192 0 234.1 0 288c0 17.67 14.33 32 31.1 32L32 347.6l-11.88 31.75c-4.625 12.25-5.375 25.5-2.25 38l19.44 61.2C43.64 498.5 62.15 512 83.06 512h15.68c31.19 0 54.1-29.29 46.59-59.56l-12.08-48.69L152.6 352H256v112c0 26.51 21.49 47.1 47.1 47.1L336 512c26.51 0 48-21.49 48-48V320l32-64h48C490.5 256 512 234.5 512 208V164.1C512 149.7 502.4 137.2 488.8 133.2zM480.1 208c0 8.75-7.375 16-16.12 16h-67.75L352 312.4V464c0 8.836-7.164 16-16 16h-32c-8.836 0-16-7.221-16-16.06V320H130.4l-30.62 81.75l12.51 56.82C116 468.1 108.3 480 97.21 480H83.08c-6.971 0-13.14-4.514-15.25-11.16l-19.08-60.09c-1.375-6-.875-12.25 1.375-18.12l14-37.25V288H32c0-35.25 28.75-64 64-64h227.8l33.75-67.38c6.869-13.71 22.5-20.63 37.27-16.49l73.6 20.62c6.951 1.947 11.76 8.283 11.76 15.5V208z"/>
</>],
['regular',<>
	<path d="M384 159.1c-8.75 0-16 7.248-16 15.1c0 8.748 7.25 15.1 16 15.1s16-7.248 16-15.1C400 167.2 392.8 159.1 384 159.1zM465.4 108.5l-68.62-19.37c3-3.374 6.125-6.373 8.625-9.998l18.12-27.12c4.875-7.248 2.875-17.25-4.375-22.24l-13.37-8.873c-7.375-4.874-17.25-2.874-22.13 4.374L365.5 52.49c-3.875 5.749-9.25 10.5-15.38 13.62l-48.88 24.37l-9.5-2.749c8-9.998 12.37-22.37 12.37-34.99l-.0625-36.74c0-8.748-7.188-15.1-15.94-15.1h-16C263.2-.0001 256 7.25 256 15.1l.125 36.74c0 1.875-.625 3.624-1.75 4.999L241 74.61L229.1 71.48C226.6 70.48 224.2 67.36 224.2 63.73V15.1c0-8.748-7.25-15.1-16-15.1h-16c-8.875 0-15.1 7.248-15.1 15.1v47.74c0 24.99 16.75 47.24 40.87 53.99l63.75 17.87l-14.63 24.37H88c-48.5 0-88 39.49-88 87.98v63.98h48v7.248l-10.38 27.74c-6.25 16.75-7.375 34.87-2.625 53.24l24.5 81.48C64 499.5 79.88 512 98.25 512h63.88c12.38 0 23.87-5.624 31.5-15.37c7.625-9.748 10.25-22.24 7-35.37l-23.1-80.61l10.62-28.62H240v119.1c0 22.12 17.88 39.99 40 39.99h64c22.12 0 40-17.87 40-39.99V295.2l20.75-31.24H448c35.25 0 64-28.74 64-63.98V170.1C512 141.6 492.8 116.2 465.4 108.5zM464 199.1c0 8.748-7.25 15.1-16 15.1h-68.75L336 280.7v183.2L288 463.9V303.9H153.1l-28.12 74.73l25.37 85.23h-47l-23.12-76.48c-2-7.873-1.5-16.12 1.25-23.74l14.12-31.74L96 263.9H48V247.9c0-22.12 17.88-39.99 40-39.99h205.8l34.5-58.74c7.5-14.1 24.5-22.49 40.75-17.1l83.25 23.49C459.3 156.6 464 162.1 464 170.1V199.1z"/>
</>],
['solid',<>
	<path d="M488.8 133.2l-92-25.75l11.12-5.624c12.37-6.125 23-15.63 30.75-27.13l18.12-27.13c2.5-3.75 1.552-8.646-2.198-11.15l-13.27-8.875c-3.75-2.5-8.656-1.479-11.16 2.146l-18 27.25C407.5 64 401.1 69.64 393.6 73.26L351 94.63l-33.75-9.5l8.266-10.39C332.3 66.23 336 55.75 336 44.75l0-36.75c0-4.375-3.625-8-8-8L312 0c-4.375 0-8 3.625-8 8v36.75c0 3.625-1.25 7.125-3.5 9.1l-16.75 21l-16.12-4.498c-6.875-2-11.76-8.252-11.76-15.5l.0417-47.75c0-4.375-3.625-8-8-8L231.9 0c-4.375 0-8 3.625-8 8v47.75c0 21.5 14.38 40.5 35 46.25l78.88 22.25L304 192H64C28.75 192 0 220.8 0 256L0 319.1L32 298.8v48.81l-11.88 31.75c-4.625 12.25-5.375 25.38-2.25 38l24.88 82.56C44.62 507 51 512 58.25 512l63.87-.0003c10.38 0 18-9.75 15.5-19.87L111.2 403.8L130.8 352H288v144c0 8.75 7.25 15.1 15.1 15.1L368 512c8.75 0 16-7.25 16-16V288l32-64h64c17.75 0 32-14.25 32-32V164.1C512 149.7 502.4 137.2 488.8 133.2zM415.1 175.1c-8.75 0-16-7.25-16-16s7.25-16 16-16s16 7.25 16 16S424.8 175.1 415.1 175.1z"/>
</>],
['thin',<>
	<path d="M415.1 143.1c-8.75 0-16 7.25-16 16s7.25 16 16 16s16-7.25 16-16S424.7 143.1 415.1 143.1zM482.9 125.6C482.9 125.5 482.1 125.6 482.9 125.6l-89.34-25.41l3.164-1.584c16.19-8.078 30.03-20.3 40.06-35.34l17.74-26.74c2.438-3.672 1.573-8.683-2.115-11.14s-8.719-1.427-11.16 2.261l-17.78 26.74c-8.5 12.72-20.22 23.06-33.88 29.91l-19.88 9.938l-55.91-13.98l7.75-10.35c9.281-12.38 14.41-27.72 14.41-43.19l0-18.67c0-4.422-3.594-8-8-8s-8 3.578-8 7.1v18.67c0 12.03-3.969 23.95-11.22 33.59l-11.19 14.94c-.1992 .2637-.0664 .6094-.2266 .8887l-23.18-5.795c-10.72-2.672-18.19-12.25-18.19-23.28L255.9 7.1c0-4.422-3.594-8-8-8s-7.917 3.578-7.917 7.1v39.02c0 18.39 12.47 34.34 30.31 38.81l73.25 18.31C333.4 109.7 324.9 118.3 319.7 129.5l-28.84 62.47H71.1c-39.69 0-72 32.3-72 72l0 56c0 2.953 1.625 5.656 4.219 7.047c2.562 1.375 5.719 1.25 8.219-.375l19.56-13v24.5l-11.34 30.38c-5.188 13.72-6.062 28.52-2.438 43.14l24.78 82.22c2.812 10.66 12.38 18.09 23.25 18.09l55.88 .0002c7.406 0 14.28-3.344 18.87-9.188c4.562-5.859 6.188-13.38 4.281-20.97l-25.59-85.8l16.59-44.05h143.7v136c0 13.23 10.78 24 24 24l55.1-.0004c13.22 0 24-10.77 24-24v-198.1l28.94-57.89h59.06C494.1 231.1 512 214.1 512 191.1V164.1C512 146.4 499.1 130.6 482.9 125.6zM495.1 191.1c0 13.23-10.78 24-24 24h-64c-3.031 0-5.812 1.719-7.156 4.422l-32 64c-.5625 1.109-.8438 2.344-.8438 3.578v200c0 4.406-3.594 8-8 8h-56c-4.406 0-8-3.594-8-8v-136h8c4.406 0 8-3.578 8-8s-3.594-8-8-8h-192c-4.406 0-8 3.578-8 8s3.594 8 8 8h7.172l-15.42 40.92c-.5938 1.641-.6562 3.438-.1562 5.109l26.25 88.02c.625 2.422 .0938 4.938-1.469 6.906c-1.5 1.938-3.781 3.047-6.25 3.047H66.25c-3.625 0-6.812-2.531-7.844-6.438l-24.75-82.11c-2.75-11.08-2.062-22.58 1.969-33.28l11.88-31.75c.3438-.8906 .5-1.844 .5-2.797V298.7c0-2.953-1.625-5.656-4.219-7.047C41.19 290.3 38.03 290.5 35.56 292.1l-19.56 13V263.1c0-30.88 25.12-56 56-56h224c3.125 0 5.969-1.812 7.25-4.656l30.97-67.11c8.25-17.8 27.94-26.92 46.88-21.84l97.47 26.56c10.28 3.047 17.44 12.56 17.44 23.17V191.1z"/>
</>],

]);

const Deer: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Deer.displayName = "Deer";

export default Deer;