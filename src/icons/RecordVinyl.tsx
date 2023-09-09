
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 0c-141.4 0-256 114.6-256 256s114.6 256 256 256c141.4 0 256-114.6 256-256S397.4 0 256 0zM256 384c-70.75 0-128-57.25-128-128s57.25-128 128-128s128 57.25 128 128S326.8 384 256 384z"/><path className="fa-secondary" d="M256 127.1c-70.69 0-128 57.31-128 128s57.31 128 128 128s128-57.31 128-128S326.7 127.1 256 127.1zM256 288C238.3 288 224 273.7 224 256s14.33-32 32-32c17.67 0 32 14.33 32 32S273.7 288 256 288z"/>
</>],
['light',<>
	<path d="M256 232C242.8 232 232 242.8 232 256S242.8 280 256 280S280 269.3 280 256S269.2 232 256 232zM256 127.1c-70.69 0-128 57.31-128 128c0 70.69 57.31 128 128 128c70.69 0 128-57.31 128-128C384 185.3 326.7 127.1 256 127.1zM256 352c-52.93 0-96-43.07-96-96c0-52.94 43.07-96 96-96c52.94 0 96 43.06 96 96C352 308.9 308.9 352 256 352zM256 0c-141.4 0-256 114.6-256 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480z"/>
</>],
['regular',<>
	<path d="M256 160C202.9 160 160 202.9 160 256s42.92 96 96 96s96-42.92 96-96S309.1 160 256 160zM256 280C242.8 280 232 269.3 232 256S242.8 232 256 232S280 242.8 280 256S269.3 280 256 280zM256 0c-141.4 0-256 114.6-256 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"/>
</>],
['solid',<>
	<path d="M256 160C202.9 160 160 202.9 160 256s42.92 96 96 96c53.08 0 96-42.92 96-96S309.1 160 256 160zM256 288C238.3 288 224 273.7 224 256s14.33-32 32-32c17.67 0 32 14.33 32 32S273.7 288 256 288zM256 0c-141.4 0-256 114.6-256 256s114.6 256 256 256c141.4 0 256-114.6 256-256S397.4 0 256 0zM256 384c-70.75 0-128-57.25-128-128s57.25-128 128-128s128 57.25 128 128S326.8 384 256 384z"/>
</>],
['thin',<>
	<path d="M256 127.1c-70.75 0-128 57.25-128 128s57.25 128 128 128s128-57.25 128-128S326.8 127.1 256 127.1zM256 368c-61.76 0-112-50.24-112-112S194.2 144 256 144s112 50.24 112 112S317.8 368 256 368zM256 240C247.2 240 240 247.2 240 256c0 8.832 7.168 16 16 16c8.834 0 16-7.168 16-16C272 247.2 264.8 240 256 240zM256 0c-141.4 0-256 114.6-256 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 496c-132.3 0-240-107.7-240-240S123.7 16 256 16s240 107.7 240 240S388.3 496 256 496z"/>
</>],

]);

const RecordVinyl: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

RecordVinyl.displayName = "RecordVinyl";

export default RecordVinyl;
