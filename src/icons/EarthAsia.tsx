
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M34.78 291.4C32.95 279.9 32 268 32 255.1C32 132.3 132.3 31.1 256 31.1C280.5 31.1 304 35.92 326.1 43.17C327.5 48.1 327.4 53.56 325.3 58.79L308.6 100.6C305.7 107.8 299.6 113.1 292.1 114.1L275.1 119.2C258.4 123.4 251.4 143.2 261.7 156.9L277.8 178.4C283.9 186.6 284.2 197.7 278.6 206.1L267.9 222.2C260.5 233.3 247.1 239.1 234.6 239.1H232.3C216.2 239.1 204.6 255.5 209.3 270.9L215.2 290.8C219.6 305.4 208.7 319.1 193.5 319.1C182.8 319.1 172.1 313.9 168.2 304.3L158.9 285.8C151.6 271.1 132 267.1 120.5 279.5L105.1 294.9C99.41 300.6 91.27 303.1 83.41 301.5L38.79 292.6C37.4 292.3 36.06 291.9 34.78 291.4L34.78 291.4zM474.5 305.4C463.4 354.7 436.1 397.8 398.4 428.9L383.5 418.1C374.8 411.8 363.6 410.2 353.5 413.1L350.1 414.9C331.2 422.3 309.1 413 300.5 393.8L294.1 381.4C286.5 362.5 293.9 340.2 311.1 330.1L348.2 309.1C350.5 308.7 352.4 306.8 353.8 304.6L359.9 295.1C365.1 285.7 376.4 279.1 387.5 279.1C398.7 279.1 409.1 285.7 415.1 295.1L417.1 298.2C420.8 304 427.9 306.7 434.6 304.9L450.4 300.4C456.1 298.9 462.1 299.4 467.4 301.1L474.5 305.4zM144.5 348.1C146.6 339.5 155.3 334.3 163.9 336.5L195.9 344.5C204.5 346.6 209.7 355.3 207.5 363.9C205.4 372.5 196.7 377.7 188.1 375.5L156.1 367.5C147.5 365.4 142.3 356.7 144.5 348.1V348.1zM244.5 296.1C246.6 287.5 255.3 282.3 263.9 284.5C272.5 286.6 277.7 295.3 275.5 303.9L267.5 335.9C265.4 344.5 256.7 349.7 248.1 347.5C239.5 345.4 234.3 336.7 236.5 328.1L244.5 296.1zM343.2 113.7C351.1 117.6 354.3 127.2 350.3 135.2L334.3 167.2C330.4 175.1 320.7 178.3 312.8 174.3C304.9 170.4 301.7 160.7 305.7 152.8L321.7 120.8C325.6 112.9 335.3 109.7 343.2 113.7V113.7z"/><path className="fa-secondary" d="M38.79 292.6L83.41 301.5C91.27 303.1 99.41 300.6 105.1 294.9L120.5 279.5C132 267.1 151.6 271.1 158.9 285.8L168.2 304.3C172.1 313.9 182.8 319.1 193.5 319.1C208.7 319.1 219.6 305.4 215.2 290.8L209.3 270.9C204.7 255.5 216.2 239.1 232.3 239.1H234.6C247.1 239.1 260.5 233.3 267.9 222.2L278.6 206.1C284.2 197.7 283.9 186.6 277.8 178.4L261.7 156.9C251.4 143.2 258.4 123.4 275.1 119.2L292.1 114.1C299.6 113.1 305.7 107.8 308.6 100.6L325.3 58.79C327.4 53.56 327.5 48.1 326.1 43.17C415.5 72.58 480 156.8 480 255.1C480 272.1 478.1 289.5 474.5 305.4L467.4 301.1C462.1 299.4 456.1 298.9 450.4 300.4L434.6 304.9C427.9 306.7 420.8 304 417.1 298.2L415.1 295.1C409.1 285.7 398.7 279.1 387.5 279.1C376.4 279.1 365.1 285.7 359.9 295.1L353.8 304.6C352.4 306.8 350.5 308.7 348.2 309.1L311.1 330.1C293.9 340.2 286.5 362.5 294.1 381.4L300.5 393.8C309.1 413 331.2 422.3 350.1 414.9L353.5 413.1C363.6 410.2 374.8 411.8 383.5 418.1L398.4 428.9C359.7 460.8 310.1 480 256 480C144.3 480 51.75 398.3 34.78 291.4C36.06 291.9 37.4 292.3 38.79 292.6L38.79 292.6zM163.9 336.5C155.3 334.3 146.6 339.5 144.5 348.1C142.3 356.7 147.5 365.4 156.1 367.5L188.1 375.5C196.7 377.7 205.4 372.5 207.5 363.9C209.7 355.3 204.5 346.6 195.9 344.5L163.9 336.5zM267.5 335.9L275.5 303.9C277.7 295.3 272.5 286.6 263.9 284.5C255.3 282.3 246.6 287.5 244.5 296.1L236.5 328.1C234.3 336.7 239.5 345.4 248.1 347.5C256.7 349.7 265.4 344.5 267.5 335.9zM350.3 135.2C354.3 127.2 351.1 117.6 343.2 113.7C335.3 109.7 325.6 112.9 321.7 120.8L305.7 152.8C301.7 160.7 304.9 170.4 312.8 174.3C320.7 178.3 330.4 175.1 334.3 167.2L350.3 135.2z"/>
</>],
['light',<>
	<path d="M195.9 352.5C204.5 354.6 209.7 363.3 207.5 371.9C205.4 380.5 196.7 385.7 188.1 383.5L156.1 375.5C147.5 373.4 142.3 364.7 144.5 356.1C146.6 347.5 155.3 342.3 163.9 344.5L195.9 352.5zM248.1 347.5C239.5 345.4 234.3 336.7 236.5 328.1L244.5 296.1C246.6 287.5 255.3 282.3 263.9 284.5C272.5 286.6 277.7 295.3 275.5 303.9L267.5 335.9C265.4 344.5 256.7 349.7 248.1 347.5zM350.3 175.2C346.4 183.1 336.7 186.3 328.8 182.3C320.9 178.4 317.7 168.7 321.7 160.8L337.7 128.8C341.6 120.9 351.3 117.7 359.2 121.7C367.1 125.6 370.3 135.3 366.3 143.2L350.3 175.2zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM345.8 50.7L323.4 106.5C318.6 118.5 308.4 127.4 295.1 130.5L278.9 134.8C273.4 136.1 271.1 142.7 274.5 147.3L290.6 168.8C300.8 182.4 301.3 200.9 291.9 215L281.2 231.1C270.8 246.6 253.3 256 234.6 256H232.3C226.9 256 223.1 261.2 224.6 266.3L230.6 286.2C238 311 219.4 336 193.5 336C176.7 336 161.4 326.5 153.9 311.5L144.6 292.9C142.1 288.1 135.6 286.1 131.8 290.9L116.4 306.2C106.9 315.7 93.38 319.8 80.27 317.2L38.25 308.8C61.97 407 150.5 480 255.1 480C303.4 480 347.4 465.3 383.6 440.1L375.1 433.1L364.5 437.9C336.9 448.2 305.1 435.3 293.9 408.3L288.4 395.1C276.5 369.5 286.8 338.3 312.2 324.2L348.4 303.1L354.5 294.5C363.4 280.5 378.9 272 395.5 272C412.1 272 427.6 280.5 436.6 294.5L438.5 297.4L454.1 293C461.6 290.9 469.5 291.1 476.9 293.4C478.9 281.2 480 268.7 480 256C480 164.2 424.8 85.31 345.8 50.71L345.8 50.7zM462.7 323.9L446.9 328.3C433.4 332 419.1 326.6 411.6 314.8L409.6 311.7C406.5 306.9 401.2 304 395.5 304C389.8 304 384.5 306.9 381.4 311.7L375.3 321.2C372.5 325.7 368.6 329.4 363.1 331.9L327.8 352.1C316.9 358.2 312.5 371.5 317.6 382.9L323.1 395.3C328.3 406.8 341.5 412.3 353.4 407.9L372 401C377 399.1 382.7 399.9 386.1 403L409.4 419.3C436.6 393.6 457.5 361.3 469.2 324.8L468.4 324.4C466.6 323.5 464.6 323.3 462.7 323.9V323.9zM315.6 40.01C296.6 34.79 276.6 32 256 32C132.3 32 32 132.3 32 256C32 262.4 32.27 268.8 32.8 275L86.54 285.8C89.17 286.3 91.88 285.5 93.77 283.6L109.1 268.2C128.4 248.9 160.1 254.2 173.2 278.6L182.5 297.2C184.6 301.4 188.8 304 193.5 304C197.1 304 201.2 299.7 199.9 295.4L193.9 275.5C186.2 249.8 205.5 224 232.3 224H234.6C242.6 224 250.1 219.1 254.6 213.3L265.3 197.3C267.1 194.4 267 190.7 265 188L248.9 166.5C231.7 143.6 243.4 110.6 271.2 103.7L288.2 99.45C290.7 98.83 292.7 97.05 293.7 94.66L315.6 40.01z"/>
</>],
['regular',<>
	<path d="M195.9 344.5C204.5 346.6 209.7 355.3 207.5 363.9C205.4 372.5 196.7 377.7 188.1 375.5L156.1 367.5C147.5 365.4 142.3 356.7 144.5 348.1C146.6 339.5 155.3 334.3 163.9 336.5L195.9 344.5zM248.1 347.5C239.5 345.4 234.3 336.7 236.5 328.1L244.5 296.1C246.6 287.5 255.3 282.3 263.9 284.5C272.5 286.6 277.7 295.3 275.5 303.9L267.5 335.9C265.4 344.5 256.7 349.7 248.1 347.5zM334.3 167.2C330.4 175.1 320.7 178.3 312.8 174.3C304.9 170.4 301.7 160.7 305.7 152.8L321.7 120.8C325.6 112.9 335.3 109.7 343.2 113.7C351.1 117.6 354.3 127.3 350.3 135.2L334.3 167.2zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM324.9 59.69L308.6 100.6C305.7 107.8 299.6 113.1 292.1 114.1L275.1 119.2C258.4 123.4 251.4 143.2 261.7 156.9L277.8 178.4C283.9 186.6 284.2 197.7 278.6 206.1L267.9 222.2C260.5 233.3 247.1 239.1 234.6 239.1H232.3C216.2 239.1 204.6 255.5 209.3 270.9L215.2 290.8C219.6 305.4 208.7 319.1 193.5 319.1C182.8 319.1 172.1 313.9 168.2 304.3L158.9 285.8C151.6 271.1 132 267.1 120.5 279.5L105.1 294.9C99.41 300.6 91.27 303.1 83.41 301.5L51.68 295.1C69.98 391.3 154.5 464 256 464C304.1 464 348.3 447.7 383.5 420.3L377.6 416L358.1 422.9C339.2 430.3 317.1 421 308.5 401.8L302.1 389.4C294.5 370.5 301.9 348.2 319.1 338.1L356.2 317.1C358.5 316.7 360.4 314.8 361.8 312.6L367.9 303.1C373.1 293.7 384.4 287.1 395.5 287.1C406.7 287.1 417.1 293.7 423.1 303.1L425.1 306.2C428.8 312 435.9 314.7 442.6 312.9L457.2 308.8C461.7 291.9 464 274.2 464 255.1C464 165.3 405.9 88.13 324.9 59.69L324.9 59.69z"/>
</>],
['solid',<>
	<path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM51.68 295.1L83.41 301.5C91.27 303.1 99.41 300.6 105.1 294.9L120.5 279.5C132 267.1 151.6 271.1 158.9 285.8L168.2 304.3C172.1 313.9 182.8 319.1 193.5 319.1C208.7 319.1 219.6 305.4 215.2 290.8L209.3 270.9C204.6 255.5 216.2 240 232.3 240H234.6C247.1 240 260.5 233.3 267.9 222.2L278.6 206.1C284.2 197.7 283.9 186.6 277.8 178.4L261.7 156.9C251.4 143.2 258.4 123.4 275.1 119.2L292.1 114.1C299.6 113.1 305.7 107.8 308.6 100.6L324.9 59.69C303.4 52.12 280.2 48 255.1 48C141.1 48 47.1 141.1 47.1 256C47.1 269.4 49.26 282.5 51.68 295.1L51.68 295.1zM450.4 300.4L434.6 304.9C427.9 306.7 420.8 304 417.1 298.2L415.1 295.1C409.1 285.7 398.7 279.1 387.5 279.1C376.4 279.1 365.1 285.7 359.9 295.1L353.8 304.6C352.4 306.8 350.5 308.7 348.2 309.1L311.1 330.1C293.9 340.2 286.5 362.5 294.1 381.4L300.5 393.8C309.1 413 331.2 422.3 350.1 414.9L353.5 413.1C363.6 410.2 374.8 411.8 383.5 418.1L385 419.2C422.2 389.7 449.1 347.8 459.4 299.7C456.4 299.4 453.4 299.6 450.4 300.4H450.4zM156.1 367.5L188.1 375.5C196.7 377.7 205.4 372.5 207.5 363.9C209.7 355.3 204.5 346.6 195.9 344.5L163.9 336.5C155.3 334.3 146.6 339.5 144.5 348.1C142.3 356.7 147.5 365.4 156.1 367.5V367.5zM236.5 328.1C234.3 336.7 239.5 345.4 248.1 347.5C256.7 349.7 265.4 344.5 267.5 335.9L275.5 303.9C277.7 295.3 272.5 286.6 263.9 284.5C255.3 282.3 246.6 287.5 244.5 296.1L236.5 328.1zM321.7 120.8L305.7 152.8C301.7 160.7 304.9 170.4 312.8 174.3C320.7 178.3 330.4 175.1 334.3 167.2L350.3 135.2C354.3 127.3 351.1 117.6 343.2 113.7C335.3 109.7 325.6 112.9 321.7 120.8V120.8z"/>
</>],
['thin',<>
	<path d="M193.9 352.2C198.2 353.3 200.8 357.7 199.8 361.9C198.7 366.2 194.3 368.8 190.1 367.8L158.1 359.8C153.8 358.7 151.2 354.3 152.2 350.1C153.3 345.8 157.7 343.2 161.9 344.2L193.9 352.2zM250.1 339.8C245.8 338.7 243.2 334.3 244.2 330.1L252.2 298.1C253.3 293.8 257.7 291.2 261.9 292.2C266.2 293.3 268.8 297.7 267.8 301.9L259.8 333.9C258.7 338.2 254.3 340.8 250.1 339.8zM327.2 163.6C325.2 167.5 320.4 169.1 316.4 167.2C312.5 165.2 310.9 160.4 312.8 156.4L328.8 124.4C330.8 120.5 335.6 118.9 339.6 120.8C343.5 122.8 345.1 127.6 343.2 131.6L327.2 163.6zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM334.9 29.26L315.4 100.5C312.4 111.7 303.5 120.4 292.3 123.2L277 126.1C265.9 129.8 261.2 142.1 268.1 152.1L284.2 173.6C292.4 184.5 292.8 199.3 285.2 210.6L274.5 226.6C265.6 239.1 250.6 247.1 234.6 247.1H232.3C221.5 247.1 213.9 258.3 216.9 268.6L222.9 288.5C228.8 308.2 214.1 327.1 193.5 327.1C179.8 327.1 167.2 320.2 161 307.9L151.7 289.4C146.9 279.6 133.8 277.5 126.1 285.2L110.5 300.8C103.1 308.2 92.53 311.5 82.2 309.6L19.71 298.3C39.67 410.7 137.9 496 256 496C310.9 496 361.6 477.5 402 446.5L378.7 426.4C372.1 420.7 362.9 419 354.7 422.1L353.8 422.4C330 431.2 303.6 420.2 293.2 397.1L287.7 384.7C277.5 361.1 286.4 335.3 308.1 323.2L344.3 302.1C345.4 302.3 346.4 301.4 347.1 300.3L353.2 290.8C360.7 279.1 373.6 271.1 387.5 271.1C401.4 271.1 414.3 279.1 421.8 290.8L423.8 293.9C425.7 296.7 429.2 298.1 432.4 297.2L447.1 293.1C455.6 290.7 464.6 291.9 472.1 296.4L490.5 307.4C494.1 290.8 496 273.6 496 255.1C496 151.1 428.7 61.88 334.9 29.26L334.9 29.26zM451.4 308.5L436.7 312.6C426.7 315.4 415.1 311.3 410.3 302.5L408.4 299.4C403.8 292.3 395.1 287.1 387.5 287.1C379.1 287.1 371.2 292.3 366.7 299.4L360.6 308.9C358.5 312.3 355.5 315 352.1 316.9L315.9 337.1C301.4 345.2 295.5 363 302.3 378.2L307.8 390.5C314.7 405.9 332.4 413.3 348.2 407.4L349.1 407.1C362.8 402 378.1 404.8 389.1 414.3L414.5 436.2C448.2 406.6 473.4 367.7 486.4 323.6L463.9 310.2C460.2 307.9 455.7 307.3 451.4 308.5H451.4zM319.6 24.51C299.3 18.96 278 16 256 16C123.5 16 16 123.5 16 256C16 264.6 16.46 273.2 17.35 281.6L85.06 293.9C90.22 294.8 95.52 293.2 99.23 289.4L114.8 273.9C130.2 258.4 156.3 262.7 166 282.2L175.3 300.8C178.8 307.6 185.8 311.1 193.5 311.1C203.4 311.1 210.4 302.5 207.6 293.1L201.6 273.2C195.4 252.7 210.8 231.1 232.3 231.1H234.6C245.3 231.1 255.3 226.7 261.2 217.7L271.9 201.7C275.7 196 275.5 188.6 271.4 183.2L255.3 161.7C241.6 143.4 250.9 117 273.1 111.5L288.4 107.6C294 106.2 298.5 101.9 299.1 96.33L319.6 24.51z"/>
</>],

]);

const EarthAsia: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

EarthAsia.displayName = "EarthAsia";

export default EarthAsia;