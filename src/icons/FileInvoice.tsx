
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 0v128h128L256 0zM304 224h-224C71.13 224 64 231.1 64 240v96C64 344.9 71.13 352 80 352h224c8.875 0 16-7.125 16-16v-96C320 231.1 312.9 224 304 224zM288 320H96V256h192V320zM312 416h-80C227.6 416 224 419.6 224 424v16c0 4.375 3.625 8 8 8h80c4.375 0 8-3.625 8-8v-16C320 419.6 316.4 416 312 416z"/><path className="fa-secondary" d="M256 128V0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V128H256zM64 72C64 67.63 67.63 64 72 64h80C156.4 64 160 67.63 160 72v16C160 92.38 156.4 96 152 96h-80C67.63 96 64 92.38 64 88V72zM64 136C64 131.6 67.63 128 72 128h80C156.4 128 160 131.6 160 136v16C160 156.4 156.4 160 152 160h-80C67.63 160 64 156.4 64 152V136zM320 440c0 4.375-3.625 8-8 8h-80C227.6 448 224 444.4 224 440v-16c0-4.375 3.625-8 8-8h80c4.375 0 8 3.625 8 8V440zM320 336c0 8.875-7.125 16-16 16h-224C71.13 352 64 344.9 64 336v-96C64 231.1 71.13 224 80 224h224C312.9 224 320 231.1 320 240V336z"/>
</>],
['light',<>
	<path d="M80 160h64C152.8 160 160 152.8 160 144S152.8 128 144 128h-64C71.16 128 64 135.2 64 144S71.16 160 80 160zM80 96h64C152.8 96 160 88.84 160 80S152.8 64 144 64h-64C71.16 64 64 71.16 64 80S71.16 96 80 96zM365.3 125.3l-106.5-106.5C246.7 6.742 230.5 0 213.5 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.35 28.65 64 64 64H320c35.35 0 64-28.65 64-64V170.5C384 153.5 377.3 137.3 365.3 125.3zM224 34.08c4.477 1.566 8.666 3.846 12.12 7.299l106.5 106.5C346.1 151.3 348.4 155.5 349.9 160H240C231.2 160 224 152.8 224 144V34.08zM352 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h128v112C192 170.5 213.5 192 240 192H352V448zM64 272v64c0 17.64 14.36 32 32 32h192c17.64 0 32-14.36 32-32v-64c0-17.64-14.36-32-32-32H96C78.36 240 64 254.4 64 272zM288 336H96v-64h192V336zM304 416h-64c-8.844 0-16 7.156-16 16s7.156 16 16 16h64c8.844 0 16-7.156 16-16S312.8 416 304 416z"/>
</>],
['regular',<>
	<path d="M80 256v64c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V256c0-17.67-14.33-32-32-32h-160C94.33 224 80 238.3 80 256zM365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM96 128h80C184.8 128 192 120.8 192 112S184.8 96 176 96H96C87.16 96 80 103.2 80 112S87.16 128 96 128zM96 192h80C184.8 192 192 184.8 192 176S184.8 160 176 160H96C87.16 160 80 167.2 80 176S87.16 192 96 192zM288 384h-80c-8.844 0-16 7.156-16 16s7.156 16 16 16H288c8.844 0 16-7.156 16-16S296.8 384 288 384z"/>
</>],
['solid',<>
	<path d="M256 0v128h128L256 0zM288 256H96v64h192V256zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM64 72C64 67.63 67.63 64 72 64h80C156.4 64 160 67.63 160 72v16C160 92.38 156.4 96 152 96h-80C67.63 96 64 92.38 64 88V72zM64 136C64 131.6 67.63 128 72 128h80C156.4 128 160 131.6 160 136v16C160 156.4 156.4 160 152 160h-80C67.63 160 64 156.4 64 152V136zM320 440c0 4.375-3.625 8-8 8h-80C227.6 448 224 444.4 224 440v-16c0-4.375 3.625-8 8-8h80c4.375 0 8 3.625 8 8V440zM320 240v96c0 8.875-7.125 16-16 16h-224C71.13 352 64 344.9 64 336v-96C64 231.1 71.13 224 80 224h224C312.9 224 320 231.1 320 240z"/>
</>],
['thin',<>
	<path d="M72 80h80C156.4 80 160 76.41 160 72S156.4 64 152 64h-80C67.59 64 64 67.59 64 72S67.59 80 72 80zM72 144h80C156.4 144 160 140.4 160 136S156.4 128 152 128h-80C67.59 128 64 131.6 64 136S67.59 144 72 144zM374.6 150.6l-141.3-141.3C227.4 3.371 219.2 0 210.7 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.35 0 64-28.66 64-64V173.3C384 164.8 380.6 156.6 374.6 150.6zM224 22.63L361.4 160H248C234.8 160 224 149.2 224 136V22.63zM368 448c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V64c0-26.47 21.53-48 48-48h144v120c0 22.06 17.94 40 40 40h120V448zM312 432h-80c-4.406 0-8 3.594-8 8S227.6 448 232 448h80c4.406 0 8-3.594 8-8S316.4 432 312 432zM64 240v96C64 344.8 71.16 352 80 352h224c8.836 0 16-7.164 16-16v-96C320 231.2 312.8 224 304 224h-224C71.16 224 64 231.2 64 240zM304 336h-224v-96h224V336z"/>
</>],

]);

const FileInvoice: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FileInvoice.displayName = "FileInvoice";

export default FileInvoice;