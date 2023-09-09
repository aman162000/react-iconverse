
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M566.1 185.1C550.5 131 517.6 84.28 473.8 51.3C490.8 47.99 513.5 42.74 536.8 35.78C566.6 26.86 595.8 15.55 615.1 2.687C620.5-.9025 627.5-.8952 632.9 2.706C638.3 6.307 640.1 12.79 639.7 19.14C633.5 50.11 610.4 125.8 566.1 185.1V185.1zM103.3 35.78C126.5 42.74 149.2 47.99 166.2 51.3C122.4 84.28 89.5 131 73.94 185.1C29.62 125.8 6.507 50.11 .3114 19.14C-.9577 12.79 1.721 6.307 7.098 2.706C12.47-.8948 19.49-.9022 24.88 2.688C44.17 15.55 73.41 26.86 103.3 35.78V35.78zM208.4 272C208.4 263.2 211.9 255.2 217.7 249.4L186.9 239.2C178.6 236.4 174 227.3 176.8 218.9C179.6 210.6 188.7 206 197.1 208.8L293.1 240.8C301.4 243.6 305.1 252.7 303.2 261.1C300.4 269.4 291.3 273.1 282.9 271.2L272.1 267.6C272.3 269 272.4 270.5 272.4 272C272.4 289.7 258 304 240.4 304C222.7 304 208.4 289.7 208.4 272L208.4 272zM432.4 272C432.4 289.7 418 304 400.4 304C382.7 304 368.4 289.7 368.4 272C368.4 270.4 368.5 268.8 368.7 267.3L357.1 271.2C348.7 273.1 339.6 269.4 336.8 261.1C334 252.7 338.6 243.6 346.9 240.8L442.9 208.8C451.3 206 460.4 210.6 463.2 218.9C465.1 227.3 461.4 236.4 453.1 239.2L422.9 249.2C428.7 255 432.4 263.1 432.4 272L432.4 272z"/><path className="fa-secondary" d="M576 256C576 397.4 461.4 512 320 512C178.6 512 64 397.4 64 256C64 114.6 178.6 0 320 0C461.4 0 576 114.6 576 256zM403.9 389.3C387.8 371.4 359.7 352 320 352C280.3 352 252.2 371.4 236.1 389.3C230.2 395.9 230.7 405.1 237.3 411.9C243.9 417.8 253.1 417.3 259.9 410.7C271.6 397.7 291.5 384 319.1 384C348.5 384 368.4 397.7 380.1 410.7C386 417.3 396.1 417.8 402.7 411.9C409.3 405.1 409.8 395.9 403.9 389.3H403.9zM240.4 304C258 304 272.4 289.7 272.4 272C272.4 270.5 272.3 269 272.1 267.6L282.9 271.2C291.3 273.1 300.4 269.4 303.2 261.1C305.1 252.7 301.4 243.6 293.1 240.8L197.1 208.8C188.7 206 179.6 210.6 176.8 218.9C174 227.3 178.6 236.4 186.9 239.2L217.7 249.4C211.9 255.2 208.4 263.2 208.4 272C208.4 289.7 222.7 304 240.4 304V304zM422.9 249.2L453.1 239.2C461.4 236.4 465.1 227.3 463.2 218.9C460.4 210.6 451.3 206 442.9 208.8L346.9 240.8C338.6 243.6 334 252.7 336.8 261.1C339.6 269.4 348.7 273.1 357.1 271.2L368.7 267.3C368.5 268.8 368.4 270.4 368.4 271.1C368.4 289.7 382.7 303.1 400.4 303.1C418 303.1 432.4 289.7 432.4 271.1C432.4 263.1 428.7 255 422.9 249.2L422.9 249.2z"/>
</>],
['light',<>
	<path d="M402.7 411.9C396.1 417.8 386 417.3 380.1 410.7C368.4 397.7 348.5 384 320 384C291.5 384 271.6 397.7 259.9 410.7C253.1 417.3 243.9 417.8 237.3 411.9C230.7 405.1 230.2 395.9 236.1 389.3C252.2 371.4 280.3 352 320 352C359.7 352 387.8 371.4 403.9 389.3C409.8 395.9 409.3 405.1 402.7 411.9H402.7zM216.4 272C216.4 263.9 220.4 256.7 226.5 252.4L186.9 239.2C178.6 236.4 174 227.3 176.8 218.9C179.6 210.6 188.7 206 197.1 208.8L293.1 240.8C301.4 243.6 305.1 252.7 303.2 261.1C300.4 269.4 291.3 273.1 282.9 271.2L263.2 264.6C263.1 266.9 264.4 269.4 264.4 271.1C264.4 285.3 253.6 295.1 240.4 295.1C227.1 295.1 216.4 285.3 216.4 271.1L216.4 272zM424.4 272C424.4 285.3 413.6 296 400.4 296C387.1 296 376.4 285.3 376.4 272C376.4 269.3 376.8 266.7 377.6 264.3L357.1 271.2C348.7 273.1 339.6 269.4 336.8 261.1C334 252.7 338.6 243.6 346.9 240.8L442.9 208.8C451.3 206 460.4 210.6 463.2 218.9C465.1 227.3 461.4 236.4 453.1 239.2L413.1 252.2C420.2 256.5 424.4 263.8 424.4 272L424.4 272zM64 256C64 231.4 67.47 207.6 73.94 185.1C29.61 125.8 6.506 50.11 .3109 19.14C-.9582 12.79 1.72 6.307 7.097 2.706C12.47-.8952 19.49-.9025 24.88 2.687C44.17 15.55 73.41 26.86 103.3 35.78C126.5 42.74 149.2 47.99 166.2 51.3C209.1 19.09 262.3 .0002 320 .0002C377.7 .0002 430.9 19.09 473.8 51.3C490.8 47.99 513.5 42.74 536.7 35.78C566.6 26.86 595.8 15.55 615.1 2.687C620.5-.9025 627.5-.8952 632.9 2.706C638.3 6.307 640.1 12.79 639.7 19.14C633.5 50.11 610.4 125.8 566.1 185.1C572.5 207.6 576 231.4 576 256C576 397.4 461.4 512 320 512C178.6 512 64 397.4 64 256V256zM320 480C443.7 480 544 379.7 544 256C544 132.3 443.7 31.1 320 31.1C196.3 31.1 96 132.3 96 256C96 379.7 196.3 480 320 480zM552.4 148.6C574.5 114.3 589.8 76.25 599.1 47.33C582.1 54.78 563.6 61.15 545.9 66.44C531.2 70.83 516.7 74.58 503.6 77.62C523.6 98.23 540.2 122.2 552.4 148.6H552.4zM40.93 47.33C50.16 76.25 65.51 114.3 87.56 148.6C99.78 122.2 116.4 98.23 136.4 77.62C123.3 74.58 108.8 70.83 94.08 66.44C76.39 61.15 57.9 54.77 40.93 47.33H40.93z"/>
</>],
['regular',<>
	<path d="M392.4 409.5C382.7 418.6 367.5 418.1 358.5 408.4C351.1 400.5 338.4 392 320 392C301.6 392 288.9 400.5 281.5 408.4C272.5 418.1 257.3 418.6 247.6 409.5C237.9 400.5 237.4 385.3 246.5 375.6C260.7 360.3 285.4 344 320 344C354.6 344 379.3 360.3 393.5 375.6C402.6 385.3 402.1 400.5 392.4 409.5zM208.4 256C208.4 247.2 211.9 239.2 217.7 233.4L186.9 223.2C178.6 220.4 174 211.3 176.8 202.9C179.6 194.6 188.7 190 197.1 192.8L293.1 224.8C301.4 227.6 305.1 236.7 303.2 245.1C300.4 253.4 291.3 257.1 282.9 255.2L272.1 251.6C272.3 253 272.4 254.5 272.4 256C272.4 273.7 258 288 240.4 288C222.7 288 208.4 273.7 208.4 256H208.4zM432.4 256C432.4 273.7 418 288 400.4 288C382.7 288 368.4 273.7 368.4 256C368.4 254.4 368.5 252.8 368.7 251.3L357.1 255.2C348.7 257.1 339.6 253.4 336.8 245.1C334 236.7 338.6 227.6 346.9 224.8L442.9 192.8C451.3 190 460.4 194.6 463.2 202.9C465.1 211.3 461.4 220.4 453.1 223.2L422.9 233.2C428.7 239 432.4 247.1 432.4 256H432.4zM64 256C64 231.4 67.47 207.6 73.94 185.1C29.61 125.8 6.506 50.11 .3109 19.14C-.9582 12.79 1.72 6.307 7.097 2.706C12.47-.8952 19.49-.9025 24.88 2.687C44.17 15.55 73.41 26.86 103.3 35.78C126.5 42.74 149.2 47.99 166.2 51.3C209.1 19.09 262.3 .0002 320 .0002C377.7 .0002 430.9 19.09 473.8 51.3C490.8 47.99 513.5 42.74 536.7 35.78C566.6 26.86 595.8 15.55 615.1 2.687C620.5-.9025 627.5-.8952 632.9 2.706C638.3 6.307 640.1 12.79 639.7 19.14C633.5 50.11 610.4 125.8 566.1 185.1C572.5 207.6 576 231.4 576 256C576 397.4 461.4 512 320 512C178.6 512 64 397.4 64 256V256zM320 464C434.9 464 528 370.9 528 256C528 141.1 434.9 48 320 48C205.1 48 112 141.1 112 256C112 370.9 205.1 464 320 464z"/>
</>],
['solid',<>
	<path d="M576 256C576 397.4 461.4 512 320 512C178.6 512 64 397.4 64 256C64 231.4 67.47 207.6 73.94 185.1C29.61 125.8 6.506 50.11 .3109 19.14C-.9582 12.79 1.72 6.307 7.097 2.706C12.47-.8952 19.49-.9025 24.88 2.687C44.17 15.55 73.41 26.86 103.3 35.78C126.5 42.74 149.2 47.99 166.2 51.3C209.1 19.09 262.3 .0002 320 .0002C377.7 .0002 430.9 19.09 473.8 51.3C490.8 47.99 513.5 42.74 536.7 35.78C566.6 26.86 595.8 15.55 615.1 2.687C620.5-.9025 627.5-.8952 632.9 2.706C638.3 6.307 640.1 12.79 639.7 19.14C633.5 50.11 610.4 125.8 566.1 185.1C572.5 207.6 576 231.4 576 256V256zM403.9 389.3C387.8 371.4 359.7 352 320 352C280.3 352 252.2 371.4 236.1 389.3C230.2 395.9 230.7 405.1 237.3 411.9C243.9 417.8 253.1 417.3 259.9 410.7C271.6 397.7 291.5 384 319.1 384C348.5 384 368.4 397.7 380.1 410.7C386 417.3 396.1 417.8 402.7 411.9C409.3 405.1 409.8 395.9 403.9 389.3H403.9zM240.4 304C258 304 272.4 289.7 272.4 272C272.4 270.5 272.3 269 272.1 267.6L282.9 271.2C291.3 273.1 300.4 269.4 303.2 261.1C305.1 252.7 301.4 243.6 293.1 240.8L197.1 208.8C188.7 206 179.6 210.6 176.8 218.9C174 227.3 178.6 236.4 186.9 239.2L217.7 249.4C211.9 255.2 208.4 263.2 208.4 272C208.4 289.7 222.7 304 240.4 304L240.4 304zM422.9 249.2L453.1 239.2C461.4 236.4 465.1 227.3 463.2 218.9C460.4 210.6 451.3 206 442.9 208.8L346.9 240.8C338.6 243.6 334 252.7 336.8 261.1C339.6 269.4 348.7 273.1 357.1 271.2L368.7 267.3C368.5 268.8 368.4 270.4 368.4 271.1C368.4 289.7 382.7 303.1 400.4 303.1C418 303.1 432.4 289.7 432.4 271.1C432.4 263.1 428.7 255 422.9 249.2L422.9 249.2z"/>
</>],
['thin',<>
	<path d="M397.4 413.9C394.1 416.9 389 416.6 386.1 413.4C373.3 399.1 351.3 384 319.1 384C288.7 384 266.7 399.1 253.9 413.4C250.1 416.6 245.9 416.9 242.6 413.9C239.4 410.1 239.1 405.9 242.1 402.6C257.1 385.1 283.1 368 319.1 368C356.9 368 382.9 385.1 397.9 402.6C400.9 405.9 400.6 410.1 397.4 413.9L397.4 413.9zM224.4 272C224.4 263.2 231.5 256 240.4 256C249.2 256 256.4 263.2 256.4 272C256.4 280.8 249.2 288 240.4 288C231.5 288 224.4 280.8 224.4 272V272zM416.4 272C416.4 280.8 409.2 288 400.4 288C391.5 288 384.4 280.8 384.4 272C384.4 263.2 391.5 256 400.4 256C409.2 256 416.4 263.2 416.4 272zM290.5 232.4C294.7 233.8 296.1 238.3 295.6 242.5C294.2 246.7 289.7 248.1 285.5 247.6L189.5 215.6C185.3 214.2 183 209.7 184.4 205.5C185.8 201.3 190.3 199 194.5 200.4L290.5 232.4zM354.5 247.6C350.3 248.1 345.8 246.7 344.4 242.5C343 238.3 345.3 233.8 349.5 232.4L445.5 200.4C449.7 199 454.2 201.3 455.6 205.5C456.1 209.7 454.7 214.2 450.5 215.6L354.5 247.6zM64 256C64 228.1 68.47 201.2 76.72 176.1C23.64 111.7 6.016 38.87 .1552 9.569C-.4793 6.396 .8599 3.153 3.549 1.353C6.237-.4474 9.745-.4512 12.44 1.344C32.75 14.88 62.92 26.47 92.96 35.45C120.2 43.6 146.8 49.44 164.5 52.61C207.6 19.61 261.5 0 319.1 0C378.5 0 432.4 19.61 475.5 52.61C493.2 49.44 519.8 43.61 547 35.45C577.1 26.47 607.3 14.88 627.6 1.344C630.3-.4512 633.8-.4474 636.5 1.353C639.1 3.153 640.5 6.396 639.8 9.569C633.1 38.87 616.4 111.7 563.3 176.1C571.5 201.2 576 228.1 576 256C576 397.4 461.4 512 319.1 512C178.6 512 63.1 397.4 63.1 256H64zM320 496C452.5 496 560 388.5 560 256C560 123.5 452.5 16 320 16C187.5 16 80 123.5 80 256C80 388.5 187.5 496 320 496zM620.2 24.2C599.9 34.81 575.3 43.71 551.6 50.78C529.8 57.3 508.4 62.38 491.4 65.85C519.6 91.28 542.1 122.9 556.8 158.6C594.7 109.6 612.2 56.62 620.2 24.2V24.2zM19.82 24.2C27.84 56.62 45.29 109.6 83.2 158.6C97.89 122.9 120.4 91.28 148.6 65.85C131.6 62.38 110.2 57.3 88.37 50.78C64.74 43.71 40.11 34.81 19.82 24.2V24.2z"/>
</>],

]);

const FaceAngryHorns: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FaceAngryHorns.displayName = "FaceAngryHorns";

export default FaceAngryHorns;