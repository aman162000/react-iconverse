
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M207.6 304C207.6 321.7 193.3 336 175.6 336C157.1 336 143.6 321.7 143.6 304C143.6 286.3 157.1 272 175.6 272C193.3 272 207.6 286.3 207.6 304zM367.6 304C367.6 321.7 353.3 336 335.6 336C317.1 336 303.6 321.7 303.6 304C303.6 286.3 317.1 272 335.6 272C353.3 272 367.6 286.3 367.6 304z"/><path className="fa-secondary" d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM347.9 186.5C353.7 193.2 363.8 193.9 370.5 188.1C377.2 182.3 377.9 172.2 372.1 165.5C349.8 139.9 311.1 112 256 112C200.9 112 162.2 139.9 139.9 165.5C134.1 172.2 134.8 182.3 141.5 188.1C148.2 193.9 158.3 193.2 164.1 186.5C182 165.8 212.6 143.1 256 143.1C299.4 143.1 329.1 165.8 347.9 186.5L347.9 186.5zM335.6 336C353.3 336 367.6 321.7 367.6 304C367.6 286.3 353.3 272 335.6 272C317.1 272 303.6 286.3 303.6 304C303.6 321.7 317.1 336 335.6 336zM175.6 272C157.1 272 143.6 286.3 143.6 304C143.6 321.7 157.1 336 175.6 336C193.3 336 207.6 321.7 207.6 304C207.6 286.3 193.3 272 175.6 272z"/>
</>],
['light',<>
	<path d="M164.1 186.5C158.3 193.2 148.2 193.9 141.5 188.1C134.8 182.3 134.1 172.2 139.9 165.5C162.1 139.9 200.9 112 255.1 112C311.1 112 349.8 139.9 372.1 165.5C377.9 172.2 377.2 182.3 370.5 188.1C363.8 193.9 353.7 193.2 347.9 186.5C329.9 165.8 299.4 144 255.1 144C212.6 144 182 165.8 164.1 186.5H164.1zM176.4 328C163.1 328 152.4 317.3 152.4 304C152.4 290.7 163.1 280 176.4 280C189.6 280 200.4 290.7 200.4 304C200.4 317.3 189.6 328 176.4 328zM336.4 280C349.6 280 360.4 290.7 360.4 304C360.4 317.3 349.6 328 336.4 328C323.1 328 312.4 317.3 312.4 304C312.4 290.7 323.1 280 336.4 280zM256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256z"/>
</>],
['regular',<>
	<path d="M177.6 193.9C168.7 203.6 153.5 204.3 143.7 195.3C133.1 186.3 133.4 171.1 142.4 161.4C164.3 137.5 202.3 111.1 256 111.1C309.7 111.1 347.7 137.5 369.6 161.4C378.6 171.1 378 186.3 368.3 195.3C358.5 204.3 343.3 203.6 334.4 193.9C319.2 177.5 293.2 159.1 256 159.1C218.8 159.1 192.8 177.5 177.6 193.9V193.9zM176.4 336C158.7 336 144.4 321.7 144.4 304C144.4 286.3 158.7 272 176.4 272C194 272 208.4 286.3 208.4 304C208.4 321.7 194 336 176.4 336zM336.4 272C354 272 368.4 286.3 368.4 304C368.4 321.7 354 336 336.4 336C318.7 336 304.4 321.7 304.4 304C304.4 286.3 318.7 272 336.4 272zM256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256z"/>
</>],
['solid',<>
	<path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM347.9 186.5C353.7 193.2 363.8 193.9 370.5 188.1C377.2 182.3 377.9 172.2 372.1 165.5C349.8 139.9 311.1 112 256 112C200.9 112 162.2 139.9 139.9 165.5C134.1 172.2 134.8 182.3 141.5 188.1C148.2 193.9 158.3 193.2 164.1 186.5C182 165.8 212.6 143.1 256 143.1C299.4 143.1 329.1 165.8 347.9 186.5L347.9 186.5zM335.6 336C353.3 336 367.6 321.7 367.6 304C367.6 286.3 353.3 272 335.6 272C317.1 272 303.6 286.3 303.6 304C303.6 321.7 317.1 336 335.6 336zM175.6 272C157.1 272 143.6 286.3 143.6 304C143.6 321.7 157.1 336 175.6 336C193.3 336 207.6 321.7 207.6 304C207.6 286.3 193.3 272 175.6 272z"/>
</>],
['thin',<>
	<path d="M150.6 188.6C148 192.2 143 193.1 139.4 190.6C135.8 188 134.9 183 137.4 179.4C159.9 147.4 199.3 112 256 112C312.7 112 352.1 147.4 374.6 179.4C377.1 183 376.2 188 372.6 190.6C368.1 193.1 363.1 192.2 361.4 188.6C340.6 158.8 305.4 128 256 128C206.6 128 171.4 158.8 150.6 188.6H150.6zM176.4 320C167.5 320 160.4 312.8 160.4 304C160.4 295.2 167.5 288 176.4 288C185.2 288 192.4 295.2 192.4 304C192.4 312.8 185.2 320 176.4 320zM336.4 288C345.2 288 352.4 295.2 352.4 304C352.4 312.8 345.2 320 336.4 320C327.5 320 320.4 312.8 320.4 304C320.4 295.2 327.5 288 336.4 288zM256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM496 256C496 123.5 388.5 16 256 16C123.5 16 16 123.5 16 256C16 388.5 123.5 496 256 496C388.5 496 496 388.5 496 256z"/>
</>],

]);

const FaceSmileUpsideDown: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FaceSmileUpsideDown.displayName = "FaceSmileUpsideDown";

export default FaceSmileUpsideDown;