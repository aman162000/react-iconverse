
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M416 48C416 74.51 394.5 96 368 96C341.5 96 320 74.51 320 48C320 21.49 341.5 0 368 0C394.5 0 416 21.49 416 48zM172.8 54.4C182.3 47.29 194.9 46 205.6 51.05L322.1 105.9C351.3 119.6 358.9 157.5 337.4 181.4L299.1 224H416C425.6 224 434.7 228.3 440.7 235.7C446.8 243.1 449.3 252.9 447.4 262.3L415.4 422.3C411.9 439.6 395.1 450.8 377.7 447.4C360.4 443.9 349.2 427.1 352.6 409.7L376.1 288H306.7C286.2 241.1 243.8 205.9 192.4 195.3L246.6 141.1L195.8 117.2L147.2 153.6C133.1 164.2 113 161.3 102.4 147.2C91.8 133.1 94.66 113 108.8 102.4L172.8 54.4z"/><path className="fa-secondary" d="M0 352C0 263.6 71.63 192 160 192C248.4 192 320 263.6 320 352C320 440.4 248.4 512 160 512C71.63 512 0 440.4 0 352zM160 448C213 448 256 405 256 352C256 298.1 213 256 160 256C106.1 256 64 298.1 64 352C64 405 106.1 448 160 448z"/>
</>],
['light',<>
	<path d="M312 56C312 25.07 337.1 0 368 0C398.9 0 424 25.07 424 56C424 86.93 398.9 112 368 112C337.1 112 312 86.93 312 56zM368 80C381.3 80 392 69.25 392 56C392 42.75 381.3 32 368 32C354.7 32 344 42.75 344 56C344 69.25 354.7 80 368 80zM199.5 106.9C187.6 102 173.9 104.8 164.7 113.9L123.3 155.3C117.1 161.6 106.9 161.6 100.7 155.3C94.44 149.1 94.44 138.9 100.7 132.7L142.1 91.26C160.3 73.03 187.7 67.51 211.6 77.28L313.5 118.1C345.3 131.1 353.5 173.1 329.3 197.3L280.2 246.4C287.1 254.3 293.3 262.9 298.6 271.1H432C436.9 271.1 441.4 274.2 444.5 277.1C447.5 281.8 448.7 286.7 447.6 291.5L415.6 435.5C413.7 444.1 405.2 449.5 396.5 447.6C387.9 445.7 382.5 437.2 384.4 428.5L412.1 304H312.7C317.4 319.2 320 335.3 320 352C320 440.4 248.4 512 160 512C71.63 512 0 440.4 0 352C0 263.6 71.63 192 160 192C165.6 192 171.1 192.3 176.5 192.8L244.2 125.2L199.5 106.9zM301.4 148.6L276.3 138.3L213.5 201.2C229.2 206.7 243.8 214.7 256.8 224.6L306.7 174.7C314.7 166.6 311.1 152.9 301.4 148.6V148.6zM160 480C230.7 480 288 422.7 288 352C288 281.3 230.7 224 160 224C89.31 224 32 281.3 32 352C32 422.7 89.31 480 160 480z"/>
</>],
['regular',<>
	<path d="M416 48C416 74.51 394.5 96 368 96C341.5 96 320 74.51 320 48C320 21.49 341.5 0 368 0C394.5 0 416 21.49 416 48zM208.6 113C200.6 109.7 191.4 110.9 184.5 116.2L134.7 154.9C124.3 163.1 109.2 161.2 101.1 150.7C92.92 140.3 94.8 125.2 105.3 117.1L155.1 78.31C175.6 62.33 203.2 58.68 227.2 68.79L311.4 104.3C347.1 119.3 357.2 165.2 330.1 193.7L288.6 240H424C431.6 240 438.7 243.6 443.3 249.7C447.8 255.8 449.2 263.6 446.1 270.9L398.1 430.9C395.2 443.6 381.8 450.8 369.1 446.1C356.4 443.2 349.2 429.8 353 417.1L391.7 288H306.7C315.3 307.6 320 329.2 320 352C320 440.4 248.4 512 160 512C71.63 512 0 440.4 0 352C0 263.6 71.63 192 160 192C161.2 192 162.5 192 163.7 192L232.6 123.1L208.6 113zM292.8 148.5L272.4 139.9L211.7 200.5C223.5 204.6 234.7 209.9 245 216.4L295.6 161.3C299.4 157.2 297.9 150.6 292.8 148.5V148.5zM160 464C221.9 464 272 413.9 272 352C272 290.1 221.9 240 160 240C98.14 240 48 290.1 48 352C48 413.9 98.14 464 160 464z"/>
</>],
['solid',<>
	<path d="M416 48C416 74.51 394.5 96 368 96C341.5 96 320 74.51 320 48C320 21.49 341.5 0 368 0C394.5 0 416 21.49 416 48zM172.8 54.4C182.3 47.29 194.9 46 205.6 51.05L322.1 105.9C351.3 119.6 358.9 157.5 337.4 181.4L299.1 224H416C425.6 224 434.7 228.3 440.7 235.7C446.8 243.1 449.3 252.9 447.4 262.3L415.4 422.3C411.9 439.6 395.1 450.8 377.7 447.4C360.4 443.9 349.2 427.1 352.6 409.7L376.1 288H306.7C315.3 307.6 320 329.2 320 352C320 440.4 248.4 512 160 512C71.63 512 0 440.4 0 352C0 263.6 71.63 192 160 192C171.1 192 181.1 193.1 192.4 195.3L246.6 141.1L195.8 117.2L147.2 153.6C133.1 164.2 113 161.3 102.4 147.2C91.8 133.1 94.66 113 108.8 102.4L172.8 54.4zM160 448C213 448 256 405 256 352C256 298.1 213 256 160 256C106.1 256 64 298.1 64 352C64 405 106.1 448 160 448z"/>
</>],
['thin',<>
	<path d="M416 52C416 80.72 392.7 104 364 104C335.3 104 312 80.72 312 52C312 23.28 335.3 0 364 0C392.7 0 416 23.28 416 52zM364 16C344.1 16 328 32.12 328 52C328 71.88 344.1 88 364 88C383.9 88 400 71.88 400 52C400 32.12 383.9 16 364 16zM56 352C56 294.6 102.6 248 160 248C217.4 248 264 294.6 264 352C264 409.4 217.4 456 160 456C102.6 456 56 409.4 56 352zM160 264C111.4 264 72 303.4 72 352C72 400.6 111.4 440 160 440C208.6 440 248 400.6 248 352C248 303.4 208.6 264 160 264zM320 352C320 440.4 248.4 512 160 512C71.63 512 0 440.4 0 352C0 263.6 71.63 192 160 192C248.4 192 320 263.6 320 352zM160 208C80.47 208 16 272.5 16 352C16 431.5 80.47 496 160 496C239.5 496 304 431.5 304 352C304 272.5 239.5 208 160 208zM388.6 293.1C391.6 297.8 392.8 302.7 391.7 307.5L368.4 412.5C366.5 421.2 371.9 429.7 380.5 431.6C389.2 433.5 397.7 428.1 399.6 419.5L431.6 275.5C432.7 270.7 431.5 265.8 428.5 261.1C425.4 258.2 420.9 256 416 256H326.3C323.1 250.5 319.7 245.1 315.1 240H416C425.7 240 434.9 244.4 440.1 251.1C447 259.5 449.3 269.5 447.2 278.9L415.2 422.9C411.4 440.2 394.3 451.1 377.1 447.2C359.8 443.4 348.9 426.3 352.8 409.1L376.1 304H345.1C344.6 298.6 342.9 293.2 341.1 288H376.1C380.1 288 385.6 290.2 388.6 293.1H388.6zM337.4 181.4L301.1 221.8C297.4 217.8 293.7 214.1 289.7 210.4L325.5 170.7C339.8 154.8 334.7 129.5 315.3 120.4L198.8 65.52C193.5 63 187.1 63.65 182.4 67.2L118.4 115.2C111.3 120.5 109.9 130.5 115.2 137.6C120.5 144.7 130.5 146.1 137.6 140.8L186.2 104.4C190.9 100.8 197.2 100.2 202.6 102.7L253.4 126.6C258.2 128.8 261.5 133.2 262.4 138.3C263.3 143.5 261.6 148.7 257.1 152.4L235.1 175.2C229.7 172.1 224.2 170.9 218.6 169.1L246.6 141.1L195.8 117.2L147.2 153.6C133.1 164.2 113 161.3 102.4 147.2C91.8 133.1 94.66 113 108.8 102.4L172.8 54.4C182.3 47.29 194.9 46 205.6 51.05L322.1 105.9C351.3 119.6 358.9 157.5 337.4 181.4V181.4z"/>
</>],

]);

const WheelchairMove: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

WheelchairMove.displayName = "WheelchairMove";

export default WheelchairMove;
