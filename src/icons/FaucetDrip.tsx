
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M364.8 32L224 48L83.2 32C73.6 32 64 38.4 64 48v28.8C64 89.6 73.6 96 83.2 96L224 80L364.8 96C374.4 96 384 89.6 384 80v-32C384 38.4 374.4 32 364.8 32zM448 416c0 0-32 44.8-32 64c0 19.2 12.8 32 32 32s32-12.8 32-32C480 460.8 448 416 448 416z"/><path className="fa-secondary" d="M352 192h-38.54c-16-12.8-35.06-22.4-57.46-28.8v-48L224 112L192 115.2v48C169.6 169.6 150.5 179.2 134.5 192H16C6.4 192 0 198.4 0 208v96C0 313.6 6.4 320 16 320h92.78C127.1 358.4 172.8 384 224 384s96.02-25.6 115.2-64H352c19.2 0 32 12.71 32 31.91C384 371.1 396.8 384 416 384h64c19.2 0 32-12.8 32-32C512 262.4 441.6 192 352 192zM256 44.8V16C256 6.4 249.6 0 240 0h-32C198.4 0 192 6.4 192 16v28.8L224 48L256 44.8z"/>
</>],
['light',<>
	<path d="M434.8 390.9C424.4 406.1 400 443.6 400 464c0 26.47 21.53 48 48 48s48-21.53 48-48c0-20.41-24.36-57.91-34.83-73.09C455.2 382.3 440.8 382.3 434.8 390.9zM448 480c-8.812 0-16-7.188-16-16c.1406-4.875 6.797-18.81 16-34.34c9.203 15.53 15.86 29.47 16 34.34C464 472.8 456.8 480 448 480zM352 160h-17.75C314.6 126.3 280.4 102.2 240 97.09V64h128C376.8 64 384 56.84 384 48s-7.148-15.97-15.99-15.97L240 32V16C240 7.156 232.8 0 224 0S208 7.156 208 16V32L79.99 32.03C71.15 32.03 64 39.16 64 48S71.16 64 80 64h128v33.09C167.6 102.2 133.4 126.3 113.8 160H16C7.164 160 0 167.2 0 176C0 184.8 7.164 192 16 192h117.9C147.2 154.8 182.3 128 224 128s76.85 26.83 90.1 64H352c70.58 0 128 57.42 128 128h-64c0-35.29-28.71-64-64-64h-37.9C300.8 293.2 265.7 320 224 320S147.2 293.2 133.9 256H16C7.164 256 0 263.2 0 272C0 280.8 7.164 288 16 288h97.75C135.9 326.1 176.7 352 224 352s88.07-25.9 110.2-64h19.29c17.64 0 30.18 14.88 30.46 32.52C384.3 337.9 398.5 352 416 352h64c17.57 0 31.98-14.24 32-31.81C512.1 231.7 440.4 160 352 160z"/>
</>],
['regular',<>
	<path d="M416 480c0 17.62 14.38 32 32 32s32-14.38 32-32s-32-64-32-64S416 462.4 416 480zM368 160h-44.88C304.5 136.9 278.4 120.2 248 114.4V83.62C248 83.62 366.6 96 368 96C376.8 96 384 88.5 384 79.12V48.89c0-9.375-7.242-16.86-15.99-16.86c-1.375 0 6.117-.7754-120 13.35V16c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v29.38C73.88 31.25 81.37 32.03 79.99 32.03C71.24 32.03 64 39.51 64 48.89V79.12C64 88.5 71.25 96 80 96c1.375 0 120-12.38 120-12.38v30.75C169.6 120.2 143.5 136.9 124.9 160H23.1C10.75 160 0 170.7 0 183.1S10.75 208 23.1 208H150.8C163.5 178.9 192.3 160 224 160s60.5 18.88 73.25 48H368c53.02 0 96 42.98 96 96v32h-64v-32c0-17.6-14.4-32-32-32h-70.75C284.5 301.1 255.8 320 224 320S163.5 301.1 150.8 272H23.1C10.75 272 0 282.7 0 295.1S10.75 320 23.1 320h100.9C148.2 349 183.8 368 224 368s75.75-19 99.13-48H352v16c0 26.51 21.49 48 48 48h64c26.51 0 48-21.49 48-48v-32C512 224.5 447.5 160 368 160z"/>
</>],
['solid',<>
	<path d="M416 480c0 17.62 14.38 32 32 32s32-14.38 32-32s-32-64-32-64S416 462.4 416 480zM352 192h-38.54C297.7 178.5 277.9 168.9 256 164V116.5L224 113L192 116.5V164C170.1 169 150.3 178.6 134.5 192H16C7.125 192 0 199.1 0 208v96C0 312.9 7.125 320 16 320h92.78C129.4 357.8 173 384 224 384s94.59-26.25 115.2-64H352c17.62 0 32 14.29 32 31.91S398.4 384 416 384h64c17.62 0 32-14.38 32-32C512 263.6 440.4 192 352 192zM81.63 95.88L224 80.88l142.4 15C375.9 96.88 384 89.12 384 79.12V48.89c0-10-8.125-17.74-17.62-16.74L256 43.75V16C256 7.125 248.9 0 240 0h-32C199.1 0 192 7.125 192 16v27.75L81.63 32.14C72.13 31.14 64 38.89 64 48.89V79.12C64 89.12 72.13 96.88 81.63 95.88z"/>
</>],
['thin',<>
	<path d="M441.4 419.5c-4.688 6.781-28.06 41.53-28.06 57.88C413.3 496.4 428.9 512 448 512s34.66-15.56 34.66-34.66c0-16.34-23.38-51.09-28.06-57.88C451.6 415.1 444.4 415.1 441.4 419.5zM448 496c-10.28 0-18.66-8.375-18.66-18.66c0-6.75 9.5-24.28 18.66-38.78c9.156 14.5 18.66 32.03 18.66 38.78C466.7 487.6 458.3 496 448 496zM352 192h-38.54c-21.33-18.24-50.05-29.63-81.74-31.32C231.7 160.4 232 160.3 232 160V113.8l134.4 14.16c.5547 .0586 1.105 .0859 1.648 .0859C376.8 127.1 384 120.6 384 111.2V48.89c0-9.416-7.221-16.86-15.99-16.86c-.543 0-1.078 .0596-1.633 .1182L232 47.14V8C232 3.594 228.4 0 224 0S216 3.594 216 8v39.14L81.63 32.14c-.5547-.0586-1.09-.1182-1.633-.1182C71.22 32.03 64 39.47 64 48.89v62.27c0 9.416 7.205 16.84 15.98 16.84c.543 0 1.094-.0273 1.648-.0859L216 113.8V160c0 .2637 .2559 .4199 .2813 .6758C184.6 162.4 155.9 173.8 134.5 192H32C14.33 192 0 206.3 0 224v64c0 17.67 14.33 32 32 32h76.78C129.4 357.7 173 384 224 384s94.63-26.27 115.2-64H352c17.58 0 32.14 14.33 32 31.91C383.9 369.7 398.3 384 416 384h64c17.11 0 31.85-13.51 31.99-30.62C512.7 264.4 440.8 192 352 192zM232 63.25l136-15.17L368.1 112L232 97.67V63.25zM216 97.63L80 111.2L79.85 48.06L216 63.25V97.63zM480 368h-64c-4.275 0-8.305-1.688-11.34-4.752c-3.037-3.062-4.689-7.105-4.654-11.38c.1016-12.64-4.775-24.57-13.74-33.6C377.1 309.1 364.1 304 352 304h-22.29L325.2 312.3C306.7 346.2 267 368 224 368s-82.71-21.85-101.2-55.66L118.3 304H32C23.18 304 16 296.8 16 288V224c0-8.822 7.178-16 16-16h108.5l4.49-3.842C166.2 186 194.3 176 224 176s57.77 10 78.99 28.16L307.5 208H352c38.7 0 75.02 15.13 102.3 42.61c27.24 27.47 42.06 63.92 41.73 102.6C495.9 361.2 488.6 368 480 368z"/>
</>],

]);

const FaucetDrip: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FaucetDrip.displayName = "FaucetDrip";

export default FaucetDrip;