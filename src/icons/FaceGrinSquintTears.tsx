
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M497.8 85.18C483 99.97 432.2 108.8 409.6 111.9C403.1 112.8 399.2 108 400.1 102.4C403.3 79.94 412 28.97 426.8 14.18C446-5.046 477.5-4.646 497.1 14.92C516.6 34.49 517 65.95 497.8 85.18H497.8zM87.1 285.1C80.76 278.7 83.46 267.9 92.05 265.3L189.5 235.7C201.1 232.1 211.1 242.1 208.5 254.6L178.8 352.1C176.2 360.7 165.4 363.4 159 357C157.1 355 155.8 352.5 155.6 349.7L150.5 293.6L94.43 288.5C91.66 288.3 89.07 287.1 87.1 285.1V285.1zM265.3 92.05C267.9 83.46 278.7 80.76 285.1 87.1C287.1 89.07 288.3 91.66 288.5 94.43L293.6 150.5L349.7 155.6C352.5 155.8 355 157.1 357 159C363.4 165.4 360.7 176.2 352.1 178.8L254.6 208.5C242.1 211.1 232.1 201.1 235.7 189.5L265.3 92.05zM14.18 426.8C28.97 412 79.85 403.2 102.4 400.1C108 399.2 112.8 403.1 111.9 409.6C108.7 432.1 99.97 483 85.18 497.8C65.95 517 34.49 516.6 14.92 497.1C-4.645 477.5-5.046 446 14.18 426.8H14.18z"/><path className="fa-secondary" d="M382.2 33.17C380.6 37.96 379.3 42.81 378.1 47.52C373.3 66.46 370.1 86.05 368.4 97.79C364.5 124.6 387.4 147.5 414.1 143.6C426 141.9 445.6 138.8 464.5 133.9C469.2 132.7 474.1 131.4 478.8 129.9C534.2 227.5 520.2 353.8 437 437C353.8 520.3 227.5 534.2 129.8 478.8C131.3 474 132.7 469.2 133.9 464.5C138.7 445.5 141.9 425.1 143.6 414.2C147.5 387.4 124.6 364.5 97.89 368.4C85.97 370.1 66.39 373.2 47.46 378.1C42.76 379.3 37.93 380.6 33.15 382.1C-22.19 284.5-8.245 158.2 74.98 74.98C158.2-8.253 284.5-22.19 382.2 33.17V33.17zM416.4 202.3C411.6 190.4 395.6 191.4 389.6 202.7C370.1 239.4 343.3 275.9 309.8 309.4C276.3 342.9 239.8 369.7 203.1 389.2C191.8 395.2 190.8 411.2 202.7 416C262.1 440.2 332.6 428.3 380.7 380.3C428.7 332.2 440.6 261.7 416.4 202.3H416.4zM94.43 288.5L150.5 293.6L155.6 349.7C155.8 352.5 157.1 355 159 357C165.4 363.4 176.2 360.7 178.8 352.1L208.5 254.6C211.1 242.1 201.1 232.1 189.5 235.7L92.05 265.3C83.46 267.9 80.76 278.7 87.1 285.1C89.07 287.1 91.66 288.3 94.43 288.5V288.5zM235.7 189.5C232.1 201.1 242.1 211.1 254.6 208.5L352.1 178.8C360.7 176.2 363.4 165.4 357 159C355 157.1 352.5 155.8 349.7 155.6L293.6 150.5L288.5 94.43C288.3 91.66 287.1 89.07 285.1 87.1C278.7 80.76 267.9 83.46 265.3 92.05L235.7 189.5z"/>
</>],
['light',<>
	<path d="M414.7 16.2C436.6-5.767 472.6-5.309 494.9 17.06C517.3 39.42 517.8 75.38 495.8 97.35C478.9 114.2 420.7 124.3 394.9 127.9C388.5 128.9 383.1 123.5 384.1 117.1C387.8 91.36 397.8 33.1 414.7 16.2V16.2zM420.1 91.08C427.5 89.78 434.2 88.29 440.8 86.62C449.9 84.28 458 81.75 464.4 79.14C470.1 76.79 472.6 75.12 473.1 74.76C473.2 74.67 473.2 74.66 473.2 74.72C482.2 65.72 482.7 50.04 472.3 39.68C461.1 29.33 446.3 29.84 437.3 38.83C437.4 38.76 437.3 38.79 437.2 38.91C436.9 39.45 435.2 41.88 432.9 47.59C430.3 53.95 427.8 62.07 425.4 71.23C423.8 77.8 422.3 84.55 420.1 91.08H420.1zM50.63 345.6C54.17 353.7 50.47 363.1 42.38 366.7C34.28 370.2 24.85 366.5 21.31 358.4C7.598 327 0 292.4 0 256C0 114.6 114.6 0 256 0C291.8 0 325.9 7.364 356.9 20.67C365.1 24.16 368.8 33.57 365.3 41.69C361.8 49.81 352.4 53.56 344.3 50.08C317.2 38.45 287.4 32 256 32C132.3 32 32 132.3 32 256C32 287.9 38.65 318.2 50.63 345.6V345.6zM512 256C512 397.4 397.4 512 256 512C219.1 512 183.9 504.2 152.1 490C144.1 486.5 140.4 477 144 468.9C147.6 460.9 157.1 457.2 165.1 460.8C192.9 473.1 223.6 480 256 480C379.7 480 480 379.7 480 256C480 224.1 473.3 193.8 461.4 166.4C457.8 158.3 461.5 148.9 469.6 145.3C477.7 141.8 487.2 145.5 490.7 153.6C504.4 184.1 512 219.6 512 256V256zM369.3 369.2C324.1 414.4 258.4 426.2 202.8 404.7C190.8 400 191.7 384 202.1 377.9C237.3 359.4 271.4 334.1 302.8 302.7C334.2 271.3 359.5 237.2 377.1 202.9C384.1 191.6 400.1 190.8 404.7 202.7C426.3 258.3 414.4 324.1 369.3 369.2zM255.1 383.1C288.6 383.8 321.6 371.6 346.6 346.6C371.7 321.5 383.9 288.5 383.1 255.9C366.8 279.9 347.5 303.3 325.4 325.4C303.4 347.4 279.1 366.7 255.1 383.1zM114.9 263.7L182.8 241.1C188.5 239.2 194.9 240.7 199.2 244.9C203.5 249.2 204.1 255.6 203 261.3L180.4 329.2C177.6 337.6 168.6 342.1 160.2 339.3C151.8 336.5 147.3 327.5 150 319.1L162.6 281.6L125 294.1C116.6 296.9 107.6 292.3 104.8 283.9C101.1 275.6 106.5 266.5 114.9 263.7L114.9 263.7zM281.6 162.6L319.1 150C327.5 147.3 336.5 151.8 339.3 160.2C342.1 168.6 337.6 177.6 329.2 180.4L261.3 203C255.6 204.1 249.2 203.5 244.9 199.2C240.7 194.9 239.2 188.5 241.1 182.8L263.7 114.9C266.5 106.5 275.6 101.1 283.9 104.8C292.3 107.6 296.9 116.6 294.1 125L281.6 162.6zM117.1 384.1C123.5 383.1 128.9 388.5 127.9 394.9C124.2 420.6 114.2 478.9 97.34 495.8C75.38 517.8 39.42 517.3 17.06 494.9C-5.309 472.6-5.767 436.6 16.2 414.7C33.1 397.8 91.25 387.7 117.1 384.1L117.1 384.1zM47.61 432.9C41.87 435.2 39.44 436.9 38.91 437.2C38.79 437.3 38.77 437.3 38.83 437.3C29.84 446.3 29.33 461.1 39.68 472.3C50.04 482.7 65.72 482.2 74.72 473.2C74.65 473.2 74.67 473.2 74.75 473.1C75.12 472.5 76.78 470.1 79.11 464.4C81.72 458 84.24 449.9 86.57 440.8C88.24 434.2 89.73 427.4 91.03 420.9C84.51 422.2 77.77 423.7 71.21 425.4C62.07 427.7 53.97 430.2 47.61 432.9L47.61 432.9z"/>
</>],
['regular',<>
	<path d="M426.8 14.18C446-5.046 477.5-4.646 497.1 14.92C516.6 34.49 517 65.95 497.8 85.18C483 99.97 432.2 108.8 409.6 111.9C403.1 112.8 399.2 108 400.1 102.4C403.3 79.94 412 28.97 426.8 14.18H426.8zM74.98 74.98C158.2-8.253 284.5-22.19 382.2 33.17C380.6 37.96 379.3 42.81 378.1 47.52C375 59.67 372.6 72.08 370.8 82.52C290.1 28.93 180.1 37.74 108.9 108.9C37.75 180.1 28.94 290 82.49 370.8C72.01 372.6 59.6 374.1 47.46 378.1C42.76 379.3 37.93 380.6 33.15 382.1C-22.19 284.5-8.245 158.2 74.98 74.98V74.98zM478.8 129.9C534.2 227.5 520.2 353.8 437 437C353.8 520.3 227.5 534.2 129.8 478.8C131.3 474 132.7 469.2 133.9 464.5C136.1 452.3 139.4 439.9 141.2 429.5C221.9 483.1 331.9 474.3 403.1 403.1C474.3 331.9 483.1 221.1 429.5 141.2C439.1 139.4 452.4 137 464.5 133.9C469.2 132.7 474.1 131.4 478.8 129.9L478.8 129.9zM359.2 226.9C369.3 210.6 393 210 397 228.8C406.6 273.1 393.4 322.3 357.8 357.9C322.2 393.5 273 406.7 228.6 397.1C209.9 393.1 210.5 369.4 226.8 359.3C252 343.6 276.1 323.9 300.4 300.5C323.8 277.1 343.5 252.1 359.2 226.9L359.2 226.9zM189.5 235.7C201.1 232.1 211.1 242.1 208.5 254.6L178.8 352.1C176.2 360.7 165.4 363.4 159 357C157.1 355 155.8 352.5 155.6 349.7L150.5 293.6L94.43 288.5C91.66 288.3 89.07 287.1 87.1 285.1C80.76 278.7 83.46 267.9 92.05 265.3L189.5 235.7zM288.5 94.43L293.6 150.5L349.7 155.6C352.5 155.8 355 157.1 357 159C363.4 165.4 360.7 176.2 352.1 178.8L254.6 208.5C242.1 211.1 232.1 201.1 235.7 189.5L265.3 92.05C267.9 83.46 278.7 80.76 285.1 87.1C287.1 89.07 288.3 91.66 288.5 94.43V94.43zM14.18 426.8C28.97 412 79.85 403.2 102.4 400.1C108 399.2 112.8 403.1 111.9 409.6C108.7 432.1 99.97 483 85.18 497.8C65.95 517 34.5 516.6 14.93 497.1C-4.645 477.5-5.046 446 14.18 426.8H14.18z"/>
</>],
['solid',<>
	<path d="M426.8 14.18C446-5.046 477.5-4.645 497.1 14.92C516.6 34.49 517 65.95 497.8 85.18C490.1 92.02 476.4 97.59 460.5 101.9C444.1 106.3 426.4 109.4 414.1 111.2C412.5 111.5 410.1 111.7 409.6 111.9C403.1 112.8 399.2 108 400.1 102.4C401.7 91.19 404.7 72.82 409.1 55.42C409.4 54.12 409.8 52.84 410.1 51.56C414.4 35.62 419.1 21.02 426.8 14.18L426.8 14.18zM382.2 33.17C380.6 37.96 379.3 42.81 378.1 47.52C373.3 66.46 370.1 86.05 368.4 97.79C364.5 124.6 387.4 147.5 414.1 143.6C426 141.9 445.6 138.8 464.5 133.9C469.2 132.7 474.1 131.4 478.8 129.9C534.2 227.5 520.2 353.8 437 437C353.8 520.3 227.5 534.2 129.8 478.8C131.3 474 132.7 469.2 133.9 464.5C138.7 445.5 141.9 425.1 143.6 414.2C147.5 387.4 124.6 364.5 97.89 368.4C85.97 370.1 66.39 373.2 47.46 378.1C42.76 379.3 37.93 380.6 33.15 382.1C-22.19 284.5-8.245 158.2 74.98 74.98C158.2-8.253 284.5-22.19 382.2 33.17V33.17zM416.4 202.3C411.6 190.4 395.6 191.4 389.6 202.7C370.1 239.4 343.3 275.9 309.8 309.4C276.3 342.9 239.8 369.7 203.1 389.2C191.8 395.2 190.8 411.2 202.7 416C262.1 440.2 332.6 428.3 380.7 380.3C428.7 332.2 440.6 261.7 416.4 202.3H416.4zM94.43 288.5L150.5 293.6L155.6 349.7C155.8 352.5 157.1 355 159 357C165.4 363.4 176.2 360.7 178.8 352.1L208.5 254.6C211.1 242.1 201.1 232.1 189.5 235.7L92.05 265.3C83.46 267.9 80.76 278.7 87.1 285.1C89.07 287.1 91.66 288.3 94.43 288.5V288.5zM235.7 189.5C232.1 201.1 242.1 211.1 254.6 208.5L352.1 178.8C360.7 176.2 363.4 165.4 357 159C355 157.1 352.5 155.8 349.7 155.6L293.6 150.5L288.5 94.43C288.3 91.66 287.1 89.07 285.1 87.1C278.7 80.76 267.9 83.46 265.3 92.05L235.7 189.5zM51.53 410.1C70.01 405.1 90.3 401.8 102.4 400.1C108 399.2 112.8 403.1 111.9 409.6C110.2 421.7 106.9 441.9 101.9 460.4C97.57 476.4 92.02 490.1 85.18 497.8C65.95 517 34.49 516.6 14.92 497.1C-4.645 477.5-5.046 446 14.18 426.8C21.02 419.1 35.6 414.4 51.53 410.1V410.1z"/>
</>],
['thin',<>
	<path d="M495.8 97.34C478.9 114.2 420.7 124.3 394.9 127.9C388.5 128.9 383.1 123.5 384.1 117.1C387.8 91.36 397.8 33.1 414.7 16.2C436.6-5.767 472.6-5.309 494.9 17.06C517.3 39.42 517.8 75.38 495.8 97.35V97.34zM401.2 110.8C413.5 108.9 429.5 106 444.7 102.1C454.3 99.68 463.2 96.94 470.5 93.95C478.1 90.81 482.5 87.98 484.5 86.03C499.1 70.55 499.1 44.73 483.6 28.37C467.3 12.01 441.4 12.03 425.1 27.52C424 29.46 421.2 33.88 418.1 41.53C415.1 48.84 412.4 57.73 409.9 67.28C406 82.5 403.2 98.53 401.2 110.8H401.2zM35.97 351.1C37.74 356 35.89 360.8 31.84 362.5C27.79 364.3 23.07 362.5 21.3 358.4C7.599 327 0 292.4 0 256C0 114.6 114.6 0 256 0C291.8 0 325.1 7.365 356.9 20.67C360.1 22.41 362.9 27.12 361.1 31.18C359.4 35.24 354.7 37.12 350.6 35.37C321.6 22.91 289.6 16 256 16C123.5 16 16 123.5 16 256C16 290.1 23.13 322.6 35.97 351.1zM512 256C512 397.4 397.4 512 256 512C219 512 183.9 504.2 152.1 490.1C148.1 488.3 146.3 483.5 148.1 479.5C149.9 475.5 154.6 473.6 158.6 475.4C188.4 488.6 221.3 496 256 496C388.5 496 496 388.5 496 256C496 221.9 488.9 189.4 476 160C474.3 155.1 476.1 151.2 480.2 149.5C484.2 147.7 488.9 149.5 490.7 153.6C504.4 184.1 512 219.6 512 256L512 256zM380.7 380.3C336.4 424.5 273.1 438.1 216.9 421.1C198.5 415.5 199.7 391.5 216.3 381.8C248.5 363.2 280.3 338.9 309.8 309.4C339.3 279.9 363.6 248.1 382.2 215.9C391.9 199.3 415.9 198.1 421.5 216.5C438.5 272.7 424.9 336 380.7 380.3zM224.3 395.7C220.8 397.7 219.5 400.9 219.5 403.1C219.4 404.1 219.7 404.6 219.8 404.8C219.9 404.9 220.2 405.3 221.5 405.7C272.3 421.1 329.5 408.8 369.3 368.9C409.2 329.1 421.5 271.9 406.1 221.2C405.7 219.8 405.3 219.5 405.2 219.4C405 219.3 404.5 219.1 403.5 219.1C401.3 219.1 398.1 220.4 396.1 223.9C376.7 257.4 351.5 290.3 321.1 320.7C290.7 351.1 257.8 376.3 224.3 395.7L224.3 395.7zM101.3 281.2C99.94 276.1 102.2 272.4 106.4 271L191.2 242.8C194.1 241.8 197.3 242.5 199.4 244.7C201.6 246.8 202.3 249.1 201.4 252.9L173.1 337.7C171.7 341.9 167.2 344.2 162.1 342.8C158.8 341.4 156.5 336.9 157.9 332.7L181.1 262.1L111.5 286.2C107.3 287.6 102.7 285.3 101.3 281.2L101.3 281.2zM271 106.4C272.4 102.2 276.1 99.94 281.2 101.3C285.4 102.7 287.6 107.3 286.2 111.5L262.1 181.1L332.7 157.9C336.9 156.5 341.4 158.8 342.8 162.1C344.2 167.2 341.9 171.7 337.7 173.1L252.9 201.4C249.1 202.3 246.8 201.6 244.7 199.4C242.5 197.3 241.8 194.1 242.8 191.2L271 106.4zM97.34 495.8C75.38 517.8 39.42 517.3 17.06 494.9C-5.309 472.6-5.767 436.6 16.2 414.7C33.1 397.8 91.25 387.7 117.1 384.1C123.5 383.1 128.9 388.5 127.9 394.9C124.2 420.6 114.2 478.9 97.34 495.8L97.34 495.8zM41.54 418.1C33.89 421.2 29.47 424 27.52 425.1C12.03 441.4 12.01 467.3 28.37 483.6C44.73 499.1 70.55 499.1 86.03 484.5C87.97 482.5 90.79 478.1 93.92 470.5C96.91 463.2 99.64 454.3 102.1 444.7C105.1 429.5 108.8 413.5 110.8 401.2C98.51 403.1 82.47 405.1 67.25 409.9C57.71 412.3 48.83 415.1 41.54 418.1z"/>
</>],

]);

const FaceGrinSquintTears: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FaceGrinSquintTears.displayName = "FaceGrinSquintTears";

export default FaceGrinSquintTears;