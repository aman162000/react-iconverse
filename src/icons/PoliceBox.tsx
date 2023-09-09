
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M288 32C305.7 32 320 46.33 320 64C337.7 64 352 78.33 352 96V464H32V96C32 78.33 46.33 64 64 64C64 46.33 78.33 32 96 32H288zM96 160H128V128H104C99.58 128 96 131.6 96 136V160zM96 200C96 204.4 99.58 208 104 208H128V176H96V200zM168 128H144V160H176V136C176 131.6 172.4 128 168 128zM144 208H168C172.4 208 176 204.4 176 200V176H144V208zM216 128C211.6 128 208 131.6 208 136V160H240V128H216zM240 176H208V200C208 204.4 211.6 208 216 208H240V176zM256 160H288V136C288 131.6 284.4 128 280 128H256V160zM288 176H256V208H280C284.4 208 288 204.4 288 200V176zM96 304C96 312.8 103.2 320 112 320H160C168.8 320 176 312.8 176 304V256C176 247.2 168.8 240 160 240H112C103.2 240 96 247.2 96 256V304z"/><path className="fa-secondary" d="M208 32H176V16C176 7.164 183.2 0 192 0C200.8 0 208 7.164 208 16V32zM128 128V160H96V136C96 131.6 99.58 128 104 128H128zM128 208H104C99.58 208 96 204.4 96 200V176H128V208zM144 128H168C172.4 128 176 131.6 176 136V160H144V128zM176 200C176 204.4 172.4 208 168 208H144V176H176V200zM360 464C373.3 464 384 474.7 384 488C384 501.3 373.3 512 360 512H24C10.75 512 0 501.3 0 488C0 474.7 10.75 464 24 464H360zM208 136C208 131.6 211.6 128 216 128H240V160H208V136zM208 176H240V208H216C211.6 208 208 204.4 208 200V176zM288 136V160H256V128H280C284.4 128 288 131.6 288 136zM256 176H288V200C288 204.4 284.4 208 280 208H256V176z"/>
</>],
['light',<>
	<path d="M88 272C88 263.2 95.16 256 104 256H168C176.8 256 184 263.2 184 272V336C184 344.8 176.8 352 168 352H104C95.16 352 88 344.8 88 336V272zM160 328V280H112V328H160zM168 128C176.8 128 184 135.2 184 144V208C184 216.8 176.8 224 168 224H104C95.16 224 88 216.8 88 208V144C88 135.2 95.16 128 104 128H168zM112 152V172H132V152H112zM140 152V172H160V152H140zM140 180V200H160V180H140zM132 200V180H112V200H132zM200 144C200 135.2 207.2 128 216 128H280C288.8 128 296 135.2 296 144V208C296 216.8 288.8 224 280 224H216C207.2 224 200 216.8 200 208V144zM244 200V180H224V200H244zM252 200H272V180H252V200zM252 172H272V152H252V172zM244 152H224V172H244V152zM208 32H288C305.7 32 320 46.33 320 64V64.8C338.3 68.51 352 84.65 352 104V480H368C376.8 480 384 487.2 384 496C384 504.8 376.8 512 368 512H16C7.164 512 0 504.8 0 496C0 487.2 7.164 480 16 480H32V104C32 84.65 45.74 68.51 64 64.8V64C64 46.33 78.33 32 96 32H176V16C176 7.164 183.2 0 192 0C200.8 0 208 7.164 208 16V32zM312 96H304C295.2 96 288 88.84 288 80V64H96V80C96 88.84 88.84 96 80 96H72C67.58 96 64 99.58 64 104V480H320V104C320 99.58 316.4 96 312 96z"/>
</>],
['regular',<>
	<path d="M104 144C104 139.6 107.6 136 112 136H136V168H104V144zM104 184H136V216H112C107.6 216 104 212.4 104 208V184zM184 144V168H152V136H176C180.4 136 184 139.6 184 144zM152 184H184V208C184 212.4 180.4 216 176 216H152V184zM232 136V168H200V144C200 139.6 203.6 136 208 136H232zM232 216H208C203.6 216 200 212.4 200 208V184H232V216zM248 136H272C276.4 136 280 139.6 280 144V168H248V136zM280 208C280 212.4 276.4 216 272 216H248V184H280V208zM104 248C104 239.2 111.2 232 120 232H168C176.8 232 184 239.2 184 248V296C184 304.8 176.8 312 168 312H120C111.2 312 104 304.8 104 296V248zM192 0C200.8 0 208 7.164 208 16V32H288C305.7 32 320 46.33 320 64C337.7 64 352 78.33 352 96V464H360C373.3 464 384 474.7 384 488C384 501.3 373.3 512 360 512H24C10.75 512 0 501.3 0 488C0 474.7 10.75 464 24 464H32V96C32 78.33 46.33 64 64 64C64 46.33 78.33 32 96 32H176V16C176 7.164 183.2 0 192 0zM80 464H304V112H80V464z"/>
</>],
['solid',<>
	<path d="M192 0C200.8 0 208 7.164 208 16V32H288C305.7 32 320 46.33 320 64C337.7 64 352 78.33 352 96V464H360C373.3 464 384 474.7 384 488C384 501.3 373.3 512 360 512H24C10.75 512 0 501.3 0 488C0 474.7 10.75 464 24 464H32V96C32 78.33 46.33 64 64 64C64 46.33 78.33 32 96 32H176V16C176 7.164 183.2 0 192 0zM96 160H128V128H104C99.58 128 96 131.6 96 136V160zM96 200C96 204.4 99.58 208 104 208H128V176H96V200zM168 128H144V160H176V136C176 131.6 172.4 128 168 128zM144 208H168C172.4 208 176 204.4 176 200V176H144V208zM216 128C211.6 128 208 131.6 208 136V160H240V128H216zM240 176H208V200C208 204.4 211.6 208 216 208H240V176zM256 160H288V136C288 131.6 284.4 128 280 128H256V160zM288 176H256V208H280C284.4 208 288 204.4 288 200V176zM96 304C96 312.8 103.2 320 112 320H160C168.8 320 176 312.8 176 304V256C176 247.2 168.8 240 160 240H112C103.2 240 96 247.2 96 256V304z"/>
</>],
['thin',<>
	<path d="M80 272C80 263.2 87.16 256 96 256H160C168.8 256 176 263.2 176 272V336C176 344.8 168.8 352 160 352H96C87.16 352 80 344.8 80 336V272zM96 336H160V272H96V336zM288 128C296.8 128 304 135.2 304 144V208C304 216.8 296.8 224 288 224H224C215.2 224 208 216.8 208 208V144C208 135.2 215.2 128 224 128H288zM288 144H264V168H288V144zM224 168H248V144H224V168zM224 208H248V184H224V208zM288 184H264V208H288V184zM80 144C80 135.2 87.16 128 96 128H160C168.8 128 176 135.2 176 144V208C176 216.8 168.8 224 160 224H96C87.16 224 80 216.8 80 208V144zM136 168H160V144H136V168zM120 144H96V168H120V144zM120 184H96V208H120V184zM136 208H160V184H136V208zM200 32H296C309.3 32 320 42.75 320 56V64C337.7 64 352 78.33 352 96V496H376C380.4 496 384 499.6 384 504C384 508.4 380.4 512 376 512H8C3.582 512 0 508.4 0 504C0 499.6 3.582 496 8 496H32V96C32 78.33 46.33 64 64 64V56C64 42.75 74.75 32 88 32H184V8C184 3.582 187.6 0 192 0C196.4 0 200 3.582 200 8V32zM320 80H64C55.16 80 48 87.16 48 96V496H336V96C336 87.16 328.8 80 320 80zM88 48C83.58 48 80 51.58 80 56V64H304V56C304 51.58 300.4 48 296 48H88z"/>
</>],

]);

const PoliceBox: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PoliceBox.displayName = "PoliceBox";

export default PoliceBox;