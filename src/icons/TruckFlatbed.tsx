
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M640 384C640 401.7 625.7 416 608 416H574.9C567.1 361.7 520.4 320 464 320C407.6 320 360.9 361.7 353.1 416H286.9C283.3 391.1 271.5 368.8 254.4 352H352V128C352 110.3 366.3 96 384 96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384V384zM544 256V237.3L466.7 160H416V256H544zM97.62 352C80.47 368.8 68.7 391.1 65.13 416H32C14.33 416 0 401.7 0 384C0 366.3 14.33 352 32 352H97.62z"/><path className="fa-secondary" d="M96 432C96 387.8 131.8 352 176 352C220.2 352 256 387.8 256 432C256 476.2 220.2 512 176 512C131.8 512 96 476.2 96 432zM384 432C384 387.8 419.8 352 464 352C508.2 352 544 387.8 544 432C544 476.2 508.2 512 464 512C419.8 512 384 476.2 384 432z"/>
</>],
['light',<>
	<path d="M481.3 96C495.3 96 508.6 102.1 517.7 112.8L596.4 204.6C603.9 213.3 608 224.4 608 235.8V384H624C632.8 384 640 391.2 640 400C640 408.8 632.8 416 624 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H16C7.164 416 0 408.8 0 400C0 391.2 7.164 384 16 384H69.46C82.64 346.7 118.2 320 160 320C201.8 320 237.4 346.7 250.5 384H384V120C384 106.7 394.7 96 408 96H481.3zM416 344.4C432.1 329.2 455.4 320 480 320C521.8 320 557.4 346.7 570.5 384H576V256H416V344.4zM570.9 224L493.4 133.6C490.4 130 485.1 128 481.3 128H416V224H570.9zM160 352C124.7 352 96 380.7 96 416C96 451.3 124.7 480 160 480C195.3 480 224 451.3 224 416C224 380.7 195.3 352 160 352zM480 480C515.3 480 544 451.3 544 416C544 380.7 515.3 352 480 352C444.7 352 416 380.7 416 416C416 451.3 444.7 480 480 480z"/>
</>],
['regular',<>
	<path d="M368 120C368 106.7 378.7 96 392 96H458.7C473.6 96 487.8 101.9 498.3 112.4L591.6 205.7C602.1 216.2 608 230.4 608 245.3V368H616C629.3 368 640 378.7 640 392C640 405.3 629.3 416 616 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H24C10.75 416 0 405.3 0 392C0 378.7 10.75 368 24 368H76.84C93.44 339.3 124.5 320 160 320C195.5 320 226.6 339.3 243.2 368H368L368 120zM464.4 146.3C462.9 144.8 460.9 144 458.7 144H416V240H558L557.8 239.8L557.7 239.6L464.4 146.3zM159.1 368C133.5 368 111.1 389.5 111.1 416C111.1 442.5 133.5 464 159.1 464C186.5 464 207.1 442.5 207.1 416C207.1 389.5 186.5 368 159.1 368zM480 464C506.5 464 528 442.5 528 416C528 389.5 506.5 368 480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464z"/>
</>],
['solid',<>
	<path d="M608 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H32C14.33 416 0 401.7 0 384C0 366.3 14.33 352 32 352H88.44C106 332.4 131.6 320 160 320C188.4 320 213.1 332.4 231.6 352H352V128C352 110.3 366.3 96 384 96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416zM416 160V256H544V237.3L466.7 160H416zM160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464C186.5 464 208 442.5 208 416C208 389.5 186.5 368 160 368zM480 464C506.5 464 528 442.5 528 416C528 389.5 506.5 368 480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464z"/>
</>],
['thin',<>
	<path d="M400 120C400 106.7 410.7 96 424 96H474.7C485.4 96 495.5 100.2 503 107.7L596.3 200.1C603.8 208.5 608 218.6 608 229.3V400H632C636.4 400 640 403.6 640 408C640 412.4 636.4 416 632 416H575.6C575.9 418.6 576 421.3 576 424C576 472.6 536.6 512 488 512C439.4 512 400 472.6 400 424C400 421.3 400.1 418.6 400.4 416H239.6C239.9 418.6 240 421.3 240 424C240 472.6 200.6 512 152 512C103.4 512 64 472.6 64 424C64 421.3 64.12 418.6 64.36 416H8C3.582 416 0 412.4 0 408C0 403.6 3.582 400 8 400H67.31C77.76 363.1 111.7 336 152 336C192.3 336 226.2 363.1 236.7 400H400L400 120zM416 373.4C431.9 350.8 458.2 336 488 336C528.3 336 562.2 363.1 572.7 400H592V232H416V373.4zM416 216H588C587.1 214.7 586.1 213.4 584.1 212.3L491.7 119C487.2 114.5 481.1 112 474.7 112H424C419.6 112 416 115.6 416 120V216zM152 496C191.8 496 224 463.8 224 424C224 384.2 191.8 352 152 352C112.2 352 80 384.2 80 424C80 463.8 112.2 496 152 496zM488 352C448.2 352 416 384.2 416 424C416 463.8 448.2 496 488 496C527.8 496 560 463.8 560 424C560 384.2 527.8 352 488 352z"/>
</>],

]);

const TruckFlatbed: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TruckFlatbed.displayName = "TruckFlatbed";

export default TruckFlatbed;