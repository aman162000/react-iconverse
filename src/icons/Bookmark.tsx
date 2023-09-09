
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z"/>
</>],
['light',<>
	<path d="M320 0H64C28.72 0 0 28.7 0 64v431.1c0 5.844 3.188 11.23 8.312 14.04c5.125 2.781 11.34 2.562 16.28-.5313L192 402.1l167.4 106.5C362 511.2 365 512 368 512c2.656 0 5.281-.6562 7.688-1.969C380.8 507.2 384 501.8 384 495.1V64C384 28.7 355.3 0 320 0zM352 466.9l-151.4-96.36C197.1 368.8 195 368 192 368s-5.969 .8281-8.594 2.5L32 466.9V64c0-17.64 14.34-32 32-32h256c17.66 0 32 14.36 32 32V466.9z"/>
</>],
['regular',<>
	<path d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z"/>
</>],
['solid',<>
	<path d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z"/>
</>],
['thin',<>
	<path d="M320 16c26.47 0 48 21.53 48 48v431.1L192 393.3l-176 102.7V64c0-26.47 21.53-48 48-48H320zM320 0H64C28.65 0 0 28.65 0 64v431.1c0 12.35 13.4 20.03 24.06 13.81L192 411.8l167.9 97.96C370.6 516 384 508.3 384 495.1V64C384 28.65 355.3 0 320 0z"/>
</>],

]);

const Bookmark: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Bookmark.displayName = "Bookmark";

export default Bookmark;
