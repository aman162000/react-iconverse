
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M189.9 121.6C179.3 158.6 147.7 185.7 109.5 190.4L97.98 191.9C89.22 192.1 81.22 186.8 80.12 177.1C79.03 169.2 85.25 161.2 94.02 160.1L105.5 158.7C130.1 155.5 152.1 137.4 159.1 112.8L160.6 107.6C163 99.11 171.9 94.19 180.4 96.62C188.9 99.04 193.8 107.9 191.4 116.4L189.9 121.6zM320.6 116.4C318.2 107.9 323.1 99.04 331.6 96.62C340.1 94.19 348.1 99.11 351.4 107.6L352.9 112.8C359.9 137.4 381 155.5 406.5 158.7L417.1 160.1C426.8 161.2 432.1 169.2 431.9 177.1C430.8 186.8 422.8 192.1 414 191.9L402.5 190.4C364.3 185.7 332.7 158.6 322.1 121.6L320.6 116.4zM128 232C145.7 232 160 217.7 160 200C160 194.2 158.5 188.8 155.8 184.2C157.2 184.1 158.6 184 160 184C190.9 184 216 209.1 216 240C216 270.9 190.9 296 160 296C129.1 296 104 270.9 104 240C104 234.3 104.8 228.8 106.4 223.6C112.1 228.8 119.7 232 128 232zM347.8 184.2C349.2 184.1 350.6 184 352 184C382.9 184 408 209.1 408 240C408 270.9 382.9 296 352 296C321.1 296 296 270.9 296 240C296 234.3 296.9 228.8 298.4 223.6C304.1 228.8 311.7 232 320 232C337.7 232 352 217.7 352 200C352 194.2 350.5 188.8 347.8 184.2z"/><path className="fa-secondary" d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM303.9 405.3C294.7 395.1 278.7 384 256 384C233.3 384 217.3 395.1 208.1 405.3C202.2 411.9 202.7 421.1 209.3 427.9C215.9 433.8 225.1 433.3 231.9 426.7C236.6 421.4 244.6 416 255.1 416C267.4 416 275.4 421.4 280.1 426.7C286 433.3 296.1 433.8 302.7 427.9C309.3 421.1 309.8 411.9 303.9 405.3H303.9zM168 160.4C178.1 149.6 185.7 136.3 189.9 121.5L191.4 116.4C193.8 107.9 188.9 99.04 180.4 96.62C171.9 94.19 163 99.11 160.6 107.6L159.1 112.8C152.1 137.4 130.1 155.5 105.5 158.7L94.02 160.1C85.25 161.2 79.03 169.2 80.12 177.1C81.14 186.1 88.04 192 95.99 192C85.95 205.4 80 221.1 80 240C80 284.2 115.8 320 160 320C204.2 320 240 284.2 240 240C240 198.5 208.5 164.4 168 160.4zM416 192C423.1 192 430.9 186.1 431.9 177.1C432.1 169.2 426.8 161.2 417.1 160.1L406.5 158.7C381 155.5 359.9 137.4 352.9 112.8L351.4 107.6C348.1 99.11 340.1 94.19 331.6 96.62C323.1 99.04 318.2 107.9 320.6 116.4L322.1 121.5C326.3 136.3 333.9 149.6 343.1 160.4C303.5 164.4 272 198.5 272 240C272 284.2 307.8 320 352 320C396.2 320 432 284.2 432 240C432 221.1 426 205.4 416 192z"/>
</>],
['light',<>
	<path d="M256 400C244.6 400 236.6 405.4 231.9 410.7C225.1 417.3 215.9 417.8 209.3 411.9C202.7 405.1 202.2 395.9 208.1 389.3C217.3 379.1 233.3 368 256 368C278.7 368 294.7 379.1 303.9 389.3C309.8 395.9 309.3 405.1 302.7 411.9C296.1 417.8 286 417.3 280.1 410.7C275.4 405.4 267.4 400 256 400H256zM384 240C384 257.7 369.7 272 352 272C334.3 272 320 257.7 320 240C337.7 240 352 225.7 352 208C369.7 208 384 222.3 384 240zM351.4 107.6L352.9 112.8C359.9 137.4 381 155.5 406.5 158.7L417.1 160.1C426.8 161.2 432.1 169.2 431.9 177.1C430.9 186.1 423.1 192 416 192C426 205.4 432 221.1 432 240C432 284.2 396.2 320 352 320C307.8 320 272 284.2 272 240C272 198.5 303.5 164.4 343.1 160.4C333.9 149.6 326.3 136.3 322.1 121.6L320.6 116.4C318.2 107.9 323.1 99.04 331.6 96.62C340.1 94.19 348.1 99.11 351.4 107.6V107.6zM352 192C325.5 192 304 213.5 304 240C304 266.5 325.5 288 352 288C378.5 288 400 266.5 400 240C400 213.5 378.5 192 352 192zM128 240C145.7 240 160 225.7 160 208C177.7 208 192 222.3 192 240C192 257.7 177.7 272 160 272C142.3 272 128 257.7 128 240zM189.9 121.6C185.7 136.3 178.1 149.6 168 160.4C208.5 164.4 240 198.5 240 240C240 284.2 204.2 320 160 320C115.8 320 80 284.2 80 240C80 221.1 85.95 205.4 95.99 192C88.04 192 81.14 186.1 80.12 177.1C79.03 169.2 85.25 161.2 94.02 160.1L105.5 158.7C130.1 155.5 152.1 137.4 159.1 112.8L160.6 107.6C163 99.11 171.9 94.19 180.4 96.62C188.9 99.04 193.8 107.9 191.4 116.4L189.9 121.6zM160 288C186.5 288 208 266.5 208 240C208 213.5 186.5 192 160 192C133.5 192 112 213.5 112 240C112 266.5 133.5 288 160 288zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32z"/>
</>],
['regular',<>
	<path d="M256 408C250.8 408 247.5 410.3 245.5 412.4C236.5 422.1 221.3 422.6 211.6 413.5C201.9 404.5 201.4 389.3 210.5 379.6C219.3 370.1 234.6 360 256 360C277.4 360 292.7 370.1 301.5 379.6C310.6 389.3 310.1 404.5 300.4 413.5C290.7 422.6 275.5 422.1 266.5 412.4C264.5 410.3 261.2 408 256 408zM128 240C145.7 240 160 225.7 160 208C177.7 208 192 222.3 192 240C192 257.7 177.7 272 160 272C142.3 272 128 257.7 128 240zM80 240C80 221.1 85.95 205.4 95.99 192C88.04 192 81.14 186.1 80.12 177.1C79.03 169.2 85.25 161.2 94.02 160.1L105.5 158.7C130.1 155.5 152.1 137.4 159.1 112.8L160.6 107.6C163 99.11 171.9 94.19 180.4 96.62C188.9 99.04 193.8 107.9 191.4 116.4L189.9 121.5C185.7 136.3 178.1 149.6 168 160.4C208.5 164.4 240 198.5 240 240C240 284.2 204.2 320 160 320C115.8 320 80 284.2 80 240zM160 288C186.5 288 208 266.5 208 240C208 213.5 186.5 192 160 192C133.5 192 112 213.5 112 240C112 266.5 133.5 288 160 288zM384 240C384 257.7 369.7 272 352 272C334.3 272 320 257.7 320 240C337.7 240 352 225.7 352 208C369.7 208 384 222.3 384 240zM432 240C432 284.2 396.2 320 352 320C307.8 320 272 284.2 272 240C272 198.5 303.5 164.4 343.1 160.4C333.9 149.6 326.3 136.3 322.1 121.5L320.6 116.4C318.2 107.9 323.1 99.04 331.6 96.62C340.1 94.19 348.1 99.11 351.4 107.6L352.9 112.8C359.9 137.4 381 155.5 406.5 158.7L417.1 160.1C426.8 161.2 432.1 169.2 431.9 177.1C430.9 186.1 423.1 192 416 192C426 205.4 432 221.1 432 240V240zM352 192C325.5 192 304 213.5 304 240C304 266.5 325.5 288 352 288C378.5 288 400 266.5 400 240C400 213.5 378.5 192 352 192zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
</>],
['solid',<>
	<path d="M128 232C145.7 232 160 217.7 160 200C160 194.2 158.5 188.8 155.8 184.2C157.2 184.1 158.6 184 160 184C190.9 184 216 209.1 216 240C216 270.9 190.9 296 160 296C129.1 296 104 270.9 104 240C104 234.3 104.8 228.8 106.4 223.6C112.1 228.8 119.7 232 128 232zM347.8 184.2C349.2 184.1 350.6 184 352 184C382.9 184 408 209.1 408 240C408 270.9 382.9 296 352 296C321.1 296 296 270.9 296 240C296 234.3 296.8 228.8 298.4 223.6C304.1 228.8 311.7 232 320 232C337.7 232 352 217.7 352 200C352 194.2 350.5 188.8 347.8 184.2zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM303.9 405.3C294.7 395.1 278.7 384 256 384C233.3 384 217.3 395.1 208.1 405.3C202.2 411.9 202.7 421.1 209.3 427.9C215.9 433.8 225.1 433.3 231.9 426.7C236.6 421.4 244.6 416 255.1 416C267.4 416 275.4 421.4 280.1 426.7C286 433.3 296.1 433.8 302.7 427.9C309.3 421.1 309.8 411.9 303.9 405.3H303.9zM168 160.4C178.1 149.6 185.7 136.3 189.9 121.5L191.4 116.4C193.8 107.9 188.9 99.04 180.4 96.62C171.9 94.19 163 99.11 160.6 107.6L159.1 112.8C152.1 137.4 130.1 155.5 105.5 158.7L94.02 160.1C85.25 161.2 79.03 169.2 80.12 177.1C81.14 186.1 88.04 192 95.99 192C85.95 205.4 80 221.1 80 240C80 284.2 115.8 320 160 320C204.2 320 240 284.2 240 240C240 198.5 208.5 164.4 168 160.4zM416 192C423.1 192 430.9 186.1 431.9 177.1C432.1 169.2 426.8 161.2 417.1 160.1L406.5 158.7C381 155.5 359.9 137.4 352.9 112.8L351.4 107.6C348.1 99.11 340.1 94.19 331.6 96.62C323.1 99.04 318.2 107.9 320.6 116.4L322.1 121.5C326.3 136.3 333.9 149.6 343.1 160.4C303.5 164.4 272 198.5 272 240C272 284.2 307.8 320 352 320C396.2 320 432 284.2 432 240C432 221.1 426 205.4 416 192z"/>
</>],
['thin',<>
	<path d="M256 403C237.5 403 224.5 411.9 216.9 420.4C213.1 423.6 208.9 423.9 205.6 420.9C202.4 417.1 202.1 412.9 205.1 409.6C214.9 398.7 231.9 387 256 387C280.1 387 297.1 398.7 306.9 409.6C309.9 412.9 309.6 417.1 306.4 420.9C303.1 423.9 298 423.6 295.1 420.4C287.5 411.9 274.5 403 256 403zM304 240C304 233.8 305.2 227.8 307.4 222.3C309.5 217 312.5 212.2 316.2 208C317.6 206.5 319 205 320.6 203.7C320.2 205.1 320 206.5 320 208C320 213.2 322.5 217.9 326.4 220.8C329.1 222.8 332.4 224 336 224C344.8 224 352 216.8 352 208C352 201.2 347.8 195.4 341.8 193.1C345.1 192.4 348.5 192 352 192C356.4 192 360.6 192.6 364.6 193.7C385 199.2 400 217.9 400 240C400 266.5 378.5 288 352 288C325.5 288 304 266.5 304 240H304zM367.7 212.1C365.7 227.9 352.3 240 336 240C330.3 240 324.9 238.5 320.3 235.9C320.1 237.2 320 238.6 320 240C320 257.7 334.3 272 352 272C369.7 272 384 257.7 384 240C384 228 377.4 217.6 367.7 212.1zM335.5 101.2L336.7 104.3C349.9 139.7 380.3 166.1 417.2 174.3L425.7 176.2C430 177.1 432.8 181.4 431.8 185.7C430.9 190 426.6 192.8 422.3 191.8L414.5 190.1C425.5 203.8 432 221.1 432 240C432 284.2 396.2 320 352 320C307.8 320 272 284.2 272 240C272 195.8 307.8 160 352 160C353.3 160 354.6 160 355.9 160.1C340.8 146.6 328.1 129.4 321.7 109.9L320.5 106.8C318.1 102.7 321.1 98.06 325.2 96.51C329.3 94.96 333.9 97.05 335.5 101.2V101.2zM352 176C316.7 176 288 204.7 288 240C288 275.3 316.7 304 352 304C387.3 304 416 275.3 416 240C416 204.7 387.3 176 352 176zM124.2 208C125.6 206.5 127 205 128.6 203.7C128.2 205.1 128 206.5 128 208C128 213.2 130.5 217.9 134.4 220.8C137.1 222.8 140.4 224 144 224C152.8 224 160 216.8 160 208L160 207.9C159.1 201.1 155.7 195.4 149.8 193.1C153.1 192.4 156.5 192 160 192C164.4 192 168.6 192.6 172.6 193.7C193 199.2 208 217.9 208 240C208 266.5 186.5 288 160 288C133.5 288 112 266.5 112 240C112 233.8 113.2 227.8 115.4 222.3C117.5 217 120.5 212.2 124.2 208H124.2zM160 272C177.7 272 192 257.7 192 240C192 228 185.4 217.6 175.7 212.1C173.7 227.9 160.3 240 144 240C138.3 240 132.9 238.5 128.3 235.9C128.1 237.2 128 238.6 128 240C128 257.7 142.3 272 160 272V272zM190.3 109.9C183 129.4 171.2 146.6 156.1 160.1C157.4 160 158.7 159.1 160 159.1C204.2 159.1 240 195.8 240 239.1C240 284.2 204.2 319.1 160 319.1C115.8 319.1 80 284.2 80 239.1C80 221.1 86.54 203.8 97.47 190.1L89.74 191.8C85.42 192.8 81.15 190 80.19 185.7C79.23 181.4 81.95 177.1 86.26 176.2L94.77 174.3C131.7 166.1 162.1 139.7 175.3 104.3L176.5 101.2C178.1 97.05 182.7 94.96 186.8 96.51C190.9 98.06 193 102.7 191.5 106.8L190.3 109.9zM160 304C195.3 304 224 275.3 224 240C224 204.7 195.3 176 160 176C124.7 176 96 204.7 96 240C96 275.3 124.7 304 160 304zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 16C123.5 16 16 123.5 16 256C16 388.5 123.5 496 256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16z"/>
</>],

]);

const FacePleading: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FacePleading.displayName = "FacePleading";

export default FacePleading;