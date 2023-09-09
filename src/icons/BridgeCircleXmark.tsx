
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368zM532.7 308.7L496 345.4L459.3 308.7C453.1 302.4 442.9 302.4 436.7 308.7C430.4 314.9 430.4 325.1 436.7 331.3L473.4 368L436.7 404.7C430.4 410.9 430.4 421.1 436.7 427.3C442.9 433.6 453.1 433.6 459.3 427.3L496 390.6L532.7 427.3C538.9 433.6 549.1 433.6 555.3 427.3C561.6 421.1 561.6 410.9 555.3 404.7L518.6 368L555.3 331.3C561.6 325.1 561.6 314.9 555.3 308.7C549.1 302.4 538.9 302.4 532.7 308.7z"/><path className="fa-secondary" d="M32 64C32 46.33 46.33 32 64 32H576C593.7 32 608 46.33 608 64C608 81.67 593.7 96 576 96H536V160H608V232.2C577.6 207.1 538.5 192 496 192C426.9 192 367.1 231.8 338.3 289.7C332.4 288.6 326.3 288 320 288C266.1 288 224 330.1 224 384V448C224 465.7 209.7 480 192 480H160C142.3 480 128 465.7 128 448V384C128 330.1 85.02 288 32 288V160H104V96H64C46.33 96 32 81.67 32 64V64zM408 160H488V96H408V160zM360 160V96H280V160H360zM152 160H232V96H152V160z"/>
</>],
['light',<>
	<path d="M592 32C600.8 32 608 39.16 608 48C608 56.84 600.8 64 592 64H528V128H592C600.8 128 608 135.2 608 144C608 152.8 600.8 160 592 160H48C39.16 160 32 152.8 32 144C32 135.2 39.16 128 48 128H112V64H48C39.16 64 32 56.84 32 48C32 39.16 39.16 32 48 32H592zM496 64H400V128H496V64zM272 64V128H368V64H272zM240 64H144V128H240V64zM64 240C117 240 160 282.1 160 336V432C160 440.8 167.2 448 176 448H208C216.8 448 224 440.8 224 432V336C224 282.1 266.1 240 320 240C336.1 240 351.2 243.1 364.6 250.9C357.3 259 350.9 267.8 345.2 277.2C337.5 273.8 328.1 272 320 272C284.7 272 256 300.7 256 336V432C256 458.5 234.5 480 208 480H176C149.5 480 128 458.5 128 432V336C128 300.7 99.35 272 64 272H48C39.16 272 32 264.8 32 256C32 247.2 39.16 240 48 240H64zM518.6 368L555.3 404.7C561.6 410.9 561.6 421.1 555.3 427.3C549.1 433.6 538.9 433.6 532.7 427.3L496 390.6L459.3 427.3C453.1 433.6 442.9 433.6 436.7 427.3C430.4 421.1 430.4 410.9 436.7 404.7L473.4 368L436.7 331.3C430.4 325.1 430.4 314.9 436.7 308.7C442.9 302.4 453.1 302.4 459.3 308.7L496 345.4L532.7 308.7C538.9 302.4 549.1 302.4 555.3 308.7C561.6 314.9 561.6 325.1 555.3 331.3L518.6 368zM640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368zM496 256C434.1 256 384 306.1 384 368C384 429.9 434.1 480 496 480C557.9 480 608 429.9 608 368C608 306.1 557.9 256 496 256z"/>
</>],
['regular',<>
	<path d="M576 32C589.3 32 600 42.75 600 56C600 69.25 589.3 80 576 80H536V144H584C597.3 144 608 154.7 608 168C608 181.3 597.3 192 584 192H56C42.75 192 32 181.3 32 168C32 154.7 42.75 144 56 144H104V80H56C42.75 80 32 69.25 32 56C32 42.75 42.75 32 56 32H576zM488 80H408V144H488V80zM280 80V144H360V80H280zM232 80H152V144H232V80zM336 288H304C273.1 288 248 313.1 248 344V440C248 462.1 230.1 480 208 480H144C121.9 480 104 462.1 104 440V336C104 309.5 82.51 288 56 288C42.75 288 32 277.3 32 264C32 250.7 42.75 240 56 240C109 240 152 282.1 152 336V432H200V344C200 286.6 246.6 240 304 240H336C347.8 240 359 241.9 369.6 245.5C357.4 258.1 347.2 272.4 339.1 288.1C338.1 288 337.1 287.1 336 287.1V288zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM555.3 331.3C561.6 325.1 561.6 314.9 555.3 308.7C549.1 302.4 538.9 302.4 532.7 308.7L496 345.4L459.3 308.7C453.1 302.4 442.9 302.4 436.7 308.7C430.4 314.9 430.4 325.1 436.7 331.3L473.4 368L436.7 404.7C430.4 410.9 430.4 421.1 436.7 427.3C442.9 433.6 453.1 433.6 459.3 427.3L496 390.6L532.7 427.3C538.9 433.6 549.1 433.6 555.3 427.3C561.6 421.1 561.6 410.9 555.3 404.7L518.6 368L555.3 331.3z"/>
</>],
['solid',<>
	<path d="M576 32C593.7 32 608 46.33 608 64C608 81.67 593.7 96 576 96H536V160H608V232.2C577.6 207.1 538.5 192 496 192C426.9 192 367.1 231.8 338.3 289.7C332.4 288.6 326.3 288 320 288C266.1 288 224 330.1 224 384V448C224 465.7 209.7 480 192 480H160C142.3 480 128 465.7 128 448V384C128 330.1 85.02 288 32 288V160H104V96H64C46.33 96 32 81.67 32 64C32 46.33 46.33 32 64 32H576zM488 96H408V160H488V96zM280 96V160H360V96H280zM232 96H152V160H232V96zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM555.3 331.3C561.6 325.1 561.6 314.9 555.3 308.7C549.1 302.4 538.9 302.4 532.7 308.7L496 345.4L459.3 308.7C453.1 302.4 442.9 302.4 436.7 308.7C430.4 314.9 430.4 325.1 436.7 331.3L473.4 368L436.7 404.7C430.4 410.9 430.4 421.1 436.7 427.3C442.9 433.6 453.1 433.6 459.3 427.3L496 390.6L532.7 427.3C538.9 433.6 549.1 433.6 555.3 427.3C561.6 421.1 561.6 410.9 555.3 404.7L518.6 368L555.3 331.3z"/>
</>],
['thin',<>
	<path d="M600 32C604.4 32 608 35.58 608 40C608 44.42 604.4 48 600 48H520V144H600C604.4 144 608 147.6 608 152C608 156.4 604.4 160 600 160H40C35.58 160 32 156.4 32 152C32 147.6 35.58 144 40 144H120V48H40C35.58 48 32 44.42 32 40C32 35.58 35.58 32 40 32H600zM504 48H392V144H504V48zM264 48V144H376V48H264zM248 48H136V144H248V48zM64 256C112.6 256 152 295.4 152 344V440C152 453.3 162.7 464 176 464H208C221.3 464 232 453.3 232 440V344C232 295.4 271.4 256 320 256C332.3 256 344 258.5 354.7 263.1C351.4 267.5 348.4 271.1 345.5 276.7C337.6 273.6 328.1 272 320 272C280.2 272 248 304.2 248 344V440C248 462.1 230.1 480 208 480H176C153.9 480 136 462.1 136 440V344C136 304.2 103.8 272 64 272H40C35.58 272 32 268.4 32 264C32 259.6 35.58 256 40 256L64 256zM507.3 368L557.7 418.3C560.8 421.5 560.8 426.5 557.7 429.7C554.5 432.8 549.5 432.8 546.3 429.7L496 379.3L445.7 429.7C442.5 432.8 437.5 432.8 434.3 429.7C431.2 426.5 431.2 421.5 434.3 418.3L484.7 368L434.3 317.7C431.2 314.5 431.2 309.5 434.3 306.3C437.5 303.2 442.5 303.2 445.7 306.3L496 356.7L546.3 306.3C549.5 303.2 554.5 303.2 557.7 306.3C560.8 309.5 560.8 314.5 557.7 317.7L507.3 368zM640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368zM496 240C425.3 240 368 297.3 368 368C368 438.7 425.3 496 496 496C566.7 496 624 438.7 624 368C624 297.3 566.7 240 496 240z"/>
</>],

]);

const BridgeCircleXmark: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BridgeCircleXmark.displayName = "BridgeCircleXmark";

export default BridgeCircleXmark;