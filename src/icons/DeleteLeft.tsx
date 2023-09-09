
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M399 175C408.4 165.7 423.6 165.7 432.1 175C442.3 184.4 442.3 199.6 432.1 208.1L385.9 255.1L432.1 303C442.3 312.4 442.3 327.6 432.1 336.1C423.6 346.3 408.4 346.3 399 336.1L352 289.9L304.1 336.1C295.6 346.3 280.4 346.3 271 336.1C261.7 327.6 261.7 312.4 271 303L318.1 255.1L271 208.1C261.7 199.6 261.7 184.4 271 175C280.4 165.7 295.6 165.7 304.1 175L352 222.1L399 175z"/><path className="fa-secondary" d="M576 384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384zM432.1 175C423.6 165.7 408.4 165.7 399 175L352 222.1L304.1 175C295.6 165.7 280.4 165.7 271 175C261.7 184.4 261.7 199.6 271 208.1L318.1 256L271 303C261.7 312.4 261.7 327.6 271 336.1C280.4 346.3 295.6 346.3 304.1 336.1L352 289.9L399 336.1C408.4 346.3 423.6 346.3 432.1 336.1C442.3 327.6 442.3 312.4 432.1 303L385.9 256L432.1 208.1C442.3 199.6 442.3 184.4 432.1 175V175z"/>
</>],
['light',<>
	<path d="M427.3 203.3L374.6 256L427.3 308.7C433.6 314.9 433.6 325.1 427.3 331.3C421.1 337.6 410.9 337.6 404.7 331.3L351.1 278.6L299.3 331.3C293.1 337.6 282.9 337.6 276.7 331.3C270.4 325.1 270.4 314.9 276.7 308.7L329.4 256L276.7 203.3C270.4 197.1 270.4 186.9 276.7 180.7C282.9 174.4 293.1 174.4 299.3 180.7L351.1 233.4L404.7 180.7C410.9 174.4 421.1 174.4 427.3 180.7C433.6 186.9 433.6 197.1 427.3 203.3zM512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64L512 64zM544 128C544 110.3 529.7 96 512 96H205.3C196.8 96 188.6 99.37 182.6 105.4L31.1 256L182.6 406.6C188.6 412.6 196.8 416 205.3 416H512C529.7 416 544 401.7 544 384V128z"/>
</>],
['regular',<>
	<path d="M432.1 208.1L385.9 256L432.1 303C442.3 312.4 442.3 327.6 432.1 336.1C423.6 346.3 408.4 346.3 399 336.1L352 289.9L304.1 336.1C295.6 346.3 280.4 346.3 271 336.1C261.7 327.6 261.7 312.4 271 303L318.1 256L271 208.1C261.7 199.6 261.7 184.4 271 175C280.4 165.7 295.6 165.7 304.1 175L352 222.1L399 175C408.4 165.7 423.6 165.7 432.1 175C442.3 184.4 442.3 199.6 432.1 208.1V208.1zM512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64L512 64zM528 128C528 119.2 520.8 112 512 112H205.3C201 112 196.9 113.7 193.9 116.7L54.63 256L193.9 395.3C196.9 398.3 201 400 205.3 400H512C520.8 400 528 392.8 528 384V128z"/>
</>],
['solid',<>
	<path d="M576 384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384zM271 208.1L318.1 256L271 303C261.7 312.4 261.7 327.6 271 336.1C280.4 346.3 295.6 346.3 304.1 336.1L352 289.9L399 336.1C408.4 346.3 423.6 346.3 432.1 336.1C442.3 327.6 442.3 312.4 432.1 303L385.9 256L432.1 208.1C442.3 199.6 442.3 184.4 432.1 175C423.6 165.7 408.4 165.7 399 175L352 222.1L304.1 175C295.6 165.7 280.4 165.7 271 175C261.7 184.4 261.7 199.6 271 208.1V208.1z"/>
</>],
['thin',<>
	<path d="M429.7 189.7L363.3 256L429.7 322.3C432.8 325.5 432.8 330.5 429.7 333.7C426.5 336.8 421.5 336.8 418.3 333.7L352 267.3L285.7 333.7C282.5 336.8 277.5 336.8 274.3 333.7C271.2 330.5 271.2 325.5 274.3 322.3L340.7 256L274.3 189.7C271.2 186.5 271.2 181.5 274.3 178.3C277.5 175.2 282.5 175.2 285.7 178.3L352 244.7L418.3 178.3C421.5 175.2 426.5 175.2 429.7 178.3C432.8 181.5 432.8 186.5 429.7 189.7zM9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 255.1C0 247.5 3.372 239.4 9.372 233.4V233.4zM560 128C560 101.5 538.5 80 512 80H205.3C192.5 80 180.3 85.06 171.3 94.06L20.69 244.7C17.69 247.7 15.1 251.8 15.1 256C15.1 260.2 17.69 264.3 20.69 267.3L171.3 417.9C180.3 426.9 192.5 432 205.3 432H512C538.5 432 560 410.5 560 384V128z"/>
</>],

]);

const DeleteLeft: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

DeleteLeft.displayName = "DeleteLeft";

export default DeleteLeft;
