
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M384 0H64C28.66 0 0 28.65 0 64v400C0 490.4 21.6 512 48 512h352c26.4 0 48-21.6 48-48V64C448 28.65 419.3 0 384 0zM184 64C197.3 64 208 74.75 208 88S197.3 112 184 112S160 101.3 160 88S170.8 64 184 64zM64 88C64 74.75 74.75 64 88 64S112 74.75 112 88S101.3 112 88 112S64 101.3 64 88zM224 448c-79.5 0-143.1-64.5-143.1-144C80.01 224.5 144.5 160 224 160c79.5 0 143.1 64.5 143.1 144C367.1 383.5 303.5 448 224 448z"/><path className="fa-secondary" d="M224 192C167.6 192 121.5 233.8 113.6 288H184C188.4 288 192 291.6 192 296v16C192 316.4 188.4 320 184 320H113.6C121.5 374.2 167.6 416 224 416c61.83 0 111.1-50.17 111.1-112C335.1 242.2 285.8 192 224 192zM184 112c13.25 0 24-10.75 24-24S197.3 64 184 64S160 74.75 160 88S170.8 112 184 112z"/>
</>],
['light',<>
	<path d="M352 0H96C42.98 0 0 42.98 0 96v352c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 42.98 405 0 352 0zM416 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-35.29 28.71-64 64-64h256c35.29 0 64 28.71 64 64V448zM192.1 120C205.3 120 216 109.3 216 96S205.3 72 192.1 72C178.7 72 168 82.75 168 96S178.7 120 192.1 120zM120 96c0-13.25-10.69-24-24-24C82.82 72 72 82.75 72 96S82.82 120 96 120C109.3 120 120 109.3 120 96zM224 160C144.5 160 80.01 224.5 80.01 304S144.5 448 224 448s143.1-64.5 143.1-144S303.5 160 224 160zM224 416c-56.27 0-102.5-41.86-110.4-96H176C184.8 320 192 312.8 192 304S184.8 288 176 288H113.6C121.5 233.9 167.7 192 224 192c61.75 0 111.1 50.24 111.1 112S285.7 416 224 416z"/>
</>],
['regular',<>
	<path d="M368 0h-288C35.82 0 0 35.82 0 80V448c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V80C448 35.82 412.2 0 368 0zM400 448c0 8.824-7.178 16-16 16H64c-8.822 0-16-7.176-16-16V80c0-17.64 14.36-32 32-32h288c17.64 0 32 14.36 32 32V448zM128.1 104c0-13.25-10.83-24-24.02-24c-13.31 0-24.02 10.75-24.02 24S90.72 128 104 128C117.2 128 128.1 117.3 128.1 104zM184.1 128c13.19 0 23.89-10.75 23.89-24S197.2 80 184.1 80c-13.31 0-24.02 10.75-24.02 24S170.7 128 184.1 128zM224 160C148.8 160 87.98 220.9 87.98 296S148.8 432 224 432s136-60.88 136-136S299.2 160 224 160zM224 384c-40.16 0-73.74-27.18-84.27-64H176c13.25 0 24-10.75 24-24S189.3 272 176 272H139.7C150.3 235.2 183.8 208 224 208c48.53 0 88.02 39.48 88.02 88S272.5 384 224 384z"/>
</>],
['solid',<>
	<path d="M384 0H64C28.65 0 0 28.65 0 64v400C0 490.4 21.6 512 48 512h352c26.4 0 48-21.6 48-48V64C448 28.65 419.3 0 384 0zM184 64C197.3 64 208 74.75 208 88S197.3 112 184 112S160 101.3 160 88S170.8 64 184 64zM64 88C64 74.75 74.75 64 88 64S112 74.75 112 88S101.3 112 88 112S64 101.3 64 88zM224 448c-79.5 0-143.1-64.5-143.1-144C80.01 224.5 144.5 160 224 160c79.5 0 143.1 64.5 143.1 144C367.1 383.5 303.5 448 224 448zM224 192C167.6 192 121.5 233.8 113.6 288H184C188.4 288 192 291.6 192 296v16C192 316.4 188.4 320 184 320H113.6C121.5 374.2 167.6 416 224 416c61.83 0 111.1-50.17 111.1-112C335.1 242.2 285.8 192 224 192z"/>
</>],
['thin',<>
	<path d="M384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V64C448 28.65 419.3 0 384 0zM432 448c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V64c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48V448zM112 96c0-8.838-7.164-16-16-16S80 87.16 80 96c0 8.836 7.164 16 16 16S112 104.8 112 96zM160 112c8.836 0 16-7.164 16-16c0-8.838-7.164-16-16-16S144 87.16 144 96C144 104.8 151.2 112 160 112zM224 168c-75.11 0-136 60.89-136 136s60.89 136 136 136s136-60.89 136-136S299.1 168 224 168zM224 424c-63.43 0-114.1-49.62-119.2-112H184C188.4 312 192 308.4 192 304S188.4 296 184 296H104.8C109 233.6 160.6 184 224 184c66.17 0 120 53.83 120 120S290.2 424 224 424z"/>
</>],

]);

const Dryer: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Dryer.displayName = "Dryer";

export default Dryer;
