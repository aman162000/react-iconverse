
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M635.3 452.7C638.3 455.7 640 459.8 640 463.1C640 476.7 634.9 488.9 625.9 497.9C616.9 506.9 604.7 511.1 592 511.1H336C323.3 511.1 311.1 506.9 302.1 497.9C293.1 488.9 288 476.7 288 463.1C288 459.8 289.7 455.7 292.7 452.7C295.7 449.7 299.8 447.1 304 447.1H624C628.2 447.1 632.3 449.7 635.3 452.7zM297.4 406.6C291.4 400.6 288 392.5 288 383.1C288 375.5 291.4 367.4 297.4 361.4C303.4 355.4 311.5 351.1 320 351.1H608C616.5 351.1 624.6 355.4 630.6 361.4C636.6 367.4 640 375.5 640 383.1C640 392.5 636.6 400.6 630.6 406.6C624.6 412.6 616.5 415.1 608 415.1H320C311.5 415.1 303.4 412.6 297.4 406.6zM302.8 315.1C297.8 312 293.8 307.6 291.2 302.4C288.6 297.2 287.4 291.3 287.9 285.5C288.3 279.7 290.4 274.1 293.8 269.4C314.1 244.1 340.1 223.9 369.7 210.4C399.2 197 431.6 190.7 464 191.1C496.5 190.7 528.8 197.1 558.3 210.5C587.9 223.9 613.9 244.1 634.3 269.4C637.7 274.1 639.8 279.7 640.2 285.6C640.7 291.4 639.5 297.2 636.9 302.4C634.2 307.7 630.2 312.1 625.3 315.1C620.3 318.2 614.6 319.9 608.7 319.1H319.3C313.4 319.9 307.7 318.2 302.8 315.1H302.8zM532.7 244.7C529.7 247.7 528 251.8 528 255.1C528 259.2 528.9 262.3 530.7 264.9C532.5 267.5 534.1 269.6 537.9 270.8C540.8 271.1 544 272.3 547.1 271.7C550.2 271.1 553.1 269.5 555.3 267.3C557.6 265.1 559.1 262.2 559.7 259.1C560.3 256 559.1 252.8 558.8 249.9C557.6 246.9 555.5 244.5 552.9 242.7C550.3 240.9 547.2 239.1 544 239.1C539.8 239.1 535.7 241.7 532.7 244.7L532.7 244.7zM452.7 228.7C449.7 231.7 448 235.8 448 239.1C448 243.2 448.9 246.3 450.7 248.9C452.5 251.5 454.1 253.6 457.9 254.8C460.8 255.1 464 256.3 467.1 255.7C470.2 255.1 473.1 253.5 475.3 251.3C477.6 249.1 479.1 246.2 479.7 243.1C480.3 240 479.1 236.8 478.8 233.9C477.6 230.9 475.5 228.5 472.9 226.7C470.3 224.9 467.2 223.1 464 223.1C459.8 223.1 455.7 225.7 452.7 228.7V228.7zM372.7 244.7C369.7 247.7 368 251.8 368 255.1C368 259.2 368.9 262.3 370.7 264.9C372.5 267.5 374.1 269.6 377.9 270.8C380.8 271.1 384 272.3 387.1 271.7C390.2 271.1 393.1 269.5 395.3 267.3C397.6 265.1 399.1 262.2 399.7 259.1C400.3 256 399.1 252.8 398.8 249.9C397.6 246.9 395.5 244.5 392.9 242.7C390.3 240.9 387.2 239.1 384 239.1C379.8 239.1 375.7 241.7 372.7 244.7V244.7z"/><path className="fa-secondary" d="M332.1 2.769C337.1 4.591 340.7 7.251 343.7 10.58C346.7 13.9 349 17.82 350.4 22.08C351.8 26.34 352.3 30.84 351.8 35.3L337.5 191C309.6 205.2 285.5 225.8 267.3 251.2C260.7 260.1 256.8 272.4 256.1 284.2C255.5 295.1 258.1 307.8 263.6 318.2C267.2 324.9 271.9 330.1 277.6 336C271.2 341.6 265.1 348.5 262.3 356.2C258.6 363.9 256.5 372.2 256.1 380.7C255.6 389.2 256.9 397.8 259.8 405.8C262.7 413.8 267.2 421.1 272.1 427.4C267.7 431.9 263.4 437.5 260.5 443.8C257.5 450.1 256 457 255.1 464C256 481.4 261.8 498.2 272.4 512H73.24C65.32 512 57.66 509.1 51.75 503.9C45.83 498.6 42.09 491.3 41.24 483.4L-.0037 35.42C-.486 30.94-.0165 26.41 1.374 22.13C2.765 17.84 5.046 13.89 8.066 10.55C11.09 7.205 14.78 4.537 18.9 2.719C23.03 .901 27.49-.0254 31.1 .0005H319.1C324.5 .0037 328.9 .9468 332.1 2.769L332.1 2.769zM284.8 64H67.2L75.93 160H276.1L284.8 64z"/>
</>],
['light',<>
	<path d="M235.3 484.7C238.3 487.7 239.1 491.8 239.1 496C239.1 500.2 238.3 504.3 235.3 507.3C232.3 510.3 228.2 512 223.1 512H82.65C71.4 511.9 60.57 507.7 52.26 500.1C43.96 492.5 38.78 482.1 37.73 470.8L.3493 50.62C-.3326 44.3 .3132 37.9 2.245 31.84C4.177 25.78 7.353 20.18 11.57 15.42C15.79 10.65 20.95 6.821 26.73 4.166C32.52 1.511 38.79 .0925 45.15 0H306.8C313.2 .0685 319.5 1.474 325.3 4.125C331.1 6.776 336.3 10.62 340.6 15.39C344.8 20.17 347.1 25.78 349.9 31.87C351.8 37.95 352.5 44.38 351.8 50.72L341.9 145.5C341.3 149.6 339.1 153.3 335.9 155.8C332.6 158.4 328.5 159.6 324.4 159.2C320.3 158.7 316.5 156.8 313.9 153.6C311.2 150.5 309.8 146.5 310 142.3L319.1 47.52C320.2 45.62 320.1 43.69 319.6 41.85C319 40.01 318.1 38.31 316.9 36.85C315.6 35.38 314.1 34.2 312.4 33.36C310.6 32.53 308.8 32.06 306.8 32H45.15C43.23 32.06 41.35 32.53 39.63 33.36C37.9 34.2 36.37 35.38 35.13 36.85C33.9 38.31 32.98 40.01 32.44 41.85C31.9 43.69 31.75 45.62 31.1 47.52L42.11 160H271.1C276.2 160 280.3 161.7 283.3 164.7C286.3 167.7 287.1 171.8 287.1 176C287.1 180.2 286.3 184.3 283.3 187.3C280.3 190.3 276.2 192 271.1 192H44.96L69.57 467.8C69.86 471.1 71.36 474.1 73.78 476.4C76.19 478.6 79.35 479.9 82.65 480H223.1C228.2 480 232.3 481.7 235.3 484.7L235.3 484.7zM516.7 283.3C513.7 280.3 511.1 276.2 511.1 271.1C511.1 268.8 512.9 265.7 514.7 263.1C516.5 260.5 518.1 258.4 521.9 257.2C524.8 256 528 255.7 531.1 256.3C534.2 256.9 537.1 258.4 539.3 260.7C541.5 262.9 543.1 265.8 543.7 268.9C544.3 271.1 543.1 275.2 542.8 278.1C541.6 281 539.5 283.5 536.9 285.3C534.3 287.1 531.2 287.1 527.1 287.1C523.8 287.1 519.7 286.3 516.7 283.3H516.7zM356.7 283.3C353.7 280.3 351.1 276.2 351.1 271.1C351.1 268.8 352.9 265.7 354.7 263.1C356.5 260.5 358.1 258.4 361.9 257.2C364.8 256 368 255.7 371.1 256.3C374.2 256.9 377.1 258.4 379.3 260.7C381.5 262.9 383.1 265.8 383.7 268.9C384.3 271.1 383.1 275.2 382.8 278.1C381.6 281 379.5 283.5 376.9 285.3C374.3 287.1 371.2 287.1 367.1 287.1C363.8 287.1 359.7 286.3 356.7 283.3zM436.7 267.3C433.7 264.3 431.1 260.2 431.1 255.1C431.1 252.8 432.9 249.7 434.7 247.1C436.5 244.5 438.1 242.4 441.9 241.2C444.8 240 448 239.7 451.1 240.3C454.2 240.9 457.1 242.4 459.3 244.7C461.5 246.9 463.1 249.8 463.7 252.9C464.3 255.1 463.1 259.2 462.8 262.1C461.6 265 459.5 267.5 456.9 269.3C454.3 271.1 451.2 271.1 447.1 271.1C443.8 271.1 439.7 270.3 436.7 267.3zM623.1 415.3C624 415.5 624 415.8 623.1 416V460C623.1 473.8 618.5 487 608.7 496.8C598.1 506.5 585.8 511.1 571.1 512H323.1C310.2 511.1 296.1 506.5 287.2 496.8C277.5 487 272 473.8 271.1 460V416C272 415.8 272.1 415.5 272.2 415.3C261.8 404.8 256 390.7 256 376C256 361.3 261.8 347.2 272.2 336.7C272.1 336.5 272 336.2 271.1 336V295.1C272.2 283.5 274.1 271.2 280.1 259.9C285.1 248.5 292.5 238.2 301.6 229.7C342.5 195.1 394.4 176.1 447.1 176.1C501.6 176.1 553.5 195.1 594.4 229.7C603.5 238.2 610.9 248.5 615.9 259.9C621 271.2 623.8 283.5 623.1 295.1V336C624 336.2 624 336.5 623.1 336.7C634.3 347.2 640.1 361.3 639.1 376C640.1 390.7 634.3 404.8 623.1 415.3zM303.1 320.8C306.6 320.3 309.3 320.1 311.1 319.1H583.1C586.7 320.1 589.4 320.3 591.1 320.8V295.1C591.8 287.7 589.8 279.6 586.4 272.1C582.9 264.6 577.1 257.9 571.8 252.4C510.4 191.1 380.1 195.6 324.2 252.4C318 257.9 313.1 264.6 309.6 272.1C306.1 279.6 304.2 287.7 303.1 295.1V320.8zM591.1 431.2C589.4 431.7 586.7 431.9 583.1 432H311.1C309.3 431.9 306.6 431.7 303.1 431.2V460C303.1 465.3 306.1 470.4 309.9 474.1C313.6 477.9 318.7 480 323.1 480H571.1C577.3 480 582.4 477.9 586.1 474.1C589.9 470.4 591.1 465.3 591.1 460V431.2zM600.1 392.1C605.5 388.5 607.1 382.4 607.1 376C607.1 369.6 605.5 363.5 600.1 359C596.5 354.5 590.4 352 583.1 352H311.1C305.6 352 299.5 354.5 295 359C290.5 363.5 287.1 369.6 287.1 376C287.1 382.4 290.5 388.5 295 392.1C299.5 397.5 305.6 400 311.1 400H583.1C590.4 400 596.5 397.5 600.1 392.1z"/>
</>],
['regular',<>
	<path d="M238.3 464C244.1 481.1 254.2 498.2 267.7 511.4C265.7 511.7 263.6 511.9 261.5 512H96.67C80.52 512 64.95 505.1 53.08 495C41.21 484.1 33.92 469 32.67 452.9L.0012 34.46C-.3389 30.06 .2368 25.63 1.692 21.46C3.147 17.29 5.45 13.46 8.456 10.23C11.46 6.989 15.11 4.409 19.16 2.649C23.21 .8888 27.58-.013 32 .0001H320C324.4-.0082 328.7 .8805 332.7 2.611C336.7 4.342 340.4 6.878 343.4 10.06C346.4 13.25 348.7 17.01 350.2 21.13C351.6 25.24 352.3 29.62 352 33.98L342.8 181.6C325.1 189.1 308.3 198.6 292.9 210V208H61.76L80.51 449.2C80.88 453.3 82.76 457 85.77 459.8C88.77 462.5 92.7 464 96.77 464H238.3zM58.02 160H295.9L302.1 48H49.31L58.02 160zM516.7 275.3C513.7 272.3 512 268.2 512 264C512 260.8 512.9 257.7 514.7 255.1C516.5 252.5 518.1 250.4 521.9 249.2C524.8 248 528 247.7 531.1 248.3C534.2 248.9 537.1 250.4 539.3 252.7C541.6 254.9 543.1 257.8 543.7 260.9C544.3 263.1 543.1 267.2 542.8 270.1C541.6 273 539.5 275.5 536.9 277.3C534.3 279.1 531.2 280 528 280C523.8 280 519.7 278.3 516.7 275.3H516.7zM636.7 391.8C634.5 396.7 631.3 401.2 627.4 404.9C630.4 412.2 631.1 420.1 632 428C631.1 450.3 623.1 471.6 607.4 487.4C591.6 503.1 570.3 511.1 548 512H348C325.7 511.1 304.4 503.1 288.6 487.4C272.9 471.6 264 450.3 264 428C264 420.1 265.6 412.2 268.6 404.9C264.4 400.1 261 396.2 258.9 390.8C256.7 385.5 255.7 379.8 256.1 373.1C256.4 368.2 257.1 362.6 260.7 357.6C263.5 352.5 267.3 348.1 272 344.7C265.1 333.1 263.3 319.1 264.2 306.9C265.1 293.8 269.6 281.2 277.1 270.5C297.6 245.1 323.7 224.8 353.4 211.2C382.1 197.6 415.4 191 448 192C480.6 190.1 513 197.6 542.7 211.2C572.3 224.8 598.4 245.1 618.9 270.5C626.4 281.2 630.9 293.8 631.8 306.9C632.7 319.1 630 333.1 624 344.7C628.9 348.4 632.9 353.1 635.7 358.5C638.4 363.9 639.9 369.9 640 376C640 381.4 638.9 386.8 636.7 391.8H636.7zM316.4 297.1C313.8 301.6 312.3 305.8 311.1 310.2C311.7 314.6 312.6 319 314.6 322.1C316.6 326.9 319.7 330.2 323.5 332.5C327.2 334.8 331.6 336 336 336H559.9C564.3 336 568.6 334.8 572.4 332.5C576.2 330.2 579.3 326.9 581.3 323C583.3 319.1 584.2 314.7 583.9 310.3C583.6 305.9 582.2 301.6 579.6 297.1C563.6 278.9 543.4 263.8 520.5 253.7C497.7 243.7 472.9 238.1 448 240C423.1 238.1 398.3 243.7 375.5 253.7C352.7 263.8 332.5 278.9 316.5 297.1L316.4 297.1zM573.5 453.5C580.2 446.7 584 437.5 584 428C584 424.8 582.7 421.8 580.5 419.5C578.2 417.3 575.2 416 572 416H324C320.8 416 317.8 417.3 315.5 419.5C313.3 421.8 312 424.8 312 428C312 437.5 315.8 446.7 322.5 453.5C329.3 460.2 338.5 464 348 464H548C557.5 464 566.7 460.2 573.5 453.5zM436.7 259.3C433.7 256.3 432 252.2 432 248C432 244.8 432.9 241.7 434.7 239.1C436.5 236.5 438.1 234.4 441.9 233.2C444.8 232 448 231.7 451.1 232.3C454.2 232.9 457.1 234.4 459.3 236.7C461.6 238.9 463.1 241.8 463.7 244.9C464.3 247.1 463.1 251.2 462.8 254.1C461.6 257 459.5 259.5 456.9 261.3C454.3 263.1 451.2 264 448 264C443.8 264 439.7 262.3 436.7 259.3zM356.7 275.3C353.7 272.3 352 268.2 352 264C352 260.8 352.9 257.7 354.7 255.1C356.5 252.5 358.1 250.4 361.9 249.2C364.8 248 368 247.7 371.1 248.3C374.2 248.9 377.1 250.4 379.3 252.7C381.6 254.9 383.1 257.8 383.7 260.9C384.3 263.1 383.1 267.2 382.8 270.1C381.6 273 379.5 275.5 376.9 277.3C374.3 279.1 371.2 280 368 280C363.8 280 359.7 278.3 356.7 275.3z"/>
</>],
['solid',<>
	<path d="M630.6 361.4C636.6 367.4 639.1 375.5 639.1 384C639.1 392.5 636.6 400.6 630.6 406.6C624.6 412.6 616.5 416 607.1 416H319.1C311.5 416 303.4 412.6 297.4 406.6C291.4 400.6 287.1 392.5 287.1 384C287.1 375.5 291.4 367.4 297.4 361.4C303.4 355.4 311.5 352 319.1 352H607.1C616.5 352 624.6 355.4 630.6 361.4zM369.7 210.5C399.2 197 431.5 190.7 463.1 192C496.5 190.7 528.8 197.1 558.3 210.5C587.9 223.9 613.9 244.1 634.3 269.4C637.7 274.1 639.8 279.7 640.2 285.6C640.7 291.4 639.5 297.2 636.9 302.4C634.2 307.7 630.2 312.1 625.3 315.2C620.3 318.2 614.6 319.9 608.7 320H319.3C313.4 319.9 307.7 318.2 302.8 315.1C297.8 312 293.8 307.6 291.2 302.4C288.6 297.2 287.4 291.4 287.9 285.5C288.3 279.7 290.4 274.1 293.8 269.4C314.1 244.1 340.1 223.9 369.7 210.5H369.7zM532.7 244.7C529.7 247.7 527.1 251.8 527.1 256C527.1 259.2 528.9 262.3 530.7 264.9C532.5 267.5 534.1 269.6 537.9 270.8C540.8 271.1 544 272.3 547.1 271.7C550.2 271.1 553.1 269.6 555.3 267.3C557.5 265.1 559.1 262.2 559.7 259.1C560.3 256 559.1 252.8 558.8 249.9C557.6 246.1 555.5 244.5 552.9 242.7C550.3 240.9 547.2 240 543.1 240C539.8 240 535.7 241.7 532.7 244.7L532.7 244.7zM452.7 228.7C449.7 231.7 447.1 235.8 447.1 240C447.1 243.2 448.9 246.3 450.7 248.9C452.5 251.5 454.1 253.6 457.9 254.8C460.8 255.1 464 256.3 467.1 255.7C470.2 255.1 473.1 253.6 475.3 251.3C477.5 249.1 479.1 246.2 479.7 243.1C480.3 240 479.1 236.8 478.8 233.9C477.6 230.1 475.5 228.5 472.9 226.7C470.3 224.9 467.2 224 463.1 224C459.8 224 455.7 225.7 452.7 228.7V228.7zM372.7 244.7C369.7 247.7 367.1 251.8 367.1 256C367.1 259.2 368.9 262.3 370.7 264.9C372.5 267.5 374.1 269.6 377.9 270.8C380.8 271.1 384 272.3 387.1 271.7C390.2 271.1 393.1 269.6 395.3 267.3C397.5 265.1 399.1 262.2 399.7 259.1C400.3 256 399.1 252.8 398.8 249.9C397.6 246.1 395.5 244.5 392.9 242.7C390.3 240.9 387.2 240 383.1 240C379.8 240 375.7 241.7 372.7 244.7V244.7zM635.3 452.7C638.3 455.7 639.1 459.8 639.1 464C639.1 476.7 634.9 488.9 625.9 497.9C616.9 506.9 604.7 512 591.1 512H335.1C323.3 512 311.1 506.9 302.1 497.9C293.1 488.9 287.1 476.7 287.1 464C287.1 459.8 289.7 455.7 292.7 452.7C295.7 449.7 299.8 448 303.1 448H623.1C628.2 448 632.3 449.7 635.3 452.7zM267.3 251.2C260.7 260.1 256.8 272.4 256.1 284.2C255.5 295.1 258.1 307.8 263.6 318.2C267.2 324.9 271.9 330.1 277.6 336C271.2 341.6 265.1 348.5 262.3 356.2C258.6 363.9 256.5 372.2 256.1 380.7C255.6 389.2 256.9 397.8 259.8 405.8C262.7 413.8 267.2 421.1 272.1 427.4C267.7 431.9 263.4 437.5 260.5 443.8C257.5 450.1 256 457 255.1 464C256 481.4 261.8 498.2 272.4 512H73.24C65.32 512 57.66 509.1 51.75 503.9C45.83 498.6 42.09 491.3 41.24 483.4L-.0037 35.42C-.486 30.94-.0165 26.41 1.374 22.13C2.765 17.84 5.046 13.89 8.066 10.55C11.09 7.205 14.78 4.537 18.9 2.719C23.03 .901 27.49-.0254 31.1 .0005H319.1C324.5 .0018 328.9 .948 333 2.778C337.1 4.608 340.8 7.28 343.8 10.62C346.8 13.96 349.1 17.9 350.4 22.17C351.8 26.44 352.3 30.96 351.8 35.42L337.5 191.1C309.6 205.2 285.5 225.8 267.3 251.2H267.3zM276.1 160L284.8 64H67.2L75.93 160H276.1z"/>
</>],
['thin',<>
	<path d="M633.6 360.1C637.8 367.4 639.1 375.6 639.1 384C639.1 392.4 637.8 400.6 633.6 407.9C629.3 415.2 623.3 421.2 616 425.3V468C615.1 479.7 611.3 490.8 603.1 499.1C594.8 507.3 583.7 511.1 572 512H324C312.3 511.1 301.2 507.3 292.9 499.1C284.7 490.8 280 479.7 279.1 468V425.3C272.7 421.2 266.7 415.2 262.4 407.9C258.2 400.6 256 392.4 256 384C256 375.6 258.2 367.4 262.4 360.1C266.7 352.8 272.7 346.8 279.1 342.7V303.1C280.2 292.6 282.8 281.3 287.4 270.9C292.1 260.5 298.8 251.2 307.2 243.4C346.1 209.6 396.1 191.3 447.6 191.1C447.9 191.1 448.1 191.1 448.4 191.1C499.9 191.3 549.9 209.6 588.8 243.4C597.2 251.2 603.9 260.5 608.5 270.9C613.2 281.3 615.8 292.6 616 303.1V342.7C623.3 346.8 629.3 352.8 633.6 360.1zM295.9 336.8C298.5 336.3 301.2 336 303.9 336H591.9C594.6 336 597.2 336.3 599.9 336.8V303.1C599.7 294.7 597.6 285.5 593.7 277.1C589.9 268.6 584.3 260.1 577.5 254.7C541.6 223.9 495.7 207.2 448.4 207.1C448.1 208 447.9 208 447.7 207.1C400.3 207.2 354.3 223.8 318.4 254.7C311.5 260.1 305.1 268.6 302.1 277.1C298.3 285.5 296.2 294.7 295.1 303.1L295.9 336.8zM600 431.2C597.4 431.7 594.7 431.1 592 432H303.1C301.3 431.1 298.6 431.7 295.1 431.2V468C296 475.4 298.1 482.5 304.2 487.8C309.5 493 316.6 495.1 324 496H572C579.4 495.1 586.5 493 591.8 487.8C597 482.5 599.1 475.4 600 468V431.2zM614.6 406.6C620.6 400.6 624 392.5 624 384C624 375.5 620.6 367.4 614.6 361.4C608.6 355.4 600.5 352 592 352H303.1C295.5 352 287.4 355.4 281.4 361.4C275.4 367.4 271.1 375.5 271.1 384C271.1 392.5 275.4 400.6 281.4 406.6C287.4 412.6 295.5 416 303.1 416H592C600.5 416 608.6 412.6 614.6 406.6zM527.4 287.1C525.9 286.5 524.6 285.6 523.5 284.5C522.4 283.4 521.5 282.1 520.9 280.6C520.3 279.1 519.1 277.6 520 276C520 273.6 520.7 271.3 522 269.3C523.3 267.4 525.2 265.8 527.4 264.9C529.6 264 532 263.8 534.3 264.2C536.7 264.7 538.8 265.8 540.5 267.5C542.2 269.2 543.3 271.3 543.8 273.7C544.2 275.1 543.1 278.4 543.1 280.6C542.2 282.8 540.6 284.7 538.7 285.1C536.7 287.3 534.4 288 532 288C530.4 288 528.9 287.7 527.4 287.1H527.4zM359.4 287.1C357.9 286.5 356.6 285.6 355.5 284.5C354.4 283.4 353.5 282.1 352.9 280.6C352.3 279.1 351.1 277.6 352 276C352 273.6 352.7 271.3 354 269.3C355.3 267.4 357.2 265.8 359.4 264.9C361.6 264 364 263.8 366.3 264.2C368.7 264.7 370.8 265.8 372.5 267.5C374.2 269.2 375.3 271.3 375.8 273.7C376.2 275.1 375.1 278.4 375.1 280.6C374.2 282.8 372.6 284.7 370.7 285.1C368.7 287.3 366.4 288 364 288C362.4 288 360.9 287.7 359.4 287.1zM443.4 267.1C441.9 266.5 440.6 265.6 439.5 264.5C438.4 263.4 437.5 262.1 436.9 260.6C436.3 259.1 435.1 257.6 436 256C436 253.6 436.7 251.3 438 249.3C439.3 247.4 441.2 245.8 443.4 244.9C445.6 244 448 243.8 450.3 244.2C452.7 244.7 454.8 245.8 456.5 247.5C458.2 249.2 459.3 251.3 459.8 253.7C460.2 255.1 459.1 258.4 459.1 260.6C458.2 262.8 456.6 264.7 454.7 265.1C452.7 267.3 450.4 267.1 448 267.1C446.4 268 444.9 267.7 443.4 267.1V267.1zM253.7 498.3C255.2 499.8 255.1 501.9 255.1 504C255.1 506.1 255.2 508.2 253.7 509.7C252.2 511.2 250.1 512 247.1 512H63.1C55.84 512 47.99 508.9 42.05 503.3C36.1 497.8 32.5 490.1 31.1 481.1L-.0009 33.98C-.2722 29.62 .3546 25.24 1.841 21.13C3.327 17.01 5.641 13.25 8.64 10.06C11.64 6.878 15.26 4.342 19.28 2.611C23.29 .8801 27.62-.0086 31.1 .0001H319.1C324.4-.0083 328.7 .8804 332.7 2.611C336.7 4.342 340.4 6.878 343.4 10.06C346.4 13.25 348.7 17.01 350.2 21.13C351.6 25.24 352.3 29.62 352 33.98L341.8 177.2C341.5 181.2 339.7 184.1 336.7 187.7C333.7 190.5 329.8 192 325.8 192H27.39L47.1 480.9C48.27 484.9 50.06 488.8 53.03 491.6C55.1 494.4 59.92 495.1 63.1 496H247.1C250.1 496 252.2 496.8 253.7 498.3H253.7zM26.24 175.1H325.8L336 32.86C336.1 30.69 335.8 28.52 335 26.48C334.3 24.43 333.1 22.57 331.6 20.99C330.1 19.41 328.3 18.15 326.3 17.29C324.3 16.44 322.2 15.1 319.1 15.1H31.1C29.8 15.99 27.63 16.44 25.61 17.31C23.6 18.18 21.78 19.46 20.28 21.06C18.78 22.67 17.63 24.56 16.89 26.63C16.15 28.7 15.85 30.9 15.1 33.09L26.24 175.1z"/>
</>],

]);

const BurgerGlass: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BurgerGlass.displayName = "BurgerGlass";

export default BurgerGlass;
