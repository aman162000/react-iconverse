
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M384 312c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24C408 301.3 397.3 312 384 312z"/><path className="fa-secondary" d="M480 128c-91.09 0-176.7 35.47-241.1 99.87l-85.66 82.69c-6.312 6.094-14.62 9.437-23.41 9.437C111.2 320 96 304.8 96 286.2c0-31.56 12.28-61.2 34.58-83.52l9.811-9.811l56.75 13.61C207.6 208.6 218.4 205.3 226 197.7l57.28-57.28c9.016-9.016 4.332-24.48-8.221-26.96L191.3 96.7L174.5 12.9C172 .3524 156.6-4.333 147.6 4.682L90.28 61.96C82.68 69.56 79.41 80.43 81.53 90.86l13.61 56.74L49.13 193.6C17.44 225.3 0 267.4 0 312.3c0 92.5 75.25 167.7 167.8 167.7H544c52.94 0 96-43.06 96-95.1V288C640 199.8 568.2 128 480 128zM384 312c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24C408 301.3 397.3 312 384 312z"/>
</>],
['light',<>
	<path d="M496 128h-64.34C376 128 323.7 149.7 284.3 189l-151.7 151.7c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0l151.7-151.7C340.3 178.3 384.6 160 431.7 160H496C557.8 160 608 210.3 608 272v96c0 44.13-35.88 80-80 80H172.2C103.7 448 48 392.3 48 323.8c0-29.62 10.62-58.31 29.91-80.81l51.29-59.84l67.54 24.18C198.8 207.8 200.1 208 203.1 208c8.396 0 16.6-3.322 22.7-9.424l57.52-57.52c9.055-9.055 4.35-24.59-8.256-27.08L191.3 96.7l-17.3-83.74C172.4 4.84 165.4-.002 158.2-.002c-3.986 0-8.031 1.48-11.25 4.703L89.42 62.22C81.79 69.86 78.51 80.78 80.64 91.25l25.1 70.13l-52.14 60.83C29.34 250.5 16 286.6 16 323.8C16 409.9 86.06 480 172.2 480H528c61.75 0 112-50.25 112-112v-96C640 192.6 575.4 128 496 128zM148.6 48.26l15.61 75.52l75.49 15.58L203.4 175.7L136.3 151.7L112.3 84.64L148.6 48.26zM408 288c0-13.26-10.75-24-24-24s-24 10.74-24 24S370.7 312 384 312S408 301.3 408 288z"/>
</>],
['regular',<>
	<path d="M488 128h-64.34c-57.78 0-112.1 22.51-152.1 63.37l-151.7 151.7C114.5 347.6 112 353.6 112 360c0 6.408 2.496 12.44 7.031 16.97C123.6 381.5 129.6 384 136 384s12.44-2.498 16.97-7.031l151.7-151.7C336.4 193.5 378.7 176 423.7 176H488c57.34 0 103.1 46.65 103.1 104v96c0 39.7-32.3 72-72 72H164.2C100.1 448 48 395.9 48 331.8c0-27.7 9.938-54.55 27.98-75.61l47.71-55.66l62.36 22.32C189.8 223.7 192.4 224 195.1 224c10.54 0 20.88-4.289 28.36-11.77l57.52-57.52C287.2 148.4 289.5 139.2 286.9 130.7C284.4 122.2 277.3 115.9 268.6 114.1L190.1 97.93L173.9 19.34C171.7 8.164 161.7 0 150.2 0C143.8 0 137.8 2.502 133.3 7.045L75.77 64.57c-9.547 9.549-13.65 23.11-10.97 36.28l23.85 66.85L39.52 225c-25.48 29.72-39.52 67.66-39.52 106.8C.002 422.4 73.64 496 164.2 496H519.1c66.17 0 120-53.83 120-120v-96C639.1 196.2 571.8 128 488 128zM135.8 72.41l13.67 66.14l66.12 13.65L193.3 174.5L134.5 153.5L113.5 94.72L135.8 72.41zM408 304c0-13.26-10.75-24-24-24s-24 10.74-24 24c0 13.25 10.75 24 24 24S408 317.3 408 304z"/>
</>],
['solid',<>
	<path d="M480 128c-91.09 0-176.7 35.47-241.1 99.87l-85.66 82.69c-6.312 6.094-14.62 9.437-23.41 9.437C111.2 320 96 304.8 96 286.2c0-31.56 12.28-61.2 34.58-83.52l9.811-9.811l56.75 13.61C207.6 208.6 218.4 205.3 226 197.7l57.28-57.28c9.016-9.016 4.332-24.48-8.221-26.96L191.3 96.7L174.5 12.9C172 .3524 156.6-4.333 147.6 4.682L90.28 61.96C82.68 69.56 79.41 80.43 81.53 90.86l13.61 56.74L49.13 193.6C17.44 225.3 0 267.4 0 312.3c0 92.5 75.25 167.7 167.8 167.7H544c52.94 0 96-43.06 96-95.1V288C640 199.8 568.2 128 480 128zM384 312c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24C408 301.3 397.3 312 384 312z"/>
</>],
['thin',<>
	<path d="M480 128c-91.09 0-176.7 35.47-241.1 99.87l-85.66 82.69c-6.312 6.094-14.62 9.437-23.41 9.437C111.2 320 96 304.8 96 286.2c0-31.56 12.28-61.21 34.58-83.52l9.811-9.811l56.75 13.61c2.092 .4258 4.203 .6334 6.301 .6334c8.359 0 16.53-3.307 22.6-9.383l57.28-57.28c9.016-9.016 4.332-24.48-8.221-26.96L191.3 96.7L174.5 12.9C172.9 4.821 165.9 .002 158.8 0C154.8 0 150.8 1.474 147.6 4.682L90.28 61.96C82.68 69.56 79.41 80.43 81.53 90.86l13.61 56.74L49.13 193.6C17.44 225.3 0 267.4 0 312.3c0 92.5 75.25 167.7 167.8 167.7H544c52.94 0 96-43.06 96-95.1V288C640 199.8 568.2 128 480 128zM624 384c0 44.11-35.89 79.1-80 79.1H167.8C84.07 464 16 395.9 16 312.3c0-40.54 15.78-78.65 44.44-107.3L112.8 152.6L97.21 87.68C96.15 82.46 97.79 77.08 101.6 73.27l57.23-57.22l17.77 88.54l6.846 6.846l88.57 17.7l-57.28 57.27C211.7 189.4 207.6 191.1 203.4 191.1c-1.037 0-2.08-.1016-2.568-.1914L135.4 175.2L119.3 191.4C93.95 216.7 80 250.4 80 286.2c0 27.47 22.35 49.81 49.81 49.81c12.96 0 25.22-4.945 34.52-13.93l85.86-82.88C311.6 177.8 393.2 144 480 144c79.4 0 144 64.6 144 143.1V384zM384 272c-8.836 0-16 7.162-16 15.1c0 8.836 7.164 15.1 16 15.1s16-7.164 16-15.1C400 279.2 392.8 272 384 272z"/>
</>],

]);

const Whale: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Whale.displayName = "Whale";

export default Whale;