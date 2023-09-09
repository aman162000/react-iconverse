
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M448 128C448 145.7 433.7 160 416 160C398.3 160 384 145.7 384 128C384 110.3 398.3 96 416 96C433.7 96 448 110.3 448 128zM224 160C224 177.7 209.7 192 192 192C174.3 192 160 177.7 160 160C160 142.3 174.3 128 192 128C209.7 128 224 142.3 224 160zM320 256C320 273.7 305.7 288 288 288C270.3 288 256 273.7 256 256C256 238.3 270.3 224 288 224C305.7 224 320 238.3 320 256zM352 320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320C416 337.7 401.7 352 384 352C366.3 352 352 337.7 352 320zM128 320C128 302.3 142.3 288 160 288C177.7 288 192 302.3 192 320C192 337.7 177.7 352 160 352C142.3 352 128 337.7 128 320z"/><path className="fa-secondary" d="M32 32C49.67 32 64 46.33 64 64V400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32z"/>
</>],
['light',<>
	<path d="M32 400C32 426.5 53.49 448 80 448H496C504.8 448 512 455.2 512 464C512 472.8 504.8 480 496 480H80C35.82 480 0 444.2 0 400V48C0 39.16 7.164 32 16 32C24.84 32 32 39.16 32 48V400zM168 160C168 146.7 178.7 136 192 136C205.3 136 216 146.7 216 160C216 173.3 205.3 184 192 184C178.7 184 168 173.3 168 160zM312 256C312 269.3 301.3 280 288 280C274.7 280 264 269.3 264 256C264 242.7 274.7 232 288 232C301.3 232 312 242.7 312 256zM360 320C360 306.7 370.7 296 384 296C397.3 296 408 306.7 408 320C408 333.3 397.3 344 384 344C370.7 344 360 333.3 360 320zM440 128C440 141.3 429.3 152 416 152C402.7 152 392 141.3 392 128C392 114.7 402.7 104 416 104C429.3 104 440 114.7 440 128zM136 320C136 306.7 146.7 296 160 296C173.3 296 184 306.7 184 320C184 333.3 173.3 344 160 344C146.7 344 136 333.3 136 320z"/>
</>],
['regular',<>
	<path d="M48 408C48 421.3 58.75 432 72 432H488C501.3 432 512 442.7 512 456C512 469.3 501.3 480 488 480H72C32.24 480 0 447.8 0 408V56C0 42.75 10.75 32 24 32C37.25 32 48 42.75 48 56V408zM160 160C160 142.3 174.3 128 192 128C209.7 128 224 142.3 224 160C224 177.7 209.7 192 192 192C174.3 192 160 177.7 160 160zM320 256C320 273.7 305.7 288 288 288C270.3 288 256 273.7 256 256C256 238.3 270.3 224 288 224C305.7 224 320 238.3 320 256zM352 320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320C416 337.7 401.7 352 384 352C366.3 352 352 337.7 352 320zM448 128C448 145.7 433.7 160 416 160C398.3 160 384 145.7 384 128C384 110.3 398.3 96 416 96C433.7 96 448 110.3 448 128zM128 320C128 302.3 142.3 288 160 288C177.7 288 192 302.3 192 320C192 337.7 177.7 352 160 352C142.3 352 128 337.7 128 320z"/>
</>],
['solid',<>
	<path d="M64 400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64V400zM160 160C160 142.3 174.3 128 192 128C209.7 128 224 142.3 224 160C224 177.7 209.7 192 192 192C174.3 192 160 177.7 160 160zM320 256C320 273.7 305.7 288 288 288C270.3 288 256 273.7 256 256C256 238.3 270.3 224 288 224C305.7 224 320 238.3 320 256zM352 320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320C416 337.7 401.7 352 384 352C366.3 352 352 337.7 352 320zM448 128C448 145.7 433.7 160 416 160C398.3 160 384 145.7 384 128C384 110.3 398.3 96 416 96C433.7 96 448 110.3 448 128zM128 320C128 302.3 142.3 288 160 288C177.7 288 192 302.3 192 320C192 337.7 177.7 352 160 352C142.3 352 128 337.7 128 320z"/>
</>],
['thin',<>
	<path d="M16 408C16 438.9 41.07 464 72 464H504C508.4 464 512 467.6 512 472C512 476.4 508.4 480 504 480H72C32.24 480 0 447.8 0 408V40C0 35.58 3.582 32 8 32C12.42 32 16 35.58 16 40V408zM232 160C232 182.1 214.1 200 192 200C169.9 200 152 182.1 152 160C152 137.9 169.9 120 192 120C214.1 120 232 137.9 232 160zM192 184C205.3 184 216 173.3 216 160C216 146.7 205.3 136 192 136C178.7 136 168 146.7 168 160C168 173.3 178.7 184 192 184zM248 256C248 233.9 265.9 216 288 216C310.1 216 328 233.9 328 256C328 278.1 310.1 296 288 296C265.9 296 248 278.1 248 256zM288 232C274.7 232 264 242.7 264 256C264 269.3 274.7 280 288 280C301.3 280 312 269.3 312 256C312 242.7 301.3 232 288 232zM424 320C424 342.1 406.1 360 384 360C361.9 360 344 342.1 344 320C344 297.9 361.9 280 384 280C406.1 280 424 297.9 424 320zM384 344C397.3 344 408 333.3 408 320C408 306.7 397.3 296 384 296C370.7 296 360 306.7 360 320C360 333.3 370.7 344 384 344zM376 128C376 105.9 393.9 88 416 88C438.1 88 456 105.9 456 128C456 150.1 438.1 168 416 168C393.9 168 376 150.1 376 128zM416 104C402.7 104 392 114.7 392 128C392 141.3 402.7 152 416 152C429.3 152 440 141.3 440 128C440 114.7 429.3 104 416 104zM200 320C200 342.1 182.1 360 160 360C137.9 360 120 342.1 120 320C120 297.9 137.9 280 160 280C182.1 280 200 297.9 200 320zM160 344C173.3 344 184 333.3 184 320C184 306.7 173.3 296 160 296C146.7 296 136 306.7 136 320C136 333.3 146.7 344 160 344z"/>
</>],

]);

const ChartScatter: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ChartScatter.displayName = "ChartScatter";

export default ChartScatter;