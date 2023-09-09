
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M512 24V160c0 12.94-7.781 24.61-19.75 29.56c-12 4.906-25.72 2.203-34.88-6.938L416 141.3l-201.4 201.4C208.4 348.9 200.2 352 192 352s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L370.8 96l-41.38-41.38c-9.156-9.156-11.91-22.91-6.938-34.88C327.4 7.797 339.1 0 352 0h136C501.3 0 512 10.74 512 24z"/><path className="fa-secondary" d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320z"/>
</>],
['light',<>
	<path d="M400 320c-8.836 0-16 7.164-16 16V448c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32V160c0-17.67 14.33-32 32-32h112C184.8 128 192 120.8 192 112S184.8 96 176 96L64 96c-35.35 0-64 28.65-64 64V448c0 35.35 28.65 64 64 64h288c35.35 0 64-28.65 64-64v-112C416 327.2 408.8 320 400 320zM480 0h-111.1c-13 0-24.59 7.766-29.56 19.77s-2.25 25.69 6.938 34.86l44.67 44.67l-209.4 209.4c-6.25 6.25-6.25 16.38 0 22.62C183.8 334.4 187.9 336 192 336s8.188-1.562 11.31-4.688l209.4-209.4l44.68 44.68c6.156 6.125 14.28 9.375 22.59 9.375c4.125 0 8.312-.8125 12.28-2.453C504.3 168.5 512 156.1 512 143.1V32C512 14.36 497.7 0 480 0zM480 143.1l-112-111.1c0 0-.0938 0 0 0L480 32V143.1z"/>
</>],
['regular',<>
	<path d="M488 0h-135.3c-13.25 0-25.09 7.906-30.19 20.16c-5.062 12.28-2.281 26.25 7.094 35.63l40.69 40.69L177.4 289.4c-12.5 12.5-12.5 32.75 0 45.25C183.6 340.9 191.8 344 200 344s16.38-3.125 22.62-9.375l192.9-192.9l40.69 40.69C462.5 188.7 470.8 192 479.3 192c4.219 0 8.469-.8125 12.56-2.5C504.1 184.4 512 172.6 512 159.3V24C512 10.75 501.3 0 488 0zM392 320c-13.25 0-24 10.75-24 24v112c0 4.406-3.594 8-8 8h-304c-4.406 0-8-3.594-8-8v-304c0-4.406 3.594-8 8-8h112C181.3 144 192 133.3 192 120S181.3 96 168 96h-112C25.13 96 0 121.1 0 152v304C0 486.9 25.13 512 56 512h304c30.88 0 56-25.12 56-56v-112C416 330.8 405.3 320 392 320z"/>
</>],
['solid',<>
	<path d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z"/>
</>],
['thin',<>
	<path d="M440 279c-4.406 0-8 3.578-8 8V440c0 30.88-25.12 56-56 56h-304c-30.88 0-56-25.12-56-56v-304c0-30.88 25.12-56 56-56h152.3c4.406 0 8-3.578 8-8S228.7 64 224.3 64H72C32.31 64 0 96.3 0 136v304C0 479.7 32.31 512 72 512h304c39.69 0 72-32.3 72-72V287C448 282.6 444.4 279 440 279zM488 0h-142.2c-22.92 0-34.4 27.71-18.19 43.92l64.59 64.59l-229.8 229.8c-3.125 3.125-3.125 8.188 0 11.31C163.9 351.2 165.9 352 168 352s4.094-.7813 5.656-2.344l229.8-229.8l64.59 64.59C473.3 189.7 479.8 192 486.1 192C499.3 192 512 181.7 512 166.2V24C512 10.75 501.3 0 488 0zM496 166.2C496 172.1 490.2 176 486.1 176c-2.516 0-4.766-.9746-6.691-2.898l-140.5-140.5c-4.148-4.148-2.855-8.795-2.109-10.6C337.5 20.2 339.9 16 345.8 16H488c4.41 0 8 3.59 8 8V166.2z"/>
</>],

]);

const UpRightFromSquare: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

UpRightFromSquare.displayName = "UpRightFromSquare";

export default UpRightFromSquare;