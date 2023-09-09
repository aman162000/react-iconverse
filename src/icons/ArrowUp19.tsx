
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M18.38 183.3C5.35 171.3 4.475 151.1 16.41 138L104.4 41.94c12.12-13.26 35.06-13.26 47.19 0l87.1 96.09c11.94 13.05 11.06 33.31-1.969 45.27C224.6 195.2 204.4 194.3 192.4 181.3L160 145.9v302c0 17.7-14.33 32.03-32 32.03S96 465.7 96 447.1V145.9L63.6 181.3c-6.312 6.883-14.94 10.38-23.61 10.38C32.27 191.7 24.52 188.9 18.38 183.3z"/><path className="fa-secondary" d="M320 192c0 17.69 14.31 31.1 32 31.1L416 224c17.69 0 32-14.31 32-32s-14.31-32-32-32V63.98c0-11.19-5.844-21.53-15.38-27.34c-9.531-5.781-21.41-6.188-31.34-1.062l-32 16.59c-15.69 8.125-21.81 27.44-13.69 43.13C329.3 106.3 340.4 112.6 352 112.6V160C334.3 160 320 174.3 320 192zM392 255.6c-48.6 0-88 39.4-88 88c0 36.44 22.15 67.7 53.71 81.07l-7.682 8.004c-10.72 11.16-10.34 28.88 .8125 39.56C356.3 477.4 363.3 480 370.2 480c7.344 0 14.72-2.875 20.19-8.625c69.61-72.53 89.6-85.39 89.6-127.8C480 294.1 440.6 255.6 392 255.6zM392 367.6c-13.23 0-24-10.77-24-24s10.77-24 24-24s24 10.77 24 24S405.2 367.6 392 367.6z"/>
</>],
['light',<>
	<path d="M384 256c-44.13 0-80 35.88-80 80S339.9 416 384 416c16.73 0 32.25-5.199 45.11-14.01C421.3 428.5 396.1 448 368 448c-8.844 0-16 7.156-16 16s7.156 16 16 16c52.94 0 96-43.06 96-96v-48C464 291.9 428.1 256 384 256zM384 384c-26.47 0-48-21.53-48-48S357.5 288 384 288s48 21.53 48 48S410.5 384 384 384zM336 224l96-.0039c8.844 0 16-7.152 16-15.1S440.8 192 432 192h-32V48C400 39.16 392.8 32 384 32h-32c-8.844 0-16 7.156-16 16S343.2 64 352 64h16v128h-32C327.2 192 320 199.2 320 208S327.2 224 336 224zM139.3 36.69c-6.25-6.25-16.38-6.25-22.62 0l-96 96c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L112 86.63V464c0 8.844 7.157 15.1 16 15.1S144 472.8 144 464V86.63l68.69 68.69C215.8 158.4 219.9 160 224 160s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L139.3 36.69z"/>
</>],
['regular',<>
	<path d="M352 175.1c-13.25 0-24 10.75-24 24s10.75 24.01 23.1 24.01L432 223.1c13.25 0 24-10.75 24-24s-10.75-24-24-24H416v-120c0-8.656-4.656-16.62-12.19-20.88c-7.531-4.312-16.78-4.094-24.16 .2813l-40 24c-11.38 6.844-15.06 21.56-8.25 32.94c6.812 11.34 21.5 15.06 32.94 8.25l3.656-2.219v77.63H352zM392 256c-48.6 0-88 39.4-88 88c0 42.05 29.55 77.1 68.98 85.81l-15.54 19c-8.406 10.25-6.906 25.38 3.375 33.75C365.3 486.2 370.6 488 376 488c6.938 0 13.84-3 18.56-8.812C465.1 392.1 480 382.5 480 344C480 295.4 440.6 256 392 256zM421.3 370.8l-1.443 1.762C412.6 379.6 402.8 384 392 384c-22.06 0-40-17.95-40-40S369.9 304 392 304s40 17.95 40 40C432 354.4 427.8 363.7 421.3 370.8zM145.6 39.37c-9.062-9.82-26.19-9.82-35.25 0L14.38 143.4c-9 9.758-8.406 24.96 1.344 33.93C20.35 181.7 26.19 183.8 32 183.8c6.469 0 12.91-2.598 17.62-7.723L104 117.1v338.9c0 13.26 10.75 24.02 24 24.02S152 469.2 152 455.1V117.1l54.37 58.95C215.3 185.8 230.5 186.5 240.3 177.4c9.75-8.977 10.34-24.18 1.344-33.93L145.6 39.37z"/>
</>],
['solid',<>
	<path d="M320 192c0 17.69 14.31 31.1 32 31.1L416 224c17.69 0 32-14.31 32-32s-14.31-32-32-32V63.98c0-11.19-5.844-21.53-15.38-27.34c-9.531-5.781-21.41-6.188-31.34-1.062l-32 16.59c-15.69 8.125-21.81 27.44-13.69 43.13C329.3 106.3 340.4 112.6 352 112.6V160C334.3 160 320 174.3 320 192zM392 255.6c-48.6 0-88 39.4-88 88c0 36.44 22.15 67.7 53.71 81.07l-7.682 8.004c-10.72 11.16-10.34 28.88 .8125 39.56C356.3 477.4 363.3 480 370.2 480c7.344 0 14.72-2.875 20.19-8.625c69.61-72.53 89.6-85.39 89.6-127.8C480 294.1 440.6 255.6 392 255.6zM392 367.6c-13.23 0-24-10.77-24-24s10.77-24 24-24s24 10.77 24 24S405.2 367.6 392 367.6zM39.99 191.7c8.672 0 17.3-3.5 23.61-10.38L96 145.9v302c0 17.7 14.33 32.03 31.1 32.03s32-14.33 32-32.03V145.9L192.4 181.3C204.4 194.3 224.6 195.2 237.6 183.3c13.03-11.95 13.9-32.22 1.969-45.27L151.6 41.94c-12.12-13.26-35.06-13.26-47.19 0l-87.1 96.09C4.475 151.1 5.35 171.3 18.38 183.3C24.52 188.9 32.27 191.7 39.99 191.7z"/>
</>],
['thin',<>
	<path d="M352 208c-4.422 0-8 3.594-8 8s3.579 7.998 8 7.998L416 224c4.422 0 8-3.594 8-8S420.4 208 416 208h-24V40c0-2.781-1.438-5.344-3.797-6.812c-2.359-1.438-5.312-1.594-7.781-.3438l-32 16c-3.953 1.969-5.547 6.781-3.578 10.72c1.984 3.969 6.75 5.531 10.73 3.594L376 52.94V208H352zM133.9 34.48c-3.062-3.312-8.75-3.312-11.81 0L34.09 130.5c-2.969 3.252-2.75 8.314 .5 11.32c3.25 3 8.312 2.781 11.31-.5L120 60.47V471.1c0 4.408 3.595 8.001 8.001 8.001S136 476.4 136 471.1V60.47l74.1 80.85c1.596 1.719 3.752 2.594 5.908 2.594c1.938 0 3.875-.6875 5.406-2.094c3.25-3.002 3.469-8.064 .5-11.32L133.9 34.48zM376 264c-39.7 0-72 32.31-72 72s32.3 72 72 72c22.73 0 42.79-10.8 56-27.31V408c0 30.88-25.12 56-56 56H352c-4.422 0-8 3.594-8 8S347.6 480 352 480h24c39.7 0 72-32.31 72-72V336C448 296.3 415.7 264 376 264zM376 392c-30.88 0-56-25.12-56-56s25.12-56 56-56s56 25.12 56 56S406.9 392 376 392z"/>
</>],

]);

const ArrowUp19: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ArrowUp19.displayName = "ArrowUp19";

export default ArrowUp19;