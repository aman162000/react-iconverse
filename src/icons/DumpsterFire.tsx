
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M32.01 192.1l4.001 31.99L16 224.1C7.252 224.1 0 231.3 0 240.1V272c0 8.748 7.25 15.1 16 15.1l28.01 .0177l20 159.1L64.01 464C64.01 472.8 71.26 480 80.01 480h32.01c8.752 0 16-7.248 16-15.1v-15.1l208.8-.002c-30.13-33.74-48.73-77.85-48.73-126.3c0-35.86 19.83-82.87 52.59-129.6L32.01 192.1zM555.2 284.8c-2.375-4.5-4.875-9.123-7.75-13.1l-39.76 46.99c0 0-62.39-82.48-67.14-87.98c-32.88 40.87-49.38 64.73-49.38 91.85c0 54.49 39.88 87.98 88.89 87.98c19.63 0 37.76-6.373 52.51-16.1C565.1 368.4 573.9 321.5 555.2 284.8z"/><path className="fa-secondary" d="M551.2 163.3c-14.88 13.25-28.38 27.12-40.26 41.12c-19.5-25.74-43.63-51.99-71.01-76.36c-70.14 62.73-120 144.2-120 193.6C319.1 409.1 391.6 480 479.1 480s160-70.87 160-158.3C640.1 285 602.1 209.4 551.2 163.3zM532.6 392.6c-14.75 10.62-32.88 16.1-52.51 16.1c-49.01 0-88.89-33.49-88.89-87.98c0-27.12 16.5-50.98 49.38-91.85c4.75 5.5 67.14 87.98 67.14 87.98l39.76-46.99c2.875 4.873 5.375 9.496 7.75 13.1C573.9 321.5 565.1 368.4 532.6 392.6zM418.8 104.2L404.6 32H304.1L304 159.1h60.77C381.1 140.7 399.1 121.8 418.8 104.2zM272.1 32.12H171.5L145.9 160.1h126.1L272.1 32.12zM461.3 104.2c18.25 16.25 35.51 33.62 51.14 51.49c5.751-5.623 11.38-11.12 17.38-16.37l21.26-18.98l21.25 18.98c1.125 .9997 2.125 2.124 3.126 3.124c-.125-.7498 .2501-1.5 0-2.249l-24-95.97c-1.625-7.123-8.127-12.12-15.38-12.12H437.2l12.25 61.5L461.3 104.2zM16 160.1l97.26-.0223l25.64-127.9h-98.89c-7.251 0-13.75 4.999-15.5 12.12L.5001 140.2C-2.001 150.3 5.626 160.1 16 160.1z"/>
</>],
['light',<>
	<path d="M16 192l324.6 .0602c7.492-10.73 15.39-21.52 24.17-32.09H304L304 64h106.9l7.992 39.86l20.96-18.75l9.637 8.52L443.5 64h70.75l20.14 71.3l16.72-14.94l15.64 13.95L543.5 47.13C541.8 38.25 535.3 32 528 32h-480C40.75 32 34.25 38.25 32.5 47.13l-32 120C-2 179.8 5.625 192 16 192zM165.1 64H272l.0398 96.07H145.9L165.1 64zM61.75 64H132.5L113.3 160.1L34.63 160L61.75 64zM92.47 416L71.28 224H39.06l3.562 32H16C7.199 256 0 263.2 0 272c0 8.799 7.202 15.1 16 15.1L46.25 288l17.76 160L64.01 464C64.01 472.8 71.17 480 80.01 480S96 472.8 96 464V448l240.8 .0064C327.9 438.2 320 427.5 313.4 416H92.47zM551.2 163.3c-14.88 13.25-28.38 27.12-40.26 41.12c-19.5-25.75-43.64-51.98-71.01-76.36c-70.13 62.75-120 144.2-120 193.6C319.1 409.2 391.6 480 479.1 480s160-70.84 160-158.3C640.1 285 602.1 209.4 551.2 163.3zM494.3 446.6C489.5 447.1 485 448 480.1 448s-9.375-.875-14.13-1.375c-31.75-6.375-55.75-34.25-55.75-67.38c0-14 15.38-46.13 44.5-78.38c7.125 7.625 13.62 15.38 19.38 23l24.12 31.88l26-30.56c.125 0-.125 0 0 0c16.12 22.12 25.62 46.06 25.62 54.06C549.9 412.4 525.9 440.3 494.3 446.6zM579.8 400c1.375-6.75 2.125-13.75 2.125-20.75c0-23.38-23.5-71.5-56.5-100.9c-9.5 8.375-18 17.38-25.62 26.25C487.4 288.3 471.9 271.5 454.5 256c-44.63 39.88-76.38 91.88-76.38 123.3c0 7 .75 14 2.25 20.75c-17.5-21.62-28.5-48.75-28.5-78.38c0-31.62 32.5-93.25 88.13-149.5c16.88 16.62 32.25 34.25 45.38 51.63l24 31.88l26-30.5c4.875-5.875 9.875-11.38 15-16.88c34.38 40 57.5 91.5 57.5 113.4C608.1 351.4 597.3 378.4 579.8 400z"/>
</>],
['regular',<>
	<path d="M418.8 104.2L404.6 32H304.1L304 159.1h60.77C381.1 140.7 399.1 121.8 418.8 104.2zM461.3 104.2c18.25 16.25 35.51 33.62 51.14 51.49c5.751-5.623 11.38-11.12 17.38-16.37l21.26-18.98l21.25 18.98c1.125 .9997 2.125 2.124 3.126 3.124c-.125-.7498 .2501-1.5 0-2.249l-24-95.97c-1.625-7.123-8.127-12.12-15.38-12.12H437.2l12.25 61.5L461.3 104.2zM272.1 32.12H171.5L145.9 160.1h126.1L272.1 32.12zM106.4 400L86.39 240.1h225.4c7.876-15.75 17.45-31.89 28.83-48.01L32.01 192.1l4.001 31.99L24 224.1C10.8 224.1 0 234.9 0 248.1s10.8 23.99 24 23.99h18l22 175.9l.0033 8C64.01 469.2 74.81 480 88.02 480s24-10.8 24-23.99v-7.998l224.8-.0025c-12.75-14.25-23.47-30.36-31.47-47.98H106.4zM16 160.1l97.26-.0223l25.64-127.9h-98.89c-7.251 0-13.75 4.999-15.5 12.12L.5001 140.2C-2 150.3 5.626 160.1 16 160.1zM551.2 163.3c-14.88 13.25-28.38 27.12-40.26 41.12c-19.5-25.74-43.63-51.99-71.01-76.36c-70.14 62.73-120 144.2-120 193.6C319.1 409.1 391.6 480 479.1 480s160-70.87 160-158.3C640.1 285 602.1 209.4 551.2 163.3zM480.1 432c-61.76 0-112-49.49-112-110.3c0-22.62 24.88-74.73 72.26-126.3c22.38 23.62 30.51 35.62 68.51 85.98c40.51-47.74 39.01-45.99 41.01-48.36c26.51 35.37 42.26 73.98 42.26 88.85C592.1 382.5 541.9 432 480.1 432z"/>
</>],
['solid',<>
	<path d="M418.8 104.2L404.6 32H304.1L304 159.1h60.77C381.1 140.7 399.1 121.8 418.8 104.2zM272.1 32.12H171.5L145.9 160.1h126.1L272.1 32.12zM461.3 104.2c18.25 16.25 35.51 33.62 51.14 51.49c5.751-5.623 11.38-11.12 17.38-16.37l21.26-18.98l21.25 18.98c1.125 .9997 2.125 2.124 3.126 3.124c-.125-.7498 .2501-1.5 0-2.249l-24-95.97c-1.625-7.123-8.127-12.12-15.38-12.12H437.2l12.25 61.5L461.3 104.2zM16 160.1l97.26-.0223l25.64-127.9h-98.89c-7.251 0-13.75 4.999-15.5 12.12L.5001 140.2C-2.001 150.3 5.626 160.1 16 160.1zM340.6 192.1L32.01 192.1l4.001 31.99L16 224.1C7.252 224.1 0 231.3 0 240.1V272c0 8.748 7.251 15.1 16 15.1l28.01 .0177l20 159.1L64.01 464C64.01 472.8 71.26 480 80.01 480h32.01c8.752 0 16-7.248 16-15.1v-15.1l208.8-.002c-30.13-33.74-48.73-77.85-48.73-126.3C288.1 285.8 307.9 238.8 340.6 192.1zM551.2 163.3c-14.88 13.25-28.38 27.12-40.26 41.12c-19.5-25.74-43.63-51.99-71.01-76.36c-70.14 62.73-120 144.2-120 193.6C319.1 409.1 391.6 480 479.1 480s160-70.87 160-158.3C640.1 285 602.1 209.4 551.2 163.3zM532.6 392.6c-14.75 10.62-32.88 16.1-52.51 16.1c-49.01 0-88.89-33.49-88.89-87.98c0-27.12 16.5-50.99 49.38-91.85c4.751 5.498 67.14 87.98 67.14 87.98l39.76-46.99c2.876 4.874 5.375 9.497 7.75 13.1C573.9 321.5 565.1 368.4 532.6 392.6z"/>
</>],
['thin',<>
	<path d="M25.07 159.1l314.7-.0005c2.438 0 4.809-1.2 6.308-3.123c.042-.0537-.042 .0542 0 0c4.055-5.204 .4165-12.87-6.181-12.87h-43.85V47.1h115.8l7.048 28.18c1.05 4.201 5.341 6.711 9.555 5.712c.0518-.0122-.0518 .0122 0 0c4.305-1.008 7.048-5.303 5.976-9.592l-6.078-24.3h100.9c3.559 0 6.687 2.359 7.665 5.78l15.98 55.92c.8003 2.8 3.172 4.761 6.026 5.343c.1602 .0322 .3193 .0659 .4791 .0996c5.64 1.203 10.6-3.77 9.015-9.315l-16.13-56.43C549.3 39.1 539.9 32 529.2 32H46.87c-10.71 0-20.12 7.097-23.06 17.39L.9448 129.4c-2.388 8.341-.2017 17.13 6.027 23.49C11.66 157.7 18.36 159.1 25.07 159.1zM280 47.1v95.99H140.3l24-95.99H280zM16.32 133.8l22.86-79.99c.9844-3.406 4.141-5.78 7.688-5.78h100.9L123.8 143.1H24.02c-2.531 0-4.86-1.156-6.391-3.187C16.1 138.8 15.63 136.2 16.32 133.8zM297.7 420.1c-1.395-2.521-4.047-4.198-6.929-4.198H77.98L47.93 198.9C47.32 194.5 43.1 191.7 38.91 192C34.54 192.7 31.48 196.7 32.09 201.1l6.492 46.9H8.008c-4.422 0-8 3.593-8 7.999c0 4.406 3.578 7.999 8 7.999h32c.2891 0 .461-.2773 .7422-.3066l22.34 161.4c.5479 3.958 3.932 6.905 7.929 6.905h24.99v39.99c0 4.406 3.578 7.999 8 7.999s8-3.593 8-7.999v-39.99h178.8C296.9 431.9 300.6 425.4 297.7 420.1C297.6 420.1 297.7 420.2 297.7 420.1zM551 268.2c-1.312-2.218-3.625-3.687-6.219-3.906c-2.5-.3125-5.125 .8436-6.797 2.812l-31.3 37.18c-15.69-20.84-54.21-71.9-58.05-76.36c-1.516-1.781-3.734-2.781-6.063-2.781c-2.297-.25-4.719 1.125-6.25 2.1c-30.27 37.81-48.66 62.9-48.66 92.67c0 4.406 3.578 7.999 8 7.999c4.422 0 8-3.593 8-7.999c0-21.09 11.55-40.12 38.86-74.77c11.97 15.62 38.67 50.96 57.42 75.9c1.469 1.937 3.735 3.125 6.172 3.187c2.297-.2187 4.766-.9999 6.344-2.843l30.3-35.99l1.562 2.937c16.61 32.9 8.407 72.83-19.03 92.86c-13.31 9.624-28.94 14.72-45.19 14.72c-4.422 0-8 3.593-8 7.999s3.578 7.999 8 7.999c19.64 0 38.5-6.124 54.6-17.75c33.74-24.65 44-73.24 23.86-113.1C556.3 277.5 553.8 272.1 551 268.2zM553 163.7c-3.063-2.687-7.625-2.687-10.69 0c-11.56 10.37-22.47 21.31-32.53 32.59c-18.16-22.1-39.61-45.74-62.49-66.21c-3.031-2.687-7.641-2.718-10.67 .0313c-67.6 60.71-116.7 140.9-116.7 190.7C319.1 408.6 391.8 480 479.1 480s160-71.4 160-159.1C640.1 283.5 604.5 209.8 553 163.7zM479.1 464c-79.41 0-144-64.21-144-143.2c0-43.65 45.22-117.5 106-173.1c22.66 20.84 43.67 43.84 61.05 66.87c1.469 1.937 3.735 3.125 6.172 3.187c2.578 .1562 4.766-.9686 6.328-2.843c9.797-11.59 20.56-22.84 32.08-33.53c43.53 41.81 76.47 108.3 76.36 140.3C623.1 399.8 559.4 464 479.1 464z"/>
</>],

]);

const DumpsterFire: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

DumpsterFire.displayName = "DumpsterFire";

export default DumpsterFire;
