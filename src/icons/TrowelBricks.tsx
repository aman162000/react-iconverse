
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 104H345C348.6 90.2 361.1 80 376 80H464C490.5 80 512 101.5 512 128C512 154.5 490.5 176 464 176H376C361.1 176 348.6 165.8 345 152H256V224C256 235.1 250.3 245.4 240.8 251.2C231.4 257.1 219.6 257.6 209.7 252.6L17.69 156.6C6.848 151.2 0 140.1 0 128C0 115.9 6.848 104.8 17.69 99.38L209.7 3.378C219.6-1.581 231.4-1.051 240.8 4.779C250.3 10.61 256 20.91 256 32V104z"/><path className="fa-secondary" d="M480 224C497.7 224 512 238.3 512 256V320C512 337.7 497.7 352 480 352H320C302.3 352 288 337.7 288 320V256C288 238.3 302.3 224 320 224H480zM0 416C0 398.3 14.33 384 32 384H128C145.7 384 160 398.3 160 416V480C160 497.7 145.7 512 128 512H32C14.33 512 0 497.7 0 480V416zM192 416C192 398.3 206.3 384 224 384H480C497.7 384 512 398.3 512 416V480C512 497.7 497.7 512 480 512H224C206.3 512 192 497.7 192 480V416z"/>
</>],
['light',<>
	<path d="M256 112H344C344 94.33 358.3 80 376 80H464C490.5 80 512 101.5 512 128C512 154.5 490.5 176 464 176H376C358.3 176 344 161.7 344 144H256V224C256 235.1 250.3 245.4 240.8 251.2C231.4 257.1 219.6 257.6 209.7 252.6L17.69 156.6C6.848 151.2 0 140.1 0 128C0 115.9 6.848 104.8 17.69 99.38L209.7 3.378C219.6-1.581 231.4-1.051 240.8 4.779C250.3 10.61 256 20.91 256 32V112zM224 224V32L32 128L224 224zM464 112H376V144H464C472.8 144 480 136.8 480 128C480 119.2 472.8 112 464 112zM320 224H480C497.7 224 512 238.3 512 256V480C512 497.7 497.7 512 480 512H32C14.33 512 0 497.7 0 480V384C0 366.3 14.33 352 32 352H288V256C288 238.3 302.3 224 320 224zM256 384V480H480V384H256zM224 384H32V480H224V384zM480 256H320V352H480V256z"/>
</>],
['regular',<>
	<path d="M240.8 4.779C250.3 10.61 256 20.91 256 32V104H345C348.6 90.2 361.1 80 376 80H464C490.5 80 512 101.5 512 128C512 154.5 490.5 176 464 176H376C361.1 176 348.6 165.8 345 152H256V224C256 235.1 250.3 245.4 240.8 251.2C231.4 257.1 219.6 257.6 209.7 252.6L17.69 156.6C6.848 151.2 0 140.1 0 128C0 115.9 6.848 104.8 17.69 99.38L209.7 3.378C219.6-1.581 231.4-1.051 240.8 4.779V4.779zM336 224H464C490.5 224 512 245.5 512 272V376C512 377.3 511.9 378.7 511.8 380C511.9 381.3 512 382.7 512 384V464C512 490.5 490.5 512 464 512H48C21.49 512 0 490.5 0 464V384C0 357.5 21.49 336 48 336H288V272C288 245.5 309.5 224 336 224zM256 384V464H464V384H256zM208 384H48V464H208V384zM464 272H336V336H464V272z"/>
</>],
['solid',<>
	<path d="M240.8 4.779C250.3 10.61 256 20.91 256 32V104H345C348.6 90.2 361.1 80 376 80H464C490.5 80 512 101.5 512 128C512 154.5 490.5 176 464 176H376C361.1 176 348.6 165.8 345 152H256V224C256 235.1 250.3 245.4 240.8 251.2C231.4 257.1 219.6 257.6 209.7 252.6L17.69 156.6C6.848 151.2 0 140.1 0 128C0 115.9 6.848 104.8 17.69 99.38L209.7 3.378C219.6-1.581 231.4-1.051 240.8 4.779V4.779zM288 256C288 238.3 302.3 224 320 224H480C497.7 224 512 238.3 512 256V320C512 337.7 497.7 352 480 352H320C302.3 352 288 337.7 288 320V256zM128 384C145.7 384 160 398.3 160 416V480C160 497.7 145.7 512 128 512H32C14.33 512 0 497.7 0 480V416C0 398.3 14.33 384 32 384H128zM480 384C497.7 384 512 398.3 512 416V480C512 497.7 497.7 512 480 512H224C206.3 512 192 497.7 192 480V416C192 398.3 206.3 384 224 384H480z"/>
</>],
['thin',<>
	<path d="M256 120H344V112C344 94.33 358.3 80 376 80H464C490.5 80 512 101.5 512 128C512 154.5 490.5 176 464 176H376C358.3 176 344 161.7 344 144V136H256V224C256 235.1 250.3 245.4 240.8 251.2C231.4 257.1 219.6 257.6 209.7 252.6L17.69 156.6C6.848 151.2 0 140.1 0 128C0 115.9 6.848 104.8 17.69 99.38L209.7 3.378C219.6-1.581 231.4-1.051 240.8 4.779C250.3 10.61 256 20.91 256 32V120zM216.8 17.69L24.84 113.7C19.42 116.4 16 121.9 16 128C16 134.1 19.42 139.6 24.84 142.3L216.8 238.3C221.8 240.8 227.7 240.5 232.4 237.6C237.1 234.7 239.1 229.5 239.1 223.1V31.1C239.1 26.45 237.1 21.3 232.4 18.39C227.7 15.47 221.8 15.21 216.8 17.69V17.69zM376 160H464C481.7 160 496 145.7 496 128C496 110.3 481.7 96 464 96H376C367.2 96 360 103.2 360 112V144C360 152.8 367.2 160 376 160zM288 368V272C288 254.3 302.3 240 320 240H480C497.7 240 512 254.3 512 272V480C512 497.7 497.7 512 480 512H32C14.33 512 0 497.7 0 480V400C0 382.3 14.33 368 32 368H288zM240 384V496H480C488.8 496 496 488.8 496 480V384H240zM32 384C23.16 384 16 391.2 16 400V480C16 488.8 23.16 496 32 496H224V384H32zM496 272C496 263.2 488.8 256 480 256H320C311.2 256 304 263.2 304 272V368H496V272z"/>
</>],

]);

const TrowelBricks: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TrowelBricks.displayName = "TrowelBricks";

export default TrowelBricks;