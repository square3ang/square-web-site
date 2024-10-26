import Image from "next/image";

export default function TopBar() {
    return (
        <div className="p-6 fixed left-0 right-0 w-full text-white text-2xl bg-gradient-to-r from-gray-700 to-gray-900 shadow-2xl rounded-b-3xl">
            <Image src="/squaretransparent.png" alt="Square Logo" width={48} height={48} className="inline" style={{ "transform": "translateY(-2px)" }} /> |
            정사각형의 사이트
        </div>
    )
}