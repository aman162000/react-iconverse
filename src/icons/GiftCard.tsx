
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M243.4 176H184C135.4 176 96 136.6 96 88C96 39.4 135.4 0 184 0H186.2C218.1 0 247.7 16.91 263.9 44.45L288 85.46L312.1 44.45C328.3 16.91 357.9 0 389.8 0H392C440.6 0 480 39.4 480 88C480 136.6 440.6 176 392 176H332.6L386.4 240.6C394.9 250.8 393.5 265.1 383.4 274.4C373.2 282.9 358 281.5 349.6 271.4L288 197.5L226.4 271.4C217.1 281.5 202.8 282.9 192.6 274.4C182.5 265.1 181.1 250.8 189.6 240.6L243.4 176zM184 48C161.9 48 144 65.91 144 88C144 110.1 161.9 128 184 128H257.3L222.5 68.78C214.9 55.91 201.1 48 186.2 48H184zM432 88C432 65.91 414.1 48 392 48H389.8C374.9 48 361.1 55.91 353.5 68.78L318.7 128H392C414.1 128 432 110.1 432 88V88zM0 416V320H576V416H0z"/><path className="fa-secondary" d="M470.4 128H512C547.3 128 576 156.7 576 192V320H0V192C0 156.7 28.65 128 64 128H105.6C120.2 156.5 149.8 176 184 176H243.4L189.6 240.6C181.1 250.8 182.5 265.1 192.6 274.4C202.8 282.9 217.1 281.5 226.4 271.4L287.1 197.5L349.6 271.4C358 281.5 373.2 282.9 383.4 274.4C393.5 265.1 394.9 250.8 386.4 240.6L332.6 176H392C426.2 176 455.8 156.5 470.4 128H470.4zM576 416V448C576 483.3 547.3 512 512 512H64C28.65 512 0 483.3 0 448V416H576z"/>
</>],
['light',<>
	<path d="M288 101L326.8 38.97C341.9 14.73 368.5 0 397.1 0H400C444.2 0 480 35.82 480 80C480 98.01 474 114.6 464 128H512C547.3 128 576 156.7 576 192V448C576 483.3 547.3 512 512 512H64C28.65 512 0 483.3 0 448V192C0 156.7 28.65 128 64 128H111.1C101.1 114.6 96 98.01 96 80C96 35.82 131.8 0 176 0H178.9C207.5 0 234.1 14.73 249.2 38.97L288 101zM397.1 32C379.5 32 363.2 41.04 353.9 55.93L308.9 128H400C426.5 128 448 106.5 448 80C448 53.49 426.5 32 400 32H397.1zM267.1 128L222.1 55.93C212.8 41.04 196.5 32 178.9 32H176C149.5 32 128 53.49 128 80C128 106.5 149.5 128 176 128H267.1zM64 160C46.33 160 32 174.3 32 192V288H544V192C544 174.3 529.7 160 512 160H322.2L380.3 229.8C385.9 236.5 385 246.6 378.2 252.3C371.5 257.9 361.4 257 355.7 250.2L288 168.1L220.3 250.2C214.6 257 204.5 257.9 197.8 252.3C190.1 246.6 190.1 236.5 195.7 229.8L253.8 160H64zM32 320V384H544V320H32zM544 448V416H32V448C32 465.7 46.33 480 64 480H512C529.7 480 544 465.7 544 448z"/>
</>],
['regular',<>
	<path d="M263.9 44.45L288 85.46L312.1 44.45C328.3 16.91 357.9 0 389.8 0H392C440.6 0 480 39.4 480 88C480 102.4 476.5 115.1 470.4 128H512C547.3 128 576 156.7 576 192V448C576 483.3 547.3 512 512 512H64C28.65 512 0 483.3 0 448V192C0 156.7 28.65 128 64 128H105.6C99.46 115.1 96 102.4 96 88C96 39.4 135.4 0 184 0H186.2C218.1 0 247.7 16.91 263.9 44.45zM318.7 128H392C414.1 128 432 110.1 432 88C432 65.91 414.1 48 392 48H389.8C374.9 48 361.1 55.91 353.5 68.78L318.7 128zM288 197.5L226.4 271.4C217.1 281.5 202.8 282.9 192.6 274.4C182.5 265.1 181.1 250.8 189.6 240.6L243.4 176H64C55.16 176 48 183.2 48 192V320H528V192C528 183.2 520.8 176 512 176H332.6L386.4 240.6C394.9 250.8 393.5 265.1 383.4 274.4C373.2 282.9 358 281.5 349.6 271.4L288 197.5zM48 384V448C48 456.8 55.16 464 64 464H512C520.8 464 528 456.8 528 448V384H48zM257.3 128L222.5 68.78C214.9 55.91 201.1 48 186.2 48H184C161.9 48 144 65.91 144 88C144 110.1 161.9 128 184 128H257.3z"/>
</>],
['solid',<>
	<path d="M389.8 0H392C440.6 0 480 39.4 480 88C480 102.4 476.5 115.1 470.4 128H512C547.3 128 576 156.7 576 192V448C576 483.3 547.3 512 512 512H64C28.65 512 0 483.3 0 448V192C0 156.7 28.65 128 64 128H105.6C99.46 115.1 96 102.4 96 88C96 39.4 135.4 0 184 0H186.2C218.1 0 247.7 16.91 263.9 44.45L288 85.46L312.1 44.45C328.3 16.91 357.9 0 389.8 0zM318.7 128H392C414.1 128 432 110.1 432 88C432 65.91 414.1 48 392 48H389.8C374.9 48 361.1 55.91 353.5 68.78L318.7 128zM186.2 48H184C161.9 48 144 65.91 144 88C144 110.1 161.9 128 184 128H257.3L222.5 68.78C214.9 55.91 201.1 48 186.2 48V48zM64 384V448H512V384H64zM512 320V192H345.9L386.4 240.6C394.9 250.8 393.5 265.1 383.4 274.4C373.2 282.9 358 281.5 349.6 271.4L288 197.5L226.4 271.4C217.1 281.5 202.8 282.9 192.6 274.4C182.5 265.1 181.1 250.8 189.6 240.6L230.1 192H64V320H512z"/>
</>],
['thin',<>
	<path d="M288 120.9L341.6 35.21C355.3 13.31 379.3 0 405.1 0H408C447.8 0 480 32.24 480 72C480 94.62 469.6 114.8 453.3 128H512C547.3 128 576 156.7 576 192V448C576 483.3 547.3 512 512 512H64C28.65 512 0 483.3 0 448V192C0 156.7 28.65 128 64 128H122.7C106.4 114.8 96 94.62 96 72C96 32.24 128.2 0 168 0H170.9C196.7 0 220.8 13.31 234.4 35.21L288 120.9zM405.1 16C384.8 16 365.9 26.46 355.1 43.69L302.4 128H408C438.9 128 464 102.9 464 72C464 41.07 438.9 16 408 16H405.1zM273.6 128L220.9 43.69C210.1 26.46 191.2 16 170.9 16H168C137.1 16 112 41.07 112 72C112 102.9 137.1 128 168 128H273.6zM64 144C37.49 144 16 165.5 16 192V288H560V192C560 165.5 538.5 144 512 144H305.1L374.1 226.9C376.1 230.3 376.5 235.3 373.1 238.1C369.7 240.1 364.7 240.5 361.9 237.1L288 148.5L214.1 237.1C211.3 240.5 206.3 240.1 202.9 238.1C199.5 235.3 199 230.3 201.9 226.9L270.9 144H64zM16 304V400H560V304H16zM560 448V416H16V448C16 474.5 37.49 496 64 496H512C538.5 496 560 474.5 560 448z"/>
</>],

]);

const GiftCard: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

GiftCard.displayName = "GiftCard";

export default GiftCard;
