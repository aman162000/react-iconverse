
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M368 224C359.2 224 352 231.2 352 239.1V256c0 58.18-52.01 104.4-111.1 94.7c-46.82-7.592-80.03-50.08-80.03-97.51V240c0-8.838-7.164-16-16-16S128 231.2 128 239.1V256c0 65.1 49.03 118.4 112 126.4V400c0 8.836 7.164 16 16 16s16-7.164 16-16v-17.62C334.1 374.4 384 321.1 384 256V239.1C384 231.2 376.8 224 368 224zM256 304c26.52 0 48-21.48 48-48V144C304 117.5 282.5 96 256 96S208 117.5 208 144V256C208 282.5 229.5 304 256 304z"/><path className="fa-secondary" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM208 144C208 117.5 229.5 96 256 96s48 21.48 48 48V256c0 26.52-21.48 48-48 48S208 282.5 208 256V144zM384 256c0 65.1-49.03 118.4-112 126.4V400c0 8.837-7.163 16-16 16s-16-7.163-16-16v-17.62C177 374.4 128 321.1 128 256V239.1C128 231.2 135.2 224 143.1 224C152.8 224 160 231.2 159.1 240v13.19c0 47.43 33.21 89.92 80.03 97.51C299.1 360.4 352 314.2 352 256V239.1C352 231.2 359.2 224 368 224S384 231.2 384 239.1V256z"/>
</>],
['light',<>
	<path d="M256 320c35.35 0 64-28.65 64-64V160c0-35.35-28.65-64-64-64S192 124.7 192 160v96C192 291.3 220.7 320 256 320zM224 160c0-17.64 14.36-32 32-32s32 14.36 32 32v96c0 17.64-14.36 32-32 32S224 273.6 224 256V160zM368 224C359.2 224 352 231.2 352 239.1V256c0 52.94-43.06 96-96 96S160 308.9 160 256L159.1 240c0-8.844-7.156-16-16-16S128 231.2 128 239.1V256c0 65.1 49.03 118.4 112 126.4V400c0 8.844 7.156 16 16 16s16-7.156 16-16v-17.62C334.1 374.4 384 321.1 384 256V239.1C384 231.2 376.8 224 368 224zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480z"/>
</>],
['regular',<>
	<path d="M256 304c26.52 0 48-21.48 48-48V144C304 117.5 282.5 96 256 96S208 117.5 208 144V256C208 282.5 229.5 304 256 304zM360 232c-13.25 0-24 10.75-24 24c0 44.11-35.89 80-80 80S176 300.1 176 256c0-13.25-10.75-24-24-24S128 242.8 128 256c0 62.36 44.88 114.3 104 125.6V392C232 405.3 242.8 416 256 416s24-10.75 24-24v-10.43C339.1 370.3 384 318.4 384 256C384 242.8 373.3 232 360 232zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"/>
</>],
['solid',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM208 144C208 117.5 229.5 96 256 96s48 21.48 48 48V256c0 26.52-21.48 48-48 48S208 282.5 208 256V144zM384 256c0 65.1-49.03 118.4-112 126.4V400c0 8.837-7.163 16-16 16s-16-7.163-16-16v-17.62C177 374.4 128 321.1 128 256V239.1C128 231.2 135.2 224 143.1 224C152.8 224 160 231.2 159.1 240v13.19c0 47.43 33.21 89.92 80.03 97.51C299.1 360.4 352 314.2 352 256V239.1C352 231.2 359.2 224 368 224S384 231.2 384 239.1V256z"/>
</>],
['thin',<>
	<path d="M256 320c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64S192 124.7 192 160v96C192 291.3 220.7 320 256 320zM208 160c0-26.47 21.53-48 48-48s48 21.53 48 48v96c0 26.47-21.53 48-48 48S208 282.5 208 256V160zM360 216C355.6 216 352 219.6 352 224v32c0 52.94-43.06 96-96 96S160 308.9 160 256V224c0-4.422-3.578-8-8-8S143.1 219.6 143.1 224L144 256c0 59.01 46.04 107 104 111.2V416c0 4.422 3.578 8 8 8s8-3.578 8-8v-48.81C321.1 363 368 315 368 256V224C368 219.6 364.4 216 360 216zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 496c-132.3 0-240-107.7-240-240S123.7 16 256 16s240 107.7 240 240S388.3 496 256 496z"/>
</>],

]);

const CircleMicrophone: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CircleMicrophone.displayName = "CircleMicrophone";

export default CircleMicrophone;
