
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M393.9 240c26.65-23.03 29.62-63.29 6.586-89.93C388.3 135.1 370.6 127.9 351.1 128h-5.879c5.898-16.25 7.366-33.76 4.323-50.78c-9.375-51.14-58.4-85.04-109.6-75.7c25.78 35.74 17.67 85.63-18.08 111.4C209.1 122.8 192.8 128 175.9 128H159.9c-35.22-.1699-63.98 28.24-64.15 63.45C95.69 210.1 103.9 227.8 117.1 240H393.9zM451.4 369.1l.3926-.2988c-3.574-.5547-7.187-.8339-10.8-.8398H70.84c-3.605 .0059-7.203 .287-10.76 .8398c.1387 .1094 .332 .208 .4824 .3076c-39.2 6.297-65.94 43.19-59.64 82.38C6.518 486.4 36.64 511.1 71.92 512h368.1C479.7 512.1 511.9 479.8 512 440.1C512.1 404.7 486.3 374.7 451.4 369.1z"/><path className="fa-secondary" d="M479.1 311v2c.0199 21.89-10.07 42.55-27.35 55.1c-3.854-.6527-7.755-.9873-11.66-1H70.84c-3.909 .0128-7.81 .3474-11.66 1c-17.27-13.45-27.37-34.11-27.35-55.1v-2c0-39.21 31.8-70.1 71.02-70.1h306.1C448.2 240 479.1 271.8 479.1 311z"/>
</>],
['light',<>
	<path d="M472.7 348.3c6.727-12.65 10.33-26.86 10.33-41.65c0-39.51-25.7-73.13-61.26-85.03c2.24-7.496 3.395-15.37 3.395-23.47c0-37.01-24.53-68.41-58.19-78.77C367.2 116.7 367.3 114 367.3 111.3C367.3 49.94 317.4 0 256 0C255.7 0 254.1 .0195 253.7 .0313C242.8 .3867 232.8 6.326 227.2 15.77c-5.564 9.445-5.908 21.08-.9102 30.83C229.7 53.32 231.5 60.5 231.5 67.93c0 26.36-21.44 47.8-47.8 47.8H169.2c-45.44 0-82.4 36.96-82.4 82.4c0 8.1 1.154 15.97 3.393 23.47C54.63 233.5 28.93 267.1 28.93 306.6c0 14.79 3.605 28.99 10.33 41.64C15.3 364.4 0 391.7 0 422.4C0 471.8 40.21 512 89.63 512h332.7C471.8 512 512 471.8 512 422.4C512 391.7 496.7 364.4 472.7 348.3zM422.4 480H89.63C57.86 480 32 454.1 32 422.4c0-28.37 20.42-52.21 48.53-56.7c6.494-1.059 8.539-9.358 3.34-13.31c-14.58-11.1-22.94-27.75-22.94-45.72c0-31.78 25.86-57.63 57.63-57.63h12.78c6.927 0 10.07-8.605 4.9-13.1C124.1 226.1 118.8 212.7 118.8 198.1c0-27.8 22.6-50.4 50.4-50.4H183.7c43.1 0 79.8-35.8 79.8-79.8c0-12.5-2.975-24.73-8.705-35.92c42.01-1.361 80.57 33.62 80.57 79.32c0 8.617-1.633 17.5-4.855 26.38c-1.869 5.142 .3608 10.02 12.32 10.02c27.79 0 50.4 22.61 50.4 50.4c0 14.55-6.199 27.97-17.44 37.77C370.6 240.4 373.7 249 380.7 249h12.78c31.78 0 57.63 25.86 57.63 57.63c0 17.97-8.355 34.62-22.94 45.72c-5.194 3.952-3.163 12.25 3.34 13.31C459.6 370.2 480 394 480 422.4C480 454.1 454.1 480 422.4 480z"/>
</>],
['regular',<>
	<path d="M481.8 331.1c2.875-9.5 4.25-19.37 4.25-29.62c0-38.88-20.1-73-52.12-91.62C433.1 208 433.1 206 433.1 204c0-37.88-21.25-71-52.37-87.88C376.5 51.25 322.1 0 256 0C248.4 0 241.8 1 236.3 1.875C219.8 4.5 205.9 15.38 199.4 30.75C193 46.12 195 63.75 204.8 77.25C206.9 80.25 208 83.5 208 87C208 96.38 200.4 104 191 104H177.1c-55.12 0-100 44.88-100 100c0 2 0 4 .1253 5.875C47 228.5 25.1 262.6 25.1 301.5c0 10.25 1.5 20.12 4.25 29.62C11.38 350.4 0 376.6 0 405.5C0 464.2 47.75 512 106.5 512h299C464.3 512 512 464.2 512 405.5C512 376.6 500.6 350.4 481.8 331.1zM405.5 464h-299C74.25 464 48 437.8 48 405.5c0-29.12 21.38-53.13 49.25-57.63c-14-10.63-23.25-27.38-23.25-46.38c0-32.25 26.25-58.5 58.5-58.5H144C133 233.5 125.1 219.6 125.1 204c0-28.75 23.25-52 52-52H191C226.9 152 256 122.9 256 87c0-14.12-4.625-27.12-12.25-37.75C247.8 48.62 251.8 48 256 48c43.13 0 77.1 34.88 77.1 78c0 9.125-1.875 17.87-4.75 25.1h4.75c28.75 0 52 23.25 52 52c0 15.62-6.1 29.5-17.1 39h11.5c32.25 0 58.5 26.25 58.5 58.5c0 19-9.25 35.75-23.25 46.38C442.6 352.4 464 376.4 464 405.5C464 437.8 437.8 464 405.5 464z"/>
</>],
['solid',<>
	<path d="M512 440.1C512 479.9 479.7 512 439.1 512H71.92C32.17 512 0 479.8 0 440c0-35.88 26.19-65.35 60.56-70.85C43.31 356 32 335.4 32 312C32 272.2 64.25 240 104 240h13.99C104.5 228.2 96 211.2 96 192c0-35.38 28.56-64 63.94-64h16C220.1 128 256 92.12 256 48c0-17.38-5.784-33.35-15.16-46.47C245.8 .7754 250.9 0 256 0c53 0 96 43 96 96c0 11.25-2.288 22-5.913 32h5.879C387.3 128 416 156.6 416 192c0 19.25-8.59 36.25-22.09 48H408C447.8 240 480 272.2 480 312c0 23.38-11.38 44.01-28.63 57.14C485.7 374.6 512 404.3 512 440.1z"/>
</>],
['thin',<>
	<path d="M461.4 361.6c12.61-14.09 19.62-32.14 19.62-51.31c0-41.56-32.8-75.63-73.86-77.66c7.656-11.38 11.86-24.78 11.86-38.59c0-36.89-28.69-67.22-64.94-69.81C356 116.4 357 108.6 357 101C357 45.31 311.7 0 256 0C250.6 0 245.4 .75 240.1 1.547C237.4 1.953 235.1 3.781 233.1 6.344C232.9 8.891 233.2 11.84 234.8 14.09C243.5 26.17 248 40.14 248 54.5C248 92.83 216.8 124 178.5 124H163c-38.59 0-70 31.41-70 70c0 13.81 4.203 27.22 11.86 38.59C63.8 234.6 31 268.7 31 310.3c0 19.17 7.016 37.22 19.62 51.31C20.56 372.6 0 401.2 0 434.3C0 477.1 34.88 512 77.75 512h356.5C477.1 512 512 477.1 512 434.3C512 401.2 491.4 372.6 461.4 361.6zM434.3 496H77.75C43.7 496 16 468.3 16 434.3c0-30.39 21.88-55.94 52-60.75c3.156-.5156 5.719-2.859 6.5-5.953c.7656-3.109-.375-6.375-2.922-8.312C55.95 347.3 47 329.5 47 310.3c0-34.05 27.7-61.75 61.75-61.75h13.69c3.344 0 6.328-2.062 7.484-5.188c1.172-3.125 .2813-6.656-2.234-8.844C115.6 223.1 109 209.6 109 194C109 164.2 133.2 140 163 140h15.5C225.6 140 264 101.6 264 54.5c0-13.39-3.188-26.5-9.328-38.48C255.1 16 255.6 16 256 16c46.88 0 85 38.13 85 85c0 9.234-1.75 18.75-5.203 28.27c-.8906 2.453-.5313 5.188 .9687 7.328S340.7 140 343.3 140H349c29.78 0 54 24.22 54 54c0 15.59-6.641 29.97-18.69 40.47c-2.516 2.188-3.406 5.719-2.234 8.844c1.156 3.125 4.141 5.188 7.484 5.188h13.69c34.05 0 61.75 27.7 61.75 61.75c0 19.25-8.953 37.09-24.58 48.98c-2.547 1.938-3.688 5.203-2.922 8.312c.7813 3.094 3.344 5.438 6.5 5.953c30.12 4.812 52 30.36 52 60.75C496 468.3 468.3 496 434.3 496z"/>
</>],

]);

const Poop: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Poop.displayName = "Poop";

export default Poop;
