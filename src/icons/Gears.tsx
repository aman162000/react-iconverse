
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M314.7 110.3C318.4 119 315.5 128.1 308.5 135.3L286.3 155.1C287.4 161.9 288 168.9 288 175.1C288 183.1 287.4 190.1 286.3 196.9L308.5 216.7C315.5 223 318.4 232.1 314.7 241.7C312.4 246.1 309.9 252.2 307.1 257.2L304 262.6C300.1 267.6 297.7 272.4 294.2 277.1C288.5 284.7 278.5 287.2 269.5 284.2L241.2 274.9C230.5 283.8 218.3 290.9 205 295.9L198.1 324.9C197 334.2 189.8 341.6 180.4 342.8C173.7 343.6 166.9 344 160 344C153.1 344 146.3 343.6 139.6 342.8C130.2 341.6 122.1 334.2 121 324.9L114.1 295.9C101.7 290.9 89.5 283.8 78.75 274.9L50.53 284.2C41.54 287.2 31.52 284.7 25.82 277.1C22.28 272.4 18.98 267.5 15.94 262.5L12.92 257.2C10.13 252.2 7.592 247 5.324 241.7C1.62 232.1 4.458 223 11.52 216.7L33.7 196.9C32.58 190.1 31.1 183.1 31.1 175.1C31.1 168.9 32.58 161.9 33.7 155.1L11.52 135.3C4.458 128.1 1.62 119 5.324 110.3C7.592 104.1 10.13 99.79 12.91 94.76L15.95 89.51C18.98 84.46 22.28 79.58 25.82 74.89C31.52 67.34 41.54 64.83 50.53 67.79L78.75 77.09C89.5 68.25 101.7 61.13 114.1 56.15L121 27.08C122.1 17.8 130.2 10.37 139.6 9.231C146.3 8.418 153.1 8 160 8C166.9 8 173.7 8.418 180.4 9.23C189.8 10.37 197 17.8 198.1 27.08L205 56.15C218.3 61.13 230.5 68.25 241.2 77.09L269.5 67.79C278.5 64.83 288.5 67.34 294.2 74.89C297.7 79.56 300.1 84.42 304 89.44L307.1 94.83C309.9 99.84 312.4 105 314.7 110.3L314.7 110.3zM160 223.1C186.5 223.1 208 202.5 208 175.1C208 149.5 186.5 127.1 160 127.1C133.5 127.1 112 149.5 112 175.1C112 202.5 133.5 223.1 160 223.1z"/><path className="fa-secondary" d="M529.7 506.7C520.1 510.4 511 507.5 504.7 500.5L484.9 478.3C478.1 479.4 471.1 480 464 480C456.9 480 449.9 479.4 443.1 478.3L423.3 500.5C416.1 507.5 407 510.4 398.3 506.7C393 504.4 387.8 501.9 382.8 499.1L377.4 496C372.4 492.1 367.6 489.7 362.9 486.2C355.3 480.5 352.8 470.5 355.8 461.5L365.1 433.2C356.2 422.5 349.1 410.3 344.1 397L315.1 390.1C305.8 389 298.4 381.8 297.2 372.4C296.4 365.7 296 358.9 296 352C296 345.1 296.4 338.3 297.2 331.6C298.4 322.2 305.8 314.1 315.1 313L344.1 306.1C349.1 293.7 356.2 281.5 365.1 270.8L355.8 242.5C352.8 233.5 355.3 223.5 362.9 217.8C367.6 214.3 372.5 210.1 377.5 207.9L382.8 204.9C387.8 202.1 392.1 199.6 398.3 197.3C407 193.6 416.1 196.5 423.3 203.5L443.1 225.7C449.9 224.6 456.9 224 464 224C471.1 224 478.1 224.6 484.9 225.7L504.7 203.5C511 196.5 520.1 193.6 529.7 197.3C535 199.6 540.2 202.1 545.2 204.9L550.5 207.9C555.5 210.1 560.4 214.3 565.1 217.8C572.7 223.5 575.2 233.5 572.2 242.5L562.9 270.8C571.8 281.5 578.9 293.7 583.9 306.1L612.9 313C622.2 314.1 629.6 322.2 630.8 331.6C631.6 338.3 632 345.1 632 352C632 358.9 631.6 365.7 630.8 372.4C629.6 381.8 622.2 389 612.9 390.1L583.9 397C578.9 410.3 571.8 422.5 562.9 433.2L572.2 461.5C575.2 470.5 572.7 480.5 565.1 486.2C560.4 489.7 555.6 492.1 550.6 496L545.2 499.1C540.2 501.9 534.1 504.4 529.7 506.7H529.7zM416 352C416 378.5 437.5 400 464 400C490.5 400 512 378.5 512 352C512 325.5 490.5 304 464 304C437.5 304 416 325.5 416 352z"/>
</>],
['light',<>
	<path d="M103.1 176C103.1 145.1 129.1 120 159.1 120C190.9 120 215.1 145.1 215.1 176C215.1 206.9 190.9 232 159.1 232C129.1 232 103.1 206.9 103.1 176zM159.1 152C146.7 152 135.1 162.7 135.1 176C135.1 189.3 146.7 200 159.1 200C173.3 200 183.1 189.3 183.1 176C183.1 162.7 173.3 152 159.1 152zM213.9 51.16C223.4 55.3 232.4 60.5 240.6 66.61L267.7 58.52C273.2 56.85 279.3 58.3 283.3 62.62C299.5 80.44 311.9 101.8 319.3 125.4C321.1 130.9 319.3 136.9 315.1 140.9L294.1 160C295.7 165.5 295.1 171.1 295.1 176.8C295.1 181.1 295.7 187.1 295.2 192.1L315.1 211.1C319.3 215.1 321.1 221.1 319.3 226.6C311.9 250.2 299.5 271.6 283.3 289.4C279.3 293.7 273.2 295.2 267.7 293.5L242.1 285.8C233.3 292.5 223.7 298.1 213.5 302.6L207.3 328.6C205.1 334.3 201.7 338.8 196 340.1C184.4 342.6 172.4 344 159.1 344C147.6 344 135.6 342.6 123.1 340.1C118.3 338.8 114 334.3 112.7 328.6L106.5 302.6C96.26 298.1 86.67 292.5 77.91 285.8L52.34 293.5C46.75 295.2 40.65 293.7 36.73 289.4C20.5 271.6 8.055 250.2 .6513 226.6C-1.078 221.1 .6929 215.1 4.879 211.1L24.85 192.1C24.29 187.1 24 181.1 24 176.8C24 171.1 24.34 165.5 25.01 160L4.879 140.9C.6936 136.9-1.077 130.9 .652 125.4C8.056 101.8 20.51 80.44 36.73 62.62C40.65 58.3 46.75 56.85 52.34 58.52L79.38 66.61C87.62 60.5 96.57 55.3 106.1 51.17L112.7 23.36C114 17.71 118.3 13.17 123.1 11.91C135.6 9.35 147.6 8 159.1 8C172.4 8 184.4 9.35 196 11.91C201.7 13.16 205.1 17.71 207.3 23.36L213.9 51.16zM58.71 147.9L56.78 163.9C56.26 168.1 55.1 172.4 55.1 176.8C55.1 180.8 56.22 184.7 56.65 188.6L58.4 204.4L34.72 226.9C39.47 238.8 45.84 249.8 53.55 259.7L84.35 250.5L97.31 260.4C104 265.5 111.4 269.8 119.2 273.2L133.9 279.5L141.3 310.7C147.4 311.6 153.6 312 159.1 312C166.3 312 172.6 311.6 178.7 310.7L186.1 279.5L200.8 273.2C208.6 269.8 215.1 265.5 222.7 260.4L235.7 250.5L266.4 259.7C274.2 249.8 280.5 238.8 285.3 226.9L261.6 204.4L263.3 188.6C263.8 184.7 263.1 180.8 263.1 176.8C263.1 172.4 263.7 168.1 263.2 163.9L261.3 147.9L285.3 125.1C280.5 113.2 274.2 102.2 266.4 92.29L234.4 101.9L221.6 92.32C215.2 87.64 208.4 83.67 201.1 80.51L186.5 74.13L178.7 41.29C172.6 40.44 166.3 40 159.1 40C153.6 40 147.4 40.44 141.3 41.29L133.5 74.13L118.8 80.51C111.6 83.67 104.7 87.64 98.44 92.32L85.56 101.9L53.55 92.29C45.84 102.2 39.47 113.2 34.72 125.1L58.71 147.9zM464 296C494.9 296 520 321.1 520 352C520 382.9 494.9 408 464 408C433.1 408 408 382.9 408 352C408 321.1 433.1 296 464 296V296zM488 352C488 338.7 477.3 328 464 328C450.7 328 440 338.7 440 352C440 365.3 450.7 376 464 376C477.3 376 488 365.3 488 352zM588.8 405.9C584.7 415.4 579.5 424.4 573.4 432.6L581.5 459.7C583.2 465.2 581.7 471.3 577.4 475.3C559.6 491.5 538.2 503.9 514.6 511.3C509.1 513.1 503.1 511.3 499.1 507.1L479.1 486.1C474.5 487.7 468.9 488 463.2 488C458 488 452.9 487.7 447.9 487.2L428.9 507.1C424.9 511.3 418.9 513.1 413.4 511.3C389.8 503.9 368.4 491.5 350.6 475.3C346.3 471.4 344.9 465.2 346.5 459.7L354.2 434.1C347.5 425.3 341.9 415.7 337.4 405.5L311.4 399.3C305.7 397.1 301.2 393.7 299.9 388C297.4 376.4 296 364.4 296 352C296 339.6 297.4 327.6 299.9 315.1C301.2 310.3 305.7 306 311.4 304.7L337.4 298.5C341.9 288.3 347.5 278.7 354.2 269.9L346.5 244.3C344.9 238.8 346.3 232.7 350.6 228.7C368.4 212.5 389.8 200.1 413.4 192.7C418.9 190.9 424.9 192.7 428.9 196.9L447.9 216.9C452.9 216.3 458 216 463.2 216C468.9 216 474.5 216.3 479.1 217L499.1 196.9C503.1 192.7 509.1 190.9 514.6 192.7C538.2 200.1 559.6 212.5 577.4 228.7C581.7 232.7 583.2 238.8 581.5 244.3L573.4 271.4C579.5 279.6 584.7 288.6 588.8 298.1L616.6 304.7C622.3 306 626.8 310.3 628.1 315.1C630.7 327.6 632 339.6 632 352C632 364.4 630.7 376.4 628.1 388C626.8 393.7 622.3 397.1 616.6 399.3L588.8 405.9zM492.1 250.7L476.1 248.8C471.9 248.3 467.6 248 463.2 248C459.2 248 455.3 248.2 451.4 248.7L435.6 250.4L413.1 226.7C401.2 231.5 390.2 237.8 380.3 245.6L389.5 276.4L379.6 289.3C374.5 296 370.2 303.4 366.8 311.2L360.5 325.9L329.3 333.3C328.4 339.4 328 345.7 328 352C328 358.3 328.4 364.6 329.3 370.7L360.5 378.1L366.8 392.8C370.2 400.6 374.5 407.1 379.6 414.7L389.5 427.7L380.3 458.4C390.2 466.2 401.2 472.5 413.1 477.3L435.6 453.6L451.4 455.4C455.3 455.8 459.2 456 463.2 456C467.6 456 471.9 455.7 476.1 455.2L492.1 453.3L514.9 477.3C526.8 472.5 537.8 466.2 547.7 458.4L538.1 426.4L547.7 413.6C552.4 407.3 556.3 400.4 559.5 393.1L565.9 378.5L598.7 370.7C599.6 364.6 600 358.3 600 352C600 345.7 599.6 339.4 598.7 333.3L565.9 325.5L559.5 310.9C556.3 303.6 552.4 296.8 547.7 290.4L538.1 277.6L547.7 245.6C537.8 237.8 526.8 231.5 514.9 226.7L492.1 250.7z"/>
</>],
['regular',<>
	<path d="M119.1 176C119.1 153.9 137.9 136 159.1 136C182.1 136 199.1 153.9 199.1 176C199.1 198.1 182.1 216 159.1 216C137.9 216 119.1 198.1 119.1 176zM207.3 23.36L213.9 51.16C223.4 55.3 232.4 60.5 240.6 66.61L267.7 58.52C273.2 56.85 279.3 58.3 283.3 62.62C299.5 80.44 311.9 101.8 319.3 125.4C321.1 130.9 319.3 136.9 315.1 140.9L294.1 160C295.7 165.5 295.1 171.1 295.1 176.8C295.1 181.1 295.7 187.1 295.2 192.1L315.1 211.1C319.3 215.1 321.1 221.1 319.3 226.6C311.9 250.2 299.5 271.6 283.3 289.4C279.3 293.7 273.2 295.2 267.7 293.5L242.1 285.8C233.3 292.5 223.7 298.1 213.5 302.6L207.3 328.6C205.1 334.3 201.7 338.8 196 340.1C184.4 342.6 172.4 344 159.1 344C147.6 344 135.6 342.6 123.1 340.1C118.3 338.8 114 334.3 112.7 328.6L106.5 302.6C96.26 298.1 86.67 292.5 77.91 285.8L52.34 293.5C46.75 295.2 40.65 293.7 36.73 289.4C20.5 271.6 8.055 250.2 .6513 226.6C-1.078 221.1 .6929 215.1 4.879 211.1L24.85 192.1C24.29 187.1 24 181.1 24 176.8C24 171.1 24.34 165.5 25.01 160L4.879 140.9C.6936 136.9-1.077 130.9 .652 125.4C8.056 101.8 20.51 80.44 36.73 62.62C40.65 58.3 46.75 56.85 52.34 58.52L79.38 66.61C87.62 60.5 96.57 55.3 106.1 51.17L112.7 23.36C114 17.71 118.3 13.17 123.1 11.91C135.6 9.35 147.6 8 159.1 8C172.4 8 184.4 9.35 196 11.91C201.7 13.16 205.1 17.71 207.3 23.36L207.3 23.36zM63.1 176.8C63.1 180.5 64.21 184.1 64.6 187.7L66.79 207.4L44.25 228.9C47.68 236.5 51.84 243.7 56.63 250.4L85.96 241.7L102.2 254C108.4 258.7 115.1 262.7 122.3 265.8L140.8 273.8L147.8 303.4C151.8 303.8 155.9 304 159.1 304C164.1 304 168.2 303.8 172.2 303.4L179.2 273.8L197.7 265.8C204.9 262.7 211.6 258.7 217.8 254L234 241.7L263.4 250.4C268.2 243.7 272.3 236.5 275.7 228.9L253.2 207.4L255.4 187.7C255.8 184.1 255.1 180.5 255.1 176.8C255.1 172.7 255.8 168.7 255.3 164.8L252.9 144.9L275.7 123.1C272.3 115.5 268.2 108.3 263.4 101.6L232.9 110.7L216.8 98.74C210.1 94.42 204.7 90.76 197.1 87.85L179.6 79.87L172.2 48.58C168.2 48.2 164.1 48 159.1 48C155.9 48 151.8 48.2 147.8 48.58L140.4 79.87L122 87.85C115.3 90.76 109 94.42 103.2 98.74L87.1 110.7L56.63 101.6C51.84 108.3 47.68 115.5 44.25 123.1L67.14 144.9L64.72 164.8C64.25 168.7 63.1 172.7 63.1 176.8L63.1 176.8zM464 312C486.1 312 504 329.9 504 352C504 374.1 486.1 392 464 392C441.9 392 424 374.1 424 352C424 329.9 441.9 312 464 312zM581.5 244.3L573.4 271.4C579.5 279.6 584.7 288.6 588.8 298.1L616.6 304.7C622.3 306 626.8 310.3 628.1 315.1C630.6 327.6 632 339.6 632 352C632 364.4 630.6 376.4 628.1 388C626.8 393.7 622.3 397.1 616.6 399.3L588.8 405.9C584.7 415.4 579.5 424.4 573.4 432.6L581.5 459.7C583.2 465.3 581.7 471.4 577.4 475.3C559.6 491.5 538.2 503.9 514.6 511.4C509.1 513.1 503.1 511.3 499.1 507.1L479.1 486.1C474.5 487.7 468.9 488 463.2 488C458 488 452.9 487.7 447.9 487.2L428.9 507.1C424.9 511.3 418.9 513.1 413.4 511.4C389.8 503.9 368.4 491.5 350.6 475.3C346.3 471.4 344.8 465.3 346.5 459.7L354.2 434.1C347.5 425.3 341.9 415.7 337.4 405.5L311.4 399.3C305.7 397.1 301.2 393.7 299.9 388C297.3 376.4 295.1 364.4 295.1 352C295.1 339.6 297.4 327.6 299.9 315.1C301.2 310.3 305.7 306 311.4 304.7L337.4 298.5C341.9 288.3 347.5 278.7 354.2 269.9L346.5 244.3C344.8 238.8 346.3 232.7 350.6 228.7C368.4 212.5 389.8 200.1 413.4 192.7C418.9 190.9 424.9 192.7 428.9 196.9L447.9 216.9C452.9 216.3 458 216 463.2 216C468.9 216 474.5 216.4 479.1 217L499.1 196.9C503.1 192.7 509.1 190.9 514.6 192.7C538.2 200.1 559.6 212.5 577.4 228.7C581.7 232.7 583.2 238.8 581.5 244.3V244.3zM463.2 256C459.5 256 455.9 256.2 452.3 256.6L432.6 258.8L411.1 236.3C403.5 239.7 396.3 243.8 389.6 248.6L398.3 277.1L385.1 294.2C381.3 300.4 377.3 307.1 374.2 314.3L366.2 332.8L336.6 339.8C336.2 343.8 336 347.9 336 352C336 356.1 336.2 360.2 336.6 364.2L366.2 371.2L374.2 389.7C377.3 396.9 381.3 403.6 385.1 409.8L398.3 426L389.6 455.4C396.3 460.2 403.5 464.3 411.1 467.8L432.6 445.2L452.3 447.4C455.9 447.8 459.5 448 463.2 448C467.3 448 471.3 447.8 475.2 447.3L495.1 444.9L516.9 467.8C524.5 464.3 531.7 460.2 538.4 455.4L529.3 424.9L541.3 408.8C545.6 402.1 549.2 396.7 552.2 389.1L560.1 371.6L591.4 364.2C591.8 360.2 592 356.1 592 352C592 347.9 591.8 343.8 591.4 339.8L560.1 332.4L552.2 314C549.2 307.4 545.6 301 541.3 295.2L529.3 279.1L538.4 248.6C531.7 243.8 524.5 239.7 516.9 236.3L495.1 259.1L475.2 256.7C471.3 256.3 467.3 256 463.2 256V256z"/>
</>],
['solid',<>
	<path d="M286.3 155.1C287.4 161.9 288 168.9 288 175.1C288 183.1 287.4 190.1 286.3 196.9L308.5 216.7C315.5 223 318.4 232.1 314.7 241.7C312.4 246.1 309.9 252.2 307.1 257.2L304 262.6C300.1 267.6 297.7 272.4 294.2 277.1C288.5 284.7 278.5 287.2 269.5 284.2L241.2 274.9C230.5 283.8 218.3 290.9 205 295.9L198.1 324.9C197 334.2 189.8 341.6 180.4 342.8C173.7 343.6 166.9 344 160 344C153.1 344 146.3 343.6 139.6 342.8C130.2 341.6 122.1 334.2 121 324.9L114.1 295.9C101.7 290.9 89.5 283.8 78.75 274.9L50.53 284.2C41.54 287.2 31.52 284.7 25.82 277.1C22.28 272.4 18.98 267.5 15.94 262.5L12.92 257.2C10.13 252.2 7.592 247 5.324 241.7C1.62 232.1 4.458 223 11.52 216.7L33.7 196.9C32.58 190.1 31.1 183.1 31.1 175.1C31.1 168.9 32.58 161.9 33.7 155.1L11.52 135.3C4.458 128.1 1.62 119 5.324 110.3C7.592 104.1 10.13 99.79 12.91 94.76L15.95 89.51C18.98 84.46 22.28 79.58 25.82 74.89C31.52 67.34 41.54 64.83 50.53 67.79L78.75 77.09C89.5 68.25 101.7 61.13 114.1 56.15L121 27.08C122.1 17.8 130.2 10.37 139.6 9.231C146.3 8.418 153.1 8 160 8C166.9 8 173.7 8.418 180.4 9.23C189.8 10.37 197 17.8 198.1 27.08L205 56.15C218.3 61.13 230.5 68.25 241.2 77.09L269.5 67.79C278.5 64.83 288.5 67.34 294.2 74.89C297.7 79.56 300.1 84.42 304 89.44L307.1 94.83C309.9 99.84 312.4 105 314.7 110.3C318.4 119 315.5 128.1 308.5 135.3L286.3 155.1zM160 127.1C133.5 127.1 112 149.5 112 175.1C112 202.5 133.5 223.1 160 223.1C186.5 223.1 208 202.5 208 175.1C208 149.5 186.5 127.1 160 127.1zM484.9 478.3C478.1 479.4 471.1 480 464 480C456.9 480 449.9 479.4 443.1 478.3L423.3 500.5C416.1 507.5 407 510.4 398.3 506.7C393 504.4 387.8 501.9 382.8 499.1L377.4 496C372.4 492.1 367.6 489.7 362.9 486.2C355.3 480.5 352.8 470.5 355.8 461.5L365.1 433.2C356.2 422.5 349.1 410.3 344.1 397L315.1 390.1C305.8 389 298.4 381.8 297.2 372.4C296.4 365.7 296 358.9 296 352C296 345.1 296.4 338.3 297.2 331.6C298.4 322.2 305.8 314.1 315.1 313L344.1 306.1C349.1 293.7 356.2 281.5 365.1 270.8L355.8 242.5C352.8 233.5 355.3 223.5 362.9 217.8C367.6 214.3 372.5 210.1 377.5 207.9L382.8 204.9C387.8 202.1 392.1 199.6 398.3 197.3C407 193.6 416.1 196.5 423.3 203.5L443.1 225.7C449.9 224.6 456.9 224 464 224C471.1 224 478.1 224.6 484.9 225.7L504.7 203.5C511 196.5 520.1 193.6 529.7 197.3C535 199.6 540.2 202.1 545.2 204.9L550.5 207.9C555.5 210.1 560.4 214.3 565.1 217.8C572.7 223.5 575.2 233.5 572.2 242.5L562.9 270.8C571.8 281.5 578.9 293.7 583.9 306.1L612.9 313C622.2 314.1 629.6 322.2 630.8 331.6C631.6 338.3 632 345.1 632 352C632 358.9 631.6 365.7 630.8 372.4C629.6 381.8 622.2 389 612.9 390.1L583.9 397C578.9 410.3 571.8 422.5 562.9 433.2L572.2 461.5C575.2 470.5 572.7 480.5 565.1 486.2C560.4 489.7 555.6 492.1 550.6 496L545.2 499.1C540.2 501.9 534.1 504.4 529.7 506.7C520.1 510.4 511 507.5 504.7 500.5L484.9 478.3zM512 352C512 325.5 490.5 304 464 304C437.5 304 416 325.5 416 352C416 378.5 437.5 400 464 400C490.5 400 512 378.5 512 352z"/>
</>],
['thin',<>
	<path d="M104 175.1C104 145.1 129.1 119.1 160 119.1C190.9 119.1 216 145.1 216 175.1C216 206.9 190.9 231.1 160 231.1C129.1 231.1 104 206.9 104 175.1zM160 135.1C137.9 135.1 120 153.9 120 175.1C120 198.1 137.9 215.1 160 215.1C182.1 215.1 200 198.1 200 175.1C200 153.9 182.1 135.1 160 135.1zM180.4 9.23C189.8 10.37 197 17.8 198.1 27.08L205 56.14C218.3 61.13 230.5 68.25 241.2 77.09L269.5 67.79C278.5 64.83 288.5 67.34 294.2 74.89C297.7 79.56 300.1 84.42 304 89.44L307.1 94.83C309.9 99.84 312.4 105 314.7 110.3C318.4 119 315.5 128.1 308.5 135.3L286.3 155.1C287.4 161.9 288 168.9 288 175.1C288 183.1 287.4 190.1 286.3 196.9L308.5 216.7C315.5 223 318.4 232.1 314.7 241.7C312.4 246.1 309.9 252.2 307.1 257.2L304 262.6C300.1 267.6 297.7 272.4 294.2 277.1C288.5 284.7 278.5 287.2 269.5 284.2L241.2 274.9C230.5 283.8 218.3 290.9 205 295.9L198.1 324.9C197 334.2 189.8 341.6 180.4 342.8C173.7 343.6 166.9 344 160 344C153.1 344 146.3 343.6 139.6 342.8C130.2 341.6 122.1 334.2 121 324.9L114.1 295.9C101.7 290.9 89.5 283.8 78.75 274.9L50.53 284.2C41.54 287.2 31.52 284.7 25.82 277.1C22.28 272.4 18.98 267.5 15.94 262.5L12.92 257.2C10.13 252.2 7.592 247 5.324 241.7C1.62 232.1 4.458 223 11.52 216.7L33.7 196.9C32.58 190.1 31.1 183.1 31.1 175.1C31.1 168.9 32.58 161.9 33.7 155.1L11.52 135.3C4.458 128.1 1.62 119 5.324 110.3C7.592 104.1 10.13 99.79 12.91 94.76L15.95 89.51C18.98 84.46 22.28 79.58 25.82 74.89C31.52 67.34 41.54 64.83 50.53 67.79L78.75 77.09C89.5 68.25 101.7 61.13 114.1 56.15L121 27.08C122.1 17.8 130.2 10.37 139.6 9.231C146.3 8.418 153.1 8 160 8C166.9 8 173.7 8.418 180.4 9.23V9.23zM160 23.1C153.7 23.1 147.6 24.38 141.5 25.11C139.7 25.33 137.4 26.9 136.7 30.34L128.8 68.03L120.6 71.12C109 75.48 98.33 81.71 88.92 89.44L82.11 95.04L45.52 82.99C42.2 81.89 39.66 83.12 38.59 84.53C35.42 88.74 32.46 93.11 29.73 97.64L26.84 102.6C24.35 107.1 22.08 111.8 20.05 116.6C19.36 118.2 19.56 120.1 22.18 123.3L50.91 149L49.49 157.7C48.51 163.6 48 169.7 48 176C48 182.3 48.51 188.4 49.49 194.3L50.91 202.1L22.18 228.7C19.56 231 19.36 233.8 20.05 235.4C22.08 240.2 24.35 244.9 26.85 249.4L29.73 254.4C32.46 258.9 35.42 263.3 38.59 267.5C39.66 268.9 42.2 270.1 45.52 269L82.11 256.1L88.92 262.6C98.33 270.3 109 276.5 120.6 280.9L128.8 283.1L136.7 321.7C137.4 325.1 139.7 326.7 141.5 326.9C147.6 327.6 153.7 328 160 328C166.3 328 172.4 327.6 178.5 326.9C180.3 326.7 182.6 325.1 183.3 321.7L191.2 283.1L199.4 280.9C210.1 276.5 221.7 270.3 231.1 262.6L237.9 256.1L274.5 269C277.8 270.1 280.3 268.9 281.4 267.5C284.6 263.3 287.5 258.9 290.2 254.4L293.2 249.3C295.7 244.8 297.9 240.2 299.1 235.4C300.6 233.8 300.4 231 297.8 228.7L269.1 202.1L270.5 194.3C271.5 188.4 272 182.3 272 176C272 169.7 271.5 163.6 270.5 157.7L269.1 149L297.8 123.3C300.4 120.1 300.6 118.2 299.1 116.6C297.9 111.8 295.7 107.2 293.2 102.7L290.2 97.58C287.5 93.07 284.6 88.72 281.4 84.53C280.3 83.12 277.8 81.89 274.5 82.99L237.9 95.04L231.1 89.45C221.7 81.71 210.1 75.48 199.4 71.12L191.2 68.03L183.3 30.34C182.6 26.9 180.3 25.33 178.5 25.11C172.4 24.38 166.3 24 160 24V23.1zM464 408C433.1 408 408 382.9 408 352C408 321.1 433.1 296 464 296C494.9 296 520 321.1 520 352C520 382.9 494.9 408 464 408zM424 352C424 374.1 441.9 392 464 392C486.1 392 504 374.1 504 352C504 329.9 486.1 312 464 312C441.9 312 424 329.9 424 352zM545.2 499.1C540.2 501.9 534.1 504.4 529.7 506.7C520.1 510.4 511 507.5 504.7 500.5L484.9 478.3C478.1 479.4 471.1 480 464 480C456.9 480 449.9 479.4 443.1 478.3L423.3 500.5C416.1 507.5 407 510.4 398.3 506.7C393 504.4 387.8 501.9 382.8 499.1L377.4 496C372.4 492.1 367.6 489.7 362.9 486.2C355.3 480.5 352.8 470.5 355.8 461.5L365.1 433.2C356.2 422.5 349.1 410.3 344.1 397L315.1 390.1C305.8 389 298.4 381.8 297.2 372.4C296.4 365.7 296 358.9 296 352C296 345.1 296.4 338.3 297.2 331.6C298.4 322.2 305.8 314.1 315.1 313L344.1 306.1C349.1 293.7 356.2 281.5 365.1 270.8L355.8 242.5C352.8 233.5 355.3 223.5 362.9 217.8C367.6 214.3 372.5 210.1 377.5 207.9L382.8 204.9C387.8 202.1 392.1 199.6 398.3 197.3C407 193.6 416.1 196.5 423.3 203.5L443.1 225.7C449.9 224.6 456.9 224 464 224C471.1 224 478.1 224.6 484.9 225.7L504.7 203.5C511 196.5 520.1 193.6 529.7 197.3C535 199.6 540.2 202.1 545.2 204.9L550.5 207.9C555.5 210.1 560.4 214.3 565.1 217.8C572.7 223.5 575.2 233.5 572.2 242.5L562.9 270.8C571.8 281.5 578.9 293.7 583.9 306.1L612.9 313C622.2 314.1 629.6 322.2 630.8 331.6C631.6 338.3 632 345.1 632 352C632 358.9 631.6 365.7 630.8 372.4C629.6 381.8 622.2 389 612.9 390.1L583.9 397C578.9 410.3 571.8 422.5 562.9 433.2L572.2 461.5C575.2 470.5 572.7 480.5 565.1 486.2C560.4 489.7 555.6 492.1 550.6 496L545.2 499.1zM390.7 485.2C395.2 487.7 399.8 489.9 404.6 491.1C406.2 492.6 408.1 492.4 411.3 489.8L437 461.1L445.7 462.5C451.6 463.5 457.8 464 464 464C470.2 464 476.4 463.5 482.3 462.5L490.1 461.1L516.7 489.8C519 492.4 521.8 492.6 523.4 491.1C528.2 489.9 532.8 487.7 537.3 485.2L542.4 482.2C546.9 479.5 551.3 476.6 555.5 473.4C556.9 472.3 558.1 469.8 557 466.5L544.1 429.9L550.6 423.1C558.3 413.7 564.5 402.1 568.9 391.4L571.1 383.2L609.7 375.3C613.1 374.6 614.7 372.3 614.9 370.5C615.6 364.5 616 358.3 616 352C616 345.7 615.6 339.6 614.9 333.5C614.7 331.7 613.1 329.4 609.7 328.7L571.1 320.8L568.9 312.6C564.5 301 558.3 290.3 550.6 280.9L544.1 274.1L557 237.5C558.1 234.2 556.9 231.7 555.5 230.6C551.3 227.4 546.9 224.5 542.4 221.7L537.4 218.8C532.9 216.4 528.2 214.1 523.4 212C521.8 211.4 518.1 211.6 516.7 214.2L490.1 242.9L482.3 241.5C476.4 240.5 470.2 240 464 240C457.7 240 451.6 240.5 445.7 241.5L437 242.9L411.3 214.2C408.1 211.6 406.2 211.4 404.6 212C399.8 214.1 395.1 216.4 390.6 218.8L385.6 221.7C381.1 224.5 376.7 227.4 372.5 230.6C371.1 231.7 369.9 234.2 370.1 237.5L383 274.1L377.4 280.9C369.7 290.3 363.5 301 359.1 312.6L356 320.8L318.3 328.7C314.9 329.4 313.3 331.7 313.1 333.5C312.4 339.6 311.1 345.7 311.1 352C311.1 358.3 312.4 364.5 313.1 370.5C313.3 372.3 314.9 374.6 318.3 375.3L356 383.2L359.1 391.4C363.5 402.1 369.7 413.7 377.4 423.1L383 429.9L370.1 466.5C369.9 469.8 371.1 472.3 372.5 473.4C376.7 476.6 381.1 479.5 385.6 482.2L390.7 485.2z"/>
</>],

]);

const Gears: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Gears.displayName = "Gears";

export default Gears;
