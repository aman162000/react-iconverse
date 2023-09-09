
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 64H576C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H256V64z"/><path className="fa-secondary" d="M0 384V128C0 92.65 28.65 64 64 64H256V448H64C28.65 448 0 419.3 0 384zM96 128C78.33 128 64 142.3 64 160V352C64 369.7 78.33 384 96 384H160C177.7 384 192 369.7 192 352V160C192 142.3 177.7 128 160 128H96z"/>
</>],
['light',<>
	<path d="M176 128C202.5 128 224 149.5 224 176V336C224 362.5 202.5 384 176 384H112C85.49 384 64 362.5 64 336V176C64 149.5 85.49 128 112 128H176zM176 160H112C103.2 160 96 167.2 96 176V336C96 344.8 103.2 352 112 352H176C184.8 352 192 344.8 192 336V176C192 167.2 184.8 160 176 160zM576 64C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H576zM256 96H64C46.33 96 32 110.3 32 128V384C32 401.7 46.33 416 64 416H256V96zM288 96V416H576C593.7 416 608 401.7 608 384V128C608 110.3 593.7 96 576 96H288z"/>
</>],
['regular',<>
	<path d="M80 176C80 158.3 94.33 144 112 144H176C193.7 144 208 158.3 208 176V336C208 353.7 193.7 368 176 368H112C94.33 368 80 353.7 80 336V176zM576 64C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H576zM240 112H64C55.16 112 48 119.2 48 128V384C48 392.8 55.16 400 64 400H240V112zM288 112V400H576C584.8 400 592 392.8 592 384V128C592 119.2 584.8 112 576 112H288z"/>
</>],
['solid',<>
	<path d="M256 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H256V448zM64 352C64 369.7 78.33 384 96 384H160C177.7 384 192 369.7 192 352V160C192 142.3 177.7 128 160 128H96C78.33 128 64 142.3 64 160V352zM288 64H576C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H288V64z"/>
</>],
['thin',<>
	<path d="M176 128C202.5 128 224 149.5 224 176V336C224 362.5 202.5 384 176 384H112C85.49 384 64 362.5 64 336V176C64 149.5 85.49 128 112 128H176zM176 144H112C94.33 144 80 158.3 80 176V336C80 353.7 94.33 368 112 368H176C193.7 368 208 353.7 208 336V176C208 158.3 193.7 144 176 144zM576 64C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H576zM256 80H64C37.49 80 16 101.5 16 128V384C16 410.5 37.49 432 64 432H256V80zM272 80V432H576C602.5 432 624 410.5 624 384V128C624 101.5 602.5 80 576 80H272z"/>
</>],

]);

const MattressPillow: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MattressPillow.displayName = "MattressPillow";

export default MattressPillow;
