
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M288 294h-54V240c0-8.836-7.164-16-16-16h-52c-8.835 0-16 7.164-16 16v54H96c-8.836 0-16 7.163-16 16v52c0 8.835 7.164 16 16 16h53.1V432c0 8.836 7.165 16 16 16h52c8.836 0 16-7.164 16-16v-53.1H288c8.836 0 16-7.165 16-16v-52C304 301.2 296.8 294 288 294zM256 0v128h128L256 0z"/><path className="fa-secondary" d="M256 128V0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V128H256zM304 362c0 8.835-7.164 16-16 16h-54V432c0 8.836-7.164 16-16 16h-52c-8.835 0-16-7.164-16-16v-53.1H96c-8.836 0-16-7.165-16-16v-52c0-8.837 7.164-16 16-16h53.1V240c0-8.836 7.165-16 16-16h52c8.836 0 16 7.164 16 16v54H288c8.836 0 16 7.163 16 16V362z"/>
</>],
['light',<>
	<path d="M365.3 125.3l-106.5-106.5C246.7 6.742 230.5 0 213.5 0H64C28.65 0 0 28.66 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.35 0 64-28.66 64-64V170.5C384 153.5 377.3 137.3 365.3 125.3zM224 34.08c4.477 1.562 8.666 3.844 12.12 7.297l106.5 106.5C346.1 151.3 348.4 155.5 349.9 160H240C231.2 160 224 152.8 224 144V34.08zM352 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h128v112C192 170.5 213.5 192 240 192H352V448zM224 240C224 231.2 216.8 224 208 224h-32C167.2 224 160 231.2 160 240V288H112C103.2 288 96 295.2 96 303.1V336c0 8.836 7.164 15.1 16 15.1l48 .0006v47.1C160 408.8 167.2 416 176 416h32c8.836 0 16-7.166 16-16v-47.1l48-.0006c8.836 0 16-7.162 16-15.1V303.1C288 295.2 280.8 288 272 288H224V240z"/>
</>],
['regular',<>
	<path d="M224 240C224 231.2 216.8 224 208 224h-32C167.2 224 160 231.2 160 240V288H112C103.2 288 96 295.2 96 303.1V336c0 8.797 7.199 15.1 16 15.1l48 .0006v47.1C160 408.8 167.2 416 176 416h32c8.801 0 16-7.201 16-16v-47.1l48-.0006c8.801 0 16-7.201 16-15.1V303.1C288 295.2 280.8 288 272 288H224V240zM365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448z"/>
</>],
['solid',<>
	<path d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM288 301.7v36.57C288 345.9 281.9 352 274.3 352L224 351.1v50.29C224 409.9 217.9 416 210.3 416H173.7C166.1 416 160 409.9 160 402.3V351.1L109.7 352C102.1 352 96 345.9 96 338.3V301.7C96 294.1 102.1 288 109.7 288H160V237.7C160 230.1 166.1 224 173.7 224h36.57C217.9 224 224 230.1 224 237.7V288h50.29C281.9 288 288 294.1 288 301.7z"/>
</>],
['thin',<>
	<path d="M374.6 150.6l-141.3-141.3C227.4 3.371 219.2 0 210.7 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.35 0 64-28.66 64-64V173.3C384 164.8 380.6 156.6 374.6 150.6zM224 22.63L361.4 160H248C234.8 160 224 149.2 224 136V22.63zM368 448c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V64c0-26.47 21.53-48 48-48h144v120c0 22.06 17.94 40 40 40h120V448zM232 232c0-8.828-7.172-16-16-16h-48c-8.828 0-16 7.172-16 16v48h-48c-8.828 0-16 7.172-16 16v48c0 8.828 7.172 16 16 16h48v48c0 8.828 7.172 16 16 16h48c8.828 0 16-7.172 16-16v-48h48c8.828 0 16-7.172 16-16v-48c0-8.828-7.172-16-16-16h-48V232zM280 296v48h-64v64h-48v-64h-64v-48h64v-64h48v64H280z"/>
</>],

]);

const FileMedical: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FileMedical.displayName = "FileMedical";

export default FileMedical;
