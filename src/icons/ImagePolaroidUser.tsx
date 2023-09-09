
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M224 256c35.35 0 64-28.66 64-64s-28.65-64-64-64S160 156.7 160 192S188.7 256 224 256zM384 352h-48c0-35.35-28.65-64-63.1-64H175.1C140.7 288 112 316.7 112 351.1L64 352V96h320V352z"/><path className="fa-secondary" d="M400 32h-352C21.6 32 0 53.6 0 80v352C0 458.4 21.6 480 48 480h352c26.4 0 48-21.6 48-48v-352C448 53.6 426.4 32 400 32zM384 352H64V96h320V352z"/>
</>],
['light',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM416 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32v-32h384V416zM146.9 352C153.5 333.4 171.1 320 192 320h64c20.87 0 38.45 13.4 45.06 32H146.9zM416 352h-81.61C326.1 315.5 294.7 288 256 288H192c-38.7 0-70.97 27.48-78.39 64H32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32V352zM224 128C188.7 128 160 156.7 160 192s28.65 64 64 64s64-28.65 64-64S259.3 128 224 128zM224 224C206.4 224 192 209.6 192 192s14.36-32 32-32s32 14.36 32 32S241.6 224 224 224z"/>
</>],
['regular',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v328c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM400 424c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16v-48h352V424zM400 328h-67.98C321.8 295.6 291.8 272 256 272H192c-35.78 0-65.79 23.6-76.02 56H48V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16V328zM224 112c-35.35 0-64 28.65-64 64s28.65 64 64 64s64-28.65 64-64S259.3 112 224 112z"/>
</>],
['solid',<>
	<path d="M224 256c35.35 0 64-28.66 64-64s-28.65-64-64-64S160 156.7 160 192S188.7 256 224 256zM400 32h-352C21.6 32 0 53.6 0 80v352C0 458.4 21.6 480 48 480h352c26.4 0 48-21.6 48-48v-352C448 53.6 426.4 32 400 32zM384 352h-48c0-35.35-28.65-64-63.1-64H175.1C140.7 288 112 316.7 112 351.1L64 352V96h320V352z"/>
</>],
['thin',<>
	<path d="M400 32h-352C21.49 32 0 53.49 0 80v352C0 458.5 21.49 480 48 480h352c26.51 0 48-21.49 48-48v-352C448 53.49 426.5 32 400 32zM432 432c0 17.64-14.36 32-32 32h-352c-17.64 0-32-14.36-32-32V352h416V432zM130.6 336C137.7 308.5 162.3 288 192 288h64c29.71 0 54.29 20.5 61.43 48H130.6zM432 336h-98.37C326.2 299.6 294.6 272 256 272H192c-38.62 0-70.17 27.59-77.63 64H16v-256c0-17.64 14.36-32 32-32h352c17.64 0 32 14.36 32 32V336zM224 112c-35.34 0-64 28.66-64 64s28.66 64 64 64c35.35 0 64-28.66 64-64S259.3 112 224 112zM224 224C197.5 224 176 202.5 176 176S197.5 128 224 128s48 21.53 48 48S250.5 224 224 224z"/>
</>],

]);

const ImagePolaroidUser: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ImagePolaroidUser.displayName = "ImagePolaroidUser";

export default ImagePolaroidUser;