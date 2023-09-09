
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M248.3 240H312C318.8 240 324.8 244.2 327.1 250.6C329.3 256.1 327.4 264.1 322.2 268.4L186.2 380.4C180.5 385 172.3 385.2 166.4 380.8C160.5 376.4 158.4 368.5 161.3 361.7L199.7 271.1H136C129.2 271.1 123.2 267.8 120.9 261.4C118.7 255 120.6 247.9 125.8 243.6L261.8 131.6C267.5 126.1 275.7 126.8 281.6 131.2C287.5 135.6 289.6 143.5 286.7 150.3L248.3 240z"/><path className="fa-secondary" d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM261.8 131.6L125.8 243.6C120.6 247.9 118.7 255 120.9 261.4C123.2 267.8 129.2 271.1 136 271.1H199.7L161.3 361.7C158.4 368.5 160.5 376.4 166.4 380.8C172.3 385.2 180.5 385 186.2 380.4L322.2 268.4C327.4 264.1 329.3 256.1 327.1 250.6C324.8 244.2 318.8 240 312 240H248.3L286.7 150.3C289.6 143.5 287.5 135.6 281.6 131.2C275.7 126.8 267.5 126.1 261.8 131.6V131.6z"/>
</>],
['light',<>
	<path d="M301.4 122.7L269.8 224H330.5C342.4 224 352 233.6 352 245.5C352 251.6 349.4 257.4 344.9 261.5L180 410.7C176.3 414.1 171.3 416 166.2 416C152.3 416 142.4 402.5 146.6 389.3L178.2 288H116.9C105.4 288 96 278.6 96 267.1C96 261.2 98.48 255.6 102.8 251.6L267.9 101.4C271.7 97.91 276.6 96 281.8 96C295.7 96 305.6 109.5 301.4 122.7L301.4 122.7zM200 256C205.1 256 209.9 258.4 212.9 262.5C215.9 266.6 216.8 271.9 215.3 276.8L189.6 358.9L303.3 256H248C242.9 256 238.1 253.6 235.1 249.5C232.1 245.4 231.2 240.1 232.7 235.2L258.3 153.4L145.5 256H200zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM32 96V416C32 433.7 46.33 448 64 448H384C401.7 448 416 433.7 416 416V96C416 78.33 401.7 64 384 64H64C46.33 64 32 78.33 32 96z"/>
</>],
['regular',<>
	<path d="M281.6 131.2C287.5 135.6 289.6 143.5 286.7 150.3L248.3 240H312C318.8 240 324.8 244.2 327.1 250.6C329.3 256.1 327.4 264.1 322.2 268.4L186.2 380.4C180.5 385 172.3 385.2 166.4 380.8C160.5 376.4 158.4 368.5 161.3 361.7L199.7 271.1H136C129.2 271.1 123.2 267.8 120.9 261.4C118.7 255 120.6 247.9 125.8 243.6L261.8 131.6C267.5 126.1 275.7 126.8 281.6 131.2V131.2zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"/>
</>],
['solid',<>
	<path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM261.8 131.6L125.8 243.6C120.6 247.9 118.7 255 120.9 261.4C123.2 267.8 129.2 271.1 136 271.1H199.7L161.3 361.7C158.4 368.5 160.5 376.4 166.4 380.8C172.3 385.2 180.5 385 186.2 380.4L322.2 268.4C327.4 264.1 329.3 256.1 327.1 250.6C324.8 244.2 318.8 240 312 240H248.3L286.7 150.3C289.6 143.5 287.5 135.6 281.6 131.2C275.7 126.8 267.5 126.1 261.8 131.6V131.6z"/>
</>],
['thin',<>
	<path d="M293.8 112.3L258.9 224H332.9C343.5 224 352 232.5 352 243.1C352 248.5 349.7 253.6 345.8 257.2L174.7 412.7C172.4 414.8 169.4 416 166.2 416C157.7 416 151.7 407.8 154.2 399.7L189.1 288H114.5C104.3 288 96 279.7 96 269.5C96 264.3 98.18 259.4 102 255.9L273.3 99.29C275.6 97.18 278.6 96 281.8 96C290.3 96 296.3 104.2 293.8 112.3V112.3zM112 269.5C112 270.9 113.1 272 114.5 272H200C202.5 272 204.9 273.2 206.4 275.3C207.1 277.3 208.4 279.1 207.6 282.4L173.3 392.4L334.1 245.4C335.6 244.8 336 243.1 336 243.1C336 241.4 334.6 240 332.9 240H248C245.5 240 243.1 238.8 241.6 236.7C240 234.7 239.6 232 240.4 229.6L274.7 119.7L112.8 267.7C112.3 268.1 112 268.8 112 269.5V269.5zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM16 96V416C16 442.5 37.49 464 64 464H384C410.5 464 432 442.5 432 416V96C432 69.49 410.5 48 384 48H64C37.49 48 16 69.49 16 96z"/>
</>],

]);

const SquareBolt: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SquareBolt.displayName = "SquareBolt";

export default SquareBolt;
