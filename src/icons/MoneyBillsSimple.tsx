
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M576 32C611.3 32 640 60.65 640 96V320C640 355.3 611.3 384 576 384H160C124.7 384 96 355.3 96 320V96C96 60.65 124.7 32 160 32H576zM368 288C412.2 288 448 252.2 448 208C448 163.8 412.2 128 368 128C323.8 128 288 163.8 288 208C288 252.2 323.8 288 368 288z"/><path className="fa-secondary" d="M48 360C48 399.8 80.24 432 120 432H520C533.3 432 544 442.7 544 456C544 469.3 533.3 480 520 480H120C53.73 480 0 426.3 0 360V120C0 106.7 10.75 96 24 96C37.25 96 48 106.7 48 120V360zM288 208C288 163.8 323.8 128 368 128C412.2 128 448 163.8 448 208C448 252.2 412.2 288 368 288C323.8 288 288 252.2 288 208z"/>
</>],
['light',<>
	<path d="M272 208C272 154.1 314.1 112 368 112C421 112 464 154.1 464 208C464 261 421 304 368 304C314.1 304 272 261 272 208zM368 144C332.7 144 304 172.7 304 208C304 243.3 332.7 272 368 272C403.3 272 432 243.3 432 208C432 172.7 403.3 144 368 144zM576 32C611.3 32 640 60.65 640 96V320C640 355.3 611.3 384 576 384H160C124.7 384 96 355.3 96 320V96C96 60.65 124.7 32 160 32H576zM576 64H160C142.3 64 128 78.33 128 96V320C128 337.7 142.3 352 160 352H576C593.7 352 608 337.7 608 320V96C608 78.33 593.7 64 576 64zM32 368C32 412.2 67.82 448 112 448H528C536.8 448 544 455.2 544 464C544 472.8 536.8 480 528 480H112C50.14 480 0 429.9 0 368V112C0 103.2 7.164 96 16 96C24.84 96 32 103.2 32 112V368z"/>
</>],
['regular',<>
	<path d="M448 208C448 252.2 412.2 288 368 288C323.8 288 288 252.2 288 208C288 163.8 323.8 128 368 128C412.2 128 448 163.8 448 208zM576 32C611.3 32 640 60.65 640 96V320C640 355.3 611.3 384 576 384H160C124.7 384 96 355.3 96 320V96C96 60.65 124.7 32 160 32H576zM576 80H160C151.2 80 144 87.16 144 96V320C144 328.8 151.2 336 160 336H576C584.8 336 592 328.8 592 320V96C592 87.16 584.8 80 576 80zM48 360C48 399.8 80.24 432 120 432H520C533.3 432 544 442.7 544 456C544 469.3 533.3 480 520 480H120C53.73 480 0 426.3 0 360V120C0 106.7 10.75 96 24 96C37.25 96 48 106.7 48 120V360z"/>
</>],
['solid',<>
	<path d="M96 96C96 60.65 124.7 32 160 32H576C611.3 32 640 60.65 640 96V320C640 355.3 611.3 384 576 384H160C124.7 384 96 355.3 96 320V96zM368 128C323.8 128 288 163.8 288 208C288 252.2 323.8 288 368 288C412.2 288 448 252.2 448 208C448 163.8 412.2 128 368 128zM48 360C48 399.8 80.24 432 120 432H520C533.3 432 544 442.7 544 456C544 469.3 533.3 480 520 480H120C53.73 480 0 426.3 0 360V120C0 106.7 10.75 96 24 96C37.25 96 48 106.7 48 120V360z"/>
</>],
['thin',<>
	<path d="M464 208C464 261 421 304 368 304C314.1 304 272 261 272 208C272 154.1 314.1 112 368 112C421 112 464 154.1 464 208zM368 128C323.8 128 288 163.8 288 208C288 252.2 323.8 288 368 288C412.2 288 448 252.2 448 208C448 163.8 412.2 128 368 128zM576 32C611.3 32 640 60.65 640 96V320C640 355.3 611.3 384 576 384H160C124.7 384 96 355.3 96 320V96C96 60.65 124.7 32 160 32H576zM576 48H160C133.5 48 112 69.49 112 96V320C112 346.5 133.5 368 160 368H576C602.5 368 624 346.5 624 320V96C624 69.49 602.5 48 576 48zM64 144C37.49 144 16 165.5 16 192V416C16 442.5 37.49 464 64 464H480C506.5 464 528 442.5 528 416H544C544 451.3 515.3 480 480 480H64C28.65 480 0 451.3 0 416V192C0 156.7 28.65 128 64 128V144z"/>
</>],

]);

const MoneyBillsSimple: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MoneyBillsSimple.displayName = "MoneyBillsSimple";

export default MoneyBillsSimple;
