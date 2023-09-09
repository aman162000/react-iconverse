
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM563.3 347.3C569.6 341.1 569.6 330.9 563.3 324.7C557.1 318.4 546.9 318.4 540.7 324.7L480 385.4L451.3 356.7C445.1 350.4 434.9 350.4 428.7 356.7C422.4 362.9 422.4 373.1 428.7 379.3L468.7 419.3C474.9 425.6 485.1 425.6 491.3 419.3L563.3 347.3z"/><path className="fa-secondary" d="M0 48C0 21.49 21.49 0 48 0H336C362.5 0 384 21.49 384 48V232.2C344.9 264.5 320 313.3 320 368C320 417.5 340.4 462.2 373.3 494.2C364.5 505.1 351.1 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48zM80 224C71.16 224 64 231.2 64 240V272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80zM160 272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176C167.2 224 160 231.2 160 240V272zM272 224C263.2 224 256 231.2 256 240V272C256 280.8 263.2 288 272 288H304C312.8 288 320 280.8 320 272V240C320 231.2 312.8 224 304 224H272zM64 144C64 152.8 71.16 160 80 160H112C120.8 160 128 152.8 128 144V112C128 103.2 120.8 96 112 96H80C71.16 96 64 103.2 64 112V144zM176 96C167.2 96 160 103.2 160 112V144C160 152.8 167.2 160 176 160H208C216.8 160 224 152.8 224 144V112C224 103.2 216.8 96 208 96H176zM256 144C256 152.8 263.2 160 272 160H304C312.8 160 320 152.8 320 144V112C320 103.2 312.8 96 304 96H272C263.2 96 256 103.2 256 112V144z"/>
</>],
['light',<>
	<path d="M32 64V448C32 465.7 46.33 480 64 480H128V416C128 380.7 156.7 352 192 352C227.3 352 256 380.7 256 416V480H320C332.1 480 342.6 473.3 348.1 463.4C354.1 472.7 361 481.5 368.7 489.5C356.1 503.3 339.5 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H320C355.3 0 384 28.65 384 64V232.2C371.9 242.3 361.1 253.9 352 266.8V64C352 46.33 337.7 32 320 32H64C46.33 32 32 46.33 32 64V64zM224 416C224 398.3 209.7 384 192 384C174.3 384 160 398.3 160 416V480H224V416zM64 120C64 106.7 74.75 96 88 96H136C149.3 96 160 106.7 160 120V168C160 181.3 149.3 192 136 192H88C74.75 192 64 181.3 64 168V120zM96 128V160H128V128H96zM296 96C309.3 96 320 106.7 320 120V168C320 181.3 309.3 192 296 192H248C234.7 192 224 181.3 224 168V120C224 106.7 234.7 96 248 96H296zM288 160V128H256V160H288zM64 248C64 234.7 74.75 224 88 224H136C149.3 224 160 234.7 160 248V296C160 309.3 149.3 320 136 320H88C74.75 320 64 309.3 64 296V248zM96 256V288H128V256H96zM296 224C309.3 224 320 234.7 320 248V296C320 309.3 309.3 320 296 320H248C234.7 320 224 309.3 224 296V248C224 234.7 234.7 224 248 224H296zM288 288V256H256V288H288zM563.3 324.7C569.6 330.9 569.6 341.1 563.3 347.3L491.3 419.3C485.1 425.6 474.9 425.6 468.7 419.3L428.7 379.3C422.4 373.1 422.4 362.9 428.7 356.7C434.9 350.4 445.1 350.4 451.3 356.7L480 385.4L540.7 324.7C546.9 318.4 557.1 318.4 563.3 324.7H563.3zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM496 480C557.9 480 608 429.9 608 368C608 306.1 557.9 256 496 256C434.1 256 384 306.1 384 368C384 429.9 434.1 480 496 480z"/>
</>],
['regular',<>
	<path d="M48 64V448C48 456.8 55.16 464 64 464H144V400C144 373.5 165.5 352 192 352C218.5 352 240 373.5 240 400V464H320C328.8 464 336 456.8 336 448V441.4C344.2 459.3 355.3 475.5 368.7 489.5C356.1 503.3 339.5 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H320C355.3 0 384 28.65 384 64V232.2C363.7 249 347.1 270.3 336 294.6V64C336 55.16 328.8 48 320 48H64C55.16 48 48 55.16 48 64zM88 104C88 95.16 95.16 88 104 88H152C160.8 88 168 95.16 168 104V152C168 160.8 160.8 168 152 168H104C95.16 168 88 160.8 88 152V104zM280 88C288.8 88 296 95.16 296 104V152C296 160.8 288.8 168 280 168H232C223.2 168 216 160.8 216 152V104C216 95.16 223.2 88 232 88H280zM88 232C88 223.2 95.16 216 104 216H152C160.8 216 168 223.2 168 232V280C168 288.8 160.8 296 152 296H104C95.16 296 88 288.8 88 280V232zM280 216C288.8 216 296 223.2 296 232V280C296 288.8 288.8 296 280 296H232C223.2 296 216 288.8 216 280V232C216 223.2 223.2 216 232 216H280zM640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368zM540.7 324.7L480 385.4L451.3 356.7C445.1 350.4 434.9 350.4 428.7 356.7C422.4 362.9 422.4 373.1 428.7 379.3L468.7 419.3C474.9 425.6 485.1 425.6 491.3 419.3L563.3 347.3C569.6 341.1 569.6 330.9 563.3 324.7C557.1 318.4 546.9 318.4 540.7 324.7H540.7z"/>
</>],
['solid',<>
	<path d="M336 0C362.5 0 384 21.49 384 48V232.2C344.9 264.5 320 313.3 320 368C320 417.5 340.4 462.2 373.3 494.2C364.5 505.1 351.1 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336zM64 272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80C71.16 224 64 231.2 64 240V272zM176 224C167.2 224 160 231.2 160 240V272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176zM256 272C256 280.8 263.2 288 272 288H304C312.8 288 320 280.8 320 272V240C320 231.2 312.8 224 304 224H272C263.2 224 256 231.2 256 240V272zM80 96C71.16 96 64 103.2 64 112V144C64 152.8 71.16 160 80 160H112C120.8 160 128 152.8 128 144V112C128 103.2 120.8 96 112 96H80zM160 144C160 152.8 167.2 160 176 160H208C216.8 160 224 152.8 224 144V112C224 103.2 216.8 96 208 96H176C167.2 96 160 103.2 160 112V144zM272 96C263.2 96 256 103.2 256 112V144C256 152.8 263.2 160 272 160H304C312.8 160 320 152.8 320 144V112C320 103.2 312.8 96 304 96H272zM640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368zM540.7 324.7L480 385.4L451.3 356.7C445.1 350.4 434.9 350.4 428.7 356.7C422.4 362.9 422.4 373.1 428.7 379.3L468.7 419.3C474.9 425.6 485.1 425.6 491.3 419.3L563.3 347.3C569.6 341.1 569.6 330.9 563.3 324.7C557.1 318.4 546.9 318.4 540.7 324.7H540.7z"/>
</>],
['thin',<>
	<path d="M16 48V464C16 481.7 30.33 496 48 496H144V416C144 389.5 165.5 368 192 368C218.5 368 240 389.5 240 416V496H336C346.8 496 356.4 490.6 362.2 482.4C365.7 486.5 369.4 490.4 373.3 494.2C364.5 505.1 351.1 512 336 512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336C362.5 0 384 21.49 384 48V232.2C378.4 236.9 373 241.9 368 247.2V48C368 30.33 353.7 16 336 16H48C30.33 16 16 30.33 16 48V48zM224 496V416C224 398.3 209.7 384 192 384C174.3 384 160 398.3 160 416V496H224zM136 232C149.3 232 160 242.7 160 256V288C160 301.3 149.3 312 136 312H104C90.75 312 80 301.3 80 288V256C80 242.7 90.75 232 104 232H136zM96 288C96 292.4 99.58 296 104 296H136C140.4 296 144 292.4 144 288V256C144 251.6 140.4 248 136 248H104C99.58 248 96 251.6 96 256V288zM224 256C224 242.7 234.7 232 248 232H280C293.3 232 304 242.7 304 256V288C304 301.3 293.3 312 280 312H248C234.7 312 224 301.3 224 288V256zM248 248C243.6 248 240 251.6 240 256V288C240 292.4 243.6 296 248 296H280C284.4 296 288 292.4 288 288V256C288 251.6 284.4 248 280 248H248zM136 104C149.3 104 160 114.7 160 128V160C160 173.3 149.3 184 136 184H104C90.75 184 80 173.3 80 160V128C80 114.7 90.75 104 104 104H136zM96 160C96 164.4 99.58 168 104 168H136C140.4 168 144 164.4 144 160V128C144 123.6 140.4 120 136 120H104C99.58 120 96 123.6 96 128V160zM224 128C224 114.7 234.7 104 248 104H280C293.3 104 304 114.7 304 128V160C304 173.3 293.3 184 280 184H248C234.7 184 224 173.3 224 160V128zM248 120C243.6 120 240 123.6 240 128V160C240 164.4 243.6 168 248 168H280C284.4 168 288 164.4 288 160V128C288 123.6 284.4 120 280 120H248zM565.7 322.3C568.8 325.5 568.8 330.5 565.7 333.7L485.7 413.7C482.5 416.8 477.5 416.8 474.3 413.7L426.3 365.7C423.2 362.5 423.2 357.5 426.3 354.3C429.5 351.2 434.5 351.2 437.7 354.3L480 396.7L554.3 322.3C557.5 319.2 562.5 319.2 565.7 322.3H565.7zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM496 496C566.7 496 624 438.7 624 368C624 297.3 566.7 240 496 240C425.3 240 368 297.3 368 368C368 438.7 425.3 496 496 496z"/>
</>],

]);

const BuildingCircleCheck: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BuildingCircleCheck.displayName = "BuildingCircleCheck";

export default BuildingCircleCheck;
