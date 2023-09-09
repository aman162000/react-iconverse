
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M456 160C469.3 160 480 170.7 480 184V232C480 245.3 469.3 256 456 256H408C394.7 256 384 245.3 384 232V184C384 170.7 394.7 160 408 160H456zM304 224C312.8 224 320 231.2 320 240C320 248.8 312.8 256 304 256H112C103.2 256 96 248.8 96 240C96 231.2 103.2 224 112 224H304z"/><path className="fa-secondary" d="M512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM112 224C103.2 224 96 231.2 96 240C96 248.8 103.2 256 112 256H304C312.8 256 320 248.8 320 240C320 231.2 312.8 224 304 224H112zM112 352H464C472.8 352 480 344.8 480 336C480 327.2 472.8 320 464 320H112C103.2 320 96 327.2 96 336C96 344.8 103.2 352 112 352zM408 160C394.7 160 384 170.7 384 184V232C384 245.3 394.7 256 408 256H456C469.3 256 480 245.3 480 232V184C480 170.7 469.3 160 456 160H408z"/>
</>],
['light',<>
	<path d="M240 224C248.8 224 256 231.2 256 240C256 248.8 248.8 256 240 256H112C103.2 256 96 248.8 96 240C96 231.2 103.2 224 112 224H240zM96 336C96 327.2 103.2 320 112 320H464C472.8 320 480 327.2 480 336C480 344.8 472.8 352 464 352H112C103.2 352 96 344.8 96 336zM320 184C320 161.9 337.9 144 360 144H440C462.1 144 480 161.9 480 184V232C480 254.1 462.1 272 440 272H360C337.9 272 320 254.1 320 232V184zM352 184V232C352 236.4 355.6 240 360 240H440C444.4 240 448 236.4 448 232V184C448 179.6 444.4 176 440 176H360C355.6 176 352 179.6 352 184zM0 128C0 92.65 28.65 64 64 64H512C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128zM32 128V384C32 401.7 46.33 416 64 416H512C529.7 416 544 401.7 544 384V128C544 110.3 529.7 96 512 96H64C46.33 96 32 110.3 32 128z"/>
</>],
['regular',<>
	<path d="M264 208C277.3 208 288 218.7 288 232C288 245.3 277.3 256 264 256H120C106.7 256 96 245.3 96 232C96 218.7 106.7 208 120 208H264zM96 328C96 314.7 106.7 304 120 304H456C469.3 304 480 314.7 480 328C480 341.3 469.3 352 456 352H120C106.7 352 96 341.3 96 328zM456 160C469.3 160 480 170.7 480 184V232C480 245.3 469.3 256 456 256H376C362.7 256 352 245.3 352 232V184C352 170.7 362.7 160 376 160H456zM0 128C0 92.65 28.65 64 64 64H512C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128zM48 128V384C48 392.8 55.16 400 64 400H512C520.8 400 528 392.8 528 384V128C528 119.2 520.8 112 512 112H64C55.16 112 48 119.2 48 128z"/>
</>],
['solid',<>
	<path d="M512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM112 224C103.2 224 96 231.2 96 240C96 248.8 103.2 256 112 256H272C280.8 256 288 248.8 288 240C288 231.2 280.8 224 272 224H112zM112 352H464C472.8 352 480 344.8 480 336C480 327.2 472.8 320 464 320H112C103.2 320 96 327.2 96 336C96 344.8 103.2 352 112 352zM376 160C362.7 160 352 170.7 352 184V232C352 245.3 362.7 256 376 256H456C469.3 256 480 245.3 480 232V184C480 170.7 469.3 160 456 160H376z"/>
</>],
['thin',<>
	<path d="M248 240C252.4 240 256 243.6 256 248C256 252.4 252.4 256 248 256H104C99.58 256 96 252.4 96 248C96 243.6 99.58 240 104 240H248zM96 344C96 339.6 99.58 336 104 336H472C476.4 336 480 339.6 480 344C480 348.4 476.4 352 472 352H104C99.58 352 96 348.4 96 344zM320 200C320 177.9 337.9 160 360 160H440C462.1 160 480 177.9 480 200V232C480 254.1 462.1 272 440 272H360C337.9 272 320 254.1 320 232V200zM336 200V232C336 245.3 346.7 256 360 256H440C453.3 256 464 245.3 464 232V200C464 186.7 453.3 176 440 176H360C346.7 176 336 186.7 336 200zM0 128C0 92.65 28.65 64 64 64H512C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128zM16 128V384C16 410.5 37.49 432 64 432H512C538.5 432 560 410.5 560 384V128C560 101.5 538.5 80 512 80H64C37.49 80 16 101.5 16 128z"/>
</>],

]);

const MoneyCheck: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MoneyCheck.displayName = "MoneyCheck";

export default MoneyCheck;
