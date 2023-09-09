
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M544 64C561.7 64 576 78.33 576 96V131.6C576 147.3 563.3 160 547.6 160C510.2 160 480 190.2 480 227.6V352.5C467.1 352.5 454.2 356.3 443.2 364.1C425.2 376.5 403 384.5 384 384.5C384 384.5 384 384.5 384 384.5C384 384.3 384 384.2 384 384V256C384 202.1 341 160 288 160C234.1 160 192 202.1 192 256V384C192 384.2 191.1 384.3 191.1 384.5C172.1 384.4 150.8 376.5 132.9 364.1C121.8 356.3 108.9 352.4 96 352.5V227.6C96 190.2 65.75 160 28.44 160C12.74 160 0 147.3 0 131.6V96C0 78.33 14.33 64 32 64H544z"/><path className="fa-secondary" d="M269.5 389.9C280.6 382 295.4 382 306.5 389.9C328.1 405.4 356.5 416 384 416C410.9 416 439.4 405.2 461.4 389.9L461.5 389.9C473.4 381.4 489.5 382.1 500.7 391.6C515 403.5 533.2 412.6 551.3 416.8C568.5 420.8 579.2 438.1 575.2 455.3C571.2 472.5 553.1 483.2 536.7 479.2C512.2 473.4 491.9 462.6 478.5 454.2C449.5 469.7 417 480 384 480C352.1 480 323.4 470.1 303.6 461.1C297.7 458.5 292.5 455.8 288 453.4C283.5 455.8 278.3 458.5 272.4 461.1C252.6 470.1 223.9 480 192 480C158.1 480 126.5 469.7 97.5 454.2C84.12 462.6 63.79 473.4 39.27 479.2C22.06 483.2 4.853 472.5 .8422 455.3C-3.169 438.1 7.532 420.8 24.74 416.8C42.84 412.6 60.96 403.5 75.31 391.6C86.46 382.1 102.6 381.4 114.5 389.9L114.6 389.9C136.7 405.2 165.1 416 192 416C219.5 416 247 405.4 269.5 389.9H269.5z"/>
</>],
['light',<>
	<path d="M544 96H32V176.1C85.34 177.9 128 221.8 128 275.6V361C118.1 355.3 107 352.4 96 352.5V275.6C96 238.2 65.75 208 28.44 208C12.74 208 0 195.3 0 179.6V96C0 78.33 14.33 64 32 64H544C561.7 64 576 78.33 576 96V179.6C576 195.3 563.3 208 547.6 208C510.2 208 480 238.2 480 275.6V352.5C468.1 352.5 457.9 355.3 448 361V275.6C448 221.8 490.7 177.9 544 176.1V96zM192 384.5V272C192 218.1 234.1 176 288 176C341 176 384 218.1 384 272V384.5C373.6 384.5 362.7 382.3 352 378.3V272C352 236.7 323.3 208 288 208C252.7 208 224 236.7 224 272V378.4C213.7 382.2 202.9 384.5 192 384.5V384.5zM250.1 426.8C259.9 420.1 268.2 412.8 276.1 404.9C282.6 398.4 293.3 398.4 299.8 404.9C307.8 412.8 315.1 420.1 325.8 426.8C342.3 438 363.1 447.1 383.1 447.1C404.9 447.1 425.6 438 442.2 426.8C451.9 420.1 460.2 412.8 468.1 404.9C474.6 398.4 485.3 398.4 491.8 404.9C499.8 412.8 507.1 420.1 517.8 426.8C530.6 435.5 545.9 443.4 561.9 446.6C569.6 448.1 576 454.4 576 462.2C576 472 567.1 480.1 558.3 478.4C535.2 474.5 514.7 463.4 499.8 453.2C491.8 447.8 485.1 442.4 479.1 437.1C474.8 442.4 468.1 447.8 460.2 453.2C441.5 465.9 414.3 479.1 383.1 479.1C353.7 479.1 326.4 465.9 307.8 453.2C299.8 447.8 293.1 442.4 287.1 437.1C282.8 442.4 276.1 447.8 268.2 453.2C249.5 465.9 222.3 479.1 191.1 479.1C161.7 479.1 134.4 465.9 115.8 453.2C107.8 447.8 101.1 442.4 95.96 437.1C90.82 442.4 84.12 447.8 76.19 453.2C61.25 463.4 40.81 474.5 17.69 478.4C8.016 480.1 .0003 472 .0003 462.2C.0003 454.4 6.421 448.1 14.13 446.6C30.07 443.4 45.38 435.5 58.16 426.8C67.94 420.1 76.16 412.8 84.07 404.9C90.64 398.4 101.3 398.4 107.8 404.9C115.8 412.8 124.1 420.2 133.8 426.8C150.3 438 171.1 447.1 191.1 447.1C212.9 447.1 233.6 438 250.1 426.8H250.1z"/>
</>],
['regular',<>
	<path d="M48 112V162.8C93.88 173.8 128 215.1 128 264.3V361C113.2 352.5 95.96 350.4 80 354.5V264.3C80 233.2 54.8 208 23.7 208C10.61 208 0 197.4 0 184.3V96C0 78.33 14.33 64 32 64H544C561.7 64 576 78.33 576 96V184.3C576 197.4 565.4 208 552.3 208C521.2 208 496 233.2 496 264.3V354.5C480 350.4 462.8 352.5 448 361V264.3C448 215.1 482.1 173.8 528 162.8V112L48 112zM192 384.5C186.9 384.5 181.5 383.9 176 382.8V272C176 210.1 226.1 160 288 160C349.9 160 400 210.1 400 272V382.8C394.5 383.9 389.2 384.5 384 384.5C373.6 384.5 362.7 382.3 352 378.3V272C352 236.7 323.3 208 288 208C252.7 208 224 236.7 224 272V378.4C213.7 382.2 202.9 384.5 192 384.5zM191.1 432C220.8 432 250.5 416.7 272 398.1C281.1 389.1 294.8 389.1 303.1 398.1C325.5 416.7 355.1 432 383.1 432C412.8 432 442.5 416.7 464 398.1C473.1 389.1 486.8 389.1 495.9 398.1C512.9 413.1 535.2 424.9 557.2 429.8C570.1 432.7 578.3 445.5 575.4 458.5C572.5 471.4 559.6 479.5 546.7 476.6C518 470.2 494.4 456.2 479.1 446.2C451.9 465.7 418.6 480 383.1 480C349.4 480 316.1 465.7 287.1 446.2C259.9 465.7 226.6 480 191.1 480C157.4 480 124.1 465.7 95.98 446.2C81.61 456.2 57.99 470.2 29.3 476.6C16.37 479.5 3.535 471.4 .6333 458.5C-2.268 445.5 5.865 432.7 18.8 429.8C41 424.8 62.76 412.1 79.1 398.1C89.09 389.1 102.8 389.1 111.9 398.1C133.5 416.7 163.1 432 191.1 432L191.1 432z"/>
</>],
['solid',<>
	<path d="M.0003 96C.0003 78.33 14.33 64 32 64H544C561.7 64 576 78.33 576 96V131.6C576 147.3 563.3 160 547.6 160C510.2 160 480 190.2 480 227.6V352.5C467.1 352.5 454.2 356.3 443.2 364.1C425.2 376.5 403 384.5 384 384.5L384 384V256C384 202.1 341 160 288 160C234.1 160 192 202.1 192 256V384L191.1 384.5C172.1 384.4 150.8 376.5 132.9 364.1C121.8 356.3 108.9 352.4 96 352.5V227.6C96 190.2 65.75 160 28.44 160C12.74 160 0 147.3 0 131.6L.0003 96zM384 416C410.9 416 439.4 405.2 461.4 389.9L461.5 389.9C473.4 381.4 489.5 382.1 500.7 391.6C515.1 403.5 533.2 412.6 551.3 416.8C568.5 420.8 579.2 438.1 575.2 455.3C571.2 472.5 553.1 483.2 536.7 479.2C512.2 473.4 491.9 462.6 478.5 454.2C449.5 469.7 417 480 384 480C352.1 480 323.4 470.1 303.6 461.1C297.7 458.5 292.5 455.8 288 453.4C283.5 455.8 278.3 458.5 272.4 461.1C252.6 470.1 223.9 480 192 480C158.1 480 126.5 469.7 97.5 454.2C84.13 462.6 63.79 473.4 39.27 479.2C22.06 483.2 4.854 472.5 .8429 455.3C-3.168 438.1 7.533 420.8 24.74 416.8C42.84 412.6 60.96 403.5 75.31 391.6C86.46 382.1 102.6 381.4 114.5 389.9L114.6 389.9C136.7 405.2 165.1 416 192 416C219.5 416 247 405.4 269.5 389.9C280.6 382 295.4 382 306.5 389.9C328.1 405.4 356.5 416 384 416H384z"/>
</>],
['thin',<>
	<path d="M544 80H32C23.16 80 16 87.16 16 96V163.6C16 170.4 21.57 176 28.44 176C74.59 176 112 213.4 112 259.6V354.5C106.8 353.1 101.4 352.4 96 352.5V259.6C96 222.2 65.75 192 28.44 192C12.74 192 .0003 179.3 .0003 163.6V96C.0003 78.33 14.33 64 32 64H544C561.7 64 576 78.33 576 96V163.6C576 179.3 563.3 192 547.6 192C510.2 192 480 222.2 480 259.6V352.5C474.6 352.5 469.3 353.1 464 354.5V259.6C464 213.4 501.4 176 547.6 176C554.4 176 560 170.4 560 163.6V96C560 87.16 552.8 80 544 80V80zM192 384.5V272C192 218.1 234.1 176 288 176C341 176 384 218.1 384 272V384.5C378.8 384.5 373.4 383.9 368 382.8V272C368 227.8 332.2 192 288 192C243.8 192 208 227.8 208 272V382.9C202.7 383.9 197.4 384.5 192 384.5V384.5zM294.6 403.4C302.6 414.6 312.1 424.9 322.2 434.1C339.5 449.8 361.5 464 384 464C406.5 464 428.6 449.8 445.8 434.1C455.1 424.9 465.5 414.6 473.5 403.4C474.1 401.3 477.4 400 480 400C482.6 400 485.1 401.3 486.6 403.4C493.9 413.7 502.5 423 511.6 431.7C527.3 446.5 547.7 460.9 569 463.6C573.4 464.1 576.5 468.1 575.9 472.5C575.4 476.9 571.4 479.1 567 479.4C540.5 476.1 516.1 458.7 500.6 443.3C491.8 434.1 484.7 426.9 480 421.1C474.8 427.5 466.8 436.7 456.6 445.9C438.7 462.2 412.7 480 384 480C355.3 480 329.4 462.2 311.4 445.9C301.3 436.7 293.2 427.5 288 421.1L288 421.1L287.1 421.1C282.8 427.5 274.7 436.7 264.6 445.9C246.6 462.2 220.7 480 191.1 480C163.3 480 137.4 462.2 119.4 445.9C109.2 436.7 101.2 427.5 95.98 421.1C91.29 426.9 84.23 434.1 75.4 443.3C59.03 458.7 35.48 476.1 9.001 479.4C4.617 479.1 .616 476.9 .0637 472.5C-.4887 468.1 2.617 464.1 7.001 463.6C28.3 460.9 48.74 446.5 64.42 431.7C73.56 423 82.16 413.7 89.43 403.4C90.93 401.3 93.37 400 95.98 400C98.59 400 101 401.3 102.5 403.4C110.5 414.6 120 424.9 130.2 434.1C147.4 449.8 169.5 464 191.1 464C214.5 464 236.6 449.8 253.8 434.1C263.9 424.9 273.4 414.6 281.4 403.4C284.4 399.1 291.6 399.1 294.6 403.4H294.6z"/>
</>],

]);

const BridgeWater: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BridgeWater.displayName = "BridgeWater";

export default BridgeWater;