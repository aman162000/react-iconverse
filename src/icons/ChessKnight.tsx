
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M19 272.5l40.62 18C63.78 292.3 68.25 293.3 72.72 293.3c4 0 8.001-.7543 11.78-2.289l12.75-5.125c9.125-3.625 16-11.12 18.75-20.5L125.2 234.8C127 227.9 131.5 222.2 137.9 219.1L160 208v50.38C160 276.5 149.6 293.1 133.4 301.2L76.25 329.9C49.12 343.5 32 371.1 32 401.5V416h319.9l-.0417-192c0-105.1-85.83-192-191.8-192H12C5.375 32 0 37.38 0 44c0 2.625 .625 5.25 1.75 7.625L16 80L7 89C2.5 93.5 0 99.62 0 106V243.2C0 255.9 7.5 267.4 19 272.5zM52 128C63 128 72 137 72 148S63 168 52 168S32 159 32 148S41 128 52 128z"/><path className="fa-secondary" d="M384 496c0 8.836-7.162 16-16 16h-352C7.164 512 0 504.8 0 495.1c0-14.16 6.246-26.76 16-35.54V432C16 423.2 23.16 416 32 416h319.9c8.838 0 16.02 7.162 16.02 16L368 460.5C377.8 469.2 384 481.8 384 496z"/>
</>],
['light',<>
	<path d="M64 164C64 175 73 184 84 184S104 175 104 164S95 144 84 144S64 153 64 164zM35.5 301.6c38 16.88 36.75 16.5 40.38 17.75C28.77 351.3 32.06 387.4 32.06 400c0 8.836 7.102 16 15.94 16S64 408.8 64 400c0-39.61 11.33-43.32 80.63-84c14.12-7 23-21.5 23-37.25V216.5L151.5 226.1C145.1 228.9 141.1 233.8 140.6 239.8l-8 26.5C130.2 274.4 124.1 280.1 116.2 284.1L105 288.5C98.11 291.2 90.4 291 83.63 288L48.5 272.4C38.5 268 32 258 32 247V128c0-10.38 6.5-15 13.88-22.5L33.5 81C28.88 71.63 35.13 64 42.38 64H128c106 0 192 85.96 192 192v144c0 8.836 7.164 16 16 16s16-7.164 16-16V256c0-123.7-100.3-224-224-224H44.34C22.92 32 3.344 47.03 .4199 68.24C-.8652 77.57 .8359 86.92 5 95.25l2.625 5.5C2.625 109 0 118.4 0 128.1v119C0 270.6 13.88 292 35.5 301.6zM336 448H47.1C21.53 448 0 469.5 0 495.1C0 504.8 7.156 512 16 512S32 504.8 32 496C32 487.2 39.19 480 48 480h288c8.812 0 16 7.188 16 16c0 8.844 7.156 16 16 16s16-7.156 16-16C384 469.5 362.5 448 336 448z"/>
</>],
['regular',<>
	<path d="M44 320.6l14.5 6.5c-17.01 20.24-26.44 45.91-26.44 72.35C32.06 399.7 32.12 432 32.12 432h48v-32c0-24.75 14-47.5 36.13-58.63l38.13-23.37c13.25-6.625 21.75-20.25 21.75-35.13v-58.75l-15.37 9C155.6 235.8 151.9 240.4 150.5 245.9L143 271c-2.25 7.625-8 13.88-15.38 16.75L117.1 292C114 293.3 110.7 293.9 107.4 293.9c-3.626 0-7.263-.7514-10.66-2.254L63.5 276.9C54.12 272.6 48 263.2 48 252.9V140.5c0-5.125 2.125-10.12 5.75-13.88l7.375-7.375L49.5 96C48.5 94.12 48 92 48 89.88C48 84.38 52.38 80 57.88 80h105c86.75 0 156.1 70.38 156.1 157.1V432h48.06l-.0625-194.9C367.9 124 276 32 162.9 32H57.88C25.88 32 0 57.88 0 89.88c0 8.5 1.75 16.88 5.125 24.62C1.75 122.8 0 131.6 0 140.5v112.4C0 282.2 17.25 308.8 44 320.6zM80.12 164c0 11 8.875 20 20 20c11 0 20-9 20-20s-9-20-20-20C89 144 80.12 153 80.12 164zM360 464H23.1C10.75 464 0 474.7 0 487.1S10.75 512 23.1 512H360C373.3 512 384 501.3 384 488S373.3 464 360 464z"/>
</>],
['solid',<>
	<path d="M19 272.5l40.62 18C63.78 292.3 68.25 293.3 72.72 293.3c4 0 8.001-.7543 11.78-2.289l12.75-5.125c9.125-3.625 16-11.12 18.75-20.5L125.2 234.8C127 227.9 131.5 222.2 137.9 219.1L160 208v50.38C160 276.5 149.6 293.1 133.4 301.2L76.25 329.9C49.12 343.5 32 371.1 32 401.5V416h319.9l-.0417-192c0-105.1-85.83-192-191.8-192H12C5.375 32 0 37.38 0 44c0 2.625 .625 5.25 1.75 7.625L16 80L7 89C2.5 93.5 0 99.62 0 106V243.2C0 255.9 7.5 267.4 19 272.5zM52 128C63 128 72 137 72 148S63 168 52 168S32 159 32 148S41 128 52 128zM336 448H47.1C21.49 448 0 469.5 0 495.1C0 504.8 7.163 512 16 512h352c8.837 0 16-7.163 16-16C384 469.5 362.5 448 336 448z"/>
</>],
['thin',<>
	<path d="M23.89 274.5l40.61 18c5.189 2.307 10.78 3.471 16.35 3.471c5.034 0 10.05-.9489 14.75-2.862l12.73-5.109c11.47-4.578 20.02-13.94 23.44-25.62l9.344-30.97c1.188-4.641 4.172-8.344 8.469-10.45l10.53-5.281v50.67c0 14.95-8.719 28.97-22.2 35.72l-57.14 28.62C50.31 346 32.13 374.9 32.13 408c0 4.422 3.578 8 8 8s8-3.578 8-8c0-26.91 14.89-50.44 39.83-62.97l57.13-28.62c18.86-9.438 31.05-29.06 31.05-50.03V202.7c0-2.932-2.283-8.004-8.013-8.004c-1.227 0-2.453 .2847-3.581 .863L142.5 206.7c-8.391 4.109-14.53 11.7-16.77 20.5L116.5 257.8C114.4 264.8 109.3 270.4 102.4 273.2L89.63 278.3c-2.795 1.134-5.79 1.702-8.804 1.702c-3.338 0-6.7-.6969-9.837-2.093l-40.61-18C21.72 256 16.13 247.4 16.13 237.1V114c0-4.25 1.703-8.391 4.656-11.34l9-9C31.32 92.12 32.13 90.06 32.13 87.98c0-1.217-.2772-2.442-.8481-3.578L17.11 56.2C16.47 54.84 16.13 53.39 16.13 52c0-2.203 1.797-4 4-4h140C258.8 48 336 128.8 336 232v176c0 4.422 3.578 8 8 8S352 412.4 352 408v-176C352 119.8 267.6 32 160 32H20.13c-11.03 0-20 8.969-20 20c0 3.75 .875 7.562 2.594 11.22L14.39 86.42L9.469 91.34C3.438 97.38 .125 105.4 .125 114v123.1C.125 253.8 9.438 268.1 23.89 274.5zM64 144C64 152.8 71.2 160 80 160S96 152.8 96 144C96 135.2 88.8 128 80 128S64 135.2 64 144zM328 448h-272C25.13 448 0 473.1 0 504C0 508.4 3.578 512 8 512s8-3.578 8-8c0-22.06 17.94-40 40-40h272c22.06 0 40 17.94 40 40c0 4.422 3.578 8 8 8S384 508.4 384 504C384 473.1 358.9 448 328 448z"/>
</>],

]);

const ChessKnight: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ChessKnight.displayName = "ChessKnight";

export default ChessKnight;
