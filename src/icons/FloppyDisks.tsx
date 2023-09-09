
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M288 352c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64S224 252.7 224 288C224 323.3 252.7 352 288 352zM392 512h-272C53.83 512 0 458.2 0 392v-272C0 106.8 10.75 96 24 96S48 106.8 48 120v272c0 39.7 32.3 72 72 72h272c13.25 0 24 10.75 24 24S405.3 512 392 512z"/><path className="fa-secondary" d="M497.9 97.94l-83.88-83.88C406.3 6.294 391.1 0 380.1 0H144C117.5 0 96 21.48 96 48v320C96 394.5 117.5 416 144 416h320c26.5 0 48-21.48 48-48V131.9C512 120.9 505.7 105.7 497.9 97.94zM288 352c-35.34 0-64-28.66-64-64s28.66-64 64-64s64 28.66 64 64S323.3 352 288 352zM384 144C384 152.8 376.8 160 368 160h-192C167.2 160 160 152.8 160 144v-64C160 71.16 167.2 64 176 64h192C376.8 64 384 71.16 384 80V144z"/>
</>],
['light',<>
	<path d="M400 480H96c-35.35 0-64-28.65-64-64V112C32 103.2 24.84 96 16 96S0 103.2 0 112V416c0 53.02 42.98 96 96 96h304c8.836 0 16-7.164 16-16S408.8 480 400 480zM488.6 97.94l-74.5-74.5C398.9 8.328 378.9 0 357.5 0H176C131.9 0 96 35.89 96 80v256C96 380.1 131.9 416 176 416h256c44.13 0 80-35.89 80-80V154.5C512 133.1 503.7 113 488.6 97.94zM192 32h160v80H192V32zM480 336c0 26.47-21.53 48-48 48h-256C149.5 384 128 362.5 128 336v-256c0-20.83 13.42-38.43 32-45.05V112c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V40.02c2.664 1.758 5.166 3.771 7.438 6.043l74.5 74.5C475 129.6 480 141.7 480 154.5V336zM296 192C256.3 192 224 224.3 224 264s32.31 72 72 72s72-32.3 72-72S335.7 192 296 192zM296 304C273.9 304 256 286.1 256 264S273.9 224 296 224s40 17.94 40 40S318.1 304 296 304z"/>
</>],
['regular',<>
	<path d="M497.9 97.94l-83.88-83.88C405.1 5.061 392.9 0 380.1 0H160C124.7 0 96 28.65 96 64v288c0 35.35 28.65 64 64 64h288c35.35 0 64-28.65 64-64V131.9C512 119.1 506.9 106.9 497.9 97.94zM224 48h112V96H224V48zM464 352c0 8.836-7.164 16-16 16H160c-8.836 0-16-7.164-16-16V64c0-8.838 7.164-16 16-16h16v72c0 13.25 10.75 24 24 24h160C373.3 144 384 133.3 384 120V51.88l78.23 78.23C463.4 131.2 464 132.8 464 134.4V352zM304 192c-35.2 0-64 28.8-64 64c0 35.2 28.8 64 64 64c35.2 0 64-28.8 64-64C368 220.8 339.2 192 304 192zM392 512h-272C53.83 512 0 458.2 0 392v-272C0 106.8 10.75 96 24 96S48 106.8 48 120v272c0 39.7 32.3 72 72 72h272c13.25 0 24 10.75 24 24S405.3 512 392 512z"/>
</>],
['solid',<>
	<path d="M497.9 97.94l-83.88-83.88C406.3 6.294 391.1 0 380.1 0H144C117.5 0 96 21.48 96 48v320C96 394.5 117.5 416 144 416h320c26.5 0 48-21.48 48-48V131.9C512 120.9 505.7 105.7 497.9 97.94zM288 352c-35.34 0-64-28.66-64-64s28.66-64 64-64s64 28.66 64 64S323.3 352 288 352zM384 144C384 152.8 376.8 160 368 160h-192C167.2 160 160 152.8 160 144v-64C160 71.16 167.2 64 176 64h192C376.8 64 384 71.16 384 80V144zM392 512h-272C53.83 512 0 458.2 0 392v-272C0 106.8 10.75 96 24 96S48 106.8 48 120v272c0 39.7 32.3 72 72 72h272c13.25 0 24 10.75 24 24S405.3 512 392 512z"/>
</>],
['thin',<>
	<path d="M493.3 109.3l-90.51-90.51C390.7 6.742 374.5 0 357.5 0H160C124.7 0 96 28.65 96 64v288c0 35.35 28.65 64 64 64h288c35.35 0 64-28.65 64-64V154.5C512 137.5 505.3 121.3 493.3 109.3zM176 16h181.5C361.1 16 364.6 16.48 368 17.25V104C368 117.2 357.2 128 344 128h-144C186.8 128 176 117.2 176 104V16zM496 352c0 26.47-21.53 48-48 48H160c-26.47 0-48-21.53-48-48V64c0-26.47 21.53-48 48-48v88C160 126.1 177.9 144 200 144h144C366.1 144 384 126.1 384 104V23.98c2.643 1.758 5.137 3.783 7.432 6.078l90.51 90.51C491 129.6 496 141.7 496 154.5V352zM304 192C259.8 192 224 227.8 224 272c0 44.18 35.82 80 80 80S384 316.2 384 272C384 227.8 348.2 192 304 192zM304 336c-35.29 0-64-28.71-64-64s28.71-64 64-64s64 28.71 64 64S339.3 336 304 336zM408 448c-4.422 0-8 3.594-8 8c0 22.06-17.94 40-40 40h-288c-30.88 0-56-25.12-56-56v-288c0-22.06 17.94-40 40-40C60.42 112 64 108.4 64 104S60.42 96 56 96C25.13 96 0 121.1 0 152v288C0 479.7 32.3 512 72 512h288c30.88 0 56-25.12 56-56C416 451.6 412.4 448 408 448z"/>
</>],

]);

const FloppyDisks: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FloppyDisks.displayName = "FloppyDisks";

export default FloppyDisks;
