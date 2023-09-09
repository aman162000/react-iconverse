
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M160 0C177.7 0 192 14.33 192 32V416C192 469 149 512 96 512C42.98 512 0 469 0 416V32C0 14.33 14.33 0 32 0H160zM128 64H64V128H128V64zM64 256H128V192H64V256zM96 440C109.3 440 120 429.3 120 416C120 402.7 109.3 392 96 392C82.75 392 72 402.7 72 416C72 429.3 82.75 440 96 440z"/><path className="fa-secondary" d="M64 64H128V128H64V64zM435.2 214.4L223.6 425.9C223.9 422.7 224 419.3 224 416V154L299.4 78.63C311.9 66.13 332.2 66.13 344.7 78.63L435.2 169.1C447.7 181.6 447.7 201.9 435.2 214.4V214.4zM480 512H182.8L374.8 320H480C497.7 320 512 334.3 512 352V480C512 497.7 497.7 512 480 512zM128 256H64V192H128V256z"/>
</>],
['light',<>
	<path d="M72 416C72 402.7 82.75 392 96 392C109.3 392 120 402.7 120 416C120 429.3 109.3 440 96 440C82.75 440 72 429.3 72 416zM0 56C0 25.07 25.07 0 56 0H136C166.9 0 192 25.07 192 56V188.2L283.2 96.97C305.1 75.1 340.6 75.1 362.4 96.97L419 153.5C440.9 175.4 440.9 210.9 419 232.7L331.7 320H456C486.9 320 512 345.1 512 376V456C512 486.9 486.9 512 456 512H96C42.98 512 0 469 0 416V56zM480 456V376C480 362.7 469.3 352 456 352H299.7L171.7 480H456C469.3 480 480 469.3 480 456zM396.4 176.2L339.8 119.6C330.4 110.2 315.2 110.2 305.9 119.6L192 233.5V414.5L396.4 210.1C405.8 200.7 405.8 185.5 396.4 176.2V176.2zM96 480C131.3 480 160 451.3 160 416V288H32V416C32 451.3 60.65 480 96 480zM32 256H160V160H32V256zM32 128H160V56C160 42.75 149.3 32 136 32H56C42.75 32 32 42.75 32 56V128z"/>
</>],
['regular',<>
	<path d="M88 400C88 386.7 98.75 376 112 376C125.3 376 136 386.7 136 400C136 413.3 125.3 424 112 424C98.75 424 88 413.3 88 400zM0 64C0 28.65 28.65 0 64 0H160C195.3 0 224 28.65 224 64V126.1L274.7 75.31C299.7 50.32 340.3 50.32 365.3 75.31L436.7 146.7C461.7 171.7 461.7 212.3 436.7 237.3L385.9 288H448C483.3 288 512 316.7 512 352V448C512 483.3 483.3 512 448 512H112C50.14 512 0 461.9 0 400V64zM464 448V352C464 343.2 456.8 336 448 336H337.9L209.9 464H448C456.8 464 464 456.8 464 448zM402.7 180.7L331.3 109.3C325.1 103 314.9 103 308.7 109.3L224 193.9V382.1L402.7 203.3C408.1 197.1 408.1 186.9 402.7 180.7V180.7zM112 464C147.3 464 176 435.3 176 400V304H48V400C48 435.3 76.65 464 112 464zM48 256H176V176H48V256zM48 128H176V64C176 55.16 168.8 48 160 48H64C55.16 48 48 55.16 48 64V128z"/>
</>],
['solid',<>
	<path d="M0 32C0 14.33 14.33 0 32 0H160C177.7 0 192 14.33 192 32V416C192 469 149 512 96 512C42.98 512 0 469 0 416V32zM128 64H64V128H128V64zM64 256H128V192H64V256zM96 440C109.3 440 120 429.3 120 416C120 402.7 109.3 392 96 392C82.75 392 72 402.7 72 416C72 429.3 82.75 440 96 440zM224 416V154L299.4 78.63C311.9 66.13 332.2 66.13 344.7 78.63L435.2 169.1C447.7 181.6 447.7 201.9 435.2 214.4L223.6 425.9C223.9 422.7 224 419.3 224 416V416zM374.8 320H480C497.7 320 512 334.3 512 352V480C512 497.7 497.7 512 480 512H182.8L374.8 320z"/>
</>],
['thin',<>
	<path d="M144 72V120C144 133.3 133.3 144 120 144H72C58.75 144 48 133.3 48 120V72C48 58.75 58.75 48 72 48H120C133.3 48 144 58.75 144 72zM64 120C64 124.4 67.58 128 72 128H120C124.4 128 128 124.4 128 120V72C128 67.58 124.4 64 120 64H72C67.58 64 64 67.58 64 72V120zM72 176H120C133.3 176 144 186.7 144 200V248C144 261.3 133.3 272 120 272H72C58.75 272 48 261.3 48 248V200C48 186.7 58.75 176 72 176zM72 192C67.58 192 64 195.6 64 200V248C64 252.4 67.58 256 72 256H120C124.4 256 128 252.4 128 248V200C128 195.6 124.4 192 120 192H72zM128 416C128 433.7 113.7 448 96 448C78.33 448 64 433.7 64 416C64 398.3 78.33 384 96 384C113.7 384 128 398.3 128 416zM96 432C104.8 432 112 424.8 112 416C112 407.2 104.8 400 96 400C87.16 400 80 407.2 80 416C80 424.8 87.16 432 96 432zM0 40C0 17.91 17.91 0 40 0H152C174.1 0 192 17.91 192 40V416C192 469 149 512 96 512C42.98 512 0 469 0 416V40zM176 416V40C176 26.75 165.3 16 152 16H40C26.75 16 16 26.75 16 40V416C16 460.2 51.82 496 96 496C140.2 496 176 460.2 176 416zM472 320C494.1 320 512 337.9 512 360V472C512 494.1 494.1 512 472 512H192C187.6 512 184 508.4 184 504C184 499.6 187.6 496 192 496H472C485.3 496 496 485.3 496 472V360C496 346.7 485.3 336 472 336H368C363.6 336 360 332.4 360 328C360 323.6 363.6 320 368 320H472zM218.3 168.5C215.2 165.4 215.2 160.3 218.3 157.2L294.6 80.97C310.2 65.35 335.5 65.35 351.1 80.97L430.3 160.2C445.9 175.8 445.9 201.1 430.3 216.7L225.4 421.7C222.3 424.8 217.2 424.8 214.1 421.7C210.1 418.5 210.1 413.5 214.1 410.3L419 205.4C428.4 196 428.4 180.9 419 171.5L339.8 92.28C330.4 82.91 315.2 82.91 305.9 92.28L229.7 168.5C226.5 171.6 221.5 171.6 218.3 168.5L218.3 168.5z"/>
</>],

]);

const Swatchbook: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Swatchbook.displayName = "Swatchbook";

export default Swatchbook;