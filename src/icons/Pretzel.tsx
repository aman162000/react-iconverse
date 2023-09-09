
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M535.3 243.1C541.1 222.2 544 200.7 544 179.3C544 98.09 477.6 32 396 32C353.4 32 315 49.97 288 78.69C260.1 49.97 222.6 32 180 32C98.41 32 32 98.09 32 179.3c0 21.38 2.906 42.83 8.688 63.8c14.69 53.25 48 98.23 92.31 129.3l-31.75 44.2c-12.91 17.94-8.812 42.94 9.125 55.83c17.91 12.86 42.88 8.797 55.81-9.141l39.94-55.56c23.72 7.094 48.88 10.89 74.75 10.89h14.25c25.88 0 51.03-3.797 74.75-10.89l39.94 55.56C417.6 474.2 429.9 480 442.3 480c8.094 0 16.25-2.438 23.31-7.516c17.94-12.89 22.03-37.89 9.125-55.83L443 372.5C487.3 341.3 520.6 296.4 535.3 243.1zM228.6 239.4L179.7 307.5C149.8 286.9 127.5 257.1 117.8 221.9C113.1 207.9 112 193.5 112 179.3C112 142.2 142.5 112 180 112S248 142.2 248 179.3C248 201 241.3 221.8 228.6 239.4zM295.1 338.7H280.9c-8.094 0-16.09-.5313-23.94-1.562L288 293.9l31.06 43.23C311.2 338.1 303.2 338.7 295.1 338.7zM458.2 221.9c-9.719 35.22-32.03 64.98-61.84 85.67l-48.97-68.13C334.7 221.8 328 201 328 179.3C328 142.2 358.5 112 396 112S464 142.2 464 179.3C464 193.5 462 207.9 458.2 221.9z"/>
</>],
['light',<>
	<path d="M535.3 253.9C541.1 232.7 544 210.9 544 189.1C544 102.5 474 32 388 32C351.6 32 315.1 45.2 288 68.66C260 45.2 224.4 32 188 32C101.1 32 32 102.5 32 189.1c0 21.83 2.938 43.61 8.688 64.7c12.67 46.89 40.75 88.69 78.69 120.3l-19.94 28.23c-8.625 12.17-12 27.02-9.5 41.84c2.562 14.75 10.72 27.64 23 36.3c24.41 17.12 60.84 10.81 77.94-13.48l29.97-42.43c17.78 5.465 35.94 8.35 53.96 8.35h26.38c18.02 0 36.18-2.885 53.95-8.348l29.92 42.36c10.47 14.88 27.59 23.75 45.81 23.75c11.66 0 22.81-3.547 32.25-10.23c12.25-8.641 20.38-21.52 22.94-36.31c2.5-14.78-.875-29.62-9.5-41.77l-19.95-28.26C494.6 342.5 522.6 300.7 535.3 253.9zM301.2 400.9H274.8c-11.36 0-22.77-1.791-34.12-4.445l47.09-66.66c.3652 .4551 .8398 .748 1.244 1.152l46.27 65.51C323.9 399.1 312.5 400.9 301.2 400.9zM438.6 348.5l-79.94-113.1C349.1 221.8 344 205.8 344 189.1C344 164.2 363.8 144 388 144S432 164.2 432 189.1c0 11.88-1.594 23.8-4.75 35.45c-2.25 8.266-5.375 16.39-9.375 24.14c-4.031 7.859-.9062 17.5 6.938 21.53c7.844 4.016 17.5 .9375 21.56-6.938c4.969-9.734 8.938-19.97 11.75-30.38C462 218.5 464 203.8 464 189.1C464 146.6 429.9 112 388 112S312 146.6 312 189.1c0 23.34 7.094 45.73 20.5 64.77l99 140.1l.002-.002l18.94 26.85c3.719 5.188 5.156 11.56 4.062 17.88c-1.062 6.328-4.562 11.84-9.844 15.56c-10.38 7.344-26.09 4.625-33.44-5.812c-123.4-174.7-102.6-144.6-120.1-173.1C285.5 267.9 275.6 265.8 268.2 270.5c-7.438 4.781-9.594 14.69-4.781 22.11l5.475 8.5l-104.1 147.4c-7.375 10.42-22.97 13.12-33.41 5.766c-5.281-3.719-8.781-9.234-9.844-15.52c-1.094-6.359 .3438-12.73 4.062-17.95l18.93-26.82L144.5 394l99-140.2C256.9 234.9 264 212.5 264 189.1C264 146.6 229.9 112 188 112S112 146.6 112 189.1c0 14.7 1.969 29.44 5.875 43.8C120.7 243.4 124.7 253.6 129.7 263.3c4.062 7.859 13.75 10.91 21.56 6.875c7.844-4.062 10.94-13.7 6.875-21.56C154.2 240.1 151 232.9 148.8 224.5C145.6 212.9 144 200.1 144 189.1C144 164.2 163.8 144 188 144S232 164.2 232 189.1c0 16.72-5.062 32.72-14.62 46.28l-79.94 113.1c-31.97-27.22-55.13-63.3-65.88-103.1C66.53 227 64 208.1 64 189.1C64 120.1 119.6 64 188 64c32.97 0 65.25 13.72 88.53 37.63c12.76 13.07 8.46 8.23 18.16 20.36C297.8 125.9 302.5 128 307.2 128c3.5 0 7.031-1.141 10-3.5c6.906-5.516 8-15.59 2.5-22.48l-8.307-10.39C333.2 74.23 360.2 64 388 64C456.4 64 512 120.1 512 189.1c0 18.98-2.531 37.94-7.562 56.38C493.7 285.3 470.5 321.3 438.6 348.5z"/>
</>],
['regular',<>
	<path d="M560 202C560 108.3 482.8 32 388 32C351.9 32 316.9 43.43 288 63.83C259.1 43.43 224.1 32 188 32C93.16 32 16 108.3 16 202c0 22.77 3.148 45.6 9.357 67.87C37.67 313.9 62.26 353.5 96.27 384.8l-9.295 12.74c-23.38 32.2-16.25 77.3 15.83 100.6c12.35 8.998 26.99 13.77 42.32 13.77c22.88 0 44.62-11 58.14-29.43l23.28-31.94C244.5 454.2 262.8 456 281.4 456h13.19c18.56 0 36.91-1.809 54.87-5.396l23.18 31.81C386.3 500.1 407.1 512 430.9 512c15.36 0 30.04-4.797 42.44-13.87c31.96-23.25 39.09-68.36 15.78-100.5l-9.359-12.83c34.01-31.33 58.6-70.88 70.9-114.9C556.9 247.6 560 224.8 560 202zM504.4 256.1c-13.94 49.89-47.22 91.33-91.19 118.1l37.03 50.77c7.781 10.72 5.438 25.73-5.281 33.53C440.7 462.5 435.8 464 430.9 464c-7.406 0-14.72-3.422-19.44-9.859C278.8 272.2 291.5 289.7 288 284.2c-3.74 5.844-2.078 3.369-50.94 70.39C251.3 358.1 266.2 360 281.4 360h2.184l33.68 46.14C309.7 406.9 302.3 408 294.6 408H281.4c-25.94 0-51-4.281-74.31-12.22l-42.53 58.36c-4.719 6.43-12.04 9.834-19.45 9.834c-4.902 0-9.842-1.492-14.09-4.584c-10.72-7.797-13.06-22.81-5.281-33.53c211.7-290.2 41.12-56.41 117.9-161.8C256.1 245.8 264 224.4 264 202C264 161.2 229.9 128 188 128S112 161.2 112 202c0 14.06 1.969 28.22 5.844 42.08C124.6 268.2 137.9 289.3 154.1 307.1l-29.02 38.91c-25.34-24.38-44.73-54.47-54.38-89.03C66.56 238.9 64 220.4 64 202C64 134.7 119.6 80 188 80c75.01 0 89.69 52 116 52c6.156 0 12.28-2.344 16.97-7.031c7.564-7.564 8.715-18.78 4.072-27.81C343.5 86.37 364.1 80 388 80C456.4 80 512 134.7 512 202C512 220.4 509.4 238.9 504.4 256.1zM160 202C160 187.7 172.6 176 188 176S216 187.7 216 202c0 12.12-3.838 23.79-11.1 33.76L182.4 266.7C173.9 256 167.7 244 164.1 231.2C161.4 221.5 160 211.7 160 202zM388 128c-41.91 0-76 33.2-76 74c0 22.36 7.031 43.81 20.31 62.05l52.56 72.13c35.5-20.48 62.34-52.91 73.28-92.09C462 230.2 464 216.1 464 202C464 161.2 429.9 128 388 128zM411.9 231.2c-3.598 12.89-9.83 24.9-18.3 35.54L371.1 235.8C363.8 225.8 360 214.1 360 202c0-14.34 12.56-26 28-26S416 187.7 416 202C416 211.7 414.6 221.5 411.9 231.2z"/>
</>],
['solid',<>
	<path d="M535.3 243.1C541.1 222.2 544 200.7 544 179.3C544 98.09 477.6 32 396 32C353.4 32 315 49.97 288 78.69C260.1 49.97 222.6 32 180 32C98.41 32 32 98.09 32 179.3c0 21.38 2.906 42.83 8.688 63.8c14.69 53.25 48 98.23 92.31 129.3l-31.75 44.2c-12.91 17.94-8.812 42.94 9.125 55.83c17.91 12.86 42.88 8.797 55.81-9.141l39.94-55.56c23.72 7.094 48.88 10.89 74.75 10.89h14.25c25.88 0 51.03-3.797 74.75-10.89l39.94 55.56C417.6 474.2 429.9 480 442.3 480c8.094 0 16.25-2.438 23.31-7.516c17.94-12.89 22.03-37.89 9.125-55.83L443 372.5C487.3 341.3 520.6 296.4 535.3 243.1zM228.6 239.4L179.7 307.5C149.8 286.9 127.5 257.1 117.8 221.9C113.1 207.9 112 193.5 112 179.3C112 142.2 142.5 112 180 112S248 142.2 248 179.3C248 201 241.3 221.8 228.6 239.4zM295.1 338.7H280.9c-8.094 0-16.09-.5313-23.94-1.562L288 293.9l31.06 43.23C311.2 338.1 303.2 338.7 295.1 338.7zM458.2 221.9c-9.719 35.22-32.03 64.98-61.84 85.67l-48.97-68.13C334.7 221.8 328 201 328 179.3C328 142.2 358.5 112 396 112S464 142.2 464 179.3C464 193.5 462 207.9 458.2 221.9z"/>
</>],
['thin',<>
	<path d="M535.3 258.1C541.1 238.1 544 216.7 544 195.3C544 114.1 477.6 48 396 48c-41.16 0-80.03 16.9-108 46.65C260 64.9 221.2 48 180 48C98.41 48 32 114.1 32 195.3c0 21.39 2.906 42.83 8.656 63.72c14.29 51.96 47.15 97.49 92.64 129.3l-32.17 44.8c-12.75 17.88-8.562 42.78 9.344 55.48c6.781 4.85 14.81 7.4 23.22 7.4c12.91 0 25.06-6.219 32.56-16.65l40.16-55.95c24.09 7.182 49.02 11.21 74.46 11.21h14.25c25.38 0 50.26-4.025 74.3-11.17l40.32 55.93C417.3 489.8 429.4 496 442.3 496c8.344 0 16.38-2.566 23.22-7.4c17.91-12.73 22.09-37.64 9.281-55.54l-32.12-44.74C488.2 356.5 521.1 310.9 535.3 258.1zM295.1 418.7H280.9c-21.99 0-43.51-3.502-64.46-9.225l29.96-41.73c11.35 1.994 22.91 3.201 34.5 3.201h14.25c11.49 0 22.93-1.197 34.18-3.152l30.09 41.73C338.5 415.2 317 418.7 295.1 418.7zM256.8 353.2c8.646-12.04 22.6-31.46 30.95-43.09l31.11 43.15c-7.865 1.025-15.78 1.734-23.72 1.734H280.9C272.8 354.1 264.8 354.3 256.8 353.2zM433.2 375.1l-85.78-119.5C334.7 237.9 328 217 328 195.3c0-37.31 30.5-67.66 68-67.66S464 157.9 464 195.3c0 14.26-1.969 28.62-5.844 42.71c-6.188 22.51-17.38 42.89-33.19 60.6c-2.938 3.279-2.656 8.301 .6562 11.22c3.312 2.908 8.344 2.658 11.28-.6523c17.5-19.54 29.84-42.07 36.69-66.97C477.8 226.7 480 210.9 480 195.3c0-46.08-37.69-83.57-84-83.57S312 149.2 312 195.3c0 25.11 7.75 49.19 22.44 69.64l127.3 177.4c7.688 10.74 5.188 25.7-5.531 33.33c-10.53 7.385-26.12 4.756-33.5-5.551L276.6 267.3C274 263.8 269 262.1 265.4 265.5C261.9 268.1 261.1 273.1 263.6 276.7l14.27 19.8c-10.44 14.54-41.68 58.03-41.68 58.03l-82.97 115.6c-7.438 10.34-23.12 12.94-33.47 5.566C109 468 106.5 453.1 114.2 442.3l127.4-177.5C256.3 244.4 264 220.4 264 195.3c0-46.08-37.69-83.57-84-83.57S96 149.2 96 195.3C96 210.9 98.16 226.7 102.4 242.2C109.3 267.1 121.6 289.6 139.1 309.1c2.906 3.279 7.969 3.529 11.28 .6523c3.312-2.922 3.594-7.943 .6562-11.22c-15.81-17.71-27-38.09-33.19-60.58C113.1 223.9 112 209.5 112 195.3c0-37.31 30.5-67.66 68-67.66S248 157.9 248 195.3c0 21.78-6.719 42.66-19.44 60.38l-85.79 119.5C100.3 345.4 69.4 303.2 56.09 254.8C50.72 235.3 48 215.2 48 195.3c0-72.41 59.22-131.3 132-131.3c77.03 0 110.4 59.55 117.5 69.44c1.562 2.162 4 3.328 6.5 3.328c1.625 0 3.25-.4824 4.656-1.479c3.594-2.564 4.406-7.539 1.844-11.12l-11.92-16.6c25.08-27.5 60-43.58 97.42-43.58c72.78 0 132 58.92 132 131.3c0 19.98-2.719 40-8.094 59.51C506.6 303.2 475.7 345.4 433.2 375.1z"/>
</>],

]);

const Pretzel: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Pretzel.displayName = "Pretzel";

export default Pretzel;