
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M224 480C100.3 480 0 429.9 0 368V144C0 82.14 100.3 32 224 32C347.7 32 448 82.14 448 144V368C448 429.9 347.7 480 224 480zM224 208C312.4 208 384 179.3 384 144C384 108.7 312.4 80 224 80C135.6 80 64 108.7 64 144C64 179.3 135.6 208 224 208z"/><path className="fa-secondary" d="M308.2 198.4C272.9 184.9 244.4 162.4 226.2 135C210.2 138.9 189.9 145.6 169.4 155.9C150.8 165.2 132.8 177.1 117.1 191.9C102.8 186.6 90.28 180.1 81.09 172.8C101.5 149.6 126.1 132.4 151.4 120.1C171.5 110 191.6 102.9 208.9 98.19C207.2 92.37 205.1 86.44 205.1 80.44C211.3 80.15 217.6 80 223.1 80C231.4 80 238.7 80.2 245.8 80.59C255.1 123 299.1 165.9 368.6 171.4C355.4 182.6 334.3 191.1 308.2 198.4V198.4z"/>
</>],
['light',<>
	<path d="M448 352C448 397.2 412.2 429.4 374.1 448.5C334 468.5 280.9 480 224 480C167.1 480 113.1 468.5 73.92 448.5C35.78 429.4 0 397.2 0 352V136C0 113.6 12.21 96.13 25.86 84.03C39.55 71.89 57.53 62.43 76.1 55.13C116.2 40.43 168.2 32 223.1 32C279.8 32 331.8 40.43 371 55.13C390.5 62.43 408.5 71.89 422.1 84.03C435.8 96.13 448 113.6 448 136L448 352zM416 136C416 98.26 338.6 67.3 240 64.25C240.2 117.1 294.4 175.9 383.7 175.1C404.1 164.6 416 150.8 416 136zM78.01 182.8C98.83 156.3 126.5 137.1 153.2 123.7C174.7 112.9 196.1 105.6 214 100.1C210.1 89.11 208 76.76 208 64.25C109.4 67.3 32 98.26 32 136C32 153.9 49.32 170.2 78.01 182.8V182.8zM110.4 194.1C142.2 202.8 181.5 208 224 208C259 208 291.8 204.5 320.1 198.4C279.5 185.5 247.4 160.8 228.1 130.5C211.4 134.3 189.5 141.3 167.6 152.3C146.7 162.8 126.5 176.5 110.4 194.1V194.1zM32 352C32 405 117.1 448 224 448C330 448 416 405 416 352V193C403.3 202.8 387.7 210.6 371 216.9C331.8 231.6 279.8 240 224 240C168.2 240 116.2 231.6 76.1 216.9C60.32 210.6 44.73 202.8 32 193V352z"/>
</>],
['regular',<>
	<path d="M224 32C347.7 32 448 82.14 448 144V368C448 429.9 347.7 480 224 480C100.3 480 0 429.9 0 368V144C0 82.14 100.3 32 224 32zM354.1 233.8C319 248.2 272.7 256 224 256C175.3 256 128.1 248.2 93.04 233.8C77.04 227.4 61.18 218.1 48 207.7V368C48 370.1 51.64 386.5 87.07 404.3C119.6 420.5 167.1 432 224 432C280 432 328.4 420.5 360.9 404.3C396.4 386.5 400 370.1 400 368V207.7C386.8 218.1 370.1 227.4 354.1 233.8V233.8zM81.09 172.8C101.5 149.6 126.1 132.4 151.4 120.1C171.5 110 191.6 102.9 208.9 98.19C207.2 92.37 205.1 86.44 205.1 80.44C125.7 84.18 64 111.2 64 144C64 154.4 70.16 164.1 81.09 172.8L81.09 172.8zM117.1 191.9C146.2 201.9 183.3 208 224 208C254.9 208 283.8 204.5 308.2 198.4C272.9 184.9 244.4 162.4 226.2 135C210.2 138.9 189.9 145.6 169.4 155.9C150.8 165.2 132.8 177.1 117.1 191.9H117.1zM245.8 80.59C255.1 123 299.1 165.9 368.6 171.4C378.5 163.1 384 153.8 384 144C384 111.6 323.9 84.85 245.8 80.59z"/>
</>],
['solid',<>
	<path d="M224 480C100.3 480 0 429.9 0 368V144C0 82.14 100.3 32 224 32C347.7 32 448 82.14 448 144V368C448 429.9 347.7 480 224 480zM308.2 198.4C272.9 184.9 244.4 162.4 226.2 135C210.2 138.9 189.9 145.6 169.4 155.9C150.8 165.2 132.8 177.1 117.1 191.9C146.2 201.9 183.3 208 223.1 208C254.9 208 283.8 204.5 308.2 198.4H308.2zM64 144C64 154.4 70.16 164.1 81.09 172.8C101.5 149.6 126.1 132.4 151.4 120.1C171.5 110 191.6 102.9 208.9 98.19C207.2 92.37 205.1 86.44 205.1 80.44C125.7 84.18 64 111.2 64 144L64 144zM368.6 171.4C378.5 163.1 384 153.8 384 144C384 111.6 323.9 84.85 245.8 80.59C255.1 123 299.1 165.9 368.6 171.4V171.4z"/>
</>],
['thin',<>
	<path d="M448 360C448 398 417.6 428.2 378.2 447.8C337.9 468 283.4 480 224 480C164.6 480 110.1 468 69.77 447.8C30.43 428.2 .0003 398 0 360V125.1C0 109 9.238 94.74 21.73 83.67C34.24 72.57 51.43 63.32 71.3 55.86C111.2 40.92 165.2 32 224 32C282.8 32 336.8 40.92 376.7 55.86C396.6 63.32 413.8 72.57 426.3 83.67C438.8 94.74 448 109 448 126L448 360zM16 127.1C16 147.6 34.28 165.5 64.64 179.4C86.46 145.4 119.6 121.4 151.9 105.2C180.7 90.7 209.4 82.12 230.2 78.07C226.9 68.26 224.9 58.18 224.2 48H223.1C109.1 48 15.1 83.82 15.1 128L16 127.1zM224 207.1C281.9 207.1 334.3 198.9 372 184.2C307.2 174.9 258.1 138.3 236.4 93.19C216.9 96.68 188 104.9 159.1 119.5C129.1 134.5 99.47 156.1 79.71 185.6C117.1 199.5 167.1 208 224 208L224 207.1zM432 127.1C432 85.93 347.6 51.44 240.3 48.24C245.1 108.4 306.4 168.8 400.4 170.4C420.4 158.1 432 143.6 432 128V127.1zM16 360C16 417.4 109.1 464 224 464C338.9 464 432 417.4 432 360V165.4C430.2 167.4 428.4 169.2 426.4 170.1C413.9 182.3 396.7 191.8 376.8 199.5C336.9 214.8 282.9 223.1 224 223.1C165.1 223.1 111.1 214.8 71.18 199.5C51.28 191.8 34.08 182.3 21.58 170.1C19.63 169.2 17.76 167.4 16 165.4V360z"/>
</>],

]);

const SushiRoll: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SushiRoll.displayName = "SushiRoll";

export default SushiRoll;
