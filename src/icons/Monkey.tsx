
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M160 416C160 326.3 221.4 251 304.5 229.9C329.1 265 369.9 288 416 288C425.8 288 435.4 286.1 444.7 284.1L526.5 363C558.1 393.2 576 435 576 478.8V480C576 497.7 561.7 512 544 512C526.3 512 512 497.7 512 480V478.8C512 452.5 501.3 427.4 482.3 409.3L416 346.1V448H448C465.7 448 480 462.3 480 480C480 497.7 465.7 512 448 512H160C71.63 512 0 440.4 0 352V110.1C0 49.31 49.3 .0003 110.1 .0003H120.5C177.7 .0003 223.3 47.77 220.6 104.9C218.4 153.1 182 192.8 134.2 199.4L132.4 199.7C114.9 202.1 98.71 189.9 96.3 172.4C93.89 154.9 106.1 138.7 123.6 136.3L125.5 136C142.8 133.7 155.9 119.3 156.7 101.9C157.7 81.26 141.2 64 120.5 64H110.1C84.65 64 63.1 84.65 63.1 110.1V352C63.1 405 106.1 448 159.1 448L160 416zM416 256C386.7 256 360.1 243.8 341.2 224.3C332.3 215 325 204.1 319.1 192C284.6 191.1 256 163.3 256 128C256 92.66 284.6 64.02 319.1 64C335.6 26.42 372.7 0 416 0C459.3 0 496.4 26.42 512 64C547.4 64.02 576 92.66 576 128C576 163.3 547.4 191.1 512 192C496.4 229.6 459.3 256 416 256zM384 64C357.5 64 336 85.49 336 112C336 135.8 353.3 155.5 376 159.3V168C376 190.1 393.9 208 416 208C438.1 208 456 190.1 456 168V159.3C478.7 155.5 496 135.8 496 112C496 85.49 474.5 64 448 64H384z"/><path className="fa-secondary" d="M448 64C474.5 64 496 85.49 496 112C496 135.8 478.7 155.5 456 159.3V168C456 190.1 438.1 208 416 208C393.9 208 376 190.1 376 168V159.3C353.3 155.5 336 135.8 336 112C336 85.49 357.5 64 384 64H448zM384 96C375.2 96 368 103.2 368 112C368 120.8 375.2 128 384 128C392.8 128 400 120.8 400 112C400 103.2 392.8 96 384 96zM448 128C456.8 128 464 120.8 464 112C464 103.2 456.8 96 448 96C439.2 96 432 103.2 432 112C432 120.8 439.2 128 448 128z"/>
</>],
['light',<>
	<path d="M96 32C60.65 32 32 60.65 32 96V368C32 429.9 82.14 480 144 480H160V416C160 322.8 216.9 242.1 297.8 209.2C301.1 219.2 307.4 228.6 313.9 237.2C242.5 265.2 192 334.7 192 416V480H416V432C416 387.8 380.2 352 336 352H304C295.2 352 288 344.8 288 336C288 327.2 295.2 320 304 320H336C367.3 320 395.7 332.9 416 353.6V288C427.7 288 438.1 286.4 449.7 283.5L536.9 376.1C562 402.8 576 438.1 576 474.8V496C576 504.8 568.8 512 560 512C551.2 512 544 504.8 544 496V474.8C544 446.2 533.1 418.8 513.6 398L448 328.3V480H480C488.8 480 496 487.2 496 496C496 504.8 488.8 512 480 512H144C64.47 512 0 447.5 0 368V96C0 42.98 42.98 0 96 0H128C181 0 224 42.98 224 96C224 149 181 192 128 192H112C103.2 192 96 184.8 96 176C96 167.2 103.2 160 112 160H128C163.3 160 192 131.3 192 96C192 60.65 163.3 32 128 32H96zM400 112C400 120.8 392.8 128 384 128C375.2 128 368 120.8 368 112C368 103.2 375.2 96 384 96C392.8 96 400 103.2 400 112zM432 112C432 103.2 439.2 96 448 96C456.8 96 464 103.2 464 112C464 120.8 456.8 128 448 128C439.2 128 432 120.8 432 112zM321.3 176H320C284.7 176 256 147.3 256 112C256 76.65 284.7 48 320 48H332.8C349.4 19.31 380.5 0 416 0C451.5 0 482.6 19.31 499.2 48H512C547.3 48 576 76.65 576 112C576 147.3 547.3 176 512 176H510.7C503.1 221.4 463.6 256 416 256C368.4 256 328.9 221.4 321.3 176zM416 32C380.7 32 352 60.65 352 96V160C352 195.3 380.7 224 416 224C451.3 224 480 195.3 480 160V96C480 60.65 451.3 32 416 32zM320 96C320 90.55 320.5 85.2 321.3 80H320C302.3 80 288 94.33 288 112C288 129.7 302.3 144 320 144V96zM512 80H510.7C511.5 85.2 512 90.55 512 96V144C529.7 144 544 129.7 544 112C544 94.33 529.7 80 512 80z"/>
</>],
['regular',<>
	<path d="M384 128C384 136.8 376.8 144 368 144C359.2 144 352 136.8 352 128C352 119.2 359.2 112 368 112C376.8 112 384 119.2 384 128zM416 128C416 119.2 423.2 112 432 112C440.8 112 448 119.2 448 128C448 136.8 440.8 144 432 144C423.2 144 416 136.8 416 128zM104 48C73.07 48 48 73.07 48 104V360C48 417.4 94.56 464 152 464H160V416C160 322.3 217.5 242.1 299.1 208.7C295.1 200.4 292.1 191.5 290.2 182.3C265.1 176.2 248 154.2 248 128C248 100.1 268.4 76.97 295.1 72.71C311 30.23 351.1 0 400 0C448 0 488.1 30.23 504.9 72.71C531.6 76.97 552 100.1 552 128C552 154.2 534 176.2 509.8 182.3C502.7 217.3 479.4 246.3 448 261.2V286.1L531.5 369.5C559.1 398 576 436.7 576 477V488C576 501.3 565.3 512 552 512C538.7 512 528 501.3 528 488V477C528 449.4 517 422.1 497.5 403.5L448 353.9V464H456C469.3 464 480 474.7 480 488C480 501.3 469.3 512 456 512H152C68.05 512 0 443.9 0 360V104C0 46.56 46.56 .0003 104 .0003H128C181 .0003 224 42.98 224 96C224 149 181 192 128 192H120C106.7 192 96 181.3 96 168C96 154.7 106.7 144 120 144H128C154.5 144 176 122.5 176 96C176 69.49 154.5 48 128 48L104 48zM400 272C373.9 272 349.9 263.1 330.9 248.2C259.7 270.7 208 337.3 208 416V464H400V440C400 400.2 367.8 368 328 368H312C298.7 368 288 357.3 288 344C288 330.7 298.7 320 312 320H328C355 320 379.9 328.9 400 343.1V272zM400 48C364.7 48 336 76.65 336 112V160C336 195.3 364.7 224 400 224C435.3 224 464 195.3 464 160V112C464 76.65 435.3 48 400 48z"/>
</>],
['solid',<>
	<path d="M160 416C160 326.3 221.4 251 304.5 229.9C329.1 265 369.9 288 416 288C425.8 288 435.4 286.1 444.7 284.1L526.5 363C558.1 393.2 576 435 576 478.8V480C576 497.7 561.7 512 544 512C526.3 512 512 497.7 512 480V478.8C512 452.5 501.3 427.4 482.3 409.3L416 346.1V448H448C465.7 448 480 462.3 480 480C480 497.7 465.7 512 448 512H160C71.63 512 0 440.4 0 352V110.1C0 49.31 49.3 .0003 110.1 .0003H120.5C177.7 .0003 223.3 47.77 220.6 104.9C218.4 153.1 182 192.8 134.2 199.4L132.4 199.7C114.9 202.1 98.71 189.9 96.3 172.4C93.89 154.9 106.1 138.7 123.6 136.3L125.5 136C142.8 133.7 155.9 119.3 156.7 101.9C157.7 81.26 141.2 64 120.5 64H110.1C84.65 64 63.1 84.65 63.1 110.1V352C63.1 405 106.1 448 159.1 448L160 416zM368 112C368 103.2 375.2 96 384 96C392.8 96 400 103.2 400 112C400 120.8 392.8 128 384 128C375.2 128 368 120.8 368 112zM464 112C464 120.8 456.8 128 448 128C439.2 128 432 120.8 432 112C432 103.2 439.2 96 448 96C456.8 96 464 103.2 464 112zM416 256C386.7 256 360.1 243.8 341.2 224.3C332.3 215 325 204.1 319.1 192C284.6 191.1 256 163.3 256 128C256 92.66 284.6 64.02 319.1 64C335.6 26.42 372.7 0 416 0C459.3 0 496.4 26.42 512 64C547.4 64.02 576 92.66 576 128C576 163.3 547.4 191.1 512 192C496.4 229.6 459.3 256 416 256zM384 64C357.5 64 336 85.49 336 112C336 135.8 353.3 155.5 376 159.3V168C376 190.1 393.9 208 416 208C438.1 208 456 190.1 456 168V159.3C478.7 155.5 496 135.8 496 112C496 85.49 474.5 64 448 64H384z"/>
</>],
['thin',<>
	<path d="M400 112C400 120.8 392.8 128 384 128C375.2 128 368 120.8 368 112C368 103.2 375.2 96 384 96C392.8 96 400 103.2 400 112zM432 112C432 103.2 439.2 96 448 96C456.8 96 464 103.2 464 112C464 120.8 456.8 128 448 128C439.2 128 432 120.8 432 112zM440 56C470.9 56 496 81.07 496 112C496 134.3 482.9 153.6 464 162.6V168C464 194.5 442.5 216 416 216C389.5 216 368 194.5 368 168V162.6C349.1 153.6 336 134.3 336 112C336 81.07 361.1 56 392 56H440zM378.7 149.7L384 151.6V168C384 185.7 398.3 200 416 200C433.7 200 448 185.7 448 168V151.6L453.3 149.7C468.9 144.2 480 129.4 480 112C480 89.91 462.1 72 440 72H392C369.9 72 352 89.91 352 112C352 129.4 363.1 144.2 378.7 149.7zM104 16C55.4 16 16 55.4 16 104V376C16 442.3 69.73 496 136 496H176V431C176 333.3 237 246.6 327.8 212.1C317.5 199.9 310.1 184.5 306.5 167.7C278.2 164.1 256 141.1 256 112C256 81.07 281.1 56 312 56H318.1C338.3 22.52 374.5 0 416 0C457.5 0 493.7 22.52 513 56H520C550.9 56 576 81.07 576 112C576 141.1 553.8 164.1 525.5 167.7C514.6 218.2 469.7 256 416 256C386.4 256 359.5 244.5 339.5 225.8C251.6 255.3 192 337.8 192 431V496H480C488.8 496 496 488.8 496 480C496 471.2 488.8 464 480 464H440C435.8 464 432.4 460.8 432 456.7L431.4 448.7C427.6 403.1 389.4 368 343.7 368H328C323.6 368 320 364.4 320 360C320 355.6 323.6 352 328 352H343.7C380.7 352 413.6 371.5 432 401.1V296C432 292.7 434 289.8 437 288.6C440.1 287.4 443.6 288.1 445.8 290.5L539 389.6C562.8 414.8 576 448.1 576 482.8V504C576 508.4 572.4 512 568 512C563.6 512 560 508.4 560 504V482.8C560 452.2 548.3 422.8 527.4 400.5L448 316.2V448H480C497.7 448 512 462.3 512 480C512 497.7 497.7 512 480 512H136C60.89 512 0 451.1 0 376V104C0 46.56 46.56 0 104 0H136C184.6 0 224 39.4 224 88C224 136.6 184.6 176 136 176H104C99.58 176 96 172.4 96 168C96 163.6 99.58 160 104 160H136C175.8 160 208 127.8 208 88C208 48.24 175.8 16 136 16L104 16zM512 112C512 58.98 469 16 416 16C362.1 16 320 58.98 320 112V144C320 197 362.1 240 416 240C469 240 512 197 512 144V112zM272 112C272 131.4 285.9 147.6 304.2 151.2C304.1 148.9 304 146.4 304 144V112C304 97.91 306.6 84.43 311.4 72.01C289.6 72.35 272 90.13 272 112zM528 144C528 146.4 527.9 148.9 527.8 151.2C546.1 147.6 560 131.4 560 112C560 90.13 542.4 72.35 520.6 72.01C525.4 84.43 528 97.91 528 112V144z"/>
</>],

]);

const Monkey: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Monkey.displayName = "Monkey";

export default Monkey;
