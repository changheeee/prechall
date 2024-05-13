import UploadModal from "@/app/_components/UploadModal";
import { modalLayout } from "@/app/_styles/layout";

export default function page() {
    return (
        <div className={modalLayout}>
            <UploadModal />
        </div>
    )
}