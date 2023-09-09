
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M271.7 0C298.4 0 320 21.63 320 48.32V65.6C314.8 64.55 309.5 64 304 64H80C74.52 64 69.17 64.55 64 65.6V48.32C64 21.63 85.63 0 112.3 0L271.7 0zM64 464V446.4C69.17 447.4 74.52 448 80 448H304C309.5 448 314.8 447.4 320 446.4V464C320 490.5 298.5 512 272 512H112C85.49 512 64 490.5 64 464zM64 272C64 258.7 74.75 248 88 248C101.3 248 112 258.7 112 272C112 285.3 101.3 296 88 296C74.75 296 64 285.3 64 272zM168 272C168 258.7 178.7 248 192 248C205.3 248 216 258.7 216 272C216 285.3 205.3 296 192 296C178.7 296 168 285.3 168 272zM320 272C320 285.3 309.3 296 296 296C282.7 296 272 285.3 272 272C272 258.7 282.7 248 296 248C309.3 248 320 258.7 320 272zM64 360C64 346.7 74.75 336 88 336C101.3 336 112 346.7 112 360C112 373.3 101.3 384 88 384C74.75 384 64 373.3 64 360zM216 360C216 373.3 205.3 384 192 384C178.7 384 168 373.3 168 360C168 346.7 178.7 336 192 336C205.3 336 216 346.7 216 360zM272 360C272 346.7 282.7 336 296 336C309.3 336 320 346.7 320 360C320 373.3 309.3 384 296 384C282.7 384 272 373.3 272 360z"/><path className="fa-secondary" d="M304 64C348.2 64 384 99.82 384 144V368C384 412.2 348.2 448 304 448H80C35.82 448 0 412.2 0 368V144C0 99.82 35.82 64 80 64H304zM80 128C71.16 128 64 135.2 64 144V176C64 184.8 71.16 192 80 192H304C312.8 192 320 184.8 320 176V144C320 135.2 312.8 128 304 128H80zM88 296C101.3 296 112 285.3 112 272C112 258.7 101.3 248 88 248C74.75 248 64 258.7 64 272C64 285.3 74.75 296 88 296zM192 248C178.7 248 168 258.7 168 272C168 285.3 178.7 296 192 296C205.3 296 216 285.3 216 272C216 258.7 205.3 248 192 248zM296 296C309.3 296 320 285.3 320 272C320 258.7 309.3 248 296 248C282.7 248 272 258.7 272 272C272 285.3 282.7 296 296 296zM88 336C74.75 336 64 346.7 64 360C64 373.3 74.75 384 88 384C101.3 384 112 373.3 112 360C112 346.7 101.3 336 88 336zM192 384C205.3 384 216 373.3 216 360C216 346.7 205.3 336 192 336C178.7 336 168 346.7 168 360C168 373.3 178.7 384 192 384zM296 336C282.7 336 272 346.7 272 360C272 373.3 282.7 384 296 384C309.3 384 320 373.3 320 360C320 346.7 309.3 336 296 336z"/>
</>],
['light',<>
	<path d="M64 144C64 135.2 71.16 128 80 128H304C312.8 128 320 135.2 320 144V208C320 216.8 312.8 224 304 224H80C71.16 224 64 216.8 64 208V144zM288 192V160H96V192H288zM80 280C80 266.7 90.75 256 104 256C117.3 256 128 266.7 128 280C128 293.3 117.3 304 104 304C90.75 304 80 293.3 80 280zM216 280C216 293.3 205.3 304 192 304C178.7 304 168 293.3 168 280C168 266.7 178.7 256 192 256C205.3 256 216 266.7 216 280zM256 280C256 266.7 266.7 256 280 256C293.3 256 304 266.7 304 280C304 293.3 293.3 304 280 304C266.7 304 256 293.3 256 280zM128 360C128 373.3 117.3 384 104 384C90.75 384 80 373.3 80 360C80 346.7 90.75 336 104 336C117.3 336 128 346.7 128 360zM168 360C168 346.7 178.7 336 192 336C205.3 336 216 346.7 216 360C216 373.3 205.3 384 192 384C178.7 384 168 373.3 168 360zM304 360C304 373.3 293.3 384 280 384C266.7 384 256 373.3 256 360C256 346.7 266.7 336 280 336C293.3 336 304 346.7 304 360zM64 65.6V48C64 21.49 85.49 0 112 0H272C298.5 0 320 21.49 320 48V65.6C356.5 73.01 384 105.3 384 144V368C384 406.7 356.5 438.1 320 446.4V464C320 490.5 298.5 512 272 512H112C85.49 512 64 490.5 64 464V446.4C27.48 438.1 0 406.7 0 368V144C0 105.3 27.48 73.01 64 65.6zM96 64H288V48C288 39.16 280.8 32 272 32H112C103.2 32 96 39.16 96 48V64zM112 480H272C280.8 480 288 472.8 288 464V448H96V464C96 472.8 103.2 480 112 480zM32 144V368C32 394.5 53.49 416 80 416H304C330.5 416 352 394.5 352 368V144C352 117.5 330.5 96 304 96H80C53.49 96 32 117.5 32 144z"/>
</>],
['regular',<>
	<path d="M280 160C288.8 160 296 167.2 296 176V208C296 216.8 288.8 224 280 224H104C95.16 224 88 216.8 88 208V176C88 167.2 95.16 160 104 160H280zM88 272C88 258.7 98.75 248 112 248C125.3 248 136 258.7 136 272C136 285.3 125.3 296 112 296C98.75 296 88 285.3 88 272zM216 272C216 285.3 205.3 296 192 296C178.7 296 168 285.3 168 272C168 258.7 178.7 248 192 248C205.3 248 216 258.7 216 272zM248 272C248 258.7 258.7 248 272 248C285.3 248 296 258.7 296 272C296 285.3 285.3 296 272 296C258.7 296 248 285.3 248 272zM136 336C136 349.3 125.3 360 112 360C98.75 360 88 349.3 88 336C88 322.7 98.75 312 112 312C125.3 312 136 322.7 136 336zM168 336C168 322.7 178.7 312 192 312C205.3 312 216 322.7 216 336C216 349.3 205.3 360 192 360C178.7 360 168 349.3 168 336zM296 336C296 349.3 285.3 360 272 360C258.7 360 248 349.3 248 336C248 322.7 258.7 312 272 312C285.3 312 296 322.7 296 336zM271.7 0C298.4 0 320 21.63 320 48.32V65.6C356.5 73.01 384 105.3 384 144V368C384 406.7 356.5 438.1 320 446.4V464C320 490.5 298.5 512 272 512H112C85.49 512 64 490.5 64 464V446.4C27.48 438.1 0 406.7 0 368V144C0 105.3 27.48 73.01 64 65.6V48.32C64 21.63 85.63 0 112.3 0L271.7 0zM304 112H80C62.33 112 48 126.3 48 144V368C48 385.7 62.33 400 80 400H304C321.7 400 336 385.7 336 368V144C336 126.3 321.7 112 304 112z"/>
</>],
['solid',<>
	<path d="M64 48C64 21.49 85.49 0 112 0H272C298.5 0 320 21.49 320 48H64zM304 80C348.2 80 384 115.8 384 160V352C384 396.2 348.2 432 304 432H80C35.82 432 0 396.2 0 352V160C0 115.8 35.82 80 80 80H304zM80 144C71.16 144 64 151.2 64 160V192C64 200.8 71.16 208 80 208H304C312.8 208 320 200.8 320 192V160C320 151.2 312.8 144 304 144H80zM88 296C101.3 296 112 285.3 112 272C112 258.7 101.3 248 88 248C74.75 248 64 258.7 64 272C64 285.3 74.75 296 88 296zM192 248C178.7 248 168 258.7 168 272C168 285.3 178.7 296 192 296C205.3 296 216 285.3 216 272C216 258.7 205.3 248 192 248zM296 296C309.3 296 320 285.3 320 272C320 258.7 309.3 248 296 248C282.7 248 272 258.7 272 272C272 285.3 282.7 296 296 296zM88 336C74.75 336 64 346.7 64 360C64 373.3 74.75 384 88 384C101.3 384 112 373.3 112 360C112 346.7 101.3 336 88 336zM192 384C205.3 384 216 373.3 216 360C216 346.7 205.3 336 192 336C178.7 336 168 346.7 168 360C168 373.3 178.7 384 192 384zM296 336C282.7 336 272 346.7 272 360C272 373.3 282.7 384 296 384C309.3 384 320 373.3 320 360C320 346.7 309.3 336 296 336zM112 512C85.49 512 64 490.5 64 464H320C320 490.5 298.5 512 272 512H112z"/>
</>],
['thin',<>
	<path d="M64 144C64 135.2 71.16 128 80 128H304C312.8 128 320 135.2 320 144V208C320 216.8 312.8 224 304 224H80C71.16 224 64 216.8 64 208V144zM80 208H304V144H80V208zM72 280C72 262.3 86.33 248 104 248C121.7 248 136 262.3 136 280C136 297.7 121.7 312 104 312C86.33 312 72 297.7 72 280zM104 264C95.16 264 88 271.2 88 280C88 288.8 95.16 296 104 296C112.8 296 120 288.8 120 280C120 271.2 112.8 264 104 264zM224 280C224 297.7 209.7 312 192 312C174.3 312 160 297.7 160 280C160 262.3 174.3 248 192 248C209.7 248 224 262.3 224 280zM192 296C200.8 296 208 288.8 208 280C208 271.2 200.8 264 192 264C183.2 264 176 271.2 176 280C176 288.8 183.2 296 192 296zM248 280C248 262.3 262.3 248 280 248C297.7 248 312 262.3 312 280C312 297.7 297.7 312 280 312C262.3 312 248 297.7 248 280zM280 264C271.2 264 264 271.2 264 280C264 288.8 271.2 296 280 296C288.8 296 296 288.8 296 280C296 271.2 288.8 264 280 264zM136 360C136 377.7 121.7 392 104 392C86.33 392 72 377.7 72 360C72 342.3 86.33 328 104 328C121.7 328 136 342.3 136 360zM104 376C112.8 376 120 368.8 120 360C120 351.2 112.8 344 104 344C95.16 344 88 351.2 88 360C88 368.8 95.16 376 104 376zM160 360C160 342.3 174.3 328 192 328C209.7 328 224 342.3 224 360C224 377.7 209.7 392 192 392C174.3 392 160 377.7 160 360zM192 344C183.2 344 176 351.2 176 360C176 368.8 183.2 376 192 376C200.8 376 208 368.8 208 360C208 351.2 200.8 344 192 344zM312 360C312 377.7 297.7 392 280 392C262.3 392 248 377.7 248 360C248 342.3 262.3 328 280 328C297.7 328 312 342.3 312 360zM280 376C288.8 376 296 368.8 296 360C296 351.2 288.8 344 280 344C271.2 344 264 351.2 264 360C264 368.8 271.2 376 280 376zM64 65.6V40C64 17.91 81.91 0 104 0H280C302.1 0 320 17.91 320 40V65.6C356.5 73.01 384 105.3 384 144V368C384 406.7 356.5 438.1 320 446.4V472C320 494.1 302.1 512 280 512H104C81.91 512 64 494.1 64 472V446.4C27.48 438.1 0 406.7 0 368V144C0 105.3 27.48 73.01 64 65.6zM80 64H304V40C304 26.75 293.3 16 280 16H104C90.75 16 80 26.75 80 40V64zM104 496H280C293.3 496 304 485.3 304 472V448H80V472C80 485.3 90.75 496 104 496zM304 432C339.3 432 368 403.3 368 368V144C368 108.7 339.3 80 304 80H80C44.65 80 16 108.7 16 144V368C16 403.3 44.62 431.1 79.94 432H304z"/>
</>],

]);

const WatchCalculator: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

WatchCalculator.displayName = "WatchCalculator";

export default WatchCalculator;