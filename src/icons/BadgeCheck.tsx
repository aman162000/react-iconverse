
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M352.1 191C362.3 200.4 362.3 215.6 352.1 224.1L240.1 336.1C231.6 346.3 216.4 346.3 207 336.1L151 280.1C141.7 271.6 141.7 256.4 151 247C160.4 237.7 175.6 237.7 184.1 247L224 286.1L319 191C328.4 181.7 343.6 181.7 352.1 191z"/><path className="fa-secondary" d="M256 0C292.8 0 324.8 20.7 340.9 51.1C373.8 40.1 410.1 48.96 437 74.98C463 101 470.1 138.2 460.9 171.1C491.3 187.2 512 219.2 512 256C512 292.8 491.3 324.8 460.9 340.9C471 373.8 463 410.1 437 437C410.1 463 373.8 470.1 340.9 460.9C324.8 491.3 292.8 512 256 512C219.2 512 187.2 491.3 171.1 460.9C138.2 471 101 463 74.98 437C48.96 410.1 41 373.8 51.1 340.9C20.7 324.8 0 292.8 0 256C0 219.2 20.7 187.2 51.1 171.1C40.1 138.2 48.96 101 74.98 74.98C101 48.96 138.2 41 171.1 51.1C187.2 20.7 219.2 0 256 0V0zM352.1 224.1C362.3 215.6 362.3 200.4 352.1 191C343.6 181.7 328.4 181.7 319 191L224 286.1L184.1 247C175.6 237.7 160.4 237.7 151 247C141.7 256.4 141.7 271.6 151 280.1L207 336.1C216.4 346.3 231.6 346.3 240.1 336.1L352.1 224.1z"/>
</>],
['light',<>
	<path d="M235.3 331.3C229.1 337.6 218.9 337.6 212.7 331.3L156.7 275.3C150.4 269.1 150.4 258.9 156.7 252.7C162.9 246.4 173.1 246.4 179.3 252.7L224 297.4L324.7 196.7C330.9 190.4 341.1 190.4 347.3 196.7C353.6 202.9 353.6 213.1 347.3 219.3L235.3 331.3zM343.1 45.63C376.1 39.67 411.5 49.43 437 74.98C462.6 100.5 472.3 135.9 466.4 168.9C493.9 187.1 512 219.9 512 255.1C512 292.1 493.9 324 466.4 343.1C472.3 376.1 462.6 411.5 437 437C411.5 462.6 376.1 472.3 343.1 466.4C324 493.9 292.1 512 256 512C219.9 512 187.1 493.9 168.9 466.4C135.9 472.3 100.5 462.6 74.98 437C49.43 411.5 39.67 376.1 45.63 343.1C18.08 324 0 292.1 0 255.1C0 219.9 18.08 187.1 45.63 168.9C39.67 135.9 49.43 100.5 74.98 74.98C100.5 49.43 135.9 39.67 168.9 45.63C187.1 18.08 219.9 0 255.1 0C292.1 0 324 18.08 343.1 45.63L343.1 45.63zM184.4 83.08L171.7 79.2C146.3 71.4 117.6 77.57 97.61 97.61C77.57 117.6 71.4 146.3 79.2 171.7L83.08 184.4L71.4 190.6C47.93 203 32 227.7 32 255.1C32 284.3 47.93 308.1 71.4 321.4L83.08 327.6L79.2 340.3C71.4 365.7 77.57 394.3 97.61 414.4C117.6 434.4 146.3 440.6 171.7 432.8L184.4 428.9L190.6 440.6C203 464.1 227.7 480 256 480C284.3 480 308.1 464.1 321.4 440.6L327.6 428.9L340.3 432.8C365.7 440.6 394.3 434.4 414.4 414.4C434.4 394.3 440.6 365.7 432.8 340.3L428.9 327.6L440.6 321.4C464.1 308.1 480 284.3 480 255.1C480 227.7 464.1 203 440.6 190.6L428.9 184.4L432.8 171.7C440.6 146.3 434.4 117.6 414.4 97.6C394.4 77.56 365.7 71.4 340.3 79.2L327.6 83.08L321.4 71.4C308.1 47.93 284.3 31.1 256 31.1C227.7 31.1 203 47.93 190.6 71.4L184.4 83.08z"/>
</>],
['regular',<>
	<path d="M240.1 336.1C231.6 346.3 216.4 346.3 207 336.1L151 280.1C141.7 271.6 141.7 256.4 151 247C160.4 237.7 175.6 237.7 184.1 247L224 286.1L319 191C328.4 181.7 343.6 181.7 352.1 191C362.3 200.4 362.3 215.6 352.1 224.1L240.1 336.1zM344.1 43.41C377 39.1 411.6 49.59 437 74.98C462.4 100.4 472.9 134.1 468.6 167.9C494.1 188.2 512 220.1 512 256C512 291.9 494.1 323.8 468.6 344.1C472.9 377 462.4 411.6 437 437C411.6 462.4 377 472.9 344.1 468.6C323.8 494.1 291.9 512 256 512C220.1 512 188.2 494.1 167.9 468.6C134.1 472.9 100.4 462.4 74.98 437C49.6 411.6 39.1 377 43.41 344.1C17.04 323.8 0 291.9 0 256C0 220.1 17.04 188.2 43.42 167.9C39.1 134.1 49.6 100.4 74.98 74.98C100.4 49.6 134.1 39.1 167.9 43.41C188.2 17.04 220.1 0 256 0C291.9 0 323.8 17.04 344.1 43.41L344.1 43.41zM190.1 99.07L172 93.25C150.4 86.6 125.1 91.87 108.9 108.9C91.87 125.1 86.6 150.4 93.25 172L99.07 190.1L81.55 200.3C61.54 210.9 48 231.9 48 256C48 280.1 61.54 301.1 81.55 311.7L99.07 321L93.25 339.1C86.6 361.6 91.87 386 108.9 403.1C125.1 420.1 150.4 425.4 172 418.7L190.1 412.9L200.3 430.5C210.9 450.5 231.9 464 256 464C280.1 464 301.1 450.5 311.7 430.5L321 412.9L339.1 418.8C361.6 425.4 386 420.1 403.1 403.1C420.1 386 425.4 361.6 418.7 339.1L412.9 321L430.5 311.7C450.5 301.1 464 280.1 464 256C464 231.9 450.5 210.9 430.5 200.3L412.9 190.1L418.7 172C425.4 150.4 420.1 125.1 403.1 108.9C386 91.87 361.6 86.6 339.1 93.25L321 99.07L311.7 81.55C301.1 61.54 280.1 48 256 48C231.9 48 210.9 61.54 200.3 81.55L190.1 99.07z"/>
</>],
['solid',<>
	<path d="M256 0C292.8 0 324.8 20.7 340.9 51.1C373.8 40.1 410.1 48.96 437 74.98C463 101 470.1 138.2 460.9 171.1C491.3 187.2 512 219.2 512 256C512 292.8 491.3 324.8 460.9 340.9C471 373.8 463 410.1 437 437C410.1 463 373.8 470.1 340.9 460.9C324.8 491.3 292.8 512 256 512C219.2 512 187.2 491.3 171.1 460.9C138.2 471 101 463 74.98 437C48.96 410.1 41 373.8 51.1 340.9C20.7 324.8 0 292.8 0 256C0 219.2 20.7 187.2 51.1 171.1C40.1 138.2 48.96 101 74.98 74.98C101 48.96 138.2 41 171.1 51.1C187.2 20.7 219.2 0 256 0V0zM352.1 224.1C362.3 215.6 362.3 200.4 352.1 191C343.6 181.7 328.4 181.7 319 191L224 286.1L184.1 247C175.6 237.7 160.4 237.7 151 247C141.7 256.4 141.7 271.6 151 280.1L207 336.1C216.4 346.3 231.6 346.3 240.1 336.1L352.1 224.1z"/>
</>],
['thin',<>
	<path d="M229.7 325.7C226.5 328.8 221.5 328.8 218.3 325.7L162.3 269.7C159.2 266.5 159.2 261.5 162.3 258.3C165.5 255.2 170.5 255.2 173.7 258.3L223.1 308.7L338.3 194.3C341.5 191.2 346.5 191.2 349.7 194.3C352.8 197.5 352.8 202.5 349.7 205.7L229.7 325.7zM342.1 48.16C375.1 40.3 411.3 49.22 437 74.98C462.8 100.7 471.7 136.9 463.8 169.9C492.7 187.7 512 219.6 512 256C512 292.4 492.7 324.3 463.8 342.1C471.7 375.1 462.8 411.3 437 437C411.3 462.8 375.1 471.7 342.1 463.8C324.3 492.7 292.4 512 255.1 512C219.6 512 187.7 492.7 169.9 463.8C136.9 471.7 100.7 462.8 74.98 437C49.23 411.3 40.3 375.1 48.16 342.1C19.28 324.3 0 292.4 0 256C0 219.6 19.28 187.7 48.16 169.9C40.3 136.9 49.23 100.7 74.98 74.98C100.7 49.23 136.9 40.3 169.9 48.16C187.7 19.28 219.6 0 256 0C292.4 0 324.3 19.28 342.1 48.16L342.1 48.16zM177.8 67.09L171.4 65.15C142.3 56.2 109.3 63.26 86.29 86.29C63.26 109.3 56.2 142.3 65.15 171.4L67.09 177.8L61.25 180.8C34.32 195.1 16 223.4 16 255.1C16 288.6 34.32 316.9 61.25 331.2L67.09 334.2L65.15 340.6C56.2 369.7 63.26 402.7 86.29 425.7C109.3 448.7 142.3 455.8 171.4 446.9L177.8 444.9L180.8 450.8C195.1 477.7 223.4 496 256 496C288.6 496 316.9 477.7 331.2 450.8L334.2 444.9L340.6 446.9C369.7 455.8 402.7 448.7 425.7 425.7C448.7 402.7 455.8 369.7 446.9 340.6L444.9 334.2L450.8 331.2C477.7 316.9 496 288.6 496 255.1C496 223.4 477.7 195.1 450.8 180.8L444.9 177.7L446.9 171.4C455.8 142.3 448.7 109.3 425.7 86.29C402.7 63.26 369.7 56.2 340.6 65.15L334.2 67.09L331.2 61.25C316.9 34.32 288.6 15.1 256 15.1C223.4 15.1 195.1 34.32 180.8 61.25L177.8 67.09z"/>
</>],

]);

const BadgeCheck: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BadgeCheck.displayName = "BadgeCheck";

export default BadgeCheck;
