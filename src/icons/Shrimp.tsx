
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M352 410.8v68.39c37.23-3.363 71.05-18.3 97.96-41.21l-81.75-36.34C363.5 405.6 358 408.8 352 410.8zM288 320V128h-224c0 106 85.96 192 192 192H288zM192 216c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24C216 205.3 205.3 216 192 216zM507.9 270l-124.7 90.69c.3066 1.918 .7266 3.799 .7871 5.793c.0469 1.576 .0176 3.135-.084 4.676c-.0508 .7598-.334 1.418-.4219 2.164l90.15 40.06c26.95-33.84 41.82-77.71 37.69-125.2C510.8 281.1 509.1 276.1 507.9 270zM225.2 400.5c-4.121 12.37 3.225 25.72 15.39 30.4l4.467 1.719c-12.45 1.596-22.08 12.29-20.98 25.45C225.2 470.7 236.5 480 249.2 480h70.78v-70.13l-63.38-24.28C243.9 380.8 229.6 387.4 225.2 400.5zM498.1 237.6C470.9 172.7 405.6 128 331.8 128h-11.78v192h13.99c12.67 0 24.49 4.785 33.49 12.6L498.1 237.6z"/><path className="fa-secondary" d="M32.01 96c0-17.64 14.34-32 32-32h368c8.844 0 16-7.156 16-16S440.8 32 432 32h-368C28.72 32 .0055 60.7 .0055 96s28.72 64 64 64h2.879C65.13 149.6 64.01 138.9 64.01 128C46.35 128 32.01 113.6 32.01 96zM320 128h-32v192h32V128zM320.2 409.1l-.2324-.0898V480h16c5.406 0 10.72-.375 16-.8516v-68.39C342 413.1 330.9 414 320.2 409.1zM507.9 270c-2.242-11.28-5.492-22.08-9.824-32.41l-130.6 94.97c8.258 7.17 13.93 16.96 15.71 28.13L507.9 270zM368.2 401.6l81.75 36.34c8.668-7.383 16.57-15.6 23.66-24.51l-90.15-40.06C382.1 384.9 376.4 394.6 368.2 401.6z"/>
</>],
['light',<>
	<path d="M208 224c8.836 0 16-7.164 16-16c0-8.838-7.164-16-16-16s-16 7.162-16 16C192 216.8 199.2 224 208 224zM511.2 286.7c-8.73-91.5-90.83-158.7-182.7-158.7c-.0059 0 .0039 0-.002 0L63.1 128c-17.66 0-32-14.36-32-32s14.34-32 32-32h368c8.846 0 16-7.156 16-16S440.8 32 432 32H63.1c-35.28 0-64 28.7-64 64s28.72 64 64 64h2.879c15.27 90.77 94.01 160 189.1 160h99.94c15.5 0 28.06 12.56 28.06 28.06c0 3.631-.8418 6.996-2.068 10.14l-.4316 1.291c-4.445 9.912-14.38 16.64-25.5 16.64c-2.254 0-4.553-.2754-6.863-.8516L243.1 352.3c-.3438-.0742-.3418 .1484-.582 .1641c-4.686-.7598-9.621 .3066-13.39 3.773c-6.5 5.984-6.906 16.11-.9062 22.61l37.09 40.2l-36.16 33.14c-6.5 5.969-6.938 16.09-.9687 22.61C231.4 478.3 235.7 480 240 480h96C438.9 480 521.2 391.7 511.2 286.7zM320 288h-64C178.7 288 114.1 232.9 99.22 160h12.79l208-.002V288zM336 448h-54.86l17.68-16.2c3.125-2.875 5-6.875 5.188-11.12c.1562-4.25-1.344-8.406-4.25-11.53l-14.58-15.79l50.83 11.74V448zM355.9 288h-3.939V162.1c51 7.734 94.03 39.85 114.6 83.54l-78.1 52.07C379.1 291.6 367.1 288 355.9 288zM442.6 400.8c-19.94 21.93-46.14 36.81-74.59 43.34v-37.25c17.43-3.559 31.9-14.85 40.28-29.97l41.67 13.89C447.4 394.1 445.4 397.7 442.6 400.8zM466.7 362.7l-50.98-16.99c-.332-8.49-2.434-16.47-5.949-23.71l67.02-44.68c.8047 4.146 2.074 8.141 2.48 12.4C481.8 315.5 476.9 340.2 466.7 362.7z"/>
</>],
['regular',<>
	<path d="M224 248c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24S200 210.7 200 224C200 237.3 210.7 248 224 248zM336 128H72C58.78 128 48 117.2 48 104S58.78 80 72 80h352C437.3 80 448 69.25 448 56S437.3 32 424 32h-352C32.31 32 0 64.3 0 104c0 37.47 28.88 67.99 65.48 71.34C77.1 274.6 161.6 352 264 352h64c22.06 0 40 17.94 40 40c0 20.44-15.62 36.71-35.44 39.08l-64.91-36.06c-11.59-6.453-26.22-2.234-32.63 9.328c-5.545 9.984-2.867 21.89 5.287 29.21C230.9 436.8 224 445.5 224 456C224 469.3 234.8 480 248 480c0 0 87.06 0 88 0c97.03 0 176-78.95 176-176S433 128 336 128zM296 304h-32c-75.66 0-138.6-55.55-150.1-128H296V304zM359.9 310.2C354.8 308.2 349.5 306.6 344 305.6V176.8c39.6 2.502 74.32 22.71 96.06 53.19L359.9 310.2zM415.1 404.6C415.7 400.5 416 396.3 416 392c0-19.69-6.727-37.7-17.69-52.37l62.68-62.68C462.9 285.7 464 294.7 464 304C464 344.8 444.9 381.1 415.1 404.6z"/>
</>],
['solid',<>
	<path d="M288 320V128H64C46.34 128 32 113.6 32 96s14.34-32 32-32h368c8.844 0 16-7.156 16-16s-7.156-16-16-16H64C28.72 32 0 60.7 0 96s28.72 64 64 64h2.879c15.26 90.77 94.01 160 189.1 160H288zM192 216c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24C216 205.3 205.3 216 192 216zM225.6 399.4c-4.75 12.36 1.406 26.25 13.78 31.02l5.688 2.188C233.3 434.1 224 443.8 224 456c0 13.25 10.75 24 24 24h72v-70.03l-63.38-24.38C244.3 380.9 230.4 386.1 225.6 399.4zM511.2 286.7c-.5488-5.754-2.201-11.1-3.314-16.65l-124.6 90.62c.3711 2.404 .7383 4.814 .7383 7.322c0 1.836-.3379 3.576-.5391 5.357l90.15 40.06C500.8 379.2 515.8 334.8 511.2 286.7zM352 413.1v66.08c37.23-3.363 71.04-18.3 97.94-41.21l-80.34-35.71C364.7 407.1 358.6 410.7 352 413.1zM497.9 237.7C470.1 172.4 402.8 128 328.4 128h-8.436v192h16c12.28 0 23.36 4.748 31.85 12.33L497.9 237.7z"/>
</>],
['thin',<>
	<path d="M192.3 176C183.5 176 176.3 183.2 176.3 192c0 8.836 7.174 16 16.03 16c8.85 0 16.02-7.164 16.02-16C208.3 183.2 201.2 176 192.3 176zM511.2 286.7C502.7 198.3 422.8 128.9 328.9 128c-.1523-.0078-272.8 0-272.8 0C33.99 128 16.03 110.1 16.03 88S33.99 48 56.09 48h383.9C444.4 48 448 44.42 448 40S444.4 32 439.1 32H56.09C25.16 32 0 57.13 0 88S25.16 144 56.09 144H64c4.238 97.32 84.65 175.3 183.2 175.3h99.66c20.85 0 37.78 16.92 37.78 37.72c0 11.11-4.852 21.59-13.37 28.77c-8.449 7.188-19.65 10.3-30.58 8.438L233.3 376.5c-3.568-.5938-7.074 1.266-8.576 4.516c-1.533 3.266-.6875 7.141 2.066 9.469l48.26 41l-47.73 34.03c-2.816 2.031-4.037 5.641-2.973 8.953S228.5 480 232 480h102.3c50.02 0 98.06-21.27 131.8-58.34C499.9 384.5 515.9 336.6 511.2 286.7zM478.4 374.8l-43.19-14.38c-4.133-1.375-8.732 .8906-10.14 5.062c-1.408 4.188 .875 8.719 5.07 10.12l40.32 13.42c-4.869 7.568-9.945 15.05-16.16 21.88c-24.74 27.17-58.57 44.41-94.31 50.34V432c0-4.422-3.6-8-8.012-8c-4.414 0-8.014 3.578-8.014 8v30.92C340.5 463.1 337.8 464 334.3 464h-77.31l35.74-25.48c2.002-1.438 3.223-3.719 3.35-6.172c.0938-2.469-.9395-4.844-2.818-6.438l-34.05-28.92l78.78 12.98c15.62 2.578 31.49-1.766 43.6-12.02c12.08-10.22 18.1-25.16 18.1-40.97c0-29.62-24.13-53.72-53.8-53.72H247.2c-89.7 0-163.2-70.73-167.4-159.3H320V256c0 4.422 3.6 8 8.012 8c4.414 0 8.014-3.578 8.014-8V144.9c56.79 3.078 107.2 33.1 135.4 77.14l-44.42 44.35c-3.129 3.125-3.129 8.188 0 11.31C428.6 279.2 430.6 280 432.7 280c2.064 0 4.1-.7813 5.664-2.344l41.47-41.41c8.039 16.12 13.63 33.52 15.4 52.02C498.1 318.8 491.8 348.3 478.4 374.8z"/>
</>],

]);

const Shrimp: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Shrimp.displayName = "Shrimp";

export default Shrimp;