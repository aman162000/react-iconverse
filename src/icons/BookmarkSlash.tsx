
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M640 487.1c0-7.119-3.153-14.16-9.192-18.89L38.82 5.111C34.41 1.673 29.19 0 24.04 0C10.19 0 0 11.3 0 24c0 7.119 3.153 14.16 9.192 18.89l591.1 463.1C605.6 510.3 610.8 512 615.1 512C629.8 512 640 500.6 640 487.1z"/><path className="fa-secondary" d="M128 512l230.6-134.3L128 197V512zM464 0h-288C149.5 0 128 21.5 128 48v27.01l384 300.1V48C512 21.5 490.5 0 464 0z"/>
</>],
['light',<>
	<path d="M192 32h256c17.66 0 32 14.36 32 32v236.8l32 25.26V64c0-35.3-28.72-64-64-64H192C169 0 148.1 12.28 137.7 30.53l25.45 20.09C168.3 39.7 179.2 32 192 32zM320 368c-3 0-5.969 .8281-8.594 2.5L160 466.9V211.2L128 185.9v310c0 5.844 3.188 11.23 8.312 14.04c5.125 2.781 11.34 2.562 16.28-.5313L320 402.1l167.4 106.5C490 511.2 493 512 496 512c2.656 0 5.281-.6562 7.688-1.969C508.8 507.2 512 501.8 512 496v-3.877l-183.4-121.6C325.1 368.8 323 368 320 368zM633.9 483.4L25.9 3.418C18.1-2.02 8.936-.8477 3.436 6.059c-5.469 6.939-4.281 17 2.656 22.49l608 480C617 510.9 620.5 512 624 512c4.719 0 9.406-2.094 12.56-6.078C642 498.1 640.8 488.9 633.9 483.4z"/>
</>],
['regular',<>
	<path d="M630.8 469.1L512 375.1V48C512 21.49 490.5 0 464 0h-288C149.5 0 128 21.49 128 48v27.01L38.81 5.111C28.35-3.061 13.32-1.249 5.121 9.189C-3.051 19.63-1.233 34.72 9.189 42.89L601.2 506.9C605.6 510.3 610.8 512 615.1 512c7.125 0 14.16-3.161 18.89-9.193C643.1 492.4 641.2 477.3 630.8 469.1zM464 338.4l-288-225.7V54C176 50.63 178.6 48 181.1 48h276C461.4 48 464 50.63 464 54V338.4zM320 368l-144 84V234.2L128 196.6v283.4c0 24.7 26.79 40.08 48.12 27.64L320 423.6l143.9 83.93c16.62 9.695 36.39 2.383 44.38-12.96l-83.71-65.6L320 368z"/>
</>],
['solid',<>
	<path d="M128 512l230.6-134.3L128 197V512zM630.8 469.1L512 375.1V48C512 21.5 490.5 0 464 0h-288C149.5 0 128 21.5 128 48v27.01L38.81 5.111C34.41 1.673 29.19 0 24.03 0C16.91 0 9.84 3.158 5.121 9.189c-8.188 10.44-6.37 25.53 4.068 33.7L601.2 506.9c10.5 8.203 25.57 6.328 33.69-4.078C643.1 492.4 641.2 477.3 630.8 469.1z"/>
</>],
['thin',<>
	<path d="M192 16h256c26.47 0 48 21.53 48 48v239.9L512 316.6V64c0-35.35-28.65-64-64-64H192C172.2 0 154.7 9.184 142.1 23.31l12.49 9.924C164.3 22.79 177.3 16 192 16zM144 495.1V208.1L128 195.4v300.6c0 12.35 13.39 20.03 24.06 13.81L320 411.8l167.9 97.96c8.164 4.76 17.19 .9355 21.21-6.506L320 393.3L144 495.1zM636.1 497.7L12.99 1.73C11.53 .5664 9.771 0 8.025 0C5.674 0 3.336 1.029 1.738 3.012c-2.75 3.469-2.172 8.5 1.281 11.25l623.1 496C628.5 511.4 630.2 512 631.1 512c2.344 0 4.688-1.031 6.266-3.016C641 505.5 640.4 500.5 636.1 497.7z"/>
</>],

]);

const BookmarkSlash: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BookmarkSlash.displayName = "BookmarkSlash";

export default BookmarkSlash;
