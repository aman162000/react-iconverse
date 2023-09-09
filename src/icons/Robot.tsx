
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M464 96h-288C131.8 96 96 131.8 96 176V448c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V176C544 131.8 508.3 96 464 96zM256 416H192v-32h64V416zM224 296C201.9 296 184 278.1 184 256S201.9 216 224 216S264 233.9 264 256S246.1 296 224 296zM352 416H288v-32h64V416zM448 416h-64v-32h64V416zM416 296c-22.12 0-40-17.88-40-40S393.9 216 416 216S456 233.9 456 256S438.1 296 416 296z"/><path className="fa-secondary" d="M41.38 233.4C35.38 239.4 32 247.5 32 256v128c0 8.5 3.375 16.62 9.375 22.62S55.5 416 64 416h32V224H64C55.5 224 47.38 227.4 41.38 233.4zM598.6 233.4C592.6 227.4 584.5 224 576 224h-32v192h32c8.5 0 16.62-3.375 22.62-9.375S608 392.5 608 384V256C608 247.5 604.6 239.4 598.6 233.4zM320 0C302.4 0 288 14.38 288 32v64h64V32C352 14.38 337.6 0 320 0zM192 416h64v-32H192V416zM288 416h64v-32H288V416zM384 416h64v-32h-64V416z"/>
</>],
['light',<>
	<path d="M448 96h-112V16C336 7.156 328.8 0 320 0S304 7.156 304 16V96H192C138.1 96 96 138.1 96 192v224c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96V192C544 138.1 501 96 448 96zM512 384h-16c-8.844 0-16 7.156-16 16s7.156 16 16 16H512c0 35.29-28.71 64-64 64H192c-35.29 0-64-28.71-64-64h16C152.8 416 160 408.8 160 400S152.8 384 144 384H128V192c0-35.29 28.71-64 64-64h256c35.29 0 64 28.71 64 64V384zM36.72 228.6C39.72 225.6 43.66 224 47.84 224C56.66 224 63.97 216.9 64 208C64.03 199.2 56.88 192 48.03 192C35.31 192 23.19 196.9 14.16 205.9C5.031 215 0 227.1 0 240v127.1C0 394.5 21.47 416 47.88 416c8.844 0 16.06-7.156 16.06-16s-7.156-16-16-16C39.19 384 32 376.8 32 367.1V240C32 235.7 33.69 231.6 36.72 228.6zM592.1 192c-8.844 0-16 7.156-16 16S583.3 224 592.1 224C600.9 224 608 231.2 608 240v127.1c0 4.328-1.688 8.375-4.719 11.41C600.3 382.4 596.3 384 592.1 384C583.3 384 576 391.1 576 399.1C575.1 408.8 583.1 415.1 591.9 416c12.72 0 24.88-4.938 33.91-13.94C634.1 392.1 640 380.9 640 367.1V240C640 213.5 618.5 192 592.1 192zM240 384h-32C199.2 384 192 391.2 192 400S199.2 416 208 416h32C248.8 416 256 408.8 256 400S248.8 384 240 384zM336 384h-32C295.2 384 288 391.2 288 400S295.2 416 304 416h32c8.844 0 16-7.156 16-16S344.8 384 336 384zM432 384h-32c-8.844 0-16 7.156-16 16s7.156 16 16 16h32c8.844 0 16-7.156 16-16S440.8 384 432 384zM224 192C188.7 192 160 220.7 160 256s28.72 64 64 64s64-28.7 64-64S259.3 192 224 192zM224 288C206.3 288 192 273.6 192 256s14.34-32 32-32s32 14.36 32 32S241.7 288 224 288zM416 192c-35.28 0-64 28.7-64 64s28.72 64 64 64s64-28.7 64-64S451.3 192 416 192zM416 288c-17.66 0-32-14.36-32-32s14.34-32 32-32s32 14.36 32 32S433.7 288 416 288z"/>
</>],
['regular',<>
	<path d="M352 400c0 8.836-7.164 16-16 16h-32C295.2 416 288 408.8 288 400C288 391.2 295.2 384 304 384h32C344.8 384 352 391.2 352 400zM240 384H192c-8.836 0-16 7.162-16 16C176 408.8 183.2 416 192 416h48C248.8 416 256 408.8 256 400C256 391.2 248.8 384 240 384zM172 260C172 222.5 202.5 192 240 192c37.5 0 68 30.5 68 68c0 37.49-30.5 68-68 68C202.5 328 172 297.5 172 260zM220 260c0 11.04 8.955 20 20 20c11.05 0 20-8.955 20-20C260 248.1 251 240 240 240C228.1 240 220 248.1 220 260zM468 260c0 37.49-30.58 67.1-68.07 67.1c-.0254 0 .0254 0 0 0s.0254 0 0 0c-37.5 0-68.07-30.5-68.07-67.1c0-37.5 30.58-67.1 68.07-67.1c.0254 0-.0254 0 0 0s-.0254 0 0 0C437.4 192 468 222.5 468 260zM419.9 260c0-11.02-8.916-19.94-19.93-19.99C388.9 240.1 380 248.1 380 260c0 11.02 8.916 19.94 19.93 19.99C410.9 279.9 419.9 271 419.9 260zM448 384h-48c-8.836 0-16 7.162-16 16c0 8.836 7.164 16 16 16H448c8.836 0 16-7.164 16-16C464 391.2 456.8 384 448 384zM544 176v256c0 44.18-35.82 80-80 80h-288C131.8 512 96 476.2 96 432v-256C96 131.8 131.8 96 176 96h120V24C296 10.75 306.8 0 320 0s24 10.75 24 24V96h120C508.2 96 544 131.8 544 176zM496 176c0-17.64-14.36-32-32-32h-288c-17.64 0-32 14.36-32 32v256c0 17.64 14.36 32 32 32h288c17.64 0 32-14.36 32-32V176zM592.1 192H576v192h16.08C609.8 384 624 369.7 624 352V224C624 206.3 609.7 192 592.1 192zM16 224v128c0 17.67 14.26 32 31.94 32H64V192H48.03C30.36 192 16 206.3 16 224z"/>
</>],
['solid',<>
	<path d="M9.375 233.4C3.375 239.4 0 247.5 0 256v128c0 8.5 3.375 16.62 9.375 22.62S23.5 416 32 416h32V224H32C23.5 224 15.38 227.4 9.375 233.4zM464 96H352V32c0-17.62-14.38-32-32-32S288 14.38 288 32v64H176C131.8 96 96 131.8 96 176V448c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V176C544 131.8 508.3 96 464 96zM256 416H192v-32h64V416zM224 296C201.9 296 184 278.1 184 256S201.9 216 224 216S264 233.9 264 256S246.1 296 224 296zM352 416H288v-32h64V416zM448 416h-64v-32h64V416zM416 296c-22.12 0-40-17.88-40-40S393.9 216 416 216S456 233.9 456 256S438.1 296 416 296zM630.6 233.4C624.6 227.4 616.5 224 608 224h-32v192h32c8.5 0 16.62-3.375 22.62-9.375S640 392.5 640 384V256C640 247.5 636.6 239.4 630.6 233.4z"/>
</>],
['thin',<>
	<path d="M224 208C197.5 208 176 229.5 176 256S197.5 304 224 304S272 282.5 272 256S250.5 208 224 208zM224 288C206.3 288 192 273.7 192 256s14.33-32 32-32c17.67 0 32 14.33 32 32S241.7 288 224 288zM40 208L64 208c4.406 0 8-3.633 8-8.039S68.41 192 64 192H40C17.94 192 0 209.9 0 232v144C0 398.1 17.94 416 40 416H64c4.406 0 8-3.594 8-8S68.34 400 63.94 400H40c-13.22 0-24-10.78-24-24v-144C16 218.8 26.78 208 40 208zM416 208c-26.47 0-48 21.53-48 48s21.53 48 48 48s48-21.53 48-48S442.5 208 416 208zM416 288c-17.67 0-32-14.33-32-32s14.33-32 32-32c17.67 0 32 14.33 32 32S433.7 288 416 288zM448 96h-120V8C328 3.594 324.4 0 320 0S312 3.594 312 8V96H192C138.1 96 96 138.1 96 192v224c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96V192C544 138.1 501 96 448 96zM528 400h-40c-4.406 0-8 3.594-8 8S483.6 416 488 416h40c0 44.11-35.89 80-80 80H192c-44.11 0-80-35.89-80-80h40C156.4 416 160 412.4 160 408S156.4 400 152 400H112V192c0-44.11 35.89-80 80-80h256c44.11 0 80 35.89 80 80V400zM600 192H576c-4.406 0-8 3.594-8 8s3.656 8 8.062 8H600c13.22 0 24 10.78 24 24v144c0 13.22-10.78 24-24 24L576 399.1c-4.406 0-8 3.633-8 8.039S571.6 416 576 416h24c22.06 0 40-17.94 40-40v-144C640 209.9 622.1 192 600 192zM248 400h-48C195.6 400 192 403.6 192 408S195.6 416 200 416h48C252.4 416 256 412.4 256 408S252.4 400 248 400zM344 400h-48C291.6 400 288 403.6 288 408S291.6 416 296 416h48c4.406 0 8-3.594 8-8S348.4 400 344 400zM440 400h-48c-4.406 0-8 3.594-8 8S387.6 416 392 416h48c4.406 0 8-3.594 8-8S444.4 400 440 400z"/>
</>],

]);

const Robot: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Robot.displayName = "Robot";

export default Robot;
