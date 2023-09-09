
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M398.7 425.8l-88.35-182.3c-5.928-13.6-6.191-28.1-.7305-42.79l73.28-179.1c3.217-8.111-.75-17.29-8.861-20.51c-6.725-2.668-14.4-.4258-18.64 5.443L241.3 163.2c-8.692 12.02-21.82 20.08-36.47 22.4L13.32 215.9C5.521 217.2-.1652 224 .0028 231.9c.1797 7.93 6.214 14.69 14.1 15.54l189.7 20.53c14.75 1.594 28.26 8.1 37.53 20.58l130.3 153.5c4.963 6.189 13.74 7.742 20.53 3.629C398.1 441.6 401.8 433 398.7 425.8zM255.1 248c-13.26 0-24-10.74-24-23.1c0-13.26 10.74-23.1 24-23.1c13.25 0 23.1 10.74 23.1 23.1C279.1 237.3 269.3 248 255.1 248z"/><path className="fa-secondary" d="M383.2 500.4c.5568 1.109 .8462 2.335 .8462 3.578c.0039 4.418-3.578 8.001-7.997 8.003H135.1c-1.225-.0078-2.44-.299-3.536-.8458c-3.952-1.979-5.552-6.783-3.573-10.73c6.252-12.5 19.02-20.4 33-20.42h48.33l12.68-206.2C229.9 277.4 236.3 282.3 241.4 288.6l52.43 61.77l7.979 129.6h48.33C364.1 479.1 376.9 487.9 383.2 500.4z"/>
</>],
['light',<>
	<path d="M404.1 395.5l-78.02-163.3C324.2 225.7 324 218.3 326.5 212l64.81-160.7c7.453-19.06-1.875-40.91-20.94-48.72c-16-6.281-34.09-1-44.03 12.97L225.5 156C221.4 161.7 215.4 165.4 208.6 166.5L39.42 193.7C21.14 196.7 7.625 213 8 231.9c.4687 18.75 14.77 34.41 33.27 36.44l167.6 18.41c6.75 .7187 13.14 4.312 17.78 10.19L240 312.9V480h-96C135.2 480 128 487.2 128 496S135.2 512 144 512h224c8.844 0 16-7.156 16-16S376.8 480 368 480h-96v-128.9l69.3 82.74C349.2 443.8 359.1 448 370.3 448c7.234 0 14.22-2.031 19.81-5.531C405.9 432.8 412.3 412.7 404.1 395.5zM373.3 415.3c-.0469-.0313-4 2.406-7.125-1.594L251.5 276.7C241.8 264.5 227.5 256.6 212.3 254.9L44.75 236.5C42.16 236.3 40.06 233.9 40 231.2C39.94 228.3 41.88 225.7 44.5 225.3l169.1-27.16c15.34-2.469 28.8-10.84 37.86-23.53l100.9-140.4c1.016-1.438 2.641-2.219 4.25-2.219c.5938 0 1.188 .125 1.75 .3438c2.859 1.156 4.25 4.469 3.172 7.219l-64.8 160.6c-5.578 14.19-5.281 30.47 1.062 45.28l77.84 162.9C376.6 410.8 375.6 413.8 373.3 415.3zM256 208C247.2 208 239.1 215.2 239.1 224c0 8.836 7.164 16 16 16c8.836 0 15.1-7.164 15.1-16C271.1 215.2 264.8 208 256 208z"/>
</>],
['regular',<>
	<path d="M360 464h-32.52l-.8516-25.54l-49.99-58.88L279.5 464H232.5l4.373-131.2L216.1 309.3C212.5 303.7 206.6 300.5 200.4 299.8L190 298.7L184.5 464H152C138.7 464 128 474.7 128 488C128 501.3 138.7 512 152 512h208c13.25 0 24-10.75 24-24C384 474.7 373.3 464 360 464zM398.7 425.8l-88.35-182.3c-5.928-13.6-6.191-28.1-.7305-42.79l73.28-179.1c3.217-8.111-.7501-17.29-8.861-20.51c-6.725-2.668-14.4-.4258-18.64 5.443L241.3 163.2C232.6 175.2 219.5 183.3 204.8 185.6L13.32 215.9C5.521 217.2-.1652 224 .0028 231.9c.1797 7.93 6.214 14.69 14.1 15.54l189.7 20.53c14.75 1.594 28.26 8.1 37.53 20.58l130.3 153.5c4.963 6.189 13.74 7.742 20.53 3.629C398.1 441.6 401.8 433 398.7 425.8zM255.1 248c-13.26 0-24-10.74-24-23.1c0-13.26 10.74-23.1 24-23.1c13.25 0 23.1 10.74 23.1 23.1C279.1 237.3 269.3 248 255.1 248z"/>
</>],
['solid',<>
	<path d="M398.7 425.8l-88.35-182.3c-5.928-13.6-6.191-28.1-.7305-42.79l73.28-179.1c3.217-8.111-.75-17.29-8.861-20.51c-6.725-2.668-14.4-.4258-18.64 5.443L241.3 163.2c-8.692 12.02-21.82 20.08-36.47 22.4L13.32 215.9C5.521 217.2-.1652 224 .0028 231.9c.1797 7.93 6.214 14.69 14.1 15.54l189.7 20.53c14.75 1.594 28.26 9 37.53 20.58l130.3 153.5c4.963 6.189 13.74 7.742 20.53 3.629C398.1 441.6 401.8 433 398.7 425.8zM255.1 248c-13.26 0-24-10.74-24-23.1c0-13.26 10.74-23.1 24-23.1c13.25 0 23.1 10.74 23.1 23.1C279.1 237.3 269.3 248 255.1 248zM350.1 479.1h-48.33l-4.996-76.66L220.1 314l-10.79 165.1H161.9c-13.98 .0156-26.75 7.918-33 20.42c-1.979 3.951-.3784 8.756 3.573 10.73c1.096 .5469 2.311 .838 3.536 .8458h240c4.418-.002 8.001-3.585 7.997-8.003c0-1.242-.2895-2.468-.8462-3.578C376.9 487.9 364.1 479.1 350.1 479.1z"/>
</>],
['thin',<>
	<path d="M256 208C247.2 208 239.1 215.2 239.1 224c0 8.836 7.164 16 16 16c8.836 0 15.1-7.164 15.1-16C271.1 215.2 264.8 208 256 208zM376 496h-66.74l-5.291-80.53c-.25-4.375-3.375-8.312-8.5-7.438c-4.406 .2813-7.75 4.094-7.438 8.5L293.3 496H218.8l13.14-175.4C232.3 316.2 229 312.3 224.6 312C220.4 311.2 216.3 315 216 319.4L202.8 496H136C131.6 496 128 499.6 128 504s3.578 7.1 7.985 7.1h240c4.406 0 7.997-3.596 7.997-8.003S380.4 496 376 496zM398.1 415.5l-84.81-175.9c-4.812-11.13-5.062-23.91-.6562-35.04L383 31.79c4.688-11.88-1.125-25.38-13-30.16c-9.875-3.906-21.12-.625-27.28 8.002L233.1 160.7C225.1 170.7 215.4 177.2 203.3 179.1L19.53 208.4C8.156 210.2-.2472 220.1 .0028 231.9C.284 243.6 9.188 253.4 20.66 254.6l182.2 19.85c11.94 1.281 23.12 7.439 30.78 17.04l124.1 147.8c9.268 11.71 23.36 9.51 30.28 5.252C398.7 438.6 402.7 426.1 398.1 415.5zM370.9 429.2L245.1 281.3C235.8 268.6 220.7 260.3 204.6 258.5L22.38 238.7c-8.17-.8691-8.611-13.17-.3438-14.5l183.8-29.25c16.31-2.596 30.59-11.41 40.25-24.82l109.6-151.2c4.936-6.844 15.52-.8574 12.47 6.846l-70.38 172.8c-5.969 15.13-5.688 32.38 .9375 47.66l84.75 175.7C386.5 429.5 376.4 436.1 370.9 429.2z"/>
</>],

]);

const WindTurbine: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

WindTurbine.displayName = "WindTurbine";

export default WindTurbine;
