
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M195.3 100.7C201.6 106.9 201.6 117.1 195.3 123.3L187.9 130.7C164.4 154.3 134 169.9 101.1 175.4L98.63 175.8C89.91 177.2 81.67 171.3 80.22 162.6C78.76 153.9 84.65 145.7 93.37 144.2L95.85 143.8C122.2 139.4 146.5 126.9 165.3 108.1L172.7 100.7C178.9 94.44 189.1 94.44 195.3 100.7zM175.6 240C157.1 240 143.6 225.7 143.6 208C143.6 190.3 157.1 176 175.6 176C193.3 176 207.6 190.3 207.6 208C207.6 225.7 193.3 240 175.6 240zM335.6 240C317.1 240 303.6 225.7 303.6 208C303.6 190.3 317.1 176 335.6 176C353.3 176 367.6 190.3 367.6 208C367.6 225.7 353.3 240 335.6 240zM316.7 123.3C310.4 117.1 310.4 106.9 316.7 100.7C322.9 94.44 333.1 94.44 339.3 100.7L346.7 108.1C365.5 126.9 389.8 139.4 416.2 143.8L418.6 144.2C427.3 145.7 433.2 153.9 431.8 162.6C430.3 171.3 422.1 177.2 413.4 175.8L410.9 175.4C377.1 169.9 347.6 154.3 324.1 130.7L316.7 123.3z"/><path className="fa-secondary" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM367.6 208C367.6 190.3 353.3 176 335.6 176C317.1 176 303.6 190.3 303.6 208C303.6 225.7 317.1 240 335.6 240C353.3 240 367.6 225.7 367.6 208zM143.6 208C143.6 225.7 157.1 240 175.6 240C193.3 240 207.6 225.7 207.6 208C207.6 190.3 193.3 176 175.6 176C157.1 176 143.6 190.3 143.6 208zM195.3 123.3C201.6 117.1 201.6 106.9 195.3 100.7C189.1 94.44 178.9 94.44 172.7 100.7L165.3 108.1C146.5 126.9 122.2 139.4 95.85 143.8L93.37 144.2C84.65 145.7 78.76 153.9 80.22 162.6C81.67 171.3 89.91 177.2 98.63 175.8L101.1 175.4C134 169.9 164.4 154.3 187.9 130.7L195.3 123.3zM316.7 100.7C310.4 106.9 310.4 117.1 316.7 123.3L324.1 130.7C347.6 154.3 377.1 169.9 410.9 175.4L413.4 175.8C422.1 177.2 430.3 171.3 431.8 162.6C433.2 153.9 427.3 145.7 418.6 144.2L416.2 143.8C389.8 139.4 365.5 126.9 346.7 108.1L339.3 100.7C333.1 94.44 322.9 94.44 316.7 100.7zM168 282.7C160.4 278.3 150.6 280.9 146.2 288.6C141.7 296.2 144.3 305.1 151.1 310.4C166.4 318.7 175.1 334.3 175.1 352C175.1 369.7 166.4 385.3 151.1 393.6C144.3 398 141.7 407.8 146.2 415.4C150.6 423.1 160.4 425.7 168 421.3C187.5 410 201.8 390.8 206.4 368H305.6C310.2 390.8 324.5 410 343.1 421.3C351.6 425.7 361.4 423.1 365.8 415.4C370.3 407.8 367.7 398 360 393.6C345.6 385.3 336 369.7 336 352C336 334.3 345.6 318.7 360 310.4C367.7 305.1 370.3 296.2 365.8 288.6C361.4 280.9 351.6 278.3 343.1 282.7C324.5 293.1 310.2 313.2 305.6 336H206.4C201.8 313.2 187.5 293.1 168 282.7H168z"/>
</>],
['light',<>
	<path d="M203.3 100.7C209.6 106.9 209.6 117.1 203.3 123.3L195.9 130.7C172.4 154.3 142 169.9 109.1 175.4L106.6 175.8C97.91 177.2 89.67 171.3 88.22 162.6C86.76 153.9 92.65 145.7 101.4 144.2L103.9 143.8C130.2 139.4 154.5 126.9 173.3 108.1L180.7 100.7C186.9 94.44 197.1 94.44 203.3 100.7zM175.6 232C162.4 232 151.6 221.3 151.6 208C151.6 194.7 162.4 184 175.6 184C188.9 184 199.6 194.7 199.6 208C199.6 221.3 188.9 232 175.6 232zM335.6 232C322.4 232 311.6 221.3 311.6 208C311.6 194.7 322.4 184 335.6 184C348.9 184 359.6 194.7 359.6 208C359.6 221.3 348.9 232 335.6 232zM308.7 123.3C302.4 117.1 302.4 106.9 308.7 100.7C314.9 94.44 325.1 94.44 331.3 100.7L338.7 108.1C357.5 126.9 381.8 139.4 408.2 143.8L410.6 144.2C419.3 145.7 425.2 153.9 423.8 162.6C422.3 171.3 414.1 177.2 405.4 175.8L402.9 175.4C369.1 169.9 339.6 154.3 316.1 130.7L308.7 123.3zM146.2 272.6C150.6 264.9 160.4 262.3 168 266.7C187.5 277.1 201.8 297.2 206.4 320H305.6C310.2 297.2 324.5 277.1 343.1 266.7C351.6 262.3 361.4 264.9 365.8 272.6C370.3 280.2 367.7 289.1 360 294.4C345.6 302.7 336 318.3 336 336C336 353.7 345.6 369.3 360 377.6C367.7 382 370.3 391.8 365.8 399.4C361.4 407.1 351.6 409.7 343.1 405.3C324.5 394 310.2 374.8 305.6 352H206.4C201.8 374.8 187.5 394 168 405.3C160.4 409.7 150.6 407.1 146.2 399.4C141.7 391.8 144.3 382 151.1 377.6C166.4 369.3 175.1 353.7 175.1 336C175.1 318.3 166.4 302.7 151.1 294.4C144.3 289.1 141.7 280.2 146.2 272.6H146.2zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32z"/>
</>],
['regular',<>
	<path d="M335.6 240C317.1 240 303.6 225.7 303.6 208C303.6 190.3 317.1 176 335.6 176C353.3 176 367.6 190.3 367.6 208C367.6 225.7 353.3 240 335.6 240zM175.6 176C193.3 176 207.6 190.3 207.6 208C207.6 225.7 193.3 240 175.6 240C157.1 240 143.6 225.7 143.6 208C143.6 190.3 157.1 176 175.6 176zM187.9 130.7C164.4 154.3 134 169.9 101.1 175.4L98.63 175.8C89.91 177.2 81.67 171.3 80.22 162.6C78.76 153.9 84.65 145.7 93.37 144.2L95.85 143.8C122.2 139.4 146.5 126.9 165.3 108.1L172.7 100.7C178.9 94.44 189.1 94.44 195.3 100.7C201.6 106.9 201.6 117.1 195.3 123.3L187.9 130.7zM339.3 100.7L346.7 108.1C365.5 126.9 389.8 139.4 416.2 143.8L418.6 144.2C427.3 145.7 433.2 153.9 431.8 162.6C430.3 171.3 422.1 177.2 413.4 175.8L410.9 175.4C377.1 169.9 347.6 154.3 324.1 130.7L316.7 123.3C310.4 117.1 310.4 106.9 316.7 100.7C322.9 94.44 333.1 94.44 339.3 100.7V100.7zM208 312H304.2C310.3 293.2 323.2 277.5 339.1 267.8C351.5 261.2 366.1 265.1 372.8 276.5C379.4 288 375.5 302.7 364 309.3C354.6 314.8 348.3 324.1 348.3 336.6C348.3 348.2 354.6 358.3 364 363.8C375.5 370.4 379.4 385.1 372.8 396.6C366.1 408.1 351.5 411.1 339.1 405.3C322.9 395.4 309.8 379.3 303.8 360H208C201.1 379 188.1 394.1 172 404.8C160.5 411.4 145.9 407.5 139.2 396C132.6 384.5 136.5 369.9 147.1 363.2C157.4 357.8 163.7 347.6 163.7 336C163.7 324.4 157.4 314.2 147.1 308.8C136.5 302.1 132.6 287.5 139.2 275.1C145.9 264.5 160.5 260.6 172 267.2C188.1 277 201.1 292.1 208 311.1L208 312zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
</>],
['solid',<>
	<path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM367.6 208C367.6 190.3 353.3 176 335.6 176C317.1 176 303.6 190.3 303.6 208C303.6 225.7 317.1 240 335.6 240C353.3 240 367.6 225.7 367.6 208zM143.6 208C143.6 225.7 157.1 240 175.6 240C193.3 240 207.6 225.7 207.6 208C207.6 190.3 193.3 176 175.6 176C157.1 176 143.6 190.3 143.6 208zM195.3 123.3C201.6 117.1 201.6 106.9 195.3 100.7C189.1 94.44 178.9 94.44 172.7 100.7L165.3 108.1C146.5 126.9 122.2 139.4 95.85 143.8L93.37 144.2C84.65 145.7 78.76 153.9 80.22 162.6C81.67 171.3 89.91 177.2 98.63 175.8L101.1 175.4C134 169.9 164.4 154.3 187.9 130.7L195.3 123.3zM316.7 100.7C310.4 106.9 310.4 117.1 316.7 123.3L324.1 130.7C347.6 154.3 377.1 169.9 410.9 175.4L413.4 175.8C422.1 177.2 430.3 171.3 431.8 162.6C433.2 153.9 427.3 145.7 418.6 144.2L416.2 143.8C389.8 139.4 365.5 126.9 346.7 108.1L339.3 100.7C333.1 94.44 322.9 94.44 316.7 100.7zM168 282.7C160.4 278.3 150.6 280.9 146.2 288.6C141.7 296.2 144.3 305.1 151.1 310.4C166.4 318.7 175.1 334.3 175.1 352C175.1 369.7 166.4 385.3 151.1 393.6C144.3 398 141.7 407.8 146.2 415.4C150.6 423.1 160.4 425.7 168 421.3C187.5 410 201.8 390.8 206.4 368H305.6C310.2 390.8 324.5 410 343.1 421.3C351.6 425.7 361.4 423.1 365.8 415.4C370.3 407.8 367.7 398 360 393.6C345.6 385.3 336 369.7 336 352C336 334.3 345.6 318.7 360 310.4C367.7 305.1 370.3 296.2 365.8 288.6C361.4 280.9 351.6 278.3 343.1 282.7C324.5 293.1 310.2 313.2 305.6 336H206.4C201.8 313.2 187.5 293.1 168 282.7H168z"/>
</>],
['thin',<>
	<path d="M174.3 117C151.9 139.4 123 154.3 91.8 159.5L89.32 159.9C84.96 160.6 80.84 157.7 80.11 153.3C79.38 148.1 82.33 144.8 86.68 144.1L89.17 143.7C117.1 139 142.9 125.8 162.1 105.7L170.3 98.34C173.5 95.22 178.5 95.22 181.7 98.34C184.8 101.5 184.8 106.5 181.7 109.7L174.3 117zM330.3 109.7C327.2 106.5 327.2 101.5 330.3 98.34C333.5 95.22 338.5 95.22 341.7 98.34L349 105.7C369.1 125.8 394.9 139 422.8 143.7L425.3 144.1C429.7 144.8 432.6 148.1 431.9 153.3C431.2 157.7 427 160.6 422.7 159.9L420.2 159.5C388.1 154.3 360.1 139.4 337.7 117L330.3 109.7zM335.6 192C344.5 192 351.6 199.2 351.6 208C351.6 216.8 344.5 224 335.6 224C326.8 224 319.6 216.8 319.6 208C319.6 199.2 326.8 192 335.6 192zM175.6 224C166.8 224 159.6 216.8 159.6 208C159.6 199.2 166.8 192 175.6 192C184.5 192 191.6 199.2 191.6 208C191.6 216.8 184.5 224 175.6 224zM153.1 284.6C155.3 280.7 160.2 279.4 164 281.6C183.3 292.8 196.1 312.7 199.6 336H312.4C315 312.7 328.7 292.8 347.1 281.6C351.8 279.4 356.7 280.7 358.9 284.6C361.1 288.4 359.8 293.3 356 295.5C339.2 305.2 328 323.3 328 344C328 364.7 339.2 382.8 356 392.5C359.8 394.7 361.1 399.6 358.9 403.4C356.7 407.3 351.8 408.6 347.1 406.4C328.7 395.2 315 375.3 312.4 352H199.6C196.1 375.3 183.3 395.2 164 406.4C160.2 408.6 155.3 407.3 153.1 403.4C150.9 399.6 152.2 394.7 155.1 392.5C172.8 382.8 184 364.7 184 344C184 323.3 172.8 305.2 155.1 295.5C152.2 293.3 150.9 288.4 153.1 284.6V284.6zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 16C123.5 16 16 123.5 16 256C16 388.5 123.5 496 256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16z"/>
</>],

]);

const FaceNauseated: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FaceNauseated.displayName = "FaceNauseated";

export default FaceNauseated;