
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M416 352H32c-17.62 0-32 14.38-32 32v96c0 17.62 14.38 32 32 32h384c17.62 0 32-14.38 32-32v-96C448 366.4 433.6 352 416 352zM224 224c61.86 0 112-50.15 112-112S285.9-.0002 224-.0002S111.1 50.14 111.1 111.1S162.1 224 224 224zM200 48C213.3 48 224 58.75 224 72S213.3 96 200 96S176 85.25 176 72S186.8 48 200 48z"/><path className="fa-secondary" d="M128 352V336C128 327.1 120.9 320 112 320h-32C71.12 320 64 327.1 64 336v16.01H128zM256 218.8V352H192V218.8C202.2 221.8 212.8 224 224 224S245.8 221.8 256 218.8z"/>
</>],
['light',<>
	<path d="M400 352h-160V222.4c54.21-7.824 96.01-54.02 96.01-110.4c0-61.86-50.15-111.1-112-111.1S111.1 50.14 111.1 111.1c0 56.38 41.8 102.6 96.01 110.4V352h-160C21.49 352 0 373.5 0 400v64C0 490.5 21.49 512 48 512h352c26.51 0 48-21.49 48-48v-64C448 373.5 426.5 352 400 352zM144 112C144 67.89 179.9 32 224 32s80 35.89 80 80S268.1 192 224 192S144 156.1 144 112zM416 464c0 8.822-7.178 16-16 16h-352C39.18 480 32 472.8 32 464v-64C32 391.2 39.18 384 48 384h352c8.822 0 16 7.178 16 16V464zM232 80c0-13.26-10.75-24-24-24S184 66.74 184 80c0 13.25 10.75 24 24 24S232 93.25 232 80zM64 320h64c8.844 0 16-7.156 16-16S136.8 288 128 288H64C55.16 288 48 295.2 48 304S55.16 320 64 320z"/>
</>],
['regular',<>
	<path d="M384 352h-136V221.3c51.88-11.37 88.01-57.3 88.01-109.3c0-37.77-25.15-111.1-112-111.1c-42.57 0-112 33.1-112 111.1c0 52.03 36.12 97.96 88.01 109.3v130.7L128 352c0-17.67-14.33-31.97-32-31.97s-32 14.3-32 31.97c-35.2 0-64 28.82-64 64.01v31.99C0 483.2 28.8 512 64 512h320c35.2 0 64-28.79 64-63.98v-31.99C448 380.8 419.2 352 384 352zM160 112.1C160 76.73 188.6 48.11 224 48.11s64 28.62 64 63.98c0 35.37-28.62 63.98-64 63.98S160 147.5 160 112.1zM400 448c0 8.834-7.164 15.1-16 15.1H64c-8.836 0-16-7.162-16-15.1v-31.99c0-8.834 7.164-15.1 16-15.1h320c8.836 0 16 7.162 16 15.1V448z"/>
</>],
['solid',<>
	<path d="M416 352l-288 .013V336C128 327.1 120.9 320 112 320h-32C71.12 320 64 327.1 64 336v16.01L32 352c-17.62 0-32 14.38-32 32v96c0 17.62 14.38 32 32 32h384c17.62 0 32-14.38 32-32v-96C448 366.4 433.6 352 416 352zM192 218.8V320h64V218.8c46.13-13.75 80.01-56.16 80.01-106.8c0-61.88-50.13-111.1-112-111.1S111.1 50.12 111.1 111.1C111.1 162.6 145.9 205 192 218.8zM200 48C213.2 48 224 58.75 224 72S213.2 96 200 96S176 85.25 176 72S186.8 48 200 48z"/>
</>],
['thin',<>
	<path d="M416 352h-184V223.2c58.05-4.176 104-52.09 104-111.2c0-61.86-50.15-111.1-112-111.1S111.1 50.14 111.1 111.1c0 59.12 45.95 107 104 111.2V352h-80v-16c0-13.22-10.78-24-24-24h-32c-13.22 0-24 10.78-24 24V352H32c-17.62 0-32 14.38-32 32v96c0 17.62 14.38 32 32 32h384c17.62 0 32-14.38 32-32v-96C448 366.4 433.6 352 416 352zM128 112c0-52.93 43.06-96 96-96s96 43.07 96 96s-43.06 96-96 96S128 164.9 128 112zM72 336c0-4.406 3.594-8 8-8h32c4.406 0 8 3.594 8 8V352h-48V336zM432 480c0 8.824-7.178 16-16 16H32c-8.822 0-16-7.176-16-16v-96c0-8.824 7.178-16 16-16h384c8.822 0 16 7.176 16 16V480zM240 80c0-17.66-14.34-32-32-32s-32 14.34-32 32s14.34 32 32 32S240 97.66 240 80zM208 96C199.2 96 192 88.81 192 80S199.2 64 208 64S224 71.19 224 80S216.8 96 208 96z"/>
</>],

]);

const Joystick: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Joystick.displayName = "Joystick";

export default Joystick;
