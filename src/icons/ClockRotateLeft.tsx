
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 128C269.3 128 280 138.7 280 152V246.1L344.1 311C354.3 320.4 354.3 335.6 344.1 344.1C335.6 354.3 320.4 354.3 311 344.1L239 272.1C234.5 268.5 232 262.4 232 256V152C232 138.7 242.7 128 256 128V128z"/><path className="fa-secondary" d="M151 151C166.1 166.1 155.4 192 134.1 192H24C10.75 192 0 181.3 0 168V57.94C0 36.56 25.85 25.85 40.97 40.97L74.98 74.98C121.3 28.69 185.3 0 255.1 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 255.1 512C201.7 512 151.2 495 109.7 466.1C95.2 455.1 91.64 436 101.8 421.5C111.9 407 131.8 403.5 146.3 413.6C177.4 435.3 215.2 448 255.1 448C362 448 448 362 448 256C448 149.1 362 64 255.1 64C202.1 64 155 85.46 120.2 120.2L151 151z"/>
</>],
['light',<>
	<path d="M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C172.2 512 97.87 471.8 51.19 409.6C45.88 402.5 47.31 392.5 54.37 387.2C61.44 381.9 71.47 383.3 76.78 390.4C117.7 444.8 182.7 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32C166.7 32 89.51 84.3 53.55 160H144C152.8 160 160 167.2 160 176C160 184.8 152.8 192 144 192H16C7.164 192 0 184.8 0 176V48C0 39.16 7.164 32 16 32C24.84 32 32 39.16 32 48V131.1C75.66 53.29 159.6 0 256 0zM256 128C264.8 128 272 135.2 272 144V249.4L347.3 324.7C353.6 330.9 353.6 341.1 347.3 347.3C341.1 353.6 330.9 353.6 324.7 347.3L244.7 267.3C241.7 264.3 239.1 260.2 239.1 256V144C239.1 135.2 247.2 128 255.1 128H256z"/>
</>],
['regular',<>
	<path d="M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C203.8 512 155.2 496.4 114.7 469.5C103.7 462.2 100.7 447.3 107.1 436.3C115.3 425.2 130.2 422.2 141.3 429.5C174.1 451.3 213.5 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C182.4 48 117.7 86.24 80.69 144H136C149.3 144 160 154.7 160 168C160 181.3 149.3 192 136 192H24C10.75 192 0 181.3 0 168V56C0 42.75 10.75 32 24 32C37.25 32 48 42.75 48 56V106.7C94.45 42.12 170.3 0 256 0H256zM256 128C269.3 128 280 138.7 280 152V246.1L344.1 311C354.3 320.4 354.3 335.6 344.1 344.1C335.6 354.3 320.4 354.3 311 344.1L239 272.1C234.5 268.5 232 262.4 232 256V152C232 138.7 242.7 128 256 128V128z"/>
</>],
['solid',<>
	<path d="M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C201.7 512 151.2 495 109.7 466.1C95.2 455.1 91.64 436 101.8 421.5C111.9 407 131.8 403.5 146.3 413.6C177.4 435.3 215.2 448 256 448C362 448 448 362 448 256C448 149.1 362 64 256 64C202.1 64 155 85.46 120.2 120.2L151 151C166.1 166.1 155.4 192 134.1 192H24C10.75 192 0 181.3 0 168V57.94C0 36.56 25.85 25.85 40.97 40.97L74.98 74.98C121.3 28.69 185.3 0 255.1 0L256 0zM256 128C269.3 128 280 138.7 280 152V246.1L344.1 311C354.3 320.4 354.3 335.6 344.1 344.1C335.6 354.3 320.4 354.3 311 344.1L239 272.1C234.5 268.5 232 262.4 232 256V152C232 138.7 242.7 128 256 128V128z"/>
</>],
['thin',<>
	<path d="M256 .0003C397.4 .0003 512 114.6 512 256C512 397.4 397.4 512 256 512C177.6 512 107.3 476.7 60.4 421.2C57.55 417.8 57.97 412.7 61.35 409.9C64.72 407 69.77 407.5 72.62 410.8C116.7 462.9 182.5 496 256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16C151.5 16 62.6 82.78 29.65 176H136C140.4 176 144 179.6 144 184C144 188.4 140.4 192 136 192H8C3.582 192 0 188.4 0 184V56C0 51.58 3.582 48 8 48C12.42 48 16 51.58 16 56V166.7C52.23 69.37 146 0 256 0V.0003zM256 128C260.4 128 264 131.6 264 136V252.7L349.7 338.3C352.8 341.5 352.8 346.5 349.7 349.7C346.5 352.8 341.5 352.8 338.3 349.7L250.3 261.7C248.8 260.2 248 258.1 248 256V136C248 131.6 251.6 128 256 128H256z"/>
</>],

]);

const ClockRotateLeft: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ClockRotateLeft.displayName = "ClockRotateLeft";

export default ClockRotateLeft;
