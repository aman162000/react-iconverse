
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M.0003 48C.0003 21.49 21.49 0 48 0H368C394.5 0 416 21.49 416 48V96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416H574.9C567.1 361.7 520.4 320 464 320C407.6 320 360.9 361.7 353.1 416H286.9C279.1 361.7 232.4 320 176 320C119.6 320 72.9 361.7 65.13 416H48C21.49 416 0 394.5 0 368L.0003 48zM544 256V237.3L466.7 160H416V256H544zM208 256C247.8 256 280 226.4 280 189.1C280 163 240.6 107 220.1 79.71C213.1 71.54 202 71.54 195.9 79.71C175.4 107 136 163 136 189.1C136 226.4 168.2 256 208 256V256z"/><path className="fa-secondary" d="M280 189.1C280 226.4 247.8 256 208 256C168.2 256 136 226.4 136 189.1C136 163 175.4 107 195.9 79.71C202 71.54 213.1 71.54 220.1 79.71C240.6 107 280 163 280 189.1zM256 432C256 476.2 220.2 512 176 512C131.8 512 96 476.2 96 432C96 387.8 131.8 352 176 352C220.2 352 256 387.8 256 432zM384 432C384 387.8 419.8 352 464 352C508.2 352 544 387.8 544 432C544 476.2 508.2 512 464 512C419.8 512 384 476.2 384 432z"/>
</>],
['light',<>
	<path d="M288 210.1C288 253.5 252.2 288 208 288C163.8 288 128 253.5 128 210.1C128 178.1 173.2 112.1 195.6 80.81C201.8 72.25 214.2 72.25 220.4 80.81C242.8 112.1 288 178.1 288 210.1V210.1zM250.1 193.6C247.1 184.2 241.5 173.2 234.8 161.5C226.4 146.7 216.7 131.8 208 118.1C199.3 131.8 189.6 146.7 181.2 161.5C174.5 173.2 168.9 184.2 165 193.6C160.9 203.8 160 209.3 160 210.1C160 234.7 180.3 256 208 256C235.7 256 256 234.7 256 210.1C256 209.3 255.1 203.8 250.1 193.6V193.6zM.0003 64C.0003 28.65 28.65 0 64 0H352C387.3 0 416 28.65 416 64V96H481.3C495.3 96 508.6 102.1 517.7 112.8L596.4 204.6C603.9 213.3 608 224.4 608 235.8V384H624C632.8 384 640 391.2 640 400C640 408.8 632.8 416 624 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416C28.65 416 0 387.3 0 352L.0003 64zM352 32H64C46.33 32 32 46.33 32 64V352C32 369.7 46.33 384 64 384H69.46C82.64 346.7 118.2 320 160 320C201.8 320 237.4 346.7 250.5 384H384V64C384 46.33 369.7 32 352 32zM416 128V224H570.9L493.4 133.6C490.4 130 485.1 128 481.3 128H416zM480 320C521.8 320 557.4 346.7 570.5 384H576V256H416V344.4C432.1 329.2 455.4 320 480 320zM160 480C195.3 480 224 451.3 224 416C224 380.7 195.3 352 160 352C124.7 352 96 380.7 96 416C96 451.3 124.7 480 160 480zM480 352C444.7 352 416 380.7 416 416C416 451.3 444.7 480 480 480C515.3 480 544 451.3 544 416C544 380.7 515.3 352 480 352z"/>
</>],
['regular',<>
	<path d="M136 205.1C136 179 175.4 123 195.9 95.71C202 87.54 213.1 87.54 220.1 95.71C240.6 123 280 179 280 205.1C280 242.4 247.8 272 208 272C168.2 272 136 242.4 136 205.1zM480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416C28.65 416 0 387.3 0 352V64C0 28.65 28.65 0 64 0H352C387.3 0 416 28.65 416 64V96H458.7C473.6 96 487.8 101.9 498.3 112.4L591.6 205.7C602.1 216.2 608 230.4 608 245.3V368H616C629.3 368 640 378.7 640 392C640 405.3 629.3 416 616 416H576C576 469 533 512 480 512H480zM48 64V352C48 360.8 55.16 368 64 368H76.84C93.44 339.3 124.5 320 160 320C195.5 320 226.6 339.3 243.2 368H352C360.8 368 368 360.8 368 352V64C368 55.16 360.8 48 352 48H64C55.16 48 48 55.16 48 64zM558 240C557.9 239.9 557.8 239.7 557.7 239.6L464.4 146.3C462.9 144.8 460.9 144 458.7 144H416V240L558 240zM160 464C186.5 464 208 442.5 208 416C208 389.5 186.5 368 160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464zM480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464C506.5 464 528 442.5 528 416C528 389.5 506.5 368 480 368z"/>
</>],
['solid',<>
	<path d="M0 48C0 21.49 21.49 0 48 0H368C394.5 0 416 21.49 416 48V96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H48C21.49 416 0 394.5 0 368V48zM544 256V237.3L466.7 160H416V256H544zM160 464C186.5 464 208 442.5 208 416C208 389.5 186.5 368 160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464zM480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464C506.5 464 528 442.5 528 416C528 389.5 506.5 368 480 368zM208 272C247.8 272 280 242.4 280 205.1C280 179 240.6 123 220.1 95.71C213.1 87.54 202 87.54 195.9 95.71C175.4 123 136 179 136 205.1C136 242.4 168.2 272 208 272V272z"/>
</>],
['thin',<>
	<path d="M288 210.1C288 253.5 252.2 288 208 288C163.8 288 128 253.5 128 210.1C128 178.1 173.2 112.1 195.6 80.81C201.8 72.25 214.2 72.25 220.4 80.81C242.8 112.1 288 178.1 288 210.1V210.1zM265.8 187.6C261.6 177.2 255.6 165.6 248.7 153.6C235.3 130.1 219.1 106.5 208 91.01C196.9 106.5 180.7 130.1 167.3 153.6C160.4 165.6 154.4 177.2 150.2 187.6C145.9 198.3 144 206.1 144 210.1C144 244.1 172.1 272 208 272C243.9 272 272 244.1 272 210.1C272 206.1 270.1 198.3 265.8 187.6zM0 352V64C0 28.65 28.65 0 64 0H352C387.3 0 416 28.65 416 64V96H474.7C485.4 96 495.5 100.2 503 107.7L596.3 200.1C603.8 208.5 608 218.6 608 229.3V400H632C636.4 400 640 403.6 640 408C640 412.4 636.4 416 632 416H575.6C575.9 418.6 576 421.3 576 424C576 472.6 536.6 512 488 512C439.4 512 400 472.6 400 424C400 421.3 400.1 418.6 400.4 416H239.6C239.9 418.6 240 421.3 240 424C240 472.6 200.6 512 152 512C103.4 512 64 472.6 64 424C64 421.3 64.12 418.6 64.36 416H64C28.65 416 .0003 387.3 .0003 352H0zM352 16H64C37.49 16 16 37.49 16 64V352C16 378.5 37.49 400 64 400H67.31C77.76 363.1 111.7 336 152 336C192.3 336 226.2 363.1 236.7 400H400V64C400 37.49 378.5 16 352 16zM416 112V216H588C587.1 214.7 586.1 213.4 584.1 212.3L491.7 119C487.2 114.5 481.1 112 474.7 112H416zM488 336C528.3 336 562.2 363.1 572.7 400H592V232H416V373.4C431.9 350.8 458.2 336 488 336zM152 496C191.8 496 224 463.8 224 424C224 384.2 191.8 352 152 352C112.2 352 80 384.2 80 424C80 463.8 112.2 496 152 496zM488 352C448.2 352 416 384.2 416 424C416 463.8 448.2 496 488 496C527.8 496 560 463.8 560 424C560 384.2 527.8 352 488 352z"/>
</>],

]);

const TruckDroplet: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TruckDroplet.displayName = "TruckDroplet";

export default TruckDroplet;