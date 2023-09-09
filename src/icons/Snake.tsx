
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M403.6 25.79L483.4 65.69C500.9 74.46 512 92.39 512 111.1C512 131.6 500.9 149.5 483.4 158.3L403.6 198.2C372.8 213.6 335.6 207.6 311.2 183.2L288 159.1H176C149.5 159.1 128 181.5 128 207.1C128 234.5 149.5 255.1 176 255.1H320C390.7 255.1 448 313.3 448 384C448 454.7 390.7 512 320 512H176L175.9 512H111.6C101.3 512 91.01 510.3 81.22 507.1L15.18 485.1C6.114 482 0 473.6 0 464C0 454.4 6.114 445.1 15.18 442.9L64 426.7V464C64 472.8 71.16 480 80 480C88.84 480 96 472.8 96 464V417.3C101.1 416.4 106.4 416 111.6 416H160V464C160 472.8 167.2 480 176 480C184.8 480 192 472.8 192 464V416H256V464C256 472.8 263.2 480 272 480C280.8 480 288 472.8 288 464V416H320C322.9 416 325.6 415.6 328.3 414.9L356.7 443.3C362.9 449.6 373.1 449.6 379.3 443.3C385.6 437.1 385.6 426.9 379.3 420.7L350.9 392.3C351.6 389.6 352 386.9 352 384C352 381.1 351.6 378.4 350.9 375.7L379.3 347.3C385.6 341.1 385.6 330.9 379.3 324.7C373.1 318.4 362.9 318.4 356.7 324.7L328.3 353.1C325.6 352.4 322.9 352 320 352H288V304C288 295.2 280.8 288 272 288C263.2 288 255.1 295.2 255.1 304V352H191.1V304C191.1 295.2 184.8 288 175.1 288C167.2 288 159.1 295.2 159.1 304V351.1C132.2 348.1 106.8 337.1 86.12 320.5L107.3 299.3C113.6 293.1 113.6 282.9 107.3 276.7C101.1 270.4 90.93 270.4 84.69 276.7L63.49 297.9C46.92 277.2 35.95 251.8 32.88 224H79.1C88.84 224 95.1 216.8 95.1 208C95.1 199.2 88.84 192 79.1 192H32.88C35.95 164.2 46.92 138.8 63.49 118.1L84.69 139.3C90.93 145.6 101.1 145.6 107.3 139.3C113.6 133.1 113.6 122.9 107.3 116.7L86.12 95.49C106.8 78.92 132.2 67.95 159.1 64.88V112C159.1 120.8 167.2 128 175.1 128C184.8 128 191.1 120.8 191.1 112V63.1H255.1V112C255.1 120.8 263.2 128 272 128C280.8 128 288 120.8 288 112V63.1L311.2 40.77C335.6 16.42 372.8 10.39 403.6 25.79L403.6 25.79zM368 96C376.8 96 384 88.84 384 80C384 71.16 376.8 64 368 64C359.2 64 352 71.16 352 80C352 88.84 359.2 96 368 96zM368 128C359.2 128 352 135.2 352 144C352 152.8 359.2 160 368 160C376.8 160 384 152.8 384 144C384 135.2 376.8 128 368 128V128z"/><path className="fa-secondary" d="M192 64V112C192 120.8 184.8 128 176 128C167.2 128 160 120.8 160 112V64.88C165.3 64.3 170.6 64 176 64H192zM288 64V112C288 120.8 280.8 128 272 128C263.2 128 256 120.8 256 112V64H288zM81.22 420.9C86.05 419.3 90.99 418.1 96 417.3V464C96 472.8 88.84 480 80 480C71.16 480 64 472.8 64 464V426.7L81.22 420.9zM192 416V464C192 472.8 184.8 480 176 480C167.2 480 160 472.8 160 464V416H192zM288 416V464C288 472.8 280.8 480 272 480C263.2 480 256 472.8 256 464V416H288zM350.9 392.3L379.3 420.7C385.6 426.9 385.6 437.1 379.3 443.3C373.1 449.6 362.9 449.6 356.7 443.3L328.3 414.9C339.3 411.1 347.1 403.3 350.9 392.3zM328.3 353.1L356.7 324.7C362.9 318.4 373.1 318.4 379.3 324.7C385.6 330.9 385.6 341.1 379.3 347.3L350.9 375.7C347.1 364.7 339.3 356 328.3 353.1zM256 352V304C256 295.2 263.2 288 272 288C280.8 288 288 295.2 288 304V352H256zM176 352C170.6 352 165.3 351.7 160 351.1V304C160 295.2 167.2 288 176 288C184.8 288 192 295.2 192 304V352H176zM63.49 297.9L84.69 276.7C90.93 270.4 101.1 270.4 107.3 276.7C113.6 282.9 113.6 293.1 107.3 299.3L86.12 320.5C77.76 313.8 70.17 306.2 63.49 297.9zM32 208C32 202.6 32.3 197.3 32.88 192H80C88.84 192 96 199.2 96 208C96 216.8 88.84 224 80 224H32.88C32.3 218.7 32 213.4 32 208zM107.3 116.7C113.6 122.9 113.6 133.1 107.3 139.3C101.1 145.6 90.93 145.6 84.69 139.3L63.49 118.1C70.17 109.8 77.76 102.2 86.12 95.49L107.3 116.7z"/>
</>],
['light',<>
	<path d="M384 80C384 88.84 376.8 96 368 96C359.2 96 352 88.84 352 80C352 71.16 359.2 64 368 64C376.8 64 384 71.16 384 80zM352 144C352 135.2 359.2 128 368 128C376.8 128 384 135.2 384 144C384 152.8 376.8 160 368 160C359.2 160 352 152.8 352 144zM176 512H175.9H115.2C102.5 512 89.98 509.5 78.28 504.6L14.77 478.2C5.826 474.4 0 465.7 0 456C0 446.3 5.826 437.6 14.77 433.8L78.28 407.4C89.98 402.5 102.5 400 115.2 400H256H256.1H344C357.3 400 368 389.3 368 376C368 362.7 357.3 352 344 352H180C98.26 352 32 285.7 32 204C32 122.3 98.26 56 180 56H276.1C297.3 26.13 331.2 8 367.7 8C383.7 8 399.5 11.51 414.1 18.29L468.5 43.7C495 56.08 512 82.72 512 112C512 141.3 495 167.9 468.5 180.3L415.4 205.1C406.7 209.1 397.6 212.1 388.3 213.9C381 215.3 373.6 216 366.2 216H361.7C355.7 216 349.8 215.5 344 214.5C336 213.2 328.3 211 320.9 208C301.3 199.1 284.1 186.2 272 168H180C160.1 168 144 184.1 144 204C144 223.9 160.1 240 180 240H344C349.1 240 355.9 240.4 361.7 241.1C363.2 241.3 364.7 241.6 366.2 241.8C373 242.9 379.7 244.6 386.1 246.7C440.6 264.4 480 315.6 480 376C480 451.1 419.1 512 344 512H176zM293.9 88H180C115.9 88 64 139.9 64 204C64 268.1 115.9 320 180 320H344C374.9 320 400 345.1 400 376C400 406.9 374.9 432 344 432H256.1H256H115.2C106.8 432 98.38 433.7 90.58 436.9L44.8 456L90.58 475.1C98.38 478.3 106.8 480 115.2 480H175.9H344C401.4 480 448 433.4 448 376C448 318.6 401.4 272 344 272H180C142.4 272 112 241.6 112 204C112 166.4 142.4 136 180 136H289.1L298.6 150.2C312.7 171.3 336.3 184 361.7 184H366.2C378.5 184 390.7 181.3 401.8 176.1L454.1 151.3C470.2 144.2 480 128.9 480 112C480 95.15 470.2 79.82 454.1 72.7L400.5 47.29C390.2 42.49 379 40 367.7 40C341.8 40 317.8 52.84 303.4 73.99L293.9 88z"/>
</>],
['regular',<>
	<path d="M384 88C384 96.84 376.8 104 368 104C359.2 104 352 96.84 352 88C352 79.16 359.2 72 368 72C376.8 72 384 79.16 384 88zM352 136C352 127.2 359.2 120 368 120C376.8 120 384 127.2 384 136C384 144.8 376.8 152 368 152C359.2 152 352 144.8 352 136zM175.1 512H175.9H118.7C103.8 512 89.06 508.5 75.73 501.9L14.31 471.2C5.54 466.8 0 457.8 0 448C0 438.2 5.54 429.2 14.31 424.8L75.73 394.1C82.24 390.9 89.08 388.4 96.1 386.7C103.5 384.9 111 384 118.7 384H256H256.1H320C328.8 384 336 376.8 336 368C336 359.2 328.8 352 320 352H168C150.7 352 134.1 349.1 118.7 343.8C112.9 341.9 107.4 339.6 102 336.1C51.11 312.4 15.1 260.3 15.1 200C15.1 116.1 84.05 48 167.1 48H282.9C303.6 22.92 334.6 8 367.7 8C383.7 8 399.5 11.51 414.1 18.29L468.5 43.7C495 56.08 512 82.72 512 112C512 141.3 495 167.9 468.5 180.3L414.1 205.7C399.5 212.5 383.7 216 367.7 216C350.9 216 334.6 212.2 320 205.1C305.8 198.3 293.1 188.4 282.9 176H167.1C154.7 176 143.1 186.7 143.1 200C143.1 213.3 154.7 224 167.1 224H320C336.7 224 352.7 226.8 367.7 232.1C384.1 237.9 399.3 246.5 412.4 257.5C443.9 283.9 464 323.6 464 368C464 447.5 399.5 512 320 512H175.1zM305.6 96H167.1C110.6 96 63.1 142.6 63.1 200C63.1 257.4 110.6 304 167.1 304H320C355.3 304 384 332.7 384 368C384 403.3 355.3 432 320 432H118.7C111.2 432 103.9 433.7 97.2 437.1L75.33 448L97.2 458.9C103.9 462.3 111.2 464 118.7 464H175.9H175.1H320C373 464 416 421 416 368C416 314.1 373 272 320 272H167.1C128.2 272 95.1 239.8 95.1 200C95.1 160.2 128.2 128 167.1 128H305.6L320 145.5C331.6 159.6 349 168 367.7 168C376.7 168 385.6 166 393.8 162.2L448.2 136.8C457.8 132.3 464 122.6 464 112C464 101.4 457.8 91.7 448.2 87.2L393.8 61.79C385.6 57.98 376.7 56 367.7 56C349 56 331.6 64.39 320 78.49L305.6 96z"/>
</>],
['solid',<>
	<path d="M512 111.1C512 131.6 500.9 149.5 483.4 158.3L403.6 198.2C372.8 213.6 335.6 207.6 311.2 183.2L288 159.1H176C149.5 159.1 128 181.5 128 207.1C128 234.5 149.5 255.1 176 255.1H320C390.7 255.1 448 313.3 448 384C448 454.7 390.7 512 320 512H176L175.9 512H111.6C101.3 512 91.01 510.3 81.22 507.1L15.18 485.1C6.114 482 0 473.6 0 464C0 454.4 6.114 445.1 15.18 442.9L81.22 420.9C91.01 417.7 101.3 416 111.6 416H256L256.1 416H320C337.7 416 352 401.7 352 384C352 366.3 337.7 352 320 352H176C96.47 352 32 287.5 32 207.1C32 128.5 96.47 63.1 176 63.1H288L311.2 40.77C335.6 16.42 372.8 10.39 403.6 25.79L483.4 65.69C500.9 74.46 512 92.39 512 111.1V111.1zM368 63.1C359.2 63.1 352 71.16 352 79.1C352 88.84 359.2 95.1 368 95.1C376.8 95.1 384 88.84 384 79.1C384 71.16 376.8 63.1 368 63.1zM368 159.1C376.8 159.1 384 152.8 384 143.1C384 135.2 376.8 127.1 368 127.1C359.2 127.1 352 135.2 352 143.1C352 152.8 359.2 159.1 368 159.1z"/>
</>],
['thin',<>
	<path d="M384 80C384 88.84 376.8 96 368 96C359.2 96 352 88.84 352 80C352 71.16 359.2 64 368 64C376.8 64 384 71.16 384 80zM352 144C352 135.2 359.2 128 368 128C376.8 128 384 135.2 384 144C384 152.8 376.8 160 368 160C359.2 160 352 152.8 352 144zM176 512H175.9H115.2C102.5 512 89.98 509.5 78.28 504.6L7.385 475.1C2.913 473.2 0 468.8 0 464C0 459.2 2.913 454.8 7.385 452.9L78.28 423.4C89.98 418.5 102.5 416 115.2 416H256H256.1H348C367.9 416 384 399.9 384 380C384 360.1 367.9 344 348 344H172C94.68 344 32 281.3 32 204C32 126.7 94.68 64 172 64H292.6L294.2 61.22C310.1 33.26 339.9 16 372.1 16C385.2 16 398.2 18.87 410 24.42L475.8 55.08C497.9 65.4 512 87.6 512 112C512 136.4 497.9 158.6 475.8 168.9L410 199.6C398.2 205.1 385.2 208 372.1 208C339.9 208 310.1 190.7 294.2 162.8L292.6 160H172C147.7 160 128 179.7 128 204C128 228.3 147.7 248 172 248H348C420.9 248 480 307.1 480 380C480 452.9 420.9 512 348 512L176 512zM301.9 80H172C103.5 80 48 135.5 48 204C48 272.5 103.5 328 172 328H348C376.7 328 400 351.3 400 380C400 408.7 376.7 432 348 432H256.1H256H115.2C104.6 432 94.18 434.1 84.43 438.2L22.4 464L84.43 489.8C94.18 493.9 104.6 496 115.2 496H175.9H176H348C412.1 496 464 444.1 464 380C464 315.9 412.1 264 348 264H172C138.9 264 112 237.1 112 204C112 170.9 138.9 144 172 144H301.9L308 154.8C321.2 177.8 345.6 192 372.1 192C382.9 192 393.5 189.6 403.3 185.1L468.1 154.4C485.5 146.7 496 130.2 496 111.1C496 93.81 485.5 77.27 468.1 69.58L403.3 38.92C393.5 34.36 382.9 31.1 372.1 31.1C345.6 31.1 321.2 46.18 308 69.16L301.9 80z"/>
</>],

]);

const Snake: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Snake.displayName = "Snake";

export default Snake;