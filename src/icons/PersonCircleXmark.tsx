
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM468.7 308.7L432 345.4L395.3 308.7C389.1 302.4 378.9 302.4 372.7 308.7C366.4 314.9 366.4 325.1 372.7 331.3L409.4 368L372.7 404.7C366.4 410.9 366.4 421.1 372.7 427.3C378.9 433.6 389.1 433.6 395.3 427.3L432 390.6L468.7 427.3C474.9 433.6 485.1 433.6 491.3 427.3C497.6 421.1 497.6 410.9 491.3 404.7L454.6 368L491.3 331.3C497.6 325.1 497.6 314.9 491.3 308.7C485.1 302.4 474.9 302.4 468.7 308.7V308.7z"/><path className="fa-secondary" d="M112 48C112 21.49 133.5 0 160 0C186.5 0 208 21.49 208 48C208 74.51 186.5 96 160 96C133.5 96 112 74.51 112 48zM120 512C102.3 512 88 497.7 88 480V256.9L59.43 304.5C50.33 319.6 30.67 324.5 15.52 315.4C.3696 306.3-4.531 286.7 4.573 271.5L62.85 174.6C80.2 145.7 111.4 128 145.1 128H174.9C208.6 128 239.8 145.7 257.2 174.6L302.1 249.3C285.1 266.9 273.4 287.7 265.5 310.8C263.6 308.9 261.1 306.8 260.6 304.5L232 256.9V480C232 497.7 217.7 512 200 512C182.3 512 168 497.7 168 480V352H152V480C152 497.7 137.7 512 120 512L120 512z"/>
</>],
['light',<>
	<path d="M103.1 56C103.1 25.07 129.1 0 159.1 0C190.9 0 215.1 25.07 215.1 56C215.1 86.93 190.9 112 159.1 112C129.1 112 103.1 86.93 103.1 56zM159.1 80C173.3 80 183.1 69.25 183.1 56C183.1 42.75 173.3 32 159.1 32C146.7 32 135.1 42.75 135.1 56C135.1 69.25 146.7 80 159.1 80zM127.1 352V496C127.1 504.8 120.8 512 111.1 512C103.2 512 95.1 504.8 95.1 496V202.1L46.11 295.5C41.95 303.3 32.25 306.3 24.46 302.1C16.67 297.9 13.72 288.3 17.89 280.5L76.73 170.3C90.64 144.3 117.8 128 147.3 128H172.7C202.2 128 229.4 144.3 243.3 170.3L291.9 261.4C284.4 271.2 277.1 281.9 272.6 293.2L224 202.2V496C224 504.8 216.8 512 208 512C199.2 512 192 504.8 192 496V352L127.1 352zM127.1 320H192V164C186 161.4 179.5 160 172.7 160H147.3C140.5 160 133.1 161.4 127.1 164V320zM491.3 404.7C497.6 410.9 497.6 421.1 491.3 427.3C485.1 433.6 474.9 433.6 468.7 427.3L432 390.6L395.3 427.3C389.1 433.6 378.9 433.6 372.7 427.3C366.4 421.1 366.4 410.9 372.7 404.7L409.4 368L372.7 331.3C366.4 325.1 366.4 314.9 372.7 308.7C378.9 302.4 389.1 302.4 395.3 308.7L432 345.4L468.7 308.7C474.9 302.4 485.1 302.4 491.3 308.7C497.6 314.9 497.6 325.1 491.3 331.3L454.6 368L491.3 404.7zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM432 256C370.1 256 320 306.1 320 368C320 429.9 370.1 480 432 480C493.9 480 544 429.9 544 368C544 306.1 493.9 256 432 256z"/>
</>],
['regular',<>
	<path d="M208 48C208 74.51 186.5 96 160 96C133.5 96 112 74.51 112 48C112 21.49 133.5 0 160 0C186.5 0 208 21.49 208 48zM144 352V488C144 501.3 133.3 512 120 512C106.7 512 96 501.3 96 488V223.6L52.89 299.8C46.36 311.4 31.72 315.4 20.18 308.9C8.647 302.4 4.585 287.7 11.11 276.2L69.66 172.7C85.27 145.1 114.5 128 146.3 128H173.7C205.5 128 234.7 145.1 250.3 172.7L296.1 255.1C285.2 269.1 275.6 285 268.7 302.3C268.1 301.5 267.6 300.7 267.1 299.8L224 223.6V488C224 501.3 213.3 512 200 512C186.7 512 176 501.3 176 488V352H144zM144 304H176V176.1C175.3 176 174.5 176 173.7 176H146.3C145.5 176 144.7 176 144 176.1V304zM288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368zM491.3 331.3C497.6 325.1 497.6 314.9 491.3 308.7C485.1 302.4 474.9 302.4 468.7 308.7L432 345.4L395.3 308.7C389.1 302.4 378.9 302.4 372.7 308.7C366.4 314.9 366.4 325.1 372.7 331.3L409.4 368L372.7 404.7C366.4 410.9 366.4 421.1 372.7 427.3C378.9 433.6 389.1 433.6 395.3 427.3L432 390.6L468.7 427.3C474.9 433.6 485.1 433.6 491.3 427.3C497.6 421.1 497.6 410.9 491.3 404.7L454.6 368L491.3 331.3z"/>
</>],
['solid',<>
	<path d="M208 48C208 74.51 186.5 96 160 96C133.5 96 112 74.51 112 48C112 21.49 133.5 0 160 0C186.5 0 208 21.49 208 48zM152 352V480C152 497.7 137.7 512 120 512C102.3 512 88 497.7 88 480V256.9L59.43 304.5C50.33 319.6 30.67 324.5 15.52 315.4C.3696 306.3-4.531 286.7 4.573 271.5L62.85 174.6C80.2 145.7 111.4 128 145.1 128H174.9C208.6 128 239.8 145.7 257.2 174.6L302.1 249.3C285.1 266.9 273.4 287.7 265.5 310.8C263.6 308.9 261.1 306.8 260.6 304.5L232 256.9V480C232 497.7 217.7 512 200 512C182.3 512 168 497.7 168 480V352L152 352zM288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368zM491.3 331.3C497.6 325.1 497.6 314.9 491.3 308.7C485.1 302.4 474.9 302.4 468.7 308.7L432 345.4L395.3 308.7C389.1 302.4 378.9 302.4 372.7 308.7C366.4 314.9 366.4 325.1 372.7 331.3L409.4 368L372.7 404.7C366.4 410.9 366.4 421.1 372.7 427.3C378.9 433.6 389.1 433.6 395.3 427.3L432 390.6L468.7 427.3C474.9 433.6 485.1 433.6 491.3 427.3C497.6 421.1 497.6 410.9 491.3 404.7L454.6 368L491.3 331.3z"/>
</>],
['thin',<>
	<path d="M103.1 56C103.1 25.07 129.1 0 159.1 0C190.9 0 215.1 25.07 215.1 56C215.1 86.93 190.9 112 159.1 112C129.1 112 103.1 86.93 103.1 56zM159.1 96C182.1 96 199.1 78.09 199.1 56C199.1 33.91 182.1 16 159.1 16C137.9 16 119.1 33.91 119.1 56C119.1 78.09 137.9 96 159.1 96zM141.1 144C119.6 144 100 156.3 90.67 175.7L23.21 315.5C21.29 319.5 16.5 321.1 12.53 319.2C8.546 317.3 6.877 312.5 8.797 308.5L76.26 168.7C88.27 143.8 113.5 128 141.1 128H178.9C206.5 128 231.7 143.8 243.7 168.7L289.8 264.2C286.2 269.2 282.8 274.5 279.6 279.9L229.3 175.7C219.1 156.3 200.4 144 178.9 144H141.1zM104 480C104 488.8 111.2 496 120 496C128.8 496 135.1 488.8 135.1 480V360C135.1 346.7 146.7 336 160 336C173.3 336 184 346.7 184 360V480C184 488.8 191.2 496 200 496C208.8 496 215.1 488.8 215.1 480V248C215.1 243.6 219.6 240 223.1 240C228.4 240 231.1 243.6 231.1 248V480C231.1 497.7 217.7 512 200 512C182.3 512 168 497.7 168 480V360C168 355.6 164.4 352 160 352C155.6 352 151.1 355.6 151.1 360V480C151.1 497.7 137.7 512 120 512C102.3 512 88 497.7 88 480V248C88 243.6 91.58 240 96 240C100.4 240 104 243.6 104 248V480zM443.3 368L493.7 418.3C496.8 421.5 496.8 426.5 493.7 429.7C490.5 432.8 485.5 432.8 482.3 429.7L432 379.3L381.7 429.7C378.5 432.8 373.5 432.8 370.3 429.7C367.2 426.5 367.2 421.5 370.3 418.3L420.7 368L370.3 317.7C367.2 314.5 367.2 309.5 370.3 306.3C373.5 303.2 378.5 303.2 381.7 306.3L432 356.7L482.3 306.3C485.5 303.2 490.5 303.2 493.7 306.3C496.8 309.5 496.8 314.5 493.7 317.7L443.3 368zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM432 240C361.3 240 304 297.3 304 368C304 438.7 361.3 496 432 496C502.7 496 560 438.7 560 368C560 297.3 502.7 240 432 240z"/>
</>],

]);

const PersonCircleXmark: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PersonCircleXmark.displayName = "PersonCircleXmark";

export default PersonCircleXmark;