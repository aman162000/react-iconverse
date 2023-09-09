
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M255.1 160v96C255.1 273.6 270.4 288 287.1 288s32-14.4 32-31.1L319.1 160c0-88.37-71.63-160-160-160H95.97C95.97 88.38 167.6 160 255.1 160z"/><path className="fa-secondary" d="M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1c-8.748 0-15.1 7.274-15.1 16.02L.0001 496C.0001 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3zM319.1 160c88.38 0 160-71.63 160-160h-64c-52.6 0-98.84 25.71-127.1 64.89C307.8 91.54 319.1 124.2 319.1 160z"/>
</>],
['light',<>
	<path d="M248.9 192H272v48C272 248.8 279.2 256 288 256C296.8 256 304 248.8 304 240V192h23.12C411.4 192 480 113 480 16C480 7.164 472.8 0 464 0h-39.13C364.9 0 313 40.13 288 98.13C263 40.13 211.1 0 151.1 0H112C103.2 0 96 7.164 96 16C96 113 164.6 192 248.9 192zM424.9 32h22.38c-6.625 71.88-58 128-120 128h-22.5C311.4 88.13 362.8 32 424.9 32zM151.1 32C213.3 32 264.5 88.13 271.3 160h-22.5c-62 0-113.4-56.13-120-128H151.1zM558.2 333.6c-9.5-8.619-22-13.37-35.12-13.37c-12.5 0-24.88 4.248-34.62 12.12l-61.45 49.21c-1.928 1.545-4.324 2.385-6.795 2.385h-41.62c4.625-9.619 6.5-20.74 4.75-32.23C379.4 323.7 353.7 304 325.6 304H181.2c-20.75 0-40.1 6.746-57.5 19.24l-38.5 28.73H16c-8.801 0-16 7.195-16 15.99S7.198 383.1 15.1 383.1l80.01-.0238l46.86-35.25c11.12-8.244 24.62-12.74 38.37-12.74h146.7c13.25 0 24 10.74 24 23.99s-10.75 23.98-24 23.98H239.1c-8.75 0-16 7.246-16 15.99c0 8.746 7.25 15.99 16 15.99h180.2c9.625 0 19-3.248 26.62-9.246l61.62-49.22c4.25-3.373 9.5-5.248 14.62-5.248c5 0 9.875 1.75 13.75 5.248c10.12 9.119 9.375 24.48-.875 32.61l-100.7 80.58c-7.584 6.064-17.01 9.369-26.72 9.369H16c-8.801 0-15.1 7.189-15.1 15.98S7.198 512 15.1 512h392.5c17 0 33.38-5.871 46.62-16.37l100.9-80.7c12.25-9.744 19.5-24.36 19.1-39.98C576.5 359.3 569.1 344.2 558.2 333.6z"/>
</>],
['regular',<>
	<path d="M250.8 192h13.25v40C264 245.2 274.8 256 288 256s24.02-10.8 24.02-23.1V192h13.25c85.39 0 154.8-75.38 154.8-168c0-13.25-10.75-24-24-24H418.8c-55.26 0-103.4 31.75-130.8 79C260.7 31.75 212.5 0 157.3 0H120C106.8 0 96.01 10.75 96.01 23.1C96.01 116.6 165.4 192 250.8 192zM418.8 48h11.13c-9.876 54.75-53.01 96-104.5 96h-11.13C324.2 89.25 367.3 48 418.8 48zM157.3 48c51.51 0 94.64 41.25 104.5 96H250.7c-51.51 0-94.64-41.25-104.5-96H157.3zM551.1 312c-31.13-26.38-69.26-16.12-88.39-1.75l-60.38 45.5h-3.375c-.1251-38-30.5-67.88-69.13-67.88H186.7c-28.38 0-56.38 9.375-78.51 26.37L79.76 336H24C10.8 336 0 346.8 0 359.1S10.8 384 24 384l72-.0244l41.26-31.48C151.3 341.8 168.8 336 186.8 336h144c27.88 0 29 40.25-1.125 40.25h-59.88c-7.501 0-13.75 6.125-13.75 13.75c0 7.625 6.251 13.87 13.75 13.87h134.6c9.711 0 19.16-3.159 26.92-9l61.26-46.12c8.251-6.125 20.5-6.625 28.38 0c10.13 8.5 9.376 23.12-.8751 30.75l-100.6 75.5C411.7 460.8 402.3 464 392.6 464H24C10.8 464 0 474.8 0 487.1S10.8 512 24 512h368.8c20 0 39.38-6.5 55.26-18.5l100.8-75.88c16.63-12.5 26.5-31.5 27.13-52C576.7 345.1 567.8 325.5 551.1 312z"/>
</>],
['solid',<>
	<path d="M479.1 0h-64c-40.75 0-77.52 15.75-105.8 40.75c25.38 32 40.88 72.25 41.5 116C424.8 142 479.1 77.5 479.1 0zM255.1 160v96C255.1 273.6 270.4 288 287.1 288s32-14.4 32-31.1L319.1 160c0-88.37-71.63-160-160-160H95.97C95.97 88.38 167.6 160 255.1 160zM568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1c-8.748 0-15.1 7.274-15.1 16.02L.0001 496C.0001 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3z"/>
</>],
['thin',<>
	<path d="M247.1 160h55.1v88c0 4.406 3.578 8 7.1 8s7.1-3.594 7.1-8v-96c0-83.81-68.19-152-151.1-152H103.1C99.57 0 95.1 3.594 95.1 8C95.1 91.81 164.2 160 247.1 160zM167.1 16c72.29 0 131.6 56.72 135.8 128H247.1c-72.29 0-131.6-56.72-135.8-128H167.1zM346.2 100.7C370.1 67.19 406.1 48 444.9 48h50.86c-3.812 71.28-58.28 128-124.7 128h-19.08c-4.422 0-7.1 3.594-7.1 8S347.6 192 351.1 192h19.08c77.7 0 140.9-68.19 140.9-152c0-4.406-3.578-8-7.1-8h-59.08c-44.08 0-84.81 21.62-111.7 59.34c-2.562 3.594-1.734 8.594 1.875 11.16C338.6 105.1 343.6 104.3 346.2 100.7zM566.6 323.6c-7.64-10.38-18.84-17.12-31.55-19.03c-12.77-2-25.31 1.25-35.58 8.875L381.1 400H263.1c-4.344 0-7.1-3.656-7.1-7.969c0-4.344 3.656-8 7.1-8h78.23c20.36 0 38.09-14.31 41.26-33.34c1.906-11.72-1.359-23.59-8.984-32.53c-7.625-8.969-18.76-14.12-30.53-14.12H183.1c-28.72 0-56.83 9.969-79.15 28.03l-44.3 35.97H7.1C3.578 368 0 371.6 0 376s3.578 8 7.1 8h58.22l48.69-39.53c19.48-15.78 44.01-24.47 69.08-24.47h159.1c7.078 0 13.77 3.094 18.34 8.469c4.64 5.469 6.547 12.44 5.39 19.59c-1.891 11.38-12.84 19.94-25.48 19.94H263.1c-13.23 0-23.1 10.78-23.1 24S250.7 416 263.1 416h123.2l121.8-89.72c6.859-5.094 15.31-7.094 23.69-5.938c8.468 1.281 15.94 5.781 21.05 12.72c5.062 6.875 7.156 15.31 5.875 23.75c-1.281 8.469-5.765 15.91-12.66 20.97l-135.1 99.5C395.5 489.3 375.3 496 354.1 496H7.1C3.578 496 0 499.6 0 504S3.578 512 7.1 512h346.1c23.72 0 47.33-7.75 66.45-21.84l135.1-99.5c10.31-7.594 17.06-18.75 18.98-31.44C577.4 346.6 574.2 333.9 566.6 323.6z"/>
</>],

]);

const HandHoldingSeedling: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HandHoldingSeedling.displayName = "HandHoldingSeedling";

export default HandHoldingSeedling;
