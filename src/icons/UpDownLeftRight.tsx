
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M512 256c0 6.797-2.891 13.28-7.938 17.84l-80 72C419.6 349.9 413.8 352 408 352c-3.312 0-6.625-.6875-9.766-2.078C389.6 346.1 384 337.5 384 328V288H128v40c0 9.484-5.578 18.06-14.23 21.92C110.6 351.3 107.3 352 104 352c-5.812 0-11.56-2.109-16.06-6.156l-80-72C2.891 269.3 0 262.8 0 256s2.891-13.28 7.938-17.84l80-72C95 159.8 105.1 158.3 113.8 162.1C122.4 165.9 128 174.5 128 184V224h256V184c0-9.484 5.578-18.06 14.23-21.92c8.656-3.812 18.77-2.266 25.83 4.078l80 72C509.1 242.7 512 249.2 512 256z"/><path className="fa-secondary" d="M183.1 128l39.1 .0013V224h64V128l40-.0013c9.484 0 18.06-5.578 21.92-14.23c1.391-3.141 2.072-6.448 2.072-9.76c0-5.812-2.103-11.57-6.15-16.07l-72-80c-4.562-5.047-11.05-7.936-17.85-7.936S242.7 2.893 238.2 7.94l-71.1 80c-6.344 7.062-7.891 17.17-4.078 25.83C165.9 122.4 174.5 128 183.1 128zM327.1 384l-40 .0013V288h-64v96l-39.1-.0013c-9.484 0-18.06 5.578-21.92 14.23c-3.812 8.641-2.266 18.77 4.078 25.83l71.1 80c4.562 5.047 11.05 7.937 17.84 7.937s13.28-2.89 17.84-7.937l72-80c4.047-4.5 6.15-10.24 6.15-16.06c0-3.312-.681-6.63-2.072-9.771C346.1 389.6 337.5 384 327.1 384z"/>
</>],
['light',<>
	<path d="M271.1 143.2l63.19 .0028c8.684-.0221 16.73-3.469 22.61-9.347c2.917-2.917 5.303-6.452 6.95-10.42c4.961-12.01 2.243-25.69-6.938-34.87l-79.17-79.17c-12.47-12.47-32.77-12.48-45.25 0L154.2 88.53C145 97.73 142.3 111.4 147.3 123.4c4.972 11.1 16.57 19.75 29.55 19.74L240 143.2v96.84H143.2l.0028-63.19c-.0221-8.684-3.469-16.73-9.347-22.61C130.9 151.3 127.4 148.9 123.4 147.3C111.4 142.3 97.71 145 88.53 154.2L9.359 233.4c-12.47 12.47-12.48 32.77 0 45.25l79.17 79.17c9.192 9.192 22.88 11.9 34.88 6.927s19.75-16.57 19.74-29.55L143.2 271.1h96.84v96.84l-63.19-.0027c-8.684 .0221-16.73 3.469-22.61 9.347c-2.917 2.917-5.303 6.452-6.95 10.42c-4.961 12.01-2.243 25.69 6.938 34.87l79.17 79.17c12.47 12.47 32.77 12.48 45.25 0l79.17-79.17c9.192-9.192 11.9-22.88 6.927-34.88s-16.57-19.75-29.55-19.74l-63.18-.0028V271.1h96.84l-.0027 63.19c.0221 8.684 3.469 16.73 9.347 22.61c2.917 2.917 6.452 5.303 10.42 6.95c12.01 4.961 25.69 2.243 34.87-6.938l79.17-79.17c12.47-12.47 12.48-32.77 0-45.25l-79.17-79.17c-9.192-9.192-22.88-11.9-34.88-6.927s-19.75 16.57-19.74 29.55l-.0028 63.18h-96.84V143.2zM111.2 335.2C111.2 335.2 111.3 335.3 111.2 335.2L31.99 256l79.17-79.17L111.2 335.2zM335.2 400.8C335.2 400.8 335.3 400.7 335.2 400.8L256 480l-79.17-79.17L335.2 400.8zM400.8 176.8C400.8 176.8 400.7 176.7 400.8 176.8L480 256l-79.17 79.17L400.8 176.8zM176.8 111.2C176.8 111.2 176.7 111.3 176.8 111.2L256 31.99l79.17 79.17L176.8 111.2z"/>
</>],
['regular',<>
	<path d="M512 256c0 6.797-2.891 13.28-7.938 17.84l-80 72C419.6 349.9 413.8 352 408 352c-3.312 0-6.625-.6875-9.766-2.078C389.6 346.1 384 337.5 384 328v-48h-104V384l47.1 .0026c9.484 0 18.06 5.578 21.92 14.23s2.25 18.78-4.078 25.83l-72 80C269.3 509.1 262.8 512 255.1 512s-13.28-2.89-17.84-7.937l-71.1-80c-6.328-7.047-7.938-17.17-4.078-25.83s12.44-14.23 21.92-14.23L232 384V280H128v48c0 9.484-5.578 18.06-14.23 21.92C110.6 351.3 107.3 352 104 352c-5.812 0-11.56-2.109-16.06-6.156l-80-72C2.891 269.3 0 262.8 0 256s2.891-13.28 7.938-17.84l80-72C95 159.8 105.1 158.3 113.8 162.1C122.4 165.9 128 174.5 128 184v48h104V128L183.1 128c-9.484 0-18.06-5.578-21.92-14.23S159.8 94.99 166.2 87.94l71.1-80c9.125-10.09 26.56-10.09 35.69 0l72 80c6.328 7.047 7.938 17.17 4.078 25.83s-12.44 14.23-21.92 14.23L280 128v104H384v-48c0-9.484 5.578-18.06 14.23-21.92c8.656-3.812 18.77-2.266 25.83 4.078l80 72C509.1 242.7 512 249.2 512 256z"/>
</>],
['solid',<>
	<path d="M512 256c0 6.797-2.891 13.28-7.938 17.84l-80 72C419.6 349.9 413.8 352 408 352c-3.312 0-6.625-.6875-9.766-2.078C389.6 346.1 384 337.5 384 328V288h-96v96l40-.0013c9.484 0 18.06 5.578 21.92 14.23s2.25 18.78-4.078 25.83l-72 80C269.3 509.1 262.8 512 255.1 512s-13.28-2.89-17.84-7.937l-71.1-80c-6.328-7.047-7.938-17.17-4.078-25.83s12.44-14.23 21.92-14.23l39.1 .0013V288H128v40c0 9.484-5.578 18.06-14.23 21.92C110.6 351.3 107.3 352 104 352c-5.812 0-11.56-2.109-16.06-6.156l-80-72C2.891 269.3 0 262.8 0 256s2.891-13.28 7.938-17.84l80-72C95 159.8 105.1 158.3 113.8 162.1C122.4 165.9 128 174.5 128 184V224h95.1V128l-39.1-.0013c-9.484 0-18.06-5.578-21.92-14.23S159.8 94.99 166.2 87.94l71.1-80c9.125-10.09 26.56-10.09 35.69 0l72 80c6.328 7.047 7.938 17.17 4.078 25.83s-12.44 14.23-21.92 14.23l-40 .0013V224H384V184c0-9.484 5.578-18.06 14.23-21.92c8.656-3.812 18.77-2.266 25.83 4.078l80 72C509.1 242.7 512 249.2 512 256z"/>
</>],
['thin',<>
	<path d="M505.6 240.3L421.3 154.5C416.8 150 411.4 148 405.1 148C394.8 148 384 156.9 384 170.3V248h-120V128h77.75c19.78 0 29.69-23.52 15.7-37.28l-85.75-84.32c-4.338-4.266-10.02-6.395-15.71-6.395s-11.36 2.129-15.7 6.395L154.5 90.72C140.6 104.5 150.5 128 170.2 128H248v120H128V170.3C128 156.9 117.2 148 106 148c-5.367 0-10.84 2.023-15.29 6.547L6.396 240.3C2.133 244.6 0 250.3 0 256s2.133 11.36 6.396 15.7l84.33 85.75C95.17 361.1 100.6 364 106 364C117.2 364 128 355.1 128 341.8V264h120V384H170.2c-19.78 0-29.69 23.52-15.7 37.28l85.75 84.32c4.338 4.266 10.02 6.4 15.7 6.4s11.37-2.135 15.7-6.4l85.75-84.32C371.4 407.5 361.5 384 341.8 384H264V264H384v77.75C384 355.1 394.8 364 405.1 364c5.365 0 10.83-2.023 15.28-6.547l84.33-85.75C509.9 267.4 512 261.7 512 256S509.9 244.6 505.6 240.3zM170.2 112c-3.705 0-5.219-2.352-5.793-3.75C163.8 106.7 163.5 104.3 165.8 102.1l85.75-84.33C253.1 16.23 255 16 256 16s2.887 .2344 4.482 1.805l85.75 84.33c2.25 2.211 1.955 4.547 1.312 6.117C346.1 109.6 345.5 112 341.8 112H170.2zM112 341.8C112 346.3 108.3 348 106 348c-1.439 0-2.707-.5781-3.877-1.766L17.81 260.5C16.24 258.9 16 256.1 16 256s.2363-2.883 1.805-4.484l84.33-85.75C103.3 164.6 104.6 164 106 164C108.3 164 112 165.7 112 170.3V341.8zM341.8 400c3.705 0 5.221 2.352 5.793 3.75c.6426 1.57 .9375 3.906-1.312 6.117l-85.75 84.33C258.9 495.8 256.1 496 256 496s-2.885-.2344-4.482-1.805l-85.75-84.33c-2.248-2.211-1.955-4.547-1.312-6.117C165 402.4 166.5 400 170.2 400H341.8zM494.2 260.5l-84.33 85.75C408.7 347.4 407.4 348 405.1 348C403.7 348 400 346.3 400 341.8v-171.5C400 165.7 403.7 164 405.1 164c1.438 0 2.707 .5781 3.875 1.766l84.32 85.75C495.8 253.1 496 255 496 256S495.8 258.9 494.2 260.5z"/>
</>],

]);

const UpDownLeftRight: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

UpDownLeftRight.displayName = "UpDownLeftRight";

export default UpDownLeftRight;
