
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M240 64C266.5 64 288 85.49 288 112V464C288 490.5 266.5 512 240 512H48C21.49 512 0 490.5 0 464V448H144C152.8 448 160 440.8 160 432C160 423.2 152.8 416 144 416H0V352H144C152.8 352 160 344.8 160 336C160 327.2 152.8 320 144 320H0V112C0 85.49 21.49 64 48 64H240zM136 128C127.2 128 120 135.2 120 144V168H96C87.16 168 80 175.2 80 184V200C80 208.8 87.16 216 96 216H120V240C120 248.8 127.2 256 136 256H152C160.8 256 168 248.8 168 240V216H192C200.8 216 208 208.8 208 200V184C208 175.2 200.8 168 192 168H168V144C168 135.2 160.8 128 152 128H136zM408 80C408 71.16 415.2 64 424 64H440C448.8 64 456 71.16 456 80V104H480C488.8 104 496 111.2 496 120V136C496 144.8 488.8 152 480 152H456V176C456 184.8 448.8 192 440 192H424C415.2 192 408 184.8 408 176V152H384C375.2 152 368 144.8 368 136V120C368 111.2 375.2 104 384 104H408V80z"/><path className="fa-secondary" d="M320 96C320 61.56 292.8 33.48 258.7 32.06C265.3 13.38 283.1 0 304 0H528C554.5 0 576 21.49 576 48V464C576 490.5 554.5 512 528 512H311.4C316.9 502.6 320 491.7 320 480L320 96zM424 64C415.2 64 408 71.16 408 80V104H384C375.2 104 368 111.2 368 120V136C368 144.8 375.2 152 384 152H408V176C408 184.8 415.2 192 424 192H440C448.8 192 456 184.8 456 176V152H480C488.8 152 496 144.8 496 136V120C496 111.2 488.8 104 480 104H456V80C456 71.16 448.8 64 440 64H424zM576 256H432C423.2 256 416 263.2 416 272C416 280.8 423.2 288 432 288H576V256zM576 352H432C423.2 352 416 359.2 416 368C416 376.8 423.2 384 432 384H576V352z"/>
</>],
['light',<>
	<path d="M480 32H320C302.3 32 288 46.33 288 64V65.6C282.8 64.55 277.5 64 272 64H256C256 28.65 284.7 0 320 0H480C515.3 0 544 28.65 544 64V448C544 483.3 515.3 512 480 512H336C342.1 502.7 348 491.8 350.4 480H480C497.7 480 512 465.7 512 448V64C512 46.33 497.7 32 480 32zM384 96C384 87.16 391.2 80 400 80C408.8 80 416 87.16 416 96V128H448C456.8 128 464 135.2 464 144C464 152.8 456.8 160 448 160H416V192C416 200.8 408.8 208 400 208C391.2 208 384 200.8 384 192V160H352C343.2 160 336 152.8 336 144C336 135.2 343.2 128 352 128H384V96zM352 288H512V320H352V288zM352 384H512V416H352V384zM160 192C160 183.2 167.2 176 176 176C184.8 176 192 183.2 192 192V224H224C232.8 224 240 231.2 240 240C240 248.8 232.8 256 224 256H192V288C192 296.8 184.8 304 176 304C167.2 304 160 296.8 160 288V256H128C119.2 256 112 248.8 112 240C112 231.2 119.2 224 128 224H160V192zM256 96C291.3 96 320 124.7 320 160V448C320 483.3 291.3 512 256 512H96C60.65 512 32 483.3 32 448V160C32 124.7 60.65 96 96 96H256zM96 128C78.33 128 64 142.3 64 160V352H288V160C288 142.3 273.7 128 256 128H96zM96 480H256C273.7 480 288 465.7 288 448V384H64V448C64 465.7 78.33 480 96 480z"/>
</>],
['regular',<>
	<path d="M304 64V70.66C294.2 66.38 283.4 64 272 64H256C256 28.65 284.7 0 320 0H480C515.3 0 544 28.65 544 64V448C544 483.3 515.3 512 480 512H336C346 498.6 352 482 352 464H480C488.8 464 496 456.8 496 448V400H352V352H496V304H352V256H496V64C496 55.16 488.8 48 480 48H320C311.2 48 304 55.16 304 64zM384 96C384 87.16 391.2 80 400 80H416C424.8 80 432 87.16 432 96V120H456C464.8 120 472 127.2 472 136V152C472 160.8 464.8 168 456 168H432V192C432 200.8 424.8 208 416 208H400C391.2 208 384 200.8 384 192V168H360C351.2 168 344 160.8 344 152V136C344 127.2 351.2 120 360 120H384V96zM184 176C192.8 176 200 183.2 200 192V216H224C232.8 216 240 223.2 240 232V248C240 256.8 232.8 264 224 264H200V288C200 296.8 192.8 304 184 304H168C159.2 304 152 296.8 152 288V264H128C119.2 264 112 256.8 112 248V232C112 223.2 119.2 216 128 216H152V192C152 183.2 159.2 176 168 176H184zM32 160C32 124.7 60.65 96 96 96H256C291.3 96 320 124.7 320 160V448C320 483.3 291.3 512 256 512H96C60.65 512 32 483.3 32 448V160zM80 160V352H272V160C272 151.2 264.8 144 256 144H96C87.16 144 80 151.2 80 160zM80 448C80 456.8 87.16 464 96 464H256C264.8 464 272 456.8 272 448V400H80V448z"/>
</>],
['solid',<>
	<path d="M304 0H528C554.5 0 576 21.49 576 48V256H464C455.2 256 448 263.2 448 272C448 280.8 455.2 288 464 288H576V352H464C455.2 352 448 359.2 448 368C448 376.8 455.2 384 464 384H576V464C576 490.5 554.5 512 528 512H311.4C316.9 502.6 320 491.7 320 480V96C320 61.56 292.8 33.48 258.7 32.06C265.3 13.38 283.1 0 304 0H304zM408 104H384C375.2 104 368 111.2 368 120V136C368 144.8 375.2 152 384 152H408V176C408 184.8 415.2 192 424 192H440C448.8 192 456 184.8 456 176V152H480C488.8 152 496 144.8 496 136V120C496 111.2 488.8 104 480 104H456V80C456 71.16 448.8 64 440 64H424C415.2 64 408 71.16 408 80V104zM0 112C0 85.49 21.49 64 48 64H240C266.5 64 288 85.49 288 112V464C288 490.5 266.5 512 240 512H48C21.49 512 0 490.5 0 464V448H144C152.8 448 160 440.8 160 432C160 423.2 152.8 416 144 416H0V352H144C152.8 352 160 344.8 160 336C160 327.2 152.8 320 144 320H0V112zM120 168H96C87.16 168 80 175.2 80 184V200C80 208.8 87.16 216 96 216H120V240C120 248.8 127.2 256 136 256H152C160.8 256 168 248.8 168 240V216H192C200.8 216 208 208.8 208 200V184C208 175.2 200.8 168 192 168H168V144C168 135.2 160.8 128 152 128H136C127.2 128 120 135.2 120 144V168z"/>
</>],
['thin',<>
	<path d="M488 0C518.9 0 544 25.07 544 56V456C544 486.9 518.9 512 488 512H352C347.6 512 344 508.4 344 504C344 499.6 347.6 496 352 496H488C510.1 496 528 478.1 528 456V400H360C355.6 400 352 396.4 352 392C352 387.6 355.6 384 360 384H528V304H360C355.6 304 352 300.4 352 296C352 291.6 355.6 288 360 288H528V56C528 33.91 510.1 16 488 16H312C289.9 16 272 33.91 272 56V64C272 68.42 268.4 72 264 72C259.6 72 256 68.42 256 64V56C256 25.07 281.1 0 312 0H488zM184 168C197.3 168 208 178.7 208 192V208H224C237.3 208 248 218.7 248 232V248C248 261.3 237.3 272 224 272H208V288C208 301.3 197.3 312 184 312H168C154.7 312 144 301.3 144 288V272H128C114.7 272 104 261.3 104 248V232C104 218.7 114.7 208 128 208H144V192C144 178.7 154.7 168 168 168H184zM160 224H128C123.6 224 120 227.6 120 232V248C120 252.4 123.6 256 128 256H160V288C160 292.4 163.6 296 168 296H184C188.4 296 192 292.4 192 288V256H224C228.4 256 232 252.4 232 248V232C232 227.6 228.4 224 224 224H192V192C192 187.6 188.4 184 184 184H168C163.6 184 160 187.6 160 192V224zM32 160C32 124.7 60.65 96 96 96H256C291.3 96 320 124.7 320 160V448C320 483.3 291.3 512 256 512H96C60.65 512 32 483.3 32 448V160zM48 160V352H304V160C304 133.5 282.5 112 256 112H96C69.49 112 48 133.5 48 160zM48 416H304V368H48V416zM48 448C48 474.5 69.49 496 96 496H256C282.5 496 304 474.5 304 448V432H48V448zM376 80C376 66.75 386.7 56 400 56H416C429.3 56 440 66.75 440 80V96H456C469.3 96 480 106.7 480 120V136C480 149.3 469.3 160 456 160H440V176C440 189.3 429.3 200 416 200H400C386.7 200 376 189.3 376 176V160H360C346.7 160 336 149.3 336 136V120C336 106.7 346.7 96 360 96H376V80zM400 72C395.6 72 392 75.58 392 80V112H360C355.6 112 352 115.6 352 120V136C352 140.4 355.6 144 360 144H392V176C392 180.4 395.6 184 400 184H416C420.4 184 424 180.4 424 176V144H456C460.4 144 464 140.4 464 136V120C464 115.6 460.4 112 456 112H424V80C424 75.58 420.4 72 416 72H400z"/>
</>],

]);

const Hospitals: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Hospitals.displayName = "Hospitals";

export default Hospitals;