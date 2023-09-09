
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M528 32h-480C21.49 32 0 53.49 0 80V160h576V80C576 53.49 554.5 32 528 32zM160 224c-52.95 0-96 43.05-96 96s43.05 96 96 96c52.95 0 96-43.05 96-96S212.1 224 160 224zM160 352c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S177.6 352 160 352z"/><path className="fa-secondary" d="M0 160v272C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48V160H0zM160 416c-52.95 0-96-43.05-96-96s43.05-96 96-96c52.95 0 96 43.05 96 96S212.1 416 160 416zM512 416h-192V224h192V416z"/>
</>],
['light',<>
	<path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM544 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V160h512V416zM544 128H32V96c0-17.64 14.36-32 32-32h448c17.64 0 32 14.36 32 32V128zM352 384h96c17.67 0 32-14.33 32-32V256c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32v96C320 369.7 334.3 384 352 384zM352 256h96v96h-96V256zM176 400c53.02 0 96-42.98 96-96s-42.98-96-96-96s-96 42.98-96 96S122.1 400 176 400zM176 240c35.29 0 64 28.71 64 64c0 35.29-28.71 64-64 64s-64-28.71-64-64C112 268.7 140.7 240 176 240zM176 328c13.26 0 24-10.75 24-24c0-13.26-10.74-24-24-24c-13.25 0-24 10.74-24 24C152 317.3 162.7 328 176 328z"/>
</>],
['regular',<>
	<path d="M352 384h112c17.62 0 32-14.38 32-32V240c0-17.62-14.38-32-32-32H352c-17.62 0-32 14.38-32 32V352C320 369.6 334.4 384 352 384zM368 256H448v80h-80V256zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V160h480V416zM184 400c57.44 0 104-46.56 104-104S241.4 192 184 192S80 238.6 80 296S126.6 400 184 400zM184 240c30.88 0 56 25.12 56 56S214.9 352 184 352S128 326.9 128 296S153.1 240 184 240zM184 320C197.3 320 208 309.3 208 296c0-13.26-10.74-24-24-24C170.7 272 160 282.7 160 296C160 309.3 170.7 320 184 320z"/>
</>],
['solid',<>
	<path d="M160 352c17.62 0 32-14.38 32-32S177.6 288 160 288s-32 14.38-32 32S142.4 352 160 352zM528 32h-480C21.49 32 0 53.49 0 80V128h576V80C576 53.49 554.5 32 528 32zM0 432C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48V160H0V432zM320 224h192v192h-192V224zM160 224c52.95 0 96 43.05 96 96s-43.05 96-96 96c-52.95 0-96-43.05-96-96S107.1 224 160 224z"/>
</>],
['thin',<>
	<path d="M512 32H64C28.66 32 0 60.65 0 96v320c0 35.35 28.66 64 64 64h448c35.34 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM560 416c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V144h544V416zM560 128h-544V96c0-26.47 21.53-48 48-48h448c26.47 0 48 21.53 48 48V128zM160 400c53.02 0 96-42.98 96-96s-42.98-96-96-96s-96 42.98-96 96S106.1 400 160 400zM160 224c44.11 0 80 35.89 80 80S204.1 384 160 384s-80-35.89-80-80S115.9 224 160 224zM160 336c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32s-32 14.33-32 32C128 321.7 142.3 336 160 336zM160 288c8.822 0 16 7.178 16 16S168.8 320 160 320S144 312.8 144 304S151.2 288 160 288zM336 400h160c8.836 0 16-7.164 16-16V224c0-8.838-7.164-16-16-16h-160C327.2 208 320 215.2 320 224v160C320 392.8 327.2 400 336 400zM336 224h160v160h-160V224z"/>
</>],

]);

const CassetteBetamax: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CassetteBetamax.displayName = "CassetteBetamax";

export default CassetteBetamax;