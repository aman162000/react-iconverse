
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M192 352V128h-144c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48L288 416h-32C220.7 416 192 387.3 192 352zM416 0v96h96L416 0z"/><path className="fa-secondary" d="M512 96v240c0 26.51-21.49 48-48 48h-192c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48H416v96H512z"/>
</>],
['light',<>
	<path d="M272 416C263.2 416 256 423.2 256 432V448c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32V192c0-17.67 14.33-32 32-32h112C184.8 160 192 152.8 192 144C192 135.2 184.8 128 176 128H63.99c-35.35 0-64 28.65-64 64l.0098 256C0 483.3 28.65 512 64 512h160c35.35 0 64-28.65 64-64v-16C288 423.2 280.8 416 272 416zM502.6 86.63l-77.25-77.25C419.4 3.371 411.2 0 402.7 0H288C252.7 0 224 28.65 224 64v256c0 35.35 28.65 64 64 64h160c35.35 0 64-28.65 64-64V109.3C512 100.8 508.6 92.63 502.6 86.63zM416 45.25L466.7 96H416V45.25zM480 320c0 17.67-14.33 32-32 32h-160c-17.67 0-32-14.33-32-32V64c0-17.67 14.33-32 32-32h96l.0026 64c0 17.67 14.33 32 32 32H480V320z"/>
</>],
['regular',<>
	<path d="M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z"/>
</>],
['solid',<>
	<path d="M384 96L384 0h-112c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48H464c26.51 0 48-21.49 48-48V128h-95.1C398.4 128 384 113.6 384 96zM416 0v96h96L416 0zM192 352V128h-144c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48L288 416h-32C220.7 416 192 387.3 192 352z"/>
</>],
['thin',<>
	<path d="M502.6 102.6l-93.26-93.25C403.4 3.371 395.2 0 386.7 0H271.1c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48H464c26.51 0 48-21.49 48-48l-.0001-210.7C511.1 116.8 508.6 108.6 502.6 102.6zM399.1 22.63L489.4 112h-65.38c-13.22 0-24-10.77-24-24V22.63zM495.1 336c0 17.64-14.36 32-32 32h-192c-17.64 0-32-14.36-32-32v-288c0-17.64 14.36-32 32-32h112v72c0 22.06 17.94 40 40 40h72V336zM279.1 448c-4.418 0-8 3.582-8 8v8c0 17.67-14.33 32-32 32h-192c-17.67 0-32-14.33-32-32v-288c0-17.67 14.33-32 32-32h104c4.418 0 8-3.582 8-8S156.4 128 151.1 128H47.1c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48l0-8C287.1 451.6 284.4 448 279.1 448z"/>
</>],

]);

const Copy: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Copy.displayName = "Copy";

export default Copy;
