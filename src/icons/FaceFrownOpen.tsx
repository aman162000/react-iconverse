
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208z"/><path className="fa-secondary" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240zM336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176zM259.9 369.4C288.8 369.4 316.2 375.2 340.6 385.5C352.9 390.7 366.7 381.3 361.4 369.1C344.8 330.9 305.6 303.1 259.9 303.1C214.3 303.1 175.1 330.8 158.4 369.1C153.1 381.3 166.1 390.6 179.3 385.4C203.7 375.1 231 369.4 259.9 369.4L259.9 369.4z"/>
</>],
['light',<>
	<path d="M152.4 208C152.4 194.7 163.1 184 176.4 184C189.6 184 200.4 194.7 200.4 208C200.4 221.3 189.6 232 176.4 232C163.1 232 152.4 221.3 152.4 208zM360.4 208C360.4 221.3 349.6 232 336.4 232C323.1 232 312.4 221.3 312.4 208C312.4 194.7 323.1 184 336.4 184C349.6 184 360.4 194.7 360.4 208zM259.9 385.2C233.1 385.2 207.9 390.6 185.5 400C174.2 404.8 161.7 403.1 152.7 396.5C143 389.3 137.8 376.1 143.8 362.5C162.1 318.4 207.9 287.8 259.9 287.8C311.9 287.8 356.9 318.5 376.1 362.6C382 376.2 376.8 389.3 367.1 396.5C358.1 403.2 345.6 404.8 334.4 400.1C311.9 390.6 286.7 385.2 259.9 385.2V385.2zM175.1 369.3C201.6 358.1 230 353.2 259.9 353.2C289.8 353.2 318.2 358.1 343.9 369.4C328.4 340.2 296.8 319.8 259.9 319.8C223.1 319.8 191.4 340.1 175.1 369.3V369.3zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32z"/>
</>],
['regular',<>
	<path d="M179.3 369.3C166.1 374.5 153.1 365.1 158.4 352.9C175.1 314.7 214.3 287.8 259.9 287.8C305.6 287.8 344.8 314.7 361.4 352.1C366.7 365.2 352.9 374.5 340.6 369.3C316.2 359 288.8 353.2 259.9 353.2C231 353.2 203.7 358.1 179.3 369.3L179.3 369.3zM208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
</>],
['solid',<>
	<path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240zM336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176zM259.9 369.4C288.8 369.4 316.2 375.2 340.6 385.5C352.9 390.7 366.7 381.3 361.4 369.1C344.8 330.9 305.6 303.1 259.9 303.1C214.3 303.1 175.1 330.8 158.4 369.1C153.1 381.3 166.1 390.6 179.3 385.4C203.7 375.1 231 369.4 259.9 369.4L259.9 369.4z"/>
</>],
['thin',<>
	<path d="M160.4 208C160.4 199.2 167.5 192 176.4 192C185.2 192 192.4 199.2 192.4 208C192.4 216.8 185.2 224 176.4 224C167.5 224 160.4 216.8 160.4 208zM352.4 208C352.4 216.8 345.2 224 336.4 224C327.5 224 320.4 216.8 320.4 208C320.4 199.2 327.5 192 336.4 192C345.2 192 352.4 199.2 352.4 208zM259.9 377.2C232.1 377.2 205.8 382.8 182.4 392.7C173.7 396.3 164.1 394.1 157.5 390.1C150.5 384.9 146.8 375.6 151.1 365.7C169 324.6 211.1 295.8 259.9 295.8C308.8 295.8 350.8 324.6 368.8 365.8C373 375.6 369.4 384.9 362.4 390.1C355.7 395 346.2 396.4 337.5 392.7C314.1 382.8 287.7 377.2 259.9 377.2V377.2zM259.9 311.8C217.4 311.8 181.1 336.8 165.8 372.1C165.1 373.6 165.2 374.5 165.4 375.1C165.6 375.7 166 376.5 167 377.2C169 378.7 172.6 379.4 176.1 377.9C201.5 367.2 229.9 361.2 259.9 361.2C289.9 361.2 318.3 367.2 343.7 377.1C347.3 379.5 350.8 378.7 352.8 377.2C353.8 376.5 354.3 375.8 354.5 375.1C354.6 374.6 354.7 373.6 354.1 372.2C338.7 336.8 302.4 311.8 259.9 311.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 16C123.5 16 16 123.5 16 256C16 388.5 123.5 496 256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16z"/>
</>],

]);

const FaceFrownOpen: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FaceFrownOpen.displayName = "FaceFrownOpen";

export default FaceFrownOpen;