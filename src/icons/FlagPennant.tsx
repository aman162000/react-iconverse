
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M32 0C14.33 0 0 14.33 0 32v464C0 504.8 7.164 512 16 512h32C56.84 512 64 504.8 64 496V32C64 14.33 49.67 0 32 0z"/><path className="fa-secondary" d="M512 208c0 10.06-6.266 19.03-15.7 22.53L64 389.8V32c0-2.223-.832-4.172-1.264-6.266l433.6 159.7C505.7 188.1 512 197.9 512 208z"/>
</>],
['light',<>
	<path d="M496.5 185.8L31.7 14.53C30.93 6.418 24.31 0 16 0C7.164 0 0 7.164 0 16v480C0 504.8 7.164 512 16 512S32 504.8 32 496v-94.65l464.5-171.1C517.2 222.6 517.2 193.4 496.5 185.8zM32 367.2V48.75L464.2 208L32 367.2z"/>
</>],
['regular',<>
	<path d="M496.3 185.5L47.19 20.01C45.23 8.734 35.84 0 24 0C10.75 0 0 10.74 0 24v464C0 501.3 10.75 512 24 512s24-10.75 24-24v-92.3l448.3-165.2C505.7 227 512 218.1 512 208S505.7 188.1 496.3 185.5zM48 344.5V71.48L418.6 208L48 344.5z"/>
</>],
['solid',<>
	<path d="M64 496C64 504.8 56.84 512 48 512h-32C7.164 512 0 504.8 0 496V32c0-17.67 14.33-32 32-32s32 14.33 32 32V496zM62.74 25.73C63.17 27.83 64 29.78 64 32V26.2L62.74 25.73zM496.3 185.5L96 37.99v340l400.3-147.5C505.7 227 512 218.1 512 208S505.7 188.1 496.3 185.5z"/>
</>],
['thin',<>
	<path d="M496.5 201.8L16 25.02V8C16 3.582 12.42 0 8 0S0 3.582 0 8v496C0 508.4 3.594 512 8 512s8-3.594 8-8v-80.75l480.5-177C506.1 242.7 512 234.2 512 223.1C512 213.1 505.9 205.3 496.5 201.8zM490.1 231.2L16 406.2V42.07l474.1 174.7C495.5 218.5 496 222.4 496 223.1C496 225.6 495.5 229.5 490.1 231.2z"/>
</>],

]);

const FlagPennant: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FlagPennant.displayName = "FlagPennant";

export default FlagPennant;