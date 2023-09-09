
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M86.4 192h83.21l.4648-31.1H85.93L86.4 192zM341.9 160l.4648 31.1h83.21l.4648-31.1H341.9z"/><path className="fa-secondary" d="M170.1 160C175.7 135.1 192 111.8 192 72.05c0-48.13-32.09-72.05-64.05-72.05C95.98 0 64 24.12 64 72.05c0 39.71 16.26 63.01 21.93 87.99H170.1zM425.6 192h-83.21C334.6 250.7 288 309.4 288 368c0 53.4 22.29 95.66 38.42 126.8C331.9 505.4 342.8 512 354.8 512h58.51c11.1 0 22.9-6.611 28.4-17.27C457.7 463.6 480 421.4 480 368C480 309.4 433.4 250.7 425.6 192zM426.1 160C431.7 135.1 448 111.8 448 72.05c0-48.13-32.09-72.05-64.05-72.05C351.1 0 320 24.12 320 72.05c0 39.71 16.26 63.01 21.93 87.99H426.1zM86.4 192C78.55 250.7 32 309.4 32 368c0 53.4 22.29 95.66 38.42 126.8C75.93 505.4 86.82 512 98.79 512h58.51c11.1 0 22.9-6.611 28.4-17.27C201.7 463.6 224 421.4 224 368C224 309.4 177.4 250.7 169.6 192H86.4z"/>
</>],
['light',<>
	<path d="M461 264.7c-12.53-29.3-24.38-56.98-24.38-83.7c0-10.59 3.875-21 8.344-33.05c6.094-16.39 13.66-36.78 13.66-64.44c0-54.75-37.49-83.47-74.71-83.55c-37.06 0-74.61 28.7-74.61 83.55c0 27.66 7.562 48.05 13.66 64.44c4.469 12.05 8.344 22.45 8.344 33.05c0 26.72-11.84 54.41-24.38 83.7C293.7 295.7 280 327.8 280 361c0 53.2 21 94.63 36.97 126.1C324.8 502.5 340.2 512 357.2 512h53.63c17.06 0 32.53-9.562 41.16-26.56c15.19-30.17 36-71.48 36-124.4C488 327.8 474.3 295.7 461 264.7zM383.1 32c21.25 .0469 42.69 16 42.69 51.55c0 32.52-12.91 51.22-19.17 76.45h-46.97c-6.13-24.69-19.17-44.08-19.17-76.45C341.3 47.94 362.7 32 383.1 32zM422.6 472.6C420.3 477.2 415.8 480 410.8 480h-53.63c-4.938 0-9.438-2.828-12.34-8.562C330.2 442.5 312 406.6 312 361c0-26.72 11.84-54.39 24.38-83.69C348.2 249.8 359.8 221.3 362.3 192h43.4c2.551 29.35 14.14 57.78 25.93 85.33C444.2 306.6 456 334.3 456 361C456 406.3 437.9 442.2 422.6 472.6zM180.7 181c0-10.59 3.875-21 8.344-33.05c6.094-16.39 13.66-36.78 13.66-64.44c0-54.75-37.49-83.47-74.71-83.55c-37.06 0-74.61 28.7-74.61 83.55c0 27.66 7.562 48.05 13.66 64.44c4.469 12.05 8.344 22.45 8.344 33.05c0 26.72-11.84 54.41-24.38 83.7C37.72 295.7 24 327.8 24 361c0 53.2 21 94.63 36.97 126.1C68.75 502.5 84.19 512 101.2 512h53.63C171.9 512 187.4 502.4 196 485.4c15.19-30.17 36-71.48 36-124.4c0-33.27-13.72-65.3-26.97-96.28C192.5 235.4 180.7 207.8 180.7 181zM127.1 32c21.25 .0469 42.69 16 42.69 51.55c0 32.52-12.91 51.22-19.17 76.45H104.5C98.39 135.3 85.34 115.9 85.34 83.55C85.34 47.94 106.7 32 127.1 32zM166.6 472.6C164.3 477.2 159.8 480 154.8 480H101.2c-4.938 0-9.438-2.828-12.34-8.562C74.22 442.5 56 406.6 56 361c0-26.72 11.84-54.39 24.38-83.69C92.16 249.8 103.8 221.3 106.3 192h43.4c2.551 29.35 14.14 57.78 25.93 85.33C188.2 306.6 200 334.3 200 361C200 406.3 181.9 442.2 166.6 472.6z"/>
</>],
['regular',<>
	<path d="M449.3 186c0-18.45 20-43.99 20-90.99c0-62.29-43.01-94.96-85.38-95.05c-42.36 0-85.28 32.65-85.28 95.05c0 46.98 20 72.66 20 90.99c0 46.74-46.67 104-46.67 167.1C272 372.4 287.3 512 359.7 512h48.76C480.8 512 496 372.3 496 354C496 290.5 449.3 232.6 449.3 186zM383.9 47.86c18.71 0 37.46 15.8 37.46 47.19c0 26.54-8.699 41.8-15.62 64.98h-43.44c-6.921-23.2-15.62-38.44-15.62-64.98C346.7 63.52 365.3 47.86 383.9 47.86zM417.7 457.8C415.8 461.7 412.3 464 408.4 464h-48.76c-3.922 0-7.395-2.293-9.814-7.195C336.5 429.9 320 396.4 320 354c0-45.15 35.77-93.76 44.63-145.1h38.73C412.2 260.2 448 308.8 448 354C448 396.2 431.6 429.6 417.7 457.8zM193.3 186c0-18.45 20-43.99 20-90.99c0-62.29-43.01-94.96-85.38-95.05c-42.36 0-85.28 32.65-85.28 95.05c0 46.98 20 72.66 20 90.99C62.67 232.8 16 290.1 16 354C16 372.4 31.31 512 103.7 512h48.76C224.8 512 240 372.3 240 354C240 290.5 193.3 232.6 193.3 186zM127.9 47.86c18.71 0 37.46 15.8 37.46 47.19c0 26.54-8.699 41.8-15.62 64.98H106.3C99.36 136.8 90.67 121.6 90.67 95.05C90.67 63.52 109.3 47.86 127.9 47.86zM161.7 457.8C159.8 461.7 156.3 464 152.4 464H103.7c-3.922 0-7.395-2.293-9.814-7.195C80.55 429.9 64 396.4 64 354c0-45.15 35.77-93.76 44.63-145.1h38.73C156.2 260.2 192 308.8 192 354C192 396.2 175.6 429.6 161.7 457.8z"/>
</>],
['solid',<>
	<path d="M170.1 160C175.7 135.1 192 111.8 192 72.05c0-48.12-32.08-72.05-64.05-72.05C95.98 0 64 24.12 64 72.05c0 39.71 16.26 63.01 21.93 87.99H170.1zM426.1 160C431.7 135.1 448 111.8 448 72.05c0-48.12-32.08-72.05-64.05-72.05C351.1 0 320 24.12 320 72.05c0 39.71 16.26 63.01 21.93 87.99H426.1zM86.4 192C78.55 250.7 32 309.4 32 368c0 53.4 22.29 95.66 38.42 126.8C75.93 505.4 86.82 512 98.79 512h58.51c11.1 0 22.9-6.608 28.4-17.27C201.7 463.6 224 421.4 224 368c0-58.66-46.55-117.3-54.4-175.1H86.4zM425.6 192h-83.21C334.6 250.7 288 309.4 288 368c0 53.4 22.29 95.66 38.42 126.8C331.9 505.4 342.8 512 354.8 512h58.51c11.1 0 22.9-6.608 28.4-17.27C457.7 463.6 480 421.4 480 368C480 309.4 433.4 250.7 425.6 192z"/>
</>],
['thin',<>
	<path d="M424 176c0-31.1 24-55.99 24-103.1s-32.06-71.99-64.05-72.05C351.1 0 320 24.12 320 72.05c0 47.99 24 71.99 24 103.1c0 63.99-56 127.1-56 191.1c0 53.4 22.29 95.66 38.42 126.8C331.9 505.4 342.8 512 354.8 512h58.51c11.1 0 22.9-6.611 28.4-17.27C457.7 463.6 480 421.4 480 368C480 304 424 240 424 176zM336 72.05c0-38.72 24.05-56.06 47.88-56.06C407.8 16.04 432 33.39 432 72.05c0 23.49-6.492 40.58-12.77 57.1c-4.645 12.23-9.209 24.89-10.61 38.88h-49.24c-1.4-13.99-5.965-26.66-10.61-38.88C342.5 112.6 336 95.54 336 72.05zM428.3 485.9l-.7969 1.545c-2.736 5.306-8.172 8.604-14.18 8.604h-58.51c-5.996 0-11.42-3.283-14.8-9.79C323.1 455.3 304 416.8 304 368c0-28.65 12.95-58.24 26.66-89.58c13.33-30.46 26.55-61.92 28.56-94.4h49.56c2.016 32.48 15.23 63.94 28.56 94.4C451.1 309.8 464 339.4 464 368C464 416.6 444.2 455 428.3 485.9zM192 72.05c0-47.99-32.06-71.99-64.05-72.05C95.98 0 64 24.12 64 72.05c0 47.99 24 71.99 24 103.1C88 240 32 304 32 368c0 53.4 22.29 95.66 38.42 126.8C75.93 505.4 86.82 512 98.79 512h58.51c11.1 0 22.9-6.611 28.4-17.27C201.7 463.6 224 421.4 224 368c0-63.99-56-127.1-56-191.1C168 144 192 120 192 72.05zM80 72.05c0-38.72 24.05-56.06 47.88-56.06C151.8 16.04 176 33.39 176 72.05c0 23.49-6.492 40.58-12.77 57.1c-4.645 12.23-9.209 24.89-10.61 38.88H103.4c-1.4-13.99-5.965-26.66-10.61-38.88C86.49 112.6 80 95.54 80 72.05zM181.3 278.4C195.1 309.8 208 339.4 208 368c0 48.6-19.81 86.99-35.72 117.8l-.7969 1.545c-2.736 5.306-8.172 8.604-14.18 8.604H98.79c-5.996 0-11.42-3.283-14.8-9.79C67.96 455.3 48 416.8 48 368c0-28.65 12.95-58.24 26.66-89.58C87.99 247.1 101.2 216.5 103.2 184H152.8C154.8 216.5 168 247.1 181.3 278.4z"/>
</>],

]);

const BowlingPins: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BowlingPins.displayName = "BowlingPins";

export default BowlingPins;