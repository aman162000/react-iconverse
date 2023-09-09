
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M224 160V0L384 160H224zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM496 351.1H368C359.2 351.1 352 359.2 352 367.1C352 376.8 359.2 383.1 368 383.1H496C504.8 383.1 512 376.8 512 367.1C512 359.2 504.8 351.1 496 351.1z"/><path className="fa-secondary" d="M0 64C0 28.65 28.65 0 64 0H224V160H384V198.6C310.1 219.5 256 287.4 256 368C256 427.1 285.1 479.3 329.7 511.3C326.6 511.7 323.3 512 320 512H64C28.65 512 0 483.3 0 448V64z"/>
</>],
['light',<>
	<path d="M64 480H296.2C305.1 491.8 317.3 502.3 329.7 511.3C326.6 511.7 323.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H220.1C232.8 0 245.1 5.057 254.1 14.06L369.9 129.9C378.9 138.9 384 151.2 384 163.9V198.6C372.8 201.8 362.1 206 352 211.2V192H240C213.5 192 192 170.5 192 144V32H64C46.33 32 32 46.33 32 64V448C32 465.7 46.33 480 64 480V480zM347.3 152.6L231.4 36.69C229.4 34.62 226.8 33.18 224 32.48V144C224 152.8 231.2 160 240 160H351.5C350.8 157.2 349.4 154.6 347.3 152.6zM512 367.1C512 376.8 504.8 383.1 496 383.1H368C359.2 383.1 352 376.8 352 367.1C352 359.2 359.2 351.1 368 351.1H496C504.8 351.1 512 359.2 512 367.1zM288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368zM432 480C493.9 480 544 429.9 544 368C544 306.1 493.9 256 432 256C370.1 256 320 306.1 320 368C320 429.9 370.1 480 432 480z"/>
</>],
['regular',<>
	<path d="M63.1 464H284.5C296.5 482.4 311.9 498.5 329.7 511.3C326.6 511.7 323.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V198.6C366.8 203.5 350.6 210.9 336 220.5V160H256C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V448C48 456.8 55.16 464 64 464H63.1zM576 368C576 447.5 511.5 512 432 512C352.5 512 287.1 447.5 287.1 368C287.1 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM496 351.1H368C359.2 351.1 352 359.2 352 367.1C352 376.8 359.2 383.1 368 383.1H496C504.8 383.1 512 376.8 512 367.1C512 359.2 504.8 351.1 496 351.1z"/>
</>],
['solid',<>
	<path d="M0 64C0 28.65 28.65 0 64 0H224V128C224 145.7 238.3 160 256 160H384V198.6C310.1 219.5 256 287.4 256 368C256 427.1 285.1 479.3 329.7 511.3C326.6 511.7 323.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM256 128V0L384 128H256zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM496 351.1H368C359.2 351.1 352 359.2 352 367.1C352 376.8 359.2 383.1 368 383.1H496C504.8 383.1 512 376.8 512 367.1C512 359.2 504.8 351.1 496 351.1z"/>
</>],
['thin',<>
	<path d="M64 496H311.2C317 501.5 323.2 506.6 329.7 511.3C326.6 511.7 323.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H204.1C216.8 0 229.1 5.057 238.1 14.06L369.9 145.9C378.9 154.9 384 167.2 384 179.9V198.6C378.6 200.2 373.2 201.1 368 203.1V179.9C368 178.6 367.9 177.3 367.8 176H248C225.9 176 208 158.1 208 136V16.24C206.7 16.08 205.4 16 204.1 16H64C37.49 16 16 37.49 16 64V448C16 474.5 37.49 496 64 496V496zM361.1 160C360.3 159 359.5 158.1 358.6 157.3L226.7 25.37C225.9 24.5 224.1 23.68 224 22.93V136C224 149.3 234.7 160 248 160H361.1zM512 367.1C512 372.4 508.4 375.1 504 375.1H360C355.6 375.1 352 372.4 352 367.1C352 363.6 355.6 359.1 360 359.1H504C508.4 359.1 512 363.6 512 367.1zM288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368zM432 496C502.7 496 560 438.7 560 368C560 297.3 502.7 240 432 240C361.3 240 304 297.3 304 368C304 438.7 361.3 496 432 496z"/>
</>],

]);

const FileCircleMinus: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FileCircleMinus.displayName = "FileCircleMinus";

export default FileCircleMinus;
