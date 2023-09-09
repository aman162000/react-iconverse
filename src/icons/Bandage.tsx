
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M192 416H160V96H192V416zM480 416H448V96H480V416z"/><path className="fa-secondary" d="M480 96H576C611.3 96 640 124.7 640 160V352C640 387.3 611.3 416 576 416H480V96zM448 416H192V96H448V416zM272 184C258.7 184 248 194.7 248 208C248 221.3 258.7 232 272 232C285.3 232 296 221.3 296 208C296 194.7 285.3 184 272 184zM368 232C381.3 232 392 221.3 392 208C392 194.7 381.3 184 368 184C354.7 184 344 194.7 344 208C344 221.3 354.7 232 368 232zM272 280C258.7 280 248 290.7 248 304C248 317.3 258.7 328 272 328C285.3 328 296 317.3 296 304C296 290.7 285.3 280 272 280zM368 328C381.3 328 392 317.3 392 304C392 290.7 381.3 280 368 280C354.7 280 344 290.7 344 304C344 317.3 354.7 328 368 328zM64 96H160V416H64C28.65 416 0 387.3 0 352V160C0 124.7 28.65 96 64 96z"/>
</>],
['light',<>
	<path d="M248 208C248 194.7 258.7 184 272 184C285.3 184 296 194.7 296 208C296 221.3 285.3 232 272 232C258.7 232 248 221.3 248 208zM392 208C392 221.3 381.3 232 368 232C354.7 232 344 221.3 344 208C344 194.7 354.7 184 368 184C381.3 184 392 194.7 392 208zM248 304C248 290.7 258.7 280 272 280C285.3 280 296 290.7 296 304C296 317.3 285.3 328 272 328C258.7 328 248 317.3 248 304zM392 304C392 317.3 381.3 328 368 328C354.7 328 344 317.3 344 304C344 290.7 354.7 280 368 280C381.3 280 392 290.7 392 304zM560 96C604.2 96 640 131.8 640 176V336C640 380.2 604.2 416 560 416H80C35.82 416 0 380.2 0 336V176C0 131.8 35.82 96 80 96H560zM480 384H560C586.5 384 608 362.5 608 336V176C608 149.5 586.5 128 560 128H480V384zM448 128H192V384H448V128zM160 384V128H80C53.49 128 32 149.5 32 176V336C32 362.5 53.49 384 80 384H160z"/>
</>],
['regular',<>
	<path d="M560 96C604.2 96 640 131.8 640 176V336C640 380.2 604.2 416 560 416H80C35.82 416 0 380.2 0 336V176C0 131.8 35.82 96 80 96H560zM448 368H560C577.7 368 592 353.7 592 336V176C592 158.3 577.7 144 560 144H448V368zM192 144H80C62.33 144 48 158.3 48 176V336C48 353.7 62.33 368 80 368H192V144zM272 232C285.3 232 296 221.3 296 208C296 194.7 285.3 184 272 184C258.7 184 248 194.7 248 208C248 221.3 258.7 232 272 232zM368 184C354.7 184 344 194.7 344 208C344 221.3 354.7 232 368 232C381.3 232 392 221.3 392 208C392 194.7 381.3 184 368 184zM272 328C285.3 328 296 317.3 296 304C296 290.7 285.3 280 272 280C258.7 280 248 290.7 248 304C248 317.3 258.7 328 272 328zM368 280C354.7 280 344 290.7 344 304C344 317.3 354.7 328 368 328C381.3 328 392 317.3 392 304C392 290.7 381.3 280 368 280z"/>
</>],
['solid',<>
	<path d="M480 96H576C611.3 96 640 124.7 640 160V352C640 387.3 611.3 416 576 416H480V96zM448 416H192V96H448V416zM272 184C258.7 184 248 194.7 248 208C248 221.3 258.7 232 272 232C285.3 232 296 221.3 296 208C296 194.7 285.3 184 272 184zM368 232C381.3 232 392 221.3 392 208C392 194.7 381.3 184 368 184C354.7 184 344 194.7 344 208C344 221.3 354.7 232 368 232zM272 280C258.7 280 248 290.7 248 304C248 317.3 258.7 328 272 328C285.3 328 296 317.3 296 304C296 290.7 285.3 280 272 280zM368 328C381.3 328 392 317.3 392 304C392 290.7 381.3 280 368 280C354.7 280 344 290.7 344 304C344 317.3 354.7 328 368 328zM64 96H160V416H64C28.65 416 0 387.3 0 352V160C0 124.7 28.65 96 64 96z"/>
</>],
['thin',<>
	<path d="M256 208C256 199.2 263.2 192 272 192C280.8 192 288 199.2 288 208C288 216.8 280.8 224 272 224C263.2 224 256 216.8 256 208zM384 208C384 216.8 376.8 224 368 224C359.2 224 352 216.8 352 208C352 199.2 359.2 192 368 192C376.8 192 384 199.2 384 208zM256 304C256 295.2 263.2 288 272 288C280.8 288 288 295.2 288 304C288 312.8 280.8 320 272 320C263.2 320 256 312.8 256 304zM384 304C384 312.8 376.8 320 368 320C359.2 320 352 312.8 352 304C352 295.2 359.2 288 368 288C376.8 288 384 295.2 384 304zM560 96C604.2 96 640 131.8 640 176V336C640 380.2 604.2 416 560 416H80C35.82 416 0 380.2 0 336V176C0 131.8 35.82 96 80 96H560zM480 400H560C595.3 400 624 371.3 624 336V176C624 140.7 595.3 112 560 112H480V400zM464 112H176V400H464V112zM160 400V112H80C44.65 112 16 140.7 16 176V336C16 371.3 44.65 400 80 400H160z"/>
</>],

]);

const Bandage: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Bandage.displayName = "Bandage";

export default Bandage;
