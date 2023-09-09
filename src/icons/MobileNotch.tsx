
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M288 64h-32v16C256 88.84 248.8 96 240 96h-96C135.2 96 128 88.84 128 80V64H96C87.18 64 80 71.18 80 80v352C80 440.8 87.18 448 96 448h192c8.822 0 16-7.178 16-16v-352C304 71.18 296.8 64 288 64zM240 416h-96C135.2 416 128 408.8 128 400C128 391.2 135.2 384 144 384h96c8.838 0 16 7.162 16 16C256 408.8 248.8 416 240 416z"/><path className="fa-secondary" d="M288 0H96C51.82 0 16 35.82 16 80v352C16 476.2 51.82 512 96 512h192c44.18 0 80-35.82 80-80v-352C368 35.82 332.2 0 288 0zM304 432c0 8.822-7.178 16-16 16H96c-8.822 0-16-7.178-16-16v-352C80 71.18 87.18 64 96 64h32v16C128 88.84 135.2 96 144 96h96C248.8 96 256 88.84 256 80V64h32c8.822 0 16 7.178 16 16V432z"/>
</>],
['light',<>
	<path d="M288 0H96C60.65 0 32 28.65 32 64v384c0 35.35 28.65 64 64 64h192c35.35 0 64-28.65 64-64V64C352 28.65 323.3 0 288 0zM160 32h64v16H160V32zM320 448c0 17.64-14.36 32-32 32H96c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h32v16c0 17.64 14.36 32 32 32h64c17.64 0 32-14.36 32-32V32h32c17.64 0 32 14.36 32 32V448zM224 400H160c-8.836 0-16 7.162-16 16c0 8.836 7.164 16 16 16h64c8.836 0 16-7.164 16-16C240 407.2 232.8 400 224 400z"/>
</>],
['regular',<>
	<path d="M240 400h-96C135.2 400 128 407.2 128 416s7.164 16 16 16h96c8.838 0 16-7.164 16-16S248.8 400 240 400zM304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM320 448c0 8.822-7.178 16-16 16h-224C71.18 464 64 456.8 64 448V64c0-8.822 7.178-16 16-16H128v32C128 88.84 135.2 96 144 96h96C248.8 96 256 88.84 256 80v-32h48C312.8 48 320 55.18 320 64V448z"/>
</>],
['solid',<>
	<path d="M240 384h-96C135.2 384 128 391.2 128 400C128 408.8 135.2 416 144 416h96c8.838 0 16-7.164 16-16C256 391.2 248.8 384 240 384zM288 0H96C51.82 0 16 35.82 16 80v352C16 476.2 51.82 512 96 512h192c44.18 0 80-35.82 80-80v-352C368 35.82 332.2 0 288 0zM304 432c0 8.822-7.178 16-16 16H96c-8.822 0-16-7.178-16-16v-352C80 71.18 87.18 64 96 64h32v16C128 88.84 135.2 96 144 96h96C248.8 96 256 88.84 256 80V64h32c8.822 0 16 7.178 16 16V432z"/>
</>],
['thin',<>
	<path d="M240 440h-96c-4.406 0-8 3.578-8 8s3.594 8 8 8h96c4.406 0 8-3.578 8-8S244.4 440 240 440zM304 0h-224C53.5 0 32 21.5 32 48v416C32 490.5 53.5 512 80 512h224c26.5 0 48-21.5 48-48v-416C352 21.5 330.5 0 304 0zM144 16h96v24c0 4.406-3.594 8-8 8h-80C147.6 48 144 44.41 144 40V16zM336 464c0 17.64-14.36 32-32 32h-224c-17.64 0-32-14.36-32-32v-416c0-17.64 14.36-32 32-32H128v24C128 53.23 138.8 64 152 64h80C245.2 64 256 53.23 256 40V16h48c17.64 0 32 14.36 32 32V464z"/>
</>],

]);

const MobileNotch: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MobileNotch.displayName = "MobileNotch";

export default MobileNotch;
