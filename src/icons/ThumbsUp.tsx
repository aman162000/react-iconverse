
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M128 447.1V223.1c0-17.67-14.33-31.1-32-31.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64C113.7 479.1 128 465.6 128 447.1z"/><path className="fa-secondary" d="M512 224.1c0-26.5-21.48-47.98-48-47.98h-146.5c22.77-37.91 34.52-80.88 34.52-96.02C352 56.52 333.5 32 302.5 32c-63.13 0-26.36 76.15-108.2 141.6L178 186.6C166.2 196.1 160.2 210 160.1 224c-.0234 .0234 0 0 0 0L160 384c0 15.1 7.113 29.33 19.2 38.39l34.14 25.59C241 468.8 274.7 480 309.3 480H368c26.52 0 48-21.47 48-47.98c0-3.635-.4805-7.143-1.246-10.55C434 415.2 448 397.4 448 376c0-9.148-2.697-17.61-7.139-24.88C463.1 347 480 327.5 480 304.1c0-12.5-4.893-23.78-12.72-32.32C492.2 270.1 512 249.5 512 224.1z"/>
</>],
['light',<>
	<path d="M88 192h-48C17.94 192 0 209.9 0 232v208C0 462.1 17.94 480 40 480h48C110.1 480 128 462.1 128 440v-208C128 209.9 110.1 192 88 192zM96 440C96 444.4 92.41 448 88 448h-48C35.59 448 32 444.4 32 440v-208C32 227.6 35.59 224 40 224h48C92.41 224 96 227.6 96 232V440zM512 221.5C512 187.6 484.4 160 450.5 160h-102.5c11.98-27.06 18.83-53.48 18.83-67.33C366.9 62.84 343.6 32 304.9 32c-41.22 0-50.7 29.11-59.12 54.81C218.1 171.1 160 184.8 160 208C160 217.1 167.5 224 176 224C180.1 224 184.2 222.4 187.3 219.3c52.68-53.04 67.02-56.11 88.81-122.5C285.3 68.95 288.2 64 304.9 64c20.66 0 29.94 16.77 29.94 28.67c0 10.09-8.891 43.95-26.62 75.48c-1.366 2.432-2.046 5.131-2.046 7.83C306.2 185.5 314 192 322.2 192h128.3C466.8 192 480 205.2 480 221.5c0 15.33-12.08 28.16-27.48 29.2c-8.462 .5813-14.91 7.649-14.91 15.96c0 12.19 12.06 12.86 12.06 30.63c0 14.14-10.11 26.3-24.03 28.89c-5.778 1.082-13.06 6.417-13.06 15.75c0 8.886 6.765 10.72 6.765 23.56c0 31.02-31.51 22.12-31.51 43.05c0 3.526 1.185 5.13 1.185 10.01C389 434.8 375.8 448 359.5 448H303.9c-82.01 0-108.3-64.02-127.9-64.02c-8.873 0-16 7.193-16 15.96C159.1 416.3 224.6 480 303.9 480h55.63c33.91 0 61.5-27.58 61.5-61.47c18.55-10.86 30.33-31 30.33-53.06c0-4.797-.5938-9.594-1.734-14.27c19.31-10.52 32.06-30.97 32.06-53.94c0-7.219-1.281-14.31-3.75-20.98C498.2 266.2 512 245.3 512 221.5z"/>
</>],
['regular',<>
	<path d="M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V223.1C128 206.3 113.7 191.1 96 191.1zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78c-46.61 0-59.36 32.44-69.61 58.5c-31.66 80.5-60.33 66.39-60.33 93.47c0 12.84 10.36 23.99 24.02 23.99c5.256 0 10.55-1.721 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7c16.08 0 22.06 12.75 22.06 20.79c0 7.404-7.594 39.55-25.55 71.59c-2.046 3.646-3.066 7.686-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71c-12.66 .8593-22.36 11.4-22.36 23.94c0 15.47 11.39 15.95 11.39 28.91c0 25.37-35.03 12.34-35.03 42.15c0 11.22 6.392 13.03 6.392 22.25c0 22.66-29.77 13.76-29.77 40.64c0 4.515 1.11 5.961 1.11 9.456c0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51c-4.315-3.245-9.37-4.811-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04c0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2c17.77-12.23 28.83-32.51 28.83-54.83c0-3.046-.2187-6.107-.6406-9.122c17.84-12.15 29.28-32.58 29.28-55.28c0-5.311-.6406-10.54-1.875-15.64C499.9 270.1 512 250.2 512 227z"/>
</>],
['solid',<>
	<path d="M128 447.1V223.1c0-17.67-14.33-31.1-32-31.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64C113.7 479.1 128 465.6 128 447.1zM512 224.1c0-26.5-21.48-47.98-48-47.98h-146.5c22.77-37.91 34.52-80.88 34.52-96.02C352 56.52 333.5 32 302.5 32c-63.13 0-26.36 76.15-108.2 141.6L178 186.6C166.2 196.1 160.2 210 160.1 224c-.0234 .0234 0 0 0 0L160 384c0 15.1 7.113 29.33 19.2 38.39l34.14 25.59C241 468.8 274.7 480 309.3 480H368c26.52 0 48-21.47 48-47.98c0-3.635-.4805-7.143-1.246-10.55C434 415.2 448 397.4 448 376c0-9.148-2.697-17.61-7.139-24.88C463.1 347 480 327.5 480 304.1c0-12.5-4.893-23.78-12.72-32.32C492.2 270.1 512 249.5 512 224.1z"/>
</>],
['thin',<>
	<path d="M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.32 32-31.1V223.1C128 206.3 113.7 191.1 96 191.1zM112 448c0 8.822-7.178 16-16 16H32c-8.822 0-16-7.178-16-16V224c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16V448zM512 229.5C512 199.1 487.9 176 458.2 176h-128.9C350.2 139.5 360 101.1 360 85.92C360 59.42 339.4 32 304.9 32c-67.61 0-32.66 76.37-108.1 136.8L163.2 193.6C161.1 195.1 159.1 197.6 159.1 200c0 5.952 5.424 7.995 8.012 7.995c1.655 0 3.323-.5134 4.755-1.579l33.7-24.98C285.8 117.1 253.2 48 304.8 48C329.3 48 344 67.28 344 85.92c0 12.06-9.047 49.66-30.66 85.64l-5.328 8c-.8922 1.334-1.341 2.876-1.341 4.425C306.7 188.6 310.5 192 314.7 192h143.5C479 192 496 208.8 496 229.5c0 19.5-15.47 35.84-35.23 37.19c-4.233 .3008-7.458 3.821-7.458 7.983c0 7.198 12.15 11.17 12.15 30.63c0 17.98-12.95 33.45-30.81 36.77c-2.821 .5098-6.547 3.135-6.547 7.861c0 5.129 6.812 9.568 6.812 23.58c0 16.16-10.53 30.41-26.19 35.45c-3.368 1.078-5.546 4.199-5.546 7.602c0 2.175 1.186 4.507 1.186 10.01c0 20.66-16.97 37.47-37.81 37.47h-56.03c-31.09 0-61.94-10.2-87.19-28.98l-50.91-33.69c-1.37-.9092-2.904-1.342-4.419-1.342c-4.407 0-8.003 3.585-8.003 8.001c0 2.598 1.259 5.146 3.578 6.685l50.55 33.44C241.8 468.7 276 480 310.5 480h56.03c29.67 0 53.81-23.98 53.81-53.47c0-1.641-.0781-3.281-.25-4.938c18.67-8.75 30.8-27.31 30.8-48.13c0-6.297-1.172-12.58-3.453-18.55c20.19-7.906 34-27.42 34-49.66c0-8.844-2.25-17.48-6.453-25.2C496.5 273 512 252.8 512 229.5z"/>
</>],

]);

const ThumbsUp: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ThumbsUp.displayName = "ThumbsUp";

export default ThumbsUp;