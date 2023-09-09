
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M506.3 125.6C531 152.3 548.4 186.3 554.7 224.4L567.3 299.6C571.2 323.4 548.5 342.9 525.6 335.3L405.9 295.5L506.3 125.6zM374.8 285.2L323.1 268C308.5 263.1 293.2 261 277.9 261.6L393.5 66.05C426.3 70.9 456.7 84.09 482.1 103.6L374.8 285.2zM246.6 64H357.5L235.6 270.4L96.14 318.7L246.6 64zM49.42 334.8C26.98 341.5 4.951 322.3 8.857 298.9L21.26 224.4C36.63 132.2 116.1 64.57 209.5 64L49.42 334.8z"/><path className="fa-secondary" d="M32 384V369C40.55 369.7 49.47 368.7 58.35 365.6L251.3 298.8C271.3 291.9 292.1 291.7 313 298.4L518.5 366.6C527.1 369.5 535.7 370.4 544 369.7V384C544 419.3 515.3 448 480 448C460.9 448 443.7 439.6 432 426.3C420.3 439.6 403.1 448 384 448C364.9 448 347.7 439.6 336 426.3C324.3 439.6 307.1 448 288 448C268.9 448 251.7 439.6 240 426.3C228.3 439.6 211.1 448 192 448C172.9 448 155.7 439.6 144 426.3C132.3 439.6 115.1 448 96 448C60.65 448 32 419.3 32 384V384z"/>
</>],
['light',<>
	<path d="M366.9 64C460.1 64 539.8 130.9 555.1 222.6L566.7 283.2C570.9 307 548.1 326.7 525.1 319.1L323.1 252C296.4 243.1 267.5 243.3 240.9 252.5L51.46 318.2C28.39 326.2 5.222 306.4 9.465 282.4L20.01 222.6C36.2 130.9 115.9 64 209.1 64L366.9 64zM535.2 288.7L524.5 228.2C519.5 199.9 507.2 174.4 489.8 153.5L430.5 253.9L535.2 288.7zM305.4 215.1C314.8 216.4 324.1 218.6 333.2 221.6L399.4 243.6L466.2 130.5C440.9 110.5 409.5 98.07 375.6 96.24L305.4 215.1zM268.8 214.1L338.6 96H227.7L133.2 255.1L230.4 222.3C242.9 217.1 255.8 215.2 268.8 214.1V214.1zM86.45 272.2L189.9 97.15C120.7 105.5 63.89 158.1 51.52 228.2L40.98 287.9L86.45 272.2zM58.7 349.5L63.1 347.7V352C63.1 387.3 92.65 416 127.1 416C139.6 416 150.4 412.9 159.7 407.6C172.3 400.4 187.7 400.4 200.3 407.6C209.6 412.9 220.4 416 231.1 416C244.6 416 256.3 412.4 266.1 406.2C279.5 397.7 296.5 397.7 309.9 406.2C319.7 412.4 331.4 416 344 416C355.6 416 366.4 412.9 375.7 407.6C388.3 400.4 403.7 400.4 416.3 407.6C425.6 412.9 436.4 416 448 416C483.3 416 512 387.3 512 352V348.5L518.2 350.5C526.9 353.4 535.6 354.3 543.1 353.6C543.1 405.9 500.5 448 448 448C430.7 448 414.4 443.4 400.4 435.4C397.7 433.8 394.3 433.8 391.6 435.4C377.6 443.4 361.3 448 344 448C325.2 448 307.6 442.6 292.8 433.2C289.9 431.4 286.1 431.4 283.2 433.2C268.4 442.6 250.8 448 232 448C214.7 448 198.4 443.4 184.4 435.4C181.7 433.8 178.3 433.8 175.6 435.4C161.6 443.4 145.3 448 128 448C75.27 448 32.47 405.5 32 352.9C40.65 353.7 49.69 352.6 58.7 349.5L58.7 349.5z"/>
</>],
['regular',<>
	<path d="M524.5 302.9L421.7 268.8L507.6 123.4C532.5 149.6 550.3 182.1 557.4 220.6L565.1 266.6C570.5 290.6 547.6 310.6 524.5 302.9L524.5 302.9zM393.7 65.63C426.7 69.96 457.4 82.72 483.1 101.9L390.6 258.4L323.1 236C314.4 233.1 305.5 231.2 296.5 230.2L393.7 65.63zM258.3 231.8C252.4 232.1 246.6 234.6 240.9 236.5L119.9 278.4L246.6 64H357.5L258.3 231.8zM207.3 64H209.5L73.17 294.6L52.09 301.1C28.88 309.1 5.634 289.1 10.16 265.8L18.64 220.6C35.66 129.8 114.1 64 207.3 64V64zM59.09 333.4L80 326.1V352C80 378.5 101.5 400 128 400C136.7 400 144.8 397.7 151.8 393.7C169.3 383.7 190.7 383.7 208.2 393.7C215.2 397.7 223.3 400 232 400C241.5 400 250.2 397.3 257.6 392.6C276.2 380.9 299.8 380.9 318.4 392.6C325.8 397.3 334.5 400 344 400C352.7 400 360.8 397.7 367.8 393.7C385.3 383.7 406.7 383.7 424.2 393.7C431.2 397.7 439.3 400 448 400C474.5 400 496 378.5 496 352V327.1L517.8 334.4C526.6 337.3 535.5 338.2 544 337.4V352C544 405 501 448 448 448C430.7 448 414.4 443.4 400.4 435.4C397.7 433.8 394.3 433.8 391.6 435.4C377.6 443.4 361.3 448 344 448C325.2 448 307.6 442.6 292.8 433.2C289.9 431.4 286.1 431.4 283.2 433.2C268.4 442.6 250.8 448 232 448C214.7 448 198.4 443.4 184.4 435.4C181.7 433.8 178.3 433.8 175.6 435.4C161.6 443.4 145.3 448 128 448C74.98 448 32 405 32 352V336.7C40.77 337.5 49.94 336.6 59.09 333.4L59.09 333.4z"/>
</>],
['solid',<>
	<path d="M405.9 295.5L506.3 125.6C531 152.3 548.4 186.3 554.7 224.4L567.3 299.6C571.2 323.4 548.5 342.9 525.6 335.3L405.9 295.5zM393.5 66.05C426.3 70.9 456.7 84.09 482.1 103.6L374.8 285.2L323.1 268C308.5 263.1 293.2 261 277.9 261.6L393.5 66.05zM235.6 270.4L96.14 318.7L246.6 64H357.5L235.6 270.4zM21.26 224.4C36.63 132.2 116.1 64.57 209.5 64L49.42 334.8C26.98 341.5 4.951 322.3 8.857 298.9L21.26 224.4zM32 384V369C40.55 369.7 49.47 368.7 58.36 365.6L251.3 298.8C271.3 291.9 292.1 291.7 313 298.4L518.5 366.6C527.1 369.5 535.7 370.4 544 369.7V384C544 419.3 515.3 448 480 448C460.9 448 443.7 439.6 432 426.3C420.3 439.6 403.1 448 384 448C364.9 448 347.7 439.6 336 426.3C324.3 439.6 307.1 448 288 448C268.9 448 251.7 439.6 240 426.3C228.3 439.6 211.1 448 192 448C172.9 448 155.7 439.6 144 426.3C132.3 439.6 115.1 448 96 448C60.65 448 32 419.3 32 384V384z"/>
</>],
['thin',<>
	<path d="M328.2 64H366.9C460.1 64 539.8 130.9 555.1 222.6L562 256.7C568.3 292.5 534.1 322.1 499.6 310.6L323.1 252C296.4 243.1 267.5 243.3 240.9 252.5L77.18 309.3C42.58 321.2 7.832 291.6 14.2 255.6L20.01 222.6C36.2 130.9 115.9 64 209.1 64H327.8C327.9 63.1 328.1 63.1 328.2 64V64zM260.2 199.1C256.3 196.1 254.9 192.1 256.9 188.2L314.7 80H209.1C207.5 80 205.9 80.02 204.4 80.06L110.8 228.3C108.4 232 103.5 233.1 99.73 230.8C95.99 228.4 94.88 223.5 97.24 219.7L184.4 81.73C109.9 92.23 49.15 149.5 35.76 225.4L29.95 258.3C25.71 282.4 48.87 302.1 71.94 294.1L235.6 237.4C265.6 227 298.1 226.8 328.2 236.8L504.7 295.4C527.7 303.1 550.5 283.4 546.3 259.5L540.2 225.4C532.6 182.1 509.5 144.9 477.3 118.9L414.9 227.1C412.8 231.8 407.9 233.1 404 230.9C400.2 228.8 398.9 223.9 401.1 220L464.3 109.4C436.2 90.74 402.6 80 366.9 80H332.8L271.1 195.8C268.1 199.7 264.1 201.1 260.2 199.1V199.1zM48 362.5C48 400.9 79.12 432 117.5 432C132.6 432 146.6 427.2 157.1 418.1C163.9 414.8 171.9 414.8 177.8 418.1C189.2 427.2 203.1 432 218.3 432C237.7 432 255.2 424.1 267.8 411.2C274.6 404.3 285.9 404.3 292.7 411.2C305.3 424.1 322.8 432 342.2 432C360.2 432 376.5 425.2 388.8 414.1C395.3 408.2 405.4 408.2 411.9 414.1C424.2 425.2 440.6 432 458.5 432C496.9 432 528 400.9 528 362.5V342.9C528 338.4 531.6 334.9 536 334.9C540.4 334.9 544 338.4 544 342.9V362.5C544 409.7 505.7 448 458.5 448C436.5 448 416.3 439.6 401.2 425.9C401 425.8 400.7 425.7 400.4 425.7C400 425.7 399.7 425.8 399.6 425.9C384.4 439.6 364.3 448 342.3 448C318.4 448 296.8 438.2 281.3 422.4C281.1 422.2 280.7 422.1 280.3 422.1C279.8 422.1 279.4 422.2 279.2 422.4C263.7 438.2 242.1 448 218.3 448C199.7 448 182.5 442.1 168.4 431.1C168.3 431.9 168.1 431.8 167.9 431.8C167.7 431.8 167.5 431.9 167.3 431.1C153.3 442.1 136.1 448 117.5 448C70.28 448 32 409.7 32 362.5V341.8C32 337.4 35.58 333.8 40 333.8C44.42 333.8 48 337.4 48 341.8L48 362.5z"/>
</>],

]);

const Sushi: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Sushi.displayName = "Sushi";

export default Sushi;