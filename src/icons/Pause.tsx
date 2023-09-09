
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M272 63.1c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48s48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM48 63.1c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448S96 426.5 96 400v-288C96 85.49 74.51 63.1 48 63.1z"/>
</>],
['light',<>
	<path d="M48 63.1C39.16 63.1 32 71.16 32 80v352C32 440.8 39.16 448 48 448S64 440.8 64 432v-352C64 71.16 56.84 63.1 48 63.1zM272 63.1c-8.836 0-16 7.162-16 16v352c0 8.836 7.164 16 16 16s16-7.164 16-16v-352C288 71.16 280.8 63.1 272 63.1z"/>
</>],
['regular',<>
	<path d="M56 64C42.75 64 32 74.75 32 88v336C32 437.3 42.75 448 56 448s24-10.75 24-24V88C80 74.75 69.25 64 56 64zM264 64c-13.25 0-24 10.75-24 24v336c0 13.25 10.75 24 24 24S288 437.3 288 424V88C288 74.75 277.3 64 264 64z"/>
</>],
['solid',<>
	<path d="M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z"/>
</>],
['thin',<>
	<path d="M64 64C59.58 64 56 67.58 56 72v368C56 444.4 59.58 448 64 448s8-3.578 8-8V72C72 67.58 68.42 64 64 64zM256 64c-4.422 0-8 3.578-8 8v368c0 4.422 3.578 8 8 8s8-3.578 8-8V72C264 67.58 260.4 64 256 64z"/>
</>],

]);

const Pause: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Pause.displayName = "Pause";

export default Pause;