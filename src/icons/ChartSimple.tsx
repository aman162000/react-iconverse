
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M400 96C426.5 96 448 117.5 448 144V432C448 458.5 426.5 480 400 480H368C341.5 480 320 458.5 320 432V144C320 117.5 341.5 96 368 96H400zM80 224C106.5 224 128 245.5 128 272V432C128 458.5 106.5 480 80 480H48C21.49 480 0 458.5 0 432V272C0 245.5 21.49 224 48 224H80z"/><path className="fa-secondary" d="M160 80C160 53.49 181.5 32 208 32H240C266.5 32 288 53.49 288 80V432C288 458.5 266.5 480 240 480H208C181.5 480 160 458.5 160 432V80z"/>
</>],
['light',<>
	<path d="M240 32C266.5 32 288 53.49 288 80V432C288 458.5 266.5 480 240 480H208C181.5 480 160 458.5 160 432V80C160 53.49 181.5 32 208 32H240zM240 64H208C199.2 64 192 71.16 192 80V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V80C256 71.16 248.8 64 240 64zM80 224C106.5 224 128 245.5 128 272V432C128 458.5 106.5 480 80 480H48C21.49 480 0 458.5 0 432V272C0 245.5 21.49 224 48 224H80zM80 256H48C39.16 256 32 263.2 32 272V432C32 440.8 39.16 448 48 448H80C88.84 448 96 440.8 96 432V272C96 263.2 88.84 256 80 256zM320 144C320 117.5 341.5 96 368 96H400C426.5 96 448 117.5 448 144V432C448 458.5 426.5 480 400 480H368C341.5 480 320 458.5 320 432V144zM352 144V432C352 440.8 359.2 448 368 448H400C408.8 448 416 440.8 416 432V144C416 135.2 408.8 128 400 128H368C359.2 128 352 135.2 352 144z"/>
</>],
['regular',<>
	<path d="M240 32C266.5 32 288 53.49 288 80V432C288 458.5 266.5 480 240 480H208C181.5 480 160 458.5 160 432V80C160 53.49 181.5 32 208 32H240zM240 80H208V432H240V80zM80 224C106.5 224 128 245.5 128 272V432C128 458.5 106.5 480 80 480H48C21.49 480 0 458.5 0 432V272C0 245.5 21.49 224 48 224H80zM80 272H48V432H80V272zM320 144C320 117.5 341.5 96 368 96H400C426.5 96 448 117.5 448 144V432C448 458.5 426.5 480 400 480H368C341.5 480 320 458.5 320 432V144zM368 432H400V144H368V432z"/>
</>],
['solid',<>
	<path d="M160 80C160 53.49 181.5 32 208 32H240C266.5 32 288 53.49 288 80V432C288 458.5 266.5 480 240 480H208C181.5 480 160 458.5 160 432V80zM0 272C0 245.5 21.49 224 48 224H80C106.5 224 128 245.5 128 272V432C128 458.5 106.5 480 80 480H48C21.49 480 0 458.5 0 432V272zM400 96C426.5 96 448 117.5 448 144V432C448 458.5 426.5 480 400 480H368C341.5 480 320 458.5 320 432V144C320 117.5 341.5 96 368 96H400z"/>
</>],
['thin',<>
	<path d="M240 32C266.5 32 288 53.49 288 80V432C288 458.5 266.5 480 240 480H208C181.5 480 160 458.5 160 432V80C160 53.49 181.5 32 208 32H240zM240 48H208C190.3 48 176 62.33 176 80V432C176 449.7 190.3 464 208 464H240C257.7 464 272 449.7 272 432V80C272 62.33 257.7 48 240 48zM80 224C106.5 224 128 245.5 128 272V432C128 458.5 106.5 480 80 480H48C21.49 480 0 458.5 0 432V272C0 245.5 21.49 224 48 224H80zM80 240H48C30.33 240 16 254.3 16 272V432C16 449.7 30.33 464 48 464H80C97.67 464 112 449.7 112 432V272C112 254.3 97.67 240 80 240zM320 144C320 117.5 341.5 96 368 96H400C426.5 96 448 117.5 448 144V432C448 458.5 426.5 480 400 480H368C341.5 480 320 458.5 320 432V144zM336 144V432C336 449.7 350.3 464 368 464H400C417.7 464 432 449.7 432 432V144C432 126.3 417.7 112 400 112H368C350.3 112 336 126.3 336 144z"/>
</>],

]);

const ChartSimple: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ChartSimple.displayName = "ChartSimple";

export default ChartSimple;