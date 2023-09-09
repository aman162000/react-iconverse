
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M70.63 272C58.13 272 48 261.9 48 249.4C48 243.4 50.38 237.6 54.63 233.4L58.51 229.5C82.51 205.5 96 172.9 96 138.1V128C96 57.31 153.3 0 224 0C294.6 0 351.8 57.1 352 127.6V128.4L352 128.6V138.1C352 172.9 365.5 205.5 389.5 229.5L393.4 233.4C397.6 237.6 400 243.4 400 249.4C400 261.9 389.9 272 377.4 272H70.63zM128 112V160C128 213 170.1 256 224 256C277 256 320 213 320 160L320 96H312C289.2 96 269.2 84.09 257.9 66.16C240.1 93.66 210.6 112 176 112H128zM286.7 320C375.8 320 448 392.2 448 481.3C448 498.2 434.2 512 417.3 512H30.72C13.75 512 0 498.2 0 481.3C0 392.2 72.21 320 161.3 320H286.7z"/><path className="fa-secondary" d="M312 96H320L320 160C320 213 277 256 224 256C170.1 256 128 213 128 160L128 112H176C210.6 112 240.1 93.66 257.9 66.16C269.2 84.1 289.2 96 312 96V96z"/>
</>],
['light',<>
	<path d="M224 0C294.7 0 352 57.31 352 128C352 163.3 368.6 196.4 396.8 217.6L401.1 220.8C410.5 227.9 416 238.9 416 250.7C416 271.3 399.3 288 378.7 288H320C311.2 288 304 280.8 304 272C304 263.2 311.2 256 320 256H378.7C381.6 256 384 253.6 384 250.7C384 248.1 383.2 247.4 381.9 246.4L377.6 243.2C361.8 231.3 348.8 216.5 339.2 199.8C318.5 242.6 274.7 272 224 272C173.3 272 129.5 242.6 108.8 199.8C99.19 216.5 86.21 231.3 70.4 243.2L66.13 246.4C64.79 247.4 64 248.1 64 250.7C64 253.6 66.39 256 69.33 256H128C136.8 256 144 263.2 144 272C144 280.8 136.8 288 128 288H69.33C48.71 288 32 271.3 32 250.7C32 238.9 37.53 227.9 46.93 220.8L51.2 217.6C79.4 196.4 96 163.3 96 128C96 57.31 153.3 0 224 0V0zM318.7 112H288.6C273.7 112 259.5 106.1 248.1 95.6L242.7 89.33C223.4 113.5 193.1 128 162.3 128H128V144C128 197 170.1 240 224 240C277 240 320 197 320 144V128C320 122.5 319.5 117.2 318.7 112V112zM251.3 52.69L271.6 72.97C276.1 77.47 282.2 80 288.6 80H307.2C290.6 51.31 259.5 32 224 32C182.2 32 146.6 58.71 133.5 96H162.3C189.1 96 213.5 80.97 225.5 57.15C226.3 55.53 227.4 54.02 228.7 52.69C234.9 46.44 245.1 46.44 251.3 52.69H251.3zM0 483.6C0 393.2 73.23 320 163.6 320H284.4C374.8 320 448 393.2 448 483.6C448 499.3 435.3 512 419.6 512H28.44C12.74 512 0 499.3 0 483.6zM415.1 480C414.1 408.1 355.9 352 284.4 352H163.6C92.09 352 33.93 408.1 32.05 480H415.1z"/>
</>],
['regular',<>
	<path d="M96 128C96 57.31 153.3 0 224 0C294.7 0 352 57.31 352 128V138.1C352 172.9 365.5 205.5 389.5 229.5L393.4 233.4C397.6 237.6 400 243.4 400 249.4C400 261.9 389.9 272 377.4 272H70.63C58.13 272 47.1 261.9 47.1 249.4C47.1 243.4 50.38 237.6 54.63 233.4L58.51 229.5C82.51 205.5 95.1 172.9 95.1 138.1L96 128zM297.3 96H296C275.5 96 257.3 86.4 245.6 71.46C231.9 95.67 205.8 112 176 112H145.6C144.6 117.2 144 122.5 144 128V144C144 188.2 179.8 224 224 224C268.2 224 304 188.2 304 144V128C304 116.6 301.6 105.8 297.3 96zM0 481.3C0 392.2 72.21 320 161.3 320H286.7C375.8 320 448 392.2 448 481.3C448 498.2 434.2 512 417.3 512H30.72C13.75 512 0 498.2 0 481.3V481.3zM398.7 464C390.4 409.6 343.4 368 286.7 368H161.3C104.6 368 57.63 409.6 49.31 464H398.7z"/>
</>],
['solid',<>
	<path d="M96 128C96 57.31 153.3 0 224 0C294.7 0 352 57.31 352 128V138.1C352 172.9 365.5 205.5 389.5 229.5L393.4 233.4C397.6 237.6 400 243.4 400 249.4C400 261.9 389.9 272 377.4 272H70.63C58.13 272 47.1 261.9 47.1 249.4C47.1 243.4 50.38 237.6 54.63 233.4L58.51 229.5C82.51 205.5 95.1 172.9 95.1 138.1L96 128zM297.3 96H296C275.5 96 257.3 86.4 245.6 71.46C231.9 95.67 205.8 112 176 112H145.6C144.6 117.2 144 122.5 144 128V144C144 188.2 179.8 224 224 224C268.2 224 304 188.2 304 144V128C304 116.6 301.6 105.8 297.3 96zM286.7 320C375.8 320 448 392.2 448 481.3C448 498.2 434.2 512 417.3 512H30.72C13.75 512 0 498.2 0 481.3C0 392.2 72.21 320 161.3 320H286.7z"/>
</>],
['thin',<>
	<path d="M390.4 244.8C369.8 229.4 354.3 208.6 345.2 185.2C328.1 235.7 280.3 272 224 272C167.7 272 119.9 235.7 102.8 185.2C93.7 208.6 78.2 229.4 57.6 244.8L53.33 248C49.98 250.5 48 254.5 48 258.7C48 266 53.97 272 61.33 272H120C124.4 272 128 275.6 128 280C128 284.4 124.4 288 120 288H61.33C45.13 288 32 274.9 32 258.7C32 249.4 36.35 240.7 43.73 235.2L48 232C78.22 209.3 96 173.8 96 136V128C96 57.31 153.3 0 224 0C294.7 0 352 57.31 352 128V136C352 173.8 369.8 209.3 400 232L404.3 235.2C411.7 240.7 416 249.4 416 258.7C416 274.9 402.9 288 386.7 288H328C323.6 288 320 284.4 320 280C320 275.6 323.6 272 328 272H386.7C394 272 400 266 400 258.7C400 254.5 398 250.5 394.7 248L390.4 244.8zM336 144V128C336 122.6 335.6 117.2 334.9 112H312C289.9 112 269 101.8 255.4 84.49L250.1 89.86C231.2 113.1 201.7 128 170.5 128H112V144C112 205.9 162.1 256 224 256C285.9 256 336 205.9 336 144L336 144zM265.8 71.75L267.2 73.6C277.8 87.7 294.4 96 312 96H331.4C324.6 73.21 310.7 53.46 292.4 39.29L265.8 71.75zM113.1 112H170.5C196.9 112 221.9 100.2 238.6 79.72L278.1 30.4C262.7 21.23 243.1 15.1 224 15.1C167.6 15.1 120.9 57.72 113.1 111.1V112zM0 483.6C0 393.2 73.23 320 163.6 320H284.4C374.8 320 448 393.2 448 483.6C448 499.3 435.3 512 419.6 512H28.44C12.74 512 0 499.3 0 483.6zM28.44 496H419.6C426.4 496 432 490.4 432 483.6C432 402.1 365.9 336 284.4 336H163.6C82.06 336 16 402.1 16 483.6C16 490.4 21.57 496 28.44 496z"/>
</>],

]);

const UserHairLong: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

UserHairLong.displayName = "UserHairLong";

export default UserHairLong;