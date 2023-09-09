
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M228.1 241.3c7 7 15.62 12.25 25 15.5l46.13 15.38L320.1 212l-47.75-16L223.9 146.8C211.7 134.6 195.7 127.9 178.7 127.9H115.8c-24.37 0-46.28 13.6-57.16 35.35l-55.25 110.5c-7.875 15.75-1.5 35 14.38 42.88C22.25 318.9 27.25 320 31.1 320c11.75 0 23-6.5 28.62-17.75l19.38-38.63v54.75l-15.88 158.4c-1.75 17.62 11.16 33.38 28.66 35C93.78 511.9 94.91 512 95.91 512c16.25 0 30.09-12.25 31.84-28.75L140.9 352h15.38l35.75 71.5V480c0 17.75 14.25 32 31.1 32c17.75 0 32-14.25 32-32v-56.5c0-9.875-2.25-19.75-6.75-28.62l-41.12-82.5V221.3L228.1 241.3z"/><path className="fa-secondary" d="M501.5 66.65l-67.7-24.63L439.2 27c3-8.25-1.25-17.5-9.498-20.5l-15-5.5c-8.375-3-17.5 1.25-20.5 9.625L388.7 25.65l-67.63-24.62c-8.375-3-17.5 1.219-20.5 9.594l-43.87 120.3c-3 8.375 1.375 17.5 9.625 20.5l67.62 24.62l-46.08 126.9c-3 8.375 1.331 17.51 9.706 20.51l14.92 5.495c8.25 3 17.5-1.25 20.5-9.625l44.4-127.5l69.39 25.24c8.375 3 17.5-1.25 20.5-9.625l43.66-120.2C514.1 78.77 509.7 69.77 501.5 66.65zM143.1 .021c-26.38 0-47.1 21.51-47.1 48.01s21.5 48 47.1 48S191.1 74.53 191.1 48.03S170.4 .021 143.1 .021z"/>
</>],
['light',<>
	<path d="M510.5 73.33c-1.781-3.891-5.047-6.891-9.062-8.344l-76.24-27.72l5.789-15.71c3.047-8.297-1.188-17.48-9.484-20.55c-8.25-3.047-17.47 1.188-20.55 9.484l-5.836 15.84l-69.68-25.34c-8.328-3.047-17.38 1.203-20.45 9.406l-48 127.1c-1.5 4-1.328 8.436 .4531 12.31c1.781 3.891 5.047 6.891 9.062 8.344l70.3 25.56l-14.55 39.49L264.2 209.6L222.1 167.4c-15.11-15.11-35.2-23.44-56.58-23.44H133.6c-29.05 0-55.84 15.78-69.94 41.17L2.02 296.2C-2.277 303.1 .5039 313.7 8.238 317.1c2.453 1.375 5.125 2.016 7.75 2.016c5.625 0 11.08-2.969 14-8.234L80.03 221.7l.0547 112.7l-16 159.1c-.875 8.797 5.531 16.64 14.33 17.52C78.96 511.1 79.49 512 80.02 512c8.125 0 15.08-6.156 15.91-14.41l16.08-161.6V181.5c6.629-3.373 13.93-5.488 21.62-5.488h31.86c3.592 0 7.094 .4844 10.52 1.248v142.7c0 2.906 .7813 5.75 2.281 8.234l45.72 76.2V496c0 8.844 7.156 16 16 16s16-7.156 16-16v-95.1c0-2.906-.7813-5.75-2.281-8.234L208 315.6V198.6l36.69 36.69c2.047 2.047 4.625 3.5 7.438 4.203l59.04 14.76l-22.18 60.19c-3.047 8.297 1.188 17.48 9.484 20.55c1.828 .6719 3.688 .9844 5.531 .9844c6.516 0 12.62-4 15.02-10.47l47.89-129.1l75.62 27.5c1.812 .6562 3.656 .9687 5.469 .9687c6.484 0 12.58-3.969 14.98-10.38l48-127.1C512.5 81.64 512.3 77.2 510.5 73.33zM438.6 187.6L292.7 134.5l36.77-98.03l145.9 53.06L438.6 187.6zM136 112c30.88 0 56-25.12 56-55.1c0-30.87-25.12-55.1-56-55.1s-56 25.12-56 55.1C80 86.89 105.1 112 136 112zM136 32.02c13.23 0 24 10.76 24 23.1s-10.77 24-24 24s-24-10.77-24-24S122.8 32.02 136 32.02z"/>
</>],
['regular',<>
	<path d="M143.1 96.03c26.5 0 47.1-21.5 47.1-48S170.5 .021 143.1 .021S96 21.53 96 48.03S117.5 96.03 143.1 96.03zM501.5 66.65l-67.7-24.63l2.777-7.285c4.578-12.49-1.834-26.32-14.32-30.9c-12.35-4.529-26.16 1.871-30.69 14.22L388.7 25.65l-67.63-24.62c-11.12-4.125-18.62 4.594-20.5 9.594l-43.87 120.3c-3 8.375 1.375 17.5 9.625 20.5l67.62 24.62l-15.74 43.49c0 0-49.1-17.13-49.5-16.5l-50.5-58.63c-10.5-10.38-24.79-16.45-39.54-16.45H115.8c-21.5 0-40.52 11.95-50.14 30.95L2.516 285.2C-3.359 297.2 1.391 311.6 13.27 317.5c13.1 7 27.37-1.25 32.12-10.75L96.01 205.7v96.63l-23.75 182.5c-1.75 13.25 7.395 25.25 20.52 26.88C93.78 511.9 94.91 512 95.91 512c11.88 0 22.35-8.752 23.85-20.88l21.25-163.1h14l51.25 78.26c1 1.375 1.625 3.127 1.625 5.002v76.76c0 13.25 10.75 24 24 24c13.25 0 23.1-10.75 23.1-24v-76.76c0-12.75-4.25-25.13-10.88-33.13L191.9 296.9V187.2l41.62 48.38c6.123 6.127 13.62 10.75 21.87 13.63l46.37 15.38l-13.84 38.26c-3.025 8.266 1.059 17.41 9.321 20.44l15.3 5.563c8.375 3 17.5-1.25 20.5-9.625l46.15-126.9l67.65 24.63c11.25 4.125 18.62-4.75 20.5-9.625l43.66-120.2C514.1 78.77 509.7 69.65 501.5 66.65zM433.1 160.1l-120.2-43.75l21.88-60.13l120.2 43.75L433.1 160.1z"/>
</>],
['solid',<>
	<path d="M143.1 96.03c26.5 0 47.1-21.5 47.1-48S170.4 .021 143.1 .021S96 21.53 96 48.03S117.5 96.03 143.1 96.03zM501.5 66.65l-67.7-24.63L439.2 27c3-8.25-1.25-17.5-9.498-20.5l-15-5.5c-8.375-2.999-17.5 1.25-20.5 9.625L388.7 25.65l-67.63-24.62c-8.375-2.999-17.5 1.219-20.5 9.594l-43.87 120.3c-3 8.375 1.375 17.5 9.625 20.5l67.62 24.62L320.1 212l-47.75-16L223.9 146.8C211.7 134.6 195.7 127.9 178.7 127.9H115.8c-24.37 0-46.28 13.6-57.16 35.35l-55.25 110.5c-7.875 15.75-1.5 35 14.38 42.88C22.25 318.9 27.25 320 31.1 320c11.75 0 23-6.5 28.62-17.75l19.38-38.63v54.75l-15.88 158.4c-1.75 17.62 11.16 33.38 28.66 35C93.78 511.9 94.91 512 95.91 512c16.25 0 30.09-12.25 31.84-28.75L140.9 352h15.38l35.75 71.5V480c0 17.75 14.25 32 31.1 32c17.75 0 32-14.25 32-32v-56.5c0-9.875-2.25-19.75-6.75-28.62l-41.12-82.5V221.3l19.1 20c7 7 15.62 12.25 25 15.5l46.13 15.38l-11.33 30.74c-3 8.375 1.331 17.51 9.706 20.51l14.92 5.495c8.25 3 17.5-1.25 20.5-9.625l46.15-126.9l67.65 24.63c8.375 3 17.5-1.25 20.5-9.625l43.66-120.2C514.1 78.77 509.7 69.77 501.5 66.65z"/>
</>],
['thin',<>
	<path d="M501.5 66.65l-87.24-31.76c.002-.0039-.002 .0039 0 0l9.222-24c1.594-4.125-.4687-8.766-4.594-10.34s-8.781 .4375-10.34 4.594l-9.219 24c-.043 .1113 .0449 .2168 .0078 .3281l-78.2-28.44c-1.816-.6504-3.671-.9775-5.49-.9775c-6.559 0-12.66 4.015-15.01 10.57l-43.87 120.3c-3 8.375 1.375 17.5 9.625 20.5l82.39 29.97l-52.23 135.8c-1.594 4.125 .4687 8.75 4.594 10.34C302.1 327.8 303 328 304 328c3.219 0 6.25-1.953 7.469-5.125l52.34-136.1l83.03 30.19c1.818 .6504 3.702 .9712 5.521 .9712c6.559 0 12.63-4.04 14.98-10.6l43.66-120.2C514.1 78.77 509.7 69.77 501.5 66.65zM452.3 201.1l-180.6-65.6l43.9-120.3l180.3 65.62L452.3 201.1zM143.1 104c28.71 0 52-23.29 52-52S172.6 .021 143.1 .021c-28.57 0-52 23.27-52 51.98S115.3 104 143.1 104zM143.1 16c19.85 0 36 16.15 36 36s-16.15 36-36 36s-35.1-16.15-35.1-36S124.1 16 143.1 16zM286.1 251.6C265.1 245 255.5 244.2 239.4 229.9L205.8 196.3C200.7 191.2 192.1 194.8 192.1 201.9v114.2l42.85 85.97c3.285 6.477 5.021 13.87 5.021 21.39v55.45c0 22.41-31.1 22.31-31.1 1.055v-60.28l-39.65-79.3C166.1 337.7 164.2 336 161.2 336H133.6c-4.109 0-7.551 3.115-7.961 7.205l-13.83 138.4c-2.299 21.67-33.85 17.45-31.79-3.217l15.96-159.1V229.8c0-8.438-11.37-11.13-15.15-3.588L46.31 295.1C36.76 314.2 8.297 299.7 17.68 280.9l55.25-110.5c8.129-16.26 24.75-26.53 42.92-26.53h62.89c12.65 0 24.66 5.039 33.82 14.2c56.27 56.13 48.43 48.31 52.03 51.9c1.045 .3496 14.05 5.426 33.48 13.02c4.533 1.773 9.691-.4258 11.5-4.945c1.891-4.73-.584-10.08-5.414-11.7L273.2 196L223.9 146.8C211.7 134.6 195.7 127.9 178.7 127.9H115.8c-24.24 0-46.32 13.67-57.16 35.35l-55.25 110.5c-7.875 15.75-1.5 35 14.38 42.88C22.25 318.9 27.25 320 31.1 320c11.75 0 23-6.5 28.62-17.75l19.38-38.63v54.75l-15.88 158.4c-1.75 17.62 11.16 33.38 28.66 35C93.78 511.9 94.91 512 95.91 512c16.25 0 30.09-12.25 31.84-28.75L140.9 352h15.38l35.75 71.5v54.81c0 17.35 13.08 32.82 30.41 33.65C240.9 512.8 255.1 498.3 255.1 480v-56.5c0-9.875-2.25-19.75-6.75-28.62l-41.12-82.5V221.3l19.1 20c7 7 15.62 12.25 25 15.5l29.2 9.73c3.912 1.305 8.162-.668 9.693-4.496C293.7 257.7 291.3 252.9 286.1 251.6z"/>
</>],

]);

const PersonSign: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PersonSign.displayName = "PersonSign";

export default PersonSign;
