
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M384 320V272C384 227.8 419.8 192 464 192C508.2 192 544 227.8 544 272V320C561.7 320 576 334.3 576 352V480C576 497.7 561.7 512 544 512H384C366.3 512 352 497.7 352 480V352C352 334.3 366.3 320 384 320V320zM432 320H496V272C496 254.3 481.7 240 464 240C446.3 240 432 254.3 432 272V320z"/><path className="fa-secondary" d="M197.8 128H292.9L304.4 58.74C307.3 41.31 323.8 29.53 341.3 32.44C358.7 35.35 370.5 51.83 367.6 69.27L357.8 128H416C433.7 128 448 142.3 448 160C448 160.4 447.1 160.8 447.1 161.1C423.9 164.6 402.2 175.7 385.6 192H347.1L324.3 328.9C321.5 336.1 320 343.9 320 352V354.7L303.6 453.3C300.7 470.7 284.2 482.5 266.7 479.6C249.3 476.7 237.5 460.2 240.4 442.7L250.2 384H155.1L143.6 453.3C140.7 470.7 124.2 482.5 106.7 479.6C89.31 476.7 77.53 460.2 80.44 442.7L90.23 384H32C14.33 384 0 369.7 0 352C0 334.3 14.33 320 32 320H100.9L122.2 192H64C46.33 192 32 177.7 32 160C32 142.3 46.33 128 64 128H132.9L144.4 58.74C147.3 41.31 163.8 29.53 181.3 32.44C198.7 35.35 210.5 51.83 207.6 69.27L197.8 128zM260.9 320L282.2 192H187.1L165.8 320H260.9z"/>
</>],
['light',<>
	<path d="M195.6 32.42C204.2 34.41 209.6 42.1 207.6 51.61L186.3 144H313.4L336.4 44.41C338.4 35.8 346.1 30.43 355.6 32.42C364.2 34.41 369.6 42.1 367.6 51.61L346.3 144H432C440.8 144 448 151.2 448 160C448 160.4 447.1 160.8 447.1 161.2C432.9 163.3 418.8 168.5 406.3 176H338.9L271.6 467.6C269.6 476.2 261 481.6 252.4 479.6C243.8 477.6 238.4 469 240.4 460.4L261.7 368H134.6L111.6 467.6C109.6 476.2 101 481.6 92.4 479.6C83.79 477.6 78.42 469 80.41 460.4L101.7 368H16C7.164 368 0 360.8 0 352C0 343.2 7.164 336 16 336H109.1L146 176H48C39.16 176 32 168.8 32 160C32 151.2 39.16 144 48 144H153.4L176.4 44.41C178.4 35.8 186.1 30.43 195.6 32.42H195.6zM178.9 176L141.1 336H269.1L306 176H178.9zM464 192C508.2 192 544 227.8 544 272V320C561.7 320 576 334.3 576 352V480C576 497.7 561.7 512 544 512H384C366.3 512 352 497.7 352 480V352C352 334.3 366.3 320 384 320V272C384 227.8 419.8 192 464 192V192zM464 224C437.5 224 416 245.5 416 272V320H512V272C512 245.5 490.5 224 464 224V224zM384 352V480H544V352H384z"/>
</>],
['regular',<>
	<path d="M188.7 32.47C201.7 35.07 210.1 47.71 207.5 60.71L192.5 136H303.5L320.5 51.3C323.1 38.3 335.7 29.87 348.7 32.47C361.7 35.07 370.1 47.71 367.5 60.71L352.5 136H424C437.3 136 448 146.8 448 160C448 160.4 447.1 160.8 447.1 161.1C428 163.1 409.8 172.1 394.7 184H342.9L287.5 460.7C284.9 473.7 272.3 482.1 259.3 479.5C246.3 476.9 237.9 464.3 240.5 451.3L255.5 376L144.5 376L127.5 460.7C124.9 473.7 112.3 482.1 99.29 479.5C86.3 476.9 77.87 464.3 80.47 451.3L95.53 376L23.1 375.1C10.74 375.1-.0003 365.3 0 351.1C.0003 338.7 10.75 327.1 24 327.1L105.1 328L133.9 184H56C42.75 184 32 173.3 32 160C32 146.8 42.75 136 56 136H143.5L160.5 51.3C163.1 38.3 175.7 29.87 188.7 32.47L188.7 32.47zM182.9 184L154.1 328L265.1 328L293.9 184H182.9zM464 192C508.2 192 544 227.8 544 272V320C561.7 320 576 334.3 576 352V480C576 497.7 561.7 512 544 512H384C366.3 512 352 497.7 352 480V352C352 334.3 366.3 320 384 320V272C384 227.8 419.8 192 464 192V192zM464 240C446.3 240 432 254.3 432 272V320H496V272C496 254.3 481.7 240 464 240z"/>
</>],
['solid',<>
	<path d="M181.3 32.44C198.7 35.35 210.5 51.83 207.6 69.27L197.8 128H292.9L304.4 58.74C307.3 41.31 323.8 29.53 341.3 32.44C358.7 35.35 370.5 51.83 367.6 69.27L357.8 128H416C433.7 128 448 142.3 448 160C448 160.4 447.1 160.8 447.1 161.1C423.9 164.6 402.2 175.7 385.6 192H347.1L324.3 328.9C321.5 336.1 320 343.9 320 352V354.7L303.6 453.3C300.7 470.7 284.2 482.5 266.7 479.6C249.3 476.7 237.5 460.2 240.4 442.7L250.2 384H155.1L143.6 453.3C140.7 470.7 124.2 482.5 106.7 479.6C89.31 476.7 77.53 460.2 80.44 442.7L90.23 384H32C14.33 384 0 369.7 0 352C0 334.3 14.33 320 32 320H100.9L122.2 192H64C46.33 192 32 177.7 32 160C32 142.3 46.33 128 64 128H132.9L144.4 58.74C147.3 41.31 163.8 29.53 181.3 32.44H181.3zM187.1 192L165.8 320H260.9L282.2 192H187.1zM464 192C508.2 192 544 227.8 544 272V320C561.7 320 576 334.3 576 352V480C576 497.7 561.7 512 544 512H384C366.3 512 352 497.7 352 480V352C352 334.3 366.3 320 384 320V272C384 227.8 419.8 192 464 192V192zM464 240C446.3 240 432 254.3 432 272V320H496V272C496 254.3 481.7 240 464 240z"/>
</>],
['thin',<>
	<path d="M177.5 32.14C181.8 32.95 184.7 37.12 183.9 41.47L163.4 152H315.1L336.1 38.55C336.9 34.21 341.1 31.34 345.5 32.14C349.8 32.95 352.7 37.12 351.9 41.47L331.4 152H440C444.4 152 448 155.6 448 160C448 160.4 447.1 160.8 447.9 161.2C439 162.4 430.4 164.8 422.4 168H328.4L271.9 473.5C271.1 477.8 266.9 480.7 262.5 479.9C258.2 479.1 255.3 474.9 256.1 470.6L276.6 360L124.9 360L103.9 473.5C103.1 477.8 98.89 480.7 94.54 479.9C90.2 479.1 87.33 474.9 88.13 470.6L108.6 360L8 360C3.582 360 .0003 356.4 0 352C0 347.6 3.581 344 7.1 344L111.6 344L144.2 168H39.1C35.58 168 31.1 164.4 31.1 160C31.1 155.6 35.58 152 39.1 152H147.1L168.1 38.55C168.9 34.21 173.1 31.34 177.5 32.14H177.5zM160.4 168L127.8 344L279.6 344L312.2 168H160.4zM464 192C499.3 192 528 220.7 528 256V320H544C561.7 320 576 334.3 576 352V480C576 497.7 561.7 512 544 512H384C366.3 512 352 497.7 352 480V352C352 334.3 366.3 320 384 320H400V256C400 220.7 428.7 192 464 192zM464 208C437.5 208 416 229.5 416 256V320H512V256C512 229.5 490.5 208 464 208zM368 352V480C368 488.8 375.2 496 384 496H544C552.8 496 560 488.8 560 480V352C560 343.2 552.8 336 544 336H384C375.2 336 368 343.2 368 352z"/>
</>],

]);

const HashtagLock: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HashtagLock.displayName = "HashtagLock";

export default HashtagLock;
