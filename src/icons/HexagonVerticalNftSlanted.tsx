
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M295.9 109.6C300.9 112.4 304 117.7 304 123.5C304 135.8 290.7 143.5 280.1 137.4L255.8 123.6V240.6H287.8C296.7 240.6 303.8 247.7 303.8 256.6C303.8 265.4 296.7 272.6 287.8 272.6H255.8V400.6C255.8 409.4 248.7 416.6 239.8 416.6C231 416.6 223.8 409.4 223.8 400.6V96.34C223.8 94.77 224 93.18 224.5 91.63C224.1 89.71 225.9 87.94 227 86.4C228.2 84.9 229.5 83.64 231 82.65C233.6 80.97 236.6 80 239.8 80H239.9C240.4 80 240.9 80.03 241.4 80.07C243.8 80.3 246.1 81.09 248.1 82.31L295.9 109.6zM328.1 164.8C323.1 161.9 320 156.6 320 150.9C320 138.6 333.3 130.9 343.9 137L415.9 178.1C423.6 182.5 426.3 192.3 421.9 199.9C417.5 207.6 407.7 210.3 400.1 205.9L383.8 196.6V352.6C383.8 361.4 376.7 368.6 367.8 368.6C359 368.6 351.8 361.4 351.8 352.6V178.4L328.1 164.8zM191.8 368.6C191.8 376.4 186.2 383.1 178.4 384.4C170.7 385.6 163.2 381.1 160.7 373.6L127.8 275.2V336.6C127.8 345.4 120.7 352.6 111.8 352.6C103 352.6 95.85 345.4 95.85 336.6V176.6C95.85 168.7 101.5 162 109.3 160.8C117 159.5 124.5 164.1 127 171.5L159.8 269.1V144.6C159.8 135.7 167 128.6 175.8 128.6C184.7 128.6 191.8 135.7 191.8 144.6V368.6z"/><path className="fa-secondary" d="M220.9 17.65C243.2 4.785 270.6 4.785 292.9 17.65L445.8 105.9C468.1 118.8 481.8 142.6 481.8 168.3V344.9C481.8 370.6 468.1 394.4 445.8 407.2L292.9 495.5C270.6 508.4 243.2 508.4 220.9 495.5L68 407.2C45.72 394.4 32 370.6 32 344.9V168.3C32 142.6 45.72 118.8 68 105.9L220.9 17.65zM304 123.5C304 117.7 300.9 112.4 295.9 109.6L248.1 82.31C246.1 81.09 243.8 80.3 241.4 80.07C240.9 80.03 240.4 80 239.9 80H239.8C236.6 80 233.6 80.98 231 82.65C229.5 83.64 228.2 84.9 227 86.4C225.9 87.94 224.1 89.71 224.5 91.63C224 93.18 223.8 94.77 223.8 96.34V400.6C223.8 409.4 231 416.6 239.8 416.6C248.7 416.6 255.8 409.4 255.8 400.6V272.6H287.8C296.7 272.6 303.8 265.4 303.8 256.6C303.8 247.7 296.7 240.6 287.8 240.6H255.8V123.6L280.1 137.4C290.7 143.5 304 135.8 304 123.5H304zM320 150.9C320 156.6 323.1 161.9 328.1 164.8L351.8 178.4V352.6C351.8 361.4 359 368.6 367.8 368.6C376.7 368.6 383.8 361.4 383.8 352.6V196.6L400.1 205.9C407.7 210.3 417.5 207.6 421.9 199.9C426.3 192.3 423.6 182.5 415.9 178.1L343.9 137C333.3 130.9 320 138.6 320 150.9V150.9zM159.8 144.6V269.1L127 171.5C124.5 164.1 117 159.5 109.3 160.8C101.5 162 95.85 168.7 95.85 176.6V336.6C95.85 345.4 103 352.6 111.8 352.6C120.7 352.6 127.8 345.4 127.8 336.6V275.2L160.7 373.6C163.2 381.1 170.7 385.6 178.4 384.4C186.2 383.1 191.8 376.4 191.8 368.6V144.6C191.8 135.7 184.7 128.6 175.8 128.6C167 128.6 159.8 135.7 159.8 144.6V144.6z"/>
</>],
['light',<>
	<path d="M280.1 137.4L255.8 123.6V240.6H287.8C296.7 240.6 303.8 247.7 303.8 256.6C303.8 265.4 296.7 272.6 287.8 272.6H255.8V400.6C255.8 409.4 248.7 416.6 239.8 416.6C231 416.6 223.8 409.4 223.8 400.6V96.34C223.8 94.77 224 93.18 224.5 91.63C224.1 89.71 225.9 87.94 227 86.4C228.2 84.9 229.5 83.64 231 82.65C233.6 80.98 236.6 80 239.8 80H239.9C240.4 80 240.9 80.03 241.4 80.07C243.8 80.3 246.1 81.09 248.1 82.31L295.9 109.6C300.9 112.4 304 117.7 304 123.5C304 135.8 290.7 143.5 280.1 137.4H280.1zM343.9 137L415.9 178.1C423.6 182.5 426.3 192.3 421.9 199.9C417.5 207.6 407.7 210.3 400.1 205.9L383.8 196.6V352.6C383.8 361.4 376.7 368.6 367.8 368.6C359 368.6 351.8 361.4 351.8 352.6V178.4L328.1 164.8C323.1 161.9 320 156.6 320 150.9C320 138.6 333.3 130.9 343.9 137V137zM175.8 128.6C184.7 128.6 191.8 135.7 191.8 144.6V368.6C191.8 376.4 186.2 383.1 178.4 384.4C170.7 385.6 163.2 381.1 160.7 373.6L127.8 275.2V336.6C127.8 345.4 120.7 352.6 111.8 352.6C103 352.6 95.85 345.4 95.85 336.6V176.6C95.85 168.7 101.5 162 109.3 160.8C117 159.5 124.5 164.1 127 171.5L159.8 269.1V144.6C159.8 135.7 167 128.6 175.8 128.6V128.6zM223.8 16.57C243.6 5.142 268 5.142 287.8 16.57L447.7 108.9C467.5 120.3 479.7 141.4 479.7 164.3V348.9C479.7 371.7 467.5 392.9 447.7 404.3L287.8 496.6C268 508 243.6 508 223.8 496.6L64 404.3C44.2 392.9 32 371.7 32 348.9V164.3C32 141.4 44.2 120.3 64 108.9L223.8 16.57zM271.8 44.29C261.9 38.57 249.7 38.57 239.8 44.29L80 136.6C70.1 142.3 64 152.9 64 164.3V348.9C64 360.3 70.1 370.9 80 376.6L239.8 468.9C249.7 474.6 261.9 474.6 271.8 468.9L431.7 376.6C441.6 370.9 447.7 360.3 447.7 348.9V164.3C447.7 152.9 441.6 142.3 431.7 136.6L271.8 44.29z"/>
</>],
['regular',<>
	<path d="M445.8 105.9C468.1 118.8 481.8 142.6 481.8 168.3V344.9C481.8 370.6 468.1 394.4 445.8 407.2L292.9 495.5C270.6 508.4 243.2 508.4 220.9 495.5L68 407.2C45.72 394.4 32 370.6 32 344.9V168.3C32 142.6 45.72 118.8 68 105.9L220.9 17.65C243.2 4.785 270.6 4.785 292.9 17.65L445.8 105.9zM91.1 147.5C84.57 151.8 79.1 159.7 79.1 168.3V344.9C79.1 353.4 84.57 361.4 91.1 365.6L244.9 453.9C252.3 458.2 261.5 458.2 268.9 453.9L421.8 365.6C429.3 361.4 433.8 353.4 433.8 344.9V168.3C433.8 159.7 429.3 151.8 421.8 147.5L268.9 59.22C261.5 54.93 252.3 54.93 244.9 59.22L91.1 147.5zM295.9 109.6C300.9 112.4 304 117.7 304 123.5C304 135.8 290.7 143.5 280.1 137.4L255.8 123.6V240.6H287.8C296.7 240.6 303.8 247.7 303.8 256.6C303.8 265.4 296.7 272.6 287.8 272.6H255.8V400.6C255.8 409.4 248.7 416.6 239.8 416.6C231 416.6 223.8 409.4 223.8 400.6V96.34C223.8 94.77 224 93.18 224.5 91.63C224.1 89.71 225.9 87.94 227 86.4C228.2 84.9 229.5 83.64 231 82.65C233.6 80.97 236.6 80 239.8 80H239.9C240.4 80 240.9 80.03 241.4 80.07C243.8 80.3 246.1 81.09 248.1 82.31L295.9 109.6zM328.1 164.8C323.1 161.9 320 156.6 320 150.9C320 138.6 333.3 130.9 343.9 137L415.9 178.1C423.6 182.5 426.3 192.3 421.9 199.9C417.5 207.6 407.7 210.3 400.1 205.9L383.8 196.6V352.6C383.8 361.4 376.7 368.6 367.8 368.6C359 368.6 351.8 361.4 351.8 352.6V178.4L328.1 164.8zM191.8 368.6C191.8 376.4 186.2 383.1 178.4 384.4C170.7 385.6 163.1 381.1 160.7 373.6L127.8 275.2V336.6C127.8 345.4 120.7 352.6 111.8 352.6C103 352.6 95.85 345.4 95.85 336.6V176.6C95.85 168.7 101.5 162 109.3 160.8C117 159.5 124.5 164.1 127 171.5L159.8 269.1V144.6C159.8 135.7 167 128.6 175.8 128.6C184.7 128.6 191.8 135.7 191.8 144.6V368.6z"/>
</>],
['solid',<>
	<path d="M220.9 17.65C243.2 4.785 270.6 4.785 292.9 17.65L445.8 105.9C468.1 118.8 481.8 142.6 481.8 168.3V344.9C481.8 370.6 468.1 394.4 445.8 407.2L292.9 495.5C270.6 508.4 243.2 508.4 220.9 495.5L68 407.2C45.72 394.4 32 370.6 32 344.9V168.3C32 142.6 45.72 118.8 68 105.9L220.9 17.65zM304 123.5C304 117.7 300.9 112.4 295.9 109.6L248.1 82.31C246.1 81.09 243.8 80.3 241.4 80.07C240.9 80.03 240.4 80 239.9 80H239.8C236.6 80 233.6 80.98 231 82.65C229.5 83.64 228.2 84.9 227 86.4C225.9 87.94 224.1 89.71 224.5 91.63C224 93.18 223.8 94.77 223.8 96.34V400.6C223.8 409.4 231 416.6 239.8 416.6C248.7 416.6 255.8 409.4 255.8 400.6V272.6H287.8C296.7 272.6 303.8 265.4 303.8 256.6C303.8 247.7 296.7 240.6 287.8 240.6H255.8V123.6L280.1 137.4C290.7 143.5 304 135.8 304 123.5H304zM320 150.9C320 156.6 323.1 161.9 328.1 164.8L351.8 178.4V352.6C351.8 361.4 359 368.6 367.8 368.6C376.7 368.6 383.8 361.4 383.8 352.6V196.6L400.1 205.9C407.7 210.3 417.5 207.6 421.9 199.9C426.3 192.3 423.6 182.5 415.9 178.1L343.9 137C333.3 130.9 320 138.6 320 150.9V150.9zM159.8 144.6V269.1L127 171.5C124.5 164.1 117 159.5 109.3 160.8C101.5 162 95.85 168.7 95.85 176.6V336.6C95.85 345.4 103 352.6 111.8 352.6C120.7 352.6 127.8 345.4 127.8 336.6V275.2L160.7 373.6C163.2 381.1 170.7 385.6 178.4 384.4C186.2 383.1 191.8 376.4 191.8 368.6V144.6C191.8 135.7 184.7 128.6 175.8 128.6C167 128.6 159.8 135.7 159.8 144.6V144.6z"/>
</>],
['thin',<>
	<path d="M175.8 136.6C180.3 136.6 183.8 140.2 183.8 144.6V368.6C183.8 372.5 181 375.8 177.1 376.5C173.3 377.1 169.5 374.8 168.3 371.1L119.8 225.9V336.6C119.8 340.1 116.3 344.6 111.8 344.6C107.4 344.6 103.8 340.1 103.8 336.6V176.6C103.8 172.7 106.7 169.3 110.6 168.7C114.4 168.1 118.2 170.3 119.4 174L167.8 319.3V144.6C167.8 140.2 171.4 136.6 175.8 136.6V136.6zM244 89.17L299.1 121.1C302.5 122.5 304 125.2 304 128.1C304 134.2 297.4 138.1 292 135L247.8 109.8V248.6H287.8C292.3 248.6 295.8 252.2 295.8 256.6C295.8 260.1 292.3 264.6 287.8 264.6H247.8V400.6C247.8 404.1 244.3 408.6 239.8 408.6C235.4 408.6 231.8 404.1 231.8 400.6V96.24C231.8 94.82 232.1 93.36 232.9 92.03C233.6 90.76 234.6 89.77 235.8 89.08C237 88.39 238.4 87.1 239.8 87.1C239.1 87.1 240.1 88 240.3 88.01C241.6 88.08 242.9 88.5 244 89.17L244 89.17zM375.8 352.6C375.8 356.1 372.3 360.6 367.8 360.6C363.4 360.6 359.8 356.1 359.8 352.6V173.7L324 153.3C321.5 151.9 320 149.2 320 146.3C320 140.2 326.6 136.3 331.1 139.4L411.1 185.1C415.8 187.2 417.1 192.1 414.9 195.1C412.8 199.8 407.9 201.1 404 198.9L375.8 182.9V352.6zM61.22 408.8C43.9 398.8 33.22 380.3 33.22 360.3V167.7C33.22 147.7 43.9 129.2 61.22 119.2L227.1 22.93C238.6 16.82 250.7 14.44 262.4 15.8C269.9 16.67 277.3 19.04 283.1 22.93L450.8 119.2C468.1 129.2 478.8 147.7 478.8 167.7V360.3C478.8 380.3 468.1 398.8 450.8 408.8L283.1 505.1C278.1 508.5 271.7 510.7 265.2 511.8C257.4 513.1 249.3 512.7 241.6 510.7C236.9 509.5 232.3 507.6 227.1 505.1L61.22 408.8zM261.2 496.2C266.3 495.6 271.4 493.9 275.1 491.2L442.8 394.9C455.1 387.8 462.8 374.6 462.8 360.3V167.7C462.8 153.4 455.1 140.2 442.8 133.1L275.1 36.79C272.8 34.97 269.5 33.61 266.1 32.72C262.8 31.86 259.4 31.43 255.1 31.43C249.1 31.43 242.2 33.22 235.1 36.79L69.22 133.1C56.85 140.2 49.22 153.4 49.22 167.7V360.3C49.22 374.6 56.85 387.8 69.22 394.9L235.1 491.2C237.5 492.1 239.1 492.9 240.8 493.6L261.2 496.2z"/>
</>],

]);

const HexagonVerticalNftSlanted: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HexagonVerticalNftSlanted.displayName = "HexagonVerticalNftSlanted";

export default HexagonVerticalNftSlanted;
