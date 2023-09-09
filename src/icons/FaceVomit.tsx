
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M192 396.1V338.7C215.6 327.6 249.3 320 287.1 320C326.7 320 360.4 327.6 384 338.7V396.1C384 427.1 403.8 454.6 433.2 464.4L467.3 475.8C474.9 478.3 480 485.4 480 493.4C480 503.7 471.7 512 461.4 512H114.6C104.3 512 96 503.7 96 493.4C96 485.4 101.1 478.3 108.7 475.8L142.8 464.4C172.2 454.6 192 427.1 192 396.1H192zM288 400C288 408.8 295.2 416 304 416C312.8 416 320 408.8 320 400C320 391.2 312.8 384 304 384C295.2 384 288 391.2 288 400zM240 416C231.2 416 224 423.2 224 432C224 440.8 231.2 448 240 448C248.8 448 256 440.8 256 432C256 423.2 248.8 416 240 416zM576 448C576 465.7 561.7 480 544 480C526.3 480 512 465.7 512 448C512 430.3 526.3 416 544 416C561.7 416 576 430.3 576 448zM64 480C64 497.7 49.67 512 32 512C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448C49.67 448 64 462.3 64 480z"/><path className="fa-secondary" d="M448.8 434.9C436.9 430.1 427.3 422.6 421.6 412C438.3 399.4 448 384.3 448 368C448 323.8 376.4 288 288 288C199.6 288 128 323.8 128 368C128 384.3 137.7 399.4 154.4 412C148.7 422.6 139.1 430.1 127.2 434.9L110.5 440.5C62.12 393.9 32 328.5 32 256C32 114.6 146.6 0 288 0C429.4 0 544 114.6 544 256C544 328.5 513.9 393.9 465.5 440.5L448.8 434.9zM165.5 130.7C157.6 126.4 148 132.2 148 141.1C148 143.9 148.1 146.6 150.8 148.8L186.8 192L150.8 235.2C148.1 237.4 148 240.1 148 242.9C148 251.8 157.6 257.6 165.5 253.3L255.4 205.4C266.1 199.7 266.1 184.3 255.4 178.6L165.5 130.7zM428 141.1C428 132.2 418.4 126.4 410.5 130.7L320.6 178.6C309.9 184.3 309.9 199.7 320.6 205.4L410.5 253.3C418.4 257.6 428 251.8 428 242.9C428 240.1 427 237.4 425.2 235.2L389.2 192L425.2 148.8C427 146.6 428 143.9 428 141.1V141.1z"/>
</>],
['light',<>
	<path d="M288 32C164.3 32 64 132.3 64 256C64 313.4 85.55 365.7 121 405.3C126.9 411.9 126.4 422 119.8 427.9C113.2 433.8 103.1 433.3 97.19 426.7C56.66 381.4 32 321.6 32 256C32 114.6 146.6 0 288 0C429.4 0 544 114.6 544 256C544 321.6 519.3 381.4 478.8 426.7C472.9 433.3 462.8 433.8 456.2 427.9C449.6 422 449.1 411.9 454.1 405.3C490.4 365.7 512 313.4 512 256C512 132.3 411.7 32 288 32zM182.8 161.7L246.8 193.7C252.2 196.4 255.6 201.9 255.6 208C255.6 214.1 252.2 219.6 246.8 222.3L182.8 254.3C174.9 258.3 165.3 255.1 161.3 247.2C157.4 239.3 160.6 229.6 168.5 225.7L203.9 208L168.5 190.3C160.6 186.4 157.4 176.7 161.3 168.8C165.3 160.9 174.9 157.7 182.8 161.7V161.7zM372.2 208L407.5 225.7C415.4 229.6 418.6 239.3 414.7 247.2C410.7 255.1 401.1 258.3 393.2 254.3L329.2 222.3C323.8 219.6 320.4 214.1 320.4 208C320.4 201.9 323.8 196.4 329.2 193.7L393.2 161.7C401.1 157.7 410.7 160.9 414.7 168.8C418.6 176.7 415.4 186.4 407.5 190.3L372.2 208zM64 488C64 501.3 53.25 512 40 512C26.75 512 16 501.3 16 488C16 474.7 26.75 464 40 464C53.25 464 64 474.7 64 488zM512 456C512 442.7 522.7 432 536 432C549.3 432 560 442.7 560 456C560 469.3 549.3 480 536 480C522.7 480 512 469.3 512 456zM304 384C295.2 384 288 376.8 288 368C288 359.2 295.2 352 304 352C312.8 352 320 359.2 320 368C320 376.8 312.8 384 304 384zM256 432C256 423.2 263.2 416 272 416C280.8 416 288 423.2 288 432C288 440.8 280.8 448 272 448C263.2 448 256 440.8 256 432zM383.6 380.5L389.7 407.9C394.9 431.4 410.5 451.4 432 462.1L471.2 481.7C477.8 485 481.3 492.5 479.6 499.7C477.9 506.9 471.4 512 464 512H112C104.6 512 98.13 506.9 96.43 499.7C94.72 492.5 98.21 485 104.8 481.7L143.1 462.1C165.5 451.4 181.1 431.4 186.3 407.9L192.4 380.5C194.3 371.9 202.8 366.5 211.5 368.4C220.1 370.3 225.5 378.8 223.6 387.5L217.5 414.9C211.7 441.1 196.7 464.1 175.6 480H400.4C379.3 464.1 364.3 441.1 358.5 414.9L352.4 387.5C350.5 378.8 355.9 370.3 364.5 368.4C373.2 366.5 381.7 371.9 383.6 380.5H383.6zM155.6 383.4C147.1 380.1 142.2 372.1 144.6 363.6C150.2 343.8 168.7 324.1 192.6 311.5C217.3 297.6 249.1 288 288 288C326 288 358.7 297.6 383.4 311.5C407.3 324.1 425.8 343.8 431.4 363.6C433.8 372.1 428.9 380.1 420.4 383.4C411.9 385.8 403 380.9 400.6 372.4C398.2 364 388 350.8 367.7 339.4C347.1 328.3 320.7 320 288 320C255.3 320 228 328.3 208.3 339.4C187.1 350.8 177.8 364 175.4 372.4C172.1 380.9 164.1 385.8 155.6 383.4H155.6z"/>
</>],
['regular',<>
	<path d="M288 48C173.1 48 80 141.1 80 256C80 319.4 108.3 376.1 153 414.3C147.3 423.8 138.2 431.3 127.2 434.9L110.5 440.5C62.12 393.9 32 328.5 32 256C32 114.6 146.6 0 288 0C429.4 0 544 114.6 544 256C544 328.5 513.9 393.9 465.5 440.5L448.8 434.9C437.8 431.3 428.7 423.8 422.1 414.3C467.7 376.1 496 319.4 496 256C496 141.1 402.9 48 288 48zM148 157.1C148 148.2 157.6 142.4 165.5 146.7L255.4 194.6C266.1 200.3 266.1 215.7 255.4 221.4L165.5 269.3C157.6 273.6 148 267.8 148 258.9C148 256.1 148.1 253.4 150.8 251.2L186.8 208L150.8 164.8C148.1 162.6 148 159.9 148 157.1V157.1zM410.5 146.7C418.4 142.4 428 148.2 428 157.1C428 159.9 427 162.6 425.2 164.8L389.2 208L425.2 251.2C427 253.4 428 256.1 428 258.9C428 267.8 418.4 273.6 410.5 269.3L320.6 221.4C309.9 215.7 309.9 200.3 320.6 194.6L410.5 146.7zM0 480C0 462.3 14.33 448 32 448C49.67 448 64 462.3 64 480C64 497.7 49.67 512 32 512C14.33 512 0 497.7 0 480zM576 448C576 465.7 561.7 480 544 480C526.3 480 512 465.7 512 448C512 430.3 526.3 416 544 416C561.7 416 576 430.3 576 448zM433.2 464.4L467.3 475.8C474.9 478.3 480 485.4 480 493.4C480 503.7 471.7 512 461.4 512H114.6C104.3 512 96 503.7 96 493.4C96 485.4 101.1 478.3 108.7 475.8L142.8 464.4C172.2 454.6 192 427.1 192 396.1V337.8C181.2 342.1 173.3 346.4 168.9 349.3C161.5 354.2 151.6 352.2 146.7 344.9C141.8 337.5 143.8 327.6 151.1 322.7C169.7 310.3 220.8 288 288 288C355.2 288 406.3 310.3 424.9 322.7C432.2 327.6 434.2 337.5 429.3 344.9C424.4 352.2 414.5 354.2 407.1 349.3C402.7 346.4 394.8 342.1 384 337.8V396.1C384 427.1 403.8 454.6 433.2 464.4H433.2zM288 400C288 408.8 295.2 416 304 416C312.8 416 320 408.8 320 400C320 391.2 312.8 384 304 384C295.2 384 288 391.2 288 400zM240 416C231.2 416 224 423.2 224 432C224 440.8 231.2 448 240 448C248.8 448 256 440.8 256 432C256 423.2 248.8 416 240 416z"/>
</>],
['solid',<>
	<path d="M544 256C544 328.5 513.9 393.9 465.5 440.5L448.8 434.9C436.9 430.1 427.3 422.6 421.6 412C438.3 399.4 448 384.3 448 368C448 323.8 376.4 288 288 288C199.6 288 128 323.8 128 368C128 384.3 137.7 399.4 154.4 412C148.7 422.6 139.1 430.1 127.2 434.9L110.5 440.5C62.12 393.9 32 328.5 32 256C32 114.6 146.6 0 288 0C429.4 0 544 114.6 544 256V256zM150.8 148.8L186.8 192L150.8 235.2C148.1 237.4 148 240.1 148 242.9C148 251.8 157.6 257.6 165.5 253.3L255.4 205.4C266.1 199.7 266.1 184.3 255.4 178.6L165.5 130.7C157.6 126.4 148 132.2 148 141.1C148 143.9 148.1 146.6 150.8 148.8V148.8zM320.6 178.6C309.9 184.3 309.9 199.7 320.6 205.4L410.5 253.3C418.4 257.6 428 251.8 428 242.9C428 240.1 427 237.4 425.2 235.2L389.2 192L425.2 148.8C427 146.6 428 143.9 428 141.1C428 132.2 418.4 126.4 410.5 130.7L320.6 178.6zM0 480C0 462.3 14.33 448 32 448C49.67 448 64 462.3 64 480C64 497.7 49.67 512 32 512C14.33 512 0 497.7 0 480zM576 448C576 465.7 561.7 480 544 480C526.3 480 512 465.7 512 448C512 430.3 526.3 416 544 416C561.7 416 576 430.3 576 448zM192 396.1V338.7C215.6 327.6 249.3 320 287.1 320C326.7 320 360.4 327.6 384 338.7V396.1C384 427.1 403.8 454.6 433.2 464.4L467.3 475.8C474.9 478.3 480 485.4 480 493.4C480 503.7 471.7 512 461.4 512H114.6C104.3 512 96 503.7 96 493.4C96 485.4 101.1 478.3 108.7 475.8L142.8 464.4C172.2 454.6 192 427.1 192 396.1H192zM288 400C288 408.8 295.2 416 304 416C312.8 416 320 408.8 320 400C320 391.2 312.8 384 304 384C295.2 384 288 391.2 288 400zM240 416C231.2 416 224 423.2 224 432C224 440.8 231.2 448 240 448C248.8 448 256 440.8 256 432C256 423.2 248.8 416 240 416z"/>
</>],
['thin',<>
	<path d="M288 16C155.5 16 48 123.5 48 256C48 317.5 71.1 373.5 109.1 415.1C112.1 419.3 111.8 424.3 108.5 427.3C105.2 430.2 100.1 429.1 97.19 426.7C56.66 381.4 32 321.6 32 256C32 114.6 146.6 0 288 0C429.4 0 544 114.6 544 256C544 321.6 519.3 381.4 478.8 426.7C475.9 429.1 470.8 430.2 467.5 427.3C464.2 424.3 463.9 419.3 466.9 415.1C504.9 373.5 528 317.5 528 256C528 123.5 420.5 16 288 16V16zM160.8 164.4C162.8 160.5 167.6 158.9 171.6 160.8L251.6 200.8C254.3 202.2 256 204.1 256 208C256 211 254.3 213.8 251.6 215.2L171.6 255.2C167.6 257.1 162.8 255.5 160.8 251.6C158.9 247.6 160.5 242.8 164.4 240.8L230.1 208L164.4 175.2C160.5 173.2 158.9 168.4 160.8 164.4V164.4zM404.4 160.8C408.4 158.9 413.2 160.5 415.2 164.4C417.1 168.4 415.5 173.2 411.6 175.2L345.9 208L411.6 240.8C415.5 242.8 417.1 247.6 415.2 251.6C413.2 255.5 408.4 257.1 404.4 255.2L324.4 215.2C321.7 213.8 320 211 320 207.1C320 204.1 321.7 202.2 324.4 200.8L404.4 160.8zM64 496C64 504.8 56.84 512 48 512C39.16 512 32 504.8 32 496C32 487.2 39.16 480 48 480C56.84 480 64 487.2 64 496zM512 464C512 455.2 519.2 448 528 448C536.8 448 544 455.2 544 464C544 472.8 536.8 480 528 480C519.2 480 512 472.8 512 464zM320 416C311.2 416 304 408.8 304 400C304 391.2 311.2 384 320 384C328.8 384 336 391.2 336 400C336 408.8 328.8 416 320 416zM240 432C240 423.2 247.2 416 256 416C264.8 416 272 423.2 272 432C272 440.8 264.8 448 256 448C247.2 448 240 440.8 240 432zM384 384V391C384 429.2 411.6 461.8 449.3 468.1L462.5 470.3C472.6 471.1 480 480.7 480 491C480 502.6 470.6 512 459 512H116.1C105.4 512 95.1 502.6 95.1 491C95.1 480.7 103.4 471.1 113.5 470.3L126.7 468.1C164.4 461.8 191.1 429.2 191.1 391V384C191.1 379.6 195.6 376 199.1 376C204.4 376 207.1 379.6 207.1 384V391C207.1 437 174.7 476.3 129.3 483.9L116.2 486.1C113.8 486.5 111.1 488.6 111.1 491C111.1 493.8 114.2 496 116.1 496H459C461.8 496 464 493.8 464 491C464 488.6 462.2 486.5 459.8 486.1L446.7 483.9C401.3 476.3 368 437 368 391V384C368 379.6 371.6 376 376 376C380.4 376 384 379.6 384 384V384zM157.8 375.7C153.6 374.5 151.1 370.1 152.3 365.8C157.1 348.8 173.5 331.4 196.6 318.5C219.1 305.3 251.3 296 288 296C324.7 296 356 305.3 379.4 318.5C402.5 331.4 418.9 348.8 423.7 365.8C424.9 370.1 422.4 374.5 418.2 375.7C413.9 376.9 409.5 374.4 408.3 370.2C405.1 358.1 392.9 344.4 371.6 332.4C350.7 320.6 322 312 287.1 312C253.1 312 225.3 320.6 204.4 332.4C183.1 344.4 170.9 358.1 167.7 370.2C166.5 374.4 162.1 376.9 157.8 375.7H157.8z"/>
</>],

]);

const FaceVomit: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FaceVomit.displayName = "FaceVomit";

export default FaceVomit;