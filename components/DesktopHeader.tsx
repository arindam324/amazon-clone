import Image from "next/image";
import router from "next/router";

const DesktopHeader = () => {
    return (
        <div>
            <div>
                <div onClick={() => router.push("/")} className="w-24 h-7 relative">
                    <Image
                        fill
                        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt=""
                    />
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default DesktopHeader