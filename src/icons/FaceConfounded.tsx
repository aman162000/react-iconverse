
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M116 205.1C116 196.2 125.6 190.4 133.5 194.7L223.4 242.6C234.1 248.3 234.1 263.7 223.4 269.4L133.5 317.3C125.6 321.6 116 315.8 116 306.9C116 304.1 116.1 301.4 118.8 299.2L154.8 256L118.8 212.8C116.1 210.6 116 207.9 116 205.1V205.1zM393.2 212.8L357.2 256L393.2 299.2C395 301.4 396 304.1 396 306.9C396 315.8 386.4 321.6 378.5 317.3L288.6 269.4C277.9 263.7 277.9 248.3 288.6 242.6L378.5 194.7C386.4 190.4 396 196.2 396 205.1C396 207.9 395 210.6 393.2 212.8z"/><path className="fa-secondary" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM118.8 212.8L154.8 256L118.8 299.2C116.1 301.4 116 304.1 116 306.9C116 315.8 125.6 321.6 133.5 317.3L223.4 269.4C234.1 263.7 234.1 248.3 223.4 242.6L133.5 194.7C125.6 190.4 116 196.2 116 205.1C116 207.9 116.1 210.6 118.8 212.8V212.8zM288.6 242.6C277.9 248.3 277.9 263.7 288.6 269.4L378.5 317.3C386.4 321.6 396 315.8 396 306.9C396 304.1 395 301.4 393.2 299.2L357.2 256L393.2 212.8C395 210.6 396 207.9 396 205.1C396 196.2 386.4 190.4 378.5 194.7L288.6 242.6zM216.9 354.7C211.5 351.1 204.5 351.1 199.1 354.7L158.9 381.5L135.2 369.7C127.3 365.7 117.6 368.9 113.7 376.8C109.7 384.7 112.9 394.4 120.8 398.3L152.8 414.3C157.1 416.9 164.1 416.5 168.9 413.3L208 387.2L247.1 413.3C252.5 416.9 259.5 416.9 264.9 413.3L304 387.2L343.1 413.3C347.9 416.5 354 416.9 359.2 414.3L391.2 398.3C399.1 394.4 402.3 384.7 398.3 376.8C394.4 368.9 384.7 365.7 376.8 369.7L353.1 381.5L312.9 354.7C307.5 351.1 300.5 351.1 295.1 354.7L256 380.8L216.9 354.7z"/>
</>],
['light',<>
	<path d="M256 380.8L295.1 354.7C300.5 351.1 307.5 351.1 312.9 354.7L353.1 381.5L376.8 369.7C384.7 365.7 394.4 368.9 398.3 376.8C402.3 384.7 399.1 394.4 391.2 398.3L359.2 414.3C354 416.9 347.9 416.5 343.1 413.3L304 387.2L264.9 413.3C259.5 416.9 252.5 416.9 247.1 413.3L207.1 387.2L168.9 413.3C164.1 416.5 157.1 416.9 152.8 414.3L120.8 398.3C112.9 394.4 109.7 384.7 113.7 376.8C117.6 368.9 127.3 365.7 135.2 369.7L158.8 381.5L199.1 354.7C204.5 351.1 211.5 351.1 216.9 354.7L256 380.8zM150.8 209.7L214.8 241.7C220.2 244.4 223.6 249.9 223.6 256C223.6 262.1 220.2 267.6 214.8 270.3L150.8 302.3C142.9 306.3 133.3 303.1 129.3 295.2C125.4 287.3 128.6 277.6 136.5 273.7L171.9 255.1L136.5 238.3C128.6 234.4 125.4 224.7 129.3 216.8C133.3 208.9 142.9 205.7 150.8 209.7V209.7zM340.1 256L375.5 273.7C383.4 277.6 386.6 287.3 382.7 295.2C378.7 303.1 369.1 306.3 361.2 302.3L297.2 270.3C291.8 267.6 288.4 262.1 288.4 256C288.4 249.9 291.8 244.4 297.2 241.7L361.2 209.7C369.1 205.7 378.7 208.9 382.7 216.8C386.6 224.7 383.4 234.4 375.5 238.3L340.1 256zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32z"/>
</>],
['regular',<>
	<path d="M256 353.3L281 333.3C289.2 326.7 300.6 326.2 309.3 332L340.9 353.1L351 343C360.4 333.7 375.6 333.7 384.1 343C394.3 352.4 394.3 367.6 384.1 376.1L360.1 400.1C352.9 409.1 340.2 410.3 330.7 403.1L297.3 381.7L270.1 402.7C262.2 409.8 249.8 409.8 241 402.7L214.7 381.7L181.3 403.1C171.8 410.3 159.1 409.1 151 400.1L127 376.1C117.7 367.6 117.7 352.4 127 343C136.4 333.7 151.6 333.7 160.1 343L171.1 353.1L202.7 332C211.4 326.2 222.8 326.7 230.1 333.3L256 353.3zM223.4 226.6C234.1 232.3 234.1 247.7 223.4 253.4L133.5 301.3C125.6 305.6 116 299.8 116 290.9C116 288.1 116.1 285.4 118.8 283.2L154.8 240L118.8 196.8C116.1 194.6 116 191.9 116 189.1C116 180.2 125.6 174.4 133.5 178.7L223.4 226.6zM393.2 196.8L357.2 240L393.2 283.2C395 285.4 396 288.1 396 290.9C396 299.8 386.4 305.6 378.5 301.3L288.6 253.4C277.9 247.7 277.9 232.3 288.6 226.6L378.5 178.7C386.4 174.4 396 180.2 396 189.1C396 191.9 395 194.6 393.2 196.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
</>],
['solid',<>
	<path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM118.8 212.8L154.8 256L118.8 299.2C116.1 301.4 116 304.1 116 306.9C116 315.8 125.6 321.6 133.5 317.3L223.4 269.4C234.1 263.7 234.1 248.3 223.4 242.6L133.5 194.7C125.6 190.4 116 196.2 116 205.1C116 207.9 116.1 210.6 118.8 212.8V212.8zM288.6 242.6C277.9 248.3 277.9 263.7 288.6 269.4L378.5 317.3C386.4 321.6 396 315.8 396 306.9C396 304.1 395 301.4 393.2 299.2L357.2 256L393.2 212.8C395 210.6 396 207.9 396 205.1C396 196.2 386.4 190.4 378.5 194.7L288.6 242.6zM216.9 354.7C211.5 351.1 204.5 351.1 199.1 354.7L158.9 381.5L135.2 369.7C127.3 365.7 117.6 368.9 113.7 376.8C109.7 384.7 112.9 394.4 120.8 398.3L152.8 414.3C157.1 416.9 164.1 416.5 168.9 413.3L208 387.2L247.1 413.3C252.5 416.9 259.5 416.9 264.9 413.3L304 387.2L343.1 413.3C347.9 416.5 354 416.9 359.2 414.3L391.2 398.3C399.1 394.4 402.3 384.7 398.3 376.8C394.4 368.9 384.7 365.7 376.8 369.7L353.1 381.5L312.9 354.7C307.5 351.1 300.5 351.1 295.1 354.7L256 380.8L216.9 354.7z"/>
</>],
['thin',<>
	<path d="M256 390.4L299.6 361.3C302.2 359.6 305.8 359.6 308.4 361.3L352.6 390.8L380.4 376.8C384.4 374.9 389.2 376.5 391.2 380.4C393.1 384.4 391.5 389.2 387.6 391.2L355.6 407.2C353 408.4 349.1 408.2 347.6 406.7L304 377.6L260.4 406.7C257.8 408.4 254.2 408.4 251.6 406.7L208 377.6L164.4 406.7C162 408.2 158.1 408.4 156.4 407.2L124.4 391.2C120.5 389.2 118.9 384.4 120.8 380.4C122.8 376.5 127.6 374.9 131.6 376.8L159.4 390.8L203.6 361.3C206.2 359.6 209.8 359.6 212.4 361.3L256 390.4zM128.8 212.4C130.8 208.5 135.6 206.9 139.6 208.8L219.6 248.8C222.3 250.2 224 252.1 224 256C224 259 222.3 261.8 219.6 263.2L139.6 303.2C135.6 305.1 130.8 303.5 128.8 299.6C126.9 295.6 128.5 290.8 132.4 288.8L198.1 256L132.4 223.2C128.5 221.2 126.9 216.4 128.8 212.4V212.4zM372.4 208.8C376.4 206.9 381.2 208.5 383.2 212.4C385.1 216.4 383.5 221.2 379.6 223.2L313.9 255.1L379.6 288.8C383.5 290.8 385.1 295.6 383.2 299.6C381.2 303.5 376.4 305.1 372.4 303.2L292.4 263.2C289.7 261.8 288 259 288 255.1C288 252.1 289.7 250.2 292.4 248.8L372.4 208.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 16C123.5 16 16 123.5 16 256C16 388.5 123.5 496 256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16z"/>
</>],

]);

const FaceConfounded: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FaceConfounded.displayName = "FaceConfounded";

export default FaceConfounded;
