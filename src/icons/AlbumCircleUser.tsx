
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368zM432 480C462.2 480 489.5 468.1 509.7 448.7C503.5 429.7 485.6 416 464.6 416H399.4C378.4 416 360.5 429.7 354.3 448.7C374.5 468.1 401.8 480 432 480V480zM432 384C458.5 384 480 362.5 480 336C480 309.5 458.5 288 432 288C405.5 288 384 309.5 384 336C384 362.5 405.5 384 432 384z"/><path className="fa-secondary" d="M384 32C419.3 32 448 60.65 448 96V192.7C442.7 192.2 437.4 192 432 192C411.9 192 392.5 195.4 374.5 201.6C352.3 140 293.3 96 223.1 96C135.6 96 63.1 167.6 63.1 256C63.1 344.4 135.6 416 223.1 416C236.9 416 249.4 414.5 261.4 411.6C267.9 437.1 279.1 460.3 296.2 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM255.1 256C255.1 273.7 241.7 288 223.1 288C206.3 288 191.1 273.7 191.1 256C191.1 238.3 206.3 224 223.1 224C241.7 224 255.1 238.3 255.1 256z"/>
</>],
['light',<>
	<path d="M384 64H64C46.33 64 32 78.33 32 96V416C32 433.7 46.33 448 64 448H275.2C281 459.4 288.1 470.2 296.2 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V192.7C442.7 192.2 437.4 192 432 192C426.6 192 421.3 192.2 416 192.7V96C416 78.33 401.7 64 384 64V64zM224 96C293.3 96 352.3 140 374.5 201.6C364.3 205.1 354.5 209.6 345.2 214.8C328.1 164.3 280.3 128 224 128C153.3 128 96 185.3 96 256C96 326.7 153.3 384 224 384C235.2 384 246 382.6 256.4 379.9C257.1 390.7 258.8 401.3 261.4 411.6C249.4 414.5 236.9 416 223.1 416C135.6 416 63.1 344.4 63.1 256C63.1 167.6 135.6 96 223.1 96L224 96zM200 256C200 242.7 210.7 232 224 232C237.3 232 248 242.7 248 256C248 269.3 237.3 280 224 280C210.7 280 200 269.3 200 256zM376 344C376 313.1 401.1 288 432 288C462.9 288 488 313.1 488 344C488 374.9 462.9 400 432 400C401.1 400 376 374.9 376 344zM432 368C445.3 368 456 357.3 456 344C456 330.7 445.3 320 432 320C418.7 320 408 330.7 408 344C408 357.3 418.7 368 432 368zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM460.2 448H403.8C391.4 448 379.9 453.5 372 462.6C389.3 473.6 409.9 480 432 480C454.1 480 474.7 473.6 491.1 462.6C484.1 453.5 472.6 448 460.2 448H460.2zM544 368C544 306.1 493.9 256 432 256C370.1 256 320 306.1 320 368C320 396.2 330.5 422.1 347.7 441.8C361.6 425.6 381.9 416 403.8 416H460.2C482.1 416 502.4 425.6 516.3 441.8C533.5 422.1 544 396.2 544 368H544z"/>
</>],
['regular',<>
	<path d="M48 96V416C48 424.8 55.16 432 64 432H267.1C274.8 449.5 284.4 465.7 296.2 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V192.7C442.7 192.2 437.4 192 432 192C421.1 192 410.4 192.1 400 194.9V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96V96zM224 112C286.5 112 339.7 151.8 359.6 207.5C298.5 235.1 256 296.6 256 368C256 377.5 256.8 386.8 258.2 395.9C247.2 398.6 235.8 400 224 400C144.5 400 80 335.5 80 256C80 176.5 144.5 112 224 112zM224 224C206.3 224 192 238.3 192 256C192 273.7 206.3 288 224 288C241.7 288 256 273.7 256 256C256 238.3 241.7 224 224 224zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM464.6 416H399.4C378.4 416 360.5 429.7 354.3 448.7C374.5 468.1 401.8 480 432 480C462.2 480 489.5 468.1 509.7 448.7C503.5 429.7 485.6 416 464.6 416V416zM432 288C405.5 288 384 309.5 384 336C384 362.5 405.5 384 432 384C458.5 384 480 362.5 480 336C480 309.5 458.5 288 432 288z"/>
</>],
['solid',<>
	<path d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V192.7C442.7 192.2 437.4 192 432 192C411.9 192 392.5 195.4 374.5 201.6C352.3 140 293.3 96 224 96C135.6 96 64 167.6 64 256C64 344.4 135.6 416 224 416C236.9 416 249.4 414.5 261.4 411.6C267.9 437.1 279.1 460.3 296.2 480H64C28.65 480 .0003 451.3 .0003 416L0 96zM192 256C192 238.3 206.3 224 224 224C241.7 224 256 238.3 256 256C256 273.7 241.7 288 224 288C206.3 288 192 273.7 192 256zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM464.6 416H399.4C378.4 416 360.5 429.7 354.3 448.7C374.5 468.1 401.8 480 432 480C462.2 480 489.5 468.1 509.7 448.7C503.5 429.7 485.6 416 464.6 416V416zM432 288C405.5 288 384 309.5 384 336C384 362.5 405.5 384 432 384C458.5 384 480 362.5 480 336C480 309.5 458.5 288 432 288z"/>
</>],
['thin',<>
	<path d="M384 48H63.1C37.49 48 15.1 69.49 15.1 96V416C15.1 442.5 37.49 464 63.1 464H284.5C288.1 469.6 292 474.9 296.2 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V192.7C442.7 192.2 437.4 192 432 192V96C432 69.49 410.5 48 384 48H384zM223.1 96C293.3 96 352.3 140 374.5 201.6C369.4 203.4 364.5 205.3 359.6 207.5C339.7 151.8 286.5 112 223.1 112C144.5 112 79.1 176.5 79.1 256C79.1 335.5 144.5 400 223.1 400C235.8 400 247.2 398.6 258.2 395.9C259 401.2 260.1 406.5 261.4 411.6C249.4 414.5 236.9 416 223.1 416C135.6 416 63.1 344.4 63.1 256C63.1 167.6 135.6 96 223.1 96V96zM255.1 256C255.1 273.7 241.7 288 223.1 288C206.3 288 191.1 273.7 191.1 256C191.1 238.3 206.3 224 223.1 224C241.7 224 255.1 238.3 255.1 256zM223.1 240C215.2 240 207.1 247.2 207.1 256C207.1 264.8 215.2 272 223.1 272C232.8 272 239.1 264.8 239.1 256C239.1 247.2 232.8 240 223.1 240zM384 336C384 309.5 405.5 288 432 288C458.5 288 480 309.5 480 336C480 362.5 458.5 384 432 384C405.5 384 384 362.5 384 336zM432 368C449.7 368 464 353.7 464 336C464 318.3 449.7 304 432 304C414.3 304 400 318.3 400 336C400 353.7 414.3 368 432 368zM576 368C576 447.5 511.5 512 432 512C352.5 512 287.1 447.5 287.1 368C287.1 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM506.5 462.1C497 443.1 477.7 432 456.4 432H407.6C386.3 432 366.1 443.1 357.5 462.1L354.1 469.6C375.7 486.2 402.7 496 432 496C461.3 496 488.3 486.2 509.9 469.6L506.5 462.1zM560 368C560 297.3 502.7 240 432 240C361.3 240 304 297.3 304 368C304 403.5 318.4 435.5 341.7 458.7L343.2 455.8C355.4 431.4 380.3 416 407.6 416H456.4C483.7 416 508.6 431.4 520.8 455.8L522.3 458.7C545.6 435.5 560 403.5 560 368z"/>
</>],

]);

const AlbumCircleUser: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

AlbumCircleUser.displayName = "AlbumCircleUser";

export default AlbumCircleUser;