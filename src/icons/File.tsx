
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M224 0L384 160H224V0z"/><path className="fa-secondary" d="M224 0V160H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H224z"/>
</>],
['light',<>
	<path d="M0 64C0 28.65 28.65 0 64 0H220.1C232.8 0 245.1 5.057 254.1 14.06L369.9 129.9C378.9 138.9 384 151.2 384 163.9V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM352 192H240C213.5 192 192 170.5 192 144V32H64C46.33 32 32 46.33 32 64V448C32 465.7 46.33 480 64 480H320C337.7 480 352 465.7 352 448V192zM347.3 152.6L231.4 36.69C229.4 34.62 226.8 33.18 224 32.48V144C224 152.8 231.2 160 240 160H351.5C350.8 157.2 349.4 154.6 347.3 152.6z"/>
</>],
['regular',<>
	<path d="M0 64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM336 448V160H256C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V448C48 456.8 55.16 464 64 464H320C328.8 464 336 456.8 336 448z"/>
</>],
['solid',<>
	<path d="M0 64C0 28.65 28.65 0 64 0H224V128C224 145.7 238.3 160 256 160H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM256 128V0L384 128H256z"/>
</>],
['thin',<>
	<path d="M0 64C0 28.65 28.65 0 64 0H204.1C216.8 0 229.1 5.057 238.1 14.06L369.9 145.9C378.9 154.9 384 167.2 384 179.9V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM368 448V179.9C368 178.6 367.9 177.3 367.8 176H248C225.9 176 208 158.1 208 136V16.24C206.7 16.08 205.4 16 204.1 16H64C37.49 16 16 37.49 16 64V448C16 474.5 37.49 496 64 496H320C346.5 496 368 474.5 368 448zM361.1 160C360.3 159 359.5 158.1 358.6 157.3L226.7 25.37C225.9 24.5 224.1 23.68 224 22.93V136C224 149.3 234.7 160 248 160H361.1z"/>
</>],

]);

const File: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

File.displayName = "File";

export default File;
