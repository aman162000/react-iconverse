
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M176 88C184.8 88 192 95.16 192 104V113.8C196.6 114.7 200.7 115.6 204.1 116.5C212.7 118.8 217.7 127.6 215.5 136.1C213.2 144.7 204.4 149.7 195.9 147.5C187.6 145.3 177.1 143.4 168.9 144.3C164.9 144.7 162.8 145.7 161.8 146.4C159.2 148.3 159.2 151.1 161.6 153.6C168.4 158.4 176.6 160.6 184.8 162.7C193.2 164.9 201.6 167.2 208.7 172.1C213.5 175.5 218.2 180.1 221.1 186.7C224.1 193.4 224.6 200.6 223.4 207.9C221.4 219.4 215.5 228.3 206.4 233.8C201.8 236.6 196.8 238.2 192 239.1V248C192 256.8 184.8 264 176 264C167.2 264 160 256.8 160 248V237.2C151.6 235.3 144 232.9 138.1 231.2C130.6 228.4 126 219.3 128.8 210.9C131.6 202.6 140.7 198 149.1 200.8C158.5 203.1 170.9 207.8 181.1 207.9C186 207.1 188.7 207.1 189.8 206.4L189.9 206.4C192.6 204.8 193 200.2 190.4 198.4C186.1 195.1 181.2 194.1 171.6 191.4L170.5 191.1C162.6 188.8 151.6 185.7 143.3 179.9C138.5 176.5 133.8 171.9 130.9 165.3C127.9 158.6 127.4 151.4 128.6 144.1C130.4 133.1 135.5 125.9 143 120.5C148.4 116.6 154.3 114.5 160 113.3V104C160 95.16 167.2 88 176 88L176 88zM336 88C344.8 88 352 95.16 352 104V113.8C356.6 114.7 360.7 115.6 364.1 116.5C372.7 118.8 377.7 127.6 375.5 136.1C373.2 144.7 364.4 149.7 355.9 147.5C347.6 145.3 337.1 143.4 328.9 144.3C324.9 144.7 322.8 145.7 321.8 146.4C319.2 148.3 319.2 151.1 321.6 153.6C328.4 158.4 336.6 160.6 344.9 162.7C353.2 164.9 361.6 167.2 368.7 172.1C373.5 175.5 378.2 180.1 381.1 186.7C384.1 193.4 384.6 200.6 383.4 207.9C381.4 219.4 375.5 228.3 366.4 233.8C361.8 236.6 356.8 238.2 352 239.1V248C352 256.8 344.8 264 336 264C327.2 264 320 256.8 320 248V237.2C311.6 235.3 304 232.9 298.1 231.2C290.6 228.4 286 219.3 288.8 210.9C291.6 202.6 300.7 198 309.1 200.8C318.5 203.1 330.9 207.8 341.1 207.9C346 207.1 348.7 207.1 349.8 206.4L349.9 206.4C352.6 204.8 353 200.2 350.4 198.4C346.1 195.1 341.2 194.1 331.6 191.4L330.5 191.1C322.6 188.8 311.6 185.7 303.3 179.9C298.5 176.5 293.8 171.9 290.9 165.3C287.9 158.6 287.4 151.4 288.6 144.1C290.4 133.1 295.5 125.9 303 120.5C308.4 116.6 314.3 114.5 320 113.3V104C320 95.16 327.2 88 336 88L336 88zM336 352V432C336 476.2 300.2 512 255.1 512C211.8 512 175.1 476.2 175.1 432V352H336zM245.3 378.9V385.3C241.5 386.1 237.6 387.5 234 390.1C229 393.9 225.6 399.3 224.4 406.3C223.6 411.2 223.9 416.2 225.9 420.7C227.9 425.2 230.1 428.4 234.2 430.6C239.8 434.6 247.1 436.7 252.3 438.3L253.1 438.5C259.4 440.4 263.3 441.6 265.6 443.3C267.4 444.5 267.1 447.6 265.2 448.7C264.5 449.2 262.7 449.8 259.4 449.8C252.6 449.7 244.3 447.1 238 444.9C232.4 443 226.4 446.1 224.5 451.8C222.7 457.5 225.7 463.7 231.3 465.6C234.7 466.8 239.7 468.5 245.3 469.7V477.1C245.3 483.1 250.1 488 256 488C261.9 488 266.7 483.1 266.7 477.1V470.1C269.9 470.4 273.2 469.3 276.2 467.4C282.3 463.7 286.2 457.6 287.6 449.8C288.4 444.8 288.1 439.8 286.1 435.3C284.1 430.8 281 427.6 277.8 425.4C273.1 421.1 267.5 420.5 261.9 418.1C256.4 417.5 250.1 415.1 246.4 412.7C244.8 411.6 244.8 409.1 246.5 407.8C247.2 407.3 248.6 406.7 251.3 406.4C256.7 405.8 263.7 407 269.3 408.5C274.1 410.1 280.8 406.6 282.3 400.8C283.8 394.1 280.4 389 274.7 387.5C272.5 386.8 269.7 386.2 266.7 385.6V378.9C266.7 372.9 261.9 368 256 368C250.1 368 245.3 372.9 245.3 378.9L245.3 378.9z"/><path className="fa-secondary" d="M163.1 494.6C67.66 457.5 0 364.6 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 364.6 444.3 457.5 348.9 494.6C360.9 476.8 368 455.2 368 432V421.5C390.4 401.4 407 375.4 415.2 346.1C419.1 332.4 407.8 320 393.6 320H118.4C104.2 320 92.92 332.4 96.76 346.1C104.1 375.4 121.6 401.4 144 421.5V432C144 455.2 151.1 476.8 163.1 494.6H163.1zM160 104V113.3C154.3 114.5 148.4 116.6 143 120.5C135.5 125.9 130.4 133.1 128.6 144.1C127.4 151.4 127.9 158.6 130.9 165.3C133.8 171.9 138.5 176.5 143.3 179.9C151.6 185.7 162.6 188.8 170.5 191.1L171.6 191.4C181.2 194.1 186.1 195.1 190.4 198.4C193 200.2 192.6 204.8 189.9 206.4L189.8 206.4C188.7 207.1 186 207.1 181.1 207.9C170.9 207.8 158.5 203.1 149.1 200.8C140.7 198 131.6 202.6 128.8 210.9C126 219.3 130.6 228.4 138.1 231.2C144 232.9 151.6 235.3 160 237.2V248C160 256.8 167.2 264 176 264C184.8 264 192 256.8 192 248V239.1C196.8 238.2 201.8 236.6 206.4 233.8C215.5 228.3 221.4 219.4 223.4 207.9C224.6 200.6 224.1 193.4 221.1 186.7C218.2 180.1 213.5 175.5 208.7 172.1C201.6 167.2 193.2 164.9 184.8 162.7C176.6 160.6 168.4 158.4 161.6 153.6C159.2 151.1 159.2 148.3 161.8 146.4C162.8 145.7 164.9 144.7 168.9 144.3C177.1 143.4 187.6 145.3 195.9 147.5C204.4 149.7 213.2 144.7 215.5 136.1C217.7 127.6 212.7 118.8 204.1 116.5C200.7 115.6 196.6 114.7 192 113.8V104C192 95.16 184.8 88 176 88C167.2 88 160 95.16 160 104L160 104zM352 104C352 95.16 344.8 88 336 88C327.2 88 320 95.16 320 104V113.3C314.3 114.5 308.4 116.6 303 120.5C295.5 125.9 290.4 133.1 288.6 144.1C287.4 151.4 287.9 158.6 290.9 165.3C293.8 171.9 298.5 176.5 303.3 179.9C311.6 185.7 322.6 188.8 330.5 191.1L331.6 191.4C341.2 194.1 346.1 195.1 350.4 198.4C353 200.2 352.6 204.8 349.9 206.4L349.8 206.4C348.7 207.1 346 207.1 341.1 207.9C330.9 207.8 318.5 203.1 309.1 200.8C300.7 198 291.6 202.6 288.8 210.9C286 219.3 290.6 228.4 298.1 231.2C304 232.9 311.6 235.3 320 237.2V248C320 256.8 327.2 264 336 264C344.8 264 352 256.8 352 248V239.1C356.8 238.2 361.8 236.6 366.4 233.8C375.5 228.3 381.4 219.4 383.4 207.9C384.6 200.6 384.1 193.4 381.1 186.7C378.2 180.1 373.5 175.5 368.7 172.1C361.6 167.2 353.2 164.9 344.9 162.7C336.6 160.6 328.4 158.4 321.6 153.6C319.2 151.1 319.2 148.3 321.8 146.4C322.8 145.7 324.9 144.7 328.9 144.3C337.1 143.4 347.6 145.3 355.9 147.5C364.4 149.7 373.2 144.7 375.5 136.1C377.7 127.6 372.7 118.8 364.1 116.5C360.7 115.6 356.6 114.7 352 113.8L352 104z"/>
</>],
['light',<>
	<path d="M136.5 445.5C144 450.2 146.2 460.1 141.5 467.6C136.8 475.1 126.9 477.3 119.5 472.6C47.71 427.3 0 347.2 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 347.2 464.3 427.3 392.5 472.6C385.1 477.3 375.2 475.1 370.5 467.6C365.8 460.1 367.1 450.2 375.5 445.5C438.3 405.8 480 335.8 480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256C32 335.8 73.69 405.8 136.5 445.5zM267.2 354.8C270.6 355.4 273.7 356.1 276.3 356.8C282.7 358.4 286.5 364.8 284.8 370.1C283.1 377.2 276.5 380.9 270.1 379.2C263.9 377.6 255.1 376.3 249.9 376.9C246.9 377.3 245.3 377.1 244.5 378.5C242.6 379.8 242.6 382.5 244.4 383.7C249.5 387.2 255.7 388.8 261.8 390.4C268.1 391.1 274.4 393.6 279.8 397.2C283.3 399.6 286.9 403 289 407.8C291.3 412.6 291.7 417.9 290.7 423.2C289.2 431.6 284.8 438.1 277.1 442.1C274.5 444.1 270.8 445.2 267.2 445.9V452.4C267.2 458.8 261.8 464 255.2 464C248.6 464 243.2 458.8 243.2 452.4V444.5C236.9 443.2 231.2 441.4 227.4 440.1C221.1 438.1 217.7 431.5 219.8 425.4C221.9 419.3 228.7 416 234.1 418.1C242.1 420.3 251.4 423.1 258.1 423.2C262.7 423.3 264.7 422.6 265.6 422.1C267.7 420.9 267.1 417.6 266 416.3C263.4 414.5 259.1 413.2 251.9 411.2L251.1 410.1C245.2 409.3 236.9 407 230.7 402.8C227.1 400.4 223.5 396.1 221.4 392.2C219.1 387.4 218.7 382.1 219.7 376.8C221 369.4 224.8 363.6 230.5 359.6C234.5 356.8 238.9 355.3 243.2 354.4V347.6C243.2 341.2 248.6 336 255.2 336C261.8 336 267.2 341.2 267.2 347.6L267.2 354.8zM128 288H384C401.1 288 417.2 302.3 415 321.7C410.2 365.6 387.6 404.1 354.7 429.9L350.5 433.3C342.3 478 303.1 512 256 512C208.9 512 169.7 478 161.6 433.3L157.3 429.9C124.4 404.1 101.8 365.6 96.97 321.7C94.83 302.3 110.9 288 128 288V288zM192 320V416C192 451.3 220.7 480 256 480C291.3 480 320 451.3 320 416V320H192zM160 388.7V320H128.1C132.2 346.1 143.4 369.9 160 388.7V388.7zM383 320H352V388.7C368.6 369.9 379.8 346.1 383 320zM192 113.8C196.6 114.7 200.7 115.6 204.1 116.5C212.7 118.8 217.7 127.6 215.5 136.1C213.2 144.7 204.4 149.7 195.9 147.5C187.6 145.3 177.1 143.4 168.9 144.3C164.9 144.7 162.8 145.7 161.8 146.4C159.2 148.3 159.2 151.1 161.6 153.6C168.4 158.4 176.6 160.6 184.9 162.7C193.2 164.9 201.6 167.2 208.7 172.1C213.5 175.5 218.2 180.1 221.1 186.7C224.1 193.4 224.6 200.6 223.4 207.9C221.4 219.4 215.5 228.3 206.4 233.8C201.8 236.6 196.8 238.2 192 239.1V247.1C192 256.8 184.8 263.1 176 263.1C167.2 263.1 160 256.8 160 247.1V237.2C151.6 235.3 144 232.9 138.1 231.2C130.6 228.4 126 219.3 128.8 210.9C131.6 202.6 140.7 198 149.1 200.8C158.5 203.1 170.9 207.8 181.1 207.9C186 207.1 188.7 207.1 189.8 206.4L189.9 206.4C192.6 204.8 193 200.2 190.4 198.4C186.1 195.1 181.2 194.1 171.6 191.4L170.5 191.1C162.6 188.8 151.6 185.7 143.3 179.9C138.5 176.5 133.8 171.9 130.9 165.3C127.9 158.6 127.4 151.4 128.6 144.1C130.4 133.1 135.5 125.9 143 120.5C148.4 116.6 154.3 114.5 160 113.3V103.1C160 95.16 167.2 87.1 176 87.1C184.8 87.1 192 95.16 192 103.1L192 113.8zM336 88C344.8 88 352 95.16 352 104V113.8C356.6 114.7 360.7 115.6 364.1 116.5C372.7 118.8 377.7 127.6 375.5 136.1C373.2 144.7 364.4 149.7 355.9 147.5C347.6 145.3 337.1 143.4 328.9 144.3C324.9 144.7 322.8 145.7 321.8 146.4C319.2 148.3 319.2 151.1 321.6 153.6C328.4 158.4 336.6 160.6 344.9 162.7C353.2 164.9 361.6 167.2 368.7 172.1C373.5 175.5 378.2 180.1 381.1 186.7C384.1 193.4 384.6 200.6 383.4 207.9C381.4 219.4 375.5 228.3 366.4 233.8C361.8 236.6 356.8 238.2 352 239.1V247.1C352 256.8 344.8 263.1 336 263.1C327.2 263.1 320 256.8 320 247.1V237.2C311.6 235.3 304 232.9 298.1 231.2C290.6 228.4 286 219.3 288.8 210.9C291.6 202.6 300.7 198 309.1 200.8C318.5 203.1 330.9 207.8 341.1 207.9C346 207.1 348.7 207.1 349.8 206.4L349.9 206.4C352.6 204.8 353 200.2 350.4 198.4C346.1 195.1 341.2 194.1 331.6 191.4L330.5 191.1C322.6 188.8 311.6 185.7 303.3 179.9C298.5 176.5 293.8 171.9 290.9 165.3C287.9 158.6 287.4 151.4 288.6 144.1C290.4 133.1 295.5 125.9 303 120.5C308.4 116.6 314.3 114.5 320 113.3V103.1C320 95.16 327.2 87.1 336 87.1L336 88z"/>
</>],
['regular',<>
	<path d="M192 129.8C196.6 130.7 200.7 131.6 204.1 132.5C212.7 134.8 217.7 143.6 215.5 152.1C213.2 160.7 204.4 165.7 195.9 163.5C187.6 161.3 177.1 159.4 168.9 160.3C164.9 160.7 162.8 161.7 161.8 162.4C159.2 164.3 159.2 167.1 161.6 169.6C168.4 174.4 176.6 176.6 184.9 178.7C193.2 180.9 201.6 183.2 208.7 188.1C213.5 191.5 218.2 196.1 221.1 202.7C224.1 209.4 224.6 216.6 223.4 223.9C221.4 235.4 215.5 244.3 206.4 249.8C201.8 252.6 196.8 254.2 192 255.1V263.1C192 272.8 184.8 279.1 176 279.1C167.2 279.1 160 272.8 160 263.1V253.2C151.6 251.3 144 248.9 138.1 247.2C130.6 244.4 126 235.3 128.8 226.9C131.6 218.6 140.7 214 149.1 216.8C158.5 219.1 170.9 223.8 181.1 223.9C186 223.1 188.7 223.1 189.8 222.4L189.9 222.4C192.6 220.8 193 216.2 190.4 214.4C186.1 211.1 181.2 210.1 171.6 207.4L170.5 207.1C162.6 204.8 151.6 201.7 143.3 195.9C138.5 192.5 133.8 187.9 130.9 181.3C127.9 174.6 127.4 167.4 128.6 160.1C130.4 149.1 135.5 141.9 143 136.5C148.4 132.6 154.3 130.5 160 129.3V119.1C160 111.2 167.2 103.1 176 103.1C184.8 103.1 192 111.2 192 119.1L192 129.8zM336 104C344.8 104 352 111.2 352 120V129.8C356.6 130.7 360.7 131.6 364.1 132.5C372.7 134.8 377.7 143.6 375.5 152.1C373.2 160.7 364.4 165.7 355.9 163.5C347.6 161.3 337.1 159.4 328.9 160.3C324.9 160.7 322.8 161.7 321.8 162.4C319.2 164.3 319.2 167.1 321.6 169.6C328.4 174.4 336.6 176.6 344.9 178.7C353.2 180.9 361.6 183.2 368.7 188.1C373.5 191.5 378.2 196.1 381.1 202.7C384.1 209.4 384.6 216.6 383.4 223.9C381.4 235.4 375.5 244.3 366.4 249.8C361.8 252.6 356.8 254.2 352 255.1V263.1C352 272.8 344.8 279.1 336 279.1C327.2 279.1 320 272.8 320 263.1V253.2C311.6 251.3 304 248.9 298.1 247.2C290.6 244.4 286 235.3 288.8 226.9C291.6 218.6 300.7 214 309.1 216.8C318.5 219.1 330.9 223.8 341.1 223.9C346 223.1 348.7 223.1 349.8 222.4L349.9 222.4C352.6 220.8 353 216.2 350.4 214.4C346.1 211.1 341.2 210.1 331.6 207.4L330.5 207.1C322.6 204.8 311.6 201.7 303.3 195.9C298.5 192.5 293.8 187.9 290.9 181.3C287.9 174.6 287.4 167.4 288.6 160.1C290.4 149.1 295.5 141.9 303 136.5C308.4 132.6 314.3 130.5 320 129.3V119.1C320 111.2 327.2 103.1 336 103.1L336 104zM267.2 362.8C270.6 363.4 273.7 364.1 276.3 364.8C282.7 366.4 286.5 372.8 284.8 378.1C283.1 385.2 276.5 388.9 270.1 387.2C263.9 385.6 255.1 384.3 249.9 384.9C246.9 385.3 245.3 385.1 244.5 386.5C242.6 387.8 242.6 390.5 244.4 391.7C249.5 395.2 255.7 396.8 261.8 398.4C268.1 399.1 274.4 401.6 279.8 405.2C283.3 407.6 286.9 411 289 415.8C291.3 420.6 291.7 425.9 290.7 431.2C289.2 439.6 284.8 446.1 277.1 450.1C274.5 452.1 270.8 453.2 267.2 453.9V460.4C267.2 466.8 261.8 472 255.2 472C248.6 472 243.2 466.8 243.2 460.4V452.5C236.9 451.2 231.2 449.4 227.4 448.1C221.1 446.1 217.7 439.5 219.8 433.4C221.9 427.3 228.7 424 234.1 426.1C242.1 428.3 251.4 431.1 258.1 431.2C262.7 431.3 264.7 430.6 265.6 430.1C267.7 428.9 267.1 425.6 266 424.3C263.4 422.5 259.1 421.2 251.9 419.2L251.1 418.1C245.2 417.3 236.9 415 230.7 410.8C227.1 408.4 223.5 404.1 221.4 400.2C219.1 395.4 218.7 390.1 219.7 384.8C221 377.4 224.8 371.6 230.5 367.6C234.5 364.8 238.9 363.3 243.2 362.4V355.6C243.2 349.2 248.6 344 255.2 344C261.8 344 267.2 349.2 267.2 355.6L267.2 362.8zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM348.3 442.4C416.9 408.4 464 337.7 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256C48 337.7 95.13 408.4 163.7 442.4C161.5 434.7 160.2 426.6 160 418.2C129.6 397 106.9 366.1 96.76 330.1C92.92 316.4 104.2 304 118.4 304H393.6C407.8 304 419.1 316.4 415.2 330.1C405.2 366.1 382.4 397 351.1 418.2C351.8 426.6 350.5 434.7 348.3 442.4H348.3zM303.9 458.5C309.4 452.2 313.7 444.9 316.5 436.9C318.8 430.4 320 423.3 320 416V336H192V416C192 423.3 193.2 430.3 195.5 436.9C198.3 444.9 202.6 452.2 208.1 458.5C219.8 471.7 236.9 480 256 480C275.1 480 292.2 471.7 303.9 458.5V458.5z"/>
</>],
['solid',<>
	<path d="M255.1 0C397.4 0 512 114.6 512 256C512 364.6 444.3 457.5 348.9 494.6C360.9 476.8 368 455.2 368 432V421.5C390.4 401.4 407 375.4 415.2 346.1C419.1 332.4 407.8 320 393.6 320H118.4C104.2 320 92.92 332.4 96.76 346.1C104.1 375.4 121.6 401.4 144 421.5V432C144 455.2 151.1 476.8 163.1 494.6C67.66 457.5 0 364.6 0 256C0 114.6 114.6 0 256 0H255.1zM192 104C192 95.16 184.8 88 176 88C167.2 88 160 95.16 160 104V113.3C154.3 114.5 148.4 116.6 143 120.5C135.5 125.9 130.4 133.1 128.6 144.1C127.4 151.4 127.9 158.6 130.9 165.3C133.8 171.9 138.5 176.5 143.3 179.9C151.6 185.7 162.6 188.8 170.5 191.1L171.6 191.4C181.2 194.1 186.1 195.1 190.4 198.4C193 200.2 192.6 204.8 189.9 206.4L189.8 206.4C188.7 207.1 186 207.1 181.1 207.9C170.9 207.8 158.5 203.1 149.1 200.8C140.7 198 131.6 202.6 128.8 210.9C126 219.3 130.6 228.4 138.9 231.2C144 232.9 151.6 235.3 160 237.2V248C160 256.8 167.2 264 176 264C184.8 264 192 256.8 192 248V239.1C196.8 238.2 201.8 236.6 206.4 233.8C215.5 228.3 221.4 219.4 223.4 207.9C224.6 200.6 224.1 193.4 221.1 186.7C218.2 180.1 213.5 175.5 208.7 172.1C201.6 167.2 193.2 164.9 184.8 162.7C176.6 160.6 168.4 158.4 161.6 153.6C159.2 151.1 159.2 148.3 161.8 146.4C162.8 145.7 164.9 144.7 168.9 144.3C177.1 143.4 187.6 145.3 195.9 147.5C204.4 149.7 213.2 144.7 215.5 136.1C217.7 127.6 212.7 118.8 204.1 116.5C200.7 115.6 196.6 114.7 192 113.8L192 104zM320 104V113.3C314.3 114.5 308.4 116.6 303 120.5C295.5 125.9 290.4 133.1 288.6 144.1C287.4 151.4 287.9 158.6 290.9 165.3C293.8 171.9 298.5 176.5 303.3 179.9C311.6 185.7 322.6 188.8 330.5 191.1L331.6 191.4C341.2 194.1 346.1 195.1 350.4 198.4C353 200.2 352.6 204.8 349.9 206.4L349.8 206.4C348.7 207.1 346 207.1 341.1 207.9C330.9 207.8 318.5 203.1 309.1 200.8C300.7 198 291.6 202.6 288.8 210.9C286 219.3 290.6 228.4 298.1 231.2C304 232.9 311.6 235.3 320 237.2V248C320 256.8 327.2 264 336 264C344.8 264 352 256.8 352 248V239.1C356.8 238.2 361.8 236.6 366.4 233.8C375.5 228.3 381.4 219.4 383.4 207.9C384.6 200.6 384.1 193.4 381.1 186.7C378.2 180.1 373.5 175.5 368.7 172.1C361.6 167.2 353.2 164.9 344.8 162.7C336.6 160.6 328.4 158.4 321.6 153.6C319.2 151.1 319.2 148.3 321.8 146.4C322.8 145.7 324.9 144.7 328.9 144.3C337.1 143.4 347.6 145.3 355.9 147.5C364.4 149.7 373.2 144.7 375.5 136.1C377.7 127.6 372.7 118.8 364.1 116.5C360.7 115.6 356.6 114.7 352 113.8V104C352 95.16 344.8 88 336 88C327.2 88 320 95.16 320 104L320 104zM336 352V432C336 476.2 300.2 512 255.1 512C211.8 512 175.1 476.2 175.1 432V352H336zM245.3 378.9V385.3C241.5 386.1 237.6 387.5 234 390.1C229 393.9 225.6 399.3 224.4 406.2C223.6 411.2 223.9 416.2 225.9 420.7C227.9 425.2 230.1 428.4 234.2 430.6C239.8 434.6 247.1 436.7 252.3 438.3L253.1 438.5C259.4 440.4 263.3 441.6 265.6 443.3C267.4 444.5 267.1 447.6 265.2 448.7C264.5 449.2 262.7 449.8 259.4 449.8C252.6 449.7 244.3 447.1 238 444.9C232.4 443 226.4 446.1 224.5 451.8C222.7 457.5 225.7 463.7 231.3 465.6C234.7 466.8 239.7 468.5 245.3 469.7V477.1C245.3 483.1 250.1 488 256 488C261.9 488 266.7 483.1 266.7 477.1V470.1C269.9 470.4 273.2 469.3 276.2 467.4C282.3 463.7 286.2 457.6 287.6 449.8C288.4 444.8 288.1 439.8 286.1 435.3C284.1 430.8 281 427.6 277.8 425.4C273.1 421.1 267.5 420.5 261.9 418.1C256.4 417.5 250.1 415.1 246.4 412.7C244.8 411.6 244.8 409.1 246.5 407.8C247.2 407.3 248.6 406.7 251.3 406.4C256.7 405.8 263.7 407 269.3 408.5C274.1 410.1 280.8 406.6 282.3 400.8C283.8 394.1 280.4 389 274.7 387.5C272.5 386.8 269.7 386.2 266.7 385.6V378.9C266.7 372.9 261.9 368 256 368C250.1 368 245.3 372.9 245.3 378.9L245.3 378.9z"/>
</>],
['thin',<>
	<path d="M256 16C123.5 16 16 123.5 16 256C16 341.5 60.68 416.5 128 459.1C131.7 461.4 132.9 466.4 130.5 470.1C128.1 473.8 123.2 474.9 119.5 472.6C47.69 427.3 0 347.2 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 347.2 464.3 427.3 392.5 472.6C388.8 474.9 383.9 473.8 381.5 470.1C379.1 466.4 380.3 461.4 383.1 459.1C451.3 416.5 496 341.5 496 256C496 123.5 388.5 16 255.1 16H256zM236.6 390.2C237 391.3 237.1 392.4 239.8 393.6C243.8 396.3 250.1 398.1 258.1 400.3L258.8 400.5C265.9 402.4 274.6 404.8 281.1 409.1C284.6 411.4 287.9 414.6 289.9 418.1C292 423.5 292.5 428.4 291.5 433.8C290 442.1 285.6 448.1 279.3 451.8C274.6 454.5 269.2 455.6 264 455.9V461.3C264 465.8 260.4 469.3 256 469.3C251.6 469.3 248 465.8 248 461.3V454.8C239.3 453.3 231 450.7 225.6 449C221.4 447.7 219 443.2 220.4 438.1C221.7 434.8 226.2 432.4 230.4 433.8C238.6 436.4 250.3 439.8 260.3 439.1C265.3 440.1 268.1 439.3 271.4 437.9C273.4 436.7 275.1 434.9 275.8 430.9C276.3 428.2 275.9 426.7 275.4 425.8C274.1 424.7 274 423.6 272.2 422.4C268.2 419.7 261.9 417.9 253.9 415.7L253.2 415.5C246.1 413.6 237.4 411.2 230.9 406.9C227.4 404.6 224.1 401.4 222.1 397C219.1 392.5 219.5 387.6 220.5 382.2C221.8 374.1 225.5 369.5 230.8 365.9C235.8 362.4 241.8 360.9 247.4 360.3L248 360.3V352C248 347.6 251.6 344 256 344C260.4 344 264 347.6 264 352V360.7C269.6 361.4 274.9 362.5 278.1 363.5C283.3 364.6 285.8 368.1 284.8 373.2C283.7 377.5 279.3 380.1 275 379C267.6 377.1 257.4 375.4 249.1 376.2C244.1 376.7 241.9 377.7 239.9 379.1C238.1 380.3 236.8 382 236.2 385.1C235.7 387.8 236.1 389.3 236.6 390.2V390.2zM384 304C396.1 304 408.6 314.7 407.1 328.8C402.5 370 381.6 406.2 350.9 430.8C343.8 476.8 304 512 256 512C208 512 168.2 476.8 161.1 430.8C130.4 406.2 109.5 370 104.9 328.8C103.4 314.7 115 304 128 304H384zM160 408.3V320H128C123.3 320 120.4 323.6 120.8 327.1C124.3 358.7 138.6 387 160 408.3zM176 320V416C176 460.2 211.8 496 256 496C300.2 496 336 460.2 336 416V320H176zM352 320V408.3C373.4 387 387.7 358.7 391.2 327.1C391.6 323.6 388.7 320 384 320H352zM176 93.33C180.4 93.33 184 96.92 184 101.3V112.6C184.1 112.8 185.1 112.9 186.1 113C190.9 113.6 202.6 115.8 206.8 116.9C211.1 118 213.7 122.4 212.5 126.7C211.4 130.9 207.1 133.5 202.8 132.4C199.3 131.5 188.2 129.4 184.6 128.9C173.5 127.2 163.9 128.5 157 131.5C150.2 134.5 146.8 138.9 145.1 143.4C145.3 147.3 145.8 149.8 146.7 151.7C147.7 153.6 149.4 155.6 152.3 157.5C158.4 161.5 167.5 164.2 178.4 167.4L178.5 167.4C188.6 170.4 200.4 173.8 208.1 179.9C213.5 183.1 217.5 187.2 219.9 192.7C222.4 198.3 223 204.5 221.8 211.4C219.7 223.4 211.6 231.5 201.1 235.9C195.1 238 190.2 239.3 184 239.8V250.7C184 255.1 180.4 258.7 176 258.7C171.6 258.7 168 255.1 168 250.7V239.4C167 239.2 166 239.1 165 238.1L164.1 238.1C157.9 237.8 146.5 234.1 139 231.6C137.6 231.1 136.2 230.6 135.1 230.3C130.9 228.9 128.6 224.4 129.1 220.2C131.3 215.1 135.9 213.7 140.1 215.1C141.5 215.5 143.1 216 144.7 216.6C152.3 219.1 161.9 222.3 167.4 223.1C178.7 224.9 188.3 223.9 194.1 221.1C201.5 218.4 205 214.2 206 208.6C206.8 204.3 206.3 201.4 205.3 199.3C204.3 197 202.6 194.1 199.7 192.1C193.7 188.7 184.7 185.9 173.9 182.7L172.5 182.3C162.8 179.5 151.7 176.2 143.5 170.8C138.1 167.9 134.9 163.1 132.3 158.7C129.7 153.3 129 147.2 130.2 140.6C132.2 129.3 140.4 121.3 150.6 116.8C155.8 114.5 161.7 113.1 168 112.5V101.3C168 96.92 171.6 93.33 176 93.33V93.33zM344 112.6C344.1 112.8 345.1 112.9 346.1 113C350.9 113.6 362.6 115.8 366.8 116.9C371.1 118 373.7 122.4 372.5 126.7C371.4 130.9 367.1 133.5 362.8 132.4C359.3 131.5 348.2 129.4 344.6 128.9C333.5 127.2 323.9 128.5 317 131.5C310.2 134.5 306.8 138.9 305.1 143.4C305.3 147.3 305.8 149.8 306.7 151.7C307.7 153.6 309.4 155.6 312.3 157.5C318.4 161.5 327.5 164.2 338.4 167.4L338.5 167.4C348.6 170.4 360.4 173.8 368.1 179.9C373.5 183.1 377.5 187.2 379.9 192.7C382.4 198.3 383 204.5 381.8 211.4C379.7 223.4 371.6 231.5 361.1 235.9C355.1 238 350.2 239.3 344 239.8V250.7C344 255.1 340.4 258.7 336 258.7C331.6 258.7 328 255.1 328 250.7V239.4C327 239.2 326 239.1 325 238.1L324.1 238.1C317.9 237.8 306.5 234.1 299 231.6C297.6 231.1 296.2 230.6 295.1 230.3C290.9 228.9 288.6 224.4 289.1 220.2C291.4 215.1 295.9 213.7 300.1 215.1C301.5 215.5 303.1 216 304.7 216.6C312.3 219.1 321.9 222.3 327.4 223.1C338.7 224.9 348.3 223.9 354.1 221.1C361.5 218.4 365 214.2 366 208.6C366.8 204.3 366.3 201.4 365.3 199.3C364.3 197.1 362.6 194.1 359.7 192.1C353.7 188.7 344.7 185.9 333.9 182.7L332.5 182.3C322.8 179.5 311.7 176.2 303.5 170.8C298.1 167.9 294.9 163.1 292.3 158.7C289.7 153.3 289 147.2 290.2 140.6C292.2 129.3 300.4 121.3 310.6 116.8C315.8 114.5 321.7 113.1 328 112.5V101.3C328 96.92 331.6 93.33 336 93.33C340.4 93.33 344 96.92 344 101.3L344 112.6z"/>
</>],

]);

const FaceTongueMoney: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FaceTongueMoney.displayName = "FaceTongueMoney";

export default FaceTongueMoney;
