
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M288 312C288 289.9 305.9 272 328 272H472C494.1 272 512 289.9 512 312V456C512 478.1 494.1 496 472 496H328C305.9 496 288 478.1 288 456V312z"/><path className="fa-secondary" d="M288 0C299.2 0 309.7 5.898 315.4 15.54L411.4 175.5C417.4 185.4 417.5 197.7 411.8 207.8C406.2 217.8 395.5 223.1 384 223.1H192C180.5 223.1 169.8 217.8 164.2 207.8C158.5 197.7 158.6 185.4 164.6 175.5L260.6 15.54C266.3 5.897 276.8 0 288 0V0zM0 384C0 313.3 57.31 256 128 256C198.7 256 256 313.3 256 384C256 454.7 198.7 512 128 512C57.31 512 0 454.7 0 384z"/>
</>],
['light',<>
	<path d="M411.8 207.8C406.2 217.8 395.5 223.1 384 223.1H192C180.5 223.1 169.8 217.8 164.2 207.8C158.5 197.7 158.6 185.4 164.6 175.5L260.6 15.54C266.3 5.897 276.8 0 288 0C299.2 0 309.7 5.898 315.4 15.54L411.4 175.5C417.4 185.4 417.5 197.7 411.8 207.8V207.8zM288 31.1L192 191.1H384L288 31.1zM472 271.1C494.1 271.1 512 289.9 512 311.1V456C512 478.1 494.1 496 472 496H328C305.9 496 288 478.1 288 456V311.1C288 289.9 305.9 271.1 328 271.1H472zM472 303.1H328C323.6 303.1 320 307.6 320 311.1V456C320 460.4 323.6 464 328 464H472C476.4 464 480 460.4 480 456V311.1C480 307.6 476.4 303.1 472 303.1zM256 384C256 454.7 198.7 512 128 512C57.31 512 0 454.7 0 384C0 313.3 57.31 255.1 128 255.1C198.7 255.1 256 313.3 256 384zM128 287.1C74.98 287.1 32 330.1 32 384C32 437 74.98 480 128 480C181 480 224 437 224 384C224 330.1 181 287.1 128 287.1z"/>
</>],
['regular',<>
	<path d="M411.8 207.8C406.2 217.8 395.5 223.1 384 223.1H192C180.5 223.1 169.8 217.8 164.2 207.8C158.5 197.7 158.6 185.4 164.6 175.5L260.6 15.54C266.3 5.897 276.8 0 288 0C299.2 0 309.7 5.898 315.4 15.54L411.4 175.5C417.4 185.4 417.5 197.7 411.8 207.8V207.8zM288 63.1L220.3 175.1H355.7L288 63.1zM472 271.1C494.1 271.1 512 289.9 512 311.1V456C512 478.1 494.1 496 472 496H328C305.9 496 288 478.1 288 456V311.1C288 289.9 305.9 271.1 328 271.1H472zM464 319.1H336V448H464V319.1zM256 384C256 454.7 198.7 512 128 512C57.31 512 0 454.7 0 384C0 313.3 57.31 255.1 128 255.1C198.7 255.1 256 313.3 256 384zM128 303.1C83.82 303.1 48 339.8 48 384C48 428.2 83.82 464 128 464C172.2 464 208 428.2 208 384C208 339.8 172.2 303.1 128 303.1z"/>
</>],
['solid',<>
	<path d="M411.4 175.5C417.4 185.4 417.5 197.7 411.8 207.8C406.2 217.8 395.5 223.1 384 223.1H192C180.5 223.1 169.8 217.8 164.2 207.8C158.5 197.7 158.6 185.4 164.6 175.5L260.6 15.54C266.3 5.897 276.8 0 288 0C299.2 0 309.7 5.898 315.4 15.54L411.4 175.5zM288 312C288 289.9 305.9 272 328 272H472C494.1 272 512 289.9 512 312V456C512 478.1 494.1 496 472 496H328C305.9 496 288 478.1 288 456V312zM0 384C0 313.3 57.31 256 128 256C198.7 256 256 313.3 256 384C256 454.7 198.7 512 128 512C57.31 512 0 454.7 0 384z"/>
</>],
['thin',<>
	<path d="M288 0C299.2 0 309.7 5.898 315.4 15.54L411.4 175.5C417.4 185.4 417.5 197.7 411.8 207.8C406.2 217.8 395.5 223.1 384 223.1H192C180.5 223.1 169.8 217.8 164.2 207.8C158.5 197.7 158.6 185.4 164.6 175.5L260.6 15.54C266.3 5.897 276.8 0 288 0V0zM301.7 23.77C298.8 18.95 293.6 16 288 16C282.4 16 277.2 18.95 274.3 23.77L178.3 183.8C175.3 188.7 175.2 194.9 178.1 199.9C180.9 204.9 186.2 208 192 208H384C389.8 208 395.1 204.9 397.9 199.9C400.8 194.9 400.7 188.7 397.7 183.8L301.7 23.77zM472 272C494.1 272 512 289.9 512 312V456C512 478.1 494.1 496 472 496H328C305.9 496 288 478.1 288 456V312C288 289.9 305.9 272 328 272H472zM472 288H328C314.7 288 304 298.7 304 312V456C304 469.3 314.7 480 328 480H472C485.3 480 496 469.3 496 456V312C496 298.7 485.3 288 472 288zM256 384C256 454.7 198.7 512 128 512C57.31 512 0 454.7 0 384C0 313.3 57.31 256 128 256C198.7 256 256 313.3 256 384zM128 272C66.14 272 16 322.1 16 384C16 445.9 66.14 496 128 496C189.9 496 240 445.9 240 384C240 322.1 189.9 272 128 272z"/>
</>],

]);

const Shapes: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Shapes.displayName = "Shapes";

export default Shapes;
