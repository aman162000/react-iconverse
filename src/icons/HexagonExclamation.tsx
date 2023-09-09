
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M280 264C280 277.3 269.3 288 256 288C242.7 288 232 277.3 232 264V152C232 138.7 242.7 128 256 128C269.3 128 280 138.7 280 152V264zM224 352C224 334.3 238.3 320 256 320C273.7 320 288 334.3 288 352C288 369.7 273.7 384 256 384C238.3 384 224 369.7 224 352z"/><path className="fa-secondary" d="M108.5 66.56C121.5 45.1 144.9 32 169.1 32H342C367.1 32 390.5 45.1 403.5 66.56L496 218.6C510 241.6 510 270.4 496 293.4L403.5 445.4C390.5 466.9 367.1 480 342 480H169.1C144.9 480 121.5 466.9 108.5 445.4L15.96 293.4C1.962 270.4 1.962 241.6 15.96 218.6L108.5 66.56zM231.1 152V264C231.1 277.3 242.7 288 255.1 288C269.3 288 280 277.3 280 264V152C280 138.7 269.3 128 255.1 128C242.7 128 231.1 138.7 231.1 152zM255.1 320C238.3 320 223.1 334.3 223.1 352C223.1 369.7 238.3 384 255.1 384C273.7 384 288 369.7 288 352C288 334.3 273.7 320 255.1 320z"/>
</>],
['light',<>
	<path d="M255.1 128C264.8 128 272 135.2 272 144V272C272 280.8 264.8 288 255.1 288C247.2 288 239.1 280.8 239.1 272V144C239.1 135.2 247.2 128 255.1 128zM280 352C280 365.3 269.3 376 255.1 376C242.7 376 231.1 365.3 231.1 352C231.1 338.7 242.7 328 255.1 328C269.3 328 280 338.7 280 352zM169.1 32H342C367.1 32 390.5 45.1 403.5 66.56L496 218.6C510 241.6 510 270.4 496 293.4L403.5 445.4C390.5 466.9 367.1 480 342 480H169.1C144.9 480 121.5 466.9 108.5 445.4L15.96 293.4C1.962 270.4 1.962 241.6 15.96 218.6L108.5 66.56C121.5 45.1 144.9 32 169.1 32V32zM43.29 235.2C35.52 247.1 35.52 264 43.29 276.8L135.8 428.8C143.1 440.7 156 448 169.1 448H342C355.1 448 368.9 440.7 376.2 428.8L468.7 276.8C476.5 264 476.5 247.1 468.7 235.2L376.2 83.2C368.9 71.28 355.1 64 342 64H169.1C156 64 143.1 71.28 135.8 83.2L43.29 235.2z"/>
</>],
['regular',<>
	<path d="M255.1 128C269.3 128 280 138.7 280 152V264C280 277.3 269.3 288 255.1 288C242.7 288 231.1 277.3 231.1 264V152C231.1 138.7 242.7 128 255.1 128zM288 352C288 369.7 273.7 384 255.1 384C238.3 384 223.1 369.7 223.1 352C223.1 334.3 238.3 320 255.1 320C273.7 320 288 334.3 288 352zM15.96 218.6L108.5 66.56C121.5 45.1 144.9 32 169.1 32H342C367.1 32 390.5 45.1 403.5 66.56L496 218.6C510 241.6 510 270.4 496 293.4L403.5 445.4C390.5 466.9 367.1 480 342 480H169.1C144.9 480 121.5 466.9 108.5 445.4L15.96 293.4C1.962 270.4 1.962 241.6 15.96 218.6V218.6zM56.96 243.5C52.29 251.2 52.29 260.8 56.96 268.5L149.5 420.5C153.8 427.6 161.6 432 169.1 432H342C350.4 432 358.2 427.6 362.5 420.5L455 268.5C459.7 260.8 459.7 251.2 455 243.5L362.5 91.52C358.2 84.37 350.4 80 342 80H169.1C161.6 80 153.8 84.37 149.5 91.52L56.96 243.5zM403.5 66.56L362.5 91.52L403.5 66.56zM15.96 293.4L56.96 268.5z"/>
</>],
['solid',<>
	<path d="M108.5 66.56C121.5 45.1 144.9 32 169.1 32H342C367.1 32 390.5 45.1 403.5 66.56L496 218.6C510 241.6 510 270.4 496 293.4L403.5 445.4C390.5 466.9 367.1 480 342 480H169.1C144.9 480 121.5 466.9 108.5 445.4L15.96 293.4C1.962 270.4 1.962 241.6 15.96 218.6L108.5 66.56zM231.1 152V264C231.1 277.3 242.7 288 255.1 288C269.3 288 280 277.3 280 264V152C280 138.7 269.3 128 255.1 128C242.7 128 231.1 138.7 231.1 152zM255.1 320C238.3 320 223.1 334.3 223.1 352C223.1 369.7 238.3 384 255.1 384C273.7 384 288 369.7 288 352C288 334.3 273.7 320 255.1 320z"/>
</>],
['thin',<>
	<path d="M256 128C260.4 128 264 131.6 264 136V296C264 300.4 260.4 304 256 304C251.6 304 248 300.4 248 296V136C248 131.6 251.6 128 256 128zM272 352C272 360.8 264.8 368 256 368C247.2 368 240 360.8 240 352C240 343.2 247.2 336 256 336C264.8 336 272 343.2 272 352zM342 32C367.1 32 390.5 45.1 403.5 66.56L496 218.6C510 241.6 510 270.4 496 293.4L403.5 445.4C390.5 466.9 367.1 480 342 480H169.1C144.9 480 121.5 466.9 108.5 445.4L15.96 293.4C1.962 270.4 1.962 241.6 15.96 218.6L108.5 66.56C121.5 45.1 144.9 32 169.1 32H342zM29.63 226.9C18.74 244.8 18.74 267.2 29.63 285.1L122.1 437.1C132.3 453.8 150.4 464 169.1 464H342C361.6 464 379.7 453.8 389.8 437.1L482.4 285.1C493.3 267.2 493.3 244.8 482.4 226.9L389.8 74.88C379.7 58.19 361.6 48 342 48H169.1C150.4 48 132.3 58.19 122.1 74.88L29.63 226.9z"/>
</>],

]);

const HexagonExclamation: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HexagonExclamation.displayName = "HexagonExclamation";

export default HexagonExclamation;