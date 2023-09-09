
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M127.1 32C127.1 14.33 142.3 0 159.1 0H287.1C305.7 0 320 14.33 320 32V160C320 177.7 305.7 192 287.1 192C270.3 192 255.1 177.7 255.1 160V109.3L54.63 310.6C42.13 323.1 21.87 323.1 9.372 310.6C-3.124 298.1-3.124 277.9 9.372 265.4L210.7 64H159.1C142.3 64 127.1 49.67 127.1 32z"/><path className="fa-secondary" d="M480 80C480 53.49 501.5 32 528 32C554.5 32 576 53.49 576 80C576 106.5 554.5 128 528 128C501.5 128 480 106.5 480 80zM352 208C352 181.5 373.5 160 400 160C426.5 160 448 181.5 448 208C448 234.5 426.5 256 400 256C373.5 256 352 234.5 352 208zM448 336C448 362.5 426.5 384 400 384C373.5 384 352 362.5 352 336C352 309.5 373.5 288 400 288C426.5 288 448 309.5 448 336zM352 464C352 437.5 373.5 416 400 416C426.5 416 448 437.5 448 464C448 490.5 426.5 512 400 512C373.5 512 352 490.5 352 464zM480 464C480 437.5 501.5 416 528 416C554.5 416 576 437.5 576 464C576 490.5 554.5 512 528 512C501.5 512 480 490.5 480 464zM320 336C320 362.5 298.5 384 272 384C245.5 384 224 362.5 224 336C224 309.5 245.5 288 272 288C298.5 288 320 309.5 320 336zM224 464C224 437.5 245.5 416 272 416C298.5 416 320 437.5 320 464C320 490.5 298.5 512 272 512C245.5 512 224 490.5 224 464zM192 464C192 490.5 170.5 512 144 512C117.5 512 96 490.5 96 464C96 437.5 117.5 416 144 416C170.5 416 192 437.5 192 464zM480 336C480 309.5 501.5 288 528 288C554.5 288 576 309.5 576 336C576 362.5 554.5 384 528 384C501.5 384 480 362.5 480 336zM576 208C576 234.5 554.5 256 528 256C501.5 256 480 234.5 480 208C480 181.5 501.5 160 528 160C554.5 160 576 181.5 576 208z"/>
</>],
['light',<>
	<path d="M304 0C312.8 0 320 7.164 320 16V176C320 184.8 312.8 192 304 192C295.2 192 288 184.8 288 176V54.63L27.31 315.3C21.07 321.6 10.94 321.6 4.686 315.3C-1.562 309.1-1.562 298.9 4.686 292.7L265.4 32H144C135.2 32 128 24.84 128 16C128 7.164 135.2 0 144 0H304zM480 80C480 53.49 501.5 32 528 32C554.5 32 576 53.49 576 80C576 106.5 554.5 128 528 128C501.5 128 480 106.5 480 80zM528 96C536.8 96 544 88.84 544 80C544 71.16 536.8 64 528 64C519.2 64 512 71.16 512 80C512 88.84 519.2 96 528 96zM352 208C352 181.5 373.5 160 400 160C426.5 160 448 181.5 448 208C448 234.5 426.5 256 400 256C373.5 256 352 234.5 352 208zM400 224C408.8 224 416 216.8 416 208C416 199.2 408.8 192 400 192C391.2 192 384 199.2 384 208C384 216.8 391.2 224 400 224zM448 336C448 362.5 426.5 384 400 384C373.5 384 352 362.5 352 336C352 309.5 373.5 288 400 288C426.5 288 448 309.5 448 336zM400 320C391.2 320 384 327.2 384 336C384 344.8 391.2 352 400 352C408.8 352 416 344.8 416 336C416 327.2 408.8 320 400 320zM352 464C352 437.5 373.5 416 400 416C426.5 416 448 437.5 448 464C448 490.5 426.5 512 400 512C373.5 512 352 490.5 352 464zM400 480C408.8 480 416 472.8 416 464C416 455.2 408.8 448 400 448C391.2 448 384 455.2 384 464C384 472.8 391.2 480 400 480zM480 464C480 437.5 501.5 416 528 416C554.5 416 576 437.5 576 464C576 490.5 554.5 512 528 512C501.5 512 480 490.5 480 464zM528 480C536.8 480 544 472.8 544 464C544 455.2 536.8 448 528 448C519.2 448 512 455.2 512 464C512 472.8 519.2 480 528 480zM320 336C320 362.5 298.5 384 272 384C245.5 384 224 362.5 224 336C224 309.5 245.5 288 272 288C298.5 288 320 309.5 320 336zM272 320C263.2 320 256 327.2 256 336C256 344.8 263.2 352 272 352C280.8 352 288 344.8 288 336C288 327.2 280.8 320 272 320zM224 464C224 437.5 245.5 416 272 416C298.5 416 320 437.5 320 464C320 490.5 298.5 512 272 512C245.5 512 224 490.5 224 464zM272 480C280.8 480 288 472.8 288 464C288 455.2 280.8 448 272 448C263.2 448 256 455.2 256 464C256 472.8 263.2 480 272 480zM192 464C192 490.5 170.5 512 144 512C117.5 512 96 490.5 96 464C96 437.5 117.5 416 144 416C170.5 416 192 437.5 192 464zM144 448C135.2 448 128 455.2 128 464C128 472.8 135.2 480 144 480C152.8 480 160 472.8 160 464C160 455.2 152.8 448 144 448zM480 336C480 309.5 501.5 288 528 288C554.5 288 576 309.5 576 336C576 362.5 554.5 384 528 384C501.5 384 480 362.5 480 336zM528 352C536.8 352 544 344.8 544 336C544 327.2 536.8 320 528 320C519.2 320 512 327.2 512 336C512 344.8 519.2 352 528 352zM576 208C576 234.5 554.5 256 528 256C501.5 256 480 234.5 480 208C480 181.5 501.5 160 528 160C554.5 160 576 181.5 576 208zM528 192C519.2 192 512 199.2 512 208C512 216.8 519.2 224 528 224C536.8 224 544 216.8 544 208C544 199.2 536.8 192 528 192z"/>
</>],
['regular',<>
	<path d="M152 0H296C309.3 0 320 10.75 320 24V168C320 181.3 309.3 192 296 192C282.7 192 272 181.3 272 168V81.94L40.97 312.1C31.6 322.3 16.4 322.3 7.029 312.1C-2.343 303.6-2.343 288.4 7.029 279L238.1 48H152C138.7 48 128 37.25 128 24C128 10.75 138.7 0 152 0V0zM576 80C576 106.5 554.5 128 528 128C501.5 128 480 106.5 480 80C480 53.49 501.5 32 528 32C554.5 32 576 53.49 576 80zM448 208C448 234.5 426.5 256 400 256C373.5 256 352 234.5 352 208C352 181.5 373.5 160 400 160C426.5 160 448 181.5 448 208zM352 336C352 309.5 373.5 288 400 288C426.5 288 448 309.5 448 336C448 362.5 426.5 384 400 384C373.5 384 352 362.5 352 336zM448 464C448 490.5 426.5 512 400 512C373.5 512 352 490.5 352 464C352 437.5 373.5 416 400 416C426.5 416 448 437.5 448 464zM576 464C576 490.5 554.5 512 528 512C501.5 512 480 490.5 480 464C480 437.5 501.5 416 528 416C554.5 416 576 437.5 576 464zM224 336C224 309.5 245.5 288 272 288C298.5 288 320 309.5 320 336C320 362.5 298.5 384 272 384C245.5 384 224 362.5 224 336zM320 464C320 490.5 298.5 512 272 512C245.5 512 224 490.5 224 464C224 437.5 245.5 416 272 416C298.5 416 320 437.5 320 464zM96 464C96 437.5 117.5 416 144 416C170.5 416 192 437.5 192 464C192 490.5 170.5 512 144 512C117.5 512 96 490.5 96 464zM576 336C576 362.5 554.5 384 528 384C501.5 384 480 362.5 480 336C480 309.5 501.5 288 528 288C554.5 288 576 309.5 576 336zM480 208C480 181.5 501.5 160 528 160C554.5 160 576 181.5 576 208C576 234.5 554.5 256 528 256C501.5 256 480 234.5 480 208z"/>
</>],
['solid',<>
	<path d="M287.1 0C305.7 0 320 14.33 320 32V160C320 177.7 305.7 192 287.1 192C270.3 192 255.1 177.7 255.1 160V109.3L54.63 310.6C42.13 323.1 21.87 323.1 9.372 310.6C-3.124 298.1-3.124 277.9 9.372 265.4L210.7 64H159.1C142.3 64 127.1 49.67 127.1 32C127.1 14.33 142.3 0 159.1 0H287.1zM576 80C576 106.5 554.5 128 528 128C501.5 128 480 106.5 480 80C480 53.49 501.5 32 528 32C554.5 32 576 53.49 576 80zM448 208C448 234.5 426.5 256 400 256C373.5 256 352 234.5 352 208C352 181.5 373.5 160 400 160C426.5 160 448 181.5 448 208zM352 336C352 309.5 373.5 288 400 288C426.5 288 448 309.5 448 336C448 362.5 426.5 384 400 384C373.5 384 352 362.5 352 336zM448 464C448 490.5 426.5 512 400 512C373.5 512 352 490.5 352 464C352 437.5 373.5 416 400 416C426.5 416 448 437.5 448 464zM576 464C576 490.5 554.5 512 528 512C501.5 512 480 490.5 480 464C480 437.5 501.5 416 528 416C554.5 416 576 437.5 576 464zM223.1 336C223.1 309.5 245.5 288 271.1 288C298.5 288 320 309.5 320 336C320 362.5 298.5 384 271.1 384C245.5 384 223.1 362.5 223.1 336zM320 464C320 490.5 298.5 512 271.1 512C245.5 512 223.1 490.5 223.1 464C223.1 437.5 245.5 416 271.1 416C298.5 416 320 437.5 320 464zM95.1 464C95.1 437.5 117.5 416 143.1 416C170.5 416 191.1 437.5 191.1 464C191.1 490.5 170.5 512 143.1 512C117.5 512 95.1 490.5 95.1 464zM576 336C576 362.5 554.5 384 528 384C501.5 384 480 362.5 480 336C480 309.5 501.5 288 528 288C554.5 288 576 309.5 576 336zM480 208C480 181.5 501.5 160 528 160C554.5 160 576 181.5 576 208C576 234.5 554.5 256 528 256C501.5 256 480 234.5 480 208z"/>
</>],
['thin',<>
	<path d="M151.1 0H312C316.4 0 320 3.582 320 8V168C320 172.4 316.4 176 312 176C307.6 176 304 172.4 304 168V27.31L29.66 301.7C26.53 304.8 21.47 304.8 18.34 301.7C15.22 298.5 15.22 293.5 18.34 290.3L292.7 16H151.1C147.6 16 143.1 12.42 143.1 8C143.1 3.582 147.6 0 151.1 0zM480 80C480 53.49 501.5 32 528 32C554.5 32 576 53.49 576 80C576 106.5 554.5 128 528 128C501.5 128 480 106.5 480 80zM528 112C545.7 112 560 97.67 560 80C560 62.33 545.7 48 528 48C510.3 48 496 62.33 496 80C496 97.67 510.3 112 528 112zM352 208C352 181.5 373.5 160 400 160C426.5 160 448 181.5 448 208C448 234.5 426.5 256 400 256C373.5 256 352 234.5 352 208zM400 240C417.7 240 432 225.7 432 208C432 190.3 417.7 176 400 176C382.3 176 368 190.3 368 208C368 225.7 382.3 240 400 240zM448 336C448 362.5 426.5 384 400 384C373.5 384 352 362.5 352 336C352 309.5 373.5 288 400 288C426.5 288 448 309.5 448 336zM400 304C382.3 304 368 318.3 368 336C368 353.7 382.3 368 400 368C417.7 368 432 353.7 432 336C432 318.3 417.7 304 400 304zM352 464C352 437.5 373.5 416 400 416C426.5 416 448 437.5 448 464C448 490.5 426.5 512 400 512C373.5 512 352 490.5 352 464zM400 496C417.7 496 432 481.7 432 464C432 446.3 417.7 432 400 432C382.3 432 368 446.3 368 464C368 481.7 382.3 496 400 496zM480 464C480 437.5 501.5 416 528 416C554.5 416 576 437.5 576 464C576 490.5 554.5 512 528 512C501.5 512 480 490.5 480 464zM528 496C545.7 496 560 481.7 560 464C560 446.3 545.7 432 528 432C510.3 432 496 446.3 496 464C496 481.7 510.3 496 528 496zM320 336C320 362.5 298.5 384 271.1 384C245.5 384 223.1 362.5 223.1 336C223.1 309.5 245.5 288 271.1 288C298.5 288 320 309.5 320 336zM271.1 304C254.3 304 239.1 318.3 239.1 336C239.1 353.7 254.3 368 271.1 368C289.7 368 304 353.7 304 336C304 318.3 289.7 304 271.1 304zM223.1 464C223.1 437.5 245.5 416 271.1 416C298.5 416 320 437.5 320 464C320 490.5 298.5 512 271.1 512C245.5 512 223.1 490.5 223.1 464zM271.1 496C289.7 496 304 481.7 304 464C304 446.3 289.7 432 271.1 432C254.3 432 239.1 446.3 239.1 464C239.1 481.7 254.3 496 271.1 496zM191.1 464C191.1 490.5 170.5 512 143.1 512C117.5 512 95.1 490.5 95.1 464C95.1 437.5 117.5 416 143.1 416C170.5 416 191.1 437.5 191.1 464zM143.1 432C126.3 432 111.1 446.3 111.1 464C111.1 481.7 126.3 496 143.1 496C161.7 496 175.1 481.7 175.1 464C175.1 446.3 161.7 432 143.1 432zM480 336C480 309.5 501.5 288 528 288C554.5 288 576 309.5 576 336C576 362.5 554.5 384 528 384C501.5 384 480 362.5 480 336zM528 368C545.7 368 560 353.7 560 336C560 318.3 545.7 304 528 304C510.3 304 496 318.3 496 336C496 353.7 510.3 368 528 368zM576 208C576 234.5 554.5 256 528 256C501.5 256 480 234.5 480 208C480 181.5 501.5 160 528 160C554.5 160 576 181.5 576 208zM528 176C510.3 176 496 190.3 496 208C496 225.7 510.3 240 528 240C545.7 240 560 225.7 560 208C560 190.3 545.7 176 528 176z"/>
</>],

]);

const ArrowUpRightDots: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ArrowUpRightDots.displayName = "ArrowUpRightDots";

export default ArrowUpRightDots;
