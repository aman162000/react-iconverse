
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 448C362 448 448 362 448 256C448 149.1 362 64 256 64C149.1 64 64 149.1 64 256C64 362 149.1 448 256 448z"/><path className="fa-secondary" d="M144.8 99.5L412.5 367.2C400.1 384.7 384.7 400.1 367.2 412.5L99.5 144.8C111.1 127.3 127.3 111.9 144.8 99.5V99.5z"/>
</>],
['light',<>
	<path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM86.7 109.3C52.62 148.6 32 199.9 32 256C32 379.7 132.3 480 256 480C312.1 480 363.4 459.4 402.7 425.3L86.7 109.3zM480 256C480 132.3 379.7 32 256 32C199.9 32 148.6 52.62 109.3 86.7L425.3 402.7C459.4 363.4 480 312.1 480 255.1V256z"/>
</>],
['regular',<>
	<path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM92.93 126.9C64.8 162.3 48 207.2 48 256C48 370.9 141.1 464 256 464C304.8 464 349.7 447.2 385.1 419.1L92.93 126.9zM464 256C464 141.1 370.9 48 256 48C207.2 48 162.3 64.8 126.9 92.93L419.1 385.1C447.2 349.7 464 304.8 464 256z"/>
</>],
['solid',<>
	<path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM99.5 144.8C77.15 176.1 64 214.5 64 256C64 362 149.1 448 256 448C297.5 448 335.9 434.9 367.2 412.5L99.5 144.8zM448 256C448 149.1 362 64 256 64C214.5 64 176.1 77.15 144.8 99.5L412.5 367.2C434.9 335.9 448 297.5 448 256V256z"/>
</>],
['thin',<>
	<path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM80.73 92.04C40.58 134.9 16 192.6 16 256C16 388.5 123.5 496 256 496C319.4 496 377.1 471.4 419.1 431.3L80.73 92.04zM496 256C496 123.5 388.5 16 256 16C192.6 16 134.9 40.58 92.04 80.73L431.3 419.1C471.4 377.1 496 319.4 496 255.1L496 256z"/>
</>],

]);

const Ban: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Ban.displayName = "Ban";

export default Ban;
