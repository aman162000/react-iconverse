
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M560.9 273.7C570 277.4 576 286.2 576 296C576 359.3 550.1 464.8 441.2 510.2C435.3 512.6 428.7 512.6 422.8 510.2C313.9 464.8 288 359.3 288 296C288 286.2 293.1 277.4 303.1 273.7L423.1 225.7C428.8 223.4 435.2 223.4 440.9 225.7L560.9 273.7zM432 461.7C500.2 428.7 523.5 362.7 527.4 311.1L432 273.8V461.7z"/><path className="fa-secondary" d="M336 0C362.5 0 384 21.49 384 48V207L341.6 224H272C263.2 224 256 231.2 256 240V304C256 304.9 256.1 305.7 256.2 306.6C258.5 364.7 280.3 451.4 354.9 508.1C349.1 510.6 342.7 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336zM64 272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80C71.16 224 64 231.2 64 240V272zM176 224C167.2 224 160 231.2 160 240V272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176zM80 96C71.16 96 64 103.2 64 112V144C64 152.8 71.16 160 80 160H112C120.8 160 128 152.8 128 144V112C128 103.2 120.8 96 112 96H80zM160 144C160 152.8 167.2 160 176 160H208C216.8 160 224 152.8 224 144V112C224 103.2 216.8 96 208 96H176C167.2 96 160 103.2 160 112V144zM272 96C263.2 96 256 103.2 256 112V144C256 152.8 263.2 160 272 160H304C312.8 160 320 152.8 320 144V112C320 103.2 312.8 96 304 96H272z"/>
</>],
['light',<>
	<path d="M320 32H63.1C46.33 32 31.1 46.33 31.1 64V448C31.1 465.7 46.33 480 63.1 480H127.1V416C127.1 380.7 156.7 352 191.1 352C227.3 352 255.1 380.7 255.1 416V480H320C321.3 480 322.6 479.9 323.9 479.8C331.8 488.4 340.5 496.7 350.2 504.4C341.2 509.3 330.9 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H320C355.3 0 384 28.65 384 64V207L352 219.8V64C352 46.33 337.7 32 320 32H320zM159.1 416V480H223.1V416C223.1 398.3 209.7 384 191.1 384C174.3 384 159.1 398.3 159.1 416zM255.1 256V320H247.1C234.7 320 223.1 309.3 223.1 296V248C223.1 234.7 234.7 224 247.1 224H296C304.2 224 311.4 228.1 315.7 234.3L301.6 240H272C263.2 240 256 247.2 256 256H255.1zM135.1 96C149.3 96 159.1 106.7 159.1 120V168C159.1 181.3 149.3 192 135.1 192H87.1C74.74 192 63.1 181.3 63.1 168V120C63.1 106.7 74.74 96 87.1 96H135.1zM127.1 160V128H95.1V160H127.1zM223.1 120C223.1 106.7 234.7 96 247.1 96H296C309.3 96 320 106.7 320 120V168C320 181.3 309.3 192 296 192H247.1C234.7 192 223.1 181.3 223.1 168V120zM255.1 128V160H287.1V128H255.1zM135.1 224C149.3 224 159.1 234.7 159.1 248V296C159.1 309.3 149.3 320 135.1 320H87.1C74.74 320 63.1 309.3 63.1 296V248C63.1 234.7 74.74 224 87.1 224H135.1zM127.1 288V256H95.1V288H127.1zM560.9 273.7C570 277.4 576 286.2 576 296C576 359.3 550.1 464.8 441.2 510.2C435.3 512.6 428.7 512.6 422.8 510.2C313.9 464.8 287.1 359.3 287.1 296C287.1 286.2 293.1 277.4 303.1 273.7L423.1 225.7C428.8 223.4 435.2 223.4 440.9 225.7L560.9 273.7zM416 471.4V263L320.1 301.4C321.4 354.3 342.6 430.9 416 471.4V471.4zM448 263V471.4C521.4 430.9 542.6 354.3 543.9 301.4L448 263z"/>
</>],
['regular',<>
	<path d="M47.1 64V448C47.1 456.8 55.16 464 63.1 464H143.1V400C143.1 373.5 165.5 352 191.1 352C218.5 352 239.1 373.5 239.1 400V464H310.7C321.7 478.4 334.8 492.1 350.2 504.4C341.2 509.3 330.9 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H320C355.3 0 384 28.65 384 64V207L336 226.2V64C336 55.16 328.8 48 320 48H64C55.16 48 48 55.16 48 64H47.1zM296 232V242.2L291.2 244.2C269.1 252.6 256.1 273.2 256 295.1H231.1C223.2 295.1 215.1 288.8 215.1 279.1V231.1C215.1 223.2 223.2 215.1 231.1 215.1H279.1C288.8 215.1 296 223.2 296 231.1V232zM87.1 104C87.1 95.16 95.16 88 103.1 88H151.1C160.8 88 167.1 95.16 167.1 104V152C167.1 160.8 160.8 168 151.1 168H103.1C95.16 168 87.1 160.8 87.1 152V104zM279.1 88C288.8 88 296 95.16 296 104V152C296 160.8 288.8 168 279.1 168H231.1C223.2 168 215.1 160.8 215.1 152V104C215.1 95.16 223.2 88 231.1 88H279.1zM87.1 232C87.1 223.2 95.16 216 103.1 216H151.1C160.8 216 167.1 223.2 167.1 232V280C167.1 288.8 160.8 296 151.1 296H103.1C95.16 296 87.1 288.8 87.1 280V232zM423.1 225.7C428.8 223.4 435.2 223.4 440.9 225.7L560.9 273.7C570 277.4 576 286.2 576 296C576 359.3 550.1 464.8 441.2 510.2C435.3 512.6 428.7 512.6 422.8 510.2C313.9 464.8 288 359.3 288 296C288 286.2 293.1 277.4 303.1 273.7L423.1 225.7zM432 273.8V461.7C500.2 428.7 523.4 362.7 527.4 311.1L432 273.8z"/>
</>],
['solid',<>
	<path d="M0 48C0 21.49 21.49 0 48 0H336C362.5 0 384 21.49 384 48V207L341.6 224H272C263.2 224 256 231.2 256 240V304C256 304.9 256.1 305.7 256.2 306.6C258.5 364.7 280.3 451.4 354.9 508.1C349.1 510.6 342.7 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48zM80 224C71.16 224 64 231.2 64 240V272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80zM160 272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176C167.2 224 160 231.2 160 240V272zM64 144C64 152.8 71.16 160 80 160H112C120.8 160 128 152.8 128 144V112C128 103.2 120.8 96 112 96H80C71.16 96 64 103.2 64 112V144zM176 96C167.2 96 160 103.2 160 112V144C160 152.8 167.2 160 176 160H208C216.8 160 224 152.8 224 144V112C224 103.2 216.8 96 208 96H176zM256 144C256 152.8 263.2 160 272 160H304C312.8 160 320 152.8 320 144V112C320 103.2 312.8 96 304 96H272C263.2 96 256 103.2 256 112V144zM423.1 225.7C428.8 223.4 435.2 223.4 440.9 225.7L560.9 273.7C570 277.4 576 286.2 576 296C576 359.3 550.1 464.8 441.2 510.2C435.3 512.6 428.7 512.6 422.8 510.2C313.9 464.8 288 359.3 288 296C288 286.2 293.1 277.4 303.1 273.7L423.1 225.7zM432 273.8V461.7C500.2 428.7 523.5 362.7 527.4 311.1L432 273.8z"/>
</>],
['thin',<>
	<path d="M15.1 48V464C15.1 481.7 30.33 496 47.1 496H143.1V416C143.1 389.5 165.5 368 191.1 368C218.5 368 239.1 389.5 239.1 416V496H336C337.3 496 338.7 495.9 339.1 495.8C344.7 500 349.7 504.1 354.9 508.1C349.1 510.6 342.7 512 336 512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336C362.5 0 384 21.49 384 48V207L368 213.4V48C368 30.33 353.7 16 336 16H48C30.33 16 16 30.33 16 48L15.1 48zM223.1 496V416C223.1 398.3 209.7 384 191.1 384C174.3 384 159.1 398.3 159.1 416V496H223.1zM279.1 232C287.6 232 294.4 235.6 298.8 241.1L291.2 244.2C288.2 245.4 285.3 246.8 282.7 248.5C281.8 248.2 280.9 248 279.1 248H247.1C243.6 248 239.1 251.6 239.1 256V288C239.1 292.4 243.6 296 247.1 296H256L255.1 296.2C255.1 301.2 256.1 306.5 256.5 312H247.1C234.7 312 223.1 301.3 223.1 288V256C223.1 242.7 234.7 232 247.1 232H279.1zM135.1 232C149.3 232 159.1 242.7 159.1 256V288C159.1 301.3 149.3 312 135.1 312H103.1C90.74 312 79.1 301.3 79.1 288V256C79.1 242.7 90.74 232 103.1 232H135.1zM95.1 288C95.1 292.4 99.58 296 103.1 296H135.1C140.4 296 143.1 292.4 143.1 288V256C143.1 251.6 140.4 248 135.1 248H103.1C99.58 248 95.1 251.6 95.1 256V288zM135.1 104C149.3 104 159.1 114.7 159.1 128V160C159.1 173.3 149.3 184 135.1 184H103.1C90.74 184 79.1 173.3 79.1 160V128C79.1 114.7 90.74 104 103.1 104H135.1zM95.1 160C95.1 164.4 99.58 168 103.1 168H135.1C140.4 168 143.1 164.4 143.1 160V128C143.1 123.6 140.4 120 135.1 120H103.1C99.58 120 95.1 123.6 95.1 128V160zM223.1 128C223.1 114.7 234.7 104 247.1 104H279.1C293.3 104 304 114.7 304 128V160C304 173.3 293.3 184 279.1 184H247.1C234.7 184 223.1 173.3 223.1 160V128zM247.1 120C243.6 120 239.1 123.6 239.1 128V160C239.1 164.4 243.6 168 247.1 168H279.1C284.4 168 287.1 164.4 287.1 160V128C287.1 123.6 284.4 120 279.1 120H247.1zM560.9 273.7C570 277.4 576 286.2 576 296C576 359.3 550.1 464.8 441.2 510.2C435.3 512.6 428.7 512.6 422.8 510.2C313.9 464.8 287.1 359.3 287.1 296C287.1 286.2 293.1 277.4 303.1 273.7L423.1 225.7C428.8 223.4 435.2 223.4 440.9 225.7L560.9 273.7zM304 296C304 355.3 327.9 450.4 424 493.3V242.6L309 288.6C305.1 289.8 304 292.7 304 296V296zM554.1 288.6L440 242.6V493.3C536.1 450.4 560 355.3 560 296C560 292.7 558 289.8 554.1 288.6z"/>
</>],

]);

const BuildingShield: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BuildingShield.displayName = "BuildingShield";

export default BuildingShield;