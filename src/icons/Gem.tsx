
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M512 224l-244.3 250.9C264.6 478.2 260.4 480 256 480s-8.636-1.828-11.67-5.062L0 224H512z"/><path className="fa-secondary" d="M256 192l144-128h-288L256 192zM222.3 224L112 64L0 224H222.3zM512 224l-112-160l-110.3 160H512z"/>
</>],
['light',<>
	<path d="M509.1 198.8l-112-160C394.1 34.55 389.2 32 384 32H127.1C122.8 32 117.9 34.55 114.9 38.83l-112 160c-4.344 6.203-3.75 14.59 1.406 20.11l240 256C247.4 478.2 251.6 480 256 480s8.635-1.828 11.67-5.062l240-256C512.9 213.4 513.4 205 509.1 198.8zM383.4 75.13L465.3 192h-170.9L383.4 75.13zM256 189.6L160.3 64h191.4L256 189.6zM128.6 75.13L217.6 192H46.73L128.6 75.13zM256 440.6L52.93 224h406.1L256 440.6z"/>
</>],
['regular',<>
	<path d="M507.9 196.4l-104-153.8C399.4 35.95 391.1 32 384 32H127.1C120 32 112.6 35.95 108.1 42.56l-103.1 153.8c-6.312 9.297-5.281 21.72 2.406 29.89l231.1 246.2C243.1 477.3 249.4 480 256 480s12.94-2.734 17.47-7.547l232-246.2C513.2 218.1 514.2 205.7 507.9 196.4zM382.5 96.59L446.1 192h-140.1L382.5 96.59zM256 178.9L177.6 80h156.7L256 178.9zM129.5 96.59L205.1 192H65.04L129.5 96.59zM256 421L85.42 240h341.2L256 421z"/>
</>],
['solid',<>
	<path d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"/>
</>],
['thin',<>
	<path d="M510.4 195.2l-119.1-160C388.9 33.19 386.5 32 384 32H127.1C125.5 32 123.1 33.19 121.6 35.2l-119.1 160C-.7128 198.3-.494 202.5 2.1 205.4l247.1 272C251.6 479 253.8 480 256 480s4.406-.9531 5.906-2.609l247.1-272C512.5 202.5 512.7 198.3 510.4 195.2zM383.8 53.06L487.1 192h-215.3L383.8 53.06zM256 187.2L144.7 48h222.7L256 187.2zM128.2 53.06L239.4 192H24.01L128.2 53.06zM256 460.1L26.13 208h459.7L256 460.1z"/>
</>],

]);

const Gem: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Gem.displayName = "Gem";

export default Gem;