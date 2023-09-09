
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M238.4 264.1L318.3 424.8C322.3 432.7 319.1 442.4 311.2 446.3C303.3 450.3 293.6 447.1 289.7 439.2L270.1 400H177.9L158.3 439.2C154.4 447.1 144.7 450.3 136.8 446.3C128.9 442.4 125.7 432.7 129.7 424.8L209.6 264.1C210.4 263.4 211.4 261.1 212.7 260.7C214.1 259.2 215.8 258.1 217.6 257.3C219.7 256.4 221.9 255.1 223.1 255.1C226.1 255.1 228.3 256.4 230.4 257.3C232.2 258.1 233.9 259.2 235.3 260.7C236.6 261.1 237.6 263.4 238.4 264.1V264.1zM254.1 368L223.1 307.8L193.9 368H254.1z"/><path className="fa-secondary" d="M224 307.8L254.1 368H193.9L224 307.8zM224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80V144C80 64.47 144.5 0 224 0zM224 64C179.8 64 144 99.82 144 144V192H304V144C304 99.82 268.2 64 224 64zM136.8 446.3C144.7 450.3 154.4 447.1 158.3 439.2L177.9 400H270.1L289.7 439.2C293.6 447.1 303.3 450.3 311.2 446.3C319.1 442.4 322.3 432.7 318.3 424.8L238.4 264.1C237.6 263.4 236.6 261.1 235.3 260.7C233.9 259.2 232.2 258.1 230.4 257.3C228.3 256.4 226.1 255.1 224 255.1C221.9 255.1 219.7 256.4 217.6 257.3C215.8 258.1 214.1 259.3 212.6 260.7C211.4 261.1 210.4 263.4 209.6 264.1L129.7 424.8C125.7 432.7 128.9 442.4 136.8 446.3V446.3z"/>
</>],
['light',<>
	<path d="M129.7 424.8L209.6 264.1C210.4 263.4 211.4 261.1 212.6 260.7C214.1 259.3 215.8 258.1 217.6 257.3C219.7 256.4 221.9 255.1 224 255.1C226.1 255.1 228.3 256.4 230.4 257.3C232.2 258.1 233.9 259.2 235.3 260.7C236.6 261.1 237.6 263.4 238.4 264.1L318.3 424.8C322.3 432.7 319.1 442.4 311.2 446.3C303.3 450.3 293.6 447.1 289.7 439.2L270.1 400H177.9L158.3 439.2C154.4 447.1 144.7 450.3 136.8 446.3C128.9 442.4 125.7 432.7 129.7 424.8V424.8zM193.9 368H254.1L224 307.8L193.9 368zM224 0C294.7 0 352 57.31 352 128V192H368C412.2 192 448 227.8 448 272V432C448 476.2 412.2 512 368 512H80C35.82 512 0 476.2 0 432V272C0 227.8 35.82 192 80 192H96V128C96 57.31 153.3 0 224 0zM224 32C170.1 32 128 74.98 128 128V192H320V128C320 74.98 277 32 224 32zM80 224C53.49 224 32 245.5 32 272V432C32 458.5 53.49 480 80 480H368C394.5 480 416 458.5 416 432V272C416 245.5 394.5 224 368 224H80z"/>
</>],
['regular',<>
	<path d="M122.5 405.3L202.4 245.5C203.6 243.1 205.1 240.9 207 239C209.2 236.9 211.7 235.2 214.5 233.1C217.6 232.6 220.8 231.1 224 231.1C227.2 231.1 230.4 232.6 233.5 233.1C236.3 235.2 238.8 236.9 240.1 239C242.9 240.9 244.4 243.1 245.6 245.5L325.5 405.3C331.4 417.1 326.6 431.5 314.7 437.5C302.9 443.4 288.5 438.6 282.5 426.7L269.2 400H178.8L165.5 426.7C159.5 438.6 145.1 443.4 133.3 437.5C121.4 431.5 116.6 417.1 122.5 405.3H122.5zM202.8 352H245.2L224 309.7L202.8 352zM224 0C294.7 0 352 57.31 352 128V160H384C419.3 160 448 188.7 448 224V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V224C0 188.7 28.65 160 64 160H96V128C96 57.31 153.3 0 224 0zM224 48C179.8 48 144 83.82 144 128V160H304V128C304 83.82 268.2 48 224 48zM48 224V448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V224C400 215.2 392.8 208 384 208H64C55.16 208 48 215.2 48 224z"/>
</>],
['solid',<>
	<path d="M224 307.8L254.1 368H193.9L224 307.8zM224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80V144C80 64.47 144.5 0 224 0zM224 64C179.8 64 144 99.82 144 144V192H304V144C304 99.82 268.2 64 224 64zM136.8 446.3C144.7 450.3 154.4 447.1 158.3 439.2L177.9 400H270.1L289.7 439.2C293.6 447.1 303.3 450.3 311.2 446.3C319.1 442.4 322.3 432.7 318.3 424.8L238.4 264.1C237.6 263.4 236.6 261.1 235.3 260.7C233.9 259.2 232.2 258.1 230.4 257.3C228.3 256.4 226.1 255.1 224 255.1C221.9 255.1 219.7 256.4 217.6 257.3C215.8 258.1 214.1 259.3 212.6 260.7C211.4 261.1 210.4 263.4 209.6 264.1L129.7 424.8C125.7 432.7 128.9 442.4 136.8 446.3V446.3z"/>
</>],
['thin',<>
	<path d="M152.9 388.3L216.8 260.5C217.2 259.8 217.6 259.1 218.2 258.5C218.4 258.2 218.7 258 218.9 257.8C219.5 257.4 220.1 256.1 220.8 256.7C221.9 256.2 222.9 255.1 224 255.1C226.1 255.1 228.1 256.8 229.5 258.2C229.8 258.4 229.1 258.6 230.1 258.9C230.6 259.4 230.9 259.9 231.2 260.5L295.1 388.3C295.1 388.4 295.2 388.5 295.2 388.6L319.2 436.4C321.1 440.4 319.5 445.2 315.6 447.2C311.6 449.1 306.8 447.5 304.8 443.6L283.1 400H164.9L143.2 443.6C141.2 447.5 136.4 449.1 132.4 447.2C128.5 445.2 126.9 440.4 128.8 436.4L152.8 388.6C152.8 388.5 152.9 388.4 152.9 388.3H152.9zM172.9 384H275.1L224 281.9L172.9 384zM224 0C294.7 0 352 57.31 352 128V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H96V128C96 57.31 153.3 0 224 0zM224 16C162.1 16 112 66.14 112 128V192H336V128C336 66.14 285.9 16 224 16zM16 256V448C16 474.5 37.49 496 64 496H384C410.5 496 432 474.5 432 448V256C432 229.5 410.5 208 384 208H64C37.49 208 16 229.5 16 256z"/>
</>],

]);

const LockA: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

LockA.displayName = "LockA";

export default LockA;
