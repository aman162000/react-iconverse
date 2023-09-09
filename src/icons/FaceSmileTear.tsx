
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM400 369C400 395 378.5 416 352 416C325.5 416 304 395 304 369C304 349 332.4 308.6 345.6 291.3C348.8 286.9 355.2 286.9 358.4 291.3C371.4 308.6 400 349 400 369H400zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208z"/><path className="fa-secondary" d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM139.9 346.5C162.2 372.1 200.9 400 256 400C264.8 400 272 392.8 272 384C272 375.2 264.8 368 256 368C212.6 368 182 346.2 164.1 325.5C158.3 318.8 148.2 318.1 141.5 323.9C134.8 329.7 134.1 339.8 139.9 346.5L139.9 346.5zM352 416C378.5 416 400 395 400 369C400 349 371.4 308.6 358.4 291.3C355.2 286.9 348.8 286.9 345.6 291.3C332.4 308.6 304 349 304 369C304 395 325.5 416 352 416H352zM176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176zM336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240z"/>
</>],
['light',<>
	<path d="M141.5 323.9C148.2 318.1 158.3 318.8 164.1 325.5C182 346.2 212.6 368 256 368C264.8 368 272 375.2 272 384C272 392.8 264.8 400 256 400C200.9 400 162.2 372.1 139.9 346.5C134.1 339.8 134.8 329.7 141.5 323.9L141.5 323.9zM343.5 260.1C347.7 254.6 356.3 254.6 360.5 260.1C362.3 262.3 364.2 264.7 366.4 267.3C385.2 290.4 416 328.1 416 357.3C416 389.8 387.3 416 352 416C316.7 416 288 389.8 288 357.3C288 327.7 319.4 289.4 338.3 266.4C340.1 264.2 341.9 262.1 343.5 260.1V260.1zM320 357.3C320 369.5 331.7 384 352 384C372.3 384 384 369.5 384 357.3C384 351.4 379.6 339.6 368.2 322.4C362.1 314.7 357.4 307.3 351.1 300.4C346.5 307.3 340.9 314.7 335.8 322.4C324.4 339.5 320 351.4 320 357.3V357.3zM200.4 208C200.4 221.3 189.6 232 176.4 232C163.1 232 152.4 221.3 152.4 208C152.4 194.7 163.1 184 176.4 184C189.6 184 200.4 194.7 200.4 208zM312.4 208C312.4 194.7 323.1 184 336.4 184C349.6 184 360.4 194.7 360.4 208C360.4 221.3 349.6 232 336.4 232C323.1 232 312.4 221.3 312.4 208zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480z"/>
</>],
['regular',<>
	<path d="M136.3 317.9C146.3 309.2 161.5 310.3 170.1 320.3C187 339.8 215.5 360 255.1 360C269.3 360 280 370.7 280 384C280 397.3 269.3 408 255.1 408C197.1 408 157.2 378.6 133.9 351.7C125.2 341.7 126.3 326.5 136.3 317.9L136.3 317.9zM304 369C304 349 332.4 308.6 345.6 291.3C348.8 286.9 355.2 286.9 358.4 291.3C371.4 308.6 400 349 400 369C400 395 378.5 416 352 416C325.5 416 304 395 304 369H304zM208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM352 448C395.4 448 432 413.4 432 369C432 368.3 431.1 367.6 431.1 366.1C452.3 334.9 464 296.8 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C285.4 464 313.4 457.9 338.7 446.9C343 447.6 347.5 448 352 448V448z"/>
</>],
['solid',<>
	<path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM139.9 346.5C162.2 372.1 200.9 400 256 400C264.8 400 272 392.8 272 384C272 375.2 264.8 368 256 368C212.6 368 182 346.2 164.1 325.5C158.3 318.8 148.2 318.1 141.5 323.9C134.8 329.7 134.1 339.8 139.9 346.5L139.9 346.5zM352 416C378.5 416 400 395 400 369C400 349 371.4 308.6 358.4 291.3C355.2 286.9 348.8 286.9 345.6 291.3C332.4 308.6 304 349 304 369C304 395 325.5 416 352 416H352zM176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176zM336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240z"/>
</>],
['thin',<>
	<path d="M329.6 291.3C332.8 286.9 339.2 286.9 342.4 291.3C343.7 293 345.2 294.1 346.8 297C360.9 315.5 384 345.6 384 369C384 395 362.5 416 336 416C309.5 416 288 395 288 369C288 345.4 311.5 314.8 325.7 296.4C327.1 294.5 328.4 292.8 329.6 291.3zM304 369C304 385.8 318 400 336 400C353.1 400 368 385.8 368 369C368 360.9 363.1 349.2 354.5 335.4C348.6 325.9 341.9 316.9 335.1 309.3C330.1 316.9 323.4 325.9 317.4 335.4C308.8 349.1 304 360.9 304 369H304zM192.4 208C192.4 216.8 185.2 224 176.4 224C167.5 224 160.4 216.8 160.4 208C160.4 199.2 167.5 192 176.4 192C185.2 192 192.4 199.2 192.4 208zM320.4 208C320.4 199.2 327.5 192 336.4 192C345.2 192 352.4 199.2 352.4 208C352.4 216.8 345.2 224 336.4 224C327.5 224 320.4 216.8 320.4 208zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 16C123.5 16 16 123.5 16 256C16 388.5 123.5 496 256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16zM139.4 321.4C143 318.9 148 319.8 150.6 323.4C171.4 353.2 206.6 384 255.1 384C260.4 384 264 387.6 264 392C264 396.4 260.4 400 255.1 400C199.3 400 159.9 364.6 137.4 332.6C134.9 328.1 135.8 323.1 139.4 321.4H139.4z"/>
</>],

]);

const FaceSmileTear: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FaceSmileTear.displayName = "FaceSmileTear";

export default FaceSmileTear;