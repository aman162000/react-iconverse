
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M233.9 382.8C227.9 380.3 224 374.5 224 368v-64H128c-17.67 0-32-14.33-32-32v-32c0-17.67 14.33-32 32-32h96v-64c0-6.469 3.891-12.31 9.875-14.78c5.984-2.484 12.86-1.109 17.44 3.469l112 112c6.248 6.248 6.248 16.38 0 22.62l-112 112C246.7 383.9 239.9 385.3 233.9 382.8z"/><path className="fa-secondary" d="M448 416V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320C419.3 480 448 451.3 448 416zM233.9 382.8C227.9 380.3 224 374.5 224 368v-64H128c-17.67 0-32-14.33-32-32v-32c0-17.67 14.33-32 32-32h96v-64c0-6.469 3.891-12.31 9.875-14.78c5.984-2.484 12.86-1.109 17.44 3.469l112 112c6.248 6.248 6.248 16.38 0 22.62l-112 112C246.7 383.9 239.9 385.3 233.9 382.8z"/>
</>],
['light',<>
	<path d="M448 416V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320C419.3 480 448 451.3 448 416zM64 448c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320c0 17.64-14.36 32-32 32H64zM356.3 284.3c15.12-15.12 15.33-41.25-.2031-56.75l-95.8-92.5c-11.48-11.47-28.59-14.88-43.59-8.688C201.7 132.6 192 147.1 192 163.3V192H120C97.94 192 80 209.9 80 232v48C80 302.1 97.94 320 120 320H192v28.69c0 16.25 9.688 30.75 24.69 36.97c14.95 6.188 32 2.812 43.48-8.562L356.3 284.3zM224 348.7V288H120C115.6 288 112 284.4 112 280v-48C112 227.6 115.6 224 120 224H224V163.3c0-6.414 8.048-11.26 13.86-5.471l95.8 92.5c4.205 4.162 1.796 9.532 .2031 11.12l-96 92.69C233 359 224 356.1 224 348.7z"/>
</>],
['regular',<>
	<path d="M248.2 150.2C241.1 143.8 230.1 142.2 222.3 146.1S208 158.5 208 167.1v56L120 224C106.8 224 96 234.8 96 248v16C96 277.3 106.8 288 120 288L208 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C349.2 268.3 352 261.9 352 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L248.2 150.2zM384 32H64C28.66 32 0 60.66 0 96v320c0 35.34 28.66 64 64 64h320c35.34 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM400 416c0 8.82-7.18 16-16 16H64c-8.82 0-16-7.18-16-16V96c0-8.82 7.18-16 16-16h320c8.82 0 16 7.18 16 16V416z"/>
</>],
['solid',<>
	<path d="M448 416V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320C419.3 480 448 451.3 448 416zM233.9 382.8C227.9 380.3 224 374.5 224 368v-64H128c-17.67 0-32-14.33-32-32v-32c0-17.67 14.33-32 32-32h96v-64c0-6.469 3.891-12.31 9.875-14.78c5.984-2.484 12.86-1.109 17.44 3.469l112 112c6.248 6.248 6.248 16.38 0 22.62l-112 112C246.7 383.9 239.9 385.3 233.9 382.8z"/>
</>],
['thin',<>
	<path d="M0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96zM384 48c26.47 0 48 21.53 48 48v320c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48H384zM224 163.3V208H120C106.7 208 96 218.7 96 232v48C96 293.3 106.7 304 120 304H224v44.69c0 21.38 25.85 32.09 40.97 16.97l92.68-92.68C362.3 268.3 364.7 262.1 364.7 256s-2.344-12.28-7.029-16.97l-92.68-92.68C249.9 131.2 224 141.9 224 163.3zM253.7 157.7l92.68 92.68C348.4 252.4 348.7 254.8 348.7 256s-.3047 3.617-2.344 5.656l-92.68 92.68c-3.412 3.412-7.232 2.35-8.719 1.736C243.5 355.5 240 353.5 240 348.7V288H120C115.6 288 112 284.4 112 280v-48C112 227.6 115.6 224 120 224h120V163.3c0-4.824 3.453-6.777 4.938-7.393C246.4 155.3 250.2 154.2 253.7 157.7z"/>
</>],

]);

const SquareRight: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SquareRight.displayName = "SquareRight";

export default SquareRight;
