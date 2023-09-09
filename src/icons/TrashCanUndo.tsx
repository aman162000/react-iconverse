
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M284.2 0C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2zM217.8 167.9C226.7 177.8 225.9 192.1 216.1 201.8L182.5 232H240C288.6 232 328 271.4 328 320V360C328 373.3 317.3 384 304 384C290.7 384 280 373.3 280 360V320C280 297.9 262.1 280 240 280H182.5L216.1 310.2C225.9 319 226.7 334.2 217.8 344.1C208.1 353.9 193.8 354.7 183.9 345.8L103.9 273.8C98.89 269.3 96 262.8 96 256C96 249.2 98.89 242.7 103.9 238.2L183.9 166.2C193.8 157.3 208.1 158.1 217.8 167.9H217.8z"/><path className="fa-secondary" d="M32 96H416V448C416 483.3 387.3 512 352 512H96C60.65 512 32 483.3 32 448V96zM183.9 166.2L103.9 238.2C98.89 242.7 96 249.2 96 256C96 262.8 98.89 269.3 103.9 273.8L183.9 345.8C193.8 354.7 208.1 353.9 217.8 344.1C226.7 334.2 225.9 319 216.1 310.2L182.5 280H240C262.1 280 280 297.9 280 320V360C280 373.3 290.7 384 304 384C317.3 384 328 373.3 328 360V320C328 271.4 288.6 232 240 232H182.5L216.1 201.8C225.9 192.1 226.7 177.8 217.8 167.9C208.1 158.1 193.8 157.3 183.9 166.2V166.2z"/>
</>],
['light',<>
	<path d="M219.9 189.3C225.8 195.9 225.3 205.1 218.7 211.9L169.7 256H240C284.2 256 320 291.8 320 336V376C320 384.8 312.8 392 304 392C295.2 392 288 384.8 288 376V336C288 309.5 266.5 288 240 288H169.7L218.7 332.1C225.3 338 225.8 348.1 219.9 354.7C213.1 361.3 203.9 361.8 197.3 355.9L117.3 283.9C113.9 280.9 112 276.5 112 271.1C112 267.5 113.9 263.1 117.3 260.1L197.3 188.1C203.9 182.2 213.1 182.7 219.9 189.3V189.3zM310.1 22.56L336.9 64H432C440.8 64 448 71.16 448 80C448 88.84 440.8 96 432 96H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V96H16C7.164 96 0 88.84 0 80C0 71.16 7.164 64 16 64H111.1L137 22.56C145.8 8.526 161.2 0 177.7 0H270.3C286.8 0 302.2 8.526 310.1 22.56V22.56zM148.9 64H299.1L283.8 39.52C280.9 34.84 275.8 32 270.3 32H177.7C172.2 32 167.1 34.84 164.2 39.52L148.9 64zM64 432C64 458.5 85.49 480 112 480H336C362.5 480 384 458.5 384 432V96H64V432z"/>
</>],
['regular',<>
	<path d="M225.9 192.1C234.7 201.1 233.9 217.1 223.9 225.9L199.1 248H240C288.6 248 328 287.4 328 336V360C328 373.3 317.3 384 304 384C290.7 384 280 373.3 280 360V336C280 313.9 262.1 296 240 296H199.1L223.9 318.1C233.9 326.9 234.7 342 225.9 351.9C217.1 361.9 201.1 362.7 192.1 353.9L120.1 289.9C114.9 285.4 112 278.9 112 271.1C112 265.1 114.9 258.6 120.1 254.1L192.1 190.1C201.1 181.3 217.1 182.1 225.9 192.1V192.1zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"/>
</>],
['solid',<>
	<path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM416 448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128H416V448zM183.9 198.2L103.9 270.2C98.89 274.7 95.1 281.2 95.1 288C95.1 294.8 98.89 301.3 103.9 305.8L183.9 377.8C193.8 386.7 208.1 385.9 217.8 376.1C226.7 366.2 225.9 351 216.1 342.2L182.5 312H240C262.1 312 280 329.9 280 352V392C280 405.3 290.7 416 304 416C317.3 416 328 405.3 328 392V352C328 303.4 288.6 264 240 264H182.5L216.1 233.8C225.9 224.1 226.7 209.8 217.8 199.9C208.1 190.1 193.8 189.3 183.9 198.2H183.9z"/>
</>],
['thin',<>
	<path d="M115.6 64L143.8 18.8C151.1 7.105 163.9 0 177.7 0H270.3C284.1 0 296.9 7.105 304.2 18.8L332.4 64H440C444.4 64 448 67.58 448 72C448 76.42 444.4 80 440 80H8C3.582 80 0 76.42 0 72C0 67.58 3.582 64 8 64H115.6zM134.4 64H313.6L290.6 27.28C286.2 20.26 278.5 16 270.3 16H177.7C169.5 16 161.8 20.26 157.4 27.28L134.4 64zM40 112C44.42 112 48 115.6 48 120V440C48 470.9 73.07 496 104 496H344C374.9 496 400 470.9 400 440V120C400 115.6 403.6 112 408 112C412.4 112 416 115.6 416 120V440C416 479.8 383.8 512 344 512H104C64.24 512 32 479.8 32 440V120C32 115.6 35.58 112 40 112zM213.9 186.6C216.9 189.9 216.7 194.9 213.4 197.9L140.7 263.1H248C287.8 263.1 320 296.2 320 336V376C320 380.4 316.4 384 312 384C307.6 384 304 380.4 304 376V336C304 305.1 278.9 279.1 248 279.1H140.7L213.4 346.1C216.7 349.1 216.9 354.1 213.9 357.4C210.9 360.6 205.9 360.9 202.6 357.9L114.6 277.9C112.1 276.4 112 274.3 112 271.1C112 269.7 112.1 267.6 114.6 266.1L202.6 186.1C205.9 183.1 210.9 183.3 213.9 186.6V186.6z"/>
</>],

]);

const TrashCanUndo: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TrashCanUndo.displayName = "TrashCanUndo";

export default TrashCanUndo;
