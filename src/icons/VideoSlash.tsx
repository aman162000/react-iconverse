
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M630.8 469.1L38.81 5.111C34.41 1.673 29.19 0 24.03 0C16.91 0 9.84 3.158 5.121 9.189C-3.066 19.63-1.249 34.72 9.189 42.89l591.1 463.1c10.5 8.203 25.57 6.328 33.69-4.078C643.1 492.4 641.2 477.3 630.8 469.1z"/><path className="fa-secondary" d="M32 399.1c0 26.51 21.49 47.1 47.1 47.1h287.1c19.57 0 36.34-11.75 43.81-28.56L32 121.8L32 399.1zM557.6 101.7l-109.6 75.56l.0001 148.5l93.6 73.36l15.99 11.02c21.22 14.59 50.41-.2967 50.41-25.8V127.5C607.1 102.1 578.9 87.13 557.6 101.7zM367.1 63.1H113.9l302.1 236.7l.0001-188.7C415.1 85.49 394.5 63.1 367.1 63.1z"/>
</>],
['light',<>
	<path d="M473.2 200L576 128v248.5l28.16 22.23C606.5 394.3 608 389.3 608 383.1V128c0-11.98-6.594-22.86-17.23-28.39c-10.59-5.484-23.37-4.761-33.15 2.098l-102.8 72.04c-7.25 5.062-9 15.05-3.938 22.28C455.1 203.3 465.9 205 473.2 200zM352 96c17.64 0 32 14.36 32 32v96.97l32 25.26V128c0-35.35-28.65-64-64-64H180.1l40.53 32H352zM633.9 483.4L25.92 3.42c-6.938-5.453-17-4.25-22.48 2.641c-5.469 6.938-4.281 17 2.641 22.48l608 480C617 510.9 620.5 512 623.1 512c4.734 0 9.422-2.094 12.58-6.078C642 498.1 640.8 488.9 633.9 483.4zM352 416H96c-17.64 0-32-14.36-32-32V135.4L34.28 111.1C32.94 117.1 32 122.4 32 128v256c0 35.35 28.65 64 64 64h256c26.38 0 49-15.98 58.8-38.77l-27.51-21.72C381.5 403.4 368.4 416 352 416z"/>
</>],
['regular',<>
	<path d="M630.8 469.1l-182.8-143.3L448 199.8l112-51.33V344c0 13.25 10.75 24 24 24S608 357.3 608 344V136c0-13.69-6.875-26.27-18.39-33.67c-11.53-7.406-25.88-8.391-38.28-2.688L448 147V128c0-35.35-28.65-64-64-64L113.9 63.1L38.81 5.111C28.35-3.061 13.32-1.249 5.121 9.189C-3.051 19.63-1.233 34.72 9.189 42.89l591.1 463.1C605.6 510.3 610.8 512 615.1 512c7.125 0 14.16-3.161 18.9-9.193C643.1 492.4 641.2 477.3 630.8 469.1zM400 288.2L175.2 112H384c8.836 0 16 7.162 16 16V288.2zM384 400H96c-8.822 0-16-7.178-16-16V158.9L32.63 121.8C32.42 123.9 32 125.9 32 128v256c0 35.35 28.65 64 64 64h288c16.68 0 31.74-6.537 43.13-16.99l-40.29-31.58C385.9 399.6 385 400 384 400z"/>
</>],
['solid',<>
	<path d="M32 399.1c0 26.51 21.49 47.1 47.1 47.1h287.1c19.57 0 36.34-11.75 43.81-28.56L32 121.8L32 399.1zM630.8 469.1l-89.21-69.92l15.99 11.02c21.22 14.59 50.41-.2971 50.41-25.8V127.5c0-25.41-29.07-40.37-50.39-25.76l-109.6 75.56l.0001 148.5l-32-25.08l.0001-188.7c0-26.51-21.49-47.1-47.1-47.1H113.9L38.81 5.111C34.41 1.673 29.19 0 24.03 0C16.91 0 9.84 3.158 5.121 9.189C-3.066 19.63-1.249 34.72 9.189 42.89l591.1 463.1c10.5 8.203 25.57 6.328 33.69-4.078C643.1 492.4 641.2 477.3 630.8 469.1z"/>
</>],
['thin',<>
	<path d="M460.4 179.9L556.7 116c7.125-4.859 15.88-5.391 23.56-1.359c7.375 3.891 11.78 11.09 11.78 19.28v244.1c0 .6562-.4434 1.156-.498 1.797l13.98 11.12c1.48-4.078 2.516-8.344 2.516-12.91V133.9c0-14.23-7.594-26.73-20.34-33.44c-12.75-6.734-28.16-5.859-39.97 2.25l-96.13 63.81c-3.656 2.453-4.656 7.422-2.219 11.09C451.8 181.3 456.8 182.3 460.4 179.9zM368 80c17.64 0 32 14.36 32 32v115.6l16 12.72l-.0003-128.3c0-26.51-21.49-47.1-47.1-47.1L194.2 64l20.13 16H368zM368 432H79.1c-17.64 0-32-14.36-32-32V131.7l-16-12.72l.0008 280.1c0 26.51 21.49 47.1 47.1 47.1h287.1c19.15 0 35.55-11.29 43.26-27.52l-13.27-10.55C393.8 422.7 382.1 432 368 432zM636.1 497.7L12.99 1.73C11.52 .5664 9.771 0 8.025 0C5.673 0 3.335 1.031 1.738 3.012c-2.75 3.469-2.172 8.5 1.281 11.25l623.1 496C628.5 511.4 630.2 512 631.1 512c2.344 0 4.688-1.031 6.266-3.016C641 505.5 640.4 500.5 636.1 497.7z"/>
</>],

]);

const VideoSlash: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

VideoSlash.displayName = "VideoSlash";

export default VideoSlash;
