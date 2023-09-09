
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M490.3 13.13L547.6 103.8C577.3 150.7 551 215.8 495.5 223.2C491.6 223.7 487.6 224 483.4 224C457.4 224 434.2 212.6 418.3 195C402.4 212.6 379.2 224 353.1 224C327 224 303.8 212.6 287.9 195C272 212.6 248.9 224 222.7 224C196.7 224 173.5 212.6 157.6 195C141.7 212.6 118.5 224 92.36 224C88.3 224 84.21 223.7 80.24 223.2C24.92 215.8-1.255 150.6 28.33 103.8L85.66 13.13C90.76 4.979 99.87 0 109.6 0H466.4C476.1 0 485.2 4.978 490.3 13.13H490.3z"/><path className="fa-secondary" d="M80.23 223.2C84.21 223.7 88.3 224 92.36 224C105.1 224 117.2 221.3 128 216.5V384H448V216.5C458.8 221.3 470.8 224 483.4 224C487.6 224 491.6 223.7 495.5 223.2C501.4 222.4 506.9 221 512 219.1V448C512 483.3 483.3 512 448 512H128C92.65 512 64 483.3 64 448V219.1C69.08 221 74.5 222.4 80.24 223.2H80.23z"/>
</>],
['light',<>
	<path d="M431.3 206.8C426.5 203.3 422.2 199.4 418.3 195C414.4 199.3 410.1 203.2 405.4 206.7C390.9 217.5 372.8 224 353.1 224C333.5 224 315.6 217.6 301.1 206.1C296.3 203.4 291.9 199.4 287.9 195C283.9 199.4 279.5 203.4 274.7 206.1C260.2 217.6 242.3 224 222.7 224C203.2 224 185.2 217.6 170.7 206.1C165.9 203.4 161.5 199.4 157.6 195C153.6 199.4 149.1 203.4 144.3 206.1C129.9 217.6 111.1 224 92.36 224C88.3 224 84.21 223.7 80.24 223.2C24.92 215.8-1.255 150.6 28.33 103.8L85.66 13.13C90.76 4.979 99.87 0 109.6 0H466.4C476.1 0 485.2 4.978 490.3 13.13L547.6 103.8C577.3 150.7 551 215.8 495.5 223.2C491.6 223.7 487.6 224 483.4 224C463.8 224 445.8 217.5 431.3 206.8H431.3zM464.4 32H111.6L55.38 120.9C36.71 150.5 55.1 187.5 84.44 191.5C87.11 191.8 89.8 192 92.36 192C108.1 192 123.6 184.8 133.8 173.6C139.9 166.9 148.5 163 157.6 163C166.6 163 175.2 166.9 181.3 173.6C191.5 184.8 206.2 192 222.7 192C239.3 192 253.1 184.8 264.2 173.6C270.2 166.9 278.9 163 287.9 163C296.1 163 305.6 166.9 311.6 173.6C321.8 184.8 336.5 191.1 353.1 191.1C369.7 191.1 384.3 184.8 394.5 173.6C400.6 166.9 409.2 163 418.2 163C427.2 163 435.9 166.8 441.9 173.5C452.2 184.8 466.1 191.1 483.4 191.1C486.1 191.1 488.7 191.8 491.4 191.5C520.9 187.5 539.3 150.5 520.6 120.9L464.4 32zM96 272V352H480V272C480 263.2 487.2 256 496 256C504.8 256 512 263.2 512 272V448C512 483.3 483.3 512 448 512H128C92.65 512 64 483.3 64 448V272C64 263.2 71.16 256 80 256C88.84 256 96 263.2 96 272zM96 448C96 465.7 110.3 480 128 480H448C465.7 480 480 465.7 480 448V384H96V448z"/>
</>],
['regular',<>
	<path d="M483.4 224C463.8 224 445.8 217.5 431.3 206.8C426.5 203.3 422.2 199.4 418.3 195C414.4 199.3 410.1 203.2 405.4 206.7C390.9 217.5 372.8 224 353.1 224C333.5 224 315.6 217.6 301.1 206.1C296.3 203.4 291.9 199.4 287.9 195C283.9 199.4 279.5 203.4 274.7 206.1C260.2 217.6 242.3 224 222.7 224C203.2 224 185.2 217.6 170.7 206.1C165.9 203.4 161.5 199.4 157.6 195C153.6 199.4 149.1 203.4 144.3 206.1C129.9 217.6 111.1 223.1 92.41 224C92.39 224 92.38 224 92.36 224C88.3 224 84.21 223.7 80.24 223.2C24.92 215.8-1.255 150.6 28.33 103.8L85.66 13.13C90.76 4.979 99.87 0 109.6 0H466.4C476.1 0 485.2 4.978 490.3 13.13L547.6 103.8C577.3 150.7 551 215.8 495.5 223.2C491.6 223.7 487.6 223.1 483.5 224C483.5 224 483.5 224 483.4 224H483.4zM455.6 48H120.4L68.91 129.5C63.12 138.6 62.57 149.9 66.65 159.6C70.57 168.8 77.67 174.4 86.56 175.6C88.57 175.9 90.54 176 92.36 176C104.2 176 114.6 170.9 121.9 162.8C131 152.8 143.1 147 157.6 147C171.1 147 184.1 152.8 193.2 162.8C200.5 170.9 210.9 176 222.7 176C234.6 176 244.1 170.9 252.3 162.8C261.4 152.8 274.3 147 287.9 147C301.5 147 314.4 152.8 323.5 162.8C330.8 170.9 341.3 176 353.1 176C364.9 176 375.3 170.9 382.6 162.8C391.7 152.8 404.6 147 418.2 147C431.7 147 444.7 152.7 453.8 162.8C461.2 170.9 471.7 176 483.4 176C485.4 176 487.3 175.9 489.3 175.6C498.3 174.4 505.4 168.8 509.3 159.6C513.4 149.1 512.9 138.7 507.1 129.5L455.6 48zM464 336V254.4C470.3 255.5 476.8 256 483.4 256C489 256 494.4 255.6 499.7 254.9L499.7 254.9C503.1 254.4 508 253.6 512 252.6V448C512 483.3 483.3 512 448 512H128C92.66 512 64 483.3 64 448V252.6C67.87 253.6 71.86 254.4 75.97 254.9L76.09 254.9C81.35 255.6 86.83 256 92.36 256C99.06 256 105.6 255.4 112 254.4V336H464zM464 384H112V448C112 456.8 119.2 464 128 464H448C456.8 464 464 456.8 464 448V384z"/>
</>],
['solid',<>
	<path d="M495.5 223.2C491.6 223.7 487.6 224 483.4 224C457.4 224 434.2 212.6 418.3 195C402.4 212.6 379.2 224 353.1 224C327 224 303.8 212.6 287.9 195C272 212.6 248.9 224 222.7 224C196.7 224 173.5 212.6 157.6 195C141.7 212.6 118.5 224 92.36 224C88.3 224 84.21 223.7 80.24 223.2C24.92 215.8-1.255 150.6 28.33 103.8L85.66 13.13C90.76 4.979 99.87 0 109.6 0H466.4C476.1 0 485.2 4.978 490.3 13.13L547.6 103.8C577.3 150.7 551 215.8 495.5 223.2H495.5zM499.7 254.9C503.1 254.4 508 253.6 512 252.6V448C512 483.3 483.3 512 448 512H128C92.66 512 64 483.3 64 448V252.6C67.87 253.6 71.86 254.4 75.97 254.9L76.09 254.9C81.35 255.6 86.83 256 92.36 256C104.8 256 116.8 254.1 128 250.6V384H448V250.7C459.2 254.1 471.1 256 483.4 256C489 256 494.4 255.6 499.7 254.9L499.7 254.9z"/>
</>],
['thin',<>
	<path d="M144 360C144 364.4 147.6 368 152 368H424C428.4 368 432 364.4 432 360V256C432 251.6 435.6 248 440 248C444.4 248 448 251.6 448 256V360C448 373.3 437.3 384 424 384H152C138.7 384 128 373.3 128 360V256C128 251.6 131.6 248 136 248C140.4 248 144 251.6 144 256V360zM547.6 103.8C574.2 145.8 555.9 202.4 512 219.1V440C512 479.8 479.8 512 440 512H136C96.24 512 64 479.8 64 440V219.1C20.09 202.4 1.813 145.8 28.33 103.8L85.66 13.13C90.76 4.979 99.87 0 109.6 0H466.4C476.1 0 485.2 4.978 490.3 13.13L547.6 103.8zM476.8 21.62C474.6 18.23 470.7 16 466.4 16H109.6C105.3 16 101.3 18.23 99.22 21.62L99.18 21.68L41.86 112.4C17.73 150.6 40.01 201.6 82.34 207.3C85.66 207.8 89.05 208 92.36 208C113.7 208 132.7 198.7 145.7 184.3C148.7 180.9 153 179 157.6 179C162.1 179 166.4 180.9 169.4 184.3C182.5 198.7 201.4 208 222.7 208C244.1 208 263 198.7 276 184.3C279.1 180.9 283.4 179 287.9 179C292.4 179 296.7 180.9 299.8 184.3C312.8 198.7 331.8 208 353.1 208C374.5 208 393.4 198.7 406.4 184.3C409.4 180.1 413.7 179 418.2 179C422.7 179 427.1 180.9 430.1 184.3C443.2 198.7 462.2 208 483.4 208C486.9 208 490.1 207.8 493.4 207.3C535.1 201.7 558.3 150.6 534.1 112.4L476.8 21.62zM430 205.9C425.8 202.6 421.8 198.1 418.3 195C414.7 198.1 410.7 202.6 406.5 205.9C391.8 217.2 373.4 224 353.1 224C332.9 224 314.4 217.2 299.7 205.9C295.4 202.6 291.5 198.1 287.9 195C284.3 198.1 280.4 202.6 276.1 205.9C261.5 217.2 242.1 224 222.7 224C202.5 224 184 217.2 169.3 205.9C165.1 202.6 161.1 198.1 157.6 195C153.1 198.1 150 202.6 145.8 205.9C131.1 217.2 112.6 223.1 92.36 223.1C88.3 223.1 84.21 223.7 80.24 223.2L80 223.2V440C80 470.9 105.1 496 136 496H440C470.9 496 496 470.9 496 440V223.1L495.5 223.2C491.6 223.7 487.6 223.1 483.4 223.1C463.2 223.1 444.8 217.1 430 205.9L430 205.9z"/>
</>],

]);

const Store: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Store.displayName = "Store";

export default Store;