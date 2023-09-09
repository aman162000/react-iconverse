
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M224 96C206.3 96 192 110.3 192 128V160C192 177.7 177.7 192 160 192C142.3 192 128 177.7 128 160V128C128 74.98 170.1 32 224 32C277 32 320 74.98 320 128V135.8C320 156.6 318.8 177.4 316.4 198.1L438.8 161.3C450.2 157.9 462.6 161.1 470.1 169.7C479.3 178.3 482.1 190.8 478.4 202.1L460.4 255.1H544C561.7 255.1 576 270.3 576 287.1C576 305.7 561.7 319.1 544 319.1H416C405.7 319.1 396.1 315.1 390 306.7C384 298.4 382.4 287.6 385.6 277.9L398.1 240.4L303.7 268.7C291.9 321.5 272.2 372.2 245.3 419.2L231.4 443.5C218.5 466.1 194.5 480 168.5 480C128.5 480 96 447.5 96 407.5V335.6C96 293.2 123.8 255.8 164.4 243.7L248.9 218.3C253.6 191.1 256 163.5 256 135.8V128C256 110.3 241.7 96 224 96L224 96zM231.8 290.3L182.8 304.1C169.3 309 160 321.5 160 335.6V407.5C160 412.2 163.8 416 168.5 416C171.5 416 174.4 414.4 175.9 411.7L189.8 387.4C207.3 356.6 221.4 324.1 231.8 290.3V290.3z"/><path className="fa-secondary" d="M64 407.5C64 410.4 64.11 413.2 64.34 416H24C10.75 416 0 405.3 0 392C0 378.7 10.75 368 24 368H64V407.5zM305.9 368H616C629.3 368 640 378.7 640 392C640 405.3 629.3 416 616 416H283.5C291.7 400.3 299.2 384.3 305.9 368z"/>
</>],
['light',<>
	<path d="M160 176C160 184.8 152.8 192 144 192C135.2 192 128 184.8 128 176V128C128 74.98 170.1 32 224 32C277 32 320 74.98 320 128V131.4C320 154.4 318.3 177.4 314.8 200.1L459.8 160.6C465.9 158.9 472.4 160.1 476.4 165.9C480.4 170.7 481.1 177.5 478.3 183.2L425.9 288H560C568.8 288 576 295.2 576 304C576 312.8 568.8 320 560 320H400C394.5 320 389.3 317.1 386.4 312.4C383.5 307.7 383.2 301.8 385.7 296.8L433.7 200.9L308.2 235.1C306.7 241.6 304.1 248.2 303.2 254.7L296 280.4C284.7 321.4 268.4 360.9 247.5 397.1L220.4 446.1C208.6 467 186.5 480 162.5 480C125.8 480 95.1 450.2 95.1 413.5V320.9C95.1 284.8 120.1 253.2 154.9 243.7L280.8 209.4C285.6 183.7 287.1 157.6 287.1 131.4V128C287.1 92.65 259.3 64 223.1 64C188.7 64 159.1 92.65 159.1 128L160 176zM128 320.9V413.5C128 432.6 143.4 448 162.5 448C174.9 448 186.4 441.3 192.5 430.4L219.6 382.3C239.2 347.5 254.5 310.4 265.2 271.9L272.4 246.1L272.7 244.7L163.4 274.6C142.5 280.3 128 299.2 128 320.9L128 320.9zM48 384C56.84 384 64 391.2 64 400C64 408.8 56.84 416 48 416H16C7.164 416 0 408.8 0 400C0 391.2 7.164 384 16 384H48zM624 384C632.8 384 640 391.2 640 400C640 408.8 632.8 416 624 416H336C327.2 416 320 408.8 320 400C320 391.2 327.2 384 336 384H624z"/>
</>],
['regular',<>
	<path d="M176 168C176 181.3 165.3 192 152 192C138.7 192 128 181.3 128 168V128C128 74.98 170.1 32 224 32C277 32 320 74.98 320 128V135.9C320 158.1 318.6 180.3 315.9 202.3L448.9 161.1C457.6 158.4 467 160.8 473.3 167.4C479.6 173.1 481.7 183.5 478.6 192.1L450.1 272H552C565.3 272 576 282.7 576 296C576 309.3 565.3 320 552 320H416C408.2 320 400.9 316.2 396.4 309.8C391.9 303.4 390.8 295.3 393.4 287.9L417.3 221.1L306.5 255.4L305.5 260.1C292.1 316.3 271.5 370.2 241.8 419.6L225.1 446C213.3 467.1 190.6 480 165.1 480C127.3 480 96 448.7 96 410V335.2C96 296.6 121.1 262.5 157.1 251.1L265 217.1C269.7 190.9 272 163.4 272 135.9V127.1C272 101.5 250.5 79.1 224 79.1C197.5 79.1 176 101.5 176 127.1L176 168zM144 335.2V410C144 422.2 153.8 432 165.1 432C173.7 432 180.8 427.1 184.8 421.3L200.7 394.9C223.7 356.5 241.4 315.1 253.1 271.9L172.2 296.1C155.4 302.2 144 317.7 144 335.2zM64 410C64 412 64.06 414 64.17 416H24C10.75 416 0 405.3 0 392C0 378.7 10.75 368 24 368H64V410zM280.8 416C289.3 400.4 297.1 384.3 304.1 368H616C629.3 368 640 378.7 640 392C640 405.3 629.3 416 616 416H280.8z"/>
</>],
['solid',<>
	<path d="M192 160C192 177.7 177.7 192 160 192C142.3 192 128 177.7 128 160V128C128 74.98 170.1 32 224 32C277 32 320 74.98 320 128V135.8C320 156.6 318.8 177.4 316.4 198.1L438.8 161.3C450.2 157.9 462.6 161.1 470.1 169.7C479.3 178.3 482.1 190.8 478.4 202.1L460.4 255.1H544C561.7 255.1 576 270.3 576 287.1C576 305.7 561.7 319.1 544 319.1H416C405.7 319.1 396.1 315.1 390 306.7C384 298.4 382.4 287.6 385.6 277.9L398.1 240.4L303.7 268.7C291.9 321.5 272.2 372.2 245.3 419.2L231.4 443.5C218.5 466.1 194.5 480 168.5 480C128.5 480 95.1 447.5 95.1 407.5V335.6C95.1 293.2 123.8 255.8 164.4 243.7L248.8 218.3C253.6 191.1 255.1 163.5 255.1 135.8V128C255.1 110.3 241.7 96 223.1 96C206.3 96 191.1 110.3 191.1 128L192 160zM160 335.6V407.5C160 412.2 163.8 416 168.5 416C171.5 416 174.4 414.4 175.9 411.7L189.8 387.4C207.3 356.6 221.4 324.1 231.8 290.3L182.8 304.1C169.3 309 160 321.5 160 335.6V335.6zM24 368H64V407.5C64 410.4 64.11 413.2 64.34 416H24C10.75 416 0 405.3 0 392C0 378.7 10.75 368 24 368zM616 416H283.5C291.7 400.3 299.2 384.3 305.9 368H616C629.3 368 640 378.7 640 392C640 405.3 629.3 416 616 416z"/>
</>],
['thin',<>
	<path d="M144 160C144 164.4 140.4 168 136 168C131.6 168 128 164.4 128 160V120C128 71.4 167.4 32 216 32C264.6 32 304 71.4 304 120V135.9C304 160.1 302.2 186.1 298.6 210.9L469.7 160.3C472.9 159.4 476.4 160.5 478.4 163.2C480.4 165.8 480.5 169.4 478.8 172.2L406.4 287.1H568C572.4 287.1 576 291.6 576 295.1C576 300.4 572.4 303.1 568 303.1H392C389.1 303.1 386.4 302.4 385 299.9C383.6 297.3 383.7 294.2 385.2 291.8L454 181.6L295.7 228.4C294.5 235.2 293.1 241.9 291.6 248.5L286.8 270.3C276.7 315.8 260.5 359.6 238.7 400.8L211.7 451.8C202.6 469.2 184.6 480 164.9 480C135.7 480 112 456.3 112 427.1V319.8C112 287.9 133 259.8 163.6 250.8L281.6 215.9C285.9 189.5 288 162.7 288 135.9V120C288 80.24 255.8 48 216 48C176.2 48 144 80.24 144 120L144 160zM128 319.8V427.1C128 447.5 144.5 464 164.9 464C178.6 464 191.2 456.4 197.6 444.3L224.6 393.3C245.7 353.4 261.4 310.9 271.2 266.8L276 245.1C276.9 241.2 277.7 237.4 278.4 233.5L168.1 266.1C144.3 273.2 128 295 128 319.8V319.8zM56 368C60.42 368 64 371.6 64 376C64 380.4 60.42 384 56 384H8C3.582 384 0 380.4 0 376C0 371.6 3.582 368 8 368H56zM632 368C636.4 368 640 371.6 640 376C640 380.4 636.4 384 632 384H328C323.6 384 320 380.4 320 376C320 371.6 323.6 368 328 368H632z"/>
</>],

]);

const Signature: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Signature.displayName = "Signature";

export default Signature;