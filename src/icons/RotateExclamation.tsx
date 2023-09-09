
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M280 264C280 277.3 269.3 288 256 288C242.7 288 232 277.3 232 264V152C232 138.7 242.7 128 256 128C269.3 128 280 138.7 280 152V264zM224 352C224 334.3 238.3 320 256 320C273.7 320 288 334.3 288 352C288 369.7 273.7 384 256 384C238.3 384 224 369.7 224 352z"/><path className="fa-secondary" d="M432 117.4V80C432 62.33 446.3 48 464 48C481.7 48 496 62.33 496 80V192C496 209.7 481.7 224 464 224H437.8C437.3 224 436.8 224 436.3 224H352C334.3 224 320 209.7 320 192C320 174.3 334.3 160 352 160H384C354.8 121.1 308.3 96 255.1 96C186.4 96 127.1 140.5 105.1 202.7C99.21 219.3 80.92 228.1 64.26 222.2C47.6 216.3 38.86 197.1 44.75 181.3C75.49 94.38 158.4 32 255.1 32C327.4 32 390.1 65.42 432 117.4V117.4zM256 480C184.6 480 121 446.6 80 394.6V432C80 449.7 65.67 464 48 464C30.33 464 16 449.7 16 432V320C16 302.3 30.33 288 48 288H160C177.7 288 192 302.3 192 320C192 337.7 177.7 352 160 352H127.1C157.2 390.9 203.7 416 256 416C325.6 416 384.9 371.5 406.9 309.3C412.8 292.7 431.1 283.9 447.7 289.8C464.4 295.7 473.1 314 467.2 330.7C436.5 417.6 353.6 480 256 480z"/>
</>],
['light',<>
	<path d="M255.1 80C172.3 80 101.6 135.9 79.31 212.5C76.84 220.1 67.96 225.8 59.47 223.4C50.99 220.9 46.11 212 48.58 203.5C74.74 113.7 157.7 48 255.1 48C339.6 48 412.1 95.5 448 164.1V112C448 103.2 455.2 96 464 96C472.8 96 480 103.2 480 112V208C480 216.8 472.8 224 464 224H448.4C448.2 224 447.9 224 447.7 224H368C359.2 224 352 216.8 352 208C352 199.2 359.2 192 368 192H425.4C397.4 126.2 332.1 80 255.1 80V80zM272 272C272 280.8 264.8 288 256 288C247.2 288 240 280.8 240 272V144C240 135.2 247.2 128 256 128C264.8 128 272 135.2 272 144V272zM232 352C232 338.7 242.7 328 256 328C269.3 328 280 338.7 280 352C280 365.3 269.3 376 256 376C242.7 376 232 365.3 232 352zM48 416C39.16 416 32 408.8 32 400V304C32 295.2 39.16 288 48 288H63.59C63.83 287.1 64.07 287.1 64.32 288H144C152.8 288 160 295.2 160 304C160 312.8 152.8 320 144 320H86.61C114.6 385.8 179.9 432 255.1 432C339.7 432 410.4 376.1 432.7 299.5C435.2 291 444 286.2 452.5 288.6C461 291.1 465.9 299.1 463.4 308.5C437.3 398.3 354.3 464 255.1 464C172.4 464 99.9 416.5 64 347V400C64 408.8 56.84 416 48 416V416z"/>
</>],
['regular',<>
	<path d="M256 79.1C178.5 79.1 112.7 130.1 89.2 199.7C84.96 212.2 71.34 218.1 58.79 214.7C46.23 210.5 39.48 196.9 43.72 184.3C73.6 95.8 157.3 32 256 32C337.5 32 408.8 75.53 448 140.6V104C448 90.75 458.7 80 472 80C485.3 80 496 90.75 496 104V200C496 213.3 485.3 224 472 224H376C362.7 224 352 213.3 352 200C352 186.7 362.7 176 376 176H412.8C383.7 118.1 324.4 80 256 80V79.1zM280 263.1C280 277.3 269.3 287.1 256 287.1C242.7 287.1 232 277.3 232 263.1V151.1C232 138.7 242.7 127.1 256 127.1C269.3 127.1 280 138.7 280 151.1V263.1zM224 352C224 334.3 238.3 319.1 256 319.1C273.7 319.1 288 334.3 288 352C288 369.7 273.7 384 256 384C238.3 384 224 369.7 224 352zM40 432C26.75 432 16 421.3 16 408V311.1C16 298.7 26.75 287.1 40 287.1H136C149.3 287.1 160 298.7 160 311.1C160 325.3 149.3 336 136 336H99.19C128.3 393 187.6 432 256 432C333.5 432 399.3 381.9 422.8 312.3C427 299.8 440.7 293 453.2 297.3C465.8 301.5 472.5 315.1 468.3 327.7C438.4 416.2 354.7 480 256 480C174.5 480 103.2 436.5 64 371.4V408C64 421.3 53.25 432 40 432V432z"/>
</>],
['solid',<>
	<path d="M432 117.4V80C432 62.33 446.3 48 464 48C481.7 48 496 62.33 496 80V192C496 209.7 481.7 224 464 224H437.8C437.3 224 436.8 224 436.3 224H352C334.3 224 320 209.7 320 192C320 174.3 334.3 160 352 160H384C354.8 121.1 308.3 96 255.1 96C186.4 96 127.1 140.5 105.1 202.7C99.21 219.3 80.92 228.1 64.26 222.2C47.6 216.3 38.86 197.1 44.75 181.3C75.49 94.38 158.4 32 255.1 32C327.4 32 390.1 65.42 432 117.4V117.4zM280 264C280 277.3 269.3 288 256 288C242.7 288 232 277.3 232 264V152C232 138.7 242.7 128 256 128C269.3 128 280 138.7 280 152V264zM224 352C224 334.3 238.3 320 256 320C273.7 320 288 334.3 288 352C288 369.7 273.7 384 256 384C238.3 384 224 369.7 224 352zM48 464C30.33 464 16 449.7 16 432V320C16 302.3 30.33 288 48 288H160C177.7 288 192 302.3 192 320C192 337.7 177.7 352 160 352H127.1C157.2 390.9 203.7 416 256 416C325.6 416 384.9 371.5 406.9 309.3C412.8 292.7 431.1 283.9 447.7 289.8C464.4 295.7 473.1 314 467.2 330.7C436.5 417.6 353.6 480 256 480C184.6 480 121 446.6 80 394.6V432C80 449.7 65.67 464 48 464V464z"/>
</>],
['thin',<>
	<path d="M255.1 56C167 56 91.6 114.1 65.64 194.5C64.29 198.7 59.78 200.1 55.57 199.6C51.37 198.3 49.06 193.7 50.42 189.5C78.45 102.8 159.9 40 255.1 40C346.4 40 423.8 95.51 456 174.3V104C456 99.58 459.6 96 464 96C468.4 96 472 99.58 472 104V200C472 204.4 468.4 208 464 208H368C363.6 208 360 204.4 360 200C360 195.6 363.6 192 368 192H445.5C418.9 112.9 344.1 56 255.1 56V56zM264 296C264 300.4 260.4 304 256 304C251.6 304 248 300.4 248 296V136C248 131.6 251.6 128 256 128C260.4 128 264 131.6 264 136V296zM240 352C240 343.2 247.2 336 256 336C264.8 336 272 343.2 272 352C272 360.8 264.8 368 256 368C247.2 368 240 360.8 240 352zM48 416C43.58 416 40 412.4 40 408V312C40 307.6 43.58 304 48 304H144C148.4 304 152 307.6 152 312C152 316.4 148.4 320 144 320H66.46C93.15 399.1 167.9 456 255.1 456C344.1 456 420.4 397.9 446.4 317.5C447.7 313.3 452.2 311 456.4 312.4C460.6 313.7 462.9 318.3 461.6 322.5C433.5 409.2 352.1 472 255.1 472C165.6 472 88.22 416.5 55.1 337.7V408C55.1 412.4 52.42 416 47.1 416L48 416z"/>
</>],

]);

const RotateExclamation: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

RotateExclamation.displayName = "RotateExclamation";

export default RotateExclamation;
