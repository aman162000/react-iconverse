
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M247.1 200l-31.96-.011L215.1 168c0-13.2-10.78-24-23.98-24C178.8 144 167.1 154.8 167.1 168l.0367 31.99L135.1 200c-13.2 0-23.98 10.8-23.98 24c0 13.2 10.77 24 23.98 24l32.04-.0098L167.1 280c0 13.2 10.82 24 24.02 24c13.2 0 23.98-10.8 23.98-24l.0368-32.01L247.1 248c13.2 0 24.02-10.8 24.02-24C271.1 210.8 261.2 200 247.1 200z"/><path className="fa-secondary" d="M640 384.2c0-5.257-.4576-10.6-1.406-15.98l-33.38-211.6C591.4 77.96 522 32 319.1 32C119 32 48.71 77.46 34.78 156.6l-33.38 211.6c-.9487 5.383-1.406 10.72-1.406 15.98c0 51.89 44.58 95.81 101.5 95.81c49.69 0 93.78-30.06 109.5-74.64l7.5-21.36h203l7.5 21.36c15.72 44.58 59.81 74.64 109.5 74.64C595.4 479.1 640 436.1 640 384.2zM247.1 248l-31.96-.0098L215.1 280c0 13.2-10.78 24-23.98 24c-13.2 0-24.02-10.8-24.02-24l.0367-32.01L135.1 248c-13.2 0-23.98-10.8-23.98-24c0-13.2 10.77-24 23.98-24l32.04-.011L167.1 168c0-13.2 10.82-24 24.02-24c13.2 0 23.98 10.8 23.98 24l.0368 31.99L247.1 200c13.2 0 24.02 10.8 24.02 24C271.1 237.2 261.2 248 247.1 248zM432 311.1c-22.09 0-40-17.92-40-40c0-22.08 17.91-40 40-40s40 17.92 40 40C472 294.1 454.1 311.1 432 311.1zM496 215.1c-22.09 0-40-17.92-40-40c0-22.08 17.91-40 40-40s40 17.92 40 40C536 198.1 518.1 215.1 496 215.1z"/>
</>],
['light',<>
	<path d="M638.6 368.2l-33.38-211.6c-4.422-25.12-16.52-47.82-34.05-65.77s-40.5-31.18-66.62-37.36c-25.12-5.93-58.4-11.3-91.79-15.19S345.8 32 319.1 32C294.2 32 260.6 34.41 227.2 38.29S160.6 47.56 135.5 53.48C109.3 59.66 86.36 72.88 68.83 90.83S39.2 131.5 34.78 156.6l-33.38 211.6c-5.156 29.26 4.195 57.21 22.67 77.84c18.48 20.63 46.08 33.95 77.42 33.95c24.84 0 48.29-7.512 67.49-20.6c19.2-13.09 34.15-31.75 42.01-54.04l7.5-21.36h203l7.5 21.36c7.859 22.29 22.81 40.95 42.01 54.04c19.2 13.09 42.64 20.6 67.49 20.6c31.34 0 58.95-13.31 77.42-33.95C634.4 425.4 643.8 397.5 638.6 368.2zM592.1 424.7C578.8 439.5 559.3 448 538.5 448c-17.92 0-35.03-5.203-49.46-15.04c-14.1-9.615-24.43-22.84-29.84-38.2l-7.5-21.36c-4.502-12.82-16.61-21.4-30.19-21.4h-203c-13.59 0-25.69 8.58-30.19 21.4l-7.486 21.32c-5.43 15.4-15.76 28.62-29.86 38.24C136.5 442.8 119.4 448 101.5 448c-20.79 0-40.32-8.49-53.58-23.3c-12.92-14.42-18.24-32.51-14.9-51.5l33.28-211C69.52 143.9 78.31 126.9 91.72 113.2c13.69-14.02 31.37-23.9 51.13-28.56C165.1 79.17 197.3 74 230.9 70.08C264.6 66.16 296.2 64 320 64c23.75 0 55.38 2.16 89.05 6.08c33.67 3.922 64.96 9.088 88.1 14.55c.2656 .0625 .5352 .123 .8047 .1777c19.42 4.738 36.8 14.54 50.31 28.39c13.42 13.75 22.21 30.68 25.34 48.41l33.47 212.2C610.3 392.2 605 410.3 592.1 424.7zM432 248c-6.627 0-12.63 2.684-16.97 7.029c-4.344 4.344-7.029 10.35-7.029 16.97s2.685 12.62 7.029 16.96c4.344 4.346 10.34 7.038 16.97 7.038c6.629 0 12.63-2.692 16.97-7.038c4.344-4.344 7.029-10.34 7.029-16.96s-2.686-12.63-7.029-16.97C444.6 250.7 438.6 248 432 248zM496 152c-6.627 0-12.63 2.685-16.97 7.031c-4.344 4.344-7.029 10.35-7.029 16.97s2.685 12.62 7.029 16.96c4.344 4.346 10.34 7.036 16.97 7.036c6.629 0 12.63-2.69 16.97-7.036c4.344-4.344 7.029-10.34 7.029-16.96s-2.686-12.63-7.029-16.97C508.6 154.7 502.6 152 496 152zM256 208H208V160c0-8.844-7.18-16-16.02-16S176 151.2 176 160v48H128C119.2 208 111.1 215.2 111.1 224S119.2 240 128 240h48V288c0 8.844 7.132 16 15.98 16S208 296.8 208 288V240H256c8.844 0 15.98-7.156 15.98-16S264.8 208 256 208z"/>
</>],
['regular',<>
	<path d="M639.1 357.2c0-6.198-.4631-12.49-1.421-18.83l-27.5-181.3C603.5 107.4 581.8 32 319.1 32C57.05 32 36.44 106.9 28.83 157.1l-27.37 181.3C.4734 344.8 0 351.1 0 357.4C0 423.9 53.35 480 121.2 480c46.12-.125 88.37-26.5 108.6-68L243.6 384h152.7l13.75 28c20.25 41.5 62.25 67.88 108.4 68C586.5 480 639.1 423.8 639.1 357.2zM591.1 357.2c0 17.99-6.413 35.55-18.26 49.46c-13.66 16.14-33.73 25.38-54.82 25.38c-.1417 0-.2834-.0004-.4252-.0013c-27.75 0-52.75-15.75-65.25-41.13l-18.32-37.05C429.5 342.9 418.4 336 406.2 336H233.7c-12.17 0-23.29 6.907-28.69 17.82l-18.32 37.05c-4.671 9.482-23.54 41.13-65.92 41.13c-21.09 0-41.04-9.357-54.58-25.38c-11.85-13.91-18.26-31.47-18.26-49.46c0-3.839 .292-7.697 .8855-11.54l27.5-181.3C81.2 132.5 104.1 107.5 134.8 100.6C195.8 86.88 257.9 80 319.1 80s124.2 6.875 185.1 20.62c30.75 6.875 53.62 31.88 58.5 63.75l27.5 181.3C591.7 349.5 591.1 353.3 591.1 357.2zM399.1 240c-17.62 0-31.1 14.38-31.1 32s14.37 32 31.1 32s31.1-14.38 31.1-32S417.6 240 399.1 240zM247.1 200l-31.96-.011L215.1 168c0-13.2-10.78-24-23.98-24C178.8 144 167.1 154.8 167.1 168l.0367 31.99L135.1 200c-13.2 0-23.98 10.8-23.98 24c0 13.2 10.77 24 23.98 24l32.04-.0098L167.1 280c0 13.2 10.82 24 24.02 24c13.2 0 23.98-10.8 23.98-24l.0368-32.01L247.1 248c13.2 0 24.02-10.8 24.02-24C271.1 210.8 261.2 200 247.1 200zM463.1 144c-17.62 0-31.1 14.38-31.1 32s14.37 32 31.1 32c17.62 0 31.1-14.38 31.1-32S481.6 144 463.1 144z"/>
</>],
['solid',<>
	<path d="M640 384.2c0-5.257-.4576-10.6-1.406-15.98l-33.38-211.6C591.4 77.96 522 32 319.1 32C119 32 48.71 77.46 34.78 156.6l-33.38 211.6c-.9487 5.383-1.406 10.72-1.406 15.98c0 51.89 44.58 95.81 101.5 95.81c49.69 0 93.78-30.06 109.5-74.64l7.5-21.36h203l7.5 21.36c15.72 44.58 59.81 74.64 109.5 74.64C595.4 479.1 640 436.1 640 384.2zM247.1 248l-31.96-.0098L215.1 280c0 13.2-10.78 24-23.98 24c-13.2 0-24.02-10.8-24.02-24l.0367-32.01L135.1 248c-13.2 0-23.98-10.8-23.98-24c0-13.2 10.77-24 23.98-24l32.04-.011L167.1 168c0-13.2 10.82-24 24.02-24c13.2 0 23.98 10.8 23.98 24l.0368 31.99L247.1 200c13.2 0 24.02 10.8 24.02 24C271.1 237.2 261.2 248 247.1 248zM432 311.1c-22.09 0-40-17.92-40-40c0-22.08 17.91-40 40-40s40 17.92 40 40C472 294.1 454.1 311.1 432 311.1zM496 215.1c-22.09 0-40-17.92-40-40c0-22.08 17.91-40 40-40s40 17.92 40 40C536 198.1 518.1 215.1 496 215.1z"/>
</>],
['thin',<>
	<path d="M640 384.2c0-5.257-.4576-10.6-1.406-15.98l-33.38-211.6C591.4 77.96 522 32 319.1 32C119 32 48.71 77.46 34.78 156.6l-33.38 211.6c-.9487 5.383-1.406 10.72-1.406 15.98c0 51.89 44.58 95.81 101.5 95.81c49.69 0 93.78-30.06 109.5-74.64l7.5-21.36h203l7.5 21.36c15.72 44.58 59.81 74.64 109.5 74.64C595.4 479.1 640 436.1 640 384.2zM624 384.3c0 42.6-37.11 79.69-85.51 79.69c-42.98 0-80.92-25.7-94.4-63.94l-11.26-32.06H207.2l-11.25 32.04c-13.49 38.26-51.43 63.96-94.41 63.96c-48.42 0-85.49-37.07-85.49-79.74c0-4.477 .3958-9.006 1.197-13.56L50.54 159.4c10.14-57.61 54.26-111.4 269.5-111.4c50.51 0 131.6 9.446 180.8 21.06l1.15 .2656c45.53 11.2 79.81 46.44 87.44 89.78l33.42 211.9C623.6 375.5 624 379.9 624 384.3zM256 216h-56v-56c0-4.406-3.594-8-8-8s-8 3.594-8 8v56h-56c-4.406 0-8 3.594-8 8s3.594 8 8 8h56v56c0 4.406 3.594 8 8 8s8-3.594 8-8V232h56c4.406 0 8-3.594 8-8S260.4 216 256 216zM496 135.1c-22.09 0-40 17.91-40 40s17.91 40 40 40s40-17.91 40-40S518.1 135.1 496 135.1zM496 200c-13.23 0-24-10.77-24-24c0-13.23 10.77-24 24-24s24 10.77 24 24C520 189.2 509.2 200 496 200zM432 231.1c-22.09 0-40 17.91-40 40s17.91 40 40 40s40-17.91 40-40S454.1 231.1 432 231.1zM432 296c-13.23 0-24-10.77-24-24s10.77-24 24-24s24 10.77 24 24S445.2 296 432 296z"/>
</>],

]);

const GamepadModern: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

GamepadModern.displayName = "GamepadModern";

export default GamepadModern;
