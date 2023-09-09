
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 64c0-35.35-28.65-64-64-64S128 28.65 128 64C92.65 64 64 92.65 64 128v16C64 152.8 71.16 160 80 160h224C312.8 160 320 152.8 320 144V128C320 92.65 291.3 64 256 64zM192 88C178.7 88 168 77.25 168 64c0-13.26 10.75-24 24-24S216 50.74 216 64C216 77.25 205.3 88 192 88zM272 288H224V240C224 231.2 216.8 224 208 224h-32C167.2 224 160 231.2 160 240V288H112C103.2 288 96 295.2 96 304v32C96 344.8 103.2 352 112 352H160v48C160 408.8 167.2 416 176 416h32c8.8 0 16-7.2 16-16V352h48c8.8 0 16-7.2 16-16v-32C288 295.2 280.8 288 272 288z"/><path className="fa-secondary" d="M336 64H256c35.35 0 64 28.65 64 64v16C320 152.8 312.8 160 304 160h-224C71.16 160 64 152.8 64 144V128c0-35.35 28.65-64 64-64H48C21.49 64 0 85.49 0 112v352C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48v-352C384 85.49 362.5 64 336 64zM288 336c0 8.8-7.2 16-16 16H224v48c0 8.8-7.2 16-16 16h-32C167.2 416 160 408.8 160 400V352H112C103.2 352 96 344.8 96 336v-32C96 295.2 103.2 288 112 288H160V240C160 231.2 167.2 224 176 224h32C216.8 224 224 231.2 224 240V288h48C280.8 288 288 295.2 288 304V336z"/>
</>],
['light',<>
	<path d="M112 128h160C280.8 128 288 120.8 288 112S280.8 96 272 96h-24.88C252.6 86.55 256 75.72 256 64c0-35.34-28.65-64-64-64S128 28.66 128 64c0 11.72 3.379 22.55 8.877 32H112C103.2 96 96 103.2 96 112S103.2 128 112 128zM192 32c17.64 0 32 14.36 32 32s-14.36 32-32 32S160 81.64 160 64S174.4 32 192 32zM320 64c-8.844 0-16 7.156-16 16S311.2 96 320 96c17.64 0 32 14.34 32 32v320c0 17.66-14.36 32-32 32H64c-17.64 0-32-14.34-32-32V128c0-17.66 14.36-32 32-32c8.844 0 16-7.156 16-16S72.84 64 64 64C28.7 64 0 92.72 0 128v320c0 35.28 28.7 64 64 64h256c35.3 0 64-28.72 64-64V128C384 92.72 355.3 64 320 64zM112 336H160V384c0 8.836 7.164 16 16 16h32c8.836 0 16-7.164 16-16v-48h48c8.836 0 16-7.164 16-16V288c0-8.836-7.164-16-16-16H224V224c0-8.836-7.164-16-16-16h-32C167.2 208 160 215.2 160 224v48H112C103.2 272 96 279.2 96 288v32C96 328.8 103.2 336 112 336z"/>
</>],
['regular',<>
	<path d="M320 64h-49.61C262.1 27.48 230.7 0 192 0S121 27.48 113.6 64H64C28.65 64 0 92.66 0 128v320c0 35.34 28.65 64 64 64h256c35.35 0 64-28.66 64-64V128C384 92.66 355.3 64 320 64zM192 48c13.23 0 24 10.77 24 24S205.2 96 192 96S168 85.23 168 72S178.8 48 192 48zM336 448c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V128c0-8.82 7.178-16 16-16h18.26C80.93 117.1 80 122.4 80 128v16C80 152.8 87.16 160 96 160h192c8.836 0 16-7.164 16-16V128c0-5.559-.9316-10.86-2.264-16H320c8.822 0 16 7.18 16 16V448zM272 288H224V240C224 231.2 216.8 224 208 224h-32C167.2 224 160 231.2 160 240V288H112C103.2 288 96 295.2 96 304v32C96 344.8 103.2 352 112 352H160v48C160 408.8 167.2 416 176 416h32c8.801 0 16-7.203 16-16V352h48c8.801 0 16-7.203 16-16v-32C288 295.2 280.8 288 272 288z"/>
</>],
['solid',<>
	<path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM288 336c0 8.799-7.199 16-16 16H224v48c0 8.799-7.199 16-16 16h-32C167.2 416 160 408.8 160 400V352H112C103.2 352 96 344.8 96 336v-32C96 295.2 103.2 288 112 288H160V240C160 231.2 167.2 224 176 224h32C216.8 224 224 231.2 224 240V288h48C280.8 288 288 295.2 288 304V336z"/>
</>],
['thin',<>
	<path d="M192 96c8.836 0 16-7.164 16-16C208 71.16 200.8 64 192 64S176 71.16 176 80C176 88.84 183.2 96 192 96zM355.2 100c-4.094-1.719-8.75 .0625-10.53 4.156c-1.75 4.031 .0938 8.75 4.156 10.53C360.5 119.8 368 131.3 368 144v320c0 17.66-14.34 32-32 32h-288c-17.66 0-32-14.34-32-32v-320c0-12.69 7.531-24.19 19.22-29.31c4.031-1.75 5.875-6.469 4.094-10.53C37.56 100.1 32.94 98.22 28.78 100.1C11.31 107.7 0 124.1 0 144v320C0 490.5 21.53 512 48 512h288c26.47 0 48-21.53 48-48v-320C384 124.9 372.7 107.6 355.2 100zM96 160h192c17.67 0 32-14.33 32-32V113.6C320 86.21 297.8 64 270.4 64C262.1 27.48 230.7 0 192 0S121 27.48 113.6 64C86.21 64 64 86.21 64 113.6V128C64 145.7 78.33 160 96 160zM80 113.6C80 95.05 95.05 80 113.6 80h13.08l1.846-9.094c4.986-24.56 22.27-46.17 46.48-52.65c36.93-9.881 72.56 13.83 79.69 48.93L257.3 80h13.08C288.1 80 304 95.05 304 113.6V128c0 8.836-7.162 16-16 16H96C87.16 144 80 136.8 80 128V113.6zM165.8 448h52.36c8.836 0 16-7.164 16-16v-53.82H288c8.836 0 16-7.164 16-16V309.8c0-8.838-7.164-16-16-16h-53.82V240c0-8.838-7.164-16-16-16H165.8c-8.836 0-16 7.162-16 16v53.82H96c-8.836 0-16 7.162-16 16v52.36c0 8.836 7.164 16 16 16h53.82V432C149.8 440.8 156.1 448 165.8 448zM96 362.2V309.8h69.82V240h52.36v69.82H288v52.36h-69.82V432H165.8v-69.82H96z"/>
</>],

]);

const ClipboardMedical: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ClipboardMedical.displayName = "ClipboardMedical";

export default ClipboardMedical;
