
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M64 64v128h256V64H64zM192 256c-53 0-96 43-96 96s43 96 96 96s96-43 96-96S245 256 192 256zM192 384c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S209.6 384 192 384z"/><path className="fa-secondary" d="M336 0h-288C21.5 0 0 21.5 0 48v416C0 490.5 21.5 512 48 512h288c26.5 0 48-21.5 48-48v-416C384 21.5 362.5 0 336 0zM192 448c-53 0-96-43-96-96s43-96 96-96s96 43 96 96S245 448 192 448zM320 192H64V64h256V192z"/>
</>],
['light',<>
	<path d="M192 448c61.88 0 112-50.13 112-112C303.9 274.1 253.9 224.1 192 224c-61.88 0-112 50.13-112 112S130.1 448 192 448zM192 256c44.13 0 80 35.88 80 80S236.1 416 192 416s-80-35.88-80-80S147.9 256 192 256zM192 360c13.25 0 24-10.75 24-24S205.3 312 192 312s-24 10.75-24 24S178.8 360 192 360zM320 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V64C384 28.65 355.3 0 320 0zM352 448c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32V192h320V448zM352 160H32V64c0-17.67 14.33-32 32-32h256c17.67 0 32 14.33 32 32V160z"/>
</>],
['regular',<>
	<path d="M192 240c-53 0-96 43-96 96s43 96 96 96s96-43 96-96S245 240 192 240zM192 368c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S209.6 368 192 368zM320 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V64C384 28.65 355.3 0 320 0zM336 448c0 8.836-7.164 16-16 16H64c-8.836 0-16-7.164-16-16V64c0-8.838 7.164-16 16-16h256c8.836 0 16 7.162 16 16V448zM272 80h-160c-17.67 0-32 14.33-32 32V160c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V112C304 94.33 289.7 80 272 80z"/>
</>],
['solid',<>
	<path d="M336 0h-288C21.5 0 0 21.5 0 48v416C0 490.5 21.5 512 48 512h288c26.5 0 48-21.5 48-48v-416C384 21.5 362.5 0 336 0zM192 448c-53 0-96-43-96-96s43-96 96-96s96 43 96 96S245 448 192 448zM320 192H64V64h256V192zM192 320c-17.62 0-32 14.38-32 32s14.38 32 32 32s32-14.38 32-32S209.6 320 192 320z"/>
</>],
['thin',<>
	<path d="M320 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V64C384 28.65 355.3 0 320 0zM368 448c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V64c0-26.47 21.53-48 48-48h256c26.47 0 48 21.53 48 48V448zM192 224c-61.83 0-112 50.17-112 112S130.2 448 192 448s112-50.17 112-112S253.8 224 192 224zM192 432c-52.93 0-96-43.06-96-96s43.07-96 96-96c52.94 0 96 43.06 96 96S244.9 432 192 432zM288 64H96C78.33 64 64 78.33 64 96v64c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32V96C320 78.33 305.7 64 288 64zM304 160c0 8.822-7.178 16-16 16H96C87.18 176 80 168.8 80 160V96c0-8.822 7.178-16 16-16h192c8.822 0 16 7.178 16 16V160zM192 304c-17.62 0-32 14.38-32 32s14.38 32 32 32s32-14.38 32-32S209.6 304 192 304zM192 352c-8.822 0-16-7.178-16-16S183.2 320 192 320s16 7.178 16 16S200.8 352 192 352z"/>
</>],

]);

const Mp3Player: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Mp3Player.displayName = "Mp3Player";

export default Mp3Player;
