import ClearHistoryModal from "./_components/ClearHistoryModal";
import { modalLayout } from "@/app/_styles/modalStyle";

export default function page() {
    return (
        <div className={modalLayout}>
            <ClearHistoryModal />
        </div>
    )
}

