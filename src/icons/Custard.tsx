
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M571.3 388.7C574.3 391.7 576 395.8 576 400C576 412.7 570.9 424.9 561.9 433.9C552.9 442.9 540.7 448 528 448H48C35.27 448 23.06 442.9 14.06 433.9C5.057 424.9 0 412.7 0 400C0 395.8 1.686 391.7 4.686 388.7C7.687 385.7 11.76 384 16 384H560C564.2 384 568.3 385.7 571.3 388.7zM175.3 192.2C155.5 192.2 135.1 197.6 119 208L92.38 224.4L119.6 101.6C122 90.95 127.9 81.43 136.4 74.6C144.9 67.76 155.5 64.02 166.4 64H409.6C420.5 64.03 431.1 67.79 439.6 74.66C448.1 81.52 454 91.08 456.4 101.8L483.6 224.5L456.1 208C440 197.6 420.5 192.2 400.7 192.2C380.8 192.2 361.3 197.6 344.3 208C327.4 218.4 307.9 223.8 288 223.8C268.1 223.8 248.6 218.4 231.7 208C214.7 197.6 195.2 192.2 175.3 192.2z"/><path className="fa-secondary" d="M456.1 207.1L483.6 224.5L512 351.1H64L92.38 224.3L119 207.1C135.1 197.6 155.5 192.2 175.3 192.2C195.2 192.2 214.7 197.6 231.7 207.1C248.6 218.4 268.1 223.8 288 223.8C307.9 223.8 327.4 218.4 344.3 207.1C361.3 197.6 380.8 192.2 400.7 192.2C420.5 192.2 440 197.6 456.1 207.1z"/>
</>],
['light',<>
	<path d="M571.3 420.7C574.3 423.7 576 427.8 576 432C576 436.2 574.3 440.3 571.3 443.3C568.3 446.3 564.2 448 560 448H16C11.76 448 7.687 446.3 4.686 443.3C1.686 440.3 0 436.2 0 432C0 427.8 1.686 423.7 4.686 420.7C7.687 417.7 11.76 416 16 416H560C564.2 416 568.3 417.7 571.3 420.7zM66.5 360.5C64.24 356.9 63.49 352.6 64.42 348.5L117.9 112C120.9 98.28 128.6 86.03 139.6 77.3C150.7 68.56 164.3 63.87 178.4 64H397.6C411.7 63.87 425.3 68.56 436.4 77.3C447.4 86.03 455.1 98.28 458.2 112L511.7 348.4C512.2 350.4 512.2 352.5 511.9 354.6C511.5 356.7 510.8 358.7 509.6 360.5C508.5 362.2 507.1 363.8 505.3 365C503.6 366.2 501.7 367.1 499.6 367.6C498.5 367.8 497.3 367.1 496.1 367.1C492.5 367.1 488.1 366.7 486.1 364.5C483.3 362.2 481.3 359 480.5 355.5L450.7 223.7L447.3 221.5C433.1 212.6 416.7 207.9 399.9 207.9C383.2 207.9 366.7 212.6 352.5 221.5C333.2 233.6 310.9 240 288.1 240C265.3 240 242.1 233.6 223.6 221.5C209.4 212.7 193 207.9 176.3 207.9C159.5 207.9 143.1 212.7 128.9 221.5L125.5 223.7L95.68 355.5C95.22 357.6 94.35 359.5 93.13 361.2C91.91 362.1 90.37 364.4 88.59 365.5C86.8 366.7 84.81 367.4 82.74 367.8C80.66 368.1 78.53 368.1 76.48 367.6C72.35 366.6 68.76 364.1 66.5 360.5H66.5zM134.4 183.7C151.8 177.2 170.4 174.9 188.8 176.7C207.2 178.6 224.1 184.7 240.7 194.5C254.9 203.1 271.3 207.7 288 207.7C304.7 207.7 321.1 203.1 335.4 194.5C351.1 184.7 368.8 178.6 387.2 176.8C405.7 174.9 424.2 177.2 441.6 183.7L426.1 119C425.4 112.5 421.6 106.6 416.3 102.4C410.1 98.23 404.4 95.97 397.6 96H178.4C171.6 95.97 165 98.22 159.7 102.4C154.4 106.6 150.6 112.4 149.1 119L134.4 183.7z"/>
</>],
['regular',<>
	<path d="M568.1 407C573.5 411.5 576 417.6 576 423.1C576 430.4 573.5 436.5 568.1 440.1C564.5 445.5 558.4 447.1 552 447.1H24C17.63 447.1 11.53 445.5 7.029 440.1C2.529 436.5 0 430.4 0 423.1C0 417.6 2.529 411.5 7.029 407C11.53 402.5 17.63 399.1 24 399.1H552C558.4 399.1 564.5 402.5 568.1 407zM66.45 356.7C63.08 351.3 61.1 344.8 63.42 338.6L115.2 115.1C118.8 101 127.3 87.73 139.5 78.28C151.6 68.83 166.6 63.79 182 63.1H393.1C409.4 63.79 424.4 68.83 436.5 78.28C448.7 87.73 457.2 101 460.8 115.1L512.6 338.6C514 344.8 512.9 351.3 509.6 356.7C506.2 362.1 500.8 365.9 494.6 367.4C492.8 367.8 490.1 368 489.2 367.1C483.7 367.1 478.5 366.2 474.3 362.8C470 359.4 467 354.7 465.8 349.4L438.6 232.2L436.7 230.7C425.7 221.2 411.7 215.9 397.2 215.9C382.7 215.9 368.6 221.2 357.7 230.7C338.1 247 313.5 255.1 288 255.1C262.5 255.1 237.9 247 218.3 230.7C207.4 221.2 193.3 215.9 178.8 215.9C164.3 215.9 150.2 221.2 139.3 230.7L137.4 232.2L110.2 349.4C109.5 352.5 108.2 355.4 106.3 357.1C104.5 360.5 102.2 362.7 99.51 364.4C96.83 366.1 93.85 367.2 90.74 367.7C87.63 368.2 84.44 368.1 81.38 367.4C75.18 365.9 69.81 362.1 66.45 356.7zM151.4 172.1C168.1 167.6 185.6 167.2 202.5 170.9C219.4 174.6 235.2 182.3 248.5 193.3C259.5 202.6 273.5 207.7 288 207.7C302.5 207.7 316.5 202.6 327.5 193.3C340.9 182.3 356.6 174.6 373.5 170.1C390.4 167.3 407.9 167.7 424.6 172.1L414.1 126.8C412.9 122.5 410.2 118.6 406.6 115.9C402.1 113.3 398.5 111.9 393.1 111.1H182C177.5 111.9 173 113.3 169.4 115.9C165.8 118.6 163.1 122.5 161.9 126.8L151.4 172.1z"/>
</>],
['solid',<>
	<path d="M571.3 388.7C574.3 391.7 576 395.8 576 400C576 412.7 570.9 424.9 561.9 433.9C552.9 442.9 540.7 448 528 448H48C35.27 448 23.06 442.9 14.06 433.9C5.057 424.9 0 412.7 0 400C0 395.8 1.686 391.7 4.686 388.7C7.687 385.7 11.76 384 16 384H560C564.2 384 568.3 385.7 571.3 388.7zM175.3 160C152.4 160 130 166.3 110.6 178.2L101.3 183.9L119.6 101.6C122 90.95 127.9 81.43 136.4 74.6C144.9 67.76 155.5 64.02 166.4 64H409.6C420.5 64.05 431 67.79 439.5 74.63C447.1 81.46 453.9 90.97 456.3 101.6L474.6 183.1L465.3 178.2C445.8 166.3 423.4 159.1 400.6 159.1C377.7 159.1 355.3 166.3 335.8 178.2C321.4 187.1 304.8 191.7 287.9 191.7C271 191.7 254.4 187.1 240 178.2C220.5 166.3 198.1 160 175.3 160zM512 352H64L91.52 227.6L127.3 205.4C141.7 196.6 158.3 191.9 175.3 191.9C192.2 191.9 208.8 196.6 223.3 205.4C242.7 217.4 265.2 223.7 288 223.7C310.9 223.7 333.3 217.4 352.8 205.4C367.2 196.6 383.8 191.9 400.7 191.9C417.6 191.9 434.2 196.6 448.6 205.4L484.3 227.6L512 352z"/>
</>],
['thin',<>
	<path d="M573.7 386.3C575.2 387.8 576 389.9 576 392C575.1 406.8 570.1 421.1 559.6 431.6C549.1 442.1 534.8 447.1 520 448H56C41.15 447.1 26.92 442.1 16.42 431.6C5.923 421.1 .017 406.8 0 392C0 389.9 .8429 387.8 2.343 386.3C3.843 384.8 5.878 384 8 384C10.12 384 12.16 384.8 13.66 386.3C15.16 387.8 16 389.9 16 392C16.02 402.6 20.24 412.8 27.73 420.3C35.23 427.8 45.4 431.1 56 432H520C530.6 431.1 540.8 427.8 548.3 420.3C555.8 412.8 559.1 402.6 560 392C560 389.9 560.8 387.8 562.3 386.3C563.8 384.8 565.9 384 568 384C570.1 384 572.2 384.8 573.7 386.3zM65.36 364.4C64.19 362.6 63.78 360.5 64.19 358.4L119.8 107.9C122.5 95.44 129.3 84.3 139.2 76.31C149.1 68.33 161.5 63.98 174.2 64H401.8C414.6 63.95 426.9 68.28 436.9 76.27C446.8 84.26 453.7 95.42 456.4 107.9L511.8 358.1C512.1 359.2 512.1 360.3 511.1 361.3C511.8 362.4 511.4 363.4 510.9 364.3C510.3 365.2 509.6 365.1 508.7 366.6C507.8 367.2 506.8 367.7 505.8 367.9C504.7 368.1 503.7 368.2 502.6 367.1C501.5 367.8 500.5 367.4 499.7 366.8C498.8 366.2 497.1 365.4 497.4 364.5C496.8 363.6 496.4 362.6 496.2 361.6L464.1 216.4L463.2 215.9C446.6 205.5 427.3 199.9 407.7 199.9C388 199.9 368.8 205.5 352.2 215.9C332.9 227.9 310.7 234.2 288.1 234.2C265.4 234.2 243.2 227.9 223.1 215.9C207.3 205.5 188.1 199.9 168.4 199.9C148.8 199.9 129.5 205.5 112.8 215.9L111.1 216.4L79.1 361.7C79.77 362.8 79.34 363.7 78.74 364.6C78.13 365.5 77.36 366.2 76.47 366.8C75.57 367.3 74.58 367.7 73.54 367.9C72.5 368.1 71.43 368 70.4 367.8C68.33 367.4 66.52 366.1 65.36 364.4L65.36 364.4zM116.6 195.8C134.9 187 155.1 183 175.3 184.2C195.6 185.3 215.3 191.5 232.5 202.2C249.2 212.4 268.4 217.8 288 217.8C307.6 217.8 326.8 212.4 343.6 202.2C360.8 191.5 380.4 185.3 400.7 184.2C420.9 183 441.1 187 459.4 195.8L440.7 111.3C438.8 102.4 433.9 94.47 426.8 88.76C419.7 83.06 410.9 79.96 401.8 80H174.2C165.1 79.96 156.3 83.06 149.2 88.76C142.1 94.47 137.2 102.4 135.3 111.3L116.6 195.8z"/>
</>],

]);

const Custard: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Custard.displayName = "Custard";

export default Custard;
