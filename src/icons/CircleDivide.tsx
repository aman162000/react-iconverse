
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M288 160C288 177.7 273.7 192 256 192C238.3 192 224 177.7 224 160C224 142.3 238.3 128 256 128C273.7 128 288 142.3 288 160zM144 256C144 242.7 154.7 232 168 232H344C357.3 232 368 242.7 368 256C368 269.3 357.3 280 344 280H168C154.7 280 144 269.3 144 256zM224 352C224 334.3 238.3 320 256 320C273.7 320 288 334.3 288 352C288 369.7 273.7 384 256 384C238.3 384 224 369.7 224 352z"/><path className="fa-secondary" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 192C273.7 192 288 177.7 288 160C288 142.3 273.7 128 256 128C238.3 128 224 142.3 224 160C224 177.7 238.3 192 256 192zM168 232C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H168zM256 320C238.3 320 224 334.3 224 352C224 369.7 238.3 384 256 384C273.7 384 288 369.7 288 352C288 334.3 273.7 320 256 320z"/>
</>],
['light',<>
	<path d="M232 160C232 146.7 242.7 136 256 136C269.3 136 280 146.7 280 160C280 173.3 269.3 184 256 184C242.7 184 232 173.3 232 160zM352 240C360.8 240 368 247.2 368 256C368 264.8 360.8 272 352 272H160C151.2 272 144 264.8 144 256C144 247.2 151.2 240 160 240H352zM280 352C280 365.3 269.3 376 256 376C242.7 376 232 365.3 232 352C232 338.7 242.7 328 256 328C269.3 328 280 338.7 280 352zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32z"/>
</>],
['regular',<>
	<path d="M224 160C224 142.3 238.3 128 256 128C273.7 128 288 142.3 288 160C288 177.7 273.7 192 256 192C238.3 192 224 177.7 224 160zM344 232C357.3 232 368 242.7 368 256C368 269.3 357.3 280 344 280H168C154.7 280 144 269.3 144 256C144 242.7 154.7 232 168 232H344zM288 352C288 369.7 273.7 384 256 384C238.3 384 224 369.7 224 352C224 334.3 238.3 320 256 320C273.7 320 288 334.3 288 352zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
</>],
['solid',<>
	<path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 192C273.7 192 288 177.7 288 160C288 142.3 273.7 128 256 128C238.3 128 224 142.3 224 160C224 177.7 238.3 192 256 192zM168 232C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H168zM256 320C238.3 320 224 334.3 224 352C224 369.7 238.3 384 256 384C273.7 384 288 369.7 288 352C288 334.3 273.7 320 256 320z"/>
</>],
['thin',<>
	<path d="M288 160C288 177.7 273.7 192 256 192C238.3 192 224 177.7 224 160C224 142.3 238.3 128 256 128C273.7 128 288 142.3 288 160zM256 144C247.2 144 240 151.2 240 160C240 168.8 247.2 176 256 176C264.8 176 272 168.8 272 160C272 151.2 264.8 144 256 144zM360 248C364.4 248 368 251.6 368 256C368 260.4 364.4 264 360 264H152C147.6 264 144 260.4 144 256C144 251.6 147.6 248 152 248H360zM224 352C224 334.3 238.3 320 256 320C273.7 320 288 334.3 288 352C288 369.7 273.7 384 256 384C238.3 384 224 369.7 224 352zM256 368C264.8 368 272 360.8 272 352C272 343.2 264.8 336 256 336C247.2 336 240 343.2 240 352C240 360.8 247.2 368 256 368zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 16C123.5 16 16 123.5 16 256C16 388.5 123.5 496 256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16z"/>
</>],

]);

const CircleDivide: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CircleDivide.displayName = "CircleDivide";

export default CircleDivide;