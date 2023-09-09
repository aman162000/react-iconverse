
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M634.9 502.8c-8.125 10.41-23.19 12.28-33.69 4.078L9.189 42.89c-10.44-8.172-12.26-23.27-4.068-33.7C9.84 3.156 16.91 0 24.03 0c5.156 0 10.37 1.672 14.78 5.109l591.1 463.1C641.2 477.3 643.1 492.4 634.9 502.8z"/><path className="fa-secondary" d="M191.1 356.9c-10.05-2.978-20.72-4.895-32.01-4.895c-53.02 0-95.1 35.82-95.1 79.1c0 44.18 42.98 79.1 95.1 79.1s95.1-35.77 95.1-79.95l.0268-134.8L191.1 247.2V356.9zM543.1 0c-2.719 0-7.031 .6615-9.625 1.49L214.4 95.97c-11.98 3.775-21.62 16.75-22.2 29.36l108.1 85.42l210.8-61.76V292.9c-10.05-2.978-20.72-4.895-32.01-4.895c-22.15 0-42.23 6.574-58.42 17.11l137.1 107.5c10.58-12.76 17.33-27.86 17.33-44.57l.0004-336C575.1 14.34 561.7 0 543.1 0z"/>
</>],
['light',<>
	<path d="M633.9 483.4L25.92 3.42c-6.938-5.453-17-4.25-22.48 2.641c-5.469 6.938-4.281 17 2.641 22.48l608 480C617 510.9 620.5 512 623.1 512c4.734 0 9.422-2.094 12.58-6.078C642 498.1 640.8 488.9 633.9 483.4zM544 32.63v93.63L343.6 193.1l30.06 23.73L544 160v148.8C527 296 504.7 287.1 479.1 287.1c-5.002 0-9.801 .6128-14.6 1.226l109.7 86.58c.3066-2.605 .9417-5.133 .9417-7.806l.0004-336C575.1 13.74 561.8 0 545.5 0c-3.25 0-6.375 .5-9.25 1.5l-290.9 96c-4.842 1.631-8.848 4.699-12.28 8.33l26.29 20.76L544 32.63zM224 372.8C207 360 184.7 351.1 159.1 351.1c-53 0-95.1 35.75-95.1 79.1s42.1 79.1 95.1 79.1s95.1-35.7 95.1-79.95L256 287L224 261.8V372.8zM160 480c-34.75 0-64-22-64-48S125.3 384 160 384s64 22 64 48S194.8 480 160 480z"/>
</>],
['regular',<>
	<path d="M630.8 469.1l-72.14-56.54c8.521-10.45 14.51-22.48 16.33-35.69c.625-2.75 .875-5.5 1-8.25L575.1 31.99C575.1 14.36 561.7 0 543.1 0c-3.25 0-6.5 .4896-9.625 1.49L230.4 97.5C217.1 101.8 208 114 208 128v9.715L38.81 5.109C28.34-3.063 13.32-1.25 5.121 9.187c-8.172 10.44-6.354 25.53 4.068 33.7L601.2 506.9C605.6 510.3 610.8 512 615.1 512c7.125 0 14.16-3.161 18.9-9.193C643.1 492.4 641.2 477.3 630.8 469.1zM521.4 383.3l-57.65-45.19C468.8 336.9 474.1 336 480 336c28.25 0 48 16.88 48 32C528 373.2 525.5 378.5 521.4 383.3zM528 299.1c-15-7.375-31.38-11.13-48.01-11.13c-22.19 0-42.25 6.539-58.42 17.11l-92.21-72.27L528 170.1V299.1zM528 119.8L283.5 196.9L256 175.3V139.8l272-85.88V119.8zM208 363.1c-15-7.375-31.38-11.13-48.01-11.13c-53 0-95.1 35.75-95.1 79.1s42.1 79.1 95.1 79.1c49.38 0 89.51-31.12 94.88-71.12c.75-2.75 1.118-5.952 1.118-8.827L256 296.9L208 259.3V363.1zM160 464c-28.25 0-48-16.88-48-32s19.75-32 48-32s48 16.88 48 32S188.3 464 160 464z"/>
</>],
['solid',<>
	<path d="M191.1 356.9c-10.05-2.978-20.72-4.895-32.01-4.895c-53.02 0-95.1 35.82-95.1 79.1c0 44.18 42.98 79.1 95.1 79.1s95.1-35.77 95.1-79.95l.0268-134.8L191.1 247.2V356.9zM630.8 469.1l-72.14-56.54c10.58-12.76 17.33-27.86 17.33-44.57l.0004-336C575.1 14.34 561.7 0 543.1 0c-2.719 0-7.031 .6615-9.625 1.49L214.4 95.97c-11.98 3.775-21.62 16.75-22.2 29.36L38.81 5.109C34.41 1.672 29.19 0 24.03 0C16.91 0 9.84 3.156 5.121 9.187c-8.187 10.44-6.37 25.53 4.068 33.7L601.2 506.9c10.5 8.203 25.57 6.328 33.69-4.078C643.1 492.4 641.2 477.3 630.8 469.1zM511.1 292.9c-10.05-2.978-20.72-4.895-32.01-4.895c-22.15 0-42.23 6.574-58.42 17.11L301.2 210.8l210.8-61.76V292.9z"/>
</>],
['thin',<>
	<path d="M273.2 93.84l255.9-76.8c7.312-2.203 15.12-.8125 21.19 3.734c6.156 4.578 9.687 11.59 9.687 19.27v67.55l-225.8 67.75l15.25 12.12l210.6-63.18v199.6c-17.19-21.62-46.55-35.93-80.01-35.93c-1.266 0-2.467 .2723-3.721 .3134l22.1 17.56c29.11 5.529 51.96 23.74 59.08 46.96l18.55 14.74V40.04c0-12.77-5.875-24.47-16.12-32.09c-10.28-7.625-23.16-9.906-35.37-6.219L268.6 78.51C256.5 82.13 247.2 91.4 242.9 102.8l13.71 10.9C257.8 104.5 264.1 96.54 273.2 93.84zM240.1 388c-17.17-21.68-46.57-36.02-80.07-36.02c-53.02 0-95.1 35.82-95.1 79.1c0 44.18 42.98 79.1 95.1 79.1s95.1-35.77 95.1-79.95l.0268-134.8l-15.96-12.77V388zM159.1 496c-44.11 0-79.1-28.71-79.1-64c0-35.29 35.89-64 79.1-64s79.1 28.71 79.1 64C239.1 467.3 204.1 496 159.1 496zM636.1 497.7l-623.1-496c-1.463-1.164-3.217-1.73-4.963-1.73c-2.352 0-4.689 1.029-6.287 3.012c-2.75 3.469-2.172 8.5 1.281 11.25l623.1 496c1.484 1.172 3.234 1.734 4.984 1.734c2.344 0 4.688-1.031 6.266-3.016C641 505.5 640.4 500.5 636.1 497.7z"/>
</>],

]);

const MusicSlash: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MusicSlash.displayName = "MusicSlash";

export default MusicSlash;