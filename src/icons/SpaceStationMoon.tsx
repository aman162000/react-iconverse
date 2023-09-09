
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M272 160C272 204.2 236.2 240 192 240C147.8 240 112 204.2 112 160C112 115.8 147.8 80 192 80C236.2 80 272 115.8 272 160zM192 128C174.3 128 160 142.3 160 160C160 177.7 174.3 192 192 192C209.7 192 224 177.7 224 160C224 142.3 209.7 128 192 128zM6.794 314.8C4.059 303.2 2.116 291.3 1.027 279.1C73.15 304.7 160.8 320 256 320C351.2 320 438.8 304.7 510.1 279.1C509.9 291.3 507.9 303.2 505.2 314.8C432.6 338.4 347.3 352 256 352C164.7 352 79.44 338.4 6.794 314.8V314.8z"/><path className="fa-secondary" d="M512 256C512 263.8 511.7 271.5 510.1 279.1C438.8 304.7 351.2 320 256 320C160.8 320 73.15 304.7 1.027 279.1C.3472 271.5 0 263.8 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256V256zM192 240C236.2 240 272 204.2 272 160C272 115.8 236.2 80 192 80C147.8 80 112 115.8 112 160C112 204.2 147.8 240 192 240zM256 512C134.9 512 33.38 427.9 6.794 314.8C79.44 338.4 164.7 352 256 352C347.3 352 432.6 338.4 505.2 314.8C478.6 427.9 377.1 512 256 512V512z"/>
</>],
['light',<>
	<path d="M168 160C168 146.7 178.7 136 192 136C205.3 136 216 146.7 216 160C216 173.3 205.3 184 192 184C178.7 184 168 173.3 168 160zM280 160C280 208.6 240.6 248 192 248C143.4 248 104 208.6 104 160C104 111.4 143.4 72 192 72C240.6 72 280 111.4 280 160zM192 104C161.1 104 136 129.1 136 160C136 190.9 161.1 216 192 216C222.9 216 248 190.9 248 160C248 129.1 222.9 104 192 104zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM36.18 299.3C38.24 300 40.39 300.8 42.65 301.6C78.98 314.7 142.1 337.4 256 337.4C369.9 337.4 433 314.7 469.3 301.6C471.6 300.8 473.8 300 475.8 299.3C478.6 285.3 480 270.8 480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256C32 270.8 33.44 285.3 36.18 299.3zM47.15 337.2C79.66 420.8 160.9 480 256 480C351.1 480 432.3 420.8 464.8 337.2C425.6 350.7 360.8 369.4 256 369.4C151.2 369.4 86.35 350.7 47.15 337.2V337.2z"/>
</>],
['regular',<>
	<path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 48C239.5 48 223.5 49.91 208.2 53.52C245.4 66.75 272 102.3 272 144C272 197 229 240 176 240C123.3 240 80.59 197.6 80.01 145.1C59.73 177.2 48 215.2 48 256C48 268.8 49.15 281.2 51.35 293.4C51.83 293.5 52.32 293.7 52.81 293.9C87.74 306.5 147.6 328 256 328C364.4 328 424.3 306.5 459.2 293.9C459.7 293.7 460.2 293.5 460.7 293.4C462.9 281.2 464 268.8 464 256C464 141.1 370.9 48 256 48V48zM441.3 350.7C402.1 362.7 343 376 256 376C168.9 376 109.9 362.7 70.74 350.7C105.2 417.9 175.2 464 256 464C336.8 464 406.8 417.9 441.3 350.7V350.7zM176 192C202.5 192 224 170.5 224 144C224 117.5 202.5 96 176 96C149.5 96 128 117.5 128 144C128 170.5 149.5 192 176 192z"/>
</>],
['solid',<>
	<path d="M224 160C224 177.7 209.7 192 192 192C174.3 192 160 177.7 160 160C160 142.3 174.3 128 192 128C209.7 128 224 142.3 224 160zM512 256C512 263.8 511.7 271.5 510.1 279.1C438.8 304.7 351.2 320 256 320C160.8 320 73.15 304.7 1.027 279.1C.3472 271.5 0 263.8 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256V256zM192 80C147.8 80 112 115.8 112 160C112 204.2 147.8 240 192 240C236.2 240 272 204.2 272 160C272 115.8 236.2 80 192 80zM256 512C134.9 512 33.38 427.9 6.794 314.8C79.44 338.4 164.7 352 256 352C347.3 352 432.6 338.4 505.2 314.8C478.6 427.9 377.1 512 256 512V512z"/>
</>],
['thin',<>
	<path d="M208 160C208 168.8 200.8 176 192 176C183.2 176 176 168.8 176 160C176 151.2 183.2 144 192 144C200.8 144 208 151.2 208 160zM272 160C272 204.2 236.2 240 192 240C147.8 240 112 204.2 112 160C112 115.8 147.8 80 192 80C236.2 80 272 115.8 272 160zM192 96C156.7 96 128 124.7 128 160C128 195.3 156.7 224 192 224C227.3 224 256 195.3 256 160C256 124.7 227.3 96 192 96zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM18.74 292.4C92.41 320.6 172.4 336 256 336C339.6 336 419.6 320.6 493.3 292.4C495.1 280.5 496 268.4 496 256C496 123.5 388.5 16 256 16C123.5 16 16 123.5 16 256C16 268.4 16.93 280.5 18.74 292.4zM22.28 310.8C47.06 416.9 142.3 496 256 496C369.7 496 464.9 416.9 489.7 310.8C416.8 337.4 338.1 352 256 352C173.9 352 95.17 337.4 22.28 310.8H22.28z"/>
</>],

]);

const SpaceStationMoon: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SpaceStationMoon.displayName = "SpaceStationMoon";

export default SpaceStationMoon;
