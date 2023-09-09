
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M71.78 185.7C62.01 176.7 61.35 161.6 70.31 151.8C79.26 142 94.45 141.4 104.2 150.3L200.2 238.3C205.2 242.9 208 249.3 208 256C208 262.7 205.2 269.1 200.2 273.7L104.2 361.7C94.45 370.6 79.27 369.1 70.31 360.2C61.35 350.4 62.01 335.3 71.78 326.3L148.5 256L71.78 185.7zM360 336C373.3 336 384 346.7 384 360C384 373.3 373.3 384 360 384H216C202.7 384 192 373.3 192 360C192 346.7 202.7 336 216 336H360z"/><path className="fa-secondary" d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM70.31 151.8C61.35 161.6 62.01 176.7 71.78 185.7L148.5 256L71.78 326.3C62.01 335.3 61.35 350.4 70.31 360.2C79.26 369.1 94.45 370.6 104.2 361.7L200.2 273.7C205.2 269.1 208 262.7 208 255.1C208 249.3 205.2 242.9 200.2 238.3L104.2 150.3C94.45 141.4 79.26 142 70.31 151.8V151.8zM216 336C202.7 336 192 346.7 192 360C192 373.3 202.7 384 216 384H360C373.3 384 384 373.3 384 360C384 346.7 373.3 336 360 336H216z"/>
</>],
['light',<>
	<path d="M106.4 147.9L218.4 243.9C221.1 246.9 224 251.3 224 256C224 260.7 221.1 265.1 218.4 268.1L106.4 364.1C99.7 369.9 89.6 369.1 83.85 362.4C78.1 355.7 78.88 345.6 85.59 339.9L183.4 256L85.59 172.1C78.88 166.4 78.1 156.3 83.85 149.6C89.6 142.9 99.7 142.1 106.4 147.9V147.9zM368 352C376.8 352 384 359.2 384 368C384 376.8 376.8 384 368 384H208C199.2 384 192 376.8 192 368C192 359.2 199.2 352 208 352H368zM384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 64H64C46.33 64 32 78.33 32 96V416C32 433.7 46.33 448 64 448H384C401.7 448 416 433.7 416 416V96C416 78.33 401.7 64 384 64z"/>
</>],
['regular',<>
	<path d="M136.2 150.3L232.2 238.3C237.2 242.9 240 249.3 240 256C240 262.7 237.2 269.1 232.2 273.7L136.2 361.7C126.4 370.6 111.3 369.1 102.3 360.2C93.35 350.4 94.01 335.3 103.8 326.3L180.5 256L103.8 185.7C94.01 176.7 93.35 161.6 102.3 151.8C111.3 142 126.4 141.4 136.2 150.3V150.3zM328 336C341.3 336 352 346.7 352 360C352 373.3 341.3 384 328 384H216C202.7 384 192 373.3 192 360C192 346.7 202.7 336 216 336H328zM384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z"/>
</>],
['solid',<>
	<path d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM70.31 151.8C61.35 161.6 62.01 176.7 71.78 185.7L148.5 256L71.78 326.3C62.01 335.3 61.35 350.4 70.31 360.2C79.26 369.1 94.45 370.6 104.2 361.7L200.2 273.7C205.2 269.1 208 262.7 208 255.1C208 249.3 205.2 242.9 200.2 238.3L104.2 150.3C94.45 141.4 79.26 142 70.31 151.8V151.8zM216 336C202.7 336 192 346.7 192 360C192 373.3 202.7 384 216 384H360C373.3 384 384 373.3 384 360C384 346.7 373.3 336 360 336H216z"/>
</>],
['thin',<>
	<path d="M109.2 153.9L221.2 249.9C222.1 251.4 224 253.7 224 256C224 258.3 222.1 260.6 221.2 262.1L109.2 358.1C105.9 360.1 100.8 360.6 97.93 357.2C95.05 353.9 95.44 348.8 98.79 345.9L203.7 255.1L98.79 166.1C95.44 163.2 95.05 158.1 97.93 154.8C100.8 151.4 105.9 151.1 109.2 153.9V153.9zM376 368C380.4 368 384 371.6 384 376C384 380.4 380.4 384 376 384H200C195.6 384 192 380.4 192 376C192 371.6 195.6 368 200 368H376zM384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 48H64C37.49 48 16 69.49 16 96V416C16 442.5 37.49 464 64 464H384C410.5 464 432 442.5 432 416V96C432 69.49 410.5 48 384 48z"/>
</>],

]);

const SquareTerminal: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SquareTerminal.displayName = "SquareTerminal";

export default SquareTerminal;