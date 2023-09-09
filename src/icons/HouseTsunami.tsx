
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M428.8 46.43C440.2 37.88 455.8 37.9 467.2 46.47L562.7 118.4C570.7 124.5 575.4 133.9 575.5 143.9L575.8 287.9C575.8 290.8 575.4 293.6 574.7 296.3C569.8 293.6 564.3 291.5 558.5 290.1C545.4 287.1 531.8 280.3 521.2 271.5C499 252.8 466.9 251.4 443.2 268.1C425.2 280.5 403 288.5 384 288.5C364.4 288.5 343.2 280.8 324.8 268.1C323.3 267 321.7 265.1 320 265V143.1C320 133.9 324.7 124.4 332.8 118.4L428.8 46.43z"/><path className="fa-secondary" d="M184.4 96C207.4 96 229.3 101.1 248.1 110.3C264.1 117.7 271.9 136.8 264.4 152.8C256.1 168.8 237.9 175.7 221.9 168.3C210.6 162.1 197.9 160 184.4 160C135.5 160 95.1 199.5 95.1 248C95.1 287 121.6 320.2 157.1 331.7C167.1 334.5 179.7 336 192 336C219.5 336 247 325.4 269.5 309.9C280.6 302 295.4 302 306.5 309.9C328.1 325.4 356.5 336 384 336C410.9 336 439.4 325.2 461.4 309.9L461.5 309.9C473.4 301.4 489.5 302.1 500.7 311.6C515 323.5 533.2 332.6 551.3 336.8C568.5 340.8 579.2 358.1 575.2 375.3C571.2 392.5 553.1 403.2 536.7 399.2C512.2 393.4 491.9 382.6 478.5 374.2C449.5 389.7 417 400 384 400C352.1 400 323.4 390.1 303.6 381.1C297.7 378.5 292.5 375.8 288 373.4C283.5 375.8 278.3 378.5 272.4 381.1C252.6 390.1 223.1 399.1 192.1 400C192.1 400 192 400 192 400C190.2 400 188.3 399.1 186.5 399.9C185.8 399.1 185.1 400 184.4 400C169.8 400 155.6 397.9 142.2 394.1C53.52 372.1 .0006 291.6 .0006 200C.0006 87.99 95.18 0 209 0C232.8 0 255.8 3.823 277.2 10.9C294 16.44 303.1 34.54 297.6 51.32C292 68.1 273.9 77.21 257.2 71.67C242.2 66.72 225.1 64 209 64C152.6 64 104.9 93.82 80.81 136.5C108 111.4 144.4 96 184.4 96H184.4zM461.4 421.9L461.5 421.9C473.4 413.4 489.5 414.1 500.7 423.6C515 435.5 533.2 444.6 551.3 448.8C568.5 452.8 579.2 470.1 575.2 487.3C571.2 504.5 553.1 515.2 536.7 511.2C512.2 505.4 491.9 494.6 478.5 486.2C449.5 501.7 417 512 384 512C352.1 512 323.4 502.1 303.6 493.1C297.7 490.5 292.5 487.8 288 485.4C283.5 487.8 278.3 490.5 272.4 493.1C252.6 502.1 223.9 512 192 512C158.1 512 126.5 501.7 97.5 486.2C84.12 494.6 63.79 505.4 39.27 511.2C22.06 515.2 4.853 504.5 .8422 487.3C-3.169 470.1 7.532 452.8 24.74 448.8C42.84 444.6 60.96 435.5 75.31 423.6C86.46 414.1 102.6 413.4 114.5 421.9L114.6 421.9C136.7 437.2 165.1 448 192 448C219.5 448 247 437.4 269.5 421.9C280.6 414 295.4 414 306.5 421.9C328.1 437.4 356.5 448 384 448C410.9 448 439.4 437.2 461.4 421.9H461.4z"/>
</>],
['light',<>
	<path d="M40.27 257.1C40.09 254.1 39.1 251 39.1 247.1C39.1 164 108.3 95.1 192.5 95.1C215.5 95.1 237.4 101.1 257.1 110.3C265.1 114 268.5 123.5 264.8 131.5C261 139.5 251.5 143 243.5 139.3C228 132 210.8 127.1 192.5 127.1C125.9 127.1 71.1 181.8 71.1 247.1C71.1 314.1 125.6 367.7 192 367.1C212.9 367.1 233.6 358 250.1 346.8C259.9 340.1 268.2 332.8 276.1 324.9C282.6 318.4 293.3 318.4 299.8 324.9C307.8 332.8 315.1 340.1 325.8 346.8C342.3 358 363.1 367.1 383.1 367.1C404.9 367.1 425.6 358 442.2 346.8C451.9 340.1 460.2 332.8 468.1 324.9C474.6 318.4 485.3 318.4 491.8 324.9C499.8 332.8 507.1 340.1 517.8 346.8C530.6 355.5 545.9 363.4 561.9 366.6C569.6 368.1 576 374.4 576 382.2C576 392 567.1 400.1 558.3 398.4C535.2 394.5 514.7 383.4 499.8 373.2C491.8 367.8 485.1 362.4 479.1 357.1C474.8 362.4 468.1 367.8 460.2 373.2C441.5 385.9 414.3 399.1 383.1 399.1C353.7 399.1 326.4 385.9 307.8 373.2C299.8 367.8 293.1 362.4 287.1 357.1C282.8 362.4 276.1 367.8 268.2 373.2C249.7 385.8 222.9 399.7 193.1 399.1C192.9 399.1 192.7 400 192.5 400C192.2 400 191.9 400 191.5 399.1C191.4 400 191.3 400 191.2 400C74 400 0 309.1 0 200C0 88.77 94.76 0 209.9 0C233.9 0 257.1 3.858 278.6 10.98C287 13.75 291.6 22.8 288.8 31.19C286 39.58 276.1 44.13 268.6 41.36C250.2 35.3 230.5 32 209.9 32C110.8 32 32 107.1 32 200C32 220.1 34.85 239.3 40.27 257.1L40.27 257.1zM352 282.3C342.6 278.9 333.4 274 324.8 268.1C323.3 267 321.7 265.1 320 265V143.1C320 133.9 324.7 124.4 332.8 118.4L428.8 46.43C440.2 37.88 455.8 37.9 467.2 46.47L562.7 118.4C570.7 124.5 575.4 133.9 575.4 143.9L575.8 296.9C570.5 293.9 564.7 291.6 558.5 290.1C553.6 288.1 548.6 287.3 543.8 285.2L543.5 143.1L447.1 72.03L352 143.1V282.3zM250.1 458.8C259.9 452.1 268.2 444.8 276.1 436.9C282.6 430.4 293.3 430.4 299.8 436.9C307.8 444.8 315.1 452.1 325.8 458.8C342.3 470 363.1 479.1 383.1 479.1C404.9 479.1 425.6 470 442.2 458.8C451.9 452.1 460.2 444.8 468.1 436.9C474.6 430.4 485.3 430.4 491.8 436.9C499.8 444.8 507.1 452.1 517.8 458.8C530.6 467.5 545.9 475.4 561.9 478.6C569.6 480.1 576 486.4 576 494.2C576 504 567.1 512.1 558.3 510.4C535.2 506.5 514.7 495.4 499.8 485.2C491.8 479.8 485.1 474.4 479.1 469.1C474.8 474.4 468.1 479.8 460.2 485.2C441.5 497.9 414.3 511.1 383.1 511.1C353.7 511.1 326.4 497.9 307.8 485.2C299.8 479.8 293.1 474.4 287.1 469.1C282.8 474.4 276.1 479.8 268.2 485.2C249.5 497.9 222.3 511.1 191.1 511.1C161.7 511.1 134.4 497.9 115.8 485.2C107.8 479.8 101.1 474.4 95.96 469.1C90.82 474.4 84.12 479.8 76.19 485.2C61.25 495.4 40.81 506.5 17.69 510.4C8.016 512.1 .0006 504 .0006 494.2C.0006 486.4 6.422 480.1 14.13 478.6C30.07 475.4 45.38 467.5 58.16 458.8C67.94 452.1 76.16 444.8 84.07 436.9C90.64 430.4 101.3 430.4 107.8 436.9C115.8 444.8 124.1 452.2 133.8 458.8C150.3 470 171.1 479.1 191.1 479.1C212.9 479.1 233.6 470 250.1 458.8H250.1z"/>
</>],
['regular',<>
	<path d="M184.4 95.1C207.5 95.1 229.4 101.1 249 110.3C261 115.9 266.2 130.2 260.6 142.2C255 154.2 240.7 159.4 228.7 153.8C215.3 147.5 200.3 143.1 184.4 143.1C126.7 143.1 79.1 190.6 79.1 247.1C79.1 295.2 111.6 335.1 154.1 347.8C166.4 350.6 178.7 352 191.6 352C191.7 352 191.9 352 192 352C220.8 351.1 250.5 336.7 272 318.1C281.1 309.1 294.9 309.1 303.1 318.1C325.5 336.7 355.1 352 383.1 352C412.8 352 442.5 336.7 464 318.1C473.1 309.1 486.8 309.1 495.9 318.1C512.9 333.1 535.2 344.9 557.2 349.8C570.1 352.7 578.3 365.5 575.4 378.5C572.5 391.4 559.6 399.5 546.7 396.6C518 390.2 494.4 376.2 479.1 366.2C451.9 385.7 418.6 400 383.1 400C349.4 400 316.1 385.7 287.1 366.2C259.9 385.7 226.6 399.1 192 399.1C191.9 400 191.7 400 191.6 400C189.8 400 188 399.1 186.2 399.9C185.6 399.1 185 400 184.4 400C170.7 400 157.4 398.2 144.8 394.8C54.66 373.1 0 293.2 0 200C0 88.38 94.97 0 209.4 0C233.4 0 256.4 3.84 277.9 10.94C290.5 15.09 297.3 28.67 293.2 41.25C289 53.84 275.5 60.67 262.9 56.52C246.2 51.01 228.2 48 209.4 48C127.8 48 61.96 104.5 49.96 176.4C75.65 128.5 126.3 96 184.4 96V95.1zM324.8 268.1C323.3 267 321.7 265.1 320 265V143.1C320 133.9 324.7 124.4 332.8 118.4L428.8 46.43C440.2 37.88 455.8 37.9 467.2 46.47L562.7 118.4C570.7 124.5 575.4 133.9 575.5 143.9L575.8 296.9C570.5 293.9 564.7 291.6 558.5 290.1C547.1 287.7 537.1 282.8 527.7 276.4L527.5 151.1L447.9 92.05L368 151.1V286.9C353.3 283.1 338.3 277.4 324.8 268.1V268.1zM191.1 464C220.8 464 250.5 448.7 272 430.1C281.1 421.1 294.9 421.1 303.1 430.1C325.5 448.7 355.1 464 383.1 464C412.8 464 442.5 448.7 464 430.1C473.1 421.1 486.8 421.1 495.9 430.1C512.9 445.1 535.2 456.9 557.2 461.8C570.1 464.7 578.3 477.5 575.4 490.5C572.5 503.4 559.6 511.5 546.7 508.6C518 502.2 494.4 488.2 479.1 478.2C451.9 497.7 418.6 512 383.1 512C349.4 512 316.1 497.7 287.1 478.2C259.9 497.7 226.6 512 191.1 512C157.4 512 124.1 497.7 95.98 478.2C81.61 488.2 57.99 502.2 29.31 508.6C16.37 511.5 3.536 503.4 .6342 490.5C-2.267 477.5 5.866 464.7 18.8 461.8C41.01 456.8 62.76 444.1 79.1 430.1C89.09 421.1 102.8 421.1 111.9 430.1C133.5 448.7 163.1 464 191.1 464L191.1 464z"/>
</>],
['solid',<>
	<path d="M184.4 96C207.4 96 229.3 101.1 248.1 110.3C264.1 117.7 271.9 136.8 264.4 152.8C256.1 168.8 237.9 175.7 221.9 168.3C210.6 162.1 197.9 160 184.4 160C135.5 160 95.1 199.5 95.1 248C95.1 287 121.6 320.2 157.1 331.7C167.1 334.5 179.6 336 191.1 336C192 336 192.1 336 192.1 336C219.6 335.1 247.1 325.4 269.5 309.9C280.6 302 295.4 302 306.5 309.9C328.1 325.4 356.5 336 384 336C410.9 336 439.4 325.2 461.4 309.9L461.5 309.9C473.4 301.4 489.5 302.1 500.7 311.6C515 323.5 533.2 332.6 551.3 336.8C568.5 340.8 579.2 358.1 575.2 375.3C571.2 392.5 553.1 403.2 536.7 399.2C512.2 393.4 491.9 382.6 478.5 374.2C449.5 389.7 417 400 384 400C352.1 400 323.4 390.1 303.6 381.1C297.7 378.5 292.5 375.8 288 373.4C283.5 375.8 278.3 378.5 272.4 381.1C252.6 390.1 223.9 400 192 400C190.2 400 188.3 399.1 186.5 399.9C185.8 399.1 185.1 400 184.4 400C169.8 400 155.6 397.9 142.2 394.1C53.52 372.1 .0006 291.6 .0006 200C.0006 87.99 95.18 0 209 0C232.8 0 255.8 3.823 277.2 10.9C294 16.44 303.1 34.54 297.6 51.32C292 68.1 273.9 77.21 257.2 71.67C242.2 66.72 225.1 64 209 64C152.6 64 104.9 93.82 80.81 136.5C108 111.4 144.4 96 184.4 96H184.4zM428.8 46.43C440.2 37.88 455.8 37.9 467.2 46.47L562.7 118.4C570.7 124.5 575.4 133.9 575.5 143.9L575.8 287.9C575.8 290.8 575.4 293.6 574.7 296.3C569.8 293.6 564.3 291.5 558.5 290.1C545.4 287.1 531.8 280.3 521.2 271.5C499 252.8 466.9 251.4 443.2 268.1C425.2 280.5 403 288.5 384 288.5C364.4 288.5 343.2 280.8 324.8 268.1C323.3 267 321.6 265.1 320 265V143.1C320 133.9 324.7 124.4 332.8 118.4L428.8 46.43zM461.4 421.9L461.5 421.9C473.4 413.4 489.5 414.1 500.7 423.6C515 435.5 533.2 444.6 551.3 448.8C568.5 452.8 579.2 470.1 575.2 487.3C571.2 504.5 553.1 515.2 536.7 511.2C512.2 505.4 491.9 494.6 478.5 486.2C449.5 501.7 417 512 384 512C352.1 512 323.4 502.1 303.6 493.1C297.7 490.5 292.5 487.8 288 485.4C283.5 487.8 278.3 490.5 272.4 493.1C252.6 502.1 223.9 512 192 512C158.1 512 126.5 501.7 97.5 486.2C84.12 494.6 63.79 505.4 39.27 511.2C22.06 515.2 4.853 504.5 .8422 487.3C-3.169 470.1 7.532 452.8 24.74 448.8C42.84 444.6 60.96 435.5 75.31 423.6C86.46 414.1 102.6 413.4 114.5 421.9L114.6 421.9C136.7 437.2 165.1 448 192 448C219.5 448 247 437.4 269.5 421.9C280.6 414 295.4 414 306.5 421.9C328.1 437.4 356.5 448 384 448C410.9 448 439.4 437.2 461.4 421.9H461.4z"/>
</>],
['thin',<>
	<path d="M190.9 384C191.2 384 191.6 384 192 384.1V384C214.5 383.1 236.6 369.8 253.8 354.1C263.1 344.9 273.4 334.6 281.4 323.4C284.4 319.1 291.6 319.1 294.6 323.4C302.6 334.6 312.1 344.9 322.2 354.1C339.5 369.8 361.5 384 384 384C406.5 384 428.6 369.8 445.8 354.1C455.1 344.9 465.5 334.6 473.5 323.4C474.1 321.3 477.4 319.1 480 320C482.6 320 485.1 321.3 486.6 323.4C493.9 333.7 502.5 343 511.6 351.7C527.3 366.5 547.7 380.9 569 383.6C573.4 384.1 576.5 388.1 575.9 392.5C575.4 396.9 571.4 399.1 567 399.4C540.5 396.1 516.1 378.7 500.6 363.3C491.8 354.1 484.7 346.9 480 341.1C474.8 347.5 466.8 356.7 456.6 365.9C438.7 382.2 412.7 400 384 400C355.3 400 329.4 382.2 311.4 365.9C301.3 356.7 293.2 347.5 288 341.1L288 341.1L287.1 341.1C282.8 347.5 274.7 356.7 264.6 365.9C246.6 382.2 220.7 399.1 192 400V399.9C191.6 399.1 191.2 400 190.9 400C74.05 400 0 309.8 0 200C0 89.15 94.55 0 210.3 0C234.5 0 257.7 3.875 279.3 11.02C283.5 12.4 285.8 16.93 284.4 21.12C283 25.32 278.5 27.6 274.3 26.21C254.3 19.6 232.7 16 210.3 16C102.6 16 16 98.77 16 200C16 302.3 84.21 384 190.9 384H190.9zM336 143.1V274.1C332.2 272.9 328.5 270.6 324.8 268.1C323.3 267 321.7 265.1 320 265V143.1C320 133.9 324.7 124.4 332.8 118.4L428.8 46.43C440.2 37.88 455.8 37.9 467.2 46.47L562.7 118.4C570.7 124.5 575.4 133.9 575.5 143.9L575.8 296.9C570.9 294.1 565.5 291.9 559.8 290.4L559.5 143.9C559.4 138.9 557.1 134.2 553.1 131.2L457.6 59.25C451.9 54.97 444.1 54.96 438.4 59.23L342.4 131.2C338.4 134.2 336 138.1 336 143.1V143.1zM294.6 435.4C302.6 446.6 312.1 456.9 322.2 466.1C339.5 481.8 361.5 496 384 496C406.5 496 428.6 481.8 445.8 466.1C455.1 456.9 465.5 446.6 473.5 435.4C474.1 433.3 477.4 432 480 432C482.6 432 485.1 433.3 486.6 435.4C493.9 445.7 502.5 455 511.6 463.7C527.3 478.5 547.7 492.9 569 495.6C573.4 496.1 576.5 500.1 575.9 504.5C575.4 508.9 571.4 511.1 567 511.4C540.5 508.1 516.1 490.7 500.6 475.3C491.8 466.1 484.7 458.9 480 453.1C474.8 459.5 466.8 468.7 456.6 477.9C438.7 494.2 412.7 512 384 512C355.3 512 329.4 494.2 311.4 477.9C301.3 468.7 293.2 459.5 288 453.1L288 453.1L287.1 453.1C282.8 459.5 274.7 468.7 264.6 477.9C246.6 494.2 220.7 512 191.1 512C163.3 512 137.4 494.2 119.4 477.9C109.2 468.7 101.2 459.5 95.99 453.1C91.3 458.9 84.24 466.1 75.4 475.3C59.04 490.7 35.48 508.1 9.003 511.4C4.619 511.1 .6179 508.9 .0656 504.5C-.4867 500.1 2.619 496.1 7.003 495.6C28.3 492.9 48.74 478.5 64.42 463.7C73.56 455 82.16 445.7 89.43 435.4C90.93 433.3 93.37 432 95.98 432C98.59 432 101 433.3 102.5 435.4C110.5 446.6 120 456.9 130.2 466.1C147.4 481.8 169.5 496 191.1 496C214.5 496 236.6 481.8 253.8 466.1C263.1 456.9 273.4 446.6 281.4 435.4C284.4 431.1 291.6 431.1 294.6 435.4H294.6zM190 112C128.9 112 80 158.1 80 216C80 273 128.9 320 190 320C194.4 320 198 323.6 198 328C198 332.4 194.4 336 190 336C120.8 336 64 282.7 64 216C64 149.3 120.8 96 190 96C209 96 227.1 100 243.3 107.2C247.3 109 249.1 113.7 247.3 117.8C245.5 121.8 240.8 123.6 236.8 121.8C222.6 115.5 206.7 112 190 112H190z"/>
</>],

]);

const HouseTsunami: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HouseTsunami.displayName = "HouseTsunami";

export default HouseTsunami;
