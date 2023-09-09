
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M135.9 125.9C128.3 130.3 118.5 127.6 114.1 119.9C109.7 112.3 112.4 102.5 120.1 98.11L127.1 94.08C162.3 73.95 206.4 78.14 237.2 104.5L250.4 115.9C257.1 121.6 257.9 131.7 252.1 138.4C246.4 145.1 236.3 145.9 229.6 140.1L216.4 128.8C195.9 111.2 166.5 108.4 142.1 121.9L135.9 125.9zM144.4 176C144.4 158.3 158.7 144 176.4 144C194 144 208.4 158.3 208.4 176C208.4 193.7 194 208 176.4 208C158.7 208 144.4 193.7 144.4 176zM112 400.6L263.8 345.4C276.3 340.9 290 347.3 294.6 359.8C299.1 372.3 292.7 386 280.2 390.6L230.4 408.7L204.3 480.4C197.4 499.4 179.4 512 159.2 512H112C85.49 512 64 490.5 64 464V352C64 338.7 74.75 328 88 328C101.3 328 112 338.7 112 352L112 400.6zM368.4 192C368.4 209.7 354 224 336.4 224C318.7 224 304.4 209.7 304.4 192C304.4 174.3 318.7 160 336.4 160C354 160 368.4 174.3 368.4 192z"/><path className="fa-secondary" d="M224.6 510.1C228.6 504.4 231.9 498.1 234.4 491.3L255.4 433.6L291.1 420.6C315 411.9 329.4 388.6 327.9 364.5C326.6 340.1 311.4 318.4 288.7 308.8L166.2 257.3C158.1 253.8 148.7 257.6 145.3 265.8C141.8 273.9 145.6 283.3 153.8 286.7L236.2 321.4L144 354.1V352C144 321.1 118.9 296 88 296C57.07 296 32 321.1 32 352V380C11.61 343.3 0 301 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C245.4 512 234.9 511.4 224.6 510.1L224.6 510.1zM176.4 207.1C194 207.1 208.4 193.7 208.4 175.1C208.4 158.3 194 143.1 176.4 143.1C158.7 143.1 144.4 158.3 144.4 175.1C144.4 193.7 158.7 207.1 176.4 207.1zM336.4 159.1C318.7 159.1 304.4 174.3 304.4 191.1C304.4 209.7 318.7 223.1 336.4 223.1C354 223.1 368.4 209.7 368.4 191.1C368.4 174.3 354 159.1 336.4 159.1zM229.6 140.1C236.3 145.9 246.4 145.1 252.1 138.4C257.9 131.7 257.1 121.6 250.4 115.9L237.2 104.5C206.4 78.14 162.3 73.95 127.1 94.08L120.1 98.11C112.4 102.5 109.7 112.3 114.1 119.9C118.5 127.6 128.3 130.3 135.9 125.9L142.1 121.9C166.5 108.4 195.9 111.2 216.4 128.8L229.6 140.1z"/>
</>],
['light',<>
	<path d="M40.05 315.7C42.4 324.3 37.4 333.1 28.88 335.4C20.37 337.8 11.56 332.8 9.204 324.3C3.202 302.5 0 279.6 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 379.9 424 483.2 307.2 506.9C298.5 508.6 290.1 503 288.3 494.4C286.6 485.7 292.2 477.3 300.8 475.5C403.1 454.8 480 364.4 480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256C32 276.7 34.81 296.7 40.05 315.7H40.05zM318.3 297.2C336.5 303.3 349.4 319.3 351.6 338C354.3 359.3 342.4 380.5 321.5 388.7L274.5 407.1L250.6 466.7C239.7 494.1 213.2 512 183.8 512H136C96.24 512 64 479.8 64 440V320C64 293.5 85.49 272 112 272C138.5 272 160 293.5 160 320V348.8L257.4 310.7L186.9 287.2C178.6 284.4 174 275.3 176.8 266.9C179.6 258.6 188.7 254 197.1 256.8L318.3 297.2zM318.9 338.2C315.7 329.9 306.4 325.9 298.2 329.1L149.8 387.1C144.9 389.1 139.3 388.4 134.1 385.5C130.6 382.5 128 377.5 128 372.2V320C128 311.2 120.8 304 112 304C103.2 304 96 311.2 96 320V440C96 462.1 113.9 480 136 480H183.8C200.1 480 214.8 470 220.9 454.9L246.9 389.9C246.9 389.7 247 389.6 247.1 389.4C248.6 385 252 381.5 256.3 379.8L309.8 358.9C316.1 356.4 320 350.4 320 344C320 343.6 319.1 343.1 319.1 342.7C319.8 341.2 319.5 339.7 318.9 338.2H318.9zM200.4 192C200.4 205.3 189.6 216 176.4 216C163.1 216 152.4 205.3 152.4 192C152.4 178.7 163.1 168 176.4 168C189.6 168 200.4 178.7 200.4 192zM312.4 208C312.4 194.7 323.1 184 336.4 184C349.6 184 360.4 194.7 360.4 208C360.4 221.3 349.6 232 336.4 232C323.1 232 312.4 221.3 312.4 208zM216.4 144.8C195.9 127.2 166.5 124.4 142.1 137.9L135.9 141.9C128.3 146.3 118.5 143.6 114.1 135.9C109.7 128.3 112.4 118.5 120.1 114.1L127.1 110.1C162.3 89.95 206.4 94.14 237.2 120.5L250.4 131.9C257.1 137.6 257.9 147.7 252.1 154.4C246.4 161.1 236.3 161.9 229.6 156.1L216.4 144.8z"/>
</>],
['regular',<>
	<path d="M256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256C48 273.7 50.21 290.8 54.36 307.2C40.78 317.4 32 333.7 32 352V380C11.61 343.3 0 301 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C245.4 512 234.9 511.4 224.6 510.1C228.6 504.4 231.9 498.1 234.4 491.3L244.4 463.7C248.3 463.9 252.1 464 256 464V464zM268.3 307.6L237.9 318.1L172.3 303.6C163.7 301.6 158.4 292.9 160.4 284.3C162.4 275.7 171.1 270.4 179.7 272.4L276.7 295.3C284.9 297.2 292.4 300.6 299 305.1C289.1 303.1 278.5 303.7 268.3 307.6L268.3 307.6zM208.4 192C208.4 209.7 194 224 176.4 224C158.7 224 144.4 209.7 144.4 192C144.4 174.3 158.7 160 176.4 160C194 160 208.4 174.3 208.4 192zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208zM216.4 144.8C195.9 127.2 166.5 124.4 142.1 137.9L135.9 141.9C128.3 146.3 118.5 143.6 114.1 135.9C109.7 128.3 112.4 118.5 120.1 114.1L127.1 110.1C162.3 89.95 206.4 94.14 237.2 120.5L250.4 131.9C257.1 137.6 257.9 147.7 252.1 154.4C246.4 161.1 236.3 161.9 229.6 156.1L216.4 144.8zM112 400.4L279.6 337.5C291.1 332.9 305.8 339.2 310.5 351.6C315.1 363.1 308.8 377.8 296.4 382.5L230.9 407C230.8 407.4 230.7 407.8 230.6 408.2L204.3 480.4C197.4 499.4 179.4 512 159.2 512H112C85.49 512 64 490.5 64 464V352C64 338.7 74.75 328 88 328C101.3 328 112 338.7 112 352L112 400.4z"/>
</>],
['solid',<>
	<path d="M512 255.1C512 397.4 397.4 512 256 512C245.4 512 234.9 511.4 224.6 510.1C228.6 504.4 231.9 498.1 234.4 491.3L255.4 433.6L291.1 420.6C315 411.9 329.4 388.6 327.9 364.5C326.6 340.1 311.4 318.4 288.7 308.8L166.2 257.3C158.1 253.8 148.7 257.6 145.3 265.8C141.8 273.9 145.6 283.3 153.8 286.7L236.2 321.4L144 354.1V352C144 321.1 118.9 296 88 296C57.07 296 32 321.1 32 352V380C11.61 343.3 0 301 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256L512 255.1zM176.4 143.1C158.7 143.1 144.4 158.3 144.4 175.1C144.4 193.7 158.7 207.1 176.4 207.1C194 207.1 208.4 193.7 208.4 175.1C208.4 158.3 194 143.1 176.4 143.1zM336.4 223.1C354 223.1 368.4 209.7 368.4 191.1C368.4 174.3 354 159.1 336.4 159.1C318.7 159.1 304.4 174.3 304.4 191.1C304.4 209.7 318.7 223.1 336.4 223.1zM142.1 121.9C166.5 108.4 195.9 111.2 216.4 128.8L229.6 140.1C236.3 145.9 246.4 145.1 252.1 138.4C257.9 131.7 257.1 121.6 250.4 115.9L237.2 104.5C206.4 78.14 162.3 73.95 127.1 94.08L120.1 98.11C112.4 102.5 109.7 112.3 114.1 119.9C118.5 127.6 128.3 130.3 135.9 125.9L142.1 121.9zM112 400.6L263.8 345.4C276.3 340.9 290 347.3 294.6 359.8C299.1 372.3 292.7 386 280.2 390.6L230.4 408.7L204.3 480.4C197.4 499.4 179.4 512 159.2 512H112C85.49 512 64 490.5 64 464V352C64 338.7 74.75 328 88 328C101.3 328 112 338.7 112 352L112 400.6z"/>
</>],
['thin',<>
	<path d="M256 16C123.5 16 16 123.5 16 256C16 292.9 24.34 327.9 39.22 359.1C41.12 363.1 39.43 367.9 35.44 369.8C31.45 371.7 26.68 369.1 24.78 366C8.89 332.7 0 295.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C251.6 512 248 508.4 248 504C248 499.6 251.6 496 256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16zM131.1 134.9C128.1 137.1 123.2 135.8 121.1 131.1C118.9 128.1 120.2 123.2 124 121.1L131.1 117C163.4 98.57 203.8 102.4 232 126.6L245.2 137.9C248.6 140.8 248.9 145.9 246.1 149.2C243.2 152.6 238.1 152.9 234.8 150.1L221.6 138.8C198.5 118.1 165.4 115.8 139 130.9L131.1 134.9zM160.4 192C160.4 183.2 167.5 176 176.4 176C185.2 176 192.4 183.2 192.4 192C192.4 200.8 185.2 208 176.4 208C167.5 208 160.4 200.8 160.4 192V192zM275.4 284.6C305.8 292.2 327.3 319.3 327.1 350.6C328.6 367.4 318.4 383.5 301.7 389.6L258.9 405.2L235.3 469.9C226.1 495.2 202.1 512 175.2 512H128C92.65 512 64 483.3 64 448V328C64 305.9 81.91 287.1 104 287.1C126.1 287.1 144 305.9 144 328V361.8L274.3 314.4C281.1 311.1 288 311.4 294.6 312.5C288.2 306.7 280.4 302.3 271.5 300.1L190.1 279.8C185.8 278.7 183.2 274.3 184.2 270.1C185.3 265.8 189.7 263.2 193.9 264.2L275.4 284.6zM310.6 343.8C306 331.3 292.3 324.9 279.8 329.4L138.7 380.7C136.3 381.6 133.5 381.3 131.4 379.8C129.3 378.3 128 375.8 128 373.2V328C128 314.7 117.3 303.1 104 303.1C90.75 303.1 80 314.7 80 328V448C80 474.5 101.5 496 128 496H175.2C195.4 496 213.4 483.4 220.3 464.4L245.1 396.2C245.9 393.1 247.7 392.2 249.9 391.4L296.2 374.6C305.9 371 311.1 361.8 312 352C312 351.7 311.1 351.5 311.1 351.2C311.9 348.8 311.4 346.2 310.6 343.8V343.8zM352.4 208C352.4 216.8 345.2 224 336.4 224C327.5 224 320.4 216.8 320.4 208C320.4 199.2 327.5 192 336.4 192C345.2 192 352.4 199.2 352.4 208z"/>
</>],

]);

const FaceThinking: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FaceThinking.displayName = "FaceThinking";

export default FaceThinking;
