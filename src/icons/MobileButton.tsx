
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M352 48V384H32V48C32 21.49 53.49 0 80 0h224C330.5 0 352 21.49 352 48z"/><path className="fa-secondary" d="M32 384v80C32 490.5 53.49 512 80 512h224c26.51 0 48-21.49 48-48V384H32zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480z"/>
</>],
['light',<>
	<path d="M192 392c-13.31 0-24 10.69-24 24s10.69 24 24 24s24-10.69 24-24S205.3 392 192 392zM288 0H96C60.65 0 32 28.65 32 64v384c0 35.35 28.65 64 64 64h192c35.35 0 64-28.65 64-64V64C352 28.65 323.3 0 288 0zM320 448c0 17.64-14.36 32-32 32H96c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h192c17.64 0 32 14.36 32 32V448z"/>
</>],
['regular',<>
	<path d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM320 448c0 8.822-7.178 16-16 16h-224C71.18 464 64 456.8 64 448V64c0-8.822 7.178-16 16-16h224C312.8 48 320 55.18 320 64V448zM192 392c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24s24-10.75 24-24C216 402.7 205.3 392 192 392z"/>
</>],
['solid',<>
	<path d="M320 0H64C37.49 0 16 21.49 16 48v416C16 490.5 37.49 512 64 512h256c26.51 0 48-21.49 48-48v-416C368 21.49 346.5 0 320 0zM192 464c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 464 192 464z"/>
</>],
['thin',<>
	<path d="M304 0h-224C53.5 0 32 21.5 32 48v416C32 490.5 53.5 512 80 512h224c26.5 0 48-21.5 48-48v-416C352 21.5 330.5 0 304 0zM336 464c0 17.64-14.36 32-32 32h-224c-17.64 0-32-14.36-32-32v-416c0-17.64 14.36-32 32-32h224c17.64 0 32 14.36 32 32V464zM192 400c-17.67 0-32 14.33-32 32s14.33 32 32 32c17.67 0 32-14.33 32-32S209.7 400 192 400zM192 448c-8.822 0-16-7.176-16-16S183.2 416 192 416s16 7.176 16 16S200.8 448 192 448z"/>
</>],

]);

const MobileButton: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MobileButton.displayName = "MobileButton";

export default MobileButton;