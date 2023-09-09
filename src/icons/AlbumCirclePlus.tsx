
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM416 303.1V351.1H368C359.2 351.1 352 359.2 352 367.1C352 376.8 359.2 383.1 368 383.1H416V431.1C416 440.8 423.2 447.1 432 447.1C440.8 447.1 448 440.8 448 431.1V383.1H496C504.8 383.1 512 376.8 512 367.1C512 359.2 504.8 351.1 496 351.1H448V303.1C448 295.2 440.8 287.1 432 287.1C423.2 287.1 416 295.2 416 303.1z"/><path className="fa-secondary" d="M384 32C419.3 32 448 60.65 448 96V192.7C442.7 192.2 437.4 192 432 192C411.9 192 392.5 195.4 374.5 201.6C352.3 140 293.3 96 223.1 96C135.6 96 63.1 167.6 63.1 256C63.1 344.4 135.6 416 223.1 416C236.9 416 249.4 414.5 261.4 411.6C267.9 437.1 279.1 460.3 296.2 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM255.1 256C255.1 273.7 241.7 288 223.1 288C206.3 288 191.1 273.7 191.1 256C191.1 238.3 206.3 224 223.1 224C241.7 224 255.1 238.3 255.1 256z"/>
</>],
['light',<>
	<path d="M384 64H64C46.33 64 32 78.33 32 96V416C32 433.7 46.33 448 64 448H275.2C281 459.4 288.1 470.2 296.2 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V192.7C442.7 192.2 437.4 192 432 192C426.6 192 421.3 192.2 416 192.7V96C416 78.33 401.7 64 384 64V64zM224 96C293.3 96 352.3 140 374.5 201.6C364.3 205.1 354.5 209.6 345.2 214.8C328.1 164.3 280.3 128 224 128C153.3 128 96 185.3 96 256C96 326.7 153.3 384 224 384C235.2 384 246 382.6 256.4 379.9C257.1 390.7 258.8 401.3 261.4 411.6C249.4 414.5 236.9 416 223.1 416C135.6 416 63.1 344.4 63.1 256C63.1 167.6 135.6 96 223.1 96L224 96zM200 256C200 242.7 210.7 232 224 232C237.3 232 248 242.7 248 256C248 269.3 237.3 280 224 280C210.7 280 200 269.3 200 256zM448 351.1H496C504.8 351.1 512 359.2 512 367.1C512 376.8 504.8 383.1 496 383.1H448V431.1C448 440.8 440.8 447.1 432 447.1C423.2 447.1 416 440.8 416 431.1V383.1H368C359.2 383.1 352 376.8 352 367.1C352 359.2 359.2 351.1 368 351.1H416V303.1C416 295.2 423.2 287.1 432 287.1C440.8 287.1 448 295.2 448 303.1V351.1zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM432 256C370.1 256 320 306.1 320 368C320 429.9 370.1 480 432 480C493.9 480 544 429.9 544 368C544 306.1 493.9 256 432 256z"/>
</>],
['regular',<>
	<path d="M48 96V416C48 424.8 55.16 432 64 432H267.1C274.8 449.5 284.4 465.7 296.2 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V192.7C442.7 192.2 437.4 192 432 192C421.1 192 410.4 192.1 400 194.9V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96V96zM224 112C286.5 112 339.7 151.8 359.6 207.5C298.5 235.1 256 296.6 256 368C256 377.5 256.8 386.8 258.2 395.9C247.2 398.6 235.8 400 224 400C144.5 400 80 335.5 80 256C80 176.5 144.5 112 224 112zM224 224C206.3 224 192 238.3 192 256C192 273.7 206.3 288 224 288C241.7 288 256 273.7 256 256C256 238.3 241.7 224 224 224zM288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368zM448 303.1C448 295.2 440.8 287.1 432 287.1C423.2 287.1 416 295.2 416 303.1V351.1H368C359.2 351.1 352 359.2 352 367.1C352 376.8 359.2 383.1 368 383.1H416V431.1C416 440.8 423.2 447.1 432 447.1C440.8 447.1 448 440.8 448 431.1V383.1H496C504.8 383.1 512 376.8 512 367.1C512 359.2 504.8 351.1 496 351.1H448V303.1z"/>
</>],
['solid',<>
	<path d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V192.7C442.7 192.2 437.4 192 432 192C411.9 192 392.5 195.4 374.5 201.6C352.3 140 293.3 96 224 96C135.6 96 64 167.6 64 256C64 344.4 135.6 416 224 416C236.9 416 249.4 414.5 261.4 411.6C267.9 437.1 279.1 460.3 296.2 480H64C28.65 480 .0003 451.3 .0003 416L0 96zM192 256C192 238.3 206.3 224 224 224C241.7 224 256 238.3 256 256C256 273.7 241.7 288 224 288C206.3 288 192 273.7 192 256zM288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368zM448 303.1C448 295.2 440.8 287.1 432 287.1C423.2 287.1 416 295.2 416 303.1V351.1H368C359.2 351.1 352 359.2 352 367.1C352 376.8 359.2 383.1 368 383.1H416V431.1C416 440.8 423.2 447.1 432 447.1C440.8 447.1 448 440.8 448 431.1V383.1H496C504.8 383.1 512 376.8 512 367.1C512 359.2 504.8 351.1 496 351.1H448V303.1z"/>
</>],
['thin',<>
	<path d="M384 48H63.1C37.49 48 15.1 69.49 15.1 96V416C15.1 442.5 37.49 464 63.1 464H284.5C288.1 469.6 292 474.9 296.2 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V192.7C442.7 192.2 437.4 192 432 192V96C432 69.49 410.5 48 384 48H384zM223.1 96C293.3 96 352.3 140 374.5 201.6C369.4 203.4 364.5 205.3 359.6 207.5C339.7 151.8 286.5 112 223.1 112C144.5 112 79.1 176.5 79.1 256C79.1 335.5 144.5 400 223.1 400C235.8 400 247.2 398.6 258.2 395.9C259 401.2 260.1 406.5 261.4 411.6C249.4 414.5 236.9 416 223.1 416C135.6 416 63.1 344.4 63.1 256C63.1 167.6 135.6 96 223.1 96V96zM255.1 256C255.1 273.7 241.7 288 223.1 288C206.3 288 191.1 273.7 191.1 256C191.1 238.3 206.3 224 223.1 224C241.7 224 255.1 238.3 255.1 256zM223.1 240C215.2 240 207.1 247.2 207.1 256C207.1 264.8 215.2 272 223.1 272C232.8 272 239.1 264.8 239.1 256C239.1 247.2 232.8 240 223.1 240zM440 359.1H504C508.4 359.1 512 363.6 512 367.1C512 372.4 508.4 375.1 504 375.1H440V439.1C440 444.4 436.4 447.1 432 447.1C427.6 447.1 424 444.4 424 439.1V375.1H360C355.6 375.1 352 372.4 352 367.1C352 363.6 355.6 359.1 360 359.1H424V295.1C424 291.6 427.6 287.1 432 287.1C436.4 287.1 440 291.6 440 295.1V359.1zM576 368C576 447.5 511.5 512 432 512C352.5 512 287.1 447.5 287.1 368C287.1 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM432 240C361.3 240 304 297.3 304 368C304 438.7 361.3 496 432 496C502.7 496 560 438.7 560 368C560 297.3 502.7 240 432 240z"/>
</>],

]);

const AlbumCirclePlus: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

AlbumCirclePlus.displayName = "AlbumCirclePlus";

export default AlbumCirclePlus;
