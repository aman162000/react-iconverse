
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M0 168C0 145.9 17.91 128 40 128H104C130.2 128 153.4 140.6 168 160H456C525.3 160 591 182.7 635.2 241.6C641.6 250.1 641.6 261.9 635.2 270.4C591 329.3 525.3 352 456 352H168C153.4 371.4 130.2 384 104 384H40C17.91 384 0 366.1 0 344L0 168zM512 268.4V243.6C512 223.9 496.1 208 476.4 208C473.1 208 472 209.1 472 212.4V299.6C472 302 473.1 304 476.4 304C496.1 304 512 288.1 512 268.4z"/><path className="fa-secondary" d="M96 128H32V80C32 53.49 53.49 32 80 32H96V128zM96 480H80C53.49 480 32 458.5 32 432V384H96V480zM128 480V380.3C144.1 375.3 158.1 365.2 168 352H405.3L245.2 448.1C210.4 468.1 170.6 480 129.1 480H128zM128 131.7V32H129.1C170.6 32 210.4 43.03 245.2 63.92L405.3 160H168C158.1 146.8 144.1 136.7 127.1 131.7H128z"/>
</>],
['light',<>
	<path d="M480 240V272C480 280.8 472.8 288 464 288C455.2 288 448 280.8 448 272V240C448 231.2 455.2 224 464 224C472.8 224 480 231.2 480 240zM129.1 480H80C53.49 480 32 458.5 32 432V384C14.33 384 0 369.7 0 352V160C0 142.3 14.33 128 32 128V80C32 53.49 53.49 32 80 32H129.1C170.6 32 210.4 43.03 245.2 63.92L405.3 160H464C528.7 160 587.5 187.4 628.8 236.3C638.4 247.7 638.4 264.3 628.8 275.7C587.5 324.6 528.7 352 464 352H405.3L245.2 448.1C210.4 468.1 170.6 480 129.1 480V480zM64 384V432C64 440.8 71.16 448 80 448H128V382.4C122.8 383.4 117.5 384 112 384H64zM343.1 352H176.7C176.7 352 176.5 352 176.4 352.2C175.1 352.4 175.4 352.8 174.8 353.5C170.5 358.1 165.5 363.8 160 368V445.6C184.2 441.8 207.6 433.3 228.7 420.6L343.1 352zM112 352C127.3 352 140.9 344.9 149.7 333.7C155.5 326.4 164.9 320 176.7 320H464C518.9 320 568.4 297.1 603.5 256C568.4 214.9 518.9 192 464 192H176.7C164.9 192 155.5 185.6 149.7 178.3C140.9 167.1 127.3 160 112 160H32V240H176C184.8 240 192 247.2 192 256C192 264.8 184.8 272 176 272H32V352H112zM64 128H112C117.5 128 122.8 128.6 128 129.6V64H80C71.16 64 64 71.16 64 80V128zM176.4 159.9C176.5 159.1 176.7 160 176.7 160H343.1L228.7 91.36C207.6 78.65 184.2 70.2 160 66.37V143.1C165.5 148.2 170.5 153 174.8 158.5C175.4 159.2 175.1 159.6 176.4 159.9z"/>
</>],
['regular',<>
	<path d="M480 240V272C480 280.8 472.8 288 464 288C455.2 288 448 280.8 448 272V240C448 231.2 455.2 224 464 224C472.8 224 480 231.2 480 240zM32 384H24C10.75 384 0 373.3 0 360V152C0 138.7 10.75 128 24 128H32V80C32 53.49 53.49 32 80 32H129.1C170.6 32 210.4 43.03 245.2 63.92L405.3 160H456C525.3 160 591 182.7 635.2 241.6C641.6 250.1 641.6 261.9 635.2 270.4C591 329.3 525.3 352 456 352H405.3L245.2 448.1C210.4 468.1 170.6 480 129.1 480H80C53.49 480 32 458.5 32 432V384zM312 352H168C158.1 365.2 144.1 375.3 128 380.3V432H129.1C161.9 432 193.2 423.3 220.5 406.9L312 352zM312 160L220.5 105.1C193.2 88.67 161.9 80 129.1 80H128V131.7C144.1 136.7 158.1 146.8 168 160H312zM48 336H104C116.7 336 127.8 328.6 132.9 317.7C136.9 309.3 145.3 304 154.6 304H456C488.6 304 518.4 298.2 544 285.5V226.5C518.4 213.8 488.6 208 456 208H154.6C145.3 208 136.9 202.7 132.9 194.3C127.8 183.4 116.7 176 104 176H48V336z"/>
</>],
['solid',<>
	<path d="M129.1 480H128V384H352L245.2 448.1C210.4 468.1 170.6 480 129.1 480zM352 128H128V32H129.1C170.6 32 210.4 43.03 245.2 63.92L352 128zM104 128C130.2 128 153.4 140.6 168 160H456C525.3 160 591 182.7 635.2 241.6C641.6 250.1 641.6 261.9 635.2 270.4C591 329.3 525.3 352 456 352H168C153.4 371.4 130.2 384 104 384H96V480H80C53.49 480 32 458.5 32 432V384H40C17.91 384 0 366.1 0 344V168C0 145.9 17.89 128 39.96 128H32V80C32 53.49 53.49 32 80 32H96V128H104zM476.4 208C473.1 208 472 209.1 472 212.4V299.6C472 302 473.1 304 476.4 304C496.1 304 512 288.1 512 268.4V243.6C512 223.9 496.1 208 476.4 208z"/>
</>],
['thin',<>
	<path d="M496 224V288C496 292.4 492.4 296 488 296C483.6 296 480 292.4 480 288V224C480 219.6 483.6 216 488 216C492.4 216 496 219.6 496 224zM405.3 352L245.2 448.1C210.4 468.1 170.6 480 129.1 480H80C53.49 480 32 458.5 32 432V384C14.33 384 0 369.7 0 352V160C0 142.3 14.33 128 32 128V80C32 53.49 53.49 32 80 32H129.1C170.6 32 210.4 43.03 245.2 63.92L405.3 160H456C516.5 160 584.5 191.4 626.4 236.8C636.4 247.7 636.4 264.3 626.4 275.2C584.5 320.6 516.5 352 456 352L405.3 352zM374.2 352H189.3C183.8 352 178.1 355.1 173.2 360.5C163.5 371.2 150.6 378.9 135.1 382.2V463.9C171.6 462.9 206.4 452.7 236.1 434.4L374.2 352zM47.1 432C47.1 449.7 62.33 464 79.1 464H119.1V384H47.1V432zM374.2 160L236.1 77.64C206.4 59.28 171.6 49.12 135.1 48.09V129.8C150.6 133.1 163.5 140.8 173.2 151.5C178.1 156.9 183.8 160 189.3 160L374.2 160zM47.1 80V128H119.1V48H79.1C62.33 48 47.1 62.33 47.1 80zM15.1 248H183.1C188.4 248 191.1 251.6 191.1 256C191.1 260.4 188.4 264 183.1 264H15.1V352C15.1 360.8 23.16 368 31.1 368H119.1C136.4 368 151.1 360.1 161.4 349.8C167.1 342.5 177.6 336 189.3 336H456C511.7 336 575.6 306.7 614.6 264.4C618.1 259.6 618.1 252.4 614.6 247.6C575.6 205.3 511.7 176 456 176H189.3C177.6 176 167.1 169.5 161.4 162.3C151.1 151 136.4 144 119.1 144H31.1C23.16 144 15.1 151.2 15.1 160V248z"/>
</>],

]);

const ShuttleSpace: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ShuttleSpace.displayName = "ShuttleSpace";

export default ShuttleSpace;