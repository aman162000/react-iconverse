
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M320 192c17.62 0 32-14.38 32-32s-14.38-32-32-32s-32 14.38-32 32S302.4 192 320 192zM320 320c-17.62 0-32 14.38-32 32s14.38 32 32 32s32-14.38 32-32S337.6 320 320 320zM128 320c-17.62 0-32 14.38-32 32s14.38 32 32 32s32-14.38 32-32S145.6 320 128 320zM128 128C110.4 128 96 142.4 96 160s14.38 32 32 32s32-14.38 32-32S145.6 128 128 128zM224 224C206.4 224 192 238.4 192 256s14.38 32 32 32s32-14.38 32-32S241.6 224 224 224z"/><path className="fa-secondary" d="M384 32H64C28.62 32 0 60.62 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96C448 60.62 419.4 32 384 32zM128 384c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S145.6 384 128 384zM128 192C110.4 192 96 177.6 96 160s14.38-32 32-32s32 14.38 32 32S145.6 192 128 192zM224 288C206.4 288 192 273.6 192 256s14.38-32 32-32s32 14.38 32 32S241.6 288 224 288zM320 384c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S337.6 384 320 384zM320 192c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S337.6 192 320 192z"/>
</>],
['light',<>
	<path d="M384 32H64C28.62 32 0 60.62 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96C448 60.62 419.4 32 384 32zM416 416c0 17.62-14.38 32-32 32H64c-17.62 0-32-14.38-32-32V96c0-17.62 14.38-32 32-32h320c17.62 0 32 14.38 32 32V416zM128 136C114.8 136 104 146.8 104 160S114.8 184 128 184S152 173.2 152 160S141.2 136 128 136zM224 232C210.8 232 200 242.8 200 256c0 13.25 10.75 24 24 24S248 269.2 248 256C248 242.8 237.2 232 224 232zM128 328c-13.25 0-24 10.75-24 24S114.8 376 128 376S152 365.2 152 352S141.2 328 128 328zM320 136c-13.25 0-24 10.75-24 24S306.8 184 320 184S344 173.2 344 160S333.2 136 320 136zM320 328c-13.25 0-24 10.75-24 24s10.75 24 24 24s24-10.75 24-24S333.2 328 320 328z"/>
</>],
['regular',<>
	<path d="M128 128C110.4 128 96 142.4 96 160s14.38 32 32 32s32-14.38 32-32S145.6 128 128 128zM128 320c-17.62 0-32 14.38-32 32s14.38 32 32 32s32-14.38 32-32S145.6 320 128 320zM320 320c-17.62 0-32 14.38-32 32s14.38 32 32 32s32-14.38 32-32S337.6 320 320 320zM320 128c-17.62 0-32 14.38-32 32s14.38 32 32 32s32-14.38 32-32S337.6 128 320 128zM384 32H64C28.63 32 0 60.63 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96C448 60.63 419.4 32 384 32zM400 416c0 8.875-7.125 16-16 16H64c-8.875 0-16-7.125-16-16V96c0-8.875 7.125-16 16-16h320c8.875 0 16 7.125 16 16V416zM224 224C206.4 224 192 238.4 192 256s14.38 32 32 32s32-14.38 32-32S241.6 224 224 224z"/>
</>],
['solid',<>
	<path d="M384 32H64C28.62 32 0 60.62 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96C448 60.62 419.4 32 384 32zM128 384c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S145.6 384 128 384zM128 192C110.4 192 96 177.6 96 160s14.38-32 32-32s32 14.38 32 32S145.6 192 128 192zM224 288C206.4 288 192 273.6 192 256s14.38-32 32-32s32 14.38 32 32S241.6 288 224 288zM320 384c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S337.6 384 320 384zM320 192c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S337.6 192 320 192z"/>
</>],
['thin',<>
	<path d="M384 32H64C28.63 32 0 60.63 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96C448 60.63 419.4 32 384 32zM432 416c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48V416zM128 320c-17.62 0-32 14.38-32 32s14.38 32 32 32s32-14.38 32-32S145.6 320 128 320zM128 368c-8.822 0-16-7.178-16-16s7.178-16 16-16s16 7.178 16 16S136.8 368 128 368zM128 128C110.4 128 96 142.4 96 160s14.38 32 32 32s32-14.38 32-32S145.6 128 128 128zM128 176C119.2 176 112 168.8 112 160S119.2 144 128 144S144 151.2 144 160S136.8 176 128 176zM224 224C206.4 224 192 238.4 192 256s14.38 32 32 32s32-14.38 32-32S241.6 224 224 224zM224 272C215.2 272 208 264.8 208 256S215.2 240 224 240s16 7.178 16 16S232.8 272 224 272zM320 320c-17.62 0-32 14.38-32 32s14.38 32 32 32s32-14.38 32-32S337.6 320 320 320zM320 368c-8.822 0-16-7.178-16-16s7.178-16 16-16s16 7.178 16 16S328.8 368 320 368zM320 128c-17.62 0-32 14.38-32 32s14.38 32 32 32s32-14.38 32-32S337.6 128 320 128zM320 176c-8.822 0-16-7.178-16-16s7.178-16 16-16s16 7.178 16 16S328.8 176 320 176z"/>
</>],

]);

const DiceFive: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

DiceFive.displayName = "DiceFive";

export default DiceFive;
