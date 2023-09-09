
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M320.9 322.2l-24-121.2c-7.875-39.62-33.63-73.23-69.75-91.23c-1-.5-2.125-.6249-3.125-1.125C221.7 107.5 219.2 106.6 216.7 105.1C201.5 99.85 185.2 95.98 168.7 95.98H95.1c-9.285 0-18.06 3.946-24.18 10.93L19.34 166.9C5.805 182.4 10.1 206.4 28.15 216.2C41.36 223.4 57.79 220.4 67.67 209.1l42.82-49.14h34.38L105.8 205.3l93.68 50.85l34.9-41.28l13.5 67.61L247.4 282.3L320.9 322.2zM209.7 357.3c-25.75-17.25-52.25-33.24-79.5-48.11L58.62 270.2L1.246 471.1c-4.875 16.1 5 34.74 22 39.62c17 4.875 34.63-4.998 39.5-21.99l36.63-128.1l60.63 40.37v78.86c0 17.62 14.38 31.99 32 31.99s32-14.37 32-31.99l.0022-95.93C224 373.2 218.6 363.2 209.7 357.3z"/><path className="fa-secondary" d="M311.1 416c-13.88 0-25.95 8.862-30.33 21.86l-24.75 74.07h319.9l-101.9-206.3c-11.38-22.5-43.1-23.63-56.1-2.01l-31.89 54.21L82.2 192.4L67.67 209.1C57.79 220.4 41.36 223.4 28.15 216.2l333.7 182.1l-9.837 16.87H311.1zM272 95.93c26.5 0 47.99-21.47 47.99-47.97S298.5 0 272 0S224 21.47 224 47.97S245.5 95.93 272 95.93z"/>
</>],
['light',<>
	<path d="M256 128c35.35 0 63.1-28.65 63.1-64s-28.65-64-63.1-64S192 28.65 192 64S220.7 128 256 128zM256 32c17.64 0 31.1 14.36 31.1 32S273.6 96 256 96S224 81.64 224 64S238.4 32 256 32zM215.8 370l-143.1-80C67.44 287.6 62.16 287.3 57.63 289.3c-4.562 1.969-7.937 5.969-9.156 10.8l-47.1 192c-2.125 8.562 3.062 17.25 11.66 19.39C13.44 511.8 14.73 512 16.01 512c7.187 0 13.72-4.844 15.53-12.12l42.94-171.8l117.5 65.31V496c0 8.844 7.156 16 15.1 16s15.1-7.156 15.1-16l-.0041-112C224 378.1 220.8 372.8 215.8 370zM574.2 488.5L482.4 311.5c-7.531-14.14-21.81-22.95-38.22-23.56c-17.37-1.109-31.37 7.141-40.03 20.86l-30.25 49.13l-69.94-37.65c.0313-1.062-.0625-2.141-.2813-3.234L287.8 231.1c-5.937-31.83-25.34-59.5-53.25-75.92L169.9 118.1C144.5 103.1 114.7 98.84 86.04 106C65.01 111.3 47.41 125.4 37.76 144.7L17.69 184.8C13.82 192.6 16.82 201.1 24.41 206.1l332.7 179.1l-7.623 12.38h-27.87c-19.16 0-36.22 11.83-42.44 29.45L256.9 490.6c-1.719 4.891-.9687 10.31 2.031 14.55s7.875 6.75 13.06 6.75h287.1c5.594 0 10.78-2.906 13.66-7.688C576.6 499.4 576.8 493.5 574.2 488.5zM53.26 185.3l13.12-26.25c5.469-10.97 15.47-18.98 27.41-21.97c20.47-5.078 41.78-2.062 59.94 8.656L218.3 183.7c19.94 11.72 33.81 31.47 38.06 54.22l11.84 63.11L53.26 185.3zM294.6 479.9l14.81-42.2c1.688-4.828 6.625-8.078 12.25-8.078h36.78c5.531 0 10.69-2.875 13.62-7.594l59.31-96.31c3.562-5.609 9.406-5.797 11.69-5.812c4.875 .1875 9.062 2.656 11.06 6.469l79.59 153.5H294.6z"/>
</>],
['regular',<>
	<path d="M311.1 416c-13.74 0-25.96 8.882-30.33 21.86l-24.75 74.07h319.9l-101.8-205.9c-5.248-10.48-15.74-17.22-27.49-17.72c-11.62-.373-22.67 5.263-28.66 15.25l-34.7 59.4l-82.36-46.55L279.3 191.7C267.9 136.2 218.4 96 161.8 96H110.4C94.41 96 79.16 102.8 68.52 114.8L14.06 176.1C9.252 181.5 7.143 188.8 8.331 195.9s5.547 13.39 11.86 16.95l338.8 191.5l-6.978 11.62H311.1zM69.69 185.7l34.69-39.05C105.9 144.1 108.1 144 110.4 144h51.45c33.97 0 63.62 24.14 70.37 56.64l14.77 85.3L69.69 185.7zM444.3 353.9l54.47 110.2h-119.2L444.3 353.9zM272 95.93c26.49 0 47.99-21.51 47.99-47.97C319.1 21.51 298.5 0 272 0C245.5 0 224 21.51 224 47.97C224 74.42 245.5 95.93 272 95.93zM84.72 283.6C78.22 279.6 70.21 278.8 63.13 281.7C56.03 284.5 50.71 290.5 48.78 297.9l-47.1 184c-3.344 12.83 4.328 25.94 17.16 29.28C19.97 511.8 22.02 512 24.02 512c10.66 0 20.39-7.141 23.2-17.94l39.77-152.4l89.02 55.64V488c0 13.25 10.75 24 23.1 24s23.1-10.75 23.1-24l-.0005-104c0-8.281-4.265-15.92-11.28-20.31L84.72 283.6z"/>
</>],
['solid',<>
	<path d="M272 95.93c26.5 0 47.99-21.47 47.99-47.97S298.5 0 272 0C245.5 0 224 21.47 224 47.97S245.5 95.93 272 95.93zM209.7 357.3c-25.75-17.25-52.25-33.24-79.5-48.11L58.62 270.2L1.246 471.1c-4.875 16.1 4.1 34.74 22 39.62s34.63-4.998 39.5-21.99l36.63-128.1l60.63 40.37v78.86c0 17.62 14.38 31.99 32 31.99s32-14.37 32-31.99l.0022-95.93C224 373.2 218.6 363.2 209.7 357.3zM311.1 416c-13.88 0-25.95 8.863-30.33 21.86l-24.75 74.07h319.9l-101.9-206.3c-11.38-22.49-43.1-23.63-56.1-2.01l-31.89 54.21l-65.26-35.64l-24-121.2C288.1 161.3 263.2 127.7 227.1 109.7c-1-.4999-2.125-.625-3.125-1.125c-2.25-1.125-4.752-1.1-7.252-2.625C201.5 99.85 185.2 95.98 168.7 95.98H95.1c-9.25 0-18.05 4.061-24.18 10.93l-55.95 63.92c-.75 .9998-1.5 2.124-2.25 3.249c-8.875 13.1-3 32.87 11.63 40.74l336.6 184.3l-9.837 16.87H311.1zM105.9 204.1l-23.5-12.87l28.13-32.12h34.38L105.9 204.1zM199.5 256.1l34.9-41.28l13.5 67.61L199.5 256.1z"/>
</>],
['thin',<>
	<path d="M575.1 500.3l-96.84-191.7c-6.406-12.41-18.72-20.16-32.91-20.66c-13.91-1.25-26.1 6.25-34.37 18.28l-39.3 66.22L45.16 190.2l37.75-37.78C93.34 141.1 107.7 136 122.5 136h45.22c14.66 0 29.31 3.469 42.41 10c24.78 12.41 42.87 34.94 49.59 61.81l20.53 82.13c1.062 4.25 5.219 7 9.687 5.812c4.281-1.062 6.906-5.406 5.812-9.688L275.2 203.9C267.4 172.5 246.2 146.2 217.3 131.7C201.1 124 184.8 120 167.7 120H122.5c-18.94 0-37.5 7.688-50.91 21.09L26.35 186.3C24.56 188.1 23.72 190.6 24.06 193.1C24.41 195.6 25.91 197.8 28.1 199l335.4 187.2L350.6 408h-34.25c-16.5 0-31.16 10.34-36.44 25.69l-23.5 67.59c-.8437 2.438-.4687 5.156 1.031 7.25c1.5 2.125 3.937 3.375 6.531 3.375h303.1c2.781 0 5.344-1.438 6.812-3.812C576.3 505.7 576.4 502.8 575.1 500.3zM275.2 495.9l19.81-57C298.1 430 306.7 424 316.4 424h38.81c2.812 0 5.437-1.5 6.875-3.906l62.65-105.6c4.281-6.906 11.84-10.56 20.09-10.59c8.344 .3125 15.56 4.812 19.25 11.97l90.94 180H275.2zM263.1 112c30.87 0 55.1-25.12 55.1-56S294.9 0 263.1 0s-55.1 25.12-55.1 56S233.1 112 263.1 112zM263.1 16c22.06 0 39.1 17.94 39.1 40S286.1 96 263.1 96c-22.06 0-39.1-17.94-39.1-40S241.9 16 263.1 16zM190.5 358.4L68.28 281.3C66.06 279.8 63.38 279.6 61.06 280.6C58.69 281.5 56.91 283.5 56.25 286l-55.1 215.1c-1.094 4.281 1.469 8.625 5.75 9.75C6.658 511.9 7.346 512 8.002 512c3.562 0 6.812-2.375 7.75-5.1l53.25-205.4l112.9 71.28c16.34 10.31 26.09 28.03 26.09 47.38V504c0 4.406 3.594 8 7.1 8s7.1-3.594 7.1-8v-84.72C223.1 394.4 211.5 371.7 190.5 358.4z"/>
</>],

]);

const PersonDigging: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PersonDigging.displayName = "PersonDigging";

export default PersonDigging;
