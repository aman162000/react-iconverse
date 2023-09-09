
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M144 160C135.2 160 128 167.2 128 176v160C128 344.8 135.2 352 144 352S160 344.8 160 336v-160C160 167.2 152.8 160 144 160zM272 136c-8.836 0-16 7.162-16 16v208c0 8.836 7.164 16 16 16s16-7.164 16-16v-208C288 143.2 280.8 136 272 136zM208 200C199.2 200 192 207.2 192 216v80c0 8.836 7.164 16 16 16S224 304.8 224 296v-80C224 207.2 216.8 200 208 200zM400 224C391.2 224 384 231.2 384 240v32C384 280.8 391.2 288 400 288S416 280.8 416 272v-32C416 231.2 408.8 224 400 224zM336 184c-8.836 0-16 7.162-16 16v112c0 8.836 7.164 16 16 16s16-7.164 16-16v-112C352 191.2 344.8 184 336 184z"/><path className="fa-secondary" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM160 336C160 344.8 152.8 352 144 352S128 344.8 128 336v-160C128 167.2 135.2 160 144 160S160 167.2 160 176V336zM224 296c0 8.836-7.164 16-16 16S192 304.8 192 296v-80c0-8.838 7.164-16 16-16S224 207.2 224 216V296zM288 360c0 8.836-7.164 16-16 16s-16-7.164-16-16v-208c0-8.838 7.164-16 16-16S288 143.2 288 152V360zM352 312c0 8.836-7.164 16-16 16S320 320.8 320 312v-112c0-8.838 7.164-16 16-16S352 191.2 352 200V312zM416 272C416 280.8 408.8 288 400 288S384 280.8 384 272v-32C384 231.2 391.2 224 400 224S416 231.2 416 240V272z"/>
</>],
['light',<>
	<path d="M272 136c-8.836 0-16 7.162-16 16v208c0 8.836 7.164 16 16 16s16-7.164 16-16v-208C288 143.2 280.8 136 272 136zM208 200C199.2 200 192 207.2 192 216v80c0 8.836 7.164 16 16 16S224 304.8 224 296v-80C224 207.2 216.8 200 208 200zM144 160C135.2 160 128 167.2 128 176v160C128 344.8 135.2 352 144 352S160 344.8 160 336v-160C160 167.2 152.8 160 144 160zM400 224C391.2 224 384 231.2 384 240v32C384 280.8 391.2 288 400 288S416 280.8 416 272v-32C416 231.2 408.8 224 400 224zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480zM336 184c-8.836 0-16 7.162-16 16v112c0 8.836 7.164 16 16 16s16-7.164 16-16v-112C352 191.2 344.8 184 336 184z"/>
</>],
['regular',<>
	<path d="M232 128C218.8 128 208 138.8 208 152v208C208 373.2 218.8 384 232 384S256 373.2 256 360v-208C256 138.8 245.2 128 232 128zM152 192C138.8 192 128 202.8 128 216v80C128 309.2 138.8 320 152 320S176 309.2 176 296v-80C176 202.8 165.2 192 152 192zM392 216c-13.22 0-24 10.78-24 24v32c0 13.22 10.78 24 24 24S416 285.2 416 272v-32C416 226.8 405.2 216 392 216zM312 176C298.8 176 288 186.8 288 200v112c0 13.22 10.78 24 24 24s24-10.78 24-24v-112C336 186.8 325.2 176 312 176zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"/>
</>],
['solid',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM160 336C160 344.8 152.8 352 144 352S128 344.8 128 336v-160C128 167.2 135.2 160 144 160S160 167.2 160 176V336zM224 296c0 8.836-7.164 16-16 16S192 304.8 192 296v-80c0-8.838 7.164-16 16-16S224 207.2 224 216V296zM288 360c0 8.836-7.164 16-16 16s-16-7.164-16-16v-208c0-8.838 7.164-16 16-16S288 143.2 288 152V360zM352 312c0 8.836-7.164 16-16 16S320 320.8 320 312v-112c0-8.838 7.164-16 16-16S352 191.2 352 200V312zM416 272C416 280.8 408.8 288 400 288S384 280.8 384 272v-32C384 231.2 391.2 224 400 224S416 231.2 416 240V272z"/>
</>],
['thin',<>
	<path d="M208 208c-4.418 0-8 3.58-8 8v80c0 4.418 3.582 8 8 8s8-3.582 8-8v-80C216 211.6 212.4 208 208 208zM144 160C139.6 160 136 163.6 136 168v176C136 348.4 139.6 352 144 352s8-3.582 8-8v-176C152 163.6 148.4 160 144 160zM272 128c-4.418 0-8 3.58-8 8v240c0 4.418 3.582 8 8 8s8-3.582 8-8v-240C280 131.6 276.4 128 272 128zM336 176c-4.418 0-8 3.58-8 8v144c0 4.418 3.582 8 8 8s8-3.582 8-8v-144C344 179.6 340.4 176 336 176zM400 216c-4.418 0-8 3.58-8 8v64c0 4.418 3.582 8 8 8S408 292.4 408 288V224C408 219.6 404.4 216 400 216zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 496c-132.3 0-240-107.7-240-240S123.7 16 256 16s240 107.7 240 240S388.3 496 256 496z"/>
</>],

]);

const CircleWaveformLines: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CircleWaveformLines.displayName = "CircleWaveformLines";

export default CircleWaveformLines;