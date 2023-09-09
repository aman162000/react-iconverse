
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208zM256 512C220.7 512 192 483.3 192 448V402.6C192 387.9 203.9 376 218.6 376H220.6C231.9 376 241.7 383.9 244.2 394.9C247 407.5 264.1 407.5 267.8 394.9C270.3 383.9 280.1 376 291.4 376H293.4C308.1 376 320 387.9 320 402.6V448C320 483.3 291.3 512 256 512V512z"/><path className="fa-secondary" d="M174.5 498.8C73.07 464.7 0 368.9 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 368.9 438.9 464.7 337.5 498.8C346.7 484 352 466.6 352 448V401.1C376.3 383.5 395.6 359.5 407.4 331.5C412.4 319.7 400.4 309 388.1 312.8C348.4 324.9 303.7 331.8 256.3 331.8C208.9 331.8 164.1 324.9 124.5 312.8C112.2 309 100.2 319.7 105.2 331.5C116.9 359.3 135.1 383.1 159.1 400.7V448C159.1 466.6 165.3 484 174.5 498.8L174.5 498.8zM176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176zM336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240z"/>
</>],
['light',<>
	<path d="M136.5 445.5C144 450.2 146.2 460.1 141.5 467.6C136.8 475.1 126.9 477.3 119.5 472.6C47.71 427.3 0 347.2 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 347.2 464.3 427.3 392.5 472.6C385.1 477.3 375.2 475.1 370.5 467.6C365.8 460.1 367.1 450.2 375.5 445.5C438.3 405.8 480 335.8 480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256C32 335.8 73.69 405.8 136.5 445.5zM152.4 208C152.4 194.7 163.1 184 176.4 184C189.6 184 200.4 194.7 200.4 208C200.4 221.3 189.6 232 176.4 232C163.1 232 152.4 221.3 152.4 208zM360.4 208C360.4 221.3 349.6 232 336.4 232C323.1 232 312.4 221.3 312.4 208C312.4 194.7 323.1 184 336.4 184C349.6 184 360.4 194.7 360.4 208zM256 512C202.1 512 160 469 160 416V383.3C139.8 367.6 123.7 347.1 113.2 323.5C108.1 311.8 120 301.1 132.3 304.7C169.6 315.9 211.6 322.1 256 322.1C300.5 322.1 342.5 315.9 379.8 304.7C392.1 301.1 404 311.8 398.9 323.5C388.4 347.1 372.2 367.7 352 383.4V416C352 469 309 512 256 512V512zM320 416V378.6C320 363.9 308.1 352 293.4 352H291.4C280.1 352 270.3 359.9 267.8 370.9C264.1 383.5 247 383.5 244.2 370.9C241.7 359.9 231.9 352 220.6 352H218.6C203.9 352 192 363.9 192 378.6V416C192 451.3 220.7 480 256 480C291.3 480 320 451.3 320 416z"/>
</>],
['regular',<>
	<path d="M144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208zM368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 337.7 95.13 408.4 163.7 442.4C161.3 434 160 425.2 160 416V363.6C151.1 355.6 143.3 346.5 136.9 336.5C126.5 320.4 143.7 303.1 162.3 308.4C191.3 315.1 222.8 318.8 255.9 318.8C289 318.8 320.6 315.1 349.5 308.4C368.2 303.1 385.4 320.4 374.1 336.5C368.6 346.4 360.8 355.5 352 363.5V416C352 425.2 350.7 434 348.3 442.4C416.9 408.4 464 337.7 464 256C464 141.1 370.9 48 255.1 48H256zM320 416V378.6C320 363.9 308.1 352 293.4 352H291.4C280.1 352 270.3 359.9 267.8 370.9C264.1 383.5 247 383.5 244.2 370.9C241.7 359.9 231.9 352 220.6 352H218.6C203.9 352 192 363.9 192 378.6V416C192 451.3 220.7 480 256 480C291.3 480 320 451.3 320 416z"/>
</>],
['solid',<>
	<path d="M256 0C397.4 0 512 114.6 512 256C512 368.9 438.9 464.7 337.5 498.8C346.7 484 352 466.6 352 448V401.1C376.3 383.5 395.6 359.5 407.4 331.5C412.4 319.7 400.4 309 388.1 312.8C348.4 324.9 303.7 331.8 256.3 331.8C208.9 331.8 164.1 324.9 124.5 312.8C112.2 309 100.2 319.7 105.2 331.5C116.9 359.3 135.1 383.1 160 400.7V448C160 466.6 165.3 484 174.5 498.8C73.07 464.7 0 368.9 0 256C0 114.6 114.6 .0003 256 .0003L256 0zM176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240zM336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176zM256 512C220.7 512 192 483.3 192 448V402.6C192 387.9 203.9 376 218.6 376H220.6C231.9 376 241.7 383.9 244.2 394.9C247 407.5 264.1 407.5 267.8 394.9C270.3 383.9 280.1 376 291.4 376H293.4C308.1 376 320 387.9 320 402.6V448C320 483.3 291.3 512 256 512V512z"/>
</>],
['thin',<>
	<path d="M256 15.1C123.5 15.1 16 123.5 16 255.1C16 355.6 76.67 441 163.1 477.4C167.2 479.1 169.1 483.8 167.4 487.8C165.7 491.9 160.1 493.8 156.9 492.1C64.74 453.4 0 362.3 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 362.3 447.3 453.4 355.1 492.1C351 493.8 346.3 491.9 344.6 487.8C342.9 483.8 344.8 479.1 348.9 477.4C435.3 441 496 355.6 496 255.1C496 123.5 388.5 15.1 256 15.1zM192.4 207.1C192.4 216.8 185.2 223.1 176.4 223.1C167.5 223.1 160.4 216.8 160.4 207.1C160.4 199.2 167.5 191.1 176.4 191.1C185.2 191.1 192.4 199.2 192.4 207.1zM184 409.9C184 386.8 202.8 368 225.9 368C237.1 368 247.7 372.4 255.6 380.3L256 380.7L256.4 380.3C264.3 372.4 274.9 368 286.1 368C309.2 368 328 386.8 328 409.9V440C328 479.8 295.8 512 256 512C216.2 512 184 479.8 184 440V409.9zM248 395.3L244.3 391.6C239.4 386.7 232.8 384 225.9 384C211.6 384 200 395.6 200 409.9V440C200 470.9 225.1 496 256 496C286.9 496 312 470.9 312 440V409.9C312 395.6 300.4 384 286.1 384C279.2 384 272.6 386.7 267.7 391.6L264 395.3V424C264 428.4 260.4 432 256 432C251.6 432 248 428.4 248 424V395.3zM320.4 207.1C320.4 199.2 327.5 191.1 336.4 191.1C345.2 191.1 352.4 199.2 352.4 207.1C352.4 216.8 345.2 223.1 336.4 223.1C327.5 223.1 320.4 216.8 320.4 207.1zM256 333.6C293.9 333.6 329.1 329.1 362.6 321C373.7 318.3 384.8 321.3 392.1 327.9C395.8 331.3 398.6 335.8 399.6 341C400.6 346.3 399.7 351.9 396.7 357.1C386.7 374.6 373.1 389.1 356.9 402.4C353.4 405.1 348.3 404.4 345.7 400.9C342.1 397.4 343.6 392.4 347.1 389.7C361.7 378.5 373.9 364.7 382.8 349.1C384 346.1 384.1 345.3 383.9 344C383.6 342.6 382.8 341.1 381.3 339.7C378.2 336.9 372.5 335 366.4 336.5C332.5 344.1 295.2 349.6 256 349.6C216.8 349.6 179.5 344.1 145.6 336.5C139.5 335 133.8 336.9 130.7 339.7C129.2 341.1 128.4 342.6 128.1 344C127.9 345.3 127.1 346.1 129.2 349.1C138.1 364.7 150.3 378.5 164.9 389.7C168.4 392.4 169 397.4 166.3 400.9C163.7 404.4 158.6 405.1 155.1 402.4C138.9 389.1 125.3 374.6 115.3 357.1C112.3 351.9 111.4 346.3 112.4 341C113.4 335.8 116.2 331.3 119.9 327.9C127.2 321.3 138.3 318.3 149.4 321C182 329.1 218.1 333.6 256 333.6L256 333.6z"/>
</>],

]);

const FaceGrinTongue: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FaceGrinTongue.displayName = "FaceGrinTongue";

export default FaceGrinTongue;
