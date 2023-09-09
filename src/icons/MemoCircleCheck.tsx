
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368zM499.3 347.3C505.6 341.1 505.6 330.9 499.3 324.7C493.1 318.4 482.9 318.4 476.7 324.7L416 385.4L387.3 356.7C381.1 350.4 370.9 350.4 364.7 356.7C358.4 362.9 358.4 373.1 364.7 379.3L404.7 419.3C410.9 425.6 421.1 425.6 427.3 419.3L499.3 347.3z"/><path className="fa-secondary" d="M320 0C355.3 0 384 28.65 384 64V198.6C310.1 219.5 256 287.4 256 368C256 427.1 285.1 479.3 329.7 511.3C326.6 511.7 323.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H320zM80 128C71.16 128 64 135.2 64 144C64 152.8 71.16 160 80 160H304C312.8 160 320 152.8 320 144C320 135.2 312.8 128 304 128H80zM80 256H240C248.8 256 256 248.8 256 240C256 231.2 248.8 224 240 224H80C71.16 224 64 231.2 64 240C64 248.8 71.16 256 80 256zM80 352H176C184.8 352 192 344.8 192 336C192 327.2 184.8 320 176 320H80C71.16 320 64 327.2 64 336C64 344.8 71.16 352 80 352z"/>
</>],
['light',<>
	<path d="M320 32H64C46.33 32 32 46.33 32 64V448C32 465.7 46.33 480 64 480H296.2C305.1 491.8 317.3 502.3 329.7 511.3C326.6 511.7 323.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H320C355.3 0 384 28.65 384 64V198.6C372.8 201.8 362.1 206 352 211.2V64C352 46.33 337.7 32 320 32V32zM64 144C64 135.2 71.16 128 80 128H304C312.8 128 320 135.2 320 144C320 152.8 312.8 160 304 160H80C71.16 160 64 152.8 64 144zM272 224C280.8 224 288 231.2 288 240C288 248.8 280.8 256 272 256H80C71.16 256 64 248.8 64 240C64 231.2 71.16 224 80 224H272zM208 320C216.8 320 224 327.2 224 336C224 344.8 216.8 352 208 352H80C71.16 352 64 344.8 64 336C64 327.2 71.16 320 80 320H208zM476.7 324.7C482.9 318.4 493.1 318.4 499.3 324.7C505.6 330.9 505.6 341.1 499.3 347.3L427.3 419.3C421.1 425.6 410.9 425.6 404.7 419.3L364.7 379.3C358.4 373.1 358.4 362.9 364.7 356.7C370.9 350.4 381.1 350.4 387.3 356.7L416 385.4L476.7 324.7zM288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368zM432 480C493.9 480 544 429.9 544 368C544 306.1 493.9 256 432 256C370.1 256 320 306.1 320 368C320 429.9 370.1 480 432 480z"/>
</>],
['regular',<>
	<path d="M320 48H63.1C55.16 48 47.1 55.16 47.1 64V448C47.1 456.8 55.16 464 63.1 464H284.5C296.5 482.4 311.9 498.5 329.7 511.3C326.6 511.7 323.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H320C355.3 0 384 28.65 384 64V198.6C366.8 203.5 350.6 210.9 336 220.5V63.1C336 55.16 328.8 47.1 320 47.1L320 48zM95.1 152C95.1 138.7 106.7 128 119.1 128H263.1C277.3 128 287.1 138.7 287.1 152C287.1 165.3 277.3 176 263.1 176H119.1C106.7 176 95.1 165.3 95.1 152zM263.1 224C277.3 224 287.1 234.7 287.1 248C287.1 261.3 277.3 272 263.1 272H119.1C106.7 272 95.1 261.3 95.1 248C95.1 234.7 106.7 224 119.1 224H263.1zM167.1 320C181.3 320 191.1 330.7 191.1 344C191.1 357.3 181.3 368 167.1 368H119.1C106.7 368 95.1 357.3 95.1 344C95.1 330.7 106.7 320 119.1 320H167.1zM576 368C576 447.5 511.5 512 432 512C352.5 512 287.1 447.5 287.1 368C287.1 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM476.7 324.7L416 385.4L387.3 356.7C381.1 350.4 370.9 350.4 364.7 356.7C358.4 362.9 358.4 373.1 364.7 379.3L404.7 419.3C410.9 425.6 421.1 425.6 427.3 419.3L499.3 347.3C505.6 341.1 505.6 330.9 499.3 324.7C493.1 318.4 482.9 318.4 476.7 324.7H476.7z"/>
</>],
['solid',<>
	<path d="M288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368zM499.3 347.3C505.6 341.1 505.6 330.9 499.3 324.7C493.1 318.4 482.9 318.4 476.7 324.7L416 385.4L387.3 356.7C381.1 350.4 370.9 350.4 364.7 356.7C358.4 362.9 358.4 373.1 364.7 379.3L404.7 419.3C410.9 425.6 421.1 425.6 427.3 419.3L499.3 347.3zM320 0C355.3 0 384 28.65 384 64V198.6C310.1 219.5 256 287.4 256 368C256 427.1 285.1 479.3 329.7 511.3C326.6 511.7 323.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H320zM80 128C71.16 128 64 135.2 64 144C64 152.8 71.16 160 80 160H304C312.8 160 320 152.8 320 144C320 135.2 312.8 128 304 128H80zM80 256H240C248.8 256 256 248.8 256 240C256 231.2 248.8 224 240 224H80C71.16 224 64 231.2 64 240C64 248.8 71.16 256 80 256zM80 352H176C184.8 352 192 344.8 192 336C192 327.2 184.8 320 176 320H80C71.16 320 64 327.2 64 336C64 344.8 71.16 352 80 352z"/>
</>],
['thin',<>
	<path d="M320 16H64C37.49 16 16 37.49 16 64V448C16 474.5 37.49 496 64 496H311.2C317 501.5 323.2 506.6 329.7 511.3C326.6 511.7 323.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H320C355.3 0 384 28.65 384 64V198.6C378.6 200.2 373.2 201.1 368 203.1V64C368 37.49 346.5 16 320 16V16zM64 136C64 131.6 67.58 128 72 128H312C316.4 128 320 131.6 320 136C320 140.4 316.4 144 312 144H72C67.58 144 64 140.4 64 136zM280 224C284.4 224 288 227.6 288 232C288 236.4 284.4 240 280 240H72C67.58 240 64 236.4 64 232C64 227.6 67.58 224 72 224H280zM216 320C220.4 320 224 323.6 224 328C224 332.4 220.4 336 216 336H72C67.58 336 64 332.4 64 328C64 323.6 67.58 320 72 320H216zM490.3 322.3C493.5 319.2 498.5 319.2 501.7 322.3C504.8 325.5 504.8 330.5 501.7 333.7L421.7 413.7C418.5 416.8 413.5 416.8 410.3 413.7L362.3 365.7C359.2 362.5 359.2 357.5 362.3 354.3C365.5 351.2 370.5 351.2 373.7 354.3L416 396.7L490.3 322.3zM288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368zM432 496C502.7 496 560 438.7 560 368C560 297.3 502.7 240 432 240C361.3 240 304 297.3 304 368C304 438.7 361.3 496 432 496z"/>
</>],

]);

const MemoCircleCheck: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MemoCircleCheck.displayName = "MemoCircleCheck";

export default MemoCircleCheck;